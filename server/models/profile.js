const mongoose = require ('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const profileSchema = new mongoose.Schema ({
  teacher_name: {
    type: ObjectId,
    ref: 'User',
  },
  about: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  profile_photo: {
    type: String,
  },
});

mongoose.model ('Profile', profileSchema);
