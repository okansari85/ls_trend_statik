import{a_ as Pe,bS as Ce,s as K,r as N,ax as q,b9 as ce,av as F,aW as H,bT as Ne,bU as me,bV as ne,bW as oe,bX as ye,G as C,aw as Q,bY as ge,aF as B,K as he,b6 as ue,bZ as Ae,b8 as fe,_ as pe,b_ as be,O as j,aB as He,H as G,aM as Ie,a9 as Ve,b$ as Te,a8 as We,bH as qe,bL as je,v as $e,ai as ze,A as Ye,au as Ge,B as Ke,E as Ue,D as Xe,aC as Ze,a0 as Je,Z as Qe,ao as et,bj as tt,c0 as nt,J as ot,e as W,c1 as at,aR as rt,Q as it,R as lt,a1 as st,F as ct,bK as ut,c2 as ft}from"./CjMdsmGA.js";import{g as vt,B as ae,c as we,n as dt,a as mt,s as yt}from"./DY7PVvcf.js";import{m as gt,u as ht}from"./9owewwby.js";const U=new WeakMap;function bt(e,t){Object.keys(t).forEach(n=>{if(Pe(n)){const o=Ce(n),a=U.get(e);if(t[n]==null)a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===t[n])){e.addEventListener(o,t[n]);const r=a||new Set;r.add([o,t[n]]),U.has(e)||U.set(e,r)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function wt(e,t){Object.keys(t).forEach(n=>{if(Pe(n)){const o=Ce(n),a=U.get(e);a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))})}else e.removeAttribute(n)})}function Le(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?St(e):ve(e))return e;e=e.parentElement}return document.scrollingElement}function Z(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ve(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ve(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function St(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function xt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function re(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Ot(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ee(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,r=n==="top"?0:n==="bottom"?t.height:n;return re({x:a,y:r},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,r=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return re({x:a,y:r},t)}return re({x:t.width/2,y:t.height/2},t)}const Fe={static:Ct,connected:pt},kt=K({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Fe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Pt(e,t){const n=N({}),o=N();q&&ce(()=>!!(t.isActive.value&&e.locationStrategy),r=>{var l,i;F(()=>e.locationStrategy,r),H(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation:o.value=(i=Fe[e.locationStrategy](t,e,n))==null?void 0:i.updateLocation});function a(r){var l;(l=o.value)==null||l.call(o,r)}return{contentStyles:n,updateLocation:o}}function Ct(){}function At(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right");const n=dt(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function pt(e,t,n){(Array.isArray(e.target.value)||xt(e.target.value))&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=Ne(()=>{const u=me(t.location,e.isRtl.value),f=t.origin==="overlap"?u:t.origin==="auto"?ne(u):me(t.origin,e.isRtl.value);return u.side===f.side&&u.align===oe(f).align?{preferredAnchor:ye(u),preferredOrigin:ye(f)}:{preferredAnchor:u,preferredOrigin:f}}),[l,i,d,v]=["minWidth","minHeight","maxWidth","maxHeight"].map(u=>C(()=>{const f=parseFloat(t[u]);return isNaN(f)?1/0:f})),m=C(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const u=t.offset.split(" ").map(parseFloat);return u.length<2&&u.push(0),u}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let b=!1;const O=new ResizeObserver(()=>{b&&k()});F([e.target,e.contentEl],(u,f)=>{let[A,p]=u,[w,g]=f;w&&!Array.isArray(w)&&O.unobserve(w),A&&!Array.isArray(A)&&O.observe(A),g&&O.unobserve(g),p&&O.observe(p)},{immediate:!0}),H(()=>{O.disconnect()});function k(){if(b=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>b=!0)}),!e.target.value||!e.contentEl.value)return;const u=vt(e.target.value),f=At(e.contentEl.value,e.isRtl.value),A=Z(e.contentEl.value),p=12;A.length||(A.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=A.reduce((S,h)=>{const c=h.getBoundingClientRect(),y=new ae({x:h===document.documentElement?0:c.x,y:h===document.documentElement?0:c.y,width:h.clientWidth,height:h.clientHeight});return S?new ae({x:Math.max(S.left,y.left),y:Math.max(S.top,y.top),width:Math.min(S.right,y.right)-Math.max(S.left,y.left),height:Math.min(S.bottom,y.bottom)-Math.max(S.top,y.top)}):y},void 0);w.x+=p,w.y+=p,w.width-=p*2,w.height-=p*2;let g={anchor:a.value,origin:r.value};function I(S){const h=new ae(f),c=Ee(S.anchor,u),y=Ee(S.origin,h);let{x:L,y:R}=Ot(c,y);switch(S.anchor.side){case"top":R-=m.value[0];break;case"bottom":R+=m.value[0];break;case"left":L-=m.value[0];break;case"right":L+=m.value[0];break}switch(S.anchor.align){case"top":R-=m.value[1];break;case"bottom":R+=m.value[1];break;case"left":L-=m.value[1];break;case"right":L+=m.value[1];break}return h.x+=L,h.y+=R,h.width=Math.min(h.width,d.value),h.height=Math.min(h.height,v.value),{overflows:we(h,w),x:L,y:R}}let M=0,P=0;const s={x:0,y:0},T={x:!1,y:!1};let ee=-1;for(;!(ee++>10);){const{x:S,y:h,overflows:c}=I(g);M+=S,P+=h,f.x+=S,f.y+=h;{const y=ge(g.anchor),L=c.x.before||c.x.after,R=c.y.before||c.y.after;let $=!1;if(["x","y"].forEach(x=>{if(x==="x"&&L&&!T.x||x==="y"&&R&&!T.y){const V={anchor:{...g.anchor},origin:{...g.origin}},z=x==="x"?y==="y"?oe:ne:y==="y"?ne:oe;V.anchor=z(V.anchor),V.origin=z(V.origin);const{overflows:_}=I(V);(_[x].before<=c[x].before&&_[x].after<=c[x].after||_[x].before+_[x].after<(c[x].before+c[x].after)/2)&&(g=V,$=T[x]=!0)}}),$)continue}c.x.before&&(M+=c.x.before,f.x+=c.x.before),c.x.after&&(M-=c.x.after,f.x-=c.x.after),c.y.before&&(P+=c.y.before,f.y+=c.y.before),c.y.after&&(P-=c.y.after,f.y-=c.y.after);{const y=we(f,w);s.x=w.width-y.x.before-y.x.after,s.y=w.height-y.y.before-y.y.after,M+=y.x.before,f.x+=y.x.before,P+=y.y.before,f.y+=y.y.before}break}const te=ge(g.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${g.anchor.side} ${g.anchor.align}`,transformOrigin:`${g.origin.side} ${g.origin.align}`,top:B(ie(P)),left:e.isRtl.value?void 0:B(ie(M)),right:e.isRtl.value?B(ie(-M)):void 0,minWidth:B(te==="y"?Math.min(l.value,u.width):l.value),maxWidth:B(Se(he(s.x,l.value===1/0?0:l.value,d.value))),maxHeight:B(Se(he(s.y,i.value===1/0?0:i.value,v.value)))}),{available:s,contentBox:f}}return F(()=>[a.value,r.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>k()),Q(()=>{const u=k();if(!u)return;const{available:f,contentBox:A}=u;A.height>f.y&&requestAnimationFrame(()=>{k(),requestAnimationFrame(()=>{k()})})}),{updateLocation:k}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Se(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let le=!0;const J=[];function Tt(e){!le||J.length?(J.push(e),se()):(le=!1,e(),se())}let xe=-1;function se(){cancelAnimationFrame(xe),xe=requestAnimationFrame(()=>{const e=J.shift();e&&e(),J.length?se():le=!0})}const X={none:null,close:Mt,block:Rt,reposition:Bt},Lt=K({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in X}},"VOverlay-scroll-strategies");function Ft(e,t){if(!q)return;let n;ue(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Ae(),await Q(),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=X[e.scrollStrategy])==null||o.call(X,t,e,n)}))}),H(()=>{n==null||n.stop()})}function Mt(e){function t(n){e.isActive.value=!1}Me(e.targetEl.value??e.contentEl.value,t)}function Rt(e,t){var l;const n=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...Z(e.targetEl.value,t.contained?n:void 0),...Z(e.contentEl.value,t.contained?n:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(i=>ve(i)&&i)(n||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,d)=>{i.style.setProperty("--v-body-scroll-x",B(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",B(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",B(a)),i.classList.add("v-overlay-scroll-blocked")}),H(()=>{o.forEach((i,d)=>{const v=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),m=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-v,i.scrollTop=-m}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Bt(e,t,n){let o=!1,a=-1,r=-1;function l(i){Tt(()=>{var m,b;const d=performance.now();(b=(m=e.updateLocation).value)==null||b.call(m,i),o=(performance.now()-d)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{n.run(()=>{Me(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(i)})})):l(i)})})}),H(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function Me(e,t){const n=[document,...Z(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),H(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const _t=Symbol.for("vuetify:v-menu"),Dt=K({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Nt(e,t){const n={},o=a=>()=>{if(!q)return Promise.resolve(!0);const r=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(l=>{const i=parseInt(e[a]??0,10);n[a]=window.setTimeout(()=>{t==null||t(r),l(r)},i)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const Ht=K({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Dt()},"VOverlay-activator");function It(e,t){let{isActive:n,isTop:o}=t;const a=fe("useActivator"),r=N();let l=!1,i=!1,d=!0;const v=C(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),m=C(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!v.value),{runOpenDelay:b,runCloseDelay:O}=Nt(e,s=>{s===(e.openOnHover&&l||v.value&&i)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==s&&(d=!0),n.value=s)}),k=N(),u={onClick:s=>{s.stopPropagation(),r.value=s.currentTarget||s.target,n.value||(k.value=[s.clientX,s.clientY]),n.value=!n.value},onMouseenter:s=>{var T;(T=s.sourceCapabilities)!=null&&T.firesTouchEvents||(l=!0,r.value=s.currentTarget||s.target,b())},onMouseleave:s=>{l=!1,O()},onFocus:s=>{He(s.target,":focus-visible")!==!1&&(i=!0,s.stopPropagation(),r.value=s.currentTarget||s.target,b())},onBlur:s=>{i=!1,s.stopPropagation(),O()}},f=C(()=>{const s={};return m.value&&(s.onClick=u.onClick),e.openOnHover&&(s.onMouseenter=u.onMouseenter,s.onMouseleave=u.onMouseleave),v.value&&(s.onFocus=u.onFocus,s.onBlur=u.onBlur),s}),A=C(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{l=!0,b()},s.onMouseleave=()=>{l=!1,O()}),v.value&&(s.onFocusin=()=>{i=!0,b()},s.onFocusout=()=>{i=!1,O()}),e.closeOnContentClick){const T=pe(_t,null);s.onClick=()=>{n.value=!1,T==null||T.closeParents()}}return s}),p=C(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{d&&(l=!0,d=!1,b())},s.onMouseleave=()=>{l=!1,O()}),s});F(o,s=>{s&&(e.openOnHover&&!l&&(!v.value||!i)||v.value&&!i&&(!e.openOnHover||!l))&&(n.value=!1)}),F(n,s=>{s||setTimeout(()=>{k.value=void 0})},{flush:"post"});const w=N();ue(()=>{w.value&&Q(()=>{r.value=be(w.value)})});const g=N(),I=C(()=>e.target==="cursor"&&k.value?k.value:g.value?be(g.value):Re(e.target,a)||r.value),M=C(()=>Array.isArray(I.value)?void 0:I.value);let P;return F(()=>!!e.activator,s=>{s&&q?(P=Ae(),P.run(()=>{Vt(e,a,{activatorEl:r,activatorEvents:f})})):P&&P.stop()},{flush:"post",immediate:!0}),H(()=>{P==null||P.stop()}),{activatorEl:r,activatorRef:w,target:I,targetEl:M,targetRef:g,activatorEvents:f,contentEvents:A,scrimEvents:p}}function Vt(e,t,n){let{activatorEl:o,activatorEvents:a}=n;F(()=>e.activator,(d,v)=>{if(v&&d!==v){const m=i(v);m&&l(m)}d&&Q(()=>r())},{immediate:!0}),F(()=>e.activatorProps,()=>{r()}),H(()=>{l()});function r(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&bt(d,j(a.value,v))}function l(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&wt(d,j(a.value,v))}function i(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const v=Re(d,t);return o.value=(v==null?void 0:v.nodeType)===Node.ELEMENT_NODE?v:void 0,o.value}}function Re(e,t){var o,a;if(!e)return;let n;if(e==="parent"){let r=(a=(o=t==null?void 0:t.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;n=r}else typeof e=="string"?n=document.querySelector(e):"$el"in e?n=e.$el:n=e;return n}function Wt(){if(!q)return G(!1);const{ssr:e}=Ie();if(e){const t=G(!1);return Ve(()=>{t.value=!0}),t}else return G(!0)}function qt(){const t=fe("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const Oe=Symbol.for("vuetify:stack"),Y=Te([]);function jt(e,t,n){const o=fe("useStack"),a=!n,r=pe(Oe,void 0),l=Te({activeChildren:new Set});We(Oe,l);const i=G(+t.value);ce(e,()=>{var b;const m=(b=Y.at(-1))==null?void 0:b[1];i.value=m?m+10:+t.value,a&&Y.push([o.uid,i.value]),r==null||r.activeChildren.add(o.uid),H(()=>{if(a){const O=je(Y).findIndex(k=>k[0]===o.uid);Y.splice(O,1)}r==null||r.activeChildren.delete(o.uid)})});const d=G(!0);a&&ue(()=>{var b;const m=((b=Y.at(-1))==null?void 0:b[0])===o.uid;setTimeout(()=>d.value=m)});const v=C(()=>!l.activeChildren.size);return{globalTop:qe(d),localTop:v,stackStyles:C(()=>({zIndex:i.value}))}}function $t(e){return{teleportTarget:C(()=>{const n=e.value;if(n===!0||!q)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function zt(){return!0}function Be(e,t,n){if(!e||_e(e,n)===!1)return!1;const o=Le(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(r=>r==null?void 0:r.contains(e.target))}function _e(e,t){return(typeof t.value=="object"&&t.value.closeConditional||zt)(e)}function Yt(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Be(e,t,n)&&setTimeout(()=>{_e(e,n)&&o&&o(e)},0)}function ke(e,t){const n=Le(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Gt={mounted(e,t){const n=a=>Yt(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Be(a,e,t)};ke(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(ke(e,n=>{var r;if(!n||!((r=e._clickOutside)!=null&&r[t.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Kt(e){const{modelValue:t,color:n,...o}=e;return W(ut,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&W("div",j({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Ut=K({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Ht(),...$e(),...ze(),...gt(),...kt(),...Lt(),...Ye(),...Ge()},"VOverlay"),Qt=Ke()({name:"VOverlay",directives:{ClickOutside:Gt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Ut()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const r=Ue(e,"modelValue"),l=C({get:()=>r.value,set:E=>{E&&e.disabled||(r.value=E)}}),{teleportTarget:i}=$t(C(()=>e.attach||e.contained)),{themeClasses:d}=Xe(e),{rtlClasses:v,isRtl:m}=Ze(),{hasContent:b,onAfterLeave:O}=ht(e,l),k=Je(C(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:u,localTop:f,stackStyles:A}=jt(l,Qe(e,"zIndex"),e._disableGlobalStack),{activatorEl:p,activatorRef:w,target:g,targetEl:I,targetRef:M,activatorEvents:P,contentEvents:s,scrimEvents:T}=It(e,{isActive:l,isTop:f}),{dimensionStyles:ee}=et(e),te=Wt(),{scopeId:S}=qt();F(()=>e.disabled,E=>{E&&(l.value=!1)});const h=N(),c=N(),{contentStyles:y,updateLocation:L}=Pt(e,{isRtl:m,contentEl:c,target:g,isActive:l});Ft(e,{root:h,contentEl:c,targetEl:I,isActive:l,updateLocation:L});function R(E){a("click:outside",E),e.persistent?_():l.value=!1}function $(){return l.value&&u.value}q&&F(l,E=>{E?window.addEventListener("keydown",x):window.removeEventListener("keydown",x)},{immediate:!0}),tt(()=>{q&&window.removeEventListener("keydown",x)});function x(E){var D,de;E.key==="Escape"&&u.value&&(e.persistent?_():(l.value=!1,(D=c.value)!=null&&D.contains(document.activeElement)&&((de=p.value)==null||de.focus())))}const V=nt();ce(()=>e.closeOnBack,()=>{ft(V,E=>{u.value&&l.value?(E(!1),e.persistent?_():l.value=!1):E()})});const z=N();F(()=>l.value&&(e.absolute||e.contained)&&i.value==null,E=>{if(E){const D=Et(h.value);D&&D!==document.scrollingElement&&(z.value=D.scrollTop)}});function _(){e.noClickAnimation||c.value&&mt(c.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:yt})}function De(){O(),a("afterLeave")}return ot(()=>{var E;return W(ct,null,[(E=n.activator)==null?void 0:E.call(n,{isActive:l.value,props:j({ref:w,targetRef:M},P.value,e.activatorProps)}),te.value&&b.value&&W(at,{disabled:!i.value,to:i.value},{default:()=>[W("div",j({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},d.value,v.value,e.class],style:[A.value,{top:B(z.value)},e.style],ref:h},S,o),[W(Kt,j({color:k,modelValue:l.value&&!!e.scrim},T.value),null),W(rt,{appear:!0,persisted:!0,transition:e.transition,target:g.value,onAfterLeave:De},{default:()=>{var D;return[it(W("div",j({ref:c,class:["v-overlay__content",e.contentClass],style:[ee.value,y.value]},s.value,e.contentProps),[(D=n.default)==null?void 0:D.call(n,{isActive:l})]),[[lt,l.value],[st("click-outside"),{handler:R,closeConditional:$,include:()=>[p.value]}]])]}})])]})])}),{activatorEl:p,target:g,animateClick:_,contentEl:c,globalTop:u,localTop:f,updateLocation:L}}});export{Qt as V,_t as a,Et as g,Ut as m,qt as u};
