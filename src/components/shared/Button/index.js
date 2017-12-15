import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import './Button.css';

/** type of buttons: 1. regular 2. accent 3. transparent **/
export default  class Button extends Component{
  constructor(props){
    super(props);
    this.state = {
      type : props.type || 'regular',
      link : props.link || false,
    }
  }
  get = () => {
    return (
      <button name={this.props.name}
              className={`Button Button--${this.state.type} ${this.props.className}` }
              onClick={this.props.onClick}
              style={this.props.style}>
      {this.props.children}
      </button>
    )
  }
  render(){
    const content = this.get();
    return (
      this.state.link  ?
      (
        <Link to={this.props.path || "#"}>
          { content }
        </Link>
      )
      : content
    )
  }
}
Button.propTypes = {
  type: Proptypes.oneOf(['regular','accent','transparent']),
  link: Proptypes.bool,
  path: Proptypes.string,
  className: Proptypes.string,
  onClick: Proptypes.func,
  style: Proptypes.object
}
