const Student = require('../models/Student');

// Register a new student
exports.registerStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.json({ message: 'Registration request submitted!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get pending registration requests
exports.getPendingRequests = async (req, res) => {
    try {
        const requests = await Student.find({ status: 'Pending' });
        res.json(requests);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Accept student registration
exports.acceptStudent = async (req, res) => {
    try {
        await Student.findByIdAndUpdate(req.params.id, { status: 'Accepted' });
        res.json({ message: 'Student accepted!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all accepted students
exports.getAcceptedStudents = async (req, res) => {
    try {
        const students = await Student.find({ status: 'Accepted' });
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
