import React, { useEffect, useState } from 'react';

const Welcome = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        document.title = 'Welcome to Employee Info App';
        const employeeData = [
            { id: 4, name: 'Mark Wilson', position: 'HR Manager', department: 'HR' },
            { id: 5, name: 'Lucy Brown', position: 'Sales Manager', department: 'Sales' },
        ];
        setEmployees(employeeData);

        return () => {
            console.log('Welcome component unmounted');
        };
    }, []);

    return (
        <div>
            <h1>Welcome Page</h1>
            <p>This page demonstrates the useEffect hook.</p>
            <h2>New Employees</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        {employee.name} - {employee.position} ({employee.department})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Welcome;
