const express = require ('express');
const router = express.Router ();
const mongoose = require ('mongoose');
const creatingCourse = require ('../middleware/creatingCourse');
const Courses = mongoose.model ('Courses');
const User = mongoose.model ('User');
const requireLogin = require ('../middleware/requireLogin');
const jwt = require ('jsonwebtoken');
const {JWT_SECRET} = require ('../keys');

// const isVerified = (req, res, next) => {
//   const {token} = useParams ();
//   User.findOne ({resetToken: token}).then (user => {
//     if (!user) {
//       return res.status (422).json ({error: 'Try again session expired'});
//     }
//     if (user.role == 'Teacher') {
//       console.log ('You can create!!!!');
//     }
//     // bcrpyt.hash (newPassword, 12).then (hashedpassword => {
//     //   user.password = hashedpassword;
//     //   user.resetToken = undefined;
//     //   user.expireToken = undefined;
//     //   user.save ().then (saveduser => {
//     //     res.json ({message: 'Updated password successfully!!'});
//     //   });
//   });
// };

const isVerified = (req, res, next) => {
  const {authorization} = req.headers;
  if (!authorization) {
    return res.status (401).json ({error: 'You must be logged in!!!'});
  }
  const token = authorization.replace ('Bearer ', '');
  jwt.verify (token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status (401).json ({error: 'You must be logged in!!'});
    } else {
      const {_id} = payload;
      User.findOne ({_id: _id}).then (userdata => {
        if (userdata.role == 'Teacher') {
          // console.log ('teacher');
          req.user = userdata;
          next ();
        } else {
          return res
            .status (401)
            .json ({error: 'Not a teacher and so cannot create a course!!'});
        }
      });
    }
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
      res.json ({course: result});
    })
    .catch (err => {
      console.log (err);
    });
});

router.get ('/allcourses', requireLogin, (req, res) => {
  Courses.find ()
    .populate ('teacher_name', '_id name')
    .then (posts => {
      res.json ({posts});
    })
    .catch (err => {
      console.log (err);
    });
});

module.exports = router;
