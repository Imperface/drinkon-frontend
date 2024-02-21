import styled from 'styled-components';
import { device } from 'constants/device';

export const StyledDrinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: 54px;

  @media ${device.tablet} {
    margin-bottom: 94px;

    row-gap: 80px;
    column-gap: 20px;
  }
`;
