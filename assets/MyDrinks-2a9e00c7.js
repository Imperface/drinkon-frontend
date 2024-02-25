import{s as r,d as n,h as e,u as p,r as m,v as d,j as s,w as x}from"./index-21a34283.js";import{S as c}from"./Section-099b3c8f.js";import{P as k}from"./PageTitle-746e7df7.js";import{D,P as h}from"./Placeholder-85479658.js";import{a as g}from"./selectors-b8f3a452.js";import"./hero-desc@1x-c9bd24ae.js";const l=r.div`
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
`,y=()=>{const o=e(g),t=p();m.useEffect(()=>{t(d())},[t]);const a=i=>{t(x(i))};return s.jsx(l,{children:s.jsxs(c,{className:"myDrinks",children:[s.jsx(k,{name:"MyDrinks"}),o.length>0?s.jsx(D,{data:o,onRemoveDrinks:a}):s.jsx(h,{})]})})};export{y as default};
