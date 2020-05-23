import React from 'react';
import logo from './assets/img/Kult_logo.svg';

const Navigation = () => {
      return (
        <nav>
          <img alt="logo" src={logo} className="logo" />
          <button className="navButton">Om Kult</button>
        </nav>
      )
  }

export default Navigation;