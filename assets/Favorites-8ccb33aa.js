import{s as r,h as n,u as p,r as d,m,j as s,n as c}from"./index-f18220f6.js";import{d as o,S as x}from"./Section-44dd5c98.js";import{P as l}from"./PageTitle-adde0140.js";import{a as v,D as g,P as h}from"./Placeholder-71d334a6.js";const f=r.div`
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
`,F=()=>{const a=n(v),t=p();d.useEffect(()=>{t(m())},[t]);const i=e=>{console.log(e),t(c(e))};return s.jsx(f,{children:s.jsxs(x,{className:"favorites",children:[s.jsx(l,{name:"Favorites"}),a.length>0?s.jsx(g,{data:a,onRemoveDrinks:i}):s.jsx(h,{})]})})};export{F as default};
