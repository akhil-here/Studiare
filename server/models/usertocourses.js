const mongoose = require ('mongoose');
const {ObjectId} = mongoose.Schema.Types;


const usertocourses = new mongoose.Schema ({
    user_purchased :{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    course_name:[ {type: mongoose.Schema.Types.ObjectId, ref: 'Courses', required}

    ]
});
mongoose.model ('Usertocourses', userSchema);