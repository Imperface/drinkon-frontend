import styled from 'styled-components';
import { device } from 'constants/device';

export const DrinkContainer = styled.div`
  @media screen and ${device.desktop} {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
`;

export const DrinkText = styled.div`
  @media screen and ${device.tablet} {
    max-width: 593px;
  }
`;

export const Title = styled.p`
  font-size: 12px;
  line-height: 1.17;
  color: rgba(243, 243, 243, 0.5);

  margin-bottom: 20px;

  @media screen and ${device.tablet} {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const Desc = styled.p`
  font-size: 14px;
  line-height: 1.3;

  margin-bottom: 40px;

  @media screen and ${device.tablet} {
    font-size: 16px;
    line-height: 1.35;
  }
`;

export const ImagesDrink = styled.img`
  width: 335px;
  height: 400px;

  margin-bottom: 18px;
  border-radius: 8px;

  object-fit: cover;

  @media screen and ${device.tablet} {
    width: 704px;
    height: 400px;
    margin-bottom: 80px;
  }

  @media screen and ${device.desktop} {
    width: 400px;
    height: 400px;
    position: absolute;
    right: 0;
    top: -92px;
  }
`;
