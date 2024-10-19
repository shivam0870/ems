import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeTable = ({ filter }) => {
    const [employees, setEmployees] = useState([]);
    const BACKEND_URI = "https://ems-tpe5.onrender.com";
    useEffect(() => {
        const fetchEmployees = async () => {
            // const res = await axios.get(`http://localhost:5000/api/employees?name=${filter.name}&department=${filter.department}`);
            const res = await axios.get(`${BACKEND_URI}/api/employees?name=${filter.name}&department=${filter.department}`);
            setEmployees(res.data);
        };
        fetchEmployees();
    }, [filter]);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(emp => (
                    <tr key={emp._id}>
                        <td>{emp._id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.department.name}</td>
                        <td>{emp.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
