import{_ as T}from"./gGSxT9wu.js";import{d as b,U as x,o as y,m as v,n as C,e,a as o,M as g,F as I,r as _,E as M,b as a,f as s,i as m,h as D,O as u}from"./DzPJtO7j.js";import{l as P}from"./nmMOoAIE.js";import{a as L,b as U,c as j,d as B}from"./DCq_rTV5.js";import{b as F,c as N,V as h,a as A}from"./D8XNfVJ7.js";import{V as E,a as p,b as S}from"./Ck7D-ps4.js";import{V as H,a as n}from"./Br_XV7U7.js";import{V as $}from"./B6NqKU10.js";import{V}from"./Clm6z5IP.js";import"./BcroJ4a1.js";import"./BzF9rmSQ.js";import"./DY7PVvcf.js";import"./C-GTDzx5.js";/* empty css        */const J=b({__name:"AuthProvider",setup(k){const{global:t}=x(),c=[{icon:"bxl-facebook",color:"#4267b2",colorInDark:"#4267b2"},{icon:"bxl-twitter",color:"#1da1f2",colorInDark:"#1da1f2"},{icon:"bxl-github",color:"#272727",colorInDark:"#fff"},{icon:"bxl-google",color:"#db4437",colorInDark:"#db4437"}];return(f,i)=>(y(),v(I,null,C(c,d=>e(g,{key:d.icon,icon:d.icon,variant:"text",color:o(t).name.value==="dark"?d.colorInDark:d.color},null,8,["icon","color"])),64))}}),O={class:"auth-wrapper d-flex align-center justify-center pa-4"},R={class:"d-flex"},q=["innerHTML"],z=s("h5",{class:"text-h5 font-weight-semibold mb-1"}," Adventure starts here 🚀 ",-1),G=s("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),K={class:"d-flex align-center mt-1 mb-4"},Q=s("span",{class:"me-1"},"I agree to",-1),W=s("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),X=s("span",null,"Already have an account?",-1),Y=s("span",{class:"mx-4"},"or",-1),pe=b({__name:"register",setup(k){const t=_({username:"",email:"",password:"",privacyPolicies:!1}),c=x(),f=M(()=>c.global.name.value==="light"?j:B),i=_(!1);return(d,l)=>{const w=T;return y(),v("div",O,[e(A,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:a(()=>[e(F,{class:"justify-center"},{prepend:a(()=>[s("div",R,[s("div",{innerHTML:o(P)},null,8,q)])]),default:a(()=>[e(N,{class:"font-weight-semibold text-2xl text-uppercase"},{default:a(()=>[m(" Materio ")]),_:1})]),_:1}),e(h,{class:"pt-2"},{default:a(()=>[z,G]),_:1}),e(h,null,{default:a(()=>[e(E,{onSubmit:D(()=>{},["prevent"])},{default:a(()=>[e(H,null,{default:a(()=>[e(n,{cols:"12"},{default:a(()=>[e(p,{modelValue:o(t).username,"onUpdate:modelValue":l[0]||(l[0]=r=>o(t).username=r),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(p,{modelValue:o(t).email,"onUpdate:modelValue":l[1]||(l[1]=r=>o(t).email=r),label:"Email",placeholder:"johndoe@email.com",type:"email"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(p,{modelValue:o(t).password,"onUpdate:modelValue":l[2]||(l[2]=r=>o(t).password=r),label:"Password",placeholder:"············",type:o(i)?"text":"password","append-inner-icon":o(i)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":l[3]||(l[3]=r=>i.value=!o(i))},null,8,["modelValue","type","append-inner-icon"]),s("div",K,[e($,{id:"privacy-policy",modelValue:o(t).privacyPolicies,"onUpdate:modelValue":l[4]||(l[4]=r=>o(t).privacyPolicies=r),inline:""},null,8,["modelValue"]),e(S,{for:"privacy-policy",style:{opacity:"1"}},{default:a(()=>[Q,W]),_:1})]),e(g,{block:"",type:"submit",to:"/"},{default:a(()=>[m(" Sign up ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center text-base"},{default:a(()=>[X,e(w,{class:"text-primary ms-2",to:"login"},{default:a(()=>[m(" Sign in instead ")]),_:1})]),_:1}),e(n,{cols:"12",class:"d-flex align-center"},{default:a(()=>[e(V),Y,e(V)]),_:1}),e(n,{cols:"12",class:"text-center"},{default:a(()=>[e(J)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{class:"auth-footer-start-tree d-none d-md-block",src:o(L),width:250},null,8,["src"]),e(u,{src:o(U),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),e(u,{class:"auth-footer-mask d-none d-md-block",src:o(f)},null,8,["src"])])}}});export{pe as default};