import{c as p,s as c,u as j,h as P,j as i,o as b,L as z,G as D,r as w}from"./index-1c9be079.js";import{d}from"./Section-9d213090.js";const C=e=>e.pagination.currentPage;var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y=p.createContext&&p.createContext(O),I=["attr","size","title"];function E(e,t){if(e==null)return{};var n=S(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function S(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(r){M(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function M(e,t,n){return t=H(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){var t=V(e,"string");return typeof t=="symbol"?t:String(t)}function V(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $(e){return e&&e.map((t,n)=>p.createElement(t.tag,f({key:n},t.attr),$(t.child)))}function u(e){return t=>p.createElement(L,g({attr:f({},e.attr)},t),$(e.child))}function L(e){var t=n=>{var{attr:r,size:o,title:a}=e,h=E(e,I),s=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),p.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,h,{className:l,style:f(f({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&p.createElement("title",null,a),e.children)};return y!==void 0?p.createElement(y.Consumer,null,n=>t(n)):t(O)}function B(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z"},child:[]}]})(e)}function N(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"},child:[]}]})(e)}function _(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"},child:[]}]})(e)}const T=c.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`,x=c.li`
  display: flex;
  justify-content: center;
  align-items: center;
`,m=c.button`
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
`,R=c(B)`
  fill: ${({active:e,theme:t})=>e==="true"?t.colors.blueFiftyColor:"none"};
  width: 27px;
  height: 27px;
  :hover,
  :focus {
    fill: ${e=>e.theme.colors.blueFiftyColor};
  }
`,Z=c(N)`
  fill: ${e=>e.theme.colors.whiteThirtyColor};
`,G=c(_)`
  fill: ${e=>e.theme.colors.whiteThirtyColor};
`,F=({itemsPerPage:e,totalItems:t})=>{const n=j(),r=P(C),o=Math.ceil(t/e),a=s=>{n(b(s))},h=()=>{const s=[];s.push(i.jsx(x,{children:i.jsx(m,{onClick:()=>a(r-1),disabled:r===1,children:i.jsx(Z,{})})},"prev"));for(let l=1;l<=o;l++)s.push(i.jsx(x,{children:i.jsxs(m,{onClick:()=>a(l),children:[i.jsx(R,{active:r===l?"true":"false"}),i.jsx("span",{children:l})]})},l));return s.push(i.jsx(x,{children:i.jsx(m,{onClick:()=>a(r+1),disabled:r===o,children:i.jsx(G,{})})},"next")),s};return i.jsx("nav",{"aria-label":"Page navigation",children:i.jsx(T,{children:h()})})};function W(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"},child:[]}]})(e)}const K=c.li`
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

  @media ${d.tablet} {
    width: 342px;
    height: 650px;
    gap: 24px;
    & img {
      width: 342px;
      height: 360px;
    }
  }

  @media ${d.desktop} {
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

    @media ${d.tablet} {
      padding: 18px 44px;

      font-size: 16px;
      line-height: 1.125;
    }
  }
`,Y=c.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex-grow: 1;

  @media ${d.tablet} {
    gap: 24px;
  }
`,A=c.h2`
  margin-bottom: 4px;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: ${e=>e.theme.whiteColor};

  @media ${d.tablet} {
    font-size: 24px;
  }
`,q=c.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;

  color: ${e=>e.theme.whiteFiftyColor};

  @media ${d.tablet} {
    font-size: 16px;
    line-height: 1.125;
  }
`,J=c.p`
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

  @media ${d.tablet} {
    font-size: 16px;
    line-height: 1.375;
  }
`,Q=c.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;c.button``;const U=c.button`
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

  @media ${d.tablet} {
    padding: 15px;
    width: 56px;
    height: 54px;
  }
`,X=({_id:e,drinkThumb:t,drink:n,alcoholic:r,description:o,onRemoveDrinks:a})=>i.jsxs(K,{children:[i.jsx("img",{src:t,alt:n,loading:"lazy"}),i.jsxs(Y,{children:[i.jsxs("div",{children:[i.jsx(A,{children:n}),i.jsx(q,{children:r})]}),i.jsx(J,{children:o}),i.jsxs(Q,{children:[i.jsx(z,{className:"linkSeeMore",to:`${D}${e}`,children:"See more"}),i.jsx(U,{type:"button",onClick:()=>a(e),children:i.jsx(W,{color:"#f3f3f3",size:24})})]})]})]},e);function ee(e,t){const n=j(),r=P(C);w.useEffect(()=>{const l=(r-1)*t,k=r*t;e.slice(l,k).length===0&&r>1&&n(b(r-1))},[r,e,n,t]);const o=(r-1)*t,a=r*t,h=e.slice(o,a);return{currentPage:r,currentData:h,handlePageChange:l=>{n(b(l))}}}const te=c.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 40px;
  padding-bottom: 80px;

  @media ${d.tablet} {
    padding-bottom: 94px;

    row-gap: 80px;
    column-gap: 20px;
  }
`;function de({data:e,onRemoveDrinks:t}){const[n,r]=w.useState(9);w.useEffect(()=>{const s=()=>{window.innerWidth<=1440?r(8):r(9)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[]);const{currentPage:o,currentData:a,handlePageChange:h}=ee(e,n);return i.jsxs(i.Fragment,{children:[i.jsx(te,{children:a.map(s=>i.jsx(X,{...s,onRemoveDrinks:t},s._id))}),e.length>n&&i.jsx(F,{currentPage:o,itemsPerPage:n,totalItems:e.length,onPageChange:h})]})}const ne=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    margin-bottom: 32px;
    width: 198px;
    height: 247px;

    @media ${d.tablet} {
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

    @media ${d.desktop} {
      width: 236px;
      font-size: 16px;
      line-height: 1.375;
    }
  }
`,re="/drinkon-frontend/assets/hero-desc@1x-3e74e15a.png",ie="/drinkon-frontend/assets/hero-mob@2x-1445b2a8.png",oe="/drinkon-frontend/assets/hero-tab@2x-ab1de86f.png",ae="/drinkon-frontend/assets/hero-desc@2x-bc84bac2.png",he=()=>i.jsxs(ne,{children:[i.jsx("img",{src:re,srcSet:`${ie} 420w, ${oe} 768w, ${ae} 1440w`,alt:"Placeholder"}),i.jsxs("p",{children:["You haven","'","t added any favorite cocktails yet"]})]});export{de as D,he as P};
