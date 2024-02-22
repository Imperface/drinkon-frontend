import{s as o,d as r,u as p,r as d,g as m,j as s,e as c}from"./index-33d8d1ff.js";import{d as n,S as k}from"./Section-adb2d0b3.js";import{P as x}from"./PageTitle-e7b2d26c.js";import{s as D,D as h,P as g}from"./Placeholder-72560d99.js";const l=o.div`
  width: 100%;
  height: 100vh;

  & .myDrinks {
    padding-top: 80px;
    padding-bottom: 80px;

    @media ${n.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
    }

    @media ${n.desktop} {
      padding-top: 158px;
      padding-bottom: 140px;
    }
  }
`,w=()=>{const e=r(D),t=p();d.useEffect(()=>{t(m())},[t]);const a=i=>{t(c(i))};return s.jsx(l,{children:s.jsxs(k,{className:"myDrinks",children:[s.jsx(x,{name:"MyDrinks"}),e.length>0?s.jsx(h,{data:e,onRemoveDrinks:a}):s.jsx(g,{})]})})};export{w as default};
