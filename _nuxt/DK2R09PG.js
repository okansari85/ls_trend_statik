import{m as g,b as A,u as B,c as t,d as l}from"./Ct21aBf_.js";import{s as F,ad as I,B as U,E as M,M as R,G as D,J as E,ae as G,e as u,O as r}from"./BiELtZF3.js";const J=F({...g(),...I(A(),["inline"])},"VCheckbox"),$=U()({name:"VCheckbox",inheritAttrs:!1,props:J(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:c,slots:a}=d;const s=M(e,"modelValue"),{isFocused:n,focus:i,blur:m}=B(e),V=R(),b=D(()=>e.id||`checkbox-${V}`);return E(()=>{const[p,k]=G(c),v=t.filterProps(e),f=l.filterProps(e);return u(t,r({class:["v-checkbox",e.class]},p,v,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,id:b.value,focused:n.value,style:e.style}),{...a,default:o=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C}=o;return u(l,r(f,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},k,{modelValue:s.value,"onUpdate:modelValue":y=>s.value=y,onFocus:i,onBlur:m}),a)}})}),{}}});export{$ as V};
