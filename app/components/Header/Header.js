import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './images/banner.jpg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <a href="https://twitter.com/flexdinesh">
          <img src={Banner} alt="react-redux-boilerplate - Logo" />
        </a>
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/about">
            About
          </Link>
          <Link className="router-link" to="/statistics">
            Statistics
          </Link>
          <Link className="router-link" to="/outreach">
            Outreach
          </Link>
          <Link className="router-link" to="/forums">
            Forums
          </Link>
          <Link className="router-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
