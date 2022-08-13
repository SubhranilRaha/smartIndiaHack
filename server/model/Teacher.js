const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School'
    },
    firstname: String,
    lastname: String,
    classRooms: { type: [ String ], default: [] }
});

module.exports.Teacher = mongoose.model('Teacher', teacherSchema);