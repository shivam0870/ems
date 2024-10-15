const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

router.post('/', async (req, res) => {
    const { name, description } = req.body;
    const newDepartment = new Department({ name, description });
    await newDepartment.save();
    res.status(201).json(newDepartment);
});

router.get('/', async (req, res) => {
    const departments = await Department.find();
    res.json(departments);
});

module.exports = router;
