import{m as g,c as A,u as B,d as a,e as l}from"./D_YyPrlV.js";import{s as F,Z as I,B as U,E as M,M as R,G as D,J as E,_ as G,e as u,O as r}from"./DeAGUIeh.js";const J=F({...g(),...I(A(),["inline"])},"VCheckbox"),Z=U()({name:"VCheckbox",inheritAttrs:!1,props:J(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,c){let{attrs:d,slots:t}=c;const s=M(e,"modelValue"),{isFocused:n,focus:i,blur:m}=B(e),V=R(),b=D(()=>e.id||`checkbox-${V}`);return E(()=>{const[p,k]=G(d),v=a.filterProps(e),f=l.filterProps(e);return u(a,r({class:["v-checkbox",e.class]},p,v,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,id:b.value,focused:n.value,style:e.style}),{...t,default:o=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C}=o;return u(l,r(f,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},k,{modelValue:s.value,"onUpdate:modelValue":y=>s.value=y,onFocus:i,onBlur:m}),t)}})}),{}}});export{Z as V};
