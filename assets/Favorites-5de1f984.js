import{s as r,d as a,h as p,u as n,r as m,H as d,j as t,I as x}from"./index-7cd3407e.js";import{S as c}from"./Section-052ae763.js";import{P as h}from"./PageTitle-6c7708f4.js";import{D as v,P as g}from"./Placeholder-874f9132.js";import{f}from"./selectors-a7001df1.js";import"./usePagination-45c95e18.js";import"./hero-desc@1x-c9bd24ae.js";const l=r.div`
  width: 100%;

  & .favorites {
    padding-top: 80px;
    padding-bottom: 80px;
    & h1 {
      margin-bottom: 40px;
    }

    @media ${a.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 60px;
      }
    }

    @media ${a.desktop} {
      padding-top: 158px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 62px;
      }
    }
  }
`,E=()=>{const o=p(f),s=n();m.useEffect(()=>{s(d())},[s]);const e=i=>{s(x(i))};return t.jsx(l,{children:t.jsxs(c,{className:"favorites",children:[t.jsx(h,{name:"Favorites"}),o.length>0?t.jsx(v,{data:o,onRemoveDrinks:e}):t.jsx(g,{})]})})};export{E as default};
