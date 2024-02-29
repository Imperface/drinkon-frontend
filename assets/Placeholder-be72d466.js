import{s as r,d as o,j as t}from"./index-0a84b6e4.js";import{p as i}from"./hero-desc@1x-24a2b576.js";const n=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    margin-bottom: 32px;
    width: 198px;
    height: 247px;

    @media ${o.tablet} {
      width: 261px;
      height: 326px;
    }
  }
  & p {
    width: 205px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    text-align: center;
    color: ${e=>e.theme.whiteColor};

    @media ${o.desktop} {
      width: 236px;
      font-size: 16px;
      line-height: 1.375;
    }
  }
`,s="/refreshing-drink-frontend/assets/hero-mob@2x-1445b2a8.png",a="/refreshing-drink-frontend/assets/hero-tab@2x-ab1de86f.png",d="/refreshing-drink-frontend/assets/hero-desc@2x-bc84bac2.png",c=({text:e="You haven`t added any favorite cocktails yet"})=>t.jsxs(n,{children:[t.jsx("img",{src:i,srcSet:`${s} 420w, ${a} 768w, ${d} 1440w`,alt:"Placeholder"}),t.jsx("p",{children:e})]});export{c as P};
