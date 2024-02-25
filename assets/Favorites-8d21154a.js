import{s as r,d as a,f as p,u as n,r as m,w as d,j as t,x}from"./index-1f9764fe.js";import{S as c}from"./Section-f579501d.js";import{P as v}from"./PageTitle-3bf31531.js";import{D as g,P as h}from"./Placeholder-c0e8eb1e.js";import{b as f}from"./selectors-b8f3a452.js";import"./hero-desc@1x-c9bd24ae.js";const l=r.div`
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
`,P=()=>{const o=p(f),s=n();m.useEffect(()=>{s(d())},[s]);const e=i=>{s(x(i))};return t.jsx(l,{children:t.jsxs(c,{className:"favorites",children:[t.jsx(v,{name:"Favorites"}),o.length>0?t.jsx(g,{data:o,onRemoveDrinks:e}):t.jsx(h,{})]})})};export{P as default};
