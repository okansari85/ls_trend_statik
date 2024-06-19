import{k as _,r as o,G as p,l as $}from"./DeAGUIeh.js";const E=_("dataTable",()=>{const i=o([]),l=o([]),m=o(0),e=o(!1),u=$(),s=o(""),r=o([]),v=o(!1),d=o({page:1,itemsPerPage:10,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:"",id:0});async function f(){e.value=!0,s.value="",await u(`/api/malzemos?page=${d.value.page}&per_page=${d.value.itemsPerPage}&depo_id=${d.value.depo_id}&search=${d.value.search}`).then(a=>{e.value=!1,i.value=a.data,m.value=a.total}).catch(a=>{e.value=!1,s.value=a.message})}async function h(a){e.value=!0,s.value="",v.value=!1,await u(`/api/getMalzemosByProductCode?product_code=${a.product_id}&depo_id=${a.depo_id}`).then(t=>{e.value=!1,r.value=t}).catch(t=>{e.value=!1,t.response&&t.response.status===404?(v.value=!0,s.value="Malzeme bulunamadı"):s.value=t.response?t.response.data.message:t.message})}async function g(a,t){e.value=!0,s.value="",await u("/api/addProductStock",{method:"POST",body:{id:a,adet:t}}).then(c=>{e.value=!1,l.value.push(c)}).catch(c=>{e.value=!1,s.value=c.message})}async function y(a,t,c){e.value=!0,s.value="",v.value=!1,await u("/api/removeProductStock",{method:"POST",body:{productCode:a,adet:t,depoID:c}}).then(n=>{e.value=!1,l.value.push(n)}).catch(n=>{n.response&&n.response.status===404?(v.value=!0,s.value="Malzeme bulunamadı"):n.response&&n.response.status===400&&(s.value=n.response._data),e.value=!1})}async function P(a){e.value=!0,s.value="",await u(`/api/deleteStockMovement/${a}`,{method:"DELETE"}).then(()=>{e.value=!1;const t=l.value.findIndex(c=>c.id===a);t!==-1&&l.value.splice(t,1)}).catch(t=>{e.value=!1,s.value=t.message})}async function S(a){e.value=!0,s.value="",await u("/api/malzemos",{method:"POST",body:{product:a}}).then(t=>{l.value.push(t),e.value=!1}).catch(t=>{e.value=!1,s.value=t.message})}async function w(a){e.value=!0,s.value="",await u("/api/newProduct",{method:"POST",body:{product:a}}).then(()=>{e.value=!1}).catch(t=>{e.value=!1,s.value=t.message})}async function k(a){e.value=!0,s.value="",await u(`/api/malzemos/${a.id}`,{method:"PUT",body:{product:a}}).then(()=>{e.value=!1}).catch(t=>{e.value=!1,s.value=t.message})}async function T(a){e.value=!0,s.value="",await u(`/api/malzemos/${a}`,{method:"DELETE"}).then(()=>{e.value=!1}).catch(t=>{e.value=!1,s.value=t.message})}const z=p(()=>l.value.filter(a=>a.type==="IN")),M=p(()=>l.value.filter(a=>a.type==="OUT"));return{items:i,singleProduct:r,totalItems:m,loading:e,options:d,fetchData:f,getMalzemosByProductId:h,error:s,notFound:v,addProductStock:g,removeProductStock:y,stockmovements:l,stockInMovements:z,stockOutMovements:M,deleteStockMovement:P,saveMalzemos:S,newProduct:w,editProduct:k,deleteProduct:T}});export{E as u};
