import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-direction: row;
  }

  .navigation-link {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.6;
    padding: 8px 16px;
    border-radius: 40px;
    border: 1px solid rgba(243, 243, 243, 0.2);
    box-sizing: border-box;
    transition:
      background 300ms,
      border 300ms,
      color 300ms;
    overflow: hidden;

    &:hover,
    &.active,
    &:focus {
      color: ${({ theme }) => theme.whiteColor};
      background: ${({ theme }) => theme.darkBlueColor};
      border: 1px solid transparent;
    }
  }
`;

export const StyledNavigationMobile = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-direction: column;
  padding-top: 160px;

  .navigation-link {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.6;
    padding: 8px 16px;
    border-radius: 40px;
    border: 1px solid rgba(243, 243, 243, 0.2);
    box-sizing: border-box;
    transition:
      background 300ms,
      border 300ms,
      color 300ms;
    overflow: hidden;

    &:hover,
    &.active,
    &:focus {
      color: ${({ theme }) => theme.whiteColor};
      background: ${({ theme }) => theme.darkBlueColor};
      border: 1px solid transparent;
    }
  }
`;
