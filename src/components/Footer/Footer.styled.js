import { styled } from 'styled-components';
import { device } from 'constants/device';

export const FooterWrapper = styled.div`
  border-top: 1px solid rgba(243, 243, 243, 0.2);
  & .container {
    display: flex;

    flex-wrap: wrap;
    color: ${(props) => props.theme.whiteColor};
    margin: 0 auto;
    padding: 40px 20px 18px;
    width: 375px;
  }

  & .aboutUs {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
  }

  & .aboutUsInfoLogo {
    margin-bottom: 20px;
  }

  & .footerNav {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 14px;
    font-size: 14px;
  }
  @media ${device.tablet} {
    & .container {
      padding: 80px 32px 24px;

      width: 768px;
      justify-content: space-between;
    }

    & .aboutUs {
      width: 50%;
      flex-wrap: wrap;
      padding-bottom: 0;
      row-gap: 40px;
    }

    & .aboutUsInfo {
      width: 100%;
    }
    & .aboutUsInfoLogo {
      margin-bottom: 28px;
    }
    & .footerNav {
      & li {
        transition: all 0.3s;
      }
      row-gap: 16px;
      & li:hover {
        transform: scale(1.1);
      }
    }
  }

  @media ${device.desktop} {
    & .container {
      padding: 80px 100px 24px;

      width: 1440px;
    }
    & .aboutUsInfo {
      width: 50%;
    }
    & .aboutUsInfoLogo {
      margin-bottom: 40px;
    }
    & .footerNav {
      row-gap: 24px;
    }
  }
`;
