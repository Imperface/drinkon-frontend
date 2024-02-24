import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);

  @media screen and (min-width: 768px) {
    padding: 20px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 28px 100px;
    align-items: center;
  }

  .media-screen-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
