import React from 'react';
import '../styles/banner.css'
import logo from '../assets/images/logo.webp'

const Banner = () => {
    return (
        <div className='title'>
            <h1>The Diving Company</h1>
            <img className='logo' src={logo} alt="logo" />
        </div>
    );
};

export default Banner;