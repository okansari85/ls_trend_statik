import{s as ue,I as ee,v as de,x as ce,y as me,z as fe,A as _e,B as he,C as pe,D as ve,E as ge,G as T,H as be,J as ye,K as we,L as xe,M as ke,e,F as C,N as c,O as Ie,i as n,d as j,r as W,o as y,c as z,b as t,P as S,a as p,f as l,n as B,p as A,V,Q as Ve,R as Ce,j as Be,S as Le,T as Te,q as P,t as I,U as Se}from"./BZTnykiJ.js";import{a as q}from"./xf9joVXx.js";import{V as Ae}from"./BoqnSi74.js";import{a as g,b as k,c as x,V as i,d as Re,e as U}from"./DWs8ge_J.js";import{a as h,V as D}from"./CL4Mg6s6.js";import{V as E}from"./CD3bP1I6.js";import{V as Ue}from"./SGITEjV6.js";import{V as F}from"./DLfrnkUN.js";import{_ as Me}from"./DlAUqK2U.js";import{a as te,V as ae,c as le,b as ne}from"./CWrbeSqs.js";/* empty css        */import"./DY7PVvcf.js";import"./D_EVcEZw.js";import"./CrsJ6Nwx.js";const $e=""+new URL("avatar-2.DCJB4Ubn.png",import.meta.url).href,Ne=""+new URL("avatar-3.DBHb2r0Y.png",import.meta.url).href,ie=""+new URL("avatar-4.x_MPl8Kx.png",import.meta.url).href,Pe=""+new URL("2.CorP6DNx.png",import.meta.url).href,Fe=""+new URL("1.CxILTXIE.png",import.meta.url).href,Ee=""+new URL("2.CbZIFOZ3.png",import.meta.url).href,ze=""+new URL("3.BTaq5jfT.png",import.meta.url).href,De=""+new URL("5.CFPERer_.jpg",import.meta.url).href,je=""+new URL("6.CgiBB01F.jpg",import.meta.url).href,He=ue({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:ee,default:"$ratingEmpty"},fullIcon:{type:ee,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:a=>["top","bottom"].includes(a)},ripple:Boolean,...de(),...ce(),...me(),...fe(),..._e()},"VRating"),se=he()({name:"VRating",props:He(),emits:{"update:modelValue":a=>!0},setup(a,v){let{slots:r}=v;const{t:b}=pe(),{themeClasses:w}=ve(a),s=ge(a,"modelValue"),o=T(()=>we(parseFloat(s.value),0,+a.length)),Y=T(()=>xe(Number(a.length),1)),G=T(()=>Y.value.flatMap(u=>a.halfIncrements?[u-.5,u]:[u])),M=be(-1),H=T(()=>G.value.map(u=>{const f=a.hover&&M.value>-1,d=o.value>=u,_=M.value>=u,L=(f?_:d)?a.fullIcon:a.emptyIcon,O=a.activeColor??a.color,N=d||_?O:a.color;return{isFilled:d,isHovered:_,icon:L,color:N}})),re=T(()=>[0,...G.value].map(u=>{function f(){M.value=u}function d(){M.value=-1}function _(){a.disabled||a.readonly||(s.value=o.value===u&&a.clearable?0:u)}return{onMouseenter:a.hover?f:void 0,onMouseleave:a.hover?d:void 0,onClick:_}})),K=T(()=>a.name??`v-rating-${ke()}`);function $(u){var Q,X;let{value:f,index:d,showStar:_=!0}=u;const{onMouseenter:R,onMouseleave:L,onClick:O}=re.value[d+1],N=`${K.value}-${String(f).replace(".","-")}`,Z={color:(Q=H.value[d])==null?void 0:Q.color,density:a.density,disabled:a.disabled,icon:(X=H.value[d])==null?void 0:X.icon,ripple:a.ripple,size:a.size,variant:"plain"};return e(C,null,[e("label",{for:N,class:{"v-rating__item--half":a.halfIncrements&&f%1>0,"v-rating__item--full":a.halfIncrements&&f%1===0},onMouseenter:R,onMouseleave:L,onClick:O},[e("span",{class:"v-rating__hidden"},[b(a.itemAriaLabel,f,a.length)]),_?r.item?r.item({...H.value[d],props:Z,value:f,index:d,rating:o.value}):e(c,Ie({"aria-label":b(a.itemAriaLabel,f,a.length)},Z),null):void 0]),e("input",{class:"v-rating__hidden",name:K.value,id:N,type:"radio",value:f,checked:o.value===f,tabindex:-1,readonly:a.readonly,disabled:a.disabled},null)])}function J(u){return r["item-label"]?r["item-label"](u):u.label?e("span",null,[u.label]):e("span",null,[n(" ")])}return ye(()=>{var f;const u=!!((f=a.itemLabels)!=null&&f.length)||r["item-label"];return e(a.tag,{class:["v-rating",{"v-rating--hover":a.hover,"v-rating--readonly":a.readonly},w.value,a.class],style:a.style},{default:()=>[e($,{value:0,index:-1,showStar:!1},null),Y.value.map((d,_)=>{var R,L;return e("div",{class:"v-rating__wrapper"},[u&&a.itemLabelPosition==="top"?J({value:d,index:_,label:(R=a.itemLabels)==null?void 0:R[_]}):void 0,e("div",{class:"v-rating__item"},[a.halfIncrements?e(C,null,[e($,{value:d-.5,index:_*2},null),e($,{value:d,index:_*2+1},null)]):e($,{value:d,index:_},null)]),u&&a.itemLabelPosition==="bottom"?J({value:d,index:_,label:(L=a.itemLabels)==null?void 0:L[_]}):void 0])})]})}),{}}}),m=a=>(Le("data-v-5a2888fc"),a=a(),Te(),a),Oe={class:"d-flex justify-space-between flex-wrap pt-8"},We={class:"me-2 mb-2"},qe={class:"d-flex justify-space-between align-center mt-8"},Ye=m(()=>l("span",{class:"font-weight-medium"},"18 mutual friends",-1)),Ge={class:"v-avatar-group"},Ke={class:"d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row"},Je={class:"ma-auto pa-5"},Ze=m(()=>l("span",null,"Price :",-1)),Qe=m(()=>l("span",{class:"font-weight-medium"},"$899",-1)),Xe=m(()=>l("span",{class:"ms-2"},"Add to cart",-1)),et={class:"d-flex flex-column-reverse flex-md-row"},tt=m(()=>l("span",null,"5 Star | 98 reviews",-1)),at={class:"ma-auto pa-5"},lt=m(()=>l("p",{class:"font-weight-medium text-base"}," $249.40 ",-1)),nt=m(()=>l("p",{class:"mb-0"}," 3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz ",-1)),st={class:"me-auto pe-4"},ot={class:"d-flex align-center mb-6"},it=m(()=>l("span",{class:"ms-3"},"Full Access",-1)),rt={class:"d-flex align-center mb-0"},ut=m(()=>l("span",{class:"ms-3"},"15 Members",-1)),dt={class:"ms-auto ps-4"},ct={class:"d-flex align-center mb-6"},mt=m(()=>l("span",{class:"ms-3"},"Access all Features",-1)),ft={class:"d-flex align-center mb-0"},_t=m(()=>l("span",{class:"ms-3"},"Lifetime Free Update",-1)),ht={class:"membership-pricing d-flex flex-column align-center py-14 h-100 justify-center"},pt=m(()=>l("p",{class:"mb-5"},[l("sub",{class:"text-h5"},"$"),l("sup",{class:"text-h2 font-weight-medium"},"899"),l("sub",{class:"text-h5"},"USD")],-1)),vt=m(()=>l("p",{class:"text-sm"},[n(" 5 Tips For Offshore "),l("br"),n(" Software Development ")],-1)),gt=m(()=>l("span",{class:"text-subtitle-2"},"5 Star | 98 reviews",-1)),bt=m(()=>l("h6",{class:"text-h6"}," Support ",-1)),yt=m(()=>l("p",null," According to us blisters are a very common thing and we come across them very often in our daily lives. It is a very common occurrence like cold or fever depending upon your lifestyle. ",-1)),wt=j({__name:"CardBasic",setup(a){const v=[q,$e,Ne,ie],r=W(!1);return(b,w)=>(y(),z(D,null,{default:t(()=>[e(h,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(g,null,{default:t(()=>[e(S,{src:p(Fe),cover:""},null,8,["src"]),e(k,null,{default:t(()=>[e(x,null,{default:t(()=>[n("Influencing The Influencer")]),_:1})]),_:1}),e(i,null,{default:t(()=>[n(" Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago. ")]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(g,null,{default:t(()=>[e(S,{src:p(Ee)},null,8,["src"]),e(i,{class:"position-relative"},{default:t(()=>[e(E,{size:"75",class:"avatar-center",image:p(q)},null,8,["image"]),l("div",Oe,[l("div",We,[e(x,{class:"pa-0"},{default:t(()=>[n(" Robert Meyer ")]),_:1}),e(Re,{class:"text-caption pa-0"},{default:t(()=>[n(" London, UK ")]),_:1})]),e(c,null,{default:t(()=>[n("send request")]),_:1})]),l("div",qe,[Ye,l("div",Ge,[(y(),B(C,null,A(v,s=>e(E,{key:s,image:s,size:"40"},null,8,["image"])),64))])])]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"4",sm:"6"},{default:t(()=>[e(g,null,{default:t(()=>[e(S,{src:p(ze)},null,8,["src"]),e(k,null,{default:t(()=>[e(x,null,{default:t(()=>[n("Popular Uses Of The Internet")]),_:1})]),_:1}),e(i,null,{default:t(()=>[n(" Although cards can support multiple actions, UI controls, and an overflow menu. ")]),_:1}),e(U,null,{default:t(()=>[e(c,{onClick:w[0]||(w[0]=s=>r.value=!p(r))},{default:t(()=>[n(" Details ")]),_:1}),e(Ue),e(c,{icon:"",size:"small",onClick:w[1]||(w[1]=s=>r.value=!p(r))},{default:t(()=>[e(V,{icon:p(r)?"ri-arrow-up-s-line":"ri-arrow-down-s-line"},null,8,["icon"])]),_:1})]),_:1}),e(Ae,null,{default:t(()=>[Ve(l("div",null,[e(F),e(i,null,{default:t(()=>[n(" I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. ")]),_:1})],512),[[Ce,p(r)]])]),_:1})]),_:1})]),_:1}),e(h,{sm:"6",cols:"12"},{default:t(()=>[e(g,null,{default:t(()=>[l("div",Ke,[l("div",Je,[e(S,{width:"137",height:"176",src:p(Pe)},null,8,["src"])]),e(F,{vertical:b.$vuetify.display.mdAndUp},null,8,["vertical"]),l("div",null,[e(k,null,{default:t(()=>[e(x,null,{default:t(()=>[n("Apple iPhone 11 Pro")]),_:1})]),_:1}),e(i,null,{default:t(()=>[n(" Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic ")]),_:1}),e(i,{class:"text-subtitle-1"},{default:t(()=>[Ze,n(),Qe]),_:1}),e(U,{class:"justify-space-between"},{default:t(()=>[e(c,null,{default:t(()=>[e(V,{icon:"ri-shopping-cart-line"}),Xe]),_:1}),e(c,{color:"secondary",icon:"ri-share-line"})]),_:1})])])]),_:1})]),_:1}),e(h,{sm:"6",cols:"12"},{default:t(()=>[e(g,null,{default:t(()=>[l("div",et,[l("div",null,[e(k,null,{default:t(()=>[e(x,null,{default:t(()=>[n("Stumptown Roasters")]),_:1})]),_:1}),e(i,{class:"d-flex align-center flex-wrap text-body-1"},{default:t(()=>[e(se,{"model-value":5,readonly:"",class:"me-3",density:"compact"}),tt]),_:1}),e(i,null,{default:t(()=>[n(" Before there was a United States of America, there were coffee houses, because how are you supposed to build. ")]),_:1}),e(U,null,{default:t(()=>[e(c,null,{default:t(()=>[n("Location")]),_:1}),e(c,null,{default:t(()=>[n("Reviews")]),_:1})]),_:1})]),l("div",at,[e(S,{width:176,src:p(De),class:"rounded"},null,8,["src"])])])]),_:1})]),_:1}),e(h,{lg:"4",sm:"6",cols:"12"},{default:t(()=>[e(g,null,{default:t(()=>[e(S,{src:p(je)},null,8,["src"]),e(k,null,{default:t(()=>[e(x,null,{default:t(()=>[n("Apple Watch")]),_:1})]),_:1}),e(i,null,{default:t(()=>[lt,nt]),_:1}),e(c,{block:"",class:"rounded-t-0"},{default:t(()=>[n(" Add to cart ")]),_:1})]),_:1})]),_:1}),e(h,{md:"6",lg:"8",cols:"12"},{default:t(()=>[e(g,null,{default:t(()=>[e(D,{"no-gutters":""},{default:t(()=>[e(h,{cols:"12",sm:"8",md:"12",lg:"7",order:"2","order-lg":"1"},{default:t(()=>[e(k,null,{default:t(()=>[e(x,null,{default:t(()=>[n("Lifetime Membership")]),_:1})]),_:1}),e(i,null,{default:t(()=>[n(" Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men. ")]),_:1}),e(i,null,{default:t(()=>[e(F)]),_:1}),e(i,{class:"d-flex justify-center"},{default:t(()=>[l("div",st,[l("p",ot,[e(V,{color:"primary",icon:"ri-lock-unlock-line"}),it]),l("p",rt,[e(V,{color:"primary",icon:"ri-user-line"}),ut])]),b.$vuetify.display.smAndUp?(y(),z(F,{key:0,vertical:"",inset:""})):Be("",!0),l("div",dt,[l("p",ct,[e(V,{color:"primary",icon:"ri-star-line"}),mt]),l("p",ft,[e(V,{color:"primary",icon:"ri-pie-chart-2-line"}),_t])])]),_:1})]),_:1}),e(h,{cols:"12",sm:"4",md:"12",lg:"5",order:"1","order-lg":"2",class:"member-pricing-bg text-center"},{default:t(()=>[l("div",ht,[pt,vt,e(c,{class:"mt-8"},{default:t(()=>[n(" Contact Now ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",lg:"4",md:"6"},{default:t(()=>[e(g,{title:"Influencing The Influencer"},{default:t(()=>[e(i,null,{default:t(()=>[n(" Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay in touch. ")]),_:1}),e(i,null,{default:t(()=>[n(" If you're in the market for new desktops, notebooks, or PDAs, there are a myriad of choices. Here's a rundown of some of the best systems available. ")]),_:1}),e(U,null,{default:t(()=>[e(c,null,{default:t(()=>[n("Read More")]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",lg:"4",md:"6"},{default:t(()=>[e(g,{title:"The Best Answers"},{default:t(()=>[e(i,{class:"d-flex align-center flex-wrap"},{default:t(()=>[e(se,{"model-value":5,readonly:"",density:"compact",class:"me-3"}),gt]),_:1}),e(i,null,{default:t(()=>[n(" If you are looking for a new way to promote your business that won't cost you more money, maybe printing is one of the options you won't resist. ")]),_:1}),e(i,null,{default:t(()=>[n(" become fast, easy and simple. If you want your promotional material to be an eye-catching ")]),_:1}),e(U,null,{default:t(()=>[e(c,null,{default:t(()=>[n("Location")]),_:1}),e(c,null,{default:t(()=>[n("Reviews")]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"6",lg:"4"},{default:t(()=>[e(g,{class:"text-center"},{default:t(()=>[e(i,{class:"d-flex flex-column justify-center align-center"},{default:t(()=>[e(E,{color:"primary",variant:"outlined",size:"50",class:"mb-4"},{default:t(()=>[e(V,{size:"2rem",icon:"ri-question-line"})]),_:1}),bt]),_:1}),e(i,null,{default:t(()=>[yt]),_:1}),e(i,{class:"justify-center"},{default:t(()=>[e(c,{variant:"elevated"},{default:t(()=>[n(" Contact Now ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),xt=Me(wt,[["__scopeId","data-v-5a2888fc"]]),oe="Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards...",kt=j({__name:"CardNavigation",setup(a){const v=W("ITEM ONE"),r=W("ITEM ONE"),b=["ITEM ONE","ITEM TWO","ITEM THREE"];return(w,s)=>(y(),z(D,null,{default:t(()=>[e(h,{md:"6",cols:"12"},{default:t(()=>[e(g,null,{default:t(()=>[e(te,{modelValue:p(v),"onUpdate:modelValue":s[0]||(s[0]=o=>P(v)?v.value=o:null)},{default:t(()=>[(y(),B(C,null,A(b,o=>e(ae,{key:o,value:o},{default:t(()=>[n(I(o),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(le,{modelValue:p(v),"onUpdate:modelValue":s[1]||(s[1]=o=>P(v)?v.value=o:null)},{default:t(()=>[(y(),B(C,null,A(b,o=>e(ne,{key:o,value:o},{default:t(()=>[e(k,null,{default:t(()=>[e(x,null,{default:t(()=>[n("Navigation Card")]),_:1})]),_:1}),e(i,null,{default:t(()=>[n(I(oe))]),_:1}),e(i,null,{default:t(()=>[e(c,null,{default:t(()=>[n("Learn More")]),_:1})]),_:1})]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(h,{md:"6",cols:"12"},{default:t(()=>[e(g,null,{default:t(()=>[e(te,{modelValue:p(r),"onUpdate:modelValue":s[2]||(s[2]=o=>P(r)?r.value=o:null),"align-tabs":"center"},{default:t(()=>[(y(),B(C,null,A(b,o=>e(ae,{key:o,value:o},{default:t(()=>[n(I(o),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(le,{modelValue:p(r),"onUpdate:modelValue":s[3]||(s[3]=o=>P(r)?r.value=o:null)},{default:t(()=>[(y(),B(C,null,A(b,o=>e(ne,{key:o,value:o,class:"text-center"},{default:t(()=>[e(k,null,{default:t(()=>[e(x,null,{default:t(()=>[n("Navigation Card")]),_:1})]),_:1}),e(i,null,{default:t(()=>[n(I(oe))]),_:1}),e(i,null,{default:t(()=>[e(c,null,{default:t(()=>[n("Learn More")]),_:1})]),_:1})]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}}),It=""+new URL("avatar-8.DkWluxoH.png",import.meta.url).href,Vt={class:"clamp-text text-white mb-0"},Ct={class:"text-no-wrap"},Bt={class:"text-white ms-2"},Lt={class:"d-flex align-center"},Tt={class:"text-subtitle-2 text-white me-4"},St={class:"text-subtitle-2 text-white"},At=j({__name:"CardSolid",setup(a){const v=[{cardBg:"#16B1FF",title:"Twitter Card",icon:"ri-twitter-line",text:'"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',avatarImg:ie,avatarName:"Mary Vaughn",likes:"1.2k",share:"80"},{cardBg:"#3B5998",title:"Facebook Card",icon:"ri-facebook-circle-line",text:"You've read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients.",avatarImg:q,avatarName:"Eugene Clarke",likes:"3.2k",share:"49"},{cardBg:"#007BB6",title:"LinkedIn Card",icon:"ri-linkedin-box-line",text:"With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is directed.",avatarImg:It,avatarName:"Anne Burke1",likes:"1.2k",share:"80"}];return(r,b)=>{const w=Se("IconBtn");return y(),z(D,null,{default:t(()=>[(y(),B(C,null,A(v,s=>e(h,{key:s.icon,cols:"12",md:"6",lg:"4"},{default:t(()=>[e(g,{color:s.cardBg},{default:t(()=>[e(k,null,{prepend:t(()=>[e(V,{size:"1.9rem",color:"white",icon:s.icon},null,8,["icon"])]),default:t(()=>[e(x,{class:"text-white"},{default:t(()=>[n(I(s.title),1)]),_:2},1024)]),_:2},1024),e(i,null,{default:t(()=>[l("p",Vt,I(s.text),1)]),_:2},1024),e(i,{class:"d-flex justify-space-between align-center flex-wrap"},{default:t(()=>[l("div",Ct,[e(E,{size:"34",image:s.avatarImg},null,8,["image"]),l("span",Bt,I(s.avatarName),1)]),l("div",Lt,[e(w,{icon:"ri-heart-line",color:"white",class:"me-1"}),l("span",Tt,I(s.likes),1),e(w,{icon:"ri-share-line",color:"white",class:"me-1"}),l("span",St,I(s.share),1)])]),_:2},1024)]),_:2},1032,["color"])]),_:2},1024)),64))]),_:1})}}}),Rt=l("p",{class:"text-2xl mb-6"}," Basic Cards ",-1),Ut=l("p",{class:"text-2xl mb-6 mt-14"}," Navigation Cards ",-1),Mt=l("p",{class:"text-2xl mt-14 mb-6"}," Solid Cards ",-1),Kt=j({__name:"card-basic",setup(a){return(v,r)=>(y(),B("div",null,[Rt,e(xt),Ut,e(kt),Mt,e(At)]))}});export{Kt as default};