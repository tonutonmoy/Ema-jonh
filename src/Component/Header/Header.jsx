
import React from 'react';
import logo from '../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>

          <div><img src={logo} alt="" /> </div> 

         <div>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/orders">Order </Link>
          <Link className='link' to="/inventory">Manage Inventory</Link>
          <Link className='link' to="/login">Login</Link>  

          </div>      
        </nav>
    );
};

export default Header;