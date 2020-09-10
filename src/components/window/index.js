import React, { Component } from 'react';
import './Window.scss';
import Sidebar from '../sidebar';
import KeyPad from '../keypad';

const Window = (props) => {
    return (
        <div className="window">
            <Sidebar></Sidebar>
            
            <KeyPad></KeyPad>
        </div>
    )
}
export default Window;