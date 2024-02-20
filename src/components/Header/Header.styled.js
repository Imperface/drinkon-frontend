import { styled } from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.blue};
  padding: 30px 20px;
  color: ${(props) => props.theme.white};
  & .header-nav {
    display: flex;
    justify-content: center;
    column-gap: 20px;
  }
  & .nav-link {
    border: 1px solid ${(props) => props.theme.black};
    padding: 10px 20px;
    border-radius: 20px;
    transition: all 0.3s;
    &:hover {
      background-color: ${(props) => props.theme.white};
      color: ${(props) => props.theme.black};
      border-color: transparent;
    }
  }
`;
