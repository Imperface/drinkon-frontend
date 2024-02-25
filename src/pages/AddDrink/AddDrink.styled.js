import { styled } from 'styled-components';
import { device } from 'constants/device';
export const AddDrinkWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 80px;
  padding: 80px 0;
  @media ${device.tablet} {
    padding: 140px 0;
  }
  @media ${device.desktop} {
    padding: 160px 0 140px;

    & .drinkBlocks {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    & .sideBar {
      width: 100%;
    }
  }

  & .sideBar {
    width: 300px;
  }
`;
