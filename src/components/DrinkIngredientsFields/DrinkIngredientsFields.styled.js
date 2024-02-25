import styled from 'styled-components';
import { device } from 'constants/device';

export const IngredientsStyle = styled.div`
  display: grid;
  width: 335px;
  margin-bottom: 40px;

  & .react-select {
    margin-left: auto;
    background-color: transparent;
    color: #fff;
    &__control {
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: white !important;
    }
    &--menu-is-open {
      background-color: transparent;
    }
    &__indicator-separator {
      display: none;
    }
    &__menu {
      background-color: rgba(22, 31, 55, 1);
      border-radius: 20px;
    }
    &__option {
      cursor: pointer;
      &--is-focused {
        color: white;
        background-color: transparent;
      }
    }
    &__single-value {
      color: white;
    }
  }

  .counter {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 50px;
    /* opacity: 0.1; */
    width: 104px;
    height: 38px;
    /* transition: all; */
    color: white;
    /* padding: 0 10px; 0 10 */
  }
  .btnCounter {
    background-color: ${(props) => props.theme.whiteZeroColor};
    border: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    text-align: center;
    color: #f3f3f3;
  }
  .titleCounter {
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    text-align: center;
    color: #f3f3f3;
  }
  .title {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .text {
    font-weight: 600;
    font-size: 28px;
    line-height: 114%;
    color: #f3f3f3;
  }
  .listIngr {
    display: grid;
    /* justify-content: space-between; */
    gap: 10px;
  }
  .itemIngr {
    display: flex;
  }
  .ingredient {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .inputStyle {
    background-color: ${(props) => props.theme.whiteZeroColor};
    color: white;
    border-radius: 200px;
    width: 200px;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: #f3f3f3;
  }
  .quantity {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    border: 1px solid rgba(243, 243, 243, 0.5);
    /* opacity: 0.1; */
    border-radius: 200px;
    width: 101px;
    height: 50px;
    transition: all;
    color: white;
  }
  .textQuantity {
    width: 30px;
    background-color: ${(props) => props.theme.whiteZeroColor};
    border: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    text-align: center;
    color: #f3f3f3;
  }
  .btnDelet {
    background-color: ${(props) => props.theme.whiteZeroColor};
    border: none;
    font-size: 18px;
    color: #f3f3f3;
  }
`;
