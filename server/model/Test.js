const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    testName: String,
    classroomId: mongoose.Schema.Types.ObjectId,
    studentId: mongoose.Schema.Types.ObjectId,
    score: Number
});

module.exports.Test = mongoose.model('Test', testSchema);