import{p as F,r as d,u as v,bG as T,af as _,a1 as k,bH as N,G as E,E as S,d as w,U as B,T as C,o as V,c as R,a as b,b as x,V as L,e as O,t as A}from"./vYfyk_-s.js";import{V as G}from"./xJ_4hwIj.js";function p(t){return typeof t=="function"?t():v(t)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const W=()=>{};function P(t,e){function s(...a){return new Promise((o,n)=>{Promise.resolve(t(()=>e.apply(this,a),{fn:e,thisArg:this,args:a})).then(o).catch(n)})}return s}const I=t=>t();function $(t=I){const e=d(!0);function s(){e.value=!1}function a(){e.value=!0}const o=(...n)=>{e.value&&t(...n)};return{isActive:T(e),pause:s,resume:a,eventFilter:o}}function z(...t){if(t.length!==1)return k(...t);const e=t[0];return typeof e=="function"?T(N(()=>({get:e,set:W}))):d(e)}function D(t,e,s={}){const{eventFilter:a=I,...o}=s;return _(t,P(a,e),o)}function y(t,e,s={}){const{eventFilter:a,...o}=s,{eventFilter:n,pause:l,resume:i,isActive:r}=$(a);return{stop:D(t,e,{...o,eventFilter:n}),pause:l,resume:i,isActive:r}}function K(t,e,...[s]){const{flush:a="sync",deep:o=!1,immediate:n=!0,direction:l="both",transform:i={}}=s||{},r=[],m="ltr"in i&&i.ltr||(u=>u),c="rtl"in i&&i.rtl||(u=>u);return(l==="both"||l==="ltr")&&r.push(y(t,u=>{r.forEach(h=>h.pause()),e.value=m(u),r.forEach(h=>h.resume())},{flush:a,deep:o,immediate:n})),(l==="both"||l==="rtl")&&r.push(y(e,u=>{r.forEach(h=>h.pause()),t.value=c(u),r.forEach(h=>h.resume())},{flush:a,deep:o,immediate:n})),()=>{r.forEach(u=>u.stop())}}function M(t=!1,e={}){const{truthyValue:s=!0,falsyValue:a=!1}=e,o=F(t),n=d(t);function l(i){if(arguments.length)return n.value=i,n.value;{const r=p(s);return n.value=n.value===r?p(a):r,n.value}}return o?l:[n,l]}function H(t,e){const s=E(m()),a=z(t),o=S({get(){var c;const f=a.value;let u=e!=null&&e.getIndexOf?e.getIndexOf(s.value,f):f.indexOf(s.value);return u<0&&(u=(c=e==null?void 0:e.fallbackIndex)!=null?c:0),u},set(c){n(c)}});function n(c){const f=a.value,u=f.length,h=(c%u+u)%u,g=f[h];return s.value=g,g}function l(c=1){return n(o.value+c)}function i(c=1){return l(c)}function r(c=1){return l(-c)}function m(){var c,f;return(f=p((c=e==null?void 0:e.initialValue)!=null?c:p(t)[0]))!=null?f:void 0}return _(a,()=>n(o.value)),{state:s,index:o,next:i,prev:r,go:n}}const U={class:"text-capitalize"},j=w({__name:"ThemeSwitcher",props:{themes:{}},setup(t){const e=t,{name:s,global:a}=B(),{state:o,next:n,index:l}=H(e.themes.map(r=>r.name),{initialValue:s}),i=()=>{a.name.value=n()};return _(()=>a.name.value,r=>{o.value=r}),(r,m)=>{const c=C("IconBtn");return V(),R(c,{onClick:i},{default:b(()=>[x(L,{icon:e.themes[v(l)].icon},null,8,["icon"]),x(G,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:b(()=>[O("span",U,A(v(o)),1)]),_:1})]),_:1})}}}),Q=w({__name:"NavbarThemeSwitcher",setup(t){const e=[{name:"light",icon:"ri-sun-line"},{name:"dark",icon:"ri-moon-clear-line"}];return(s,a)=>{const o=j;return V(),R(o,{themes:e})}}});export{Q as _,K as s,M as u};
