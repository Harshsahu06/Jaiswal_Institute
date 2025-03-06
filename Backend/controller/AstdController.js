const Student = require('../models/Student');

// Get all accepted students with filters
exports.getAcceptedStudents = async (req, res) => {
    try {
        const { search, course, due } = req.query;
        let query = { status: 'Accepted' };

        if (search) {
            query.studentId = { $regex: search, $options: 'i' };
        }
        if (course) {
            query.course = course;
        }
        if (due === 'due') {
            query.dueFees = { $gt: 0 };
        } else if (due === 'no-due') {
            query.dueFees = 0;
        }

        const students = await Student.find(query);
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get individual student details
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findOne({ studentId: req.params.id });
        if (!student) return res.status(404).json({ message: 'Student not found' });

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Accept Student Registration Request
exports.acceptStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });

        student.status = 'Accepted';
        await student.save();

        res.status(200).json({ message: 'Student accepted successfully', student });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
