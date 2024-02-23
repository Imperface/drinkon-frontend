import styled from 'styled-components';
import { device } from 'constants/device';

export const DrinkContainer = styled.div`
  padding-bottom: 18px;
  @media ${device.tablet} {
    padding-bottom: 80px;
  }
  @media ${device.desktop} {
    padding-bottom: 100px;

    display: flex;
    justify-content: space-between;
  }
`;

export const DrinkText = styled.div`
  @media ${device.tablet} {
    max-width: 593px;
  }
`;

export const Title = styled.p`
  font-size: 12px;
  line-height: 1.17;
  color: rgba(243, 243, 243, 0.5);

  margin-bottom: 20px;

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const Desc = styled.p`
  font-size: 14px;
  line-height: 1.3;

  margin-bottom: 40px;

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.35;
  }
`;

export const ImagesDrink = styled.img`
  width: 335px;
  height: 400px;

  border-radius: 8px;

  object-fit: cover;

  @media ${device.tablet} {
    width: 704px;
    height: 400px;
  }

  @media ${device.desktop} {
    width: 400px;
    height: 400px;
  }
`;
