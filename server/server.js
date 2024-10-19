const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoutes');
const path = require('path');

const app = express();


app.use(cors());
app.use(express.json());


app.use('/employees', employeeRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
