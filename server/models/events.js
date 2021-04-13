const mongoose = require ('mongoose');

const EventSchema = new mongoose.Schema ({
  eventName: {
    type: String,
    required: true,
  },
  timefrom: {
    type: String,
    required: true,
  },
  timeto: {
    type: String,
    required: true,
  },
  eventImage: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  totalSlots: {
    type: Number,
    required: true,
  },
  bookedSlots: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  payMode: {
    type: String,
    required: true,
  },
  eventDesc: {
    type: String,
  },
  learningObjectives: {
    type: String,
    required: true,
  },
});

mongoose.model ('Events', EventSchema);
