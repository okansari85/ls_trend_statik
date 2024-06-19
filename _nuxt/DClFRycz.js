import{_ as A}from"./CjN8cGN_.js";import{u as N,a as U,b as B,c as E,_ as O}from"./CkJZZjkv.js";import{V as K,_ as R}from"./Dg7ufkr2.js";import{u as F}from"./BmzD6vHw.js";import{j as L,r as c,E as D,k as j,d as z,w as G,o as b,c as Y,a as o,b as a,u as s,p as x,f as H,e as V,t as _,h as S,V as J,m as Q}from"./Bg_gKfMG.js";import{c as W,V as X,a as Z}from"./1UPITes6.js";import{a as C,V as w}from"./B_-B2s3f.js";import{V as q,a as ee}from"./Bqc1-bYl.js";import"./CpuXzhs2.js";import"./CIT2TdD2.js";import"./E77fSpEd.js";import"./-jOzALyn.js";import"./CxtvPC_T.js";import"./DmDt5i9Y.js";import"./DY7PVvcf.js";import"./BN4JDOmi.js";import"./C-GTDzx5.js";import"./B-F9V9Sf.js";/* empty css        */import"./CQbWLo4F.js";const te=L("stockmovements",()=>{const d=c([]),v=c(0),i=c(!1),t=j(),u=c(""),p=c({page:1,itemsPerPage:10,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:""});async function y(){i.value=!0,u.value="",await t(`/api/stockmovements?page=${p.value.page}&per_page=${p.value.itemsPerPage}&depo_id=${p.value.depo_id}&search=${p.value.search}`).then(l=>{i.value=!1,d.value=l.data,v.value=l.total}).catch(l=>{i.value=!1,u.value=l.message})}async function g(l){i.value=!0,u.value="",await t(`/api/deleteStockMovement/${l}`,{method:"DELETE"}).then(()=>{i.value=!1;const h=d.value.findIndex(r=>r.id===l);h!==-1&&d.value.splice(h,1)}).catch(h=>{i.value=!1,u.value=h.message})}const k=D(()=>d.value.filter(l=>l.type==="IN")),f=D(()=>d.value.filter(l=>l.type==="OUT"));return{totalItems:v,loading:i,options:p,fetchData:y,error:u,stockmovements:d,stockInMovements:k,stockOutMovements:f,deleteStockMovement:g}}),ae={class:"d-flex flex-column ms-3"},oe={class:"d-block font-weight-medium text-high-emphasis text-truncate"},se={class:"d-flex gap-2"},le={class:"d-flex gap-2"},ne={class:"d-flex gap-2"},ie=z({__name:"StockMovements",async setup(d){let v,i;const t=te(),u=N(),p=F();[v,i]=G(()=>U("depo",()=>u.getAllDepos())),await v,i();const y=[{title:"Ürün Kodu",key:"productCode"},{title:"Depo",key:"depo"},{title:"Raf No",key:"raf"},{title:"Durum",key:"stock"},{title:"Tarih",key:"date"},{title:"Aksiyonlar",key:"actions"}],g=c(""),k=c(null),f=c(!1),l=async m=>{t.options.depo_id=m??0,t.fetchData()},h=m=>{t.options.page=m.page??0,t.options.search=m.search??"",t.options.depo_id=k.value??0,t.fetchData()},r=c({deger:"",item:0,title:"",message:""}),P=(m,n)=>{r.value.deger=m,r.value.item=n.id,r.value.title="Emin misiniz?",r.value.message="Stok hareketi silme işlemi geri alınamaz ve ürünün stoğu da eski haline güncellenecektir.",f.value=!0},M=async m=>{m.deger==="delete"&&await t.deleteStockMovement(m.item).then(()=>{f.value=!1,p.stockmovements=[]})};return(m,n)=>{const T=A,$=O,I=R;return b(),Y(Z,null,{default:o(()=>[a(W,{class:"d-flex align-center pe-2"}),a(w,null,{default:o(()=>[a(T,{modelValue:s(t).loading,"onUpdate:modelValue":n[0]||(n[0]=e=>s(t).loading=e)},null,8,["modelValue"]),a($,{modelValue:s(f),"onUpdate:modelValue":n[1]||(n[1]=e=>x(f)?f.value=e:null),deger:s(r).deger,item:s(r).item,title:s(r).title,message:s(r).message,onClickedAgree:M},null,8,["modelValue","deger","item","title","message"]),a(C,{cols:"12",md:"12","order-md":"0",order:"1"},{default:o(()=>[a(X,{class:"pt-0"},{default:o(()=>[a(q,{onSubmit:H(()=>{},["prevent"])},{default:o(()=>[a(w,null,{default:o(()=>[a(C,{cols:"12",md:"3"},{default:o(()=>[a(B,{modelValue:s(k),"onUpdate:modelValue":[n[2]||(n[2]=e=>x(k)?k.value=e:null),l],items:s(u).depo,label:"Malzeme listesini görmek istediğiniz depoyu seçiniz.",placeholder:"Depo Seç","item-title":"name","item-value":"id",clearable:""},null,8,["modelValue","items"])]),_:1}),a(C,{cols:"12",md:"3"},{default:o(()=>[a(ee,{modelValue:s(g),"onUpdate:modelValue":n[3]||(n[3]=e=>x(g)?g.value=e:null),label:"Ürün Kodu",type:"text",placeholder:"Ürün Koduna Göre Arama Yapın",clearable:"","prepend-inner-icon":"ri-user-line"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(I,null,{default:o(()=>[a(K,{"items-per-page":s(t).options.itemsPerPage,"onUpdate:itemsPerPage":n[4]||(n[4]=e=>s(t).options.itemsPerPage=e),headers:y,items:s(t).stockmovements,"items-length":s(t).totalItems,loading:s(t).loading,search:s(g),"item-value":"id",class:"text-no-wrap","onUpdate:options":h},{"item.productCode":o(({item:e})=>[V("div",ae,[V("span",oe,_(e.malzemos.productCode),1),V("small",null,_(e.malzemos.productDesc),1)])]),"item.raf":o(({item:e})=>[V("div",se,_(e.malzemos.raf.name),1)]),"item.depo":o(({item:e})=>[V("div",le,_(e.malzemos.raf.descendants.name),1)]),"item.stock":o(({item:e})=>[a(E,{color:e.type==="IN"?"success":"error",class:"font-weight-medium",size:"small"},{default:o(()=>[S(_(e.type==="IN"?"+":"-")+" "+_(e.stock),1)]),_:2},1032,["color"])]),"item.date":o(({item:e})=>[S(_(e.created_at),1)]),"item.actions":o(({item:e})=>[V("div",ne,[a(J,{icon:"ri-close-circle-line",size:"22",onClick:re=>P("delete",e)},null,8,["onClick"])])]),_:1},8,["items-per-page","items","items-length","loading","search"])]),_:1})]),_:1})}}}),Pe=z({__name:"stock-moevements",setup(d){return(v,i)=>(b(),Q("div",null,[a(ie)]))}});export{Pe as default};
