const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use('/students', studentRoutes);

mongoose.connect('mongodb://localhost:27017/coachingDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));