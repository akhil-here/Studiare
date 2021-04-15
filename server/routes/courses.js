const express = require ('express');
const router = express.Router ();
const mongoose = require ('mongoose');
const Courses = mongoose.model ('Courses');
const User = mongoose.model ('User');
const jwt = require ('jsonwebtoken');
const {JWT_SECRET} = require ('../keys');
const requireLogin = require ('../middleware/requireLogin');

const isVerified = (req, res, next) => {
  const {authorization} = req.headers;
  const token = authorization.replace ('Bearer ', '');
  console.log (token);
  jwt.verify (token, JWT_SECRET, (err, payload) => {
    const {_id} = payload;
    // console.log (payload);
    User.findById (_id).then (userdata => {
      if (userdata.role == 'Teacher') {
        console.log ('teacher');
        req.user = userdata;
        next ();
      } else {
        console.log ('Student');
        return res
          .status (401)
          .json ({error: 'Not a teacher and so cannot create a course!!'});
      }
    });
  });
};

router.post ('/createcourse', isVerified, (req, res) => {
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
      console.log (result);
      res.json ({course: result});
    })
    .catch (err => {
      console.log (err);
    });
});

// router.get ('/allcourses', requireLogin, (req, res) => {
//   Courses.find ()
//     .populate ('teacher_name', '_id name')
//     .then (posts => {
//       res.json ({posts});
//     })
//     .catch (err => {
//       console.log (err);
//     });
// });

router.get ('/allcourses', requireLogin, (req, res) => {
  Courses.find ()
    .populate ('teacher_name', '_id name')
    // .populate("comments.postedBy", "_id name")
    .then (courses => {
      res.json ({courses});
    })
    .catch (err => {
      console.log (err);
    });
});

module.exports = router;
