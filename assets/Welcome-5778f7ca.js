import{s,N as p,j as t}from"./index-a775de5d.js";const i="/drinkon-frontend/assets/start-desc@1x-056acf8c.jpg",l="/drinkon-frontend/assets/start-desc@2x-1b660c93.jpg",o="/drinkon-frontend/assets/start-tabl@1x-d2779c30.jpg",d="/drinkon-frontend/assets/start-tabl@2x-baeefd91.jpg",n="/drinkon-frontend/assets/start-mob@1x-d50afbcf.jpg",c="/drinkon-frontend/assets/start-mob@2x-166b0082.jpg",a="/drinkon-frontend/assets/bg-welcome-desc@1x-d9c12561.jpg",x="/drinkon-frontend/assets/bg-welcome-desc@2x-9b80a98c.jpg",g=s.div`
  color: ${e=>e.theme.startPageTxtColor};
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  font-family: 'Manrope', sans-serif;

  @media (max-width: 768px) {
    background-position: center;
    background-image: url(${n});
    @supports (-webkit-image-set: url()) {
      background-image: -webkit-image-set(
        url(${n}) 1x,
        url(${c}) 2x
      );
    }
    background-position: center;
    & section {
      width: 335px;
      margin: auto auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
    }

    & div:first-of-type {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
    }
    & h2 {
      display: flex;
      flex-wrap: wrap;
      font-weight: 600;
      font-size: 28px;
      line-height: 1.14;
      letter-spacing: -0.02em;
      padding-bottom: 14px;
      margin-block-end: 0;
      margin-block-start: 0;
    }

    & p {
      padding-left: 18px;
      padding-right: 18px;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      flex-wrap: wrap;
      margin-block-end: 0;
      margin-block-start: 0;
      font-weight: 400;
      font-size: clamp(14px, 2vw, 18px);
      line-height: 1.29;
      letter-spacing: -0.02em;
    }

    & div:last-of-type {
      display: flex;
      padding-top: 40px;
      flex-direction: row;
      flex-wrap: nowrap;
      column-gap: 14px;
    }
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    background-position: center;
    background-image: url(${o});
    @supports (-webkit-image-set: url()) {
      background-image: -webkit-image-set(
        url(${o}) 1x,
        url(${d}) 2x
      );
    }

    & section {
      width: 470px;
      margin: 39.06vh 30.47vw 39.06vh 8.33vw;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: column;
    }

    & div:first-of-type {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: flex-start;
      height: 130px;
    }
    & h2 {
      display: flex;
      flex-wrap: wrap;
      font-weight: 600;
      font-size: 40px;
      line-height: 1.1;
      letter-spacing: -0.02em;
      padding-bottom: 14px;
      margin-block-end: 0;
      margin-block-start: 0;
    }

    & p {
      display: flex;
      flex-wrap: wrap;
      margin-block-end: 0;
      margin-block-start: 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33;
      letter-spacing: -0.02em;
    }

    & div:last-of-type {
      display: flex;
      padding-top: 40px;
      flex-direction: row;
      flex-wrap: nowrap;
      column-gap: 14px;
    }
  }

  @media (min-width: 1440px) {
    position: relative;
  }

  @media (min-width: 1440px) {
    background-image: url(${i});
    background-position: top left;
    background-repeat: no-repeat;
    @supports (-webkit-image-set: url()) {
      background-image: -webkit-image-set(
        url(${i}) 1x,
        url(${l}) 2x
      );
    }
    & section {
      width: 485px;
      margin: 35.45vh 10.417vw 35.45vh 6.944vw;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: column;
    }

    & div:first-of-type {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-start;
      height: 130px;
    }

    & h2 {
      display: flex;
      flex-wrap: wrap;
      font-weight: 600;
      font-size: 40px;
      line-height: 1.1;
      letter-spacing: -0.02em;
      padding-bottom: 14px;
      margin-block-end: 0;
      margin-block-start: 0;
    }

    & p {
      display: flex;
      flex-wrap: wrap;
      margin-block-end: 0;
      margin-block-start: 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33;
      letter-spacing: -0.02em;
    }

    & div:last-of-type {
      display: flex;
      padding-top: 40px;
      flex-direction: row;
      flex-wrap: nowrap;
      column-gap: 14px;
    }
  }

  @media (min-width: 1440px) {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: url(${a});
      background-repeat: no-repeat;
      background-position: right;
      background-size: 703px 100vh;

      z-index: 1;
    }
    @supports (-webkit-image-set: url()) {
      &:before {
        background-image: -webkit-image-set(
          url(${a}) 1x,
          url(${x}) 2x
        );
      }
    }
  }
`,r=s(p)`
  border-radius: 42px;
  border: 1px solid ${e=>e.theme.whiteColor};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;

  &:first-of-type {
    background: ${e=>e.theme.whiteColor};
    color: ${e=>e.theme.darkBlueColor};

    &:active,
    &:hover,
    &:focus {
      background: transparent;
      color: ${e=>e.theme.whiteColor};
    }
  }
  &:last-of-type {
    background: transparent;
    color: ${e=>e.theme.whiteColor};

    &:active,
    &:hover,
    &:focus {
      background: ${e=>e.theme.whiteColor};
      color: ${e=>e.theme.darkBlueColor};
    }
  }

  @media (max-width: 768px) {
    width: 129px;
    height: 46px;
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    font-size: 16px;
    width: 144px;
    height: 54px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    width: 144px;
    height: 54px;
  }
`,m=()=>t.jsx(g,{children:t.jsxs("section",{children:[t.jsxs("div",{children:[t.jsx("h2",{children:"Welcome to the app!"}),t.jsx("p",{children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."})]}),t.jsxs("div",{children:[t.jsx(r,{state:{from:location},to:"/signup",children:"Sign Up"}),t.jsx(r,{state:{from:location},to:"/signin",children:"Sign In"})]})]})});export{m as default};
