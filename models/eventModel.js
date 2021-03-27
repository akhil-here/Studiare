mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    
    eventName: {
        type: String,
        requried: true,
    },
    time: {
        type: String,
        requried: true,
    },
    eventImage: {
        type : String,
        required : true
    },
    location: {
        type : String,
        required : true
    },
    date: {
        type: String,
        requried: true,
    },
    totalSlots: {
        type: Number,
        requried: true,
    },
    bookedSlots: {
        type: Number,
        requried: true,
    },
    cost: {
        type: Number,
        requried: true,
    },
    quantity: {
        type: Number,
        requried: true,
    },
    payMode: {
        type: String,
        requried: true,
    },
    eventDesc: {
        type: String,
    },
    learningObjectives: {
        type: String,
        requried: true,
    }
    
});

const events = mongoose.model('events',eventSchema);
module.exports = events;