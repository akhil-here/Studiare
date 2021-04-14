const express = require ('express');
const router = express.Router ();
const mongoose = require ('mongoose');
const Blog = mongoose.model ('Blog');
const User = mongoose.model ('User');
const jwt = require ('jsonwebtoken');
const {JWT_SECRET} = require ('../keys');

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
    publishedDate,
    blog_photo,
  } = req.body;
  if (
    !blogName ||
    !category ||
    !blogContent ||
    !tags ||
    !publishedDate ||
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
    publishedDate,
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

// router.get ('/allpost', isVerified, (req, res) => {
//   Post.find ()
//     .populate ('postedBy', '_id name')
//     .populate ('comments.postedBy', '_id name')
//     .then (posts => {
//       res.json ({posts});
//     })
//     .catch (err => {
//       console.log (err);
//     });
// });

// router.get ('/mypost', isVerified, (req, res) => {
//   Post.find ({postedBy: req.user._id})
//     .populate ('postedby', '_id name')
//     .then (mypost => {
//       res.json ({mypost});
//     })
//     .catch (err => {
//       console.log (err);
//     });
// });

// router.put ('/like', isVerified, (req, res) => {
//   Post.findByIdAndUpdate (
//     req.body.postId,
//     {
//       $push: {likes: req.user._id},
//     },
//     {
//       new: true,
//     }
//   ).exec ((err, result) => {
//     if (err) {
//       return res.status (422).json ({error: err});
//     } else {
//       res.json (result);
//     }
//   });
// });

// router.put ('/unlike', isVerified, (req, res) => {
//   Post.findByIdAndUpdate (
//     req.body.postId,
//     {
//       $pull: {likes: req.user._id},
//     },
//     {
//       new: true,
//     }
//   ).exec ((err, result) => {
//     if (err) {
//       return res.status (422).json ({error: err});
//     } else {
//       res.json (result);
//     }
//   });
// });

// router.put ('/comment', isVerified, (req, res) => {
//   const comment = {
//     text: req.body.text,
//     postedBy: req.user._id,
//   };
//   Post.findByIdAndUpdate (
//     req.body.postId,
//     {
//       $push: {comments: comment},
//     },
//     {
//       new: true,
//     }
//   )
//     .populate ('comments.postedBy', '_id name')
//     .populate ('postedBy', '_id name')
//     .exec ((err, result) => {
//       if (err) {
//         return res.status (422).json ({error: err});
//       } else {
//         res.json (result);
//       }
//     });
// });

// router.delete ('/deletepost/:postId', isVerified, (req, res) => {
//   Post.findOne ({_id: req.params.postId})
//     .populate ('postedBy', '_id')
//     .exec ((err, post) => {
//       if (err || !post) {
//         return res.status (422).json ({error: err});
//       }
//       if (post.postedBy._id.toString () == req.user._id.toString ()) {
//         post
//           .remove ()
//           .then (result => {
//             res.json ({message: 'Successfully deleted!!!'});
//           })
//           .catch (err => {
//             console.log (err);
//           });
//       }
//     });
// });

module.exports = router;
