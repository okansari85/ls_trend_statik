import{m as S,u as h,V as u}from"./DmDt5i9Y.js";import{f as p}from"./C-GTDzx5.js";import{q as O,Z as x,A as T,D as A,L as k,E as e,r as w,H as C,N as d,b as H}from"./Bg_gKfMG.js";const I=O({id:String,text:String,...x(S({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),q=T()({name:"VTooltip",props:I(),emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:o}=v;const n=A(t,"modelValue"),{scopeId:m}=h(),f=k(),r=e(()=>t.id||`v-tooltip-${f}`),l=w(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),y=e(()=>d({"aria-describedby":r.value},t.activatorProps));return C(()=>{const b=u.filterProps(t);return H(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},b,{modelValue:n.value,"onUpdate:modelValue":a=>n.value=a,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},m),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),p({},l)}});export{q as V};
