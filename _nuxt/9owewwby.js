import{s as n,H as r,G as u,av as l}from"./CjMdsmGA.js";const c=n({eager:Boolean},"lazy");function m(e,o){const a=r(!1),s=u(()=>a.value||e.eager||o.value);l(o,()=>a.value=!0);function t(){e.eager||(a.value=!1)}return{isBooted:a,hasContent:s,onAfterLeave:t}}export{c as m,m as u};
