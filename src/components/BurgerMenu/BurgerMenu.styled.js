import styled from 'styled-components';

export const StyledBurgerMenu = styled.div`
  display: flex;

  @media screen and (min-width: 1440px) {
    display: none;
  }

  .burger-btn {
    border: none;
    background-color: inherit;
    padding: 0;
  }

  .burger-svg {
    display: block;
  }
`;
