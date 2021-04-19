const mongoose = require ('mongoose');
const {ObjectId} = mongoose.Schema.Types;
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
  coursesBought: {
    type: Array,
    required: true,
  },
});

mongoose.model ('User', userSchema);
