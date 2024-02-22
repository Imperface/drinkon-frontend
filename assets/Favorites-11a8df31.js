import{s as r,d as n,u as p,r as d,f as c,j as s,h as m}from"./index-33d8d1ff.js";import{d as o,S as x}from"./Section-adb2d0b3.js";import{P as l}from"./PageTitle-e7b2d26c.js";import{a as v,D as f,P as g}from"./Placeholder-72560d99.js";const h=r.div`
  width: 100%;

  & .favorites {
    padding-top: 80px;
    padding-bottom: 80px;

    @media ${o.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
    }

    @media ${o.desktop} {
      padding-top: 158px;
      padding-bottom: 140px;
    }
  }
`,F=()=>{const a=n(v),t=p();d.useEffect(()=>{t(c())},[t]);const i=e=>{console.log(e),t(m(e))};return s.jsx(h,{children:s.jsxs(x,{className:"favorites",children:[s.jsx(l,{name:"Favorites"}),a.length>0?s.jsx(f,{data:a,onRemoveDrinks:i}):s.jsx(g,{})]})})};export{F as default};
