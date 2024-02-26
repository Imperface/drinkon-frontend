import{G as x,s as n,d as i,j as t,L as c,A as g,r as h}from"./index-319eec76.js";import{u as m,P as f}from"./usePagination-a4cf3162.js";import{p as w}from"./hero-desc@1x-c9bd24ae.js";function u(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"},child:[]}]})(e)}const b=n.li`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 335px;
  height: 581px;
  & img {
    border-radius: 20px;
    width: 335px;
    height: 392px;
    object-fit: cover;
  }

  @media ${i.tablet} {
    width: 342px;
    height: 650px;
    gap: 24px;
    & img {
      width: 342px;
      height: 360px;
    }
  }

  @media ${i.desktop} {
    width: 400px;
    height: 676px;
    & img {
      width: 400px;
      height: 400px;
    }
  }
  & .linkSeeMore {
    cursor: pointer;
    padding: 0;
    background: none;
    border: none;
    background: ${e=>e.theme.darkBlueColor};
    border-radius: 42px;
    padding: 14px 40px;

    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: ${e=>e.theme.whiteColor};

    @media ${i.tablet} {
      padding: 18px 44px;

      font-size: 16px;
      line-height: 1.125;
    }
  }
`,$=n.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex-grow: 1;

  @media ${i.tablet} {
    gap: 24px;
  }
`,j=n.h2`
  margin-bottom: 4px;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: ${e=>e.theme.whiteColor};

  @media ${i.tablet} {
    font-size: 24px;
  }
`,y=n.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;

  color: ${e=>e.theme.whiteFiftyColor};

  @media ${i.tablet} {
    font-size: 16px;
    line-height: 1.125;
  }
`,k=n.p`
  font-family: 'Manrope', sans-serif;
  flex-grow: 1;

  --max-lines: 3;
  position: relative;
  max-height: calc(1.4rem * 4);
  overflow: hidden;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.whiteColor};

  @media ${i.tablet} {
    font-size: 16px;
    line-height: 1.375;
  }
`,C=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;n.button``;const v=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;

  border-radius: 40px;
  padding: 11px;
  width: 46px;
  height: 46px;
  background: ${e=>e.theme.darkBlueColor};
  fill: ${e=>e.theme.whiteColor};

  @media ${i.tablet} {
    padding: 15px;
    width: 56px;
    height: 54px;
  }
`,z=({_id:e,drinkThumb:s,drink:o,alcoholic:a,shortDescription:l,onRemoveDrinks:d})=>t.jsxs(b,{children:[t.jsx("img",{src:s,alt:o,loading:"lazy"}),t.jsxs($,{children:[t.jsxs("div",{children:[t.jsx(j,{children:o}),t.jsx(y,{children:a})]}),t.jsx(k,{children:l}),t.jsxs(C,{children:[t.jsx(c,{className:"linkSeeMore",to:`${g}${e}`,children:"See more"}),t.jsx(v,{type:"button",onClick:()=>d(e),children:t.jsx(u,{color:"#f3f3f3",size:24})})]})]})]},e),D=n.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 40px;
  padding-bottom: 80px;

  @media ${i.tablet} {
    padding-bottom: 94px;

    row-gap: 80px;
    column-gap: 20px;
  }
`;function L({data:e,onRemoveDrinks:s}){const[o,a]=h.useState(9);h.useEffect(()=>{const r=()=>{window.innerWidth<=1440?a(8):a(9)};return window.addEventListener("resize",r),r(),()=>{window.removeEventListener("resize",r)}},[]);const{currentPage:l,currentData:d,handlePageChange:p}=m(e,o);return t.jsxs(t.Fragment,{children:[t.jsx(D,{children:d.map(r=>t.jsx(z,{...r,onRemoveDrinks:s},r._id))}),e.length>o&&t.jsx(f,{currentPage:l,itemsPerPage:o,totalItems:e.length,onPageChange:p})]})}const H=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    margin-bottom: 32px;
    width: 198px;
    height: 247px;

    @media ${i.tablet} {
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

    @media ${i.desktop} {
      width: 236px;
      font-size: 16px;
      line-height: 1.375;
    }
  }
`,P="/drinkon-frontend/assets/hero-mob@2x-1445b2a8.png",V="/drinkon-frontend/assets/hero-tab@2x-ab1de86f.png",M="/drinkon-frontend/assets/hero-desc@2x-bc84bac2.png",E=()=>t.jsxs(H,{children:[t.jsx("img",{src:w,srcSet:`${P} 420w, ${V} 768w, ${M} 1440w`,alt:"Placeholder"}),t.jsxs("p",{children:["You haven","'","t added any favorite cocktails yet"]})]});export{L as D,E as P};
