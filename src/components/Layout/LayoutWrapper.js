import { styled } from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0 auto;

  & .loader {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  & main {
    flex-grow: 1;
    display: flex;
  }
`;
