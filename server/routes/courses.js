const express = require ('express');
const router = express.Router ();
const mongoose = require ('mongoose');
const Courses = mongoose.model ('Courses');
const User = mongoose.model ('User');
const jwt = require ('jsonwebtoken');
const {JWT_SECRET} = require ('../keys');
const requireLogin = require ('../middleware/requireLogin');
const multer = require ('multer');
var fs = require ('fs');
var path = require ('path');

var storage_gallery = multer.diskStorage ({
  destination: function (req, file, cb) {
    cb (null, './uploads');
  },
  filename: function (req, file, cb) {
    cb (null, file.originalname);
  },
});

var upload_gallery = multer ({storage: storage_gallery});

const isVerified = (req, res, next) => {
  const {authorization} = req.headers;
  const token = authorization.replace ('Bearer ', '');
  console.log (token);
  jwt.verify (token, JWT_SECRET, (err, payload) => {
    const {_id} = payload;
    // console.log (payload);
    User.findById (_id).then (userdata => {
      if (userdata.role == 'Teacher') {
        // console.log ('teacher');
        req.user = userdata;
        next ();
      } else {
        // console.log ('Student');
        return res
          .status (401)
          .json ({error: 'Not a teacher and so cannot create a course!!'});
      }
    });
  });
};

router.post (
  '/createcourse',
  isVerified,
  upload_gallery.array ('myFiles', 12),
  (req, res) => {
    const files = req.files;
    const {
      category,
      course_name,
      no_of_hours,
      price,
      certificate,
      pre_req,
      learning_objectives,
      course_photo,
      language,
      study_level,
    } = req.body;
    if (
      !category ||
      !course_name ||
      !no_of_hours ||
      !price ||
      !certificate ||
      !pre_req ||
      !learning_objectives ||
      !course_photo ||
      !language ||
      !study_level
    ) {
      return res.status (422).json ({error: 'Please add all the fields!!'});
    }
    req.user.password = undefined;
    const getLesson = () => {
      const ar = [];
      for (var i = 0; i < req.files.length; i++) {
        ar.push (req.files[i].filename);
      }
      return ar;
    };
    const course = new Courses ({
      category,
      course_name,
      no_of_hours,
      price,
      certificate,
      pre_req,
      study_level,
      language,
      learning_objectives,
      course_photo,
      teacher_name: req.user,
      videos: [],
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
  }
);

// router.post ('/createcourse', isVerified, (req, res) => {
//   const {
//     category,
//     course_name,
//     no_of_hours,
//     price,
//     certificate,
//     pre_req,
//     learning_objectives,
//     course_photo,
//     language,
//     study_level,
//   } = req.body;
//   if (
//     !category ||
//     !course_name ||
//     !no_of_hours ||
//     !price ||
//     !certificate ||
//     !pre_req ||
//     !learning_objectives ||
//     !course_photo ||
//     !language ||
//     !study_level
//   ) {
//     return res.status (422).json ({error: 'Please add all the fields!!'});
//   }
//   req.user.password = undefined;
//   const course = new Courses ({
//     category,
//     course_name,
//     no_of_hours,
//     price,
//     certificate,
//     pre_req,
//     study_level,
//     language,
//     learning_objectives,
//     course_photo,
//     teacher_name: req.user,
//   });
//   course
//     .save ()
//     .then (result => {
//       // console.log (result);
//       res.json ({course: result});
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

router.get ('/allcourseslist/:id', requireLogin, (req, res) => {
  Courses.find ({_id: req.params.id})
    .populate ('teacher_name', '_id name')
    .exec (function (err, rows) {
      if (err) {
        console.log (err);
      } else {
        res.send (rows[0]);
      }
    });
});

router.get ('/allcourses/:category', requireLogin, (req, res) => {
  Courses.find ({category: req.params.category})
    .populate ('teacher_name', '_id name')
    .exec (function (err, rows) {
      if (err) {
        console.log (err);
      } else {
        console.log (rows);
        res.send (rows);
      }
    });
});

router.post (
  '/createcourse2',
  upload_gallery.array ('myFiles', 20),
  (req, res, next) => {
    const files = req.files;
    if (!files) {
      const error = new Error ('Please upload a file');
      error.httpStatusCode = 400;
      return next (error);
    }

    console.log (req.body.courseid);
    console.log (typeof req.body.courseid);
    console.log ('hi');

    const videotemp = [];
    for (let i = 0; i < req.files.length; i++) {
      videotemp.push (req.files[i].filename);
    }
    console.log (videotemp);

    Courses.findOneAndUpdate (
      {_id: req.body.courseid},
      {videos: videotemp},
      function (err, docs) {
        // console.log (docs);
      }
    );

    Courses.find ({_id: req.body.courseid}, function (err, docs) {
      console.log (docs);
    });

    return res.json ('Okay');
  }
);

module.exports = router;
