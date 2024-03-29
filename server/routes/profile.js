const express = require ('express');
const router = express.Router ();
const mongoose = require ('mongoose');
const Profile = mongoose.model ('Profile');
const User = mongoose.model ('User');
const bcrpyt = require ('bcryptjs');

const requireLogin = require ('../middleware/requireLogin');

router.get ('/Profile', requireLogin, (req, res) => {
  Profile.find ({teacher_name: req.user})
    .populate ('teacher_name', '_id name email')
    .exec (function (err, rows) {
      if (err) {
        console.log (err);
      } else {
        if (rows.length > 0) {
          res.send (rows[0]);
        } else {
          res.send ({
            teacher_name: {
              name: req.user.name,
              email: req.user.email,
              password: req.user.password,
            },
            subject: '',
            about: '',
            phoneNo: '',
            website: '',
            profile_photo: '',
          });
        }
      }
    });
});

router.put ('/Profile1', requireLogin, (req, res) => {
  const {
    name,
    email,
    password,
    about,
    website,
    subject,
    phoneNo,
    profile_photo,
  } = req.body;
  var temp = 0;

  User.findOne ({_id: req.user})
    .then (exists => {
      if (!exists) {
        return res.status (422).json ({error: 'Invalid Credentials!!'});
      }
      bcrpyt.compare (password, exists.password).then (check => {
        if (check) {
          if (name != req.user.name || email != req.user.email) {
            const user = {
              name,
              email,
            };
            User.updateOne ({_id: req.user}, user, {upsert: true})
              .then (result => {})
              .catch (error => {
                console.log (error);
                res.status (400).json ({
                  error: 'Error Updating Profile',
                });
              });
          }
        } else {
          temp = 1;
          res.status (400).json ({
            error: 'Error Updating Profile',
          });
        }
      });
    })
    .catch (err => {
      console.log (err);
    });

  console.log (req.body);
  req.user.password = undefined;
  const profile = {
    teacher_name: req.user,
    about,
    website,
    subject,
    phoneNo,
    profile_photo,
  };
  Profile.updateOne ({teacher_name: req.user}, profile, {upsert: true})
    .then (result => {
      if (temp == 1) {
        res.status (422).json ({error: 'Invalid Password!!'});
      } else {
        res.status (201).json ({
          message: 'Profile updated successfully!',
        });
      }
    })
    .catch (error => {
      console.log (error);
      res.status (400).json ({
        // error: error
        error: 'Error Updating Profile',
      });
    });
});

router.get ('/User_Profile', requireLogin, (req, res) => {
  res.send (req.user);
});

router.put ('/User_Profile', requireLogin, (req, res) => {
  const {name, email, password} = req.body;
  console.log (req.body);
  User.findOne ({_id: req.user})
    .then (exists => {
      if (!exists) {
        return res.status (422).json ({error: 'Invalid Credentials!!'});
      }
      bcrpyt.compare (password, exists.password).then (check => {
        if (check) {
          const user = {
            name,
            email,
          };
          User.updateOne ({_id: req.user}, user, {upsert: true})
            .then (result => {
              console.log ('Put here :', result);
              res.status (201).json ({
                message: 'Profile updated successfully!',
              });
            })
            .catch (error => {
              console.log (error);
              res.status (400).json ({
                // error: error
                error: 'Error Updating Profile',
              });
            });
        } else {
          return res.status (422).json ({error: 'Invalid Credentials!!'});
        }
      });
    })
    .catch (err => {
      console.log (err);
    });
});

router.get ('/teacher/:id', requireLogin, (req, res) => {
  Profile.find ({teacher_name: req.params.id})
    .populate ('teacher_name', '_id name email role')
    .exec (function (err, rows) {
      if (err) {
        console.log (err);
      } else {
        // console.log (rows[0].teacher_name.name);
        res.send (rows[0]);
      }
    });
});

module.exports = router;
