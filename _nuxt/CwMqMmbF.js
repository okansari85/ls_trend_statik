import{t as ze,v as Be,m as Fe,w as $e,x as Ae,y as Te,z as Ue,f as Ee,g as Me,p as Ge,i as Oe,A as Re,k as Ne,j as Ke,B as je,l as We,n as Ye,o as He,V as fe,b as ve,_ as _e}from"./CwDT_l56.js";import{V as ge,_ as ke}from"./kcapPDqX.js";import{_ as be}from"./Dk6iH4SY.js";import{a as x,V as B}from"./Bd9Cnh9V.js";import{d as se,o as w,c as F,b as a,n as te,p as ne,e,i as P,t as V,N as $,F as ue,V as de,s as ye,G as ae,af as me,v as Le,z as qe,B as Je,E as Ze,Z as Qe,J as Xe,r as m,w as Ve,a as g,f as k,j as le,ag as xe,ah as ea,m as aa,q as pe}from"./BYXuSpkl.js";import{_ as ta}from"./DlAUqK2U.js";import{u as Ce,a as we}from"./GdK3bZgt.js";import{u as De}from"./D9AEMwdy.js";import{_ as Pe}from"./BsHfF6fW.js";import{a as E,V as j,e as Se}from"./DpTZZrMx.js";import{V as oe}from"./BFRWZXOf.js";import{c as ce,b as N,V as la,a as oa}from"./DLZSlIce.js";import{V as Ie}from"./A_1mnjHU.js";import{V as ie}from"./CQFSUgMx.js";import"./yqR3Wy9H.js";/* empty css        */import"./B7uOnDG_.js";import"./DiIRG0Bx.js";import"./DY7PVvcf.js";import"./BjvsbSoU.js";import"./C-GTDzx5.js";import"./Sme513g5.js";import"./DOLBiH_-.js";import"./B3gcMf6g.js";import"./Cx27SLOT.js";import"./CwBaDCS3.js";const sa=se({__name:"NumericKeyboard",props:{numbers:{type:Array,default:()=>["1","2","3","4","5","6","7","8","9","0"]}},emits:["input","backspace","clear"],setup(u,{emit:b}){const s=b,v=c=>{s("input",c)},d=()=>{s("backspace")},r=()=>{s("clear")};return(c,_)=>(w(),F(B,null,{default:a(()=>[(w(!0),te(ue,null,ne(u.numbers,f=>(w(),F(x,{key:f,cols:"4",class:"pa-1 pt-1 pb-1 ma-0"},{default:a(()=>[e($,{height:"50",block:"",onClick:()=>v(f)},{default:a(()=>[P(V(f),1)]),_:2},1032,["onClick"])]),_:2},1024))),128)),e(x,{cols:"4",class:"pa-1 pt-1 pb-1 ma-0"},{default:a(()=>[e($,{block:"",height:"50",color:"secondary",variant:"outlined",onClick:r},{default:a(()=>[P(" Clear ")]),_:1})]),_:1}),e(x,{cols:"4",class:"pa-1 pt-1 pb-1 ma-0"},{default:a(()=>[e($,{block:"",height:"50",color:"secondary",variant:"outlined",onClick:d},{default:a(()=>[e(de,{icon:"ri-arrow-left-s-line"})]),_:1})]),_:1})]),_:1}))}}),na=ta(sa,[["__scopeId","data-v-8448774a"]]),ua=ye({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataIterator-items");function da(u,b){const s=u.returnObject?b:me(b,u.itemValue),v=me(b,u.itemSelectable,!0);return{type:"item",value:s,selectable:v,raw:b}}function ra(u,b){const s=[];for(const v of b)s.push(da(u,v));return s}function ia(u){return{items:ae(()=>ra(u,u.items))}}const ca=ye({search:String,loading:Boolean,...Le(),...ua(),...ze(),...Be(),...Fe({itemsPerPage:5}),...$e(),...Ae(),...Te(),...qe()},"VDataIterator"),he=Je()({name:"VDataIterator",props:ca(),emits:{"update:modelValue":u=>!0,"update:groupBy":u=>!0,"update:page":u=>!0,"update:itemsPerPage":u=>!0,"update:sortBy":u=>!0,"update:options":u=>!0,"update:expanded":u=>!0},setup(u,b){let{slots:s}=b;const v=Ze(u,"groupBy"),d=Qe(u,"search"),{items:r}=ia(u),{filteredItems:c}=Ue(u,r,d,{transform:h=>h.raw}),{sortBy:_,multiSort:f,mustSort:S}=Ee(u),{page:D,itemsPerPage:C}=Me(u),{toggleSort:z}=Ge({sortBy:_,multiSort:f,mustSort:S,page:D}),{sortByWithGroups:i,opened:p,extractRows:M,isGroupOpen:I,toggleGroup:A}=Oe({groupBy:v,sortBy:_}),{sortedItems:W}=Re(u,c,i),{flatItems:T}=Ne(W,v,p),y=ae(()=>T.value.length),{startIndex:Y,stopIndex:H,pageCount:L,prevPage:q,nextPage:J,setItemsPerPage:Z,setPage:Q}=Ke({page:D,itemsPerPage:C,itemsLength:y}),{paginatedItems:G}=je({items:T,startIndex:Y,stopIndex:H,itemsPerPage:C}),K=ae(()=>M(G.value)),{isSelected:X,select:ee,selectAll:l,toggleSelect:t}=We(u,{allItems:r,currentPage:K}),{isExpanded:O,toggleExpand:R}=Ye(u);He({page:D,itemsPerPage:C,sortBy:_,groupBy:v,search:d});const n=ae(()=>({page:D.value,itemsPerPage:C.value,sortBy:_.value,pageCount:L.value,toggleSort:z,prevPage:q,nextPage:J,setPage:Q,setItemsPerPage:Z,isSelected:X,select:ee,selectAll:l,toggleSelect:t,isExpanded:O,toggleExpand:R,isGroupOpen:I,toggleGroup:A,items:K.value,groupedItems:G.value}));return Xe(()=>e(u.tag,{class:["v-data-iterator",u.class],style:u.style},{default:()=>{var h,o,U,re;return[(h=s.header)==null?void 0:h.call(s,n.value),G.value.length?(U=s.default)==null?void 0:U.call(s,n.value):(o=s["no-data"])==null?void 0:o.call(s),(re=s.footer)==null?void 0:re.call(s,n.value)]}})),{}}}),ma={class:"pa-3 text-center",style:{display:"flex","align-items":"center","justify-content":"center"}},pa={style:{"max-inline-size":"240px"}},fa={class:"d-flex flex-column ms-3"},va={class:"d-block font-weight-medium text-high-emphasis text-truncate"},_a={class:"d-flex"},ga={class:"d-flex gap-2"},ka={class:"d-flex gap-2"},ba=se({__name:"StokGirisi",async setup(u){let b,s;const v=Ce(),d=De(),r=m("");[b,s]=Ve(()=>we("depo",()=>v.getAllDepos())),await b,s();const c=m({name:"DEPO SEÇ",id:0}),_=m({depo_id:null,id:null,raf_id:"",product_code:"",product_desc:"",stock:0,type:"IN",adet:"0"}),f=m(),S=m(),D=m(!1),C=m(!1),z=m(!1),i=m(1),p=m(""),M=m(""),I=m(""),A=l=>{l==="depo_sec"&&(S.value=l,D.value=!0),l==="barcode"&&(S.value=l,C.value=!0)},W=[{title:"Ürün Kodu",key:"name"},{title:"Depo",key:"depo"},{title:"Raf No",key:"raf"},{title:"Durum",key:"stock"},{title:"Aksiyonlar",key:"actions"}],T=async()=>{S.value==="depo_sec"&&(D.value=!1)},y=m({deger:"",item:0,title:"",message:""}),Y=(l,t)=>{y.value.deger=l,y.value.item=t.id,y.value.title="Emin misiniz?",y.value.message="Stok hareketi silme işlemi geri alınamaz ve ürünün stoğu da eski haline güncellenecektir.",z.value=!0},H=async l=>{l.deger==="delete"&&await d.deleteStockMovement(l.item).then(()=>{z.value=!1})},L=l=>{c.value.id=l.raw.id,_.value.depo_id=l.raw.id,c.value.name=l.raw.name,v.getRaflar(l.raw.id)},q=async(l,t)=>{await d.getMalzemosByProductId({product_id:l,depo_id:t}).then(()=>{p.value="0",d.error===""?(A("barcode"),i.value=3,I.value=`${d.singleProduct.productCode} ${d.singleProduct.productDesc}`):d.notFound&&(A("barcode"),i.value=1,I.value=`Ürün Bulunamadı-${r.value}`,_.value.product_code=r.value)})},J=async()=>{f.value&&f.value.clearForm(),r.value&&q(r.value,c.value.id)},Z=l=>{p.value==="0"?p.value=l:p.value+=l},Q=()=>{p.value.length>1?p.value=p.value.slice(0,-1):p.value="0"},G=()=>{p.value="0"},K=async()=>{await d.addProductStock(d.singleProduct.id,p.value).then(()=>{d.error===""&&(C.value=!1,p.value="0")})},X=l=>{_.value.depo_id=l,_.value.depo_id!==null&&v.getRaflar(_.value.depo_id)},ee=async l=>{l===1||l===2&&f.value&&f.value.validate()?i.value++:l===3&&d.notFound?(_.value.adet=p.value,f.value.internalFormData.adet=p.value,await d.saveMalzemos(f.value.internalFormData).then(()=>{d.error===""&&(console.log("tamam"),C.value=!1)})):l===3&&d.notFound===!1&&K()};return(l,t)=>{const O=_e,R=ke,n=be,h=na;return w(),F(B,null,{default:a(()=>[e(Pe,{modelValue:g(d).loading,"onUpdate:modelValue":t[0]||(t[0]=o=>g(d).loading=o)},null,8,["modelValue"]),e(O,{modelValue:z.value,"onUpdate:modelValue":t[1]||(t[1]=o=>z.value=o),deger:y.value.deger,item:y.value.item,title:y.value.title,message:y.value.message,onClickedAgree:H},null,8,["modelValue","deger","item","title","message"]),e(R,{modelValue:D.value,"onUpdate:modelValue":t[2]||(t[2]=o=>D.value=o),"mdl-text":I.value,"mdl-btn-text":M.value,status:S.value,fullscreen:"",onClickedSave:T},{default:a(()=>[e(he,{items:g(v).depo,loading:g(v).loading,class:"pa-6 pb-7 pt-1 mt-5"},{default:a(o=>[e(B,null,{default:a(()=>[(w(!0),te(ue,null,ne(o.items,U=>(w(),F(x,{key:U.raw.id,cols:"12",md:"3"},{default:a(()=>[e(E,{role:"button",color:c.value.id===U.raw.id?"warning":"",here:"",onClick:re=>L(U)},{default:a(()=>[e(j,{class:"text-center"},{default:a(()=>[k("h4",null,V(U.raw.name),1)]),_:2},1024)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["items","loading"])]),_:1},8,["modelValue","mdl-text","mdl-btn-text","status"]),e(R,{modelValue:C.value,"onUpdate:modelValue":t[9]||(t[9]=o=>C.value=o),"mdl-text":I.value,"mdl-btn-text":M.value,status:S.value,fullscreen:"",toolbar:!1,onClickedSave:T},{default:a(()=>[e(E,{"prepend-icon":"ri-24-hours-fill",title:I.value},{default:a(()=>[e(oe,{class:"mt-0"}),e(j,null,{default:a(()=>[e(ce,{modelValue:i.value,"onUpdate:modelValue":t[5]||(t[5]=o=>i.value=o)},{default:a(()=>[e(N,{value:1},{default:a(()=>[e(x,{cols:"12",md:"12"},{default:a(()=>[g(d).notFound?(w(),F(Ie,{key:0,type:"error",class:"mb-3"},{default:a(()=>[P(" Ürün ilgili depoda bulunamadı. Yeni ürün eklemek ister misiniz? ")]),_:1})):le("",!0)]),_:1})]),_:1}),e(N,{value:2},{default:a(()=>[e(n,{ref_key:"productForm",ref:f,modelValue:_.value,"onUpdate:modelValue":t[3]||(t[3]=o=>_.value=o),depolar:g(v).depo,raflar:g(v).raflar,disabled:"",onDepoChange:X},null,8,["modelValue","depolar","raflar"])]),_:1}),e(N,{value:3},{default:a(()=>[k("div",ma,[k("div",pa,[e(B,null,{default:a(()=>[e(x,{cols:"12",class:"pa-1 pt-1 pb-1 ma-0"},{default:a(()=>[e(ie,{modelValue:p.value,"onUpdate:modelValue":t[4]||(t[4]=o=>p.value=o),"append-inner-icon":"ri-numbers-line",label:"Adet",placeholder:"Adet",readonly:""},null,8,["modelValue"])]),_:1})]),_:1}),e(h,{onInput:Z,onBackspace:Q,onClear:G})])])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(oe,{class:"mb-2"}),e(Se,{class:"mb-1"},{default:a(()=>[e(ge,{fluid:""},{default:a(()=>[e(B,null,{default:a(()=>[e(x,null,{default:a(()=>[i.value>1&&i.value<3||i.value===3&&g(d).notFound?(w(),F($,{key:0,variant:"outlined",block:"",size:"large",onClick:t[6]||(t[6]=o=>i.value--)},{default:a(()=>[P(" Geri Git ")]),_:1})):le("",!0),i.value===1||i.value===3&&g(d).notFound===!1?(w(),F($,{key:1,variant:"outlined",block:"",size:"large",onClick:t[7]||(t[7]=o=>C.value=!1)},{default:a(()=>[P(" Vazgeç ")]),_:1})):le("",!0),e($,{color:"primary",variant:"flat",block:"",size:"large","prepend-icon":"$vuetify",class:"mt-2",style:{"margin-inline-start":"0"},onClick:t[8]||(t[8]=o=>ee(i.value))},{default:a(()=>[P(V(i.value===1?"Yeni Ürün Ekle":i.value===2?"İlerle":i.value===3?"Kaydet":""),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue","mdl-text","mdl-btn-text","status"]),e(x,{cols:"12",md:"3"},{default:a(()=>[e(E,null,{default:a(()=>[e(j,{class:"pt-5"},{default:a(()=>[e(B,null,{default:a(()=>[e(x,{cols:"12",class:"pb-2"},{default:a(()=>[e($,{type:"submit",class:"me-2",block:"",onClick:t[10]||(t[10]=o=>A("depo_sec"))},{default:a(()=>[P(V(c.value.name),1)]),_:1})]),_:1}),e(x,{cols:"12"},{default:a(()=>[e(ie,{modelValue:r.value,"onUpdate:modelValue":t[11]||(t[11]=o=>r.value=o),"prepend-inner-icon":"ri-barcode-line",label:"Barkod Okut",placeholder:"Barkod Okut",disabled:c.value.id===0,onKeyup:xe(J,["enter"])},null,8,["modelValue","disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(x,{cols:"12",md:"9"},{default:a(()=>[e(E,null,{default:a(()=>[e(fe,{headers:W,items:g(d).stockInMovements,"hide-default-footer":"",class:"text-no-wrap"},{"item.name":a(({item:o})=>[k("div",fa,[k("span",va,V(o.malzemos.productCode),1),k("small",null,V(o.malzemos.productDesc),1)])]),"item.depo":a(({item:o})=>[k("div",_a,[k("span",null,V(o.malzemos.raf.descendants.name),1)])]),"item.raf":a(({item:o})=>[k("div",ga,[k("span",null,V(o.malzemos.raf.name),1)])]),"item.stock":a(({item:o})=>[e(ve,{color:"success",class:"font-weight-medium",size:"small"},{default:a(()=>[P(" + "+V(o.stock),1)]),_:2},1024)]),"item.actions":a(({item:o})=>[k("div",ka,[e(de,{icon:"ri-close-circle-line",size:"22",onClick:U=>Y("delete",o)},null,8,["onClick"])])]),bottom:a(()=>[]),_:1},8,["items"])]),_:1})]),_:1})]),_:1})}}}),ya={class:"d-flex flex-column ms-3"},Va={class:"d-block font-weight-medium text-high-emphasis text-truncate"},xa={class:"d-flex"},Ca={class:"d-flex gap-2"},wa={class:"d-flex gap-2"},Da=se({__name:"StokCikisi",async setup(u){let b,s;const{$toast:v}=ea(),d=Ce(),r=De(),c=m("");[b,s]=Ve(()=>we("depo",()=>d.getAllDepos())),await b,s();const _=m({name:"DEPO SEÇ",id:0}),f=m({depo_id:null,id:null,raf_id:"",product_code:"",product_desc:"",stock:0,type:"OUT",adet:"0"}),S=m(),D=m(!1),C=m(!1),z=m(!1),i=m(1),p=m(null),M=m(""),I=m(""),A=l=>{l==="depo_sec"&&(S.value=l,D.value=!0),l==="barcode"&&(S.value=l,C.value=!0)},W=[{title:"Ürün Kodu",key:"name"},{title:"Depo",key:"depo"},{title:"Raf No",key:"raf"},{title:"Durum",key:"stock"},{title:"Aksiyonlar",key:"actions"}],T=async()=>{S.value==="depo_sec"&&(D.value=!1)},y=m({deger:"",item:0,title:"",message:""}),Y=(l,t)=>{y.value.deger=l,y.value.item=t.id,y.value.title="Emin misiniz?",y.value.message="Stok hareketi silme işlemi geri alınamaz ve ürünün stoğu da eski haline güncellenecektir.",z.value=!0},H=async l=>{l.deger==="delete"&&await r.deleteStockMovement(l.item).then(()=>{z.value=!1})},L=l=>{_.value.id=l.raw.id,f.value.depo_id=l.raw.id,_.value.name=l.raw.name,d.getRaflar(l.raw.id)},q=async(l,t,O)=>{await r.removeProductStock(l,t,O).then(()=>{r.notFound&&(A("barcode"),i.value=1,I.value=`Ürün Bulunamadı-${c.value}`,f.value.product_code=c.value,f.value.stock=1),r.error!==""&&r.notFound===!1&&v.open({message:r.error,type:"error",position:"top"}),c.value=""})},J=()=>{p.value&&p.value.clearForm(),c.value&&q(c.value,"1",_.value.id)},Z=l=>{f.value.depo_id=l,f.value.depo_id!==null&&d.getRaflar(f.value.depo_id)},Q=async l=>{l===1?i.value=i.value+1:l===2&&p.value&&p.value.validate()&&await r.saveMalzemos(p.value.internalFormData).then(()=>{r.error===""&&(console.log("tamam"),C.value=!1)})},G=()=>{i.value--},K=()=>{C.value=!1},X=ae(()=>i.value===2&&r.notFound?"Geri Git":i.value===1?"Vazgeç":""),ee=()=>{i.value===2&&r.notFound?G():i.value===1&&K()};return(l,t)=>{const O=_e,R=ke;return w(),F(B,null,{default:a(()=>[e(Pe,{modelValue:g(r).loading,"onUpdate:modelValue":t[0]||(t[0]=n=>g(r).loading=n)},null,8,["modelValue"]),e(O,{modelValue:z.value,"onUpdate:modelValue":t[1]||(t[1]=n=>z.value=n),deger:y.value.deger,item:y.value.item,title:y.value.title,message:y.value.message,onClickedAgree:H},null,8,["modelValue","deger","item","title","message"]),e(R,{modelValue:D.value,"onUpdate:modelValue":t[2]||(t[2]=n=>D.value=n),"mdl-text":I.value,"mdl-btn-text":M.value,status:S.value,fullscreen:"",onClickedSave:T},{default:a(()=>[e(he,{items:g(d).depo,loading:g(d).loading,class:"pa-6 pb-7 pt-1 mt-5"},{default:a(n=>[e(B,null,{default:a(()=>[(w(!0),te(ue,null,ne(n.items,h=>(w(),F(x,{key:h.raw.id,cols:"12",md:"3"},{default:a(()=>[e(E,{role:"button",color:_.value.id===h.raw.id?"warning":"",here:"",onClick:o=>L(h)},{default:a(()=>[e(j,{class:"text-center"},{default:a(()=>[k("h4",null,V(h.raw.name),1)]),_:2},1024)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["items","loading"])]),_:1},8,["modelValue","mdl-text","mdl-btn-text","status"]),e(R,{modelValue:C.value,"onUpdate:modelValue":t[6]||(t[6]=n=>C.value=n),"mdl-text":I.value,"mdl-btn-text":M.value,status:S.value,fullscreen:"",toolbar:!1,onClickedSave:T},{default:a(()=>[e(E,{"prepend-icon":"ri-24-hours-fill",title:I.value},{default:a(()=>[e(oe,{class:"mt-0"}),e(j,null,{default:a(()=>[e(ce,{modelValue:i.value,"onUpdate:modelValue":t[4]||(t[4]=n=>i.value=n)},{default:a(()=>[e(N,{value:1},{default:a(()=>[e(x,{cols:"12",md:"12"},{default:a(()=>[g(r).notFound?(w(),F(Ie,{key:0,type:"error",class:"mb-3"},{default:a(()=>[P(" Ürün ilgili depoda bulunamadı. Yeni ürün eklemek ister misiniz? ")]),_:1})):le("",!0)]),_:1})]),_:1}),e(N,{value:2},{default:a(()=>[e(be,{ref_key:"productForm",ref:p,modelValue:f.value,"onUpdate:modelValue":t[3]||(t[3]=n=>f.value=n),depolar:g(d).depo,raflar:g(d).raflar,disabled:"",onDepoChange:Z},null,8,["modelValue","depolar","raflar"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(oe,{class:"mb-2"}),e(Se,{class:"mb-1"},{default:a(()=>[e(ge,{fluid:""},{default:a(()=>[e(B,null,{default:a(()=>[e(x,null,{default:a(()=>[e($,{variant:"outlined",block:"",size:"large",onClick:ee},{default:a(()=>[P(V(g(X)),1)]),_:1}),e($,{color:"primary",variant:"flat",block:"",size:"large","prepend-icon":"$vuetify",class:"mt-2",style:{"margin-inline-start":"0"},onClick:t[5]||(t[5]=n=>Q(i.value))},{default:a(()=>[P(V(i.value===1?"Yeni Ürün Ekle":i.value===2?"Kaydet":""),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue","mdl-text","mdl-btn-text","status"]),e(x,{cols:"12",md:"3"},{default:a(()=>[e(E,null,{default:a(()=>[e(j,{class:"pt-5"},{default:a(()=>[e(B,null,{default:a(()=>[e(x,{cols:"12",class:"pb-2"},{default:a(()=>[e($,{type:"submit",class:"me-2",block:"",onClick:t[7]||(t[7]=n=>A("depo_sec"))},{default:a(()=>[P(V(_.value.name),1)]),_:1})]),_:1}),e(x,{cols:"12"},{default:a(()=>[e(ie,{modelValue:c.value,"onUpdate:modelValue":t[8]||(t[8]=n=>c.value=n),"prepend-inner-icon":"ri-barcode-line",label:"Barkod Okut",placeholder:"Barkod Okut",disabled:_.value.id===0,onKeyup:xe(J,["enter"])},null,8,["modelValue","disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(x,{cols:"12",md:"9"},{default:a(()=>[e(E,null,{default:a(()=>[e(fe,{headers:W,items:g(r).stockOutMovements,"hide-default-footer":"",class:"text-no-wrap"},{"item.name":a(({item:n})=>[k("div",ya,[k("span",Va,V(n.malzemos.productCode),1),k("small",null,V(n.malzemos.productDesc),1)])]),"item.depo":a(({item:n})=>[k("div",xa,[k("span",null,V(n.malzemos.raf.descendants.name),1)])]),"item.raf":a(({item:n})=>[k("div",Ca,[k("span",null,V(n.malzemos.raf.name),1)])]),"item.stock":a(({item:n})=>[e(ve,{color:"error",class:"font-weight-medium",size:"small"},{default:a(()=>[P(" - "+V(n.stock),1)]),_:2},1024)]),"item.actions":a(({item:n})=>[k("div",wa,[e(de,{icon:"ri-close-circle-line",size:"22",onClick:h=>Y("delete",n)},null,8,["onClick"])])]),bottom:a(()=>[]),_:1},8,["items"])]),_:1})]),_:1})]),_:1})}}}),Qa=se({__name:"stok-hareketleri",setup(u){const b=aa(),s=m(b.params.tab),v=[{tab:"account",title:"Stok Girişi",icon:"ri-group-line"},{tab:"security",title:"Stok Çıkışı",icon:"ri-lock-line"}];return(d,r)=>(w(),te("div",null,[e(oa,{modelValue:g(s),"onUpdate:modelValue":r[0]||(r[0]=c=>pe(s)?s.value=c:null),"show-arrows":""},{default:a(()=>[(w(),te(ue,null,ne(v,c=>e(la,{key:c.icon,value:c.tab},{default:a(()=>[e(de,{size:"20",start:"",icon:c.icon},null,8,["icon"]),P(" "+V(c.title),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(ce,{modelValue:g(s),"onUpdate:modelValue":r[1]||(r[1]=c=>pe(s)?s.value=c:null),class:"mt-5 disable-tab-transition",disabled:""},{default:a(()=>[e(N,{value:"account"},{default:a(()=>[e(ba)]),_:1}),e(N,{value:"security"},{default:a(()=>[e(Da)]),_:1})]),_:1},8,["modelValue"])]))}});export{Qa as default};
