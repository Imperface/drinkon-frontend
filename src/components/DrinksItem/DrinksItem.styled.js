import styled from 'styled-components';
import { device } from 'constants/device';

export const StyledDrinksItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 335px;

  @media ${device.tablet} {
    width: 342px;
    gap: 24px;
  }

  @media ${device.desktop} {
    width: 400px;
  }
`;
export const StyledDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media ${device.tablet} {
    gap: 24px;
  }
`;
export const Title = styled.h2`
  margin-bottom: 4px;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: ${(props) => props.theme.whiteColor};

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const TextAlcohol = styled.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(props) => props.theme.whiteFiftyColor};

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const TextDescr = styled.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(props) => props.theme.whiteColor};

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ButtonMore = styled.button`
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
  background: ${(props) => props.theme.darkBlueColor};
  border-radius: 42px;
  padding: 14px 40px;
  height: 46px;

  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(props) => props.theme.whiteColor};

  @media ${device.tablet} {
    height: 54px;
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const ButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;

  border-radius: 40px;
  padding: 11px;
  width: 46px;
  height: 46px;
  background: ${(props) => props.theme.darkBlueColor};
  fill: ${(props) => props.theme.whiteColor};

  @media ${device.tablet} {
    padding: 15px;
    width: 56px;
    height: 54px;
  }
`;
