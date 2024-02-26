import{s as n,d as t,j as o,N as i}from"./index-9c0186d4.js";import{s as r,a as l,w as a,b as s}from"./bg-welcome-desc@1x-0e9701bd.js";import{S as c}from"./Section-45366637.js";const p=n.div`
  color: ${e=>e.theme.startPageTxtColor};
  width: 100%;
  height: 100vh;
  background-image: url(${r});
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
  @media ${t.tablet} {
    background-image: url(${l});
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
      letter-spacing: -0.02em;
    }
    & .welcome-link-block {
      justify-content: left;
    }
    & .welcome-link {
      font-size: 16px;
      padding: 18px 44px;
    }
  }
  @media ${t.desktop} {
    margin: 0;
    background: url(${a}), url(${s});
    background-repeat: no-repeat;
    background-size: contain, cover;
    background-position: right, center;

    & .welcome-info {
      max-width: 485px;
    }
  }
`,h=()=>o.jsx(p,{children:o.jsx(c,{className:"welcome",children:o.jsxs("div",{className:"welcome-info",children:[o.jsx("h2",{className:"welcome-title",children:"Welcome to the app!"}),o.jsx("p",{className:"welcome-text",children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),o.jsxs("div",{className:"welcome-link-block",children:[o.jsx(i,{className:"welcome-link link-signup",to:"/signup",children:"Sign Up"}),o.jsx(i,{className:"welcome-link link-signin",to:"/signin",children:"Sign In"})]})]})})});export{h as default};
