import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-left: 224px;
    margin-right: 191px;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 8px 16px;
  border-radius: 40px;
  transition: background 0.2s;
  overflow: hidden;

  &:active {
    color: #fff;
    background: #000;
    border: red;
  }

  @media screen and (min-width: 768px) {
    line-height: 22.4px;
  }
`;
