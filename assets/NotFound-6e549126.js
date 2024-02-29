import{s as n,j as e}from"./index-0a84b6e4.js";const t="/refreshing-drink-frontend/assets/404_iced_tea@1x_sm-a8bc46fc.png",d="/refreshing-drink-frontend/assets/404_iced_tea@2x_sm-0a222142.png",a="/refreshing-drink-frontend/assets/404_iced_tea@1x_md-f54c9dfb.png",r="/refreshing-drink-frontend/assets/404_iced_tea@2x_md-811df41c.png",s=n.div`
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
`,i=n.p`
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
`,o=n.div`
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
`,p=()=>e.jsxs(o,{children:[e.jsx(i,{children:"4"}),e.jsx(s,{}),e.jsx(i,{children:"4"})]});export{p as default};
