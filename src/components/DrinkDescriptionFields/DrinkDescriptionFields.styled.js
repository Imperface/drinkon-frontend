import styled from "styled-components";
import { device } from 'constants/device';


export const DrinkStyle = styled.div`
 display: block;
  width: 335px;
  margin-bottom: 40px;

  .addAvatar {
    position: relative;
  display: grid;
  width: 335px;
  height: 320px;
  margin-bottom: 40px;
  background-color: ${(props) => props.theme.darkBlueFiftyColor};
  };
 .avatar{
  position: absolute;
  top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 80px;
height: 88px;
 }
 .icon{
  color: black;
  background-color: #F3F3F3;
  border-radius: 6px;
  position: absolute;
  top: 30%;
    left: 50%;
    margin-bottom: -50%;
    transform: translate(-50%, -50%);
  width: 50px;
height: 50px;
 }
  input[type=file]{
    position: absolute;
  top: 20%;
    left: 50%;
    margin-bottom: -50%;
    transform: translate(-50%, -50%);
width: 50px;
height: 50px;
  /* background: ${(props) => props.theme.whiteZeroColor}; */
  outline:0;
  opacity:0;
  user-select:none;
};

.formDescription{
  display: grid;
  gap: 20px;
  width: 335px;
  height: 229px;
  margin-bottom: 40px;
}

  .inputStyle{
    font-weight: 400;
font-size: 14px;
line-height: 100%;
color: #f3f3f3;
  border: none;
background-color: ${(props) => props.theme.whiteZeroColor};
height: 34px;
/* margin-bottom: 35px; */
};
.titleAvatar {

  position: absolute;
font-size: 16px;
  font-weight: 500;
  color: #F3F3F3;
  margin-top: 70px;
  
};
.itemForm{
  display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 50px;
    width: 104px;
    height: 38px;
    color: white;
}

.label{
  display: flex;
    justify-content: space-between;
    align-items: center;
  width: 335px;
  height: auto;
  padding-bottom: 10px;
  /* margin-bottom: 40px; */
  font-size: 14px;
  color: ${(props) => props.theme.whiteFiftyColor};
  font-weight: 400;
  border-width: 1px;
 border-top-style: none;
border-bottom-style: solid;
}  
.radioBtn{
  width: 80px;
height: 19px;
font-weight: 400;
font-size: 14px;
letter-spacing: -0.02em;
padding: 5px;
margin-right: 20px;
/* color: #f3f3f3; */
}
.textRadioBtn{
  font-weight: 400;
font-size: 14px;
letter-spacing: -0.02em;
padding-left: 10px;
/* padding: 5px; */
}
`;