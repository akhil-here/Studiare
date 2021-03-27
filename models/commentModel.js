mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    
    userName: {
        type: String,
        requried: true,
    },
    comment: {
        type: String,
        requried: true,
    },
    date: {
        type: String,
        requried: true,
    },
    repliedTo: {
        type: String,
        requried: true,
    },
    learningObjectives: {
        type: String,
        requried: true,
    }
    
});

const comments = mongoose.model('comments',commentSchema);
module.exports = comments;