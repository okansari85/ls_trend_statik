import{_ as A}from"./T7Mj2vFM.js";import{u as N,a as U,b as B,c as E,_ as O}from"./BFV-bZNS.js";import{V as K,_ as R}from"./Cc1LQCEa.js";import{u as F}from"./DQf6SEUj.js";import{k as G,r as c,G as D,l as L,d as z,w as Y,o as b,c as j,b as o,e as a,a as s,q as x,h as q,f as V,t as _,i as S,V as H,n as J}from"./BxxpRc2Q.js";import{c as Q,V as W,a as X}from"./BCV_e2JL.js";import{a as C,V as w}from"./C_5v3eAW.js";import{V as Z,a as ee}from"./DJUCuEW5.js";import"./Cv6Gjbeo.js";import"./BeHvtuIu.js";import"./B3GhzXLT.js";import"./p6EbNn8F.js";import"./Da5PgR5A.js";import"./1eKKn_2C.js";import"./DY7PVvcf.js";import"./CBmaq97l.js";import"./C-GTDzx5.js";import"./C42ZeHuX.js";/* empty css        */import"./CVfS0ggT.js";const te=G("stockmovements",()=>{const d=c([]),v=c(0),i=c(!1),t=L(),u=c(""),p=c({page:1,itemsPerPage:10,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:""});async function y(){i.value=!0,u.value="",await t(`/api/stockmovements?page=${p.value.page}&per_page=${p.value.itemsPerPage}&depo_id=${p.value.depo_id}&search=${p.value.search}`).then(l=>{i.value=!1,d.value=l.data,v.value=l.total}).catch(l=>{i.value=!1,u.value=l.message})}async function g(l){i.value=!0,u.value="",await t(`/api/deleteStockMovement/${l}`,{method:"DELETE"}).then(()=>{i.value=!1;const h=d.value.findIndex(r=>r.id===l);h!==-1&&d.value.splice(h,1)}).catch(h=>{i.value=!1,u.value=h.message})}const k=D(()=>d.value.filter(l=>l.type==="IN")),f=D(()=>d.value.filter(l=>l.type==="OUT"));return{totalItems:v,loading:i,options:p,fetchData:y,error:u,stockmovements:d,stockInMovements:k,stockOutMovements:f,deleteStockMovement:g}}),ae={class:"d-flex flex-column ms-3"},oe={class:"d-block font-weight-medium text-high-emphasis text-truncate"},se={class:"d-flex gap-2"},le={class:"d-flex gap-2"},ne={class:"d-flex gap-2"},ie=z({__name:"StockMovements",async setup(d){let v,i;const t=te(),u=N(),p=F();[v,i]=Y(()=>U("depo",()=>u.getAllDepos())),await v,i();const y=[{title:"Ürün Kodu",key:"productCode"},{title:"Depo",key:"depo"},{title:"Raf No",key:"raf"},{title:"Durum",key:"stock"},{title:"Tarih",key:"date"},{title:"Aksiyonlar",key:"actions"}],g=c(""),k=c(null),f=c(!1),l=async m=>{t.options.depo_id=m??0,t.fetchData()},h=m=>{t.options.page=m.page??0,t.options.search=m.search??"",t.options.depo_id=k.value??0,t.fetchData()},r=c({deger:"",item:0,title:"",message:""}),P=(m,n)=>{r.value.deger=m,r.value.item=n.id,r.value.title="Emin misiniz?",r.value.message="Stok hareketi silme işlemi geri alınamaz ve ürünün stoğu da eski haline güncellenecektir.",f.value=!0},M=async m=>{m.deger==="delete"&&await t.deleteStockMovement(m.item).then(()=>{f.value=!1,p.stockmovements=[]})};return(m,n)=>{const T=A,$=O,I=R;return b(),j(X,null,{default:o(()=>[a(Q,{class:"d-flex align-center pe-2"}),a(w,null,{default:o(()=>[a(T,{modelValue:s(t).loading,"onUpdate:modelValue":n[0]||(n[0]=e=>s(t).loading=e)},null,8,["modelValue"]),a($,{modelValue:s(f),"onUpdate:modelValue":n[1]||(n[1]=e=>x(f)?f.value=e:null),deger:s(r).deger,item:s(r).item,title:s(r).title,message:s(r).message,onClickedAgree:M},null,8,["modelValue","deger","item","title","message"]),a(C,{cols:"12",md:"12","order-md":"0",order:"1"},{default:o(()=>[a(W,{class:"pt-0"},{default:o(()=>[a(Z,{onSubmit:q(()=>{},["prevent"])},{default:o(()=>[a(w,null,{default:o(()=>[a(C,{cols:"12",md:"3"},{default:o(()=>[a(B,{modelValue:s(k),"onUpdate:modelValue":[n[2]||(n[2]=e=>x(k)?k.value=e:null),l],items:s(u).depo,label:"Malzeme listesini görmek istediğiniz depoyu seçiniz.",placeholder:"Depo Seç","item-title":"name","item-value":"id",clearable:""},null,8,["modelValue","items"])]),_:1}),a(C,{cols:"12",md:"3"},{default:o(()=>[a(ee,{modelValue:s(g),"onUpdate:modelValue":n[3]||(n[3]=e=>x(g)?g.value=e:null),label:"Ürün Kodu",type:"text",placeholder:"Ürün Koduna Göre Arama Yapın",clearable:"","prepend-inner-icon":"ri-user-line"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(I,null,{default:o(()=>[a(K,{"items-per-page":s(t).options.itemsPerPage,"onUpdate:itemsPerPage":n[4]||(n[4]=e=>s(t).options.itemsPerPage=e),headers:y,items:s(t).stockmovements,"items-length":s(t).totalItems,loading:s(t).loading,search:s(g),"item-value":"id",class:"text-no-wrap","onUpdate:options":h},{"item.productCode":o(({item:e})=>[V("div",ae,[V("span",oe,_(e.malzemos.productCode),1),V("small",null,_(e.malzemos.productDesc),1)])]),"item.raf":o(({item:e})=>[V("div",se,_(e.malzemos.raf.name),1)]),"item.depo":o(({item:e})=>[V("div",le,_(e.malzemos.raf.descendants.name),1)]),"item.stock":o(({item:e})=>[a(E,{color:e.type==="IN"?"success":"error",class:"font-weight-medium",size:"small"},{default:o(()=>[S(_(e.type==="IN"?"+":"-")+" "+_(e.stock),1)]),_:2},1032,["color"])]),"item.date":o(({item:e})=>[S(_(e.created_at),1)]),"item.actions":o(({item:e})=>[V("div",ne,[a(H,{icon:"ri-close-circle-line",size:"22",onClick:re=>P("delete",e)},null,8,["onClick"])])]),_:1},8,["items-per-page","items","items-length","loading","search"])]),_:1})]),_:1})}}}),Pe=z({__name:"stock-moevements",setup(d){return(v,i)=>(b(),J("div",null,[a(ie)]))}});export{Pe as default};
