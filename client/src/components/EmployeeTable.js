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


const filteredEmployee = employees.filter((e) => {
    return (
        (!filter.name  ||  e.name.toLowerCase().includes(filter.name.toLowerCase())) && (!filter.department ||e.department.toLowerCase().includes(filter.department.toLowerCase())) && (!filter.address || e.address.toLowerCase().includes(filter.address.toLowerCase()))
    )
})


    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Address</th>
                    <th>Pan Card</th>
                </tr>
            </thead>
            <tbody>
                {filteredEmployee.map(emp => (
                    <tr key={emp._id}>
                
                        <td>{emp.name}</td>
                        <td>{emp.department.name}</td>
                        <td>{emp.address}</td>
                        <td>
                            {
                                emp.panCard ? ( 

<a href={`${BACKEND_URI}/{emp.panCard}`} target='_blank' > PAN Card </a> 

                                ) : (
                                    'No pan card is present '
                                )
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
