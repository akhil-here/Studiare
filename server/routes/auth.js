const express = require ('express');
const router = express.Router ();
const mongoose = require ('mongoose');
const User = mongoose.model ('User');
const crypto = require ('crypto');
const bcrpyt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const {JWT_SECRET} = require ('../keys');
const {API_KEY} = require ('../keys');
const nodemailer = require ('nodemailer');
const sendgridTransport = require ('nodemailer-sendgrid-transport');

//https://github.com/hemakshis/Basic-MERN-Stack-App/blob/master/routes/articlesRoute.js

const transporter = nodemailer.createTransport (
  sendgridTransport ({
    auth: {
      api_key: API_KEY,
    },
  })
);

router.post ('/signup', (req, res) => {
  const {name, email, password, role} = req.body;
  if (!email || !name || !password || !role) {
    return res
      .status (422)
      .json ({error: 'Please fill all the required fields!!'});
  }
  User.findOne ({email: email})
    .then (exists => {
      if (exists) {
        return res.status (422).json ({error: 'User already exists!!'});
      }
      bcrpyt.hash (password, 12).then (hashedpassword => {
        const user = new User ({
          name,
          email,
          password: hashedpassword,
          role,
        });
        user
          .save ()
          .then (user => {
            transporter.sendMail ({
              to: user.email,
              from: 'studiare.miniproject@gmail.com',
              subject: 'Registration success',
              html: '<h1>Welcome aboard </h1>' + user.name,
            });
            res.json ({message: 'Saved Successfully!!'});
          })
          .catch (err => {
            console.log (err);
          });
      });
    })
    .catch (err => {
      console.log (err);
    });
});

router.post ('/login', (req, res) => {
  const {email, password} = req.body;
  if (!email) {
    return res.status (422).json ({error: 'Please provide an email!!'});
  }
  if (!password) {
    return res.status (422).json ({error: 'Please provide the password!!'});
  }
  User.findOne ({email: email})
    .then (exists => {
      if (!exists) {
        return res.status (422).json ({error: 'Invalid Credentials!!'});
      }
      bcrpyt.compare (password, exists.password).then (check => {
        if (check) {
          const token = jwt.sign ({_id: exists._id}, JWT_SECRET);
          const {_id, name, email, role} = exists;
          res.json ({token, user: {_id, name, email, role}});
          console.log ('Hi', name);
        } else {
          return res.status (422).json ({error: 'Invalid Credentials!!'});
        }
      });
    })
    .catch (err => {
      console.log (err);
    });
});

router.post ('/reset-password', (req, res) => {
  crypto.randomBytes (32, (err, buffer) => {
    if (err) {
      console.log (err);
    }
    const token = buffer.toString ('hex');
    User.findOne ({email: req.body.email}).then (user => {
      if (!user) {
        return res
          .status (422)
          .json ({error: "User doesn't exist with that email"});
      }
      user.resetToken = token;
      user.expireToken = Date.now () + 3600000;
      user.save ().then (result => {
        transporter.sendMail ({
          to: user.email,
          from: 'studiare.miniproject@gmail.com',
          subject: 'Reset password',
          html: `
                <p>You requested for password reset</p>
                <h5>Click on this <a href="http://localhost:3000/reset/${token}">link</a> to reset your password</h5>
                `,
        });
        res.json ({
          message: 'Check our inbox for the link to reset password!!',
        });
      });
    });
  });
});

router.post ('/new-password', (req, res) => {
  const newPassword = req.body.password;
  const sentToken = req.body.token;
  User.findOne ({resetToken: sentToken, expireToken: {$gt: Date.now ()}})
    .then (user => {
      if (!user) {
        return res.status (422).json ({error: 'Try again session expired'});
      }
      bcrpyt.hash (newPassword, 12).then (hashedpassword => {
        user.password = hashedpassword;
        user.resetToken = undefined;
        user.expireToken = undefined;
        user.save ().then (saveduser => {
          res.json ({message: 'Updated password successfully!!'});
        });
      });
    })
    .catch (err => {
      console.log (err);
    });
});

module.exports = router;
