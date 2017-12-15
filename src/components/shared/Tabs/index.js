import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './Tabs.css';

export default class Tabs extends Component{

  constructor(props){
    super(props);
    this.state={
      activeIndex: props.defaultIndex || 0,
    }
  }

  handleClick = (index) => this.setState({activeIndex:index});

  // passing default props to all tabs
  passPropsToTabs = () => {
    const { children } = this.props;
    return React.Children.map(children,(child,index) =>
             React.cloneElement(
              child,
              {
                index:index,
                onClick:this.handleClick,
                active:index === this.state.activeIndex,
              },
            )
          )
  }

  renderTabContent = () => {
    const { children } = this.props;
    const { activeIndex } = this.state;
    if(children[activeIndex]){
      return children[activeIndex].props.children;
    }
  }

  render(){
    return(
      <div className={`Tabs ${this.props.className}`}>
        <ul className="Tabs__head">
          {this.passPropsToTabs()}
        </ul>
        <div className="Tabs__content">
          {this.renderTabContent()}
        </div>
      </div>
    )
  }

}
export const Tab = (props) => (
  <li className={`Tab ${props.className}`}>
    <a className={`Tab__link ${props.active ? 'Tab__active' : ''}`}
       onClick={
         (e) => {
           e.preventDefault();
           props.onClick(props.index)
         }
        }>
      <span>{props.heading}</span>
    </a>
  </li>
);

Tab.propTypes = {
  active: Proptypes.bool,
  onClick: Proptypes.func,
  index: Proptypes.number,
  heading: Proptypes.string,
  className: Proptypes.string
}
Tabs.propTypes = {
  defaultIndex: Proptypes.number,
  className: Proptypes.string
}
