import{s as g,d as n,u as x,j as t,N as u,a as m,n as h}from"./index-d9f7f162.js";import{s as r,a as o,w as b,b as a}from"./bg-welcome-desc@1x-0e9701bd.js";import{s as f,a as w,b as k}from"./start-mob@2x-e5a7b397.js";import{S as $}from"./Section-678330b7.js";const y=g.div`
  color: ${e=>e.theme.startPageTxtColor};
  width: 100%;
  min-height: 100vh;
  padding: 20px 0;
  background-image: url(${r});

  @supports (-webkit-image-set: url()) {
    background-image: -webkit-image-set(
      url(${r}) 1x,
      url(${f}) 2x
    );
  }

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  font-family: 'Manrope', sans-serif;

  & .section {
    margin: 0 auto;
  }

  & .signin {
    width: 335px;
  }

  & .signinTitle {
    display: flex;
    justify-content: flex-start;
    font-weight: 600;
    font-size: 28px;
    padding-bottom: 28px;
    margin-block-end: 0;
  }

  & .signinForm {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  & .inputSignin {
    border-radius: 42px;
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    border: 1px solid ${e=>e.theme.whiteFiftyColor};
    color: ${e=>e.theme.whiteFiftyColor};
    background-color: transparent;
    transition: all 0.3s;

    &:hover {
      border: 1px solid ${e=>e.theme.whiteColor};
      color: ${e=>e.theme.whiteColor};
    }

    &::placeholder {
      border: 1px solid transparent;

      color: ${e=>e.theme.whiteTwentyColor};
      font-weight: 400;
      font-size: 14px;
    }

    &:focus::placeholder {
      color: ${e=>e.theme.whiteColor};
    }
  }

  & .buttonSignin {
    background-color: ${e=>e.theme.whiteColor};
    color: ${e=>e.theme.darkBlueColor};
    border-radius: 42px;
    font-weight: 600;
    font-size: 14px;
    width: 335px;
    display: block;
    padding: 15px 0;
    border: 1px solid ${e=>e.theme.whiteColor};
    margin-top: 14px;
    transition: all 0.3s;

    &:hover {
      background-color: transparent;
      color: ${e=>e.theme.whiteColor};
    }
  }
  & .link {
    color: ${e=>e.theme.whiteColor};
    font-weight: 600;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media ${n.tablet} {
    background-image: url(${o});
    text-align: left;

    & .section {
      margin: 0;
    }

    & .signin {
      width: 400px;
    }

    & .signinTitle {
      font-size: 40px;
    }

    & .inputSignin {
      width: 400px;
      height: 56px;
      padding: 14px 24px 15px 24px;

      &::placeholder {
        font-size: 17px;
      }
    }

    & .buttonSignin {
      font-size: 16px;
      width: 400px;
      height: 54px;
      margin-top: 26px;
    }
    & .link {
      display: flex;
      font-size: 14px;
      justify-content: center;
      align-items: center;
      padding: 14px;
    }
  }

  @supports (-webkit-image-set: url()) {
    background-image: -webkit-image-set(
      url(${o}) 1x,
      url(${w}) 2x
    );
  }

  @media ${n.desktop} {
    background: url(${b}), url(${a});
    background-repeat: no-repeat;
    background-size: contain, cover;
    background-position: right, center;

    & .signin {
      padding-left: 0;
    }
  }

  @supports (-webkit-image-set: url()) {
    background-image: -webkit-image-set(
      url(${a}) 1x,
      url(${k}) 2x
    );
  }
`,N=()=>{const e=x(),s=async i=>{i.preventDefault();const l=i.currentTarget,p={email:i.target.elements.userEmail.value,password:i.target.elements.userPassword.value},{error:d,payload:c}=await e(m(p));if(d){h.Notify.failure(c);return}l.reset()};return t.jsx(y,{children:t.jsx($,{className:"section",children:t.jsxs("div",{className:"signin",children:[t.jsx("h2",{className:"signinTitle",children:"Sign In"}),t.jsxs("form",{className:"signinForm",onSubmit:s,children:[t.jsx("label",{children:t.jsx("input",{type:"email",placeholder:"Email",className:"inputSignin",required:!0,name:"userEmail"})}),t.jsx("label",{children:t.jsx("input",{type:"password",className:"inputSignin",placeholder:"Password",required:!0,name:"userPassword",minLength:6})}),t.jsx("button",{type:"submit",className:"buttonSignin",children:"Sign In"}),t.jsx(u,{className:"link",to:"/signup",children:"Sign Up"})]})]})})})};export{N as default};
