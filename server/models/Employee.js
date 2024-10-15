const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    department : {
        type: String, required: true
    },
    address: { type: String, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);
