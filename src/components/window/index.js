import React, { Component } from 'react';
import './Window.scss';
import Sidebar from '../sidebar';

const Window = (props) => {
    return (
        <div className="window">
            <Sidebar></Sidebar>
        </div>
    )
}
export default Window;