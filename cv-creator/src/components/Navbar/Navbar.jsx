import React from 'react';
import "./Navbar.css";

import CvForm from '../forms/CvForm';

const Navbar = () => {
  return (
    <div className="container">
        <div className='appHolderDiv'>
            <div className="navBarDiv">
                <h1 className='nameOfApp'>AMPLIFIED CV - CREATOR APP</h1>
            </div>
        </div>
    <CvForm/>
    </div>
  )
}

export default Navbar