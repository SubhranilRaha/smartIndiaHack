const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    degree: String,
    stream: String,
    rollNumber: String,
    classRooms: { type: [ String ], default: [] },
    createdAt: { type: Date, default: Date.now}
});

module.exports.Student = mongoose.model('Student', studentSchema);