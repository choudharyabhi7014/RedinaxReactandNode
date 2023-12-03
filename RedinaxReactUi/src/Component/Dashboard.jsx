import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Analytics from '../Component/Analytics';
import DataTable from '../Component/Datatable';


const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Analytics');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink to="/dashboard/analytics" className={`nav-link ${activeTab === 'Analytics' ? 'active' : ''}`} onClick={() => handleTabChange('Analytics')}>
                            Analytics
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/dashboard/data" className={`nav-link ${activeTab === 'Data' ? 'active' : ''}`} onClick={() => handleTabChange('Data')}>
                            Data
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="content">
                {activeTab === 'Analytics' && <Analytics />}
                {activeTab === 'Data' && <DataTable />}
            </div>
        </div>
    );
};

export default Dashboard;
