import{s as i,d as a,h as p,u as n,r as m,E as d,j as t,H as x}from"./index-0a84b6e4.js";import{S as c}from"./Section-0cf2d87a.js";import{P as h}from"./PageTitle-601068a5.js";import{D as v}from"./DrinksList-5c4d193c.js";import{f}from"./selectors-a7001df1.js";import{P as g}from"./Placeholder-be72d466.js";import"./hero-desc@1x-24a2b576.js";const l=i.div`
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
`,P=()=>{const s=p(f),o=n();m.useEffect(()=>{o(d())},[o]);const r=e=>{o(x(e))};return t.jsx(l,{children:t.jsxs(c,{className:"favorites",children:[t.jsx(h,{name:"Favorites"}),s.length>0?t.jsx(v,{data:s,onRemoveDrinks:r}):t.jsx(g,{})]})})};export{P as default};
