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
  votes: {
    type: Number,
  },
  no_of_hours: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  lessons: {
    type: String,
    // required: true,
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
  lessons: [
    {
      text: String,
      description: String,
      // required: true,
    },
  ],
  ratings: {
    type: Number,
    // required:true
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
  discounted_price: {
    type: Number,
  },
  course_photo: {
    type: String,
    required: true,
  },
  videos: [
    {
      type: String,
      // required: true,
    },
  ],
});

mongoose.model ('Courses', CourseSchema);
