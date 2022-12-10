import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 16px;
  border-radius: 5px;
  font-size: 18px;
  background-color: ${(props) => {
    let color;
    switch (props.type) {
      case 0:
        color = props.theme.colors.primary;
        break;
      case 1:
        color = '#40e0d0';
        break;
      case 2:
        color = '#939597';
        break;
      default:
        color = '#ddd';
    }
    return color;
  }};
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
`;
