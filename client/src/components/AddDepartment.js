import React, { useState } from 'react';
import axios from 'axios';

const AddDepartment = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/departments', { name, description });
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder="Department Name" onChange={(e) => setName(e.target.value)} required />
            <input type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
            <button type="submit">Add Department</button>
        </form>
    );
};

export default AddDepartment;
