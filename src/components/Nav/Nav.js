import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css';

export default function Nav() {
  return (
    <div>
      <nav className='navbar'>
        <NavLink exact to='/' className='nav-link'>
          Home
        </NavLink>
        <NavLink to='/survivors' className='nav-link'>
          Survivors
        </NavLink>
        <NavLink to='/killers' className='nav-link'>
          Killers
        </NavLink>
      </nav>
    </div>
  );
}
