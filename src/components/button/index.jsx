import React from 'react';
import * as C from './styles';

const Button = ({ children, onClick, fullWidth, type = 0 }) => {
  return (
    <C.Button
      type={type}
      style={fullWidth ? { width: '100%' } : {}}
      onClick={onClick}
    >
      {children}
    </C.Button>
  );
};

export default Button;
