import{u as q,a as H,b as J,c as Q,_ as W}from"./CkJZZjkv.js";import{_ as X}from"./CQTqzvCQ.js";import{_ as Z}from"./DY75IlTm.js";import{V as ee,_ as te}from"./Dg7ufkr2.js";import{u as ae}from"./BmzD6vHw.js";import{d as P,r,w as le,o as T,c as oe,a as l,b as e,u as o,p as g,e as d,h as b,f as se,t as k,V as w,m as ie}from"./Bg_gKfMG.js";import{a as z,V as S,c as ne}from"./1UPITes6.js";import{a as f,V as C}from"./B_-B2s3f.js";import{V as re,a as de}from"./Bqc1-bYl.js";import"./B-F9V9Sf.js";/* empty css        */import"./-jOzALyn.js";import"./DmDt5i9Y.js";import"./DY7PVvcf.js";import"./BN4JDOmi.js";import"./C-GTDzx5.js";import"./CpuXzhs2.js";import"./CIT2TdD2.js";import"./E77fSpEd.js";import"./CxtvPC_T.js";import"./CQbWLo4F.js";const ue={class:"pa-5 pt-2"},ce=d("br",null,null,-1),me={class:"d-flex flex-column ms-3"},pe={class:"d-block font-weight-medium text-high-emphasis text-truncate"},fe={class:"d-flex gap-2"},_e={class:"d-flex gap-2"},ve={class:"d-flex gap-2"},ge=P({__name:"AnalyticsUserTable",async setup(A){let y,D;const s=ae(),m=q(),c=r(!1),_=r(!1),v=r();[y,D]=le(()=>H("depo",()=>m.getAllDepos())),await y,D();const F=[{title:"Ürün Kodu",key:"productCode"},{title:"Depo",key:"depo"},{title:"Raf No",key:"raf"},{title:"Stok",key:"stock"},{title:"Aksiyonlar",key:"actions"}],U=r("Yeni Ürün Ekle"),$=r("Yeni Ürün Ekle"),V=r(""),h=r(null),B=async i=>{s.options.depo_id=i??0,s.fetchData()},x=i=>{s.options.page=i.page??0,s.options.search=i.search??"",s.options.depo_id=h.value??0,s.fetchData()},u=r({deger:"",item:0,title:"",message:""}),n=r({depo_id:null,id:0,raf_id:"",product_code:"",product_desc:"",stock:0,type:"IN",adet:"0"}),p=r(),M=async i=>{i.deger==="delete"&&await s.deleteProduct(i.item).then(()=>{_.value=!1,x(s.options)})},N=async()=>{var i;(i=p.value)!=null&&i.validate()&&(v.value==="new"?await s.newProduct(p.value.internalFormData).then(()=>{s.error===""&&(console.log("tamam"),c.value=!1,x(s.options))}):v.value==="edit"&&await s.editProduct(p.value.internalFormData).then(()=>{s.error===""&&(console.log("tamam"),c.value=!1,x(s.options))}))},R=i=>{n.value.depo_id=i,n.value.raf_id="",n.value.depo_id!==null&&m.getRaflar(n.value.depo_id)},E=i=>{p.value&&p.value.clearForm(),v.value=i,c.value=!0},I=(i,t)=>{m.getRaflar(t.depo_id),n.value.product_code=t.productCode,n.value.product_desc=t.productDesc,n.value.id=t.id,n.value.depo_id=t.depo_id,n.value.raf_id=t.raf_id,n.value.stock=t.stock,console.log(t.name),v.value=i,c.value=!0},Y=(i,t)=>{u.value.deger=i,u.value.item=t.id,u.value.title="Emin misiniz?",u.value.message="Ürün silme işlemi geri alınamaz ve ürüne bağlı tüm hareketler de silinir.",_.value=!0};return(i,t)=>{const K=W,O=X,L=Z,j=te;return T(),oe(C,null,{default:l(()=>[e(K,{modelValue:o(_),"onUpdate:modelValue":t[0]||(t[0]=a=>g(_)?_.value=a:null),deger:o(u).deger,item:o(u).item,title:o(u).title,message:o(u).message,onClickedAgree:M},null,8,["modelValue","deger","item","title","message"]),e(f,{cols:"12"},{default:l(()=>[e(z,{title:"Ürün Listesi"},{default:l(()=>[e(L,{modelValue:o(c),"onUpdate:modelValue":t[2]||(t[2]=a=>g(c)?c.value=a:null),"mdl-text":o($),"mdl-btn-text":o(U),status:o(v),fullscreen:"",onClickedSave:N},{default:l(()=>[d("div",ue,[e(O,{ref_key:"productForm",ref:p,modelValue:o(n),"onUpdate:modelValue":t[1]||(t[1]=a=>g(n)?n.value=a:null),depolar:o(m).depo,raflar:o(m).raflar,disabled:!1,onDepoChange:R},null,8,["modelValue","depolar","raflar"])])]),_:1},8,["modelValue","mdl-text","mdl-btn-text","status"]),e(S,{class:"pt-0"},{default:l(()=>[b(" Ürün Listesini aşağıda görebilirsiniz. Sistem 20 nin altındaki ürünleri kırmızıya boyar "),ce,b(" Yeni ürün eklemek için "),d("a",{href:"javascript:void(0)",onClick:t[3]||(t[3]=a=>E("new"))},"tıklayınız.")]),_:1})]),_:1})]),_:1}),e(f,{cols:"12"},{default:l(()=>[e(z,null,{default:l(()=>[e(ne,{class:"d-flex align-center pe-2"}),e(C,null,{default:l(()=>[e(f,{cols:"12",md:"12","order-md":"0",order:"1"},{default:l(()=>[e(S,{class:"pt-0"},{default:l(()=>[e(re,{onSubmit:se(()=>{},["prevent"])},{default:l(()=>[e(C,null,{default:l(()=>[e(f,{cols:"12",md:"3"},{default:l(()=>[e(J,{modelValue:o(h),"onUpdate:modelValue":[t[4]||(t[4]=a=>g(h)?h.value=a:null),B],items:o(m).depo,label:"Malzeme listesini görmek istediğiniz depoyu seçiniz.",placeholder:"Depo Seç","item-title":"name","item-value":"id",clearable:""},null,8,["modelValue","items"])]),_:1}),e(f,{cols:"12",md:"3"},{default:l(()=>[e(de,{modelValue:o(V),"onUpdate:modelValue":t[5]||(t[5]=a=>g(V)?V.value=a:null),label:"Ürün Kodu",type:"text",placeholder:"Ürün Koduna Göre Arama Yapın",clearable:"","prepend-inner-icon":"ri-user-line"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(j,null,{default:l(()=>[e(ee,{"items-per-page":o(s).options.itemsPerPage,"onUpdate:itemsPerPage":t[6]||(t[6]=a=>o(s).options.itemsPerPage=a),headers:F,items:o(s).items,"items-length":o(s).totalItems,loading:o(s).loading,search:o(V),"item-value":"id",class:"text-no-wrap","onUpdate:options":x},{"item.productCode":l(({item:a})=>[d("div",me,[d("span",pe,k(a.productCode),1),d("small",null,k(a.productDesc),1)])]),"item.raf":l(({item:a})=>[d("div",fe,k(a.raf.name),1)]),"item.depo":l(({item:a})=>[d("div",_e,k(a.raf.descendants.name),1)]),"item.stock":l(({item:a})=>[e(Q,{color:a.stock>10?"success":"error",class:"font-weight-medium",size:"small"},{default:l(()=>[b(k(a.stock),1)]),_:2},1032,["color"])]),"item.actions":l(({item:a})=>[d("div",ve,[e(w,{icon:"ri-close-circle-line",size:"22",onClick:G=>Y("delete",a)},null,8,["onClick"]),e(w,{icon:"ri-pencil-line",size:"22",onClick:G=>I("edit",a)},null,8,["onClick"])])]),_:1},8,["items-per-page","items","items-length","loading","search"])]),_:1})]),_:1})]),_:1})]),_:1})}}}),Ee=P({__name:"malzemeler",setup(A){return(y,D)=>(T(),ie("div",null,[e(C,{class:"match-height"},{default:l(()=>[e(f,{cols:"12"},{default:l(()=>[e(ge)]),_:1})]),_:1})]))}});export{Ee as default};
