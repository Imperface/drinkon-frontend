import { styled } from 'styled-components';
import { device } from 'constants/device';

export const FollowUsWrapper = styled.div`
  margin-top: 80px;
  @media ${device.tablet} {
    margin-top: 80px;
  }
  @media ${device.desktop} {
    margin-top: 0;
  }
`;

export const FollowUsTitle = styled.h3`
  width: 106px;
  height: 36px;
  font-family: Manrope;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 20px;
  @media ${device.tablet} {
    font-size: 24px;
    margin-bottom: 24px;
  }
  @media ${device.desktop} {
    height: 130px;

    padding-top: 90px;
  }
`;

export const FollowUsList = styled.ul`
  display: flex;
  column-gap: 16px;
`;

export const FollowUsListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
  transition: all 0.3s;
  border-radius: 10px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: rgba(243, 243, 243, 0.8);

  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.5);
    color: rgba(243, 243, 243, 1);
  }
`;

export const FollowUsLink = styled.a`
  display: flex;
  height: 44px;
  width: 44px;
  align-items: center;
  justify-content: center;
`;
