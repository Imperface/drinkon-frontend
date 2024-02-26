import{s as a,d as n,h as e,u as p,r as m,D as d,j as s,E as x}from"./index-0a914397.js";import{S as c}from"./Section-bea69059.js";import{P as D}from"./PageTitle-4aedd1b7.js";import{D as k}from"./DrinksList-6adfbb03.js";import{e as h}from"./selectors-a7001df1.js";import{P as g}from"./Placeholder-11893353.js";import"./hero-desc@1x-c9bd24ae.js";const l=a.div`
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
`,E=()=>{const o=e(h),t=p();m.useEffect(()=>{t(d())},[t]);const r=i=>{t(x(i))};return s.jsx(l,{children:s.jsxs(c,{className:"myDrinks",children:[s.jsx(D,{name:"MyDrinks"}),o.length>0?s.jsx(k,{data:o,onRemoveDrinks:r}):s.jsx(g,{})]})})};export{E as default};
