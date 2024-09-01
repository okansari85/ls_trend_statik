import{k as j,r as _,l as q,s as V,v as S,W as Q,z as A,A as H,B as b,X as J,D as K,G as v,Y as B,Z as m,J as g,e as o,_ as D,Q as F,R as M,I as T,$ as O,a0 as $,a1 as U,V as W,a2 as X,a3 as Y,a4 as Z,a5 as ee,a6 as ae,a7 as te,a8 as ne,d as le,a9 as se,o as x,c as k,b as P,n as E,p as C,f as n,F as w,t as c,a as oe,S as ie,T as ce}from"./CHQQrQ45.js";import{V as ue}from"./z7fdfVDF.js";import{m as R,u as re}from"./Cw1PCaGh.js";import{V as de}from"./DVgquVrQ.js";import{_ as pe}from"./DlAUqK2U.js";const ve=j("hakedisStore",()=>{const e=_([]),s=_(!1),t=q(),a=_("");async function r(){s.value=!0,a.value="",await t("/api/hakedis/daily").then(i=>{s.value=!1,e.value=i}).catch(i=>{s.value=!1,a.value=i.message})}return{hakedisler:e,loading:s,fetchData:r,error:a}}),f=Symbol.for("vuetify:v-expansion-panel"),xe=["default","accordion","inset","popout"],me=V({color:String,static:Boolean,variant:{type:String,default:"default",validator:e=>xe.includes(e)},readonly:Boolean,...S(),...Q(),...A(),...H()},"VExpansionPanels"),fe=b()({name:"VExpansionPanels",props:me(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;J(e,f);const{themeClasses:a}=K(e),r=v(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return B({VExpansionPanel:{color:m(e,"color"),readonly:m(e,"readonly"),static:m(e,"static")}}),g(()=>o(e.tag,{class:["v-expansion-panels",a.value,r.value,e.class],style:e.style},t)),{}}}),ye=V({...S(),...R()},"VExpansionPanelText"),G=b()({name:"VExpansionPanelText",props:ye(),setup(e,s){let{slots:t}=s;const a=D(f);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:r,onAfterLeave:i}=re(e,a.isSelected);return g(()=>o(ue,{onAfterLeave:i},{default:()=>{var d;return[F(o("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&r.value&&o("div",{class:"v-expansion-panel-text__wrapper"},[(d=t.default)==null?void 0:d.call(t)])]),[[M,a.isSelected.value]])]}})),{}}}),L=V({color:String,expandIcon:{type:T,default:"$expand"},collapseIcon:{type:T,default:"$collapse"},hideActions:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...S()},"VExpansionPanelTitle"),Pe=b()({name:"VExpansionPanelTitle",directives:{Ripple:O},props:L(),setup(e,s){let{slots:t}=s;const a=D(f);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:r,backgroundColorStyles:i}=$(e,"color"),d=v(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return g(()=>{var l;return F(o("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--static":e.static},r.value,e.class],style:[i.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[o("span",{class:"v-expansion-panel-title__overlay"},null),(l=t.default)==null?void 0:l.call(t,d.value),!e.hideActions&&o("span",{class:"v-expansion-panel-title__icon"},[t.actions?t.actions(d.value):o(W,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[U("ripple"),e.ripple]])}),{}}}),Ve=V({title:String,text:String,bgColor:String,...S(),...X(),...Y(),...R(),...Z(),...A(),...L()},"VExpansionPanel"),Se=b()({name:"VExpansionPanel",props:Ve(),emits:{"group:selected":e=>!0},setup(e,s){let{slots:t}=s;const a=ee(e,f),{backgroundColorClasses:r,backgroundColorStyles:i}=$(e,"bgColor"),{elevationClasses:d}=ae(e),{roundedClasses:l}=te(e),h=v(()=>(a==null?void 0:a.disabled.value)||e.disabled),I=v(()=>a.group.items.value.reduce((p,u,y)=>(a.group.selected.value.includes(u.id)&&p.push(y),p),[])),N=v(()=>{const p=a.group.items.value.findIndex(u=>u.id===a.id);return!a.isSelected.value&&I.value.some(u=>u-p===1)}),z=v(()=>{const p=a.group.items.value.findIndex(u=>u.id===a.id);return!a.isSelected.value&&I.value.some(u=>u-p===-1)});return ne(f,a),B({VExpansionPanelText:{eager:m(e,"eager")},VExpansionPanelTitle:{readonly:m(e,"readonly")}}),g(()=>{const p=!!(t.text||e.text),u=!!(t.title||e.title);return o(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":N.value,"v-expansion-panel--after-active":z.value,"v-expansion-panel--disabled":h.value},l.value,r.value,e.class],style:[i.value,e.style]},{default:()=>{var y;return[o("div",{class:["v-expansion-panel__shadow",...d.value]},null),u&&o(Pe,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[t.title?t.title():e.title]}),p&&o(G,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(y=t.default)==null?void 0:y.call(t)]}})}),{}}}),be=e=>(ie("data-v-a42164c8"),e=e(),ce(),e),ge=be(()=>n("thead",null,[n("tr",null,[n("th",{class:"text-left"}," # "),n("th",{class:"text-left"}," Sipariş "),n("th",{class:"text-left"}," Ürün "),n("th",{class:"text-left"}," Fiyat "),n("th",{class:"text-left"}," 10% Dahil "),n("th",{class:"text-left"}," 20% KDV "),n("th",{class:"text-left"}," Quantity "),n("th",{class:"text-left"}," Adet Toplamı "),n("th",{class:"text-left"}," Paketleme Ücreti "),n("th",{class:"text-left"}," Total Price ")])],-1)),he=le({__name:"hakedis",setup(e){const s=ve();se(()=>{s.fetchData()});const t=a=>new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(a);return(a,r)=>(x(),k(fe,{multiple:""},{default:P(()=>[(x(!0),E(w,null,C(oe(s).hakedisler,(i,d)=>(x(),k(Se,{key:d,title:`${d} Toplam Tutar : ${i.totalAmount}`,text:`Toplam Tutar : ${i.totalAmount}`},{default:P(()=>[o(G,null,{default:P(()=>[o(de,{density:"compact"},{default:P(()=>[ge,n("tbody",null,[(x(!0),E(w,null,C(i.hakedisler,(l,h)=>(x(),E("tr",{key:l.id},[n("td",null,c(h+1),1),n("td",null,[n("div",null,[n("span",null,c(l.order.buyer.fullName),1)]),n("div",null,[n("small",null,c(l.order.buyer.adresses[0].city)+" / "+c(l.order.buyer.adresses[0].district),1)])]),n("td",null,c(l.product.productCode),1),n("td",null,c(t(l.price)),1),n("td",null,c(t(l.price*1.1)),1),n("td",null,c(t(l.price*1.1*1.2)),1),n("td",null,c(l.quantity),1),n("td",null,c(t(l.price*1.1*1.2*l.quantity)),1),n("td",null,c(t(l.packet_price)),1),n("td",null,c(t(l.total_price)),1)]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1032,["title","text"]))),128))]),_:1}))}}),Ce=pe(he,[["__scopeId","data-v-a42164c8"]]);export{Ce as default};
