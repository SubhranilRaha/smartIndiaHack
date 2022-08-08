const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    classRooms: { type: [ String ], default: [] }
});

module.exports.Teacher = mongoose.model('Teacher', teacherSchema);