import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 23px 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 28px;
    padding-bottom: 28px;
    align-items: center;
  }
`;
