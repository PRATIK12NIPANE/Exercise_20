import React, { useEffect, useState } from 'react';
import EmployeeList from '../Components/EmployeeList';


const Employees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = () => {
            const employeeData = [
                { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
                { id: 2, name: 'Jane Smith', position: 'Product Manager', department: 'Product' },
                { id: 3, name: 'Alice Johnson', position: 'Designer', department: 'Design' },
            ];
            setEmployees(employeeData);
        };

        fetchEmployees();
    }, []);

    return (
        <div>
            <h1>Employees</h1>
            <EmployeeList employees={employees} />
        </div>
    );
};

export default Employees;
