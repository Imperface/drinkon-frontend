import{s as I,d as c,m as S,g as A,u as W,r as g,o as V,h as P,j as i,p as D,q as _,L as H}from"./index-0a84b6e4.js";import{S as Q}from"./Section-0cf2d87a.js";import{P as G}from"./PageTitle-601068a5.js";import{S as U,s as X,a as Y}from"./react-select.esm-c8aae6a3.js";import{a as J}from"./selectors-a7001df1.js";import{P as K}from"./Placeholder-be72d466.js";import"./floating-ui.dom-9d61e2db.js";import"./hero-desc@1x-24a2b576.js";const Z=I.div`
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

      @media ${c.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 20px;
        row-gap: 40px;
        margin-bottom: 80px;
      }

      @media ${c.desktop} {
        row-gap: 80px;
      }
    }
    & .item {
      width: 335px;

      @media ${c.tablet} {
        width: 342px;
      }
      @media ${c.desktop} {
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

      @media ${c.tablet} {
        width: 342px;
        height: 360px;
      }

      @media ${c.desktop} {
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

      @media ${c.tablet} {
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

      @media ${c.tablet} {
        font-size: 16px;
        line-height: 1.125;
      }
    }

    @media ${c.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 60px;
      }
    }

    @media ${c.desktop} {
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
`,ee=I.div`
  width: 335px;
  margin-bottom: 40px;

  @media ${c.tablet} {
  }

  @media ${c.desktop} {
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media ${c.tablet} {
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
`,te=I.input`
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

  @media ${c.tablet} {
    width: 264px;
  }
`,z=I(U)`
  width: 335px;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.56;
  color: #f3f3f3;
`,R={...z,control:e=>({...e,padding:"8px 16px 8px 24px",width:"335px",fontFamily:"Manrope, sans-serif",fontWeight:400,fontSize:"14px",lineHeight:"1.28571",color:"#f3f3f3",border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"200px",backgroundColor:"#161f37",[`@media ${c.tablet}`]:{width:"199px",fontSize:"17px",lineHeight:"1.56"}}),singleValue:e=>({...e,backgroundColor:"#161f37",color:"#f3f3f3"}),placeholder:e=>({...e,width:"107px",backgroundColor:"#161f37"}),menu:e=>({...e,border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"20px",backgroundColor:"#161f37",width:"100%"}),indicatorSeparator:e=>({...e,display:"none"})};var B="Expected a function",q=0/0,ne="[object Symbol]",re=/^\s+|\s+$/g,ie=/^[-+]0x[0-9a-f]+$/i,oe=/^0b[01]+$/i,ae=/^0o[0-7]+$/i,se=parseInt,le=typeof S=="object"&&S&&S.Object===Object&&S,de=typeof self=="object"&&self&&self.Object===Object&&self,ce=le||de||Function("return this")(),pe=Object.prototype,fe=pe.toString,ue=Math.max,ge=Math.min,O=function(){return ce.Date.now()};function me(e,n,o){var l,s,x,p,d,u,b=0,h=!1,m=!1,f=!0;if(typeof e!="function")throw new TypeError(B);n=L(n)||0,T(o)&&(h=!!o.leading,m="maxWait"in o,x=m?ue(L(o.maxWait)||0,n):x,f="trailing"in o?!!o.trailing:f);function a(r){var k=l,w=s;return l=s=void 0,b=r,p=e.apply(w,k),p}function y(r){return b=r,d=setTimeout(j,n),h?a(r):p}function $(r){var k=r-u,w=r-b,M=n-k;return m?ge(M,x-w):M}function v(r){var k=r-u,w=r-b;return u===void 0||k>=n||k<0||m&&w>=x}function j(){var r=O();if(v(r))return C(r);d=setTimeout(j,$(r))}function C(r){return d=void 0,f&&l?a(r):(l=s=void 0,p)}function N(){d!==void 0&&clearTimeout(d),b=0,l=u=s=d=void 0}function E(){return d===void 0?p:C(O())}function t(){var r=O(),k=v(r);if(l=arguments,s=this,u=r,k){if(d===void 0)return y(u);if(m)return d=setTimeout(j,n),a(u)}return d===void 0&&(d=setTimeout(j,n)),p}return t.cancel=N,t.flush=E,t}function xe(e,n,o){var l=!0,s=!0;if(typeof e!="function")throw new TypeError(B);return T(o)&&(l="leading"in o?!!o.leading:l,s="trailing"in o?!!o.trailing:s),me(e,n,{leading:l,maxWait:n,trailing:s})}function T(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function he(e){return!!e&&typeof e=="object"}function be(e){return typeof e=="symbol"||he(e)&&fe.call(e)==ne}function L(e){if(typeof e=="number")return e;if(be(e))return q;if(T(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=T(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(re,"");var o=oe.test(e);return o||ae.test(e)?se(e.slice(2),o?2:8):ie.test(e)?q:+e}var ke=xe;const F=A(ke),ye=({categories:e,setQueryValue:n,queryValue:o,setCategoryValue:l,setIngredientValue:s,setPage:x})=>{const p=W();g.useEffect(()=>{p(V())},[p]);const d=P(X),u=()=>d.map(a=>({value:a._id,label:a.title})),b=a=>{n(a.target.value),x(1)},h=a=>{if(a===null){l("");return}x(1),l(a)},m=a=>{if(a===null){s("");return}x(1),s(a)},f=e.map(a=>({value:a,label:a}));return i.jsx(ee,{children:i.jsxs("form",{className:"form",children:[i.jsx("div",{className:"inputContainer",children:i.jsx(te,{type:"text",value:o,onInput:F(b,1e4),placeholder:"Enter the text"})}),i.jsx(z,{placeholder:"All categories",isClearable:!0,cacheOptions:!0,onChange:h,options:f,styles:R}),i.jsx(z,{placeholder:"Ingredients",isClearable:!0,cacheOptions:!0,onChange:m,options:u(),styles:R})]})})},Ne=()=>{const[e,n]=g.useState(9);g.useState(1);const[o,l]=g.useState(""),[s,x]=g.useState(""),[p,d]=g.useState(""),[u,b]=g.useState(""),[h,m]=g.useState(1),f=P(J),a=P(Y),y=W();g.useEffect(()=>{y(D({}))},[y]),g.useEffect(()=>{y(_())},[y]);const $=t=>{x(t)},v=g.useRef(F($,3e3));g.useEffect(()=>{const t={page:h,limit:e};s&&(t.query=s),p&&(t.category=p.value),u&&(t.ingredientId=u.value),y(D(t))},[s,p,u,h,e]),g.useEffect(()=>{const t=()=>{window.innerWidth<1440?n(10):n(9)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[]);const j=t=>{l(t),v.current(t)},C=t=>{h!==1&&m(r=>r-1)},N=t=>{m(r=>r+1)},E=()=>{const t=Number(f.quantityTotal);return Math.ceil(t/e)};return i.jsx(Z,{children:i.jsxs(Q,{className:"drinks",children:[i.jsx(G,{name:"Drinks"}),i.jsx(ye,{setQueryValue:j,setCategoryValue:d,setIngredientValue:b,queryValue:o,categoryValue:p,ingredients:f,categories:a,setPage:m}),f.drinks&&i.jsx("ul",{className:"list",children:f.drinks.map(t=>i.jsxs("li",{className:"item",children:[i.jsx("img",{className:"drinkImg",src:t.drinkThumb,alt:t.drink}),i.jsxs("div",{className:"drinkContainer",children:[i.jsx("h2",{className:"title",children:t.drink}),i.jsx(H,{to:`/drinks/${t._id}`,className:"button",children:"See more"})]})]},t._id))}),f.drinks&&f.drinks.length===0&&i.jsx(K,{text:"Nothing was found for your request"}),f.drinks&&f.quantityTotal>e&&i.jsxs("div",{className:"paginationBlock",children:[i.jsx("button",{className:"button-pagination prev-button",onClick:C,disabled:h===1,children:"Prev"}),i.jsx("button",{className:"button-pagination next-button",onClick:N,disabled:E()===h,children:"Next"})]})]})})};export{Ne as default};
