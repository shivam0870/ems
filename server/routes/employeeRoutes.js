const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.post('/', async (req, res) => {
    const { name, department, address } = req.body;
    const newEmployee = new Employee({ name, department, address });
    await newEmployee.save();
    res.status(201).json(newEmployee);
});


router.get('/', async (req, res) => {
    const { name, department } = req.query;
    const filters = {};
    if (name) filters.name = new RegExp(name, 'i'); 
    if (department) filters.department = department;

    const employees = await Employee.find(filters).populate('department');
    res.json(employees);
});

module.exports = router;

