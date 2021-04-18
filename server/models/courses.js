const mongoose = require ('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const CourseSchema = new mongoose.Schema ({
  category: {
    type: String,
    required: true,
  },
  course_name: {
    type: String,
    required: true,
  },
  teacher_name: {
    type: ObjectId,
    ref: 'User',
  },
  no_of_students: {
    type: Number,
    // required: true,
  },
  no_of_hours: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  certificate: {
    type: String,
    required: true,
  },
  pre_req: {
    type: String,
    required: true,
  },
  learning_objectives: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  study_level: {
    type: String,
    required: true,
  },

  comments: [
    {
      text: String,
      postedBy: {
        type: ObjectId,
        ref: 'User',
      },
    },
  ],
  tags: {
    type: String,
    // required: true,
  },
  course_photo: {
    type: String,
    required: true,
  },
  videos: {
    type:Array,
    required:true
  },
});

mongoose.model ('Courses', CourseSchema);
