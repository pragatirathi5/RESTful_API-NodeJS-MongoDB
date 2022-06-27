const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    address: {
        type: String,
        required: true
    }
})

//Collection name should be in titlecase or pascalcase

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;