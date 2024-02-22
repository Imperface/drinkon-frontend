import{s as p,j as t,N as r}from"./index-f1d972dc.js";import{s as i,a as o,w as n,b as a,c as s,d as c,e as d}from"./bg-welcome-desc@1x-0be22210.js";import{d as l,S as g}from"./Section-b73e3bd7.js";const x="/drinkon-frontend/assets/bg-welcome-desc@2x-9b80a98c.jpg",m=p.div`
  color: ${e=>e.theme.startPageTxtColor};
  width: 100%;
  height: 100vh;
  background-image: url(${i});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  font-family: 'Manrope', sans-serif;

  & .welcome {
    margin: 0 auto;
  }

  & .welcome-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14;
    letter-spacing: 0.2px;
    margin-bottom: 14px;
  }
  & .welcome-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: 0.2px;
    margin-bottom: 40px;
  }
  & .welcome-link-block {
    display: flex;
    justify-content: center;
    column-gap: 14px;
  }
  & .welcome-link {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: 0.2px;
    padding: 14px 40px;
    border-radius: 30px;
    transition: all 0.3s;
  }
  & .link-signup {
    border: 1px solid transparent;
    background-color: ${e=>e.theme.whiteColor};
    color: ${e=>e.theme.darkBlueColor};
    &:hover {
      border: 1px solid transparent;
      background-color: transparent;
      color: ${e=>e.theme.whiteColor};
      border: 1px solid ${e=>e.theme.whiteTwentyColor};
    }
  }

  & .link-signin {
    background-color: transparent;
    border: 1px solid ${e=>e.theme.whiteTwentyColor};
    color: ${e=>e.theme.whiteColor};
    &:hover {
      border: 1px solid transparent;
      background-color: ${e=>e.theme.whiteColor};
      color: ${e=>e.theme.darkBlueColor};
    }
  }
  @media ${l.tablet} {
    background-image: url(${o});
    text-align: left;

    & .welcome {
      margin: 0;
      margin-right: auto;
    }
    & .welcome-info {
      max-width: 470px;
    }
    & .welcome-title {
      font-size: 40px;
      line-height: 1.1;
    }
    & .welcome-text {
      font-size: 18px;
      line-height: 1.3;
    }
    & .welcome-link-block {
      justify-content: left;
    }
    & .welcome-link {
      font-size: 16px;
      padding: 18px 44px;
    }
  }
  @media ${l.desktop} {
    margin: 0;
    background: url(${n}), url(${a});
    background-repeat: no-repeat;
    background-size: contain, cover;
    background-position: right, center;
  }

  /* @media (max-width: 768px) {
    background-position: center;
    background-image: url(${i});
    @supports (-webkit-image-set: url()) {
      background-image: -webkit-image-set(
        url(${i}) 1x,
        url(${s}) 2x
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
        url(${c}) 2x
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
    background-image: url(${a});
    background-position: top left;
    background-repeat: no-repeat;
    @supports (-webkit-image-set: url()) {
      background-image: -webkit-image-set(
        url(${a}) 1x,
        url(${d}) 2x
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
      background-image: url(${n});
      background-repeat: no-repeat;
      background-position: right;
      background-size: 703px 100vh;

      z-index: 1;
    }
    @supports (-webkit-image-set: url()) {
      &:before {
        background-image: -webkit-image-set(
          url(${n}) 1x,
          url(${x}) 2x
        );
      }
    }
  } */
`,u=()=>t.jsx(m,{children:t.jsx(g,{className:"welcome",children:t.jsxs("div",{className:"welcome-info",children:[t.jsx("h2",{className:"welcome-title",children:"Welcome to the app!"}),t.jsx("p",{className:"welcome-text",children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),t.jsxs("div",{className:"welcome-link-block",children:[t.jsx(r,{className:"welcome-link link-signup",to:"/signup",children:"Sign Up"}),t.jsx(r,{className:"welcome-link link-signin",to:"/signin",children:"Sign In"})]})]})})});export{u as default};
