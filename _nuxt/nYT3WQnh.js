import{a as b}from"./BgoGJ-Ot.js";import{s as x,v as B,z as P,B as S,J as L,e as t,I as F,av as M,ax as Q,A as W,aH as X,aj as Y,a2 as _,aE as $,C as j,a8 as q,W as E,aC as H,bJ as O,ar as U,Q as G,R as K,O as v,V as r,d as Z,o as p,c as ee,b as a,P as V,a as y,i as l}from"./DkOmN_ZY.js";import{V as te,a as ae,b as n,d as i,e as oe}from"./K4P9XtT_.js";import{V as k}from"./DwatjecA.js";import{V as C}from"./C942Ep-J.js";const se=x({start:Boolean,end:Boolean,...B(),...P()},"VListItemAction"),le=S()({name:"VListItemAction",props:se(),setup(e,o){let{slots:c}=o;return L(()=>t(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},c)),{}}}),ne=x({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:F,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...B(),...M({location:"top end"}),...Q(),...P(),...W(),...X({transition:"scale-rotate-transition"})},"VBadge"),h=S()({name:"VBadge",inheritAttrs:!1,props:ne(),setup(e,o){const{backgroundColorClasses:c,backgroundColorStyles:I}=Y(_(e,"color")),{roundedClasses:A}=$(e),{t:N}=j(),{textColorClasses:T,textColorStyles:w}=q(_(e,"textColor")),{themeClasses:z}=E(),{locationStyles:R}=H(e,!0,s=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(s)?+(e.offsetY??0):["left","right"].includes(s)?+(e.offsetX??0):0));return L(()=>{const s=Number(e.content),d=!e.max||isNaN(s)?e.content:s<=+e.max?s:`${e.max}+`,[D,J]=O(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,v({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},J,{style:e.style}),{default:()=>{var u,m;return[t("div",{class:"v-badge__wrapper"},[(m=(u=o.slots).default)==null?void 0:m.call(u),t(U,{transition:e.transition},{default:()=>{var f,g;return[G(t("span",v({class:["v-badge__badge",z.value,c.value,A.value,T.value],style:[I.value,w.value,e.inline?{}:R.value],"aria-atomic":"true","aria-label":N(e.label,s),"aria-live":"polite",role:"status"},D),[e.dot?void 0:o.slots.badge?(g=(f=o.slots).badge)==null?void 0:g.call(f):e.icon?t(r,{icon:e.icon},null):d]),[[K,e.modelValue]])]}})])]}})}),{}}}),me=Z({__name:"UserProfile",setup(e){return(o,c)=>(p(),ee(h,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success",bordered:""},{default:a(()=>[t(k,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:a(()=>[t(V,{src:y(b)},null,8,["src"]),t(te,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:a(()=>[t(ae,null,{default:a(()=>[t(n,null,{prepend:a(()=>[t(le,{start:""},{default:a(()=>[t(h,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:a(()=>[t(k,{color:"primary",variant:"tonal"},{default:a(()=>[t(V,{src:y(b)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),default:a(()=>[t(i,{class:"font-weight-semibold"},{default:a(()=>[l(" John Doe ")]),_:1}),t(oe,null,{default:a(()=>[l("Admin")]),_:1})]),_:1}),t(C,{class:"my-2"}),t(n,{link:""},{prepend:a(()=>[t(r,{class:"me-2",icon:"ri-user-line",size:"22"})]),default:a(()=>[t(i,null,{default:a(()=>[l("Profile")]),_:1})]),_:1}),t(n,{link:""},{prepend:a(()=>[t(r,{class:"me-2",icon:"ri-settings-4-line",size:"22"})]),default:a(()=>[t(i,null,{default:a(()=>[l("Settings")]),_:1})]),_:1}),t(n,{link:""},{prepend:a(()=>[t(r,{class:"me-2",icon:"ri-money-dollar-circle-line",size:"22"})]),default:a(()=>[t(i,null,{default:a(()=>[l("Pricing")]),_:1})]),_:1}),t(n,{link:""},{prepend:a(()=>[t(r,{class:"me-2",icon:"ri-question-line",size:"22"})]),default:a(()=>[t(i,null,{default:a(()=>[l("FAQ")]),_:1})]),_:1}),t(C,{class:"my-2"}),t(n,{to:"/login"},{prepend:a(()=>[t(r,{class:"me-2",icon:"ri-logout-box-r-line",size:"22"})]),default:a(()=>[t(i,null,{default:a(()=>[l("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{me as _};
