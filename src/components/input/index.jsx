import React from 'react';
import * as C from './styles';

const Input = ({ type, placeholder, value, onChange, name }) => {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
