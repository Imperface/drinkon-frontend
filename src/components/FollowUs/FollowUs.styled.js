import { styled } from 'styled-components';

export const FollowUsWrapper = styled.div`
height: 100px;
width: 160px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const FollowUsTitle = styled.h3`
  width: 106px;
  height: 32px;
  font-family: Manrope;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
`;

export const FollowUsList = styled.ul`
display: flex;
justify-content: space-around;
`;

export const FollowUsListItem = styled.li`
  height: 44px;
  width: 44px;

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