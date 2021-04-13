const jwt = require ('jsonwebtoken');
const {JWT_SECRET} = require ('../keys');
const mongoose = require ('mongoose');
const User = mongoose.model ('User');

module.exports = (req, res, next) => {
  console.log ('middle');
  const {authorization} = req.headers;
  if (!authorization) {
    return res.status (401).json ({error: 'You must be logged in!!!'});
  }
  const token = authorization.replace ('Bearer ', '');
  jwt.verify (token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status (401).json ({error: 'You must be logged in!!'});
    }
    const {_id} = payload;
    User.findById (_id).then (userdata => {
      if (userdata.role == 'Teacher') {
        console.log ('teacher');
        req.user = userdata;
        next ();
      } else {
        return res
          .status (401)
          .json ({error: 'Not a teacher and so cannot create a course!!'});
      }
    });
  });
};

// const isAuthenticated = (req, res, next) => {
//   const authorizationHeader = req.headers['authorization'];
//   const authorizationToken = authorizationHeader.split (' ')[1];
//   if (authorizationToken) {
//     jwt.verify (authorizationToken, config.jwtSecret, (err, decoded) => {
//       if (err) {
//         res.status (401).json ({error: 'Failed to authenticate'});
//       } else {
//         req.teacher_name = decoded.id;
//         next ();
//       }
//     });
//   } else {
//     res.status (403).json ({error: 'No token provided'});
//   }
// };
