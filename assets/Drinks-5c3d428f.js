import{s as g,d as i,r as s,j as e,m as j,h as b,u as v,o as k,p as $}from"./index-f7d5d131.js";import{S as z}from"./Section-807ae223.js";import{P as I}from"./PageTitle-47f65310.js";import{S as P,s as N}from"./react-select.esm-645dfcda.js";import{a as D}from"./selectors-a7001df1.js";import{u as E,P as M}from"./usePagination-da2bff3d.js";import"./floating-ui.dom-9d61e2db.js";const R=g.div`
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

      @media ${i.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 20px;
        row-gap: 40px;
        margin-bottom: 80px;
      }

      @media ${i.desktop} {
        row-gap: 80px;
      }
    }
    & .item {
      width: 335px;

      @media ${i.tablet} {
        width: 342px;
      }
      @media ${i.desktop} {
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

      @media ${i.tablet} {
        width: 342px;
        height: 360px;
      }

      @media ${i.desktop} {
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

      @media ${i.tablet} {
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

      @media ${i.tablet} {
        font-size: 16px;
        line-height: 1.125;
      }
    }

    @media ${i.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 60px;
      }
    }

    @media ${i.desktop} {
      padding-top: 160px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 80px;
      }
    }
  }
`,T=g.div`
  width: 335px;
  margin-bottom: 40px;

  @media ${i.tablet} {
  }

  @media ${i.desktop} {
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media ${i.tablet} {
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
`,L=g.input`
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

  @media ${i.tablet} {
    width: 264px;
  }
`,u=g(P)`
  width: 335px;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.56;
  color: #f3f3f3;
`,w={...u,control:t=>({...t,padding:"8px 16px 8px 24px",width:"335px",fontFamily:"Manrope, sans-serif",fontWeight:400,fontSize:"14px",lineHeight:"1.28571",color:"#f3f3f3",border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"200px",backgroundColor:"#161f37",[`@media ${i.tablet}`]:{width:"199px",fontSize:"17px",lineHeight:"1.56"}}),singleValue:t=>({...t,backgroundColor:"#161f37",color:"#f3f3f3"}),placeholder:t=>({...t,width:"107px",backgroundColor:"#161f37"}),menu:t=>({...t,border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"20px",backgroundColor:"#161f37",width:"100%"}),indicatorSeparator:t=>({...t,display:"none"})},W=({categories:t,ingredients:l,onSearch:o})=>{const[d,r]=s.useState(""),[p,m]=s.useState([]),[c,x]=s.useState([]),a=n=>{r(n.target.value)},h=n=>{m(n.value)},f=n=>{x(n.label)},C=n=>{n.preventDefault(),o(d,p,c),r("")};s.useEffect(()=>{o(d,p,c)},[d,p,c]);const y=t.map(n=>({value:n,label:n})),S=l.drinks&&l.drinks.map(n=>({value:n._id,label:n.drink}));return e.jsx(T,{children:e.jsxs("form",{className:"form",onSubmit:C,children:[e.jsxs("div",{className:"inputContainer",children:[e.jsx(L,{type:"text",value:d,onChange:a,placeholder:"Enter the text"}),e.jsx("button",{className:"buttonSvg",type:"submit",children:e.jsx(j,{color:"#f3f3f3",size:24})})]}),e.jsx(u,{placeholder:"All categories",isClearable:!0,cacheOptions:!0,onChange:h,options:y,styles:w}),e.jsx(u,{placeholder:"Ingredients",isClearable:!0,cacheOptions:!0,onChange:f,options:S,styles:w})]})})},V=()=>{const[t,l]=s.useState(9),o=b(D),d=b(N),r=v();s.useEffect(()=>{r(k({query:"al",category:"",ingredientId:"",page:"",limit:""}))},[r]),s.useEffect(()=>{r($())},[r]);const p=(a,h,f)=>{r(k({query:a,category:h,ingredientId:f,page:"",limit:""}))};s.useEffect(()=>{const a=()=>{window.innerWidth<=1440?l(10):l(9)};return window.addEventListener("resize",a),a(),()=>{window.removeEventListener("resize",a)}},[]);const{currentPage:m,currentData:c,handlePageChange:x}=E(o.drinks||[],t);return e.jsx(R,{children:e.jsxs(z,{className:"drinks",children:[e.jsx(I,{name:"Drinks"}),e.jsx(W,{ingredients:o,categories:d,onSearch:p}),o.drinks&&e.jsx("ul",{className:"list",children:c.map(a=>e.jsxs("li",{className:"item",children:[e.jsx("img",{className:"drinkImg",src:a.drinkThumb,alt:a.drink}),e.jsxs("div",{className:"drinkContainer",children:[e.jsx("h2",{className:"title",children:a.drink}),e.jsx("button",{className:"button",type:"button",children:"See more"})]})]},a._id))}),o.drinks&&o.drinks.length>t&&e.jsx(M,{currentPage:m,itemsPerPage:t,totalItems:o.drinks,onPageChange:x})]})})};export{V as default};
