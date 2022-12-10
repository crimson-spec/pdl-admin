import React from 'react';
import * as C from './styles';

const InputLabel = ({ title, ...rest }) => {
  return (
    <C.InputLabel>
      <label>{title}</label>
      <input {...rest} />
    </C.InputLabel>
  );
};

export default InputLabel;
