import styled from 'styled-components';
import Select from 'react-select';
import { device } from 'constants/device';

export const ContainerDiv = styled.div`
  width: 335px;
  margin-bottom: 40px;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media ${device.tablet} {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }
  }

  .inputContainer {
    position: relative;
    display: inline-block;
  }

  .buttonSvg {
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    padding: 8px 12px;
    border: none;
    background-color: inherit;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  padding: 18px 0 18px 24px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 200px;
  background-color: transparent;
  color: #f3f3f3;
  width: 335px;
  opacity: 0.8;
  ::placeholder {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.56;
    color: #f3f3f3;
  }

  @media ${device.tablet} {
    width: 264px;
  }
`;

export const CustomSelect = styled(Select)`
  width: 335px;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.56;
  color: #f3f3f3;
`;

export const CustomStyles = {
  ...CustomSelect,
  control: (provided) => ({
    ...provided,
    padding: '8px 16px 8px 24px',
    width: '335px',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '1.28571',
    color: '#f3f3f3',
    border: '1px solid rgba(243, 243, 243, 0.2)',
    borderRadius: '200px',
    backgroundColor: '#161f37',
    [`@media ${device.tablet}`]: {
      width: '199px',
      fontSize: '17px',
      lineHeight: '1.56',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    backgroundColor: '#161f37',
    color: '#f3f3f3',
  }),
  placeholder: (provided) => ({
    ...provided,
    width: '107px',
    backgroundColor: '#161f37',
  }),
  menu: (provided) => ({
    ...provided,
    border: '1px solid rgba(243, 243, 243, 0.2)',
    borderRadius: '20px',
    backgroundColor: '#161f37',
    width: '100%',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};
