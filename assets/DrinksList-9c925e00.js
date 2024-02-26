import{u as g,h as m,j as t,I as f,G as u,s,d as a,L as b,z as w,r as p}from"./index-c31f15d7.js";import{s as j,N as C,a as y,b as c,c as x,u as P}from"./Placeholder-bd0356fb.js";const v=({itemsPerPage:e,totalItems:d})=>{const o=g(),n=m(j),r=Math.ceil(d.length/e),l=i=>{o(f(i))},h=()=>{const i=[];return i.push(t.jsx(c,{children:t.jsx(x,{type:"button",onClick:()=>l(n-1),disabled:n===1,className:n===1?"disabled":"",children:"prev"})},"prev")),i.push(t.jsx(c,{children:t.jsx(x,{type:"button",onClick:()=>l(n+1),disabled:n===r,className:n===r?"disabled":"",children:"next"})},"next")),i};return t.jsx(C,{"aria-label":"Page navigation",className:"navigation",children:t.jsx(y,{children:h()})})};function $(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"},child:[]}]})(e)}const k=s.li`
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

  @media ${a.tablet} {
    width: 342px;
    height: 650px;
    gap: 24px;
    & img {
      width: 342px;
      height: 360px;
    }
  }

  @media ${a.desktop} {
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

    @media ${a.tablet} {
      padding: 18px 44px;

      font-size: 16px;
      line-height: 1.125;
    }
  }
`,z=s.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex-grow: 1;

  @media ${a.tablet} {
    gap: 24px;
  }
`,H=s.h2`
  margin-bottom: 4px;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: ${e=>e.theme.whiteColor};

  @media ${a.tablet} {
    font-size: 24px;
  }
`,V=s.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;

  color: ${e=>e.theme.whiteFiftyColor};

  @media ${a.tablet} {
    font-size: 16px;
    line-height: 1.125;
  }
`,D=s.p`
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

  @media ${a.tablet} {
    font-size: 16px;
    line-height: 1.375;
  }
`,M=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;s.button``;const I=s.button`
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

  @media ${a.tablet} {
    padding: 15px;
    width: 56px;
    height: 54px;
  }
`,N=({_id:e,drinkThumb:d,drink:o,alcoholic:n,shortDescription:r,onRemoveDrinks:l})=>t.jsxs(k,{children:[t.jsx("img",{src:d,alt:o,loading:"lazy"}),t.jsxs(z,{children:[t.jsxs("div",{children:[t.jsx(H,{children:o}),t.jsx(V,{children:n})]}),t.jsx(D,{children:r}),t.jsxs(M,{children:[t.jsx(b,{className:"linkSeeMore",to:`${w}${e}`,children:"See more"}),t.jsx(I,{type:"button",onClick:()=>l(e),children:t.jsx($,{color:"#f3f3f3",size:24})})]})]})]},e),B=s.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 40px;
  padding-bottom: 80px;

  @media ${a.tablet} {
    padding-bottom: 94px;

    row-gap: 80px;
    column-gap: 20px;
  }
`;function E({data:e,onRemoveDrinks:d}){const[o,n]=p.useState(9);p.useEffect(()=>{const i=()=>{window.innerWidth<=1440?n(8):n(9)};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]);const{currentPage:r,currentData:l,handlePageChange:h}=P(e,o);return t.jsxs(t.Fragment,{children:[t.jsx(B,{children:l.map(i=>t.jsx(N,{...i,onRemoveDrinks:d},i._id))}),e.length>o&&t.jsx(v,{currentPage:r,itemsPerPage:o,totalItems:e.length,onPageChange:h})]})}export{E as D};
