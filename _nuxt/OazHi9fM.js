import{w as ze,x as Be,m as Fe,y as $e,z as Ae,A as Te,B as Ue,g as Ee,h as Me,p as Ge,k as Oe,C as Re,n as Ne,l as Ke,D as je,o as We,q as Ye,r as qe,u as fe,a as ve,V as _e,c as ke,_ as ge}from"./0OxMlbBx.js";import{V as be,_ as ye}from"./CftXl_Qc.js";import{_ as Ve}from"./HYHooEtL.js";import{a as x,V as B}from"./DSuhQRRu.js";import{d as ne,o as w,c as F,b as a,n as te,p as se,e,i as P,t as V,N as $,F as ue,V as de,s as xe,G as ae,a4 as me,v as He,z as Le,B as Je,E as Qe,a2 as Xe,J as Ze,r as m,w as Ce,a as k,f as g,j as le,a5 as we,a6 as ea,m as aa,q as pe}from"./DkOmN_ZY.js";import{_ as ta}from"./DlAUqK2U.js";import{u as De}from"./jwbHvlg_.js";import{_ as Pe}from"./Cy7TSD_R.js";import{a as E,V as j,e as Se}from"./DI7W2CmY.js";import{V as oe}from"./C942Ep-J.js";import{c as ce,b as N,V as la,a as oa}from"./DoLcrwfY.js";import{V as Ie}from"./C9hH1vb-.js";import{a as ie}from"./CjNycPYx.js";import"./CSt7Jbog.js";/* empty css        */import"./DwatjecA.js";import"./D7-IG4Gu.js";import"./DY7PVvcf.js";import"./-v8ZhhGQ.js";import"./C-GTDzx5.js";import"./K4P9XtT_.js";import"./D5_RrU5Y.js";import"./CiKrGn8y.js";import"./d4n_CmHg.js";const na=ne({__name:"NumericKeyboard",props:{numbers:{type:Array,default:()=>["1","2","3","4","5","6","7","8","9","0"]}},emits:["input","backspace","clear"],setup(u,{emit:b}){const n=b,v=c=>{n("input",c)},d=()=>{n("backspace")},r=()=>{n("clear")};return(c,_)=>(w(),F(B,null,{default:a(()=>[(w(!0),te(ue,null,se(u.numbers,f=>(w(),F(x,{key:f,cols:"4",class:"pa-1 pt-1 pb-1 ma-0"},{default:a(()=>[e($,{height:"50",block:"",onClick:()=>v(f)},{default:a(()=>[P(V(f),1)]),_:2},1032,["onClick"])]),_:2},1024))),128)),e(x,{cols:"4",class:"pa-1 pt-1 pb-1 ma-0"},{default:a(()=>[e($,{block:"",height:"50",color:"secondary",variant:"outlined",onClick:r},{default:a(()=>[P(" Clear ")]),_:1})]),_:1}),e(x,{cols:"4",class:"pa-1 pt-1 pb-1 ma-0"},{default:a(()=>[e($,{block:"",height:"50",color:"secondary",variant:"outlined",onClick:d},{default:a(()=>[e(de,{icon:"ri-arrow-left-s-line"})]),_:1})]),_:1})]),_:1}))}}),sa=ta(na,[["__scopeId","data-v-8448774a"]]),ua=xe({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataIterator-items");function da(u,b){const n=u.returnObject?b:me(b,u.itemValue),v=me(b,u.itemSelectable,!0);return{type:"item",value:n,selectable:v,raw:b}}function ra(u,b){const n=[];for(const v of b)n.push(da(u,v));return n}function ia(u){return{items:ae(()=>ra(u,u.items))}}const ca=xe({search:String,loading:Boolean,...He(),...ua(),...ze(),...Be(),...Fe({itemsPerPage:5}),...$e(),...Ae(),...Te(),...Le()},"VDataIterator"),he=Je()({name:"VDataIterator",props:ca(),emits:{"update:modelValue":u=>!0,"update:groupBy":u=>!0,"update:page":u=>!0,"update:itemsPerPage":u=>!0,"update:sortBy":u=>!0,"update:options":u=>!0,"update:expanded":u=>!0},setup(u,b){let{slots:n}=b;const v=Qe(u,"groupBy"),d=Xe(u,"search"),{items:r}=ia(u),{filteredItems:c}=Ue(u,r,d,{transform:h=>h.raw}),{sortBy:_,multiSort:f,mustSort:S}=Ee(u),{page:D,itemsPerPage:C}=Me(u),{toggleSort:z}=Ge({sortBy:_,multiSort:f,mustSort:S,page:D}),{sortByWithGroups:i,opened:p,extractRows:M,isGroupOpen:I,toggleGroup:A}=Oe({groupBy:v,sortBy:_}),{sortedItems:W}=Re(u,c,i),{flatItems:T}=Ne(W,v,p),y=ae(()=>T.value.length),{startIndex:Y,stopIndex:q,pageCount:H,prevPage:L,nextPage:J,setItemsPerPage:Q,setPage:X}=Ke({page:D,itemsPerPage:C,itemsLength:y}),{paginatedItems:G}=je({items:T,startIndex:Y,stopIndex:q,itemsPerPage:C}),K=ae(()=>M(G.value)),{isSelected:Z,select:ee,selectAll:l,toggleSelect:t}=We(u,{allItems:r,currentPage:K}),{isExpanded:O,toggleExpand:R}=Ye(u);qe({page:D,itemsPerPage:C,sortBy:_,groupBy:v,search:d});const s=ae(()=>({page:D.value,itemsPerPage:C.value,sortBy:_.value,pageCount:H.value,toggleSort:z,prevPage:L,nextPage:J,setPage:X,setItemsPerPage:Q,isSelected:Z,select:ee,selectAll:l,toggleSelect:t,isExpanded:O,toggleExpand:R,isGroupOpen:I,toggleGroup:A,items:K.value,groupedItems:G.value}));return Ze(()=>e(u.tag,{class:["v-data-iterator",u.class],style:u.style},{default:()=>{var h,o,U,re;return[(h=n.header)==null?void 0:h.call(n,s.value),G.value.length?(U=n.default)==null?void 0:U.call(n,s.value):(o=n["no-data"])==null?void 0:o.call(n),(re=n.footer)==null?void 0:re.call(n,s.value)]}})),{}}}),ma={class:"pa-3 text-center",style:{display:"flex","align-items":"center","justify-content":"center"}},pa={style:{"max-inline-size":"240px"}},fa={class:"d-flex flex-column ms-3"},va={class:"d-block font-weight-medium text-high-emphasis text-truncate"},_a={class:"d-flex"},ka={class:"d-flex gap-2"},ga={class:"d-flex gap-2"},ba=ne({__name:"StokGirisi",async setup(u){let b,n;const v=fe(),d=De(),r=m("");[b,n]=Ce(()=>ve("depo",()=>v.getAllDepos())),await b,n();const c=m({name:"DEPO SEÇ",id:0}),_=m({depo_id:null,id:null,raf_id:"",product_code:"",product_desc:"",stock:0,type:"IN",adet:"0"}),f=m(),S=m(),D=m(!1),C=m(!1),z=m(!1),i=m(1),p=m(""),M=m(""),I=m(""),A=l=>{l==="depo_sec"&&(S.value=l,D.value=!0),l==="barcode"&&(S.value=l,C.value=!0)},W=[{title:"Ürün Kodu",key:"name"},{title:"Depo",key:"depo"},{title:"Raf No",key:"raf"},{title:"Durum",key:"stock"},{title:"Aksiyonlar",key:"actions"}],T=async()=>{S.value==="depo_sec"&&(D.value=!1)},y=m({deger:"",item:0,title:"",message:""}),Y=(l,t)=>{y.value.deger=l,y.value.item=t.id,y.value.title="Emin misiniz?",y.value.message="Stok hareketi silme işlemi geri alınamaz ve ürünün stoğu da eski haline güncellenecektir.",z.value=!0},q=async l=>{l.deger==="delete"&&await d.deleteStockMovement(l.item).then(()=>{z.value=!1})},H=l=>{c.value.id=l.raw.id,_.value.depo_id=l.raw.id,c.value.name=l.raw.name,v.getRaflar(l.raw.id)},L=async(l,t)=>{await d.getMalzemosByProductId({product_id:l,depo_id:t}).then(()=>{p.value="0",d.error===""?(A("barcode"),i.value=3,I.value=`${d.singleProduct.productCode} ${d.singleProduct.productDesc}`):d.notFound&&(A("barcode"),i.value=1,I.value=`Ürün Bulunamadı-${r.value}`,_.value.product_code=r.value)})},J=async()=>{f.value&&f.value.clearForm(),r.value&&L(r.value,c.value.id)},Q=l=>{p.value==="0"?p.value=l:p.value+=l},X=()=>{p.value.length>1?p.value=p.value.slice(0,-1):p.value="0"},G=()=>{p.value="0"},K=async()=>{await d.addProductStock(d.singleProduct.id,p.value).then(()=>{d.error===""&&(C.value=!1,p.value="0")})},Z=l=>{_.value.depo_id=l,_.value.depo_id!==null&&v.getRaflar(_.value.depo_id)},ee=async l=>{l===1||l===2&&f.value&&f.value.validate()?i.value++:l===3&&d.notFound?(_.value.adet=p.value,f.value.internalFormData.adet=p.value,await d.saveMalzemos(f.value.internalFormData).then(()=>{d.error===""&&(console.log("tamam"),C.value=!1)})):l===3&&d.notFound===!1&&K()};return(l,t)=>{const O=ge,R=ye,s=Ve,h=sa;return w(),F(B,null,{default:a(()=>[e(Pe,{modelValue:k(d).loading,"onUpdate:modelValue":t[0]||(t[0]=o=>k(d).loading=o)},null,8,["modelValue"]),e(O,{modelValue:z.value,"onUpdate:modelValue":t[1]||(t[1]=o=>z.value=o),deger:y.value.deger,item:y.value.item,title:y.value.title,message:y.value.message,onClickedAgree:q},null,8,["modelValue","deger","item","title","message"]),e(R,{modelValue:D.value,"onUpdate:modelValue":t[2]||(t[2]=o=>D.value=o),"mdl-text":I.value,"mdl-btn-text":M.value,status:S.value,fullscreen:"",onClickedSave:T},{default:a(()=>[e(he,{items:k(v).depo,loading:k(v).loading,class:"pa-6 pb-7 pt-1 mt-5"},{default:a(o=>[e(B,null,{default:a(()=>[(w(!0),te(ue,null,se(o.items,U=>(w(),F(x,{key:U.raw.id,cols:"12",md:"3"},{default:a(()=>[e(E,{role:"button",color:c.value.id===U.raw.id?"warning":"",here:"",onClick:re=>H(U)},{default:a(()=>[e(j,{class:"text-center"},{default:a(()=>[g("h4",null,V(U.raw.name),1)]),_:2},1024)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["items","loading"])]),_:1},8,["modelValue","mdl-text","mdl-btn-text","status"]),e(R,{modelValue:C.value,"onUpdate:modelValue":t[9]||(t[9]=o=>C.value=o),"mdl-text":I.value,"mdl-btn-text":M.value,status:S.value,fullscreen:"",toolbar:!1,onClickedSave:T},{default:a(()=>[e(E,{"prepend-icon":"ri-24-hours-fill",title:I.value},{default:a(()=>[e(oe,{class:"mt-0"}),e(j,null,{default:a(()=>[e(ce,{modelValue:i.value,"onUpdate:modelValue":t[5]||(t[5]=o=>i.value=o)},{default:a(()=>[e(N,{value:1},{default:a(()=>[e(x,{cols:"12",md:"12"},{default:a(()=>[k(d).notFound?(w(),F(Ie,{key:0,type:"error",class:"mb-3"},{default:a(()=>[P(" Ürün ilgili depoda bulunamadı. Yeni ürün eklemek ister misiniz? ")]),_:1})):le("",!0)]),_:1})]),_:1}),e(N,{value:2},{default:a(()=>[e(s,{ref_key:"productForm",ref:f,modelValue:_.value,"onUpdate:modelValue":t[3]||(t[3]=o=>_.value=o),depolar:k(v).depo,raflar:k(v).raflar,disabled:"",onDepoChange:Z},null,8,["modelValue","depolar","raflar"])]),_:1}),e(N,{value:3},{default:a(()=>[g("div",ma,[g("div",pa,[e(B,null,{default:a(()=>[e(x,{cols:"12",class:"pa-1 pt-1 pb-1 ma-0"},{default:a(()=>[e(ie,{modelValue:p.value,"onUpdate:modelValue":t[4]||(t[4]=o=>p.value=o),"append-inner-icon":"ri-numbers-line",label:"Adet",placeholder:"Adet",readonly:""},null,8,["modelValue"])]),_:1})]),_:1}),e(h,{onInput:Q,onBackspace:X,onClear:G})])])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(oe,{class:"mb-2"}),e(Se,{class:"mb-1"},{default:a(()=>[e(be,{fluid:""},{default:a(()=>[e(B,null,{default:a(()=>[e(x,null,{default:a(()=>[i.value>1&&i.value<3||i.value===3&&k(d).notFound?(w(),F($,{key:0,variant:"outlined",block:"",size:"large",onClick:t[6]||(t[6]=o=>i.value--)},{default:a(()=>[P(" Geri Git ")]),_:1})):le("",!0),i.value===1||i.value===3&&k(d).notFound===!1?(w(),F($,{key:1,variant:"outlined",block:"",size:"large",onClick:t[7]||(t[7]=o=>C.value=!1)},{default:a(()=>[P(" Vazgeç ")]),_:1})):le("",!0),e($,{color:"primary",variant:"flat",block:"",size:"large","prepend-icon":"$vuetify",class:"mt-2",style:{"margin-inline-start":"0"},onClick:t[8]||(t[8]=o=>ee(i.value))},{default:a(()=>[P(V(i.value===1?"Yeni Ürün Ekle":i.value===2?"İlerle":i.value===3?"Kaydet":""),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue","mdl-text","mdl-btn-text","status"]),e(x,{cols:"12",md:"3"},{default:a(()=>[e(E,null,{default:a(()=>[e(j,{class:"pt-5"},{default:a(()=>[e(B,null,{default:a(()=>[e(x,{cols:"12",class:"pb-2"},{default:a(()=>[e($,{type:"submit",class:"me-2",block:"",onClick:t[10]||(t[10]=o=>A("depo_sec"))},{default:a(()=>[P(V(c.value.name),1)]),_:1})]),_:1}),e(x,{cols:"12"},{default:a(()=>[e(ie,{modelValue:r.value,"onUpdate:modelValue":t[11]||(t[11]=o=>r.value=o),"prepend-inner-icon":"ri-barcode-line",label:"Barkod Okut",placeholder:"Barkod Okut",disabled:c.value.id===0,onKeyup:we(J,["enter"])},null,8,["modelValue","disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(x,{cols:"12",md:"9"},{default:a(()=>[e(E,null,{default:a(()=>[e(_e,{headers:W,items:k(d).stockInMovements,"hide-default-footer":"",class:"text-no-wrap"},{"item.name":a(({item:o})=>[g("div",fa,[g("span",va,V(o.malzemos.productCode),1),g("small",null,V(o.malzemos.productDesc),1)])]),"item.depo":a(({item:o})=>[g("div",_a,[g("span",null,V(o.malzemos.raf.descendants.name),1)])]),"item.raf":a(({item:o})=>[g("div",ka,[g("span",null,V(o.malzemos.raf.name),1)])]),"item.stock":a(({item:o})=>[e(ke,{color:"success",class:"font-weight-medium",size:"small"},{default:a(()=>[P(" + "+V(o.stock),1)]),_:2},1024)]),"item.actions":a(({item:o})=>[g("div",ga,[e(de,{icon:"ri-close-circle-line",size:"22",onClick:U=>Y("delete",o)},null,8,["onClick"])])]),bottom:a(()=>[]),_:1},8,["items"])]),_:1})]),_:1})]),_:1})}}}),ya={class:"d-flex flex-column ms-3"},Va={class:"d-block font-weight-medium text-high-emphasis text-truncate"},xa={class:"d-flex"},Ca={class:"d-flex gap-2"},wa={class:"d-flex gap-2"},Da=ne({__name:"StokCikisi",async setup(u){let b,n;const{$toast:v}=ea(),d=fe(),r=De(),c=m("");[b,n]=Ce(()=>ve("depo",()=>d.getAllDepos())),await b,n();const _=m({name:"DEPO SEÇ",id:0}),f=m({depo_id:null,id:null,raf_id:"",product_code:"",product_desc:"",stock:0,type:"OUT",adet:"0"}),S=m(),D=m(!1),C=m(!1),z=m(!1),i=m(1),p=m(null),M=m(""),I=m(""),A=l=>{l==="depo_sec"&&(S.value=l,D.value=!0),l==="barcode"&&(S.value=l,C.value=!0)},W=[{title:"Ürün Kodu",key:"name"},{title:"Depo",key:"depo"},{title:"Raf No",key:"raf"},{title:"Durum",key:"stock"},{title:"Aksiyonlar",key:"actions"}],T=async()=>{S.value==="depo_sec"&&(D.value=!1)},y=m({deger:"",item:0,title:"",message:""}),Y=(l,t)=>{y.value.deger=l,y.value.item=t.id,y.value.title="Emin misiniz?",y.value.message="Stok hareketi silme işlemi geri alınamaz ve ürünün stoğu da eski haline güncellenecektir.",z.value=!0},q=async l=>{l.deger==="delete"&&await r.deleteStockMovement(l.item).then(()=>{z.value=!1})},H=l=>{_.value.id=l.raw.id,f.value.depo_id=l.raw.id,_.value.name=l.raw.name,d.getRaflar(l.raw.id)},L=async(l,t,O)=>{await r.removeProductStock(l,t,O).then(()=>{r.notFound&&(A("barcode"),i.value=1,I.value=`Ürün Bulunamadı-${c.value}`,f.value.product_code=c.value,f.value.stock=1),r.error!==""&&r.notFound===!1&&v.open({message:r.error,type:"error",position:"top"}),c.value=""})},J=()=>{p.value&&p.value.clearForm(),c.value&&L(c.value,"1",_.value.id)},Q=l=>{f.value.depo_id=l,f.value.depo_id!==null&&d.getRaflar(f.value.depo_id)},X=async l=>{l===1?i.value=i.value+1:l===2&&p.value&&p.value.validate()&&await r.saveMalzemos(p.value.internalFormData).then(()=>{r.error===""&&(console.log("tamam"),C.value=!1)})},G=()=>{i.value--},K=()=>{C.value=!1},Z=ae(()=>i.value===2&&r.notFound?"Geri Git":i.value===1?"Vazgeç":""),ee=()=>{i.value===2&&r.notFound?G():i.value===1&&K()};return(l,t)=>{const O=ge,R=ye;return w(),F(B,null,{default:a(()=>[e(Pe,{modelValue:k(r).loading,"onUpdate:modelValue":t[0]||(t[0]=s=>k(r).loading=s)},null,8,["modelValue"]),e(O,{modelValue:z.value,"onUpdate:modelValue":t[1]||(t[1]=s=>z.value=s),deger:y.value.deger,item:y.value.item,title:y.value.title,message:y.value.message,onClickedAgree:q},null,8,["modelValue","deger","item","title","message"]),e(R,{modelValue:D.value,"onUpdate:modelValue":t[2]||(t[2]=s=>D.value=s),"mdl-text":I.value,"mdl-btn-text":M.value,status:S.value,fullscreen:"",onClickedSave:T},{default:a(()=>[e(he,{items:k(d).depo,loading:k(d).loading,class:"pa-6 pb-7 pt-1 mt-5"},{default:a(s=>[e(B,null,{default:a(()=>[(w(!0),te(ue,null,se(s.items,h=>(w(),F(x,{key:h.raw.id,cols:"12",md:"3"},{default:a(()=>[e(E,{role:"button",color:_.value.id===h.raw.id?"warning":"",here:"",onClick:o=>H(h)},{default:a(()=>[e(j,{class:"text-center"},{default:a(()=>[g("h4",null,V(h.raw.name),1)]),_:2},1024)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["items","loading"])]),_:1},8,["modelValue","mdl-text","mdl-btn-text","status"]),e(R,{modelValue:C.value,"onUpdate:modelValue":t[6]||(t[6]=s=>C.value=s),"mdl-text":I.value,"mdl-btn-text":M.value,status:S.value,fullscreen:"",toolbar:!1,onClickedSave:T},{default:a(()=>[e(E,{"prepend-icon":"ri-24-hours-fill",title:I.value},{default:a(()=>[e(oe,{class:"mt-0"}),e(j,null,{default:a(()=>[e(ce,{modelValue:i.value,"onUpdate:modelValue":t[4]||(t[4]=s=>i.value=s)},{default:a(()=>[e(N,{value:1},{default:a(()=>[e(x,{cols:"12",md:"12"},{default:a(()=>[k(r).notFound?(w(),F(Ie,{key:0,type:"error",class:"mb-3"},{default:a(()=>[P(" Ürün ilgili depoda bulunamadı. Yeni ürün eklemek ister misiniz? ")]),_:1})):le("",!0)]),_:1})]),_:1}),e(N,{value:2},{default:a(()=>[e(Ve,{ref_key:"productForm",ref:p,modelValue:f.value,"onUpdate:modelValue":t[3]||(t[3]=s=>f.value=s),depolar:k(d).depo,raflar:k(d).raflar,disabled:"",onDepoChange:Q},null,8,["modelValue","depolar","raflar"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(oe,{class:"mb-2"}),e(Se,{class:"mb-1"},{default:a(()=>[e(be,{fluid:""},{default:a(()=>[e(B,null,{default:a(()=>[e(x,null,{default:a(()=>[e($,{variant:"outlined",block:"",size:"large",onClick:ee},{default:a(()=>[P(V(k(Z)),1)]),_:1}),e($,{color:"primary",variant:"flat",block:"",size:"large","prepend-icon":"$vuetify",class:"mt-2",style:{"margin-inline-start":"0"},onClick:t[5]||(t[5]=s=>X(i.value))},{default:a(()=>[P(V(i.value===1?"Yeni Ürün Ekle":i.value===2?"Kaydet":""),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue","mdl-text","mdl-btn-text","status"]),e(x,{cols:"12",md:"3"},{default:a(()=>[e(E,null,{default:a(()=>[e(j,{class:"pt-5"},{default:a(()=>[e(B,null,{default:a(()=>[e(x,{cols:"12",class:"pb-2"},{default:a(()=>[e($,{type:"submit",class:"me-2",block:"",onClick:t[7]||(t[7]=s=>A("depo_sec"))},{default:a(()=>[P(V(_.value.name),1)]),_:1})]),_:1}),e(x,{cols:"12"},{default:a(()=>[e(ie,{modelValue:c.value,"onUpdate:modelValue":t[8]||(t[8]=s=>c.value=s),"prepend-inner-icon":"ri-barcode-line",label:"Barkod Okut",placeholder:"Barkod Okut",disabled:_.value.id===0,onKeyup:we(J,["enter"])},null,8,["modelValue","disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(x,{cols:"12",md:"9"},{default:a(()=>[e(E,null,{default:a(()=>[e(_e,{headers:W,items:k(r).stockOutMovements,"hide-default-footer":"",class:"text-no-wrap"},{"item.name":a(({item:s})=>[g("div",ya,[g("span",Va,V(s.malzemos.productCode),1),g("small",null,V(s.malzemos.productDesc),1)])]),"item.depo":a(({item:s})=>[g("div",xa,[g("span",null,V(s.malzemos.raf.descendants.name),1)])]),"item.raf":a(({item:s})=>[g("div",Ca,[g("span",null,V(s.malzemos.raf.name),1)])]),"item.stock":a(({item:s})=>[e(ke,{color:"error",class:"font-weight-medium",size:"small"},{default:a(()=>[P(" - "+V(s.stock),1)]),_:2},1024)]),"item.actions":a(({item:s})=>[g("div",wa,[e(de,{icon:"ri-close-circle-line",size:"22",onClick:h=>Y("delete",s)},null,8,["onClick"])])]),bottom:a(()=>[]),_:1},8,["items"])]),_:1})]),_:1})]),_:1})}}}),Ja=ne({__name:"stok-hareketleri",setup(u){const b=aa(),n=m(b.params.tab),v=[{tab:"account",title:"Stok Girişi",icon:"ri-group-line"},{tab:"security",title:"Stok Çıkışı",icon:"ri-lock-line"}];return(d,r)=>(w(),te("div",null,[e(oa,{modelValue:k(n),"onUpdate:modelValue":r[0]||(r[0]=c=>pe(n)?n.value=c:null),"show-arrows":""},{default:a(()=>[(w(),te(ue,null,se(v,c=>e(la,{key:c.icon,value:c.tab},{default:a(()=>[e(de,{size:"20",start:"",icon:c.icon},null,8,["icon"]),P(" "+V(c.title),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(ce,{modelValue:k(n),"onUpdate:modelValue":r[1]||(r[1]=c=>pe(n)?n.value=c:null),class:"mt-5 disable-tab-transition"},{default:a(()=>[e(N,{value:"account"},{default:a(()=>[e(ba)]),_:1}),e(N,{value:"security"},{default:a(()=>[e(Da)]),_:1})]),_:1},8,["modelValue"])]))}});export{Ja as default};
