import React from 'react';
import * as C from './styles';

const RadioButtonLabel = ({ label, value, onChange }) => {
  return (
    <C.RadioButtonLabel>
      <input onChange={onChange} value={value} type="radio" checked={value} />
      <label onChange={onChange}>{label}</label>
    </C.RadioButtonLabel>
  );
};

export default RadioButtonLabel;
