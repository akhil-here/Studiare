const express = require ('express');
const router = express.Router ();
const mongoose = require ('mongoose');
const Profile = mongoose.model ('Profile');
const User = mongoose.model ('User');

const requireLogin = require ('../middleware/requireLogin');



router.post ('/createProfile',requireLogin, (req, res) => {
    const {
        name,
        email,
        about,
        website,
        subject,
        phoneNo,
        profile_photo
      } = req.body;
      if (
        
        !about||
        !website||
        !subject||
        !phoneNo||
        !profile_photo
       
      ) {
        return res.status (422).json ({error: 'Please add all the fields.'});
      }
      req.user.password = undefined;
      const profile = new Profile ({
        
        about,
        website,
        subject,
        phoneNo,
        profile_photo,

        teacher_name: req.user,
      });
    profile
      .save ()
      .then (result => {
        res.json ({profile: result});
      })
      .catch (err => {
        console.log (err);
      });
  });

  router.get ('/Profile/:id', requireLogin, (req, res) => {
    Profile.find ({_id: req.params.id}).exec (function (err, rows) {
      if (err) {
        console.log (err);
      } else {
        res.send (rows[0]);
      }
    });
  });

router.put ('/Profile/:id',requireLogin, (req, res) => {
    const {
      name,
      email,
      about,
      website,
      subject,
      phoneNo,
      profile_photo,
      course1,
    } = req.body;
    if (
      !category ||
      !course_name ||
      !no_of_hours ||
      !price ||
      !certificate ||
      !pre_req ||
      !learning_objectives ||
      !course_oto
    ) {
      return res.status (422).json ({error: 'Please add all the fields.'});
    }

    req.user.password = undefined;

    // const userdata = new User(
    //     name,
    //     email,
    // )
    // User.updateOne({_id: req.user.id}, userdata).then(
    //   () => {
    //     console.log("Userdata updated");
    //   }
    // ).catch(
    //   (error) => {
    //     res.status(400).json({
    //       error: error
    //     });
    //   }
    // );
    const profile = new Profile ({
      teacher_name: req.user,
      about,
      website,
      subject,
      phoneNo,
      profile_photo,
      course1,
      
    });
    Profile.updateOne({_id: req.params.id}, profile).then(
        () => {
          res.status(201).json({
            message: 'Profile updated successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
  });
module.exports = router;

  