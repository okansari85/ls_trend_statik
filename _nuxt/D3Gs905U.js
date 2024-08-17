import{q as F,r as d,a as v,bH as T,av as _,Z as k,bI as N,H as S,G as B,d as w,aa as C,U as E,o as V,c as I,b,e as x,V as L,f as O,t as A}from"./ByvtLLBo.js";import{V as W}from"./NTX7pwtv.js";function p(t){return typeof t=="function"?t():v(t)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const G=()=>{};function P(t,e){function s(...a){return new Promise((o,n)=>{Promise.resolve(t(()=>e.apply(this,a),{fn:e,thisArg:this,args:a})).then(o).catch(n)})}return s}const R=t=>t();function H(t=R){const e=d(!0);function s(){e.value=!1}function a(){e.value=!0}const o=(...n)=>{e.value&&t(...n)};return{isActive:T(e),pause:s,resume:a,eventFilter:o}}function $(...t){if(t.length!==1)return k(...t);const e=t[0];return typeof e=="function"?T(N(()=>({get:e,set:G}))):d(e)}function q(t,e,s={}){const{eventFilter:a=R,...o}=s;return _(t,P(a,e),o)}function y(t,e,s={}){const{eventFilter:a,...o}=s,{eventFilter:n,pause:l,resume:i,isActive:r}=H(a);return{stop:q(t,e,{...o,eventFilter:n}),pause:l,resume:i,isActive:r}}function J(t,e,...[s]){const{flush:a="sync",deep:o=!1,immediate:n=!0,direction:l="both",transform:i={}}=s||{},r=[],m="ltr"in i&&i.ltr||(u=>u),c="rtl"in i&&i.rtl||(u=>u);return(l==="both"||l==="ltr")&&r.push(y(t,u=>{r.forEach(h=>h.pause()),e.value=m(u),r.forEach(h=>h.resume())},{flush:a,deep:o,immediate:n})),(l==="both"||l==="rtl")&&r.push(y(e,u=>{r.forEach(h=>h.pause()),t.value=c(u),r.forEach(h=>h.resume())},{flush:a,deep:o,immediate:n})),()=>{r.forEach(u=>u.stop())}}function K(t=!1,e={}){const{truthyValue:s=!0,falsyValue:a=!1}=e,o=F(t),n=d(t);function l(i){if(arguments.length)return n.value=i,n.value;{const r=p(s);return n.value=n.value===r?p(a):r,n.value}}return o?l:[n,l]}function z(t,e){const s=S(m()),a=$(t),o=B({get(){var c;const f=a.value;let u=e!=null&&e.getIndexOf?e.getIndexOf(s.value,f):f.indexOf(s.value);return u<0&&(u=(c=e==null?void 0:e.fallbackIndex)!=null?c:0),u},set(c){n(c)}});function n(c){const f=a.value,u=f.length,h=(c%u+u)%u,g=f[h];return s.value=g,g}function l(c=1){return n(o.value+c)}function i(c=1){return l(c)}function r(c=1){return l(-c)}function m(){var c,f;return(f=p((c=e==null?void 0:e.initialValue)!=null?c:p(t)[0]))!=null?f:void 0}return _(a,()=>n(o.value)),{state:s,index:o,next:i,prev:r,go:n}}const D={class:"text-capitalize"},U=w({__name:"ThemeSwitcher",props:{themes:{}},setup(t){const e=t,{name:s,global:a}=C(),{state:o,next:n,index:l}=z(e.themes.map(r=>r.name),{initialValue:s}),i=()=>{a.name.value=n()};return _(()=>a.name.value,r=>{o.value=r}),(r,m)=>{const c=E("IconBtn");return V(),I(c,{onClick:i},{default:b(()=>[x(L,{icon:e.themes[v(l)].icon},null,8,["icon"]),x(W,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:b(()=>[O("span",D,A(v(o)),1)]),_:1})]),_:1})}}}),M=w({__name:"NavbarThemeSwitcher",setup(t){const e=[{name:"light",icon:"ri-sun-line"},{name:"dark",icon:"ri-moon-clear-line"}];return(s,a)=>{const o=U;return V(),I(o,{themes:e})}}});export{M as _,J as s,K as u};
