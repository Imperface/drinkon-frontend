import{s as h,d as n,r as s,u as C,m as $,h as u,j as e,o as I,p as w,q as z,L as P}from"./index-a22bba28.js";import{S as E}from"./Section-62d71a9e.js";import{P as N}from"./PageTitle-723c1143.js";import{S as D,s as M,a as L}from"./react-select.esm-19be9c61.js";import{a as T}from"./selectors-a7001df1.js";import{u as R,P as F}from"./usePagination-db23eb1e.js";import"./floating-ui.dom-9d61e2db.js";const W=h.div`
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

      @media ${n.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 20px;
        row-gap: 40px;
        margin-bottom: 80px;
      }

      @media ${n.desktop} {
        row-gap: 80px;
      }
    }
    & .item {
      width: 335px;

      @media ${n.tablet} {
        width: 342px;
      }
      @media ${n.desktop} {
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

      @media ${n.tablet} {
        width: 342px;
        height: 360px;
      }

      @media ${n.desktop} {
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

      @media ${n.tablet} {
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

      @media ${n.tablet} {
        font-size: 16px;
        line-height: 1.125;
      }
    }

    @media ${n.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 60px;
      }
    }

    @media ${n.desktop} {
      padding-top: 160px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 80px;
      }
    }
  }
`,_=h.div`
  width: 335px;
  margin-bottom: 40px;

  @media ${n.tablet} {
  }

  @media ${n.desktop} {
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media ${n.tablet} {
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
`,q=h.input`
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

  @media ${n.tablet} {
    width: 264px;
  }
`,b=h(D)`
  width: 335px;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.56;
  color: #f3f3f3;
`,k={...b,control:a=>({...a,padding:"8px 16px 8px 24px",width:"335px",fontFamily:"Manrope, sans-serif",fontWeight:400,fontSize:"14px",lineHeight:"1.28571",color:"#f3f3f3",border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"200px",backgroundColor:"#161f37",[`@media ${n.tablet}`]:{width:"199px",fontSize:"17px",lineHeight:"1.56"}}),singleValue:a=>({...a,backgroundColor:"#161f37",color:"#f3f3f3"}),placeholder:a=>({...a,width:"107px",backgroundColor:"#161f37"}),menu:a=>({...a,border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"20px",backgroundColor:"#161f37",width:"100%"}),indicatorSeparator:a=>({...a,display:"none"})},H=({categories:a,onSearch:d})=>{const[o,p]=s.useState(""),[r,x]=s.useState(""),[l,m]=s.useState(""),c=C();s.useEffect(()=>{c($())},[c]);const i=u(M),f=()=>i.map(t=>({value:t._id,label:t.title})),g=t=>{p(t.target.value)},S=t=>{x((t==null?void 0:t.value)||"")},y=t=>{console.log(t),m((t==null?void 0:t.value)||"")},j=t=>{t.preventDefault(),console.log(o,r,l),d(`${o}`,`${r}`,l),p("")};s.useEffect(()=>{d(o,r,l)},[o,r,l]);const v=a.map(t=>({value:t,label:t}));return e.jsx(_,{children:e.jsxs("form",{className:"form",onSubmit:j,children:[e.jsxs("div",{className:"inputContainer",children:[e.jsx(q,{type:"text",value:o,onChange:g,placeholder:"Enter the text"}),e.jsx("button",{className:"buttonSvg",type:"submit",children:e.jsx(I,{color:"#f3f3f3",size:24})})]}),e.jsx(b,{placeholder:"All categories",isClearable:!0,cacheOptions:!0,onChange:S,options:v,styles:k}),e.jsx(b,{placeholder:"Ingredients",isClearable:!0,cacheOptions:!0,onChange:y,options:f(),styles:k})]})})},K=()=>{const[a,d]=s.useState(9),o=u(T),p=u(L),r=C();s.useEffect(()=>{r(w({}))},[r]),s.useEffect(()=>{r(z())},[r]);const x=(i,f,g)=>{console.log(g),r(w({query:i??"",category:f??"",ingredientId:g??"",page:"",limit:a}))};s.useEffect(()=>{const i=()=>{window.innerWidth<=1440?d(10):d(9)};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]);const{currentPage:l,currentData:m,handlePageChange:c}=R(o.drinks||[],a);return e.jsx(W,{children:e.jsxs(E,{className:"drinks",children:[e.jsx(N,{name:"Drinks"}),e.jsx(H,{ingredients:o,categories:p,onSearch:x}),o.drinks&&e.jsx("ul",{className:"list",children:m.map(i=>e.jsxs("li",{className:"item",children:[e.jsx("img",{className:"drinkImg",src:i.drinkThumb,alt:i.drink}),e.jsxs("div",{className:"drinkContainer",children:[e.jsx("h2",{className:"title",children:i.drink}),e.jsx(P,{to:`/drinks/${i._id}`,className:"button",children:"See more"})]})]},i._id))}),o.drinks&&o.drinks.length>a&&e.jsx(F,{currentPage:l,itemsPerPage:a,totalItems:o.drinks,onPageChange:c})]})})};export{K as default};
