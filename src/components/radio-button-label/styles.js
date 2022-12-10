import styled from 'styled-components';
export const RadioButtonLabel = styled.div`
  align-items: center;
  justify-content: center;
  input {
    margin-right: 15px;
    cursor: pointer;
  }

  input[type='radio']:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #f5f0f6;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 1px solid #000;
  }

  input[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #e71d36;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 1px solid #000;
  }

  label {
    font-size: 20px;
    font-weight: 400px;
    font-style: italic;
  }
`;
