import { styled } from 'styled-components';
import { device } from 'constants/device';

export const TermsOfServiceWrapper = styled.div`
  width: 100%;
  font-size: 14px;
  padding: 80px 0;

  @media ${device.tablet} {
    font-size: 18px;
    padding: 120px 0 140px;
  }
  @media ${device.desktop} {
    padding: 158px 0 140px;
  }
  & h1 {
    margin-bottom: 30px;
  }
  & .termsOfService-section {
    margin: 0 auto;
    padding: 30px 0;
  }
  & p + p {
    margin-top: 30px;
  }
`;
