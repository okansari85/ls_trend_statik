import{V as J,_ as K,a as O}from"./CZZbiLth.js";import{V as Q,_ as X}from"./s7ij7LNp.js";import{u as Z,a as q}from"./ho-DafLN.js";import{d as j,w as ee,r as d,o as R,c as $,b as a,e,f as _,h as L,a as V,i as C,t as h,j as ae,V as A,k as se,l as de,m as ue,n as P,F as re,p as me,q as W}from"./ZiJhL-97.js";import{V as Y}from"./f1Bgcsgc.js";import{V as z,a as b}from"./BdLhtshP.js";import{V as le}from"./DqIP8d6Y.js";import{V as te}from"./DuuParCj.js";import{V as T,a as G}from"./Dnf1K-Wb.js";import{V as ce}from"./CVlHfdek.js";import{V as fe,a as pe,b as H,c as ve}from"./BTXhUICE.js";import"./CUUTgYSJ.js";/* empty css        */import"./CkF-J-4T.js";import"./mD4MdpF7.js";import"./DY7PVvcf.js";import"./DwSj3YEg.js";import"./C-GTDzx5.js";import"./v_bx85tt.js";import"./BpLF2UDk.js";import"./4y7_YXdj.js";import"./Q4kX3nvP.js";const _e={class:"pt-5"},Ve={class:"d-flex gap-2"},ge=j({__name:"AccountSettingsNotification",async setup(g){let r,u;const o=Z();[r,u]=ee(()=>q("depo",()=>o.getAllDepos())),await r,u();const p=d({depo_adi:"",id:0}),i=d({deger:"",item:0,title:"",message:""}),v=[n=>!!n||"Depo Adı Gereklidir."],y=d("Yeni Depo Ekle"),m=d("Yeni Depo Ekle"),t=d(),k=d(!1),D=d(),x=d(!1),w=d(!1),U=[{title:"Depo Adı",key:"name",width:"80%"},{title:"Aksiyonlar",key:"aksiyonlar"}],E=(n,f)=>{i.value.deger=n,i.value.item=f.id,i.value.title="Emin misiniz?",i.value.message="Depo silme işlemi geri alınamaz ve depoya bağlı tüm ürünler de silinir.",w.value=!0},S=async n=>{n.deger==="delete"&&await o.deleteDepo(n.item).then(()=>{w.value=!1})},F=n=>{p.value.depo_adi="",p.value.id=0,t.value=n,x.value=!0},B=(n,f)=>{p.value.depo_adi=f.name,p.value.id=f.id,console.log(f),t.value=n,x.value=!0},M=async()=>{var n;(n=D.value)==null||n.validate(),k.value&&(t.value==="new"?await o.addDepo(p.value.depo_adi).then(()=>{o.error===""&&(x.value=!1)}):t.value==="edit"&&await o.editDepo(p.value).then(()=>{o.error===""&&(x.value=!1)}))};return(n,f)=>{const N=K,I=X;return R(),$(G,{title:"Depolar"},{default:a(()=>[e(N,{modelValue:w.value,"onUpdate:modelValue":f[0]||(f[0]=l=>w.value=l),deger:i.value.deger,item:i.value.item,title:i.value.title,message:i.value.message,onClickedAgree:S},null,8,["modelValue","deger","item","title","message"]),e(I,{modelValue:x.value,"onUpdate:modelValue":f[3]||(f[3]=l=>x.value=l),"mdl-text":m.value,"mdl-btn-text":y.value,status:t.value,fullscreen:"",onClickedSave:M},{default:a(()=>[_("div",_e,[e(Y,{ref_key:"depoForm",ref:D,modelValue:k.value,"onUpdate:modelValue":f[2]||(f[2]=l=>k.value=l),"lazy-validation":"",onSubmit:L(()=>{},["prevent"])},{default:a(()=>[e(Q,{fluid:""},{default:a(()=>[e(z),e(b,{cols:"12",md:"12"},{default:a(()=>[e(le,{modelValue:p.value.depo_adi,"onUpdate:modelValue":f[1]||(f[1]=l=>p.value.depo_adi=l),label:"Depo Adı",type:"text",rules:v,placeholder:"Depo Adı"},null,8,["modelValue"])]),_:1}),V(o).error!==""?(R(),$(te,{key:0,type:"error",class:"mb-3"},{default:a(()=>[C(h(V(o).error),1)]),_:1})):ae("",!0)]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["modelValue","mdl-text","mdl-btn-text","status"]),e(T,null,{default:a(()=>[C(" Depoların Listesini Aşağıda Görebilirsiniz.Yeni Depo Eklemek için "),_("a",{href:"javascript:void(0)",onClick:f[4]||(f[4]=l=>F("new"))},"tıklayınız.")]),_:1}),e(J,{headers:U,items:V(o).depo,"item-value":"id",class:"text-no-wrap"},{"item.aksiyonlar":a(({item:l})=>[_("div",Ve,[e(A,{icon:"ri-close-circle-line",size:"22",onClick:s=>E("delete",l)},null,8,["onClick"]),e(A,{icon:"ri-pencil-line",size:"22",onClick:s=>B("edit",l)},null,8,["onClick"])])]),bottom:a(()=>[]),_:1},8,["items"]),e(ce),e(T)]),_:1})}}}),ke=se("raflar",()=>{const g=d([]),r=d(!1),u=d(""),o=de();async function p(m){r.value=!0,u.value="",await o(`/api/get_depos/${m}`).then(t=>{r.value=!1,g.value=t}).catch(t=>{r.value=!1,u.value=t.message})}async function i(m){r.value=!0,u.value="",await o(`/api/get_depos/${m}`,{method:"DELETE"}).then(()=>{r.value=!1;const t=g.value.findIndex(k=>k.id===m);t!==-1&&g.value.splice(t,1)}).catch(t=>{r.value=!1,u.value=t.message})}async function v(m){r.value=!0,u.value="",await o("/api/addDepo",{method:"POST",body:{category_name:m.raf_name,parent_id:m.depo_id}}).then(t=>{g.value.push(t),r.value=!1}).catch(t=>{r.value=!1,u.value=t.message})}async function y(m){r.value=!0,u.value="",await o(`/api/get_depos/${m.id}`,{method:"PUT",body:{name:m.raf_name}}).then(t=>{r.value=!1;const k=g.value.findIndex(D=>D.id===t.id);k!==-1&&(g.value[k]=t)}).catch(t=>{r.value=!1,u.value=t.message})}return{getRaflar:p,raf:g,addRaf:v,editRaf:y,deleteRaf:i,loading:r,error:u}}),ye={class:"pt-5"},xe=_("br",null,null,-1),be={class:"d-flex"},De={class:"d-flex"},we={class:"d-flex gap-2"},Ce=j({__name:"AccountSettingsSecurity",async setup(g){let r,u;const o=ke(),p=Z();[r,u]=ee(()=>q("depo",()=>p.getAllDepos())),await r,u();const i=d({name:"",depo_id:null,id:null,raf_name:""}),v=d({name:"Lütfen Seçiniz",id:0}),y=d(),m=d(!1),t=d(!1),k=d("Yeni Raf Ekle"),D=d("Yeni Raf Ekle"),x=d(),w=[l=>!!l||"Raf Adı Gereklidir."],U=[l=>!!l||"Depo Seçimi Gereklidir."],E=l=>{y.value=l,m.value=!0},S=d(!1),F=[{title:"Raf No",key:"name"},{title:"Bulunduğu Depo",key:"depo"},{title:"Aksiyonlar",key:"actions"}],B=async()=>{var l;(l=x.value)==null||l.validate(),S.value&&(y.value==="new"?await o.addRaf(i.value).then(()=>{o.error===""&&(m.value=!1)}):y.value==="edit"&&await o.editRaf(i.value).then(()=>{o.error===""&&(m.value=!1)}))},M=async l=>{await o.getRaflar(l).then(()=>{})},n=d({deger:"",item:0,title:"",message:""}),f=(l,s)=>{n.value.deger=l,n.value.item=s.id,n.value.title="Emin misiniz?",n.value.message="Raf silme işlemi geri alınamaz ve rafa bağlı tüm ürünler de silinir.",t.value=!0},N=async l=>{l.deger==="delete"&&await o.deleteRaf(l.item).then(()=>{t.value=!1})},I=(l,s)=>{i.value.raf_name=s.name,i.value.id=s.id,i.value.depo_id=s.parent.id,console.log(s.name),y.value=l,m.value=!0};return(l,s)=>{const oe=K,ie=X;return R(),$(z,null,{default:a(()=>[e(oe,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=c=>t.value=c),deger:n.value.deger,item:n.value.item,title:n.value.title,message:n.value.message,onClickedAgree:N},null,8,["modelValue","deger","item","title","message"]),e(b,{cols:"12"},{default:a(()=>[e(G,{title:"Raf Listesi"},{default:a(()=>[e(ie,{modelValue:m.value,"onUpdate:modelValue":s[4]||(s[4]=c=>m.value=c),"mdl-text":D.value,"mdl-btn-text":k.value,status:y.value,fullscreen:"",onClickedSave:B},{default:a(()=>[_("div",ye,[e(Y,{ref_key:"rafForm",ref:x,modelValue:S.value,"onUpdate:modelValue":s[3]||(s[3]=c=>S.value=c),"lazy-validation":"",onSubmit:L(()=>{},["prevent"])},{default:a(()=>[e(Q,{fluid:""},{default:a(()=>[e(z),e(b,{cols:"12",md:"12"},{default:a(()=>[e(O,{modelValue:i.value.depo_id,"onUpdate:modelValue":s[1]||(s[1]=c=>i.value.depo_id=c),label:"Depo Seçiniz",placeholder:"Depo Seçiniz",items:V(p).depo,"item-title":"name","item-value":"id",rules:U,required:""},null,8,["modelValue","items"])]),_:1}),e(b,{cols:"12",md:"12"},{default:a(()=>[e(le,{modelValue:i.value.raf_name,"onUpdate:modelValue":s[2]||(s[2]=c=>i.value.raf_name=c),label:"Raf No",type:"text",rules:w,placeholder:"Raf Adı"},null,8,["modelValue"])]),_:1}),V(o).error!==""?(R(),$(te,{key:0,type:"error",class:"mb-3"},{default:a(()=>[C(h(V(o).error),1)]),_:1})):ae("",!0)]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["modelValue","mdl-text","mdl-btn-text","status"]),e(T,{class:"pt-0"},{default:a(()=>[C(" Raf Listesini aşağıda görebilirsiniz. İlgili depodaki rafları görmek için aşağıdan depo seçiniz "),xe,C(" Yeni raf eklemek için "),_("a",{href:"javascript:void(0)",onClick:s[5]||(s[5]=c=>E("new"))},"tıklayınız.")]),_:1})]),_:1})]),_:1}),e(b,{cols:"12"},{default:a(()=>[e(G,{title:"Raflar"},{default:a(()=>[e(z,null,{default:a(()=>[e(b,{cols:"12",md:"12","order-md":"0",order:"1"},{default:a(()=>[e(T,{class:"pt-0"},{default:a(()=>[e(Y,{onSubmit:L(()=>{},["prevent"])},{default:a(()=>[e(z,null,{default:a(()=>[e(b,{cols:"12"},{default:a(()=>[e(O,{modelValue:v.value,"onUpdate:modelValue":[s[6]||(s[6]=c=>v.value=c),M],label:"Raf listesini görmek istediğiniz depoyu seçiniz",placeholder:"Depo Seç",items:V(p).depo,"item-title":"name","item-value":"id"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(J,{headers:F,items:V(o).raf,loading:V(o).loading,"hide-default-footer":"",class:"text-no-wrap"},{"item.name":a(({item:c})=>[_("div",be,[_("span",null,h(c.name),1)])]),"item.depo":a(({item:c})=>[_("div",De,[_("span",null,h(c.parent.name),1)])]),"item.actions":a(({item:c})=>[_("div",we,[e(A,{icon:"ri-close-circle-line",size:"22",onClick:ne=>f("delete",c)},null,8,["onClick"]),e(A,{icon:"ri-pencil-line",size:"22",onClick:ne=>I("edit",c)},null,8,["onClick"])])]),_:1},8,["items","loading"])]),_:1})]),_:1})]),_:1})}}}),Je=j({__name:"account-settings",setup(g){const r=ue(),u=d(r.params.tab),o=[{tab:"account",title:"Depolar",icon:"ri-group-line"},{tab:"security",title:"Raflar",icon:"ri-lock-line"}];return(p,i)=>(R(),P("div",null,[e(pe,{modelValue:V(u),"onUpdate:modelValue":i[0]||(i[0]=v=>W(u)?u.value=v:null),"show-arrows":""},{default:a(()=>[(R(),P(re,null,me(o,v=>e(fe,{key:v.icon,value:v.tab},{default:a(()=>[e(A,{size:"20",start:"",icon:v.icon},null,8,["icon"]),C(" "+h(v.title),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(ve,{modelValue:V(u),"onUpdate:modelValue":i[1]||(i[1]=v=>W(u)?u.value=v:null),class:"mt-5 disable-tab-transition",touch:!1},{default:a(()=>[e(H,{value:"account"},{default:a(()=>[e(ge)]),_:1}),e(H,{value:"security"},{default:a(()=>[e(Ce)]),_:1})]),_:1},8,["modelValue"])]))}});export{Je as default};
