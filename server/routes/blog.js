const express = require ('express');
const router = express.Router ();
const mongoose = require ('mongoose');
const Blog = mongoose.model ('Blog');
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
    console.log (payload);
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

router.post ('/createblog', isVerified, (req, res) => {
  const {
    blogName,
    category,
    blogContent,
    tags,
    publishDate,
    blog_photo,
  } = req.body;
  if (
    !blogName ||
    !category ||
    !blogContent ||
    !tags ||
    !publishDate ||
    !blog_photo
  ) {
    return res.status (422).json ({error: 'Please add all the fields!'});
  }
  req.user.password = undefined;
  const blog = new Blog ({
    blogName,
    category,
    blogContent,
    tags,
    publishDate,
    blog_photo,
    postedBy: req.user,
  });
  blog
    .save ()
    .then (result => {
      res.json ({blog: result});
    })
    .catch (err => {
      console.log (err);
    });
});

router.get ('/allblogs', requireLogin, (req, res) => {
  Blog.find ()
    .populate ('postedBy', '_id name')
    // .populate("comments.postedBy", "_id name")
    .then (blogs => {
      res.json ({blogs});
    })
    .catch (err => {
      console.log (err);
    });
});

router.get ('/allblogslist/:id', requireLogin, (req, res) => {
  Blog.find ({_id: req.params.id})
    .populate ('postedBy', '_id name')
    .exec (function (err, rows) {
      if (err) {
        console.log (err);
      } else {
        console.log (rows[0].postedBy.name);
        res.send (rows[0]);
      }
    });
});

router.get ('/allblogs/:category', requireLogin, (req, res) => {
  Blog.find ({category: req.params.category})
    .populate ('postedBy', '_id name')
    .exec (function (err, rows) {
      if (err) {
        console.log (err);
      } else {
        console.log (rows);
        res.send (rows);
      }
    });
});

module.exports = router;
