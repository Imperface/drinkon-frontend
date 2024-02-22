import styled from 'styled-components';

export const StyledUserLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-right: 14px;

  @media screen and (min-width: 768px) {
    gap: 14px;
    margin-right: 24px;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
    margin-right: 0;
  }

  .user-logo-wrapper {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;

    @media screen and (min-width: 768px) {
      width: 44px;
      height: 44px;
    }
  }

  .user-logo-text {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
