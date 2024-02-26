import{s as i,d as a,h as p,u as n,r as m,H as d,j as t,I as x}from"./index-8052517f.js";import{S as c}from"./Section-3b0b9d57.js";import{P as h}from"./PageTitle-95d50151.js";import{D as v}from"./DrinksList-a758262b.js";import{f}from"./selectors-a7001df1.js";import{P as g}from"./Placeholder-fdf05b48.js";import"./hero-desc@1x-c9bd24ae.js";const l=i.div`
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
`,E=()=>{const s=p(f),o=n();m.useEffect(()=>{o(d())},[o]);const r=e=>{o(x(e))};return t.jsx(l,{children:t.jsxs(c,{className:"favorites",children:[t.jsx(h,{name:"Favorites"}),s.length>0?t.jsx(v,{data:s,onRemoveDrinks:r}):t.jsx(g,{})]})})};export{E as default};
