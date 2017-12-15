import React from 'react';
import Proptypes from 'prop-types';
import './Tag.css';

const Tag = (props) => (
  <div className={`Tag ${props.className}`}>
    <i className={`Tag__icon ${props.icon}`}></i>
    <span className="Tag__Name">{props.name}</span>
  </div>
);
Tag.propTypes = {
  icon: Proptypes.string,
  name: Proptypes.string,
  className: Proptypes.string
}

export default Tag;
