import{s as o,u,h as m,j as t,I as p,G as y,d as r,L as C,z as j,r as x}from"./index-6313e73e.js";const b=e=>e.pagination.currentPage,v=o.nav`
  padding: 14px 0;
`,$=o.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 27px;
`,g=o.li`
  display: flex;
  justify-content: center;
  align-items: center;

  .chevron {
    color: ${e=>e.theme.whiteThirtyColor};
    width: 2em;
    height: 2em;
  }
  .disabled {
    /* opacity: 0.5; */
    pointer-events: none;
  }
  .ioEllipse {
    fill: none;
    width: 27px;
    height: 27px;
    :hover,
    :focus {
      fill: ${e=>e.theme.blueFiftyColor};
    }
  }
  .active {
    fill: ${e=>e.theme.blueFiftyColor};
  }
`,f=o.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 55px;
  cursor: pointer;
  padding: 0;
  border: 1px solid ${e=>e.theme.whiteColor};
  background-color: inherit;
  transition: all 0.3s;
  border-radius: 50px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.whiteColor};

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.whiteColor};
    color: ${e=>e.theme.blackColor};
  }

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: ${e=>e.theme.whiteColor};
    pointer-events: none;
  }
`,k=({itemsPerPage:e,totalItems:a})=>{const s=u(),n=m(b),l=Math.ceil(a.length/e),c=i=>{s(p(i))},h=()=>{const i=[];return i.push(t.jsx(g,{children:t.jsx(f,{type:"button",onClick:()=>c(n-1),disabled:n===1,className:n===1?"disabled":"",children:"prev"})},"prev")),i.push(t.jsx(g,{children:t.jsx(f,{type:"button",onClick:()=>c(n+1),disabled:n===l,className:n===l?"disabled":"",children:"next"})},"next")),i};return t.jsx(v,{"aria-label":"Page navigation",className:"navigation",children:t.jsx($,{children:h()})})};function z(e){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"},child:[]}]})(e)}const D=o.li`
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

  @media ${r.tablet} {
    width: 342px;
    height: 650px;
    gap: 24px;
    & img {
      width: 342px;
      height: 360px;
    }
  }

  @media ${r.desktop} {
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

    @media ${r.tablet} {
      padding: 18px 44px;

      font-size: 16px;
      line-height: 1.125;
    }
  }
`,P=o.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex-grow: 1;

  @media ${r.tablet} {
    gap: 24px;
  }
`,H=o.h2`
  margin-bottom: 4px;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: ${e=>e.theme.whiteColor};

  @media ${r.tablet} {
    font-size: 24px;
  }
`,V=o.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;

  color: ${e=>e.theme.whiteFiftyColor};

  @media ${r.tablet} {
    font-size: 16px;
    line-height: 1.125;
  }
`,I=o.p`
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

  @media ${r.tablet} {
    font-size: 16px;
    line-height: 1.375;
  }
`,M=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;o.button``;const B=o.button`
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

  @media ${r.tablet} {
    padding: 15px;
    width: 56px;
    height: 54px;
  }
`,E=({_id:e,drinkThumb:a,drink:s,alcoholic:n,shortDescription:l,onRemoveDrinks:c})=>t.jsxs(D,{children:[t.jsx("img",{src:a,alt:s,loading:"lazy"}),t.jsxs(P,{children:[t.jsxs("div",{children:[t.jsx(H,{children:s}),t.jsx(V,{children:n})]}),t.jsx(I,{children:l}),t.jsxs(M,{children:[t.jsx(C,{className:"linkSeeMore",to:`${j}${e}`,children:"See more"}),t.jsx(B,{type:"button",onClick:()=>c(e),children:t.jsx(z,{color:"#f3f3f3",size:24})})]})]})]},e);function L(e,a){const s=u(),n=m(b);x.useEffect(()=>{const d=(n-1)*a,w=n*a;e.slice(d,w).length===0&&n>1&&s(p(n-1))},[n,e,s,a]);const l=(n-1)*a,c=n*a,h=e.slice(l,c);return{currentPage:n,currentData:h,handlePageChange:d=>{s(p(d))}}}const N=o.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 40px;
  padding-bottom: 80px;

  @media ${r.tablet} {
    padding-bottom: 94px;

    row-gap: 80px;
    column-gap: 20px;
  }
`;function Z({data:e,onRemoveDrinks:a}){const[s,n]=x.useState(9);x.useEffect(()=>{const i=()=>{window.innerWidth<=1440?n(8):n(9)};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]);const{currentPage:l,currentData:c,handlePageChange:h}=L(e,s);return t.jsxs(t.Fragment,{children:[t.jsx(N,{children:c.map(i=>t.jsx(E,{...i,onRemoveDrinks:a},i._id))}),e.length>s&&t.jsx(k,{currentPage:l,itemsPerPage:s,totalItems:e.length,onPageChange:h})]})}export{Z as D};
