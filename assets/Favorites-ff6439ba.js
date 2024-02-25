import{s as r,d as a,h as p,u as n,r as m,x as d,j as t,y as x}from"./index-21a34283.js";import{S as c}from"./Section-099b3c8f.js";import{P as h}from"./PageTitle-746e7df7.js";import{D as v,P as g}from"./Placeholder-85479658.js";import{b as l}from"./selectors-b8f3a452.js";import"./hero-desc@1x-c9bd24ae.js";const f=r.div`
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
