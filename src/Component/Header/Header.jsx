
import React from 'react';
import logo from '../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>

          <div><img src={logo} alt="" /> </div> 

         <div>
          <Link to="/">Home</Link>
          <Link to="/orders">Order </Link>
          <Link to="/inventory">Manage Inventory</Link>
          <Link to="/login">Login</Link>  

          </div>      
        </nav>
    );
};

export default Header;