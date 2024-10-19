import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [address, setAddress] = useState('');
    const [departments, setDepartments] = useState([]);
    const [panCard,setPanCard] = useState(null);
    const BACKEND_URI = "https://ems-tpe5.onrender.com";

    useEffect(() => {
        const fetchDepartments = async () => {
            // const res = await axios.get('http://localhost:5000/api/departments');
            const res = await axios.get(`${BACKEND_URI}/api/departments`);
            setDepartments(res.data);
        };
        fetchDepartments();
    }, []);

    const handleFileChange = async(e) => {
        setPanCard(e.target.files);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('department',department);
        formData.append('address',address);
        formData.append('panCard',panCard);

        // await axios.post('http://localhost:5000/api/employees', { name, department, address });
       try {
        await axios.post(`${BACKEND_URI}/api/employees`, formData , {
            header : {
                "Content-Type" : "multipart/form-data",
            }
        });
      console.log("Employee Added");
        
       } catch (error) {
        console.log(error)
       }
    };

    return (
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <input type="text" value={name} placeholder="Employee Name" onChange={(e) => setName(e.target.value)} required />
            <select value={department} onChange={(e) => setDepartment(e.target.value)} required>
                <option value="">Select Department</option>
                {departments.map(dep => (
                    <option key={dep._id} value={dep._id}>{dep.name}</option>
                ))}
            </select>
            <input type="file" value={name} placeholder="Pan Card" onChange={handleFileChange} required />
            <input type="text" value={address} placeholder="Address" onChange={(e) => setAddress(e.target.value)} required />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default AddEmployee;
