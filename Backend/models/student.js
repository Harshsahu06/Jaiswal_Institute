const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    studentId: { type: String, required: true, unique: true }, // S12345
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    parentContact: { type: String, required: true },
    address: { type: String, required: true },
    course: { type: String, required: true },

    totalFees: { type: Number, required: true }, // ₹50000
    feePaid: { type: Number, default: 0 }, // ₹30000
    dueFees: { type: Number, default: 0 }, // ₹20000

    paymentMode: { type: String, enum: ['UPI', 'Cash', 'Card', 'Bank Transfer'], required: true },
    paymentStatus: { type: String, enum: ['Paid', 'Pending'], default: 'Pending' },
    transactionId: { type: String, default: null },
    transactionDate: { type: Date, default: null },
    lateFeeCharges: { type: Number, default: 0 }, // ₹500
    fromAccount: { type: String, default: null }, // UPI ID or Email

    status: { type: String, enum: ['Accepted', 'Pending'], default: 'Pending' }
});

module.exports = mongoose.model('Student', StudentSchema);
