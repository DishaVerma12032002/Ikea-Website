// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (

    <div className="app-header">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
      <div className='header'>
        <div className='logo'>
          <h1><Link to="/" className='logo'>Welcome  to  IKEA!!</Link></h1>
          
        </div>
    </div>
      <div className='header'>
            <h1>
                
              <Link to="/" className='links'><button className='btn btn-info'>Home</button></Link>
                
            </h1>
          
        
            <h1>
                
              <Link to="/signup" className='links'><button className='btn btn-info'>SignUp</button></Link>
              
            </h1>
          

        
            <h1>
                
              <Link to="/cart" className='links'><button className='btn btn-info'>MyCart</button></Link>
              
            </h1>
          
      </div>
    </div>
  );
};

export default Header;
