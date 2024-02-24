import{s as r,d as n,k as e,u as p,r as m,o as d,j as s,p as x}from"./index-62cc04f8.js";import{S as c}from"./Section-b3a1a615.js";import{P as k}from"./PageTitle-2eb382bf.js";import{D,P as g}from"./Placeholder-8d7aacd4.js";import{s as h}from"./selectors-3bd61cc3.js";const l=r.div`
  width: 100%;

  & .myDrinks {
    padding-top: 80px;
    padding-bottom: 80px;
    & h1 {
      margin-bottom: 40px;
    }

    @media ${n.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 60px;
      }
    }

    @media ${n.desktop} {
      padding-top: 158px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 62px;
      }
    }
  }
`,v=()=>{const o=e(h),t=p();m.useEffect(()=>{t(d())},[t]);const a=i=>{t(x(i))};return s.jsx(l,{children:s.jsxs(c,{className:"myDrinks",children:[s.jsx(k,{name:"MyDrinks"}),o.length>0?s.jsx(D,{data:o,onRemoveDrinks:a}):s.jsx(g,{})]})})};export{v as default};
