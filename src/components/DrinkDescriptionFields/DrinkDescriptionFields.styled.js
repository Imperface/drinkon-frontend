import styled from "styled-components";
import { device } from 'constants/device';


export const DrinkStyle = styled.div`
.inputImg{
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.whiteTwentyColor};'/.;
}
input[type=file]{
 
  outline:0;
  opacity:0;
  /* pointer-events: visible; */
  user-select:none}



.image{
  display: grid;
  width: 335px;
height: 320px;
border: none;
background: ${(props) => props.theme.darkBlueColor};
};
.titleImg{
  font-size: 16px;
  font-weight: 500;
  color: #F3F3F3;
};

`;