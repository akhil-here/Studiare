mongoose = require('mongoose');
const comment = require('../models/commentModel');

const blogSchema = mongoose.Schema({
    
    blogName: {
        type: String,
        requried: true,
    },
    category: {
        type: String,
        requried: true,
    },
    blogContent: {
        type : String,
        required : true
    },
    tags: {
        type : String,
        required : true
    },
    publishDate: {
        type: String,
        requried: true,
    },
    comment : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'symptoms'
    }
    
});

const blogs = mongoose.model('blogs',blogSchema);
module.exports = blogs;