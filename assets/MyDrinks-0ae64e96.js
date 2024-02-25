import{s as r,d as n,h as e,u as p,r as m,z as d,j as s,A as x}from"./index-8f5638c2.js";import{S as c}from"./Section-f2135c19.js";import{P as k}from"./PageTitle-e727d2a3.js";import{D,P as h}from"./Placeholder-b15cdfc8.js";import{d as g}from"./selectors-6a46d399.js";import"./hero-desc@1x-c9bd24ae.js";const l=r.div`
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
