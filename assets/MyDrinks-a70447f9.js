import{s as a,d as n,h as e,u as p,r as m,B as d,j as s,C as x}from"./index-f7d5d131.js";import{S as c}from"./Section-807ae223.js";import{P as k}from"./PageTitle-47f65310.js";import{D,P as h}from"./Placeholder-2d051844.js";import{e as g}from"./selectors-a7001df1.js";import"./usePagination-da2bff3d.js";import"./hero-desc@1x-c9bd24ae.js";const l=a.div`
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
`,O=()=>{const o=e(g),t=p();m.useEffect(()=>{t(d())},[t]);const i=r=>{t(x(r))};return s.jsx(l,{children:s.jsxs(c,{className:"myDrinks",children:[s.jsx(k,{name:"MyDrinks"}),o.length>0?s.jsx(D,{data:o,onRemoveDrinks:i}):s.jsx(h,{})]})})};export{O as default};
