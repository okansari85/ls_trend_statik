import{_ as P}from"./CRDsXECi.js";import{V as N,b as L,_ as O}from"./DihTz8D1.js";import{k as F,r as c,G as M,l as W,d as D,o as y,c as x,b as t,e as s,a as f,f as l,t as u,n as B,p as w,P as z,F as $,i as b,N as I,m as G,V as Y}from"./CjMdsmGA.js";import{a as T}from"./BveFTW44.js";import{V as U,a as A}from"./D9YO722g.js";import{V as H}from"./yEfmXfmz.js";import{a as K,V as R}from"./Csw7m_sr.js";import{V as j,a as q,b as S,c as J}from"./91FA5Hou.js";import"./PGwUkeRy.js";/* empty css        */import"./CZKKnfIW.js";import"./DY7PVvcf.js";import"./9owewwby.js";import"./C-GTDzx5.js";import"./CADxnY6_.js";import"./DC20TnpD.js";import"./BivgmmST.js";import"./CTsql4jC.js";import"./RXXAWOvh.js";const E=F("siparisler",()=>{const k=c([]),v=c(0),e=c(!1),g=W(),r=c(""),m=c({page:1,itemsPerPage:20,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:"",status:0});async function n(){e.value=!0,r.value="",await g(`/api/orders?page=${m.value.page}&status=${m.value.status}&per_page=${m.value.itemsPerPage}&depo_id=${m.value.depo_id}&search=${m.value.search}`).then(a=>{e.value=!1,k.value=a.data,v.value=a.total}).catch(a=>{e.value=!1,r.value=a.message})}async function _(a){e.value=!0,r.value="",await g("/api/addHakedisItem",{method:"POST",body:{orderID:a}}).then(d=>{e.value=!1}).catch(d=>{e.value=!1,r.value=d.message})}return{confirmedOrders:M(()=>k.value.filter(a=>a.is_confirmed===1)),totalItems:v,loading:e,options:m,fetchData:n,error:r,orders:k,addHakedis:_}}),Q={class:"d-flex"},X={class:"d-flex"},Z={class:"d-flex flex-column"},ee={class:"d-block font-weight-medium text-high-emphasis text-truncate"},te={class:"d-flex gap-2"},ae={class:"d-flex gap-2"},se=D({__name:"SiparisListesi",setup(k,{expose:v}){const e=E(),g=c(""),r=c(!1),m=[{title:"Platform",key:"platformId"},{title:"Sipariş Bilgileri",key:"orderDate"},{title:"Müşteri Bilgileri",key:"buyer"},{title:"Ürün Bilgileri",key:"items"},{title:"Kargo Bilgileri",key:"shippingCompanyName"},{title:"Teyitli mi",key:"is_confirmed"},{title:"Aksiyonlar",key:"actions"}],n=c({deger:"",item:0,title:"",message:""}),_=(d,h)=>{n.value.deger=d,n.value.item=h.id,n.value.title="Emin misiniz?",n.value.message="Siparişi onayladığınızda sipariş kalemleri hakedişe düşecek ve sipariş onaylanacaktır.",r.value=!0},p=async d=>{d.deger==="approve_order"&&await e.addHakedis(d.item).then(()=>{r.value=!1,e.options.status=1,e.fetchData()})},a=d=>{e.options.page=d.page??0,e.options.search=d.search??"",e.options.status=1,e.fetchData()};return v({updateOptions:a}),(d,h)=>{const C=P,o=O;return y(),x(R,null,{default:t(()=>[s(C,{modelValue:f(e).loading,"onUpdate:modelValue":h[0]||(h[0]=i=>f(e).loading=i)},null,8,["modelValue"]),s(o,{modelValue:r.value,"onUpdate:modelValue":h[1]||(h[1]=i=>r.value=i),deger:n.value.deger,item:n.value.item,title:n.value.title,message:n.value.message,onClickedAgree:p},null,8,["modelValue","deger","item","title","message"]),s(K,{cols:"12",md:"12"},{default:t(()=>[s(T,null,{default:t(()=>[s(N,{headers:m,items:f(e).confirmedOrders,"items-length":f(e).totalItems,loading:f(e).loading,search:g.value,"item-value":"id",class:"text-no-wrap","hide-default-footer":"","onUpdate:options":a},{"item.platformId":t(({item:i})=>[l("div",Q,[l("span",null,u(i.platformId===1?"N11":i.platformId===2?"HB":""),1)])]),"item.orderDate":t(({item:i})=>[l("div",X,[l("span",null,u(i.orderDate),1)])]),"item.buyer":t(({item:i})=>[l("div",Z,[l("span",ee,u(i.buyer.fullName),1),l("small",null,u(i.buyer.adresses[0].district)+" / "+u(i.buyer.adresses[0].city),1)])]),"item.items":t(({item:i})=>[s(U,null,{default:t(()=>[(y(!0),B($,null,w(i.items,V=>(y(),x(A,{key:V.id,subtitle:V.product.productCode,title:V.product.productTitle},{prepend:t(()=>[s(H,{color:"grey",rounded:"0",size:"64"},{default:t(()=>[s(z,{src:V.product.cover_image.url},null,8,["src"])]),_:2},1024)]),_:2},1032,["subtitle","title"]))),128))]),_:2},1024)]),"item.raf":t(({item:i})=>[l("div",te,[l("span",null,u(i.malzemos.raf.name),1)])]),"item.stock":t(({item:i})=>[s(L,{color:"success",class:"font-weight-medium",size:"small"},{default:t(()=>[b(" + "+u(i.stock),1)]),_:2},1024)]),"item.actions":t(({item:i})=>[l("div",ae,[s(I,{type:"submit",size:"small",onClick:V=>_("approve_order",i)},{default:t(()=>[b(" Onayla ")]),_:2},1032,["onClick"]),s(I,{type:"submit",size:"small",color:"error"},{default:t(()=>[b(" Reddet ")]),_:1})])]),_:1},8,["items","items-length","loading","search"])]),_:1})]),_:1})]),_:1})}}}),ie={class:"d-flex"},le={class:"d-flex"},oe={class:"d-flex flex-column"},re={class:"d-block font-weight-medium text-high-emphasis text-truncate"},ne={class:"d-flex flex-column"},de={class:"d-block font-weight-medium text-high-emphasis text-truncate"},ue=D({__name:"SiparisListesiSecond",setup(k,{expose:v}){const e=E(),g=c(""),r=c(!1),m=[{title:"Platform",key:"platformId"},{title:"Sipariş Bilgileri",key:"orderDate"},{title:"Müşteri Bilgileri",key:"buyer"},{title:"Ürün Bilgileri",key:"items"},{title:"Kargo Bilgileri",key:"shippingCompanyName"}],n=c({deger:"",item:0,title:"",message:""}),_=async a=>{a.deger==="approve_order"&&await e.addHakedis(a.item).then(()=>{r.value=!1,e.options.status=1,e.fetchData()})},p=a=>{e.options.page=a.page??0,e.options.search=a.search??"",e.options.status=2,e.fetchData()};return v({updateOptions:p}),(a,d)=>{const h=P,C=O;return y(),x(R,null,{default:t(()=>[s(h,{modelValue:f(e).loading,"onUpdate:modelValue":d[0]||(d[0]=o=>f(e).loading=o)},null,8,["modelValue"]),s(C,{modelValue:r.value,"onUpdate:modelValue":d[1]||(d[1]=o=>r.value=o),deger:n.value.deger,item:n.value.item,title:n.value.title,message:n.value.message,onClickedAgree:_},null,8,["modelValue","deger","item","title","message"]),s(K,{cols:"12",md:"12"},{default:t(()=>[s(T,null,{default:t(()=>[s(N,{headers:m,items:f(e).confirmedOrders,"items-length":f(e).totalItems,loading:f(e).loading,search:g.value,"item-value":"id",class:"text-no-wrap","hide-default-footer":"","onUpdate:options":p},{"item.platformId":t(({item:o})=>[l("div",ie,[l("span",null,u(o.platformId===1?"N11":o.platformId===2?"HB":""),1)])]),"item.orderDate":t(({item:o})=>[l("div",le,[l("span",null,u(o.orderDate),1)])]),"item.buyer":t(({item:o})=>[l("div",oe,[l("span",re,u(o.buyer.fullName),1),l("small",null,u(o.buyer.adresses[0].district)+" / "+u(o.buyer.adresses[0].city),1)])]),"item.items":t(({item:o})=>[s(U,null,{default:t(()=>[(y(!0),B($,null,w(o.items,i=>(y(),x(A,{key:i.id,subtitle:i.product.productCode,title:i.product.productTitle},{prepend:t(()=>[s(H,{color:"grey",rounded:"0",size:"64"},{default:t(()=>[s(z,{src:i.product.cover_image.url},null,8,["src"])]),_:2},1024)]),_:2},1032,["subtitle","title"]))),128))]),_:2},1024)]),"item.shippingCompanyName":t(({item:o})=>[l("div",ne,[l("span",de,u(o.shippingCompanyName),1),l("small",null,[s(L,{color:"success",class:"font-weight-medium",size:"small"},{default:t(()=>[b(u(o.campaignNumber),1)]),_:2},1024)])])]),_:1},8,["items","items-length","loading","search"])]),_:1})]),_:1})]),_:1})}}}),Se=D({__name:"siparisler",setup(k){const v=G(),e=c(v.params.tab),g=c(),r=c();c({page:1,itemsPerPage:20,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:"",status:1});const m=[{tab:"account",title:"Yeni Siparişler",icon:"ri-group-line"},{tab:"security",title:"Kargolanacak Siparişler (Onaylanmış)",icon:"ri-lock-line"}],n=_=>{_==="account"&&g.value.updateOptions({page:1,itemsPerPage:20,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:"",status:1}),_==="security"&&r.value.updateOptions({page:1,itemsPerPage:20,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:"",status:2})};return(_,p)=>(y(),B("div",null,[s(q,{modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=a=>e.value=a),"show-arrows":""},{default:t(()=>[(y(),B($,null,w(m,a=>s(j,{key:a.icon,value:a.tab,onClick:d=>n(a.tab)},{default:t(()=>[s(Y,{size:"20",start:"",icon:a.icon},null,8,["icon"]),b(" "+u(a.title),1)]),_:2},1032,["value","onClick"])),64))]),_:1},8,["modelValue"]),s(J,{modelValue:e.value,"onUpdate:modelValue":p[1]||(p[1]=a=>e.value=a),class:"mt-5 disable-tab-transition"},{default:t(()=>[s(S,{value:"account"},{default:t(()=>[s(se,{ref_key:"siparisListesi",ref:g},null,512)]),_:1}),s(S,{value:"security"},{default:t(()=>[s(ue,{ref_key:"siparisListesiSecond",ref:r},null,512)]),_:1})]),_:1},8,["modelValue"])]))}});export{Se as default};