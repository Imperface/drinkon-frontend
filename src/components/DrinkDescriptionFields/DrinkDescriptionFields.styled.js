import styled from "styled-components";
import { device } from 'constants/device';


export const DrinkStyle = styled.div`
 display: block;
  width: 335px;

  .addAvatar {
  display: grid;
  };

  input[type=file]{
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.whiteTwentyColor};
  outline:0;
  opacity:0;
  user-select:none;
};

.formDescription{
  display: grid;
  gap: 20px;
  width: 335px;
  height: 229px;
}

  .inputStyle{
    font-weight: 400;
font-size: 14px;
line-height: 100%;
color: #f3f3f3;
  border: none;
background-color: ${(props) => props.theme.whiteTenColor};
height: 34px;
/* margin-bottom: 35px; */
};
.titleAvatar {
font-size: 16px;
  font-weight: 500;
  color: #F3F3F3;
  
};

.label{
  width: 335px;
  height: auto;
  padding-bottom: 10px;
  /* margin-bottom: 35px; */
  display: block;
  font-size: 14px;
  color: ${(props) => props.theme.whiteFiftyColor};
  font-weight: 400;
  margin-left: auto;
margin-right: auto;
}
`;