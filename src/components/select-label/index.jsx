import React from 'react';
import Select from 'react-select';
import * as C from './styles';
// import 'styles.css';

/**
 * value: string
 * label: string
 */
const colorStyle = {
  control: (styles, state) => ({
    ...styles,
    border: '1px solid #000',
    backgroundColor: '#f5f0f6',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': {
      border: '1px solid #000',
    },
  }),
  option: (styles, state) => {
    return {
      ...styles,
      cursor: 'pointer',
      color: state.isSelected ? '#e71d36' : '#000',
      backgroundColor: '#f8f7f2',
      '&:click::after': {
        backgroundColor: 'red',
      },
    };
  },
};
const SelectLabel = ({ title, defaultValue, options, onChange, isMulti }) => {
  return (
    <C.SelectLabel>
      <label>{title}</label>
      <Select
        className="select"
        value={defaultValue}
        options={options}
        onChange={onChange}
        isMulti={isMulti}
        styles={colorStyle}
        placeholder={'Escolha uma opcão...'}
      />
    </C.SelectLabel>
  );
};

export default SelectLabel;
