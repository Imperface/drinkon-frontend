import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterCopyrightWrapper = styled.div`
  padding-top: 80px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 153px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
  }
`;

export const FooterText = styled.p`
  color: ${(props) => props.theme.whiteFiftyColor};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  opacity: 0.9;
  min-width: 242px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const FooterLinkInfo = styled.ul`
  padding-top: 8px;
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    padding-top: 0px;
  }
`;

export const FooterLink = styled(Link)`
  color: ${(props) => props.theme.whiteFiftyColor};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: right;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: ${(props) => props.theme.whiteColor};
    transform: scale(1.1);
  }
`;
