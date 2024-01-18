// Signup.js

import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
  return (
    <div>
      <h2 className='signup-heading'>Signup</h2>
      <form  className='signup-container'>
        <label htmlFor="username">
          USERNAME
        </label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor='email'>
          Email
        </label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">
          Password
        </label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
