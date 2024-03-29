import { styled } from 'styled-components';

import background1_sm from '../../images/404/404_iced_tea@1x_sm.png';
import background2_sm from '../../images/404/404_iced_tea@2x_sm.png';
import background1_md from '../../images/404/404_iced_tea@1x_md.png';
import background2_md from '../../images/404/404_iced_tea@2x_md.png';

const ErrorPageImage = styled.div`
  width: 123px;
  height: 156px;
  background-image: url(${background1_sm});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${background2_sm});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${background1_md});
    width: 158px;
    height: 201px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${background2_md});
  }
`;

const ErrorPageText = styled.p`
  color: var(--white-ten-color);
  font-family: 'Manrope';
  font-size: 120px;
  font-weight: 600;
  line-height: 123px;
  letter-spacing: 0em;

  @media screen and (min-width: 767px) and (max-width: 1439px) {
    font-family: 'Manrope';
    font-size: 150px;
    font-weight: 600;
    line-height: 123px;
    letter-spacing: 0em;
  }
  @media screen and (min-width: 1440px) {
    font-family: 'Manrope';
    font-size: 200px;
    font-weight: 600;
    line-height: 200px;
    letter-spacing: 0em;
  }
`;

const CenterPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 0;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export { ErrorPageText, ErrorPageImage, CenterPageContainer };
