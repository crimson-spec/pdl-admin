import styled from 'styled-components';
export const InputLabel = styled.div`
  label {
    font-size: 20px;
    font-weight: 400px;
    text-transform: capitalize;
  }

  input {
    padding: 10px 16px;
    width: 100%;
    border-radius: 5px;
    font-size: 18px;
    background-color: #f5f0f6;
    border: 1px solid #000;
    outline: none;
  }
  /* 
  .input-error {
    border-color: ${(props) => props.theme.colors.primary};
  } */
`;
