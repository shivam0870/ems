import React, { useState } from 'react';
import AddDepartment from './components/AddDepartment';
import AddEmployee from './components/AddEmployee';
import EmployeeTable from './components/EmployeeTable';
import Filter from './components/Filter';

const App = () => {
    const [filter, setFilter] = useState({ name: '', department: '' });

    return (
        <div>
            <h1>Employee Management System</h1>
            <div>
                <h2>Add Department</h2>
                <AddDepartment />
            </div>
            <div>
                <h2>Add Employee</h2>
                <AddEmployee />
            </div>
            <Filter setFilter={setFilter} />
            <h2>Employee Details</h2>
            <EmployeeTable filter={filter} />
        </div>
    );
};

export default App;
