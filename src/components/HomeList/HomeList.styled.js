import { styled } from 'styled-components';
import { device } from 'constants/device';

export const HomeListWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 112px auto 60px;
  font-family: 'Manrope', sans-serif;

  & .categoryList {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px;
  }

  & .categoryTitleItem {
    font-size: 28px;
    font-weight: 600;
    line-height: 1.14;
    color: ${(props) => props.theme.whiteColor};
    font-family: 'Manrope', sans-serif;
    padding-bottom: 24px;
  }

  & .drinkList {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }

  & .categoryItem {
    width: 335px;
  }

  & .drinkItem:nth-child(2),
  & .drinkItem:nth-child(3) {
    display: none;
  }

  & .drinkItem:hover {
    transform: scale(1.05);
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & .imgItem {
    border-radius: 8px;
    width: 335px;
    height: 360px;
  }

  & .drinkAbout {
    padding-top: 14px;
    display: flex;
    justify-content: space-between;
  }
  & .drinkTitleItem {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.13;
    color: ${(props) => props.theme.whiteColor};
  }
  & .linkId {
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.whiteFiftyColor};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.whiteColor};
    }
  }

  @media ${device.tablet} {
    margin: 123px auto 80px;

    & .categoryList {
      gap: 80px;
    }

    & .categoryTitleItem {
      font-size: 40px;
      line-height: 1.1;
      padding-bottom: 40px;
    }

    & .categoryItem {
      width: 704px;
    }

    & .drinkItem:nth-child(2) {
      display: block;
    }

    & .imgItem {
      width: 342px;
      height: 360px;
    }

    & .drinkTitleItem {
      font-size: 18px;
      line-height: 1.33;
    }

    & .linkId {
      font-size: 16px;
    }
  }
  @media ${device.desktop} {
    margin: 218px auto 80px;

    & .drinkItem:nth-child(3) {
      display: block;
    }

    & .categoryList {
      justify-content: center;
    }

    & .categoryItem {
      width: 1240px;
      height: 522px;
    }

    & .imgItem {
      width: 400px;
      height: 400px;
    }
  }
`;
