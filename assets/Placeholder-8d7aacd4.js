import{G as u,s as i,I as C,u as m,k as w,j as t,v as g,d as r,L as v,w as y,r as f}from"./index-62cc04f8.js";const b=e=>e.pagination.currentPage;function $(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"},child:[]}]})(e)}function k(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"},child:[]}]})(e)}const P=i.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`,p=i.li`
  display: flex;
  justify-content: center;
  align-items: center;
`,x=i.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 12px;

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: ${e=>e.theme.colors.whiteColor};
    pointer-events: none;
  }
`,D=i(C)`
  fill: ${({active:e,theme:s})=>e==="true"?s.colors.blueFiftyColor:"none"};
  width: 27px;
  height: 27px;
  :hover,
  :focus {
    fill: ${e=>e.theme.colors.blueFiftyColor};
  }
`,I=i($)`
  fill: ${e=>e.theme.colors.whiteThirtyColor};
`,z=i(k)`
  fill: ${e=>e.theme.colors.whiteThirtyColor};
`,M=({itemsPerPage:e,totalItems:s})=>{const a=m(),n=w(b),h=Math.ceil(s/e),c=o=>{a(g(o))},d=()=>{const o=[];o.push(t.jsx(p,{children:t.jsx(x,{onClick:()=>c(n-1),disabled:n===1,children:t.jsx(I,{})})},"prev"));for(let l=1;l<=h;l++)o.push(t.jsx(p,{children:t.jsxs(x,{onClick:()=>c(l),children:[t.jsx(D,{active:n===l?"true":"false"}),t.jsx("span",{children:l})]})},l));return o.push(t.jsx(p,{children:t.jsx(x,{onClick:()=>c(n+1),disabled:n===h,children:t.jsx(z,{})})},"next")),o};return t.jsx("nav",{"aria-label":"Page navigation",children:t.jsx(P,{children:d()})})};function H(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"},child:[]}]})(e)}const V=i.li`
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
`,L=i.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex-grow: 1;

  @media ${r.tablet} {
    gap: 24px;
  }
`,B=i.h2`
  margin-bottom: 4px;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: ${e=>e.theme.whiteColor};

  @media ${r.tablet} {
    font-size: 24px;
  }
`,S=i.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;

  color: ${e=>e.theme.whiteFiftyColor};

  @media ${r.tablet} {
    font-size: 16px;
    line-height: 1.125;
  }
`,E=i.p`
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
`,T=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;i.button``;const Z=i.button`
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
`,R=({_id:e,drinkThumb:s,drink:a,alcoholic:n,description:h,onRemoveDrinks:c})=>t.jsxs(V,{children:[t.jsx("img",{src:s,alt:a,loading:"lazy"}),t.jsxs(L,{children:[t.jsxs("div",{children:[t.jsx(B,{children:a}),t.jsx(S,{children:n})]}),t.jsx(E,{children:h}),t.jsxs(T,{children:[t.jsx(v,{className:"linkSeeMore",to:`${y}${e}`,children:"See more"}),t.jsx(Z,{type:"button",onClick:()=>c(e),children:t.jsx(H,{color:"#f3f3f3",size:24})})]})]})]},e);function G(e,s){const a=m(),n=w(b);f.useEffect(()=>{const l=(n-1)*s,j=n*s;e.slice(l,j).length===0&&n>1&&a(g(n-1))},[n,e,a,s]);const h=(n-1)*s,c=n*s,d=e.slice(h,c);return{currentPage:n,currentData:d,handlePageChange:l=>{a(g(l))}}}const F=i.ul`
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
`;function J({data:e,onRemoveDrinks:s}){const[a,n]=f.useState(9);f.useEffect(()=>{const o=()=>{window.innerWidth<=1440?n(8):n(9)};return window.addEventListener("resize",o),o(),()=>{window.removeEventListener("resize",o)}},[]);const{currentPage:h,currentData:c,handlePageChange:d}=G(e,a);return t.jsxs(t.Fragment,{children:[t.jsx(F,{children:c.map(o=>t.jsx(R,{...o,onRemoveDrinks:s},o._id))}),e.length>a&&t.jsx(M,{currentPage:h,itemsPerPage:a,totalItems:e.length,onPageChange:d})]})}const N=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    margin-bottom: 32px;
    width: 198px;
    height: 247px;

    @media ${r.tablet} {
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

    @media ${r.desktop} {
      width: 236px;
      font-size: 16px;
      line-height: 1.375;
    }
  }
`,Y="/drinkon-frontend/assets/hero-desc@1x-3e74e15a.png",_="/drinkon-frontend/assets/hero-mob@2x-1445b2a8.png",A="/drinkon-frontend/assets/hero-tab@2x-ab1de86f.png",K="/drinkon-frontend/assets/hero-desc@2x-bc84bac2.png",O=()=>t.jsxs(N,{children:[t.jsx("img",{src:Y,srcSet:`${_} 420w, ${A} 768w, ${K} 1440w`,alt:"Placeholder"}),t.jsxs("p",{children:["You haven","'","t added any favorite cocktails yet"]})]});export{J as D,O as P};
