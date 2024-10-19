import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [address, setAddress] = useState('');
    const [departments, setDepartments] = useState([]);
    const BACKEND_URI = "https://ems-tpe5.onrender.com";

    useEffect(() => {
        const fetchDepartments = async () => {
            // const res = await axios.get('http://localhost:5000/api/departments');
            const res = await axios.get(`${BACKEND_URI}/api/departments`);
            setDepartments(res.data);
        };
        fetchDepartments();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await axios.post('http://localhost:5000/api/employees', { name, department, address });
        await axios.post(`${BACKEND_URI}/api/employees`, { name, department, address });
        setName('');
        setDepartment('');
        setAddress('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder="Employee Name" onChange={(e) => setName(e.target.value)} required />
            <select value={department} onChange={(e) => setDepartment(e.target.value)} required>
                <option value="">Select Department</option>
                {departments.map(dep => (
                    <option key={dep._id} value={dep._id}>{dep.name}</option>
                ))}
            </select>
            <input type="text" value={address} placeholder="Address" onChange={(e) => setAddress(e.target.value)} required />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default AddEmployee;
