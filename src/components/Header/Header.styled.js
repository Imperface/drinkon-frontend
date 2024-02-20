import { styled } from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: blue;
  padding: 30px 20px;
  color: white;
  & .header-nav {
    display: flex;
    justify-content: center;
    column-gap: 20px;
  }
  & .nav-link {
    border: 1px solid black;
    padding: 10px 20px;
    border-radius: 20px;
    transition: all 0.3s;
    &:hover {
      background-color: #fff;
      color: black;
      border-color: transparent;
    }
  }
`;
