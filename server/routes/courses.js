const express = require ('express');
const router = express.Router ();
const mongoose = require ('mongoose');
const creatingCourse = require ('../middleware/creatingCourse');
const Courses = mongoose.model ('Courses');
const requireLogin = require ('../middleware/requireLogin');

router.post ('/createcourse', (req, res) => {
  const {
    category,
    course_name,
    no_of_hours,
    price,
    certificate,
    pre_req,
    learning_objectives,
    course_photo,
  } = req.body;
  if (
    !category ||
    !course_name ||
    !no_of_hours ||
    !price ||
    !certificate ||
    !pre_req ||
    !learning_objectives ||
    !course_photo
  ) {
    return res.status (422).json ({error: 'Please add all the fields!!'});
  }
  req.user.password = undefined;
  const course = new Courses ({
    category,
    course_name,
    no_of_hours,
    price,
    certificate,
    pre_req,
    learning_objectives,
    course_photo,
    teacher_name: req.user,
  });
  course
    .save ()
    .then (result => {
      res.json ({course: result});
    })
    .catch (err => {
      console.log (err);
    });
});

router.get ('/allcourses', requireLogin, (req, res) => {
  Courses.find ()
    .populate ('teacher_name', '_id name')
    // .populate("comments.postedBy", "_id name")
    .then (posts => {
      res.json ({posts});
    })
    .catch (err => {
      console.log (err);
    });
});

module.exports = router;
