import{s as e,j as n}from"./index-dfe5369e.js";const t="/drinkon-frontend/assets/404_iced_tea@1x_sm-a8bc46fc.png",d="/drinkon-frontend/assets/404_iced_tea@2x_sm-0a222142.png",a="/drinkon-frontend/assets/404_iced_tea@1x_md-f54c9dfb.png",r="/drinkon-frontend/assets/404_iced_tea@2x_md-811df41c.png",o=e.div`
  width: 123px;
  height: 156px;
  background-image: url(${t});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${d});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${a});
    width: 158px;
    height: 201px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${r});
  }
`,i=e.p`
  color: var(--white-ten-color);
  font-family: 'Manrope';
  font-size: 120px;
  font-weight: 600;
  line-height: 123px;
  letter-spacing: 0em;

  @media screen and (min-width: 767px) and (max-width: 1439px) {
    font-family: 'Manrope';
    font-size: 150px;
    font-weight: 600;
    line-height: 123px;
    letter-spacing: 0em;
  }
  @media screen and (min-width: 1440px) {
    font-family: 'Manrope';
    font-size: 200px;
    font-weight: 600;
    line-height: 200px;
    letter-spacing: 0em;
  }
`,s=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 0;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`,p=()=>n.jsxs(s,{children:[n.jsx(i,{children:"4"}),n.jsx(o,{}),n.jsx(i,{children:"4"})]});export{p as default};
