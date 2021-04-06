mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    
    teacherName: {
        type: String,
        requried: true,
    },
    subject: {
        type: String,
        requried: true,
    },
    details: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    phoneNo: {
        type: Number,
        length: [10, 'Please provide a 10 digit phone number'],
        requried: true,
    },
    skill: [{
        type: String,
        requried: true,
    }], 
    website: {
        type: String,
    }
    
});

const events = mongoose.model('events',eventSchema);
module.exports = events;