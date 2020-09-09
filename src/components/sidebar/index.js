import React, { Component } from 'react';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarHeader">
                <span className="controls" style={{backgroundColor: '#FF5E57'}}></span>
                <span className="controls" style={{backgroundColor: '#FFBB2E'}}></span>
                <span className="controls" style={{backgroundColor: '#38C149'}}></span>
            </div>
        </div>
    )
}
export default Sidebar;