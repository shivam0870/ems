const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const multer  = require('multer')
// setup 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/upload')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

  const upload = multer({ storage: storage });


router.post('/', async (req, res) => {
    const { name, department, address } = req.body;
    const panCard = req.file;
    
    const newEmployee = new Employee({ name, department, address, panCard});
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

