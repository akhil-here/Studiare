const express = require ('express');
const router = express.Router ();
const mongoose = require ('mongoose');
const Events = mongoose.model ('Events');
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
          .json ({error: 'Not a teacher and so cannot create an event!!'});
      }
    });
  });
};

router.post ('/createevent', isVerified, (req, res) => {
  const {
    eventName,
    timefrom,
    timeto,
    location,
    eventDate,
    totalSlots,
    bookedSlots,
    eventDesc,
    learningObjectives,
    eventImage,
  } = req.body;
  if (
    !eventName ||
    !timefrom ||
    !timeto ||
    !location ||
    !eventDate ||
    !totalSlots ||
    !bookedSlots ||
    !eventDesc ||
    !learningObjectives ||
    !eventImage
  ) {
    return res.status (422).json ({error: 'Please add all the fields!!'});
  }
  req.user.password = undefined;
  const event = new Events ({
    eventName,
    timefrom,
    timeto,
    location,
    eventDate,
    totalSlots,
    bookedSlots,
    eventDesc,
    learningObjectives,
    eventImage,
    teacher_name: req.user,
  });
  event
    .save ()
    .then (result => {
      res.json ({events: result});
    })
    .catch (err => {
      console.log (err);
    });
});

router.get ('/allevents', requireLogin, (req, res) => {
  Events.find ()
    .populate ('teacher_name', '_id name')
    .then (events => {
      res.json ({events});
    })
    .catch (err => {
      console.log (err);
    });
});

router.get ('/alleventslist/:id', requireLogin, (req, res) => {
  Events.find ({_id: req.params.id}).exec (function (err, rows) {
    if (err) {
      console.log (err);
    } else {
      res.send (rows[0]);
    }
  });
});

module.exports = router;
