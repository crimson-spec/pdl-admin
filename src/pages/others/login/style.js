import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const Leftside = styled.div`
  width: 40%;
  height: 100vh;
  min-width: 600px;
  background: url(restaurante.webp) no-repeat center center;
  background-size: cover;
`;

export const Rightside = styled.div`
  width: 60%;
  height: 100v;
  min-width: 700px;
  display: flex;
  gap: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  h3 {
    color: #220901;
    text-decoration: underline;
  }

  span {
    color: red;
    font-style: italic;
  }
`;

export const AreaLogin = styled.div`
  display: flex;
  width: 650px;

  background-color: #ffffff;
  gap: 15px;
  padding: 45px;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #4a4a4a;

  .logo {
    text-align: center;
    img {
      width: 250px;
    }
  }
  .title {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    text-transform: uppercase;
  }
`;
