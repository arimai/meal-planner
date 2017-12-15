import React, { Component } from 'react';
import Proptypes from 'prop-types';
import  { generateId } from '../../../../utils/generate';

export default class RadioGroup extends Component {

  passPropsToChildren = () => {
    const { children, handleChange, activeIndex } = this.props;
    return React.Children.map(children,(child,index) =>
             React.cloneElement(
              child,
              {
                index: index,
                onChange: handleChange,
                checked: index === activeIndex,
              },
            )
          );
  }
  render(){
    return(
      <div className={`RadioGroup ${this.props.className}`} >
        {this.passPropsToChildren()}
      </div>
    )
  }
}
export const Radio = (props) => {
  const id = generateId();
  return (
    <div>
      <input className="Radio" type="radio" checked={props.checked} name={props.name} id={id}
             onChange={
              () => {
                props.onChange(props.index);
               }
             } />
      <label htmlFor={id} className={props.className}>{props.children}</label>
    </div>
  );
}

Radio.propTypes = {
  name: Proptypes.string,
  index: Proptypes.number,
  onChange: Proptypes.func,
  checked: Proptypes.bool,
  className: Proptypes.string
}
RadioGroup.propTypes = {
  activeIndex: Proptypes.number,
  handleChange: Proptypes.func,
  className: Proptypes.string
}
