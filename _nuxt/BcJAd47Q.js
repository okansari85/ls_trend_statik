import{m as O,u as S,V as u}from"./CVIILcFq.js";import{f as h}from"./C-GTDzx5.js";import{s as p,ad as x,B as T,E as k,M as w,G as e,r as A,J as B,O as d,e as C}from"./BZTnykiJ.js";const G=p({id:String,text:String,...x(O({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),U=T()({name:"VTooltip",props:G(),emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:o}=v;const n=k(t,"modelValue"),{scopeId:m}=S(),f=w(),r=e(()=>t.id||`v-tooltip-${f}`),l=A(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),y=e(()=>d({"aria-describedby":r.value},t.activatorProps));return B(()=>{const b=u.filterProps(t);return C(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},b,{modelValue:n.value,"onUpdate:modelValue":a=>n.value=a,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},m),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),h({},l)}});export{U as V};