import{G as x,s as n,d as i,j as t,L as g,A as c,r as d}from"./index-6e5269cd.js";import{u as f,a as m}from"./Placeholder-c9e959e3.js";function u(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"},child:[]}]})(e)}const w=n.li`
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
`,b=n.div`
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
`,$=n.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;

  color: ${e=>e.theme.whiteFiftyColor};

  @media ${i.tablet} {
    font-size: 16px;
    line-height: 1.125;
  }
`,y=n.p`
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
`;n.button``;const k=n.button`
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
`,H=({_id:e,drinkThumb:a,drink:o,alcoholic:s,shortDescription:l,onRemoveDrinks:p})=>t.jsxs(w,{children:[t.jsx("img",{src:a,alt:o,loading:"lazy"}),t.jsxs(b,{children:[t.jsxs("div",{children:[t.jsx(j,{children:o}),t.jsx($,{children:s})]}),t.jsx(y,{children:l}),t.jsxs(C,{children:[t.jsx(g,{className:"linkSeeMore",to:`${c}${e}`,children:"See more"}),t.jsx(k,{type:"button",onClick:()=>p(e),children:t.jsx(u,{color:"#f3f3f3",size:24})})]})]})]},e),V=n.ul`
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
`;function D({data:e,onRemoveDrinks:a}){const[o,s]=d.useState(9);d.useEffect(()=>{const r=()=>{window.innerWidth<=1440?s(8):s(9)};return window.addEventListener("resize",r),r(),()=>{window.removeEventListener("resize",r)}},[]);const{currentPage:l,currentData:p,handlePageChange:h}=f(e,o);return t.jsxs(t.Fragment,{children:[t.jsx(V,{children:p.map(r=>t.jsx(H,{...r,onRemoveDrinks:a},r._id))}),e.length>o&&t.jsx(m,{currentPage:l,itemsPerPage:o,totalItems:e.length,onPageChange:h})]})}export{D};
