import React from 'react';
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <b>React Js Dashboard</b>
            <nav>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/contacts">ContactUs</Link></li>
                    <li><Link to="/aboutus">AboutUs</Link></li>
                    <li><Link to="/registration">Registration</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Dashboard;
