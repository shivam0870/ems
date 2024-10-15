import React, { useState } from 'react';

const Filter = ({ setFilter }) => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');

    const handleFilter = () => {
        setFilter({ name, department });
    };

    return (
        <div>
            <input type="text" value={name} placeholder="Filter by name" onChange={(e) => setName(e.target.value)} />
            <input type="text" value={department} placeholder="Filter by department" onChange={(e) => setDepartment(e.target.value)} />
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
};

export default Filter;
