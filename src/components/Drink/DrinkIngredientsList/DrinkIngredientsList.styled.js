import styled from 'styled-components';
import { device } from 'constants/device';

export const Title = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;

  color: rgba(243, 243, 243, 0.5);

  margin-bottom: 42px;

  @media screen and ${device.tablet} {
    margin-bottom: 24px;
  }
`;

export const ListIngredients = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  column-gap: 22px;

  margin-bottom: 80px;

  @media screen and ${device.tablet} {
    column-gap: 22px;
  }
  @media screen and ${device.desktop} {
    margin-bottom: 100px;
    justify-content: left;
  }
`;

export const ItemIngredient = styled.li`
  width: 157px;
  @media screen and ${device.tablet} {
    width: 220px;
  }
`;

export const ImagesIngredient = styled.img`
  background-color: #161f37;
  border-radius: 8px;
  padding: 25px;
  width: 100%;
  margin-bottom: 8px;

  @media screen and ${device.tablet} {
    padding: 22px;
  }
`;

export const InfoIngredient = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameIngredient = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  margin: 0;

  @media screen and ${device.tablet} {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const MeasureIngredient = styled.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  @media screen and ${device.tablet} {
    font-size: 16px;
    line-height: 1.25;
  }
`;
