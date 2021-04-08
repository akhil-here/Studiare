const express = require ('express');
const router = express.Router ();
const mongoose = require ('mongoose');
const creatingCourse = require ('../middleware/creatingCourse');
const Courses = mongoose.model ('Courses');
// const requireLogin = require ('../middleware/requireLogin');

router.post ('/createcourse', creatingCourse, (req, res) => {
  const {course_name, price} = req.body;
  if (!course_name || !price) {
    return res.status (422).json ({error: 'Please add all the fields!!'});
  }
  req.user.password = undefined;
  const course = new Courses ({
    course_name,
    price,
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

module.exports = router;
