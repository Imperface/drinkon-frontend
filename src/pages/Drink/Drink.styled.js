import styled from 'styled-components';
import { device } from 'constants/device';

export const DrinkWrapper = styled.div`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  & h1 {
    margin-bottom: 8px;
  }

  @media ${device.tablet} {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media ${device.desktop} {
    padding-top: 158px;
    padding-bottom: 140px;
  }
`;
