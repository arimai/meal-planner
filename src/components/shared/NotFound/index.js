import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="NotFound">
    <div className="NotFound__content">
      <p className="NotFound__content-highlight">404</p>
      <p>OOPS looks like there is no food here :(</p>
      <p>Maybe a <Link to="/survey" className="NotFound__link">survey</Link> can help you find them meals...num num</p>
    </div>
  </div>
);

export default NotFound;
