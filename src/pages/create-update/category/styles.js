import styled from 'styled-components';

export const ScreenArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 150px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 45px 60px;
  min-width: 700px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px #4a4a4a;
  h2 {
    text-align: center;
  }
  .actions {
    display: flex;
    justify-content: space-between;
  }
`;
