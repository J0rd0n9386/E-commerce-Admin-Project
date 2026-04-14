import React from 'react'
import '../App.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        
        {/* Header Section */}
        <div className="profile-header">
          <div className="avatar-wrapper">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=AdminScale"
              alt="Admin Avatar"
              className="profile-avatar"
            />
            <span className="status-badge online"></span>
          </div>
          <div className="profile-title">
            <h2>Jane Doe</h2>
            <span className="role-tag">Super Admin</span>
          </div>
        </div>

        {/* Info Section */}
        <div className="profile-body">
          <div className="info-group">
            <span className="info-label">Email ID</span>
            <span className="info-value">jane.admin@system.io</span>
          </div>
          <div className="info-group">
            <span className="info-label">Department</span>
            <span className="info-value">Infrastructure & Security</span>
          </div>
          <div className="info-group">
            <span className="info-label">Last Login</span>
            <span className="info-value">Today, 09:42 AM</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="profile-stats">
          <div className="stat-box">
            <h3>1,204</h3>
            <p>Users</p>
          </div>
          <div className="stat-box">
            <h3>99.9%</h3>
            <p>Uptime</p>
          </div>
          <div className="stat-box">
            <h3>42</h3>
            <p>Alerts</p>
          </div>
        </div>

        {/* Actions Section */}
        <div className="profile-actions">
          <button className="btn-primary">Edit Profile</button>
          <button className="btn-secondary">System Settings</button>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;