const mongoose = require ('mongoose');
const course = require('./../models/courses');

const {ObjectId} = mongoose.Schema.Types;

const profileSchema = new mongoose.Schema ({
  name: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    requried: true,
  },
  about: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    requried: true,
  },
  subject: {
    type: String,
    requried: true,
  },
  phoneNo: {
    type: Number,
    requried: true,
  },
  
  profile_photo: {
    type: String,
    required: true,
  },
  course1: {
    type: course,
    required: true,
  },
  course2: {
    type: course,
    required: true,
  },
  course3: {
    type: course,
    required: true,
  }

});

mongoose.model ('profile', profileSchema);
