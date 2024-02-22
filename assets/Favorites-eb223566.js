import{s as l,d,j as r,R as p,u as y,a as j,b,r as u,g as k,S as D,c as E}from"./index-71418247.js";const S=l.div`
  width: 100%;
  height: 100vh;

  & .favorites {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media ${d.tablet} {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media ${d.desktop} {
    padding-top: 158px;
    padding-bottom: 140px;
  }
`,M=l.h1`
  font-size: 32px;
  font-weight: 600;
  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
  }
`,H=({name:e})=>e&&r.jsx(M,{children:e}),P=e=>e.pagination.currentPage;var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w=p.createContext&&p.createContext(O),I=["attr","size","title"];function V(e,t){if(e==null)return{};var n=B(e,t),i,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function B(e,t){if(e==null)return{};var n={},i=Object.keys(e),o,a;for(a=0;a<i.length;a++)o=i[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?C(Object(n),!0).forEach(function(i){F(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function F(e,t,n){return t=L(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){var t=N(e,"string");return typeof t=="symbol"?t:String(t)}function N(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $(e){return e&&e.map((t,n)=>p.createElement(t.tag,g({key:n},t.attr),$(t.child)))}function x(e){return t=>p.createElement(T,f({attr:g({},e.attr)},t),$(e.child))}function T(e){var t=n=>{var{attr:i,size:o,title:a}=e,h=V(e,I),s=o||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),p.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,h,{className:c,style:g(g({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&p.createElement("title",null,a),e.children)};return w!==void 0?p.createElement(w.Consumer,null,n=>t(n)):t(O)}function _(e){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z"},child:[]}]})(e)}function R(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"},child:[]}]})(e)}function Z(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"},child:[]}]})(e)}const W=l.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`,m=l.li`
  display: flex;
  justify-content: center;
  align-items: center;
`,v=l.button`
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
`,G=l(_)`
  fill: ${({active:e,theme:t})=>e==="true"?t.colors.blueFiftyColor:"none"};
  width: 27px;
  height: 27px;
  :hover,
  :focus {
    fill: ${e=>e.theme.colors.blueFiftyColor};
  }
`,K=l(R)`
  fill: ${e=>e.theme.colors.whiteThirtyColor};
`,A=l(Z)`
  fill: ${e=>e.theme.colors.whiteThirtyColor};
`,q=({itemsPerPage:e,totalItems:t})=>{const n=y(),i=j(P),o=Math.ceil(t/e),a=s=>{n(b(s))},h=()=>{const s=[];s.push(r.jsx(m,{children:r.jsx(v,{onClick:()=>a(i-1),disabled:i===1,children:r.jsx(K,{})})},"prev"));for(let c=1;c<=o;c++)s.push(r.jsx(m,{children:r.jsxs(v,{onClick:()=>a(c),children:[r.jsx(G,{active:i===c?"true":"false"}),r.jsx("span",{children:c})]})},c));return s.push(r.jsx(m,{children:r.jsx(v,{onClick:()=>a(i+1),disabled:i===o,children:r.jsx(A,{})})},"next")),s};return r.jsx("nav",{"aria-label":"Page navigation",children:r.jsx(W,{children:h()})})};function J(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"},child:[]}]})(e)}const Q=l.li`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 335px;

  @media ${d.tablet} {
    width: 342px;
    gap: 24px;
  }

  @media ${d.desktop} {
    width: 400px;
  }
`,U=l.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media ${d.tablet} {
    gap: 24px;
  }
`,X=l.h2`
  margin-bottom: 4px;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: ${e=>e.theme.whiteColor};

  @media ${d.tablet} {
    font-size: 24px;
  }
`,Y=l.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.whiteFiftyColor};

  @media ${d.tablet} {
    font-size: 16px;
    line-height: 1.125;
  }
`,ee=l.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.whiteColor};

  @media ${d.tablet} {
    font-size: 16px;
    line-height: 1.375;
  }
`,te=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ne=l.button`
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
  background: ${e=>e.theme.darkBlueColor};
  border-radius: 42px;
  padding: 14px 40px;
  height: 46px;

  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.whiteColor};

  @media ${d.tablet} {
    height: 54px;
    font-size: 16px;
    line-height: 1.125;
  }
`,ie=l.button`
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
`,re=({id:e,drinkThumb:t,drink:n,alcoholic:i,description:o,onRemoveDrinks:a})=>r.jsxs(Q,{children:[r.jsx("img",{src:t,alt:n,loading:"lazy"}),r.jsxs(U,{children:[r.jsxs("div",{children:[r.jsx(X,{children:n}),r.jsx(Y,{children:i})]}),r.jsx(ee,{children:o}),r.jsxs(te,{children:[r.jsx(ne,{type:"button",children:"See more"}),r.jsx(ie,{type:"button",onClick:()=>a(e),children:r.jsx(J,{})})]})]})]},e);function oe(e,t){const n=y(),i=j(P);u.useEffect(()=>{const c=(i-1)*t,z=i*t;e.slice(c,z).length===0&&i>1&&n(b(i-1))},[i,e,n,t]);const o=(i-1)*t,a=i*t,h=e.slice(o,a);return{currentPage:i,currentData:h,handlePageChange:c=>{n(b(c))}}}const ae=l.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: 54px;

  @media ${d.tablet} {
    margin-bottom: 94px;

    row-gap: 80px;
    column-gap: 20px;
  }
`;function se({data:e,onRemoveDrinks:t}){const[n,i]=u.useState(9);u.useEffect(()=>{const s=()=>{window.innerWidth<=768?i(8):i(9)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[]);const{currentPage:o,currentData:a,handlePageChange:h}=oe(e,n);return r.jsxs(r.Fragment,{children:[r.jsx(ae,{children:a.map(s=>r.jsx(re,{...s,onRemoveDrinks:t},s._id))}),e.length>n&&r.jsx(q,{currentPage:o,itemsPerPage:n,totalItems:e.length,onPageChange:h})]})}const le=e=>e.drinkFavorite.favorites,he=()=>{const e=j(le),t=y();u.useEffect(()=>{t(k())},[t]);const n=i=>{t(E(i))};return r.jsx(S,{children:r.jsxs(D,{className:"favorites",children:[r.jsx(H,{name:"Favorites"}),r.jsx(se,{data:e,onRemoveDrinks:n})]})})};export{he as default};
