import React, { useState } from 'react';

const Filter = ({ setFilter }) => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [address, setAddress] = useState('');

    const handleFilter = () => {
        setFilter({ name, department , address});
    };

    return (
        <div>
            <input type="text" value={name} placeholder="Filter by name" onChange={(e) => setName(e.target.value)} />
            <input type="text" value={department} placeholder="Filter by department" onChange={(e) => setDepartment(e.target.value)} />
            <input type="text" value={address} placeholder="Filter by address" onChange={(e) => setAddress(e.target.value)} />
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
};

export default Filter;
