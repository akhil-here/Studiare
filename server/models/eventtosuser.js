const mongoose = require ('mongoose');
const {ObjectId} = mongoose.Schema.Types;


const usertocourses = new mongoose.Schema ({
    user_enrolled :{type: ObjectId, ref: 'User'},
    event:[ {type: ObjectId, ref: 'Event', required}

    ]
});
mongoose.model ('eventtouser', userSchema);