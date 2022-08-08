const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
    name: String,
    email: String,
    teachers: { type: [ String ], default: [] },
    students: { type: [ String ], default: [] }
});

module.exports.School = mongoose.model('School', schoolSchema);