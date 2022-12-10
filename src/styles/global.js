import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
    margin-bottom: 50px;
}
`;
