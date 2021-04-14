const mongoose = require ('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const blogSchema = new mongoose.Schema ({
  blogName: {
    type: String,
    requried: true,
  },
  category: {
    type: String,
    requried: true,
  },
  blogContent: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    requried: true,
  },
  comments: [
    {
      comment: String,
      postedBy: {type: ObjectId, ref: 'User'},
      dateOfComment: Date,
    },
  ],
  postedBy: {
    type: ObjectId,
    ref: 'User',
  },
  blog_photo: {
    type: String,
    required: true,
  },
});

mongoose.model ('Blog', blogSchema);
