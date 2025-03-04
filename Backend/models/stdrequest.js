// models/Student.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    course: String,
    status: { type: String, default: 'Pending' },
    feesPaid: { type: Number, default: 0 }
});

module.exports = mongoose.model('Student', StudentSchema);