import{s as O,ad as xe,aL as Ce,B as A,as as Te,G as b,H as B,r as Y,J as X,N as W,e as m,F as ke,O as q,I as ne,v as U,aM as we,z as K,W as ze,aD as ce,aN as Ve,X as re,aO as oe,ay as Pe,aw as ve,V as ae,aP as Be,K as Re,x as Ee,E as Ie,ao as _e,a0 as $e,Z as I,Y as He,aG as N,aQ as Me,aR as de,A as Oe,D as Ae,C as Xe,a8 as Ye,Q as fe,a1 as We,a3 as Fe,_ as Le,a5 as Ge,R as De,aS as je,ax as qe}from"./BtRSq5qp.js";import{a as Ne,s as Ue}from"./DY7PVvcf.js";import{a as le}from"./yDMorXvg.js";import{m as Ke,u as Qe}from"./DDl8oAM5.js";import{u as Je}from"./DuRMbmXx.js";const he=Symbol.for("vuetify:v-tabs"),Ze=O({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...xe(Ce({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),pe=A()({name:"VTab",props:Ze(),setup(e,o){let{slots:t,attrs:n}=o;const{textColorClasses:v,textColorStyles:c}=Te(e,"sliderColor"),a=b(()=>e.direction==="horizontal"),i=B(!1),l=Y(),u=Y();function g(f){var T,r;let{value:S}=f;if(i.value=S,S){const P=(r=(T=l.value)==null?void 0:T.$el.parentElement)==null?void 0:r.querySelector(".v-tab--selected .v-tab__slider"),R=u.value;if(!P||!R)return;const _=getComputedStyle(P).color,C=P.getBoundingClientRect(),w=R.getBoundingClientRect(),h=a.value?"x":"y",y=a.value?"X":"Y",x=a.value?"right":"bottom",z=a.value?"width":"height",F=C[h],$=w[h],E=F>$?C[x]-w[x]:C[h]-w[h],L=Math.sign(E)>0?a.value?"right":"bottom":Math.sign(E)<0?a.value?"left":"top":"center",G=(Math.abs(E)+(Math.sign(E)<0?C[z]:w[z]))/Math.max(C[z],w[z])||0,k=C[z]/w[z]||0,H=1.5;Ne(R,{backgroundColor:[_,"currentcolor"],transform:[`translate${y}(${E}px) scale${y}(${k})`,`translate${y}(${E/H}px) scale${y}(${(G-1)/H+1})`,"none"],transformOrigin:Array(3).fill(L)},{duration:225,easing:Ue})}}return X(()=>{const f=W.filterProps(e);return m(W,q({symbol:he,ref:l,class:["v-tab",e.class],style:e.style,tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1},f,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":g}),{...t,default:()=>{var S;return m(ke,null,[((S=t.default)==null?void 0:S.call(t))??e.text,!e.hideSlider&&m("div",{ref:u,class:["v-tab__slider",v.value],style:c.value},null)])}})}),{}}});function se(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function ie(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:v,currentScrollOffset:c,isHorizontal:a}=e;const i=a?o.clientWidth:o.clientHeight,l=a?o.offsetLeft:o.offsetTop,u=v&&a?n-l-i:l,g=t+c,f=i+u,S=i*.4;return u<=c?c=Math.max(u-S,0):g<=f&&(c=Math.min(c-(g-f-S),n-t)),c}function et(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:v,isHorizontal:c}=e;const a=c?o.clientWidth:o.clientHeight,i=c?o.offsetLeft:o.offsetTop,l=v&&c?n-i-a/2-t/2:i+a/2-t/2;return Math.min(n-t,Math.max(0,l))}const tt=Symbol.for("vuetify:v-slide-group"),me=O({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:tt},nextIcon:{type:ne,default:"$next"},prevIcon:{type:ne,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...U(),...we(),...K(),...ze({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ue=A()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{isRtl:n}=ce(),{displayClasses:v,mobile:c}=Ve(e),a=re(e,e.symbol),i=B(!1),l=B(0),u=B(0),g=B(0),f=b(()=>e.direction==="horizontal"),{resizeRef:S,contentRect:T}=oe(),{resizeRef:r,contentRect:P}=oe(),R=b(()=>a.selected.value.length?a.items.value.findIndex(s=>s.id===a.selected.value[0]):-1),_=b(()=>a.selected.value.length?a.items.value.findIndex(s=>s.id===a.selected.value[a.selected.value.length-1]):-1);if(Pe){let s=-1;ve(()=>[a.selected.value,T.value,P.value,f.value],()=>{cancelAnimationFrame(s),s=requestAnimationFrame(()=>{if(T.value&&P.value){const d=f.value?"width":"height";u.value=T.value[d],g.value=P.value[d],i.value=u.value+1<g.value}if(R.value>=0&&r.value){const d=r.value.children[_.value];R.value===0||!i.value?l.value=0:e.centerActive?l.value=et({selectedElement:d,containerSize:u.value,contentSize:g.value,isRtl:n.value,isHorizontal:f.value}):i.value&&(l.value=ie({selectedElement:d,containerSize:u.value,contentSize:g.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:f.value}))}})})}const C=B(!1);let w=0,h=0;function y(s){const d=f.value?"clientX":"clientY";h=(n.value&&f.value?-1:1)*l.value,w=s.touches[0][d],C.value=!0}function x(s){if(!i.value)return;const d=f.value?"clientX":"clientY",V=n.value&&f.value?-1:1;l.value=V*(h+w-s.touches[0][d])}function z(s){const d=g.value-u.value;l.value<0||!i.value?l.value=0:l.value>=d&&(l.value=d),C.value=!1}function F(){S.value&&(S.value[f.value?"scrollLeft":"scrollTop"]=0)}const $=B(!1);function E(s){if($.value=!0,!(!i.value||!r.value)){for(const d of s.composedPath())for(const V of r.value.children)if(V===d){l.value=ie({selectedElement:V,containerSize:u.value,contentSize:g.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:f.value});return}}}function L(s){$.value=!1}function Q(s){var d;!$.value&&!(s.relatedTarget&&((d=r.value)!=null&&d.contains(s.relatedTarget)))&&k()}function G(s){r.value&&(f.value?s.key==="ArrowRight"?k(n.value?"prev":"next"):s.key==="ArrowLeft"&&k(n.value?"next":"prev"):s.key==="ArrowDown"?k("next"):s.key==="ArrowUp"&&k("prev"),s.key==="Home"?k("first"):s.key==="End"&&k("last"))}function k(s){var d,V,p,ee,te;if(r.value)if(!s)(d=Be(r.value)[0])==null||d.focus();else if(s==="next"){const M=(V=r.value.querySelector(":focus"))==null?void 0:V.nextElementSibling;M?M.focus():k("first")}else if(s==="prev"){const M=(p=r.value.querySelector(":focus"))==null?void 0:p.previousElementSibling;M?M.focus():k("last")}else s==="first"?(ee=r.value.firstElementChild)==null||ee.focus():s==="last"&&((te=r.value.lastElementChild)==null||te.focus())}function H(s){const d=l.value+(s==="prev"?-1:1)*u.value;l.value=Re(d,0,g.value-u.value)}const Se=b(()=>{let s=l.value>g.value-u.value?-(g.value-u.value)+se(g.value-u.value-l.value):-l.value;l.value<=0&&(s=se(-l.value));const d=n.value&&f.value?-1:1;return{transform:`translate${f.value?"X":"Y"}(${d*s}px)`,transition:C.value?"none":"",willChange:C.value?"transform":""}}),D=b(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),j=b(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!c.value;case!0:return i.value||Math.abs(l.value)>0;case"mobile":return c.value||i.value||Math.abs(l.value)>0;default:return!c.value&&(i.value||Math.abs(l.value)>0)}}),J=b(()=>Math.abs(l.value)>0),Z=b(()=>g.value>Math.abs(l.value)+u.value);return X(()=>m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!f.value,"v-slide-group--has-affixes":j.value,"v-slide-group--is-overflowing":i.value},v.value,e.class],style:e.style,tabindex:$.value||a.selected.value.length?-1:0,onFocus:Q},{default:()=>{var s,d,V;return[j.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!J.value}],onClick:()=>J.value&&H("prev")},[((s=t.prev)==null?void 0:s.call(t,D.value))??m(le,null,{default:()=>[m(ae,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:S,class:"v-slide-group__container",onScroll:F},[m("div",{ref:r,class:"v-slide-group__content",style:Se.value,onTouchstartPassive:y,onTouchmovePassive:x,onTouchendPassive:z,onFocusin:E,onFocusout:L,onKeydown:G},[(d=t.default)==null?void 0:d.call(t,D.value)])]),j.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Z.value}],onClick:()=>Z.value&&H("next")},[((V=t.next)==null?void 0:V.call(t,D.value))??m(le,null,{default:()=>[m(ae,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:H,scrollOffset:l,focus:k}}});function nt(e){return e?e.map(o=>Me(o)?o:{text:o,value:o}):[]}const ot=O({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...me({mandatory:"force"}),...Ee(),...K()},"VTabs"),St=A()({name:"VTabs",props:ot(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=Ie(e,"modelValue"),v=b(()=>nt(e.items)),{densityClasses:c}=_e(e),{backgroundColorClasses:a,backgroundColorStyles:i}=$e(I(e,"bgColor"));return He({VTab:{color:I(e,"color"),direction:I(e,"direction"),stacked:I(e,"stacked"),fixed:I(e,"fixedTabs"),sliderColor:I(e,"sliderColor"),hideSlider:I(e,"hideSlider")}}),X(()=>{const l=ue.filterProps(e);return m(ue,q(l,{modelValue:n.value,"onUpdate:modelValue":u=>n.value=u,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},c.value,a.value,e.class],style:[{"--v-tabs-height":N(e.height)},i.value,e.style],role:"tablist",symbol:he}),{default:()=>[t.default?t.default():v.value.map(u=>m(pe,q(u,{key:u.text}),null))]})}),{}}}),at=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:v}=e,c=.5,a=16;e.offsetX=t-o,e.offsetY=v-n,Math.abs(e.offsetY)<c*Math.abs(e.offsetX)&&(e.left&&t<o-a&&e.left(e),e.right&&t>o+a&&e.right(e)),Math.abs(e.offsetX)<c*Math.abs(e.offsetY)&&(e.up&&v<n-a&&e.up(e),e.down&&v>n+a&&e.down(e))};function lt(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function st(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),at(o)}function it(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function ut(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>lt(t,o),touchend:t=>st(t,o),touchmove:t=>it(t,o)}}function ct(e,o){var i;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,v=(t==null?void 0:t.options)??{passive:!0},c=(i=o.instance)==null?void 0:i.$.uid;if(!n||!c)return;const a=ut(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[c]=a,de(a).forEach(l=>{n.addEventListener(l,a[l],v)})}function rt(e,o){var c,a;const t=(c=o.value)!=null&&c.parent?e.parentElement:e,n=(a=o.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const v=t._touchHandlers[n];de(v).forEach(i=>{t.removeEventListener(i,v[i])}),delete t._touchHandlers[n]}const ge={mounted:ct,unmounted:rt},vt=ge,ye=Symbol.for("vuetify:v-window"),be=Symbol.for("vuetify:v-window-group"),dt=O({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...U(),...K(),...Oe()},"VWindow"),xt=A()({name:"VWindow",directives:{Touch:ge},props:dt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=Ae(e),{isRtl:v}=ce(),{t:c}=Xe(),a=re(e,be),i=Y(),l=b(()=>v.value?!e.reverse:e.reverse),u=B(!1),g=b(()=>{const h=e.direction==="vertical"?"y":"x",x=(l.value?!u.value:u.value)?"-reverse":"";return`v-window-${h}${x}-transition`}),f=B(0),S=Y(void 0),T=b(()=>a.items.value.findIndex(h=>a.selected.value.includes(h.id)));ve(T,(h,y)=>{const x=a.items.value.length,z=x-1;x<=2?u.value=h<y:h===z&&y===0?u.value=!0:h===0&&y===z?u.value=!1:u.value=h<y}),Ye(ye,{transition:g,isReversed:u,transitionCount:f,transitionHeight:S,rootRef:i});const r=b(()=>e.continuous||T.value!==0),P=b(()=>e.continuous||T.value!==a.items.value.length-1);function R(){r.value&&a.prev()}function _(){P.value&&a.next()}const C=b(()=>{const h=[],y={icon:v.value?e.nextIcon:e.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:a.prev,ariaLabel:c("$vuetify.carousel.prev")};h.push(r.value?t.prev?t.prev({props:y}):m(W,y,null):m("div",null,null));const x={icon:v.value?e.prevIcon:e.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:a.next,ariaLabel:c("$vuetify.carousel.next")};return h.push(P.value?t.next?t.next({props:x}):m(W,x,null):m("div",null,null)),h}),w=b(()=>e.touch===!1?e.touch:{...{left:()=>{l.value?R():_()},right:()=>{l.value?_():R()},start:y=>{let{originalEvent:x}=y;x.stopPropagation()}},...e.touch===!0?{}:e.touch});return X(()=>fe(m(e.tag,{ref:i,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var h,y;return[m("div",{class:"v-window__container",style:{height:S.value}},[(h=t.default)==null?void 0:h.call(t,{group:a}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[C.value])]),(y=t.additional)==null?void 0:y.call(t,{group:a})]}}),[[We("touch"),w.value]])),{group:a}}}),ft=O({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...U(),...Fe(),...Ke()},"VWindowItem"),Ct=A()({name:"VWindowItem",directives:{Touch:vt},props:ft(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=Le(ye),v=Ge(e,be),{isBooted:c}=Je();if(!n||!v)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=B(!1),i=b(()=>c.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function l(){!a.value||!n||(a.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function u(){var r;a.value||!n||(a.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=N((r=n.rootRef.value)==null?void 0:r.clientHeight)),n.transitionCount.value+=1)}function g(){l()}function f(r){a.value&&qe(()=>{!i.value||!a.value||!n||(n.transitionHeight.value=N(r.clientHeight))})}const S=b(()=>{const r=n.isReversed.value?e.reverseTransition:e.transition;return i.value?{name:typeof r!="string"?n.transition.value:r,onBeforeEnter:u,onAfterEnter:l,onEnterCancelled:g,onBeforeLeave:u,onAfterLeave:l,onLeaveCancelled:g,onEnter:f}:!1}),{hasContent:T}=Qe(e,v.isSelected);return X(()=>m(je,{transition:S.value,disabled:!c.value},{default:()=>{var r;return[fe(m("div",{class:["v-window-item",v.selectedClass.value,e.class],style:e.style},[T.value&&((r=t.default)==null?void 0:r.call(t))]),[[De,v.isSelected.value]])]}})),{groupItem:v}}});export{pe as V,St as a,Ct as b,xt as c};
