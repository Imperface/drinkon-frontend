import styled from 'styled-components';
import { device } from 'constants/device';

export const Container = styled.div`
  @media screen and ${device.desktop} {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14;

  margin-bottom: 40px;

  @media screen and ${device.tablet} {
    line-height: 1.1;

    font-size: 40px;
  }

  @media screen and ${device.desktop} {
    margin-bottom: 60px;
  }
`;

export const Recipe = styled.p`
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 40px;

  @media screen and ${device.tablet} {
    font-size: 16px;
    line-height: 1.4;
  }

  @media screen and ${device.desktop} {
    width: 549px;
  }
`;

export const Images = styled.img`
  width: 335px;
  height: 430px;

  border-radius: 8px;
  object-fit: cover;

  @media screen and ${device.tablet} {
    width: 704px;
    height: 430px;
  }

  @media screen and ${device.desktop} {
    width: 631px;
    height: 480px;
  }
`;
