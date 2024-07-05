import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Welcome from './pages/Welcome';
import EmployeeDetail from './Components/EmployeeDetail';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link> | 
                    <Link to="/employees">Employees</Link> | 
                    <Link to="/welcome">Welcome</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/employee/:id" element={<EmployeeDetail />} />
                    <Route path="/welcome" element={<Welcome />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
