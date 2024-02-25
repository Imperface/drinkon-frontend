import styled from 'styled-components';
import { device } from 'constants/device';

export const PlaceholderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    margin-bottom: 32px;
    width: 198px;
    height: 247px;

    @media ${device.tablet} {
      width: 261px;
      height: 326px;
    }
  }
  & p {
    width: 205px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    text-align: center;
    color: ${(props) => props.theme.whiteColor};

    @media ${device.desktop} {
      width: 236px;
      font-size: 16px;
      line-height: 1.375;
    }
  }
`;
