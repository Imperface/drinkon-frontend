import{s as I,d as p,m as v,g as q,u as W,r as m,o as _,h as C,j as o,p as z,q as V,t as A,L as H}from"./index-b6a0a68b.js";import{S as G}from"./Section-76630b40.js";import{P as Q}from"./PageTitle-37e5eabb.js";import{S as U,s as X,a as Y}from"./react-select.esm-a8fa9c27.js";import{a as J,b as K}from"./selectors-a7001df1.js";import{u as Z,P as ee}from"./Placeholder-9a7c41d5.js";import"./floating-ui.dom-9d61e2db.js";import"./hero-desc@1x-c9bd24ae.js";const te=I.div`
  width: 100%;

  & .drinks {
    padding-top: 80px;
    padding-bottom: 80px;
    & h1 {
      margin-bottom: 40px;
    }
    & .list {
      display: flex;
      flex-direction: column;
      row-gap: 28px;
      margin-bottom: 40px;

      @media ${p.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 20px;
        row-gap: 40px;
        margin-bottom: 80px;
      }

      @media ${p.desktop} {
        row-gap: 80px;
      }
    }
    & .item {
      width: 335px;

      @media ${p.tablet} {
        width: 342px;
      }
      @media ${p.desktop} {
        width: 400px;
      }
    }
    & .drinkImg {
      margin-bottom: 14px;
      width: 335px;
      height: 360px;
      border-radius: 8px;
      background-image: linear-gradient
        (180deg, rgba(10, 10, 17, 0.03) 2.37%, rgba(10, 10, 17, 0.96) 95.31%);

      @media ${p.tablet} {
        width: 342px;
        height: 360px;
      }

      @media ${p.desktop} {
        width: 400px;
        height: 400px;
      }
    }
    & .drinkContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & .title {
      font-family: 'Manrope', sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.125;
      color: #f3f3f3;

      @media ${p.tablet} {
        font-size: 18px;
        line-height: 1.33333;
      }
    }
    & .button {
      align-self: flex-start;
      white-space: nowrap;
      padding: 0;
      background-color: transparent;
      border: none;

      font-family: 'Manrope', sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.28571;
      color: rgba(243, 243, 243, 0.5);
      cursor: pointer;

      @media ${p.tablet} {
        font-size: 16px;
        line-height: 1.125;
      }
    }

    @media ${p.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 60px;
      }
    }

    @media ${p.desktop} {
      padding-top: 160px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 80px;
      }
    }
  }

  & .paginationBlock {
    display: flex;
    justify-content: center;
    column-gap: 40px;
  }
  & .button-pagination {
    padding: 20px 40px;
    border-radius: 30px;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    transition: all 0.3s;
    font-size: 18px;
    &:hover {
      background-color: white;
      color: #161f37;
      border: 1px solid transparent;
    }
    &:disabled {
      color: #161f37;
      border: 1px solid transparent;

      background-color: #ffffff50;
      cursor: not-allowed;
      &:hover {
        background-color: #ffffff50;
      }
    }
  }
`,ne=I.div`
  width: 335px;
  margin-bottom: 40px;

  @media ${p.tablet} {
  }

  @media ${p.desktop} {
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media ${p.tablet} {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }
  }

  .inputContainer {
    position: relative;
    display: inline-block;
  }

  .buttonSvg {
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    padding: 8px 12px;
    border: none;
    background-color: inherit;
    border-radius: 4px;
    cursor: pointer;
  }
`,ie=I.input`
  padding: 18px 0 18px 24px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 200px;
  background-color: transparent;
  color: #f3f3f3;
  width: 335px;
  opacity: 0.8;
  ::placeholder {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.56;
    color: #f3f3f3;
  }

  @media ${p.tablet} {
    width: 264px;
  }
`,O=I(U)`
  width: 335px;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.56;
  color: #f3f3f3;
`,L={...O,control:e=>({...e,padding:"8px 16px 8px 24px",width:"335px",fontFamily:"Manrope, sans-serif",fontWeight:400,fontSize:"14px",lineHeight:"1.28571",color:"#f3f3f3",border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"200px",backgroundColor:"#161f37",[`@media ${p.tablet}`]:{width:"199px",fontSize:"17px",lineHeight:"1.56"}}),singleValue:e=>({...e,backgroundColor:"#161f37",color:"#f3f3f3"}),placeholder:e=>({...e,width:"107px",backgroundColor:"#161f37"}),menu:e=>({...e,border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"20px",backgroundColor:"#161f37",width:"100%"}),indicatorSeparator:e=>({...e,display:"none"})};var B="Expected a function",M=0/0,re="[object Symbol]",oe=/^\s+|\s+$/g,ae=/^[-+]0x[0-9a-f]+$/i,se=/^0b[01]+$/i,le=/^0o[0-7]+$/i,de=parseInt,ce=typeof v=="object"&&v&&v.Object===Object&&v,pe=typeof self=="object"&&self&&self.Object===Object&&self,fe=ce||pe||Function("return this")(),ue=Object.prototype,ge=ue.toString,me=Math.max,xe=Math.min,E=function(){return fe.Date.now()};function he(e,t,r){var l,s,x,u,d,c,g=0,f=!1,h=!1,k=!0;if(typeof e!="function")throw new TypeError(B);t=D(t)||0,S(r)&&(f=!!r.leading,h="maxWait"in r,x=h?me(D(r.maxWait)||0,t):x,k="trailing"in r?!!r.trailing:k);function n(a){var b=l,j=s;return l=s=void 0,g=a,u=e.apply(j,b),u}function T(a){return g=a,d=setTimeout(i,t),f?n(a):u}function $(a){var b=a-c,j=a-g,P=t-b;return h?xe(P,x-j):P}function w(a){var b=a-c,j=a-g;return c===void 0||b>=t||b<0||h&&j>=x}function i(){var a=E();if(w(a))return y(a);d=setTimeout(i,$(a))}function y(a){return d=void 0,k&&l?n(a):(l=s=void 0,u)}function F(){d!==void 0&&clearTimeout(d),g=0,l=c=s=d=void 0}function R(){return d===void 0?u:y(E())}function N(){var a=E(),b=w(a);if(l=arguments,s=this,c=a,b){if(d===void 0)return T(c);if(h)return d=setTimeout(i,t),n(c)}return d===void 0&&(d=setTimeout(i,t)),u}return N.cancel=F,N.flush=R,N}function be(e,t,r){var l=!0,s=!0;if(typeof e!="function")throw new TypeError(B);return S(r)&&(l="leading"in r?!!r.leading:l,s="trailing"in r?!!r.trailing:s),he(e,t,{leading:l,maxWait:t,trailing:s})}function S(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ke(e){return!!e&&typeof e=="object"}function ye(e){return typeof e=="symbol"||ke(e)&&ge.call(e)==re}function D(e){if(typeof e=="number")return e;if(ye(e))return M;if(S(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=S(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(oe,"");var r=se.test(e);return r||le.test(e)?de(e.slice(2),r?2:8):ae.test(e)?M:+e}var je=be;const we=q(je),ve=({categories:e,setQueryValue:t,queryValue:r,setCategoryValue:l,setIngredientValue:s,setPage:x})=>{const u=W();m.useEffect(()=>{u(_())},[u]);const d=C(X),c=()=>d.map(n=>({value:n._id,label:n.title})),g=n=>{t(n.target.value),x(1)},f=n=>{if(n===null){l("");return}x(1),l(n)},h=n=>{if(n===null){s("");return}x(1),s(n)},k=e.map(n=>({value:n,label:n}));return o.jsx(ne,{children:o.jsxs("form",{className:"form",children:[o.jsx("div",{className:"inputContainer",children:o.jsx(ie,{type:"text",value:r,onInput:we(g,1e4),placeholder:"Enter the text"})}),o.jsx(O,{placeholder:"All categories",isClearable:!0,cacheOptions:!0,onChange:f,options:k,styles:L}),o.jsx(O,{placeholder:"Ingredients",isClearable:!0,cacheOptions:!0,onChange:h,options:c(),styles:L})]})})},Pe=()=>{const[e,t]=m.useState(9);m.useState(1);const[r,l]=m.useState(""),[s,x]=m.useState(""),[u,d]=m.useState(""),[c,g]=m.useState(1),f=C(J),h=C(Y),k=C(K),n=W();m.useEffect(()=>{n(z({}))},[n]),m.useEffect(()=>{n(V())},[n]),m.useEffect(()=>{const i={page:c,limit:e};r&&(i.query=r),s&&(i.category=s.value),u&&(i.ingredientId=u.value),n(z(i))},[r,s,u,c,e]),m.useEffect(()=>{const i=()=>{window.innerWidth<1440?t(10):t(9)};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]),Z(f.drinks||[],e);const T=i=>{c!==1&&g(y=>y-1)},$=i=>{g(y=>y+1)},w=()=>{const i=Number(f.quantityTotal);return Math.ceil(i/e)};return o.jsxs(te,{children:[k&&o.jsx(A,{}),o.jsxs(G,{className:"drinks",children:[o.jsx(Q,{name:"Drinks"}),o.jsx(ve,{setQueryValue:l,setCategoryValue:x,setIngredientValue:d,queryValue:r,categoryValue:s,ingredients:f,categories:h,setPage:g}),f.drinks&&o.jsx("ul",{className:"list",children:f.drinks.map(i=>o.jsxs("li",{className:"item",children:[o.jsx("img",{className:"drinkImg",src:i.drinkThumb,alt:i.drink}),o.jsxs("div",{className:"drinkContainer",children:[o.jsx("h2",{className:"title",children:i.drink}),o.jsx(H,{to:`/drinks/${i._id}`,className:"button",children:"See more"})]})]},i._id))}),f.drinks&&f.drinks.length===0&&o.jsx(ee,{text:"Nothing was found for your request"}),f.drinks&&f.quantityTotal>e&&o.jsxs("div",{className:"paginationBlock",children:[o.jsx("button",{className:"button-pagination prev-button",onClick:T,disabled:c===1,children:"Prev"}),o.jsx("button",{className:"button-pagination next-button",onClick:$,disabled:w()===c,children:"Next"})]})]})]})};export{Pe as default};
