import React from 'react';
import Proptypes from 'prop-types';
import './Select.css';

const Select = (props) => (
  <select value={props.value} onChange={props.handler} name={props.name} className={`Select ${props.className}`}>
    {
      props.options.map(
        (ele) => <option value={ele.val} key={ele.val}>{ele.text}</option>
      )
    }
  </select>
)
Select.propTypes = {
  value: Proptypes.number,
  handler: Proptypes.func,
  name: Proptypes.string,
  className: Proptypes.string,
  options: Proptypes.array
}
export default Select;
