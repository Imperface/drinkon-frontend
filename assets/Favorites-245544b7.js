import{s as r,d as a,h as p,u as n,r as m,B as d,j as t,C as x}from"./index-8f5638c2.js";import{S as c}from"./Section-f2135c19.js";import{P as h}from"./PageTitle-e727d2a3.js";import{D as v,P as g}from"./Placeholder-b15cdfc8.js";import{e as l}from"./selectors-6a46d399.js";import"./hero-desc@1x-c9bd24ae.js";const f=r.div`
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
`,P=()=>{const o=p(l),s=n();m.useEffect(()=>{s(d())},[s]);const e=i=>{s(x(i))};return t.jsx(f,{children:t.jsxs(c,{className:"favorites",children:[t.jsx(h,{name:"Favorites"}),o.length>0?t.jsx(v,{data:o,onRemoveDrinks:e}):t.jsx(g,{})]})})};export{P as default};
