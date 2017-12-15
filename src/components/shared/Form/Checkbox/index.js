import React from 'react';
import Proptypes from 'prop-types';
import './Checkbox.css';
import  { generateId } from '../../../../utils/generate';

const createCheckbox = (data, toggleHandler, isCheckedState) => (
  <Checkbox
    name={ data.name }
    handler={ toggleHandler }
    key={ data.name }
    isChecked = { isCheckedState[data.name] ? true : false }
    text = { data.text }
  />
);

const CheckboxGroup = (props) => (
  <div className={`${props.className}`}>
  {props.data.map((checkboxData) => createCheckbox(checkboxData,props.toggleHandler,props.isCheckedState))}
  </div>
);

const Checkbox = (props) => {
  const { name, text, isChecked, handler } = props;
  const id = generateId();
  return (
    <div className="Checkbox">
      <label htmlFor={id} className={`Checkbox__label ${props.className}`}>
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            handler(name);
          }}
        />
      {text}
      </label>
    </div>
  )
}
Checkbox.propTypes = {
  name: Proptypes.string,
  text: Proptypes.string,
  isChecked: Proptypes.bool,
  handler: Proptypes.func,
  className: Proptypes.string
}
CheckboxGroup.propTypes = {
  data: Proptypes.array,
  toggleHandler: Proptypes.func,
  isCheckedState: Proptypes.object,
  className: Proptypes.string
}

export {
  Checkbox,
  CheckboxGroup
}
