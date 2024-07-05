import React from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetail = () => {
    const { id } = useParams();
    const employeeData = [
        { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
        { id: 2, name: 'Jane Smith', position: 'Product Manager', department: 'Product' },
        { id: 3, name: 'Alice Johnson', position: 'Designer', department: 'Design' },
    ];
    const employee = employeeData.find(emp => emp.id === parseInt(id));

    if (!employee) return <div>Employee not found</div>;

    return (
        <div>
            <h2>Employee Detail</h2>
            <p>Name: {employee.name}</p>
            <p>Position: {employee.position}</p>
            <p>Department: {employee.department}</p>
        </div>
    );
};

export default EmployeeDetail;
