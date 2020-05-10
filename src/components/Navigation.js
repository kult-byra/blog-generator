import React, {Component} from 'react';
import logo from './assets/img/Kult_logo.svg';

class Navigation extends Component {
    render () {
      return (
        <nav>
          <img alt="logo" src={logo} className="logo" />
          <button className="navButton">Om Kult</button>
        </nav>
      )
    }
  }

export default Navigation;