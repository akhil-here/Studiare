const mongoose = require ('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const progress = new mongoose.Schema ({
  courseId: {
    type: String,
    required: true,
  },
  lessonsWatched: {
    type: Array,
    required: true,
  },
});

const userSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  resetToken: String,
  expireToken: Date,
  courseWatched: [progress],
  coursesBought: {
    type: Array,
    required: true,
  },
});

mongoose.model ('User', userSchema);
