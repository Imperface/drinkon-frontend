import { styled } from 'styled-components';
import { device } from 'constants/device';

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Manrope', sans-serif;

  & .heroContainer {
    margin: 80px auto 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 335px;
    height: 100%;
    justify-content: center;
  }

  & .title {
    color: ${(props) => props.theme.whiteColor};
    max-width: 335px;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.19;
  }

  & .titleAbout {
    color: ${(props) => props.theme.whiteColor};
    padding: 16px 0 32px;
    font-size: 14px;
    font-weight: 400;
    width: 335px;
    line-height: 1.43;
  }

  & .addDrink {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 42px;
    width: 151px;
    height: 46px;
    font-weight: 600;
    font-size: 14px;
    border: 1px solid transparent;
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.darkBlueColor};

    &:hover {
      transition: all 0.3s;
      background-color: transparent;
      color: ${(props) => props.theme.whiteColor};
      border: 1px solid ${(props) => props.theme.whiteTwentyColor};
    }
  }

  & .heroImg {
    padding-top: 47px;
    display: flex;
    justify-content: center;
  }

  & .img {
    width: 252px;
    height: 313px;
  }

  & .otherDrinks {
    display: flex;
    margin: 0 auto 80px;
    align-items: center;
    justify-content: center;
    border-radius: 42px;
    width: 163px;
    height: 46px;
    font-weight: 600;
    font-size: 14px;
    border: 1px solid transparent;
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.darkBlueColor};

    &:hover {
      transition: all 0.3s;
      background-color: transparent;
      color: ${(props) => props.theme.whiteColor};
      border: 1px solid ${(props) => props.theme.whiteTwentyColor};
    }
  }

  @media ${device.tablet} {
    & .heroContainer {
      margin: 120px auto 0;
      width: 641px;
    }

    & .title {
      max-width: 641px;
      font-size: 56px;
      line-height: 1.071;
    }

    & .titleAbout {
      padding: 28px 0 48px;
      font-size: 18px;
      width: 619px;
      line-height: 1.33;
    }

    & .addDrink {
      width: 169px;
      height: 54px;
      font-size: 16px;
    }

    & .heroImg {
      padding-top: 54px;
    }

    & .img {
      width: 359px;
      height: 445px;
    }

    & .otherDrinks {
      margin: 0 auto 140px;
      width: 183px;
      height: 54px;
      font-size: 16px;
    }
  }

  @media ${device.desktop} {
    & .heroContainer {
      margin: 128px auto 0;
      gap: 130px;
      width: 1204px;
      height: 100%;
    }

    & .hero {
      width: 715px;
      padding: 57.5px 0;
      margin-block-end: 0;
    }

    & .title {
      max-width: 715px;
      font-size: 64px;
      line-height: 1.063;
    }

    & .titleAbout {
      padding: 28px 0 40px;
      width: 500px;
    }

    & .addDrink {
      width: 160px;
      height: 54px;
    }

    & .heroImg {
      padding-top: 0;
    }
  }
`;
