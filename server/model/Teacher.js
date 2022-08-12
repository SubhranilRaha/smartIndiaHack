const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    classRooms: { type: [ String ], default: [] }
});

module.exports.Teacher = mongoose.model('Teacher', teacherSchema);