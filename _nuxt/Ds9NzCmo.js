import{d as T,r as i,aa as j,ab as B,G as E,o as h,n as M,e as a,b as o,f as V,a as e,q as N,h as P,c as R,i as g,t as U,j as A,N as S,P as p,ac as q}from"./DMthbBNn.js";import{l as F}from"./BVLk3KPg.js";import{a as I,b as D,c as G,d as L}from"./DCq_rTV5.js";import{b as z,V as $,a as H}from"./DHGVTtK0.js";import{V as J,a as v}from"./CoL3pUQR.js";import{V as K,a as f}from"./nj8ah9I9.js";import{V as O}from"./DeDPS-zl.js";import{V as Q}from"./B9onFkGY.js";import"./B5JTGntr.js";import"./ChHKircD.js";import"./DY7PVvcf.js";import"./C-GTDzx5.js";/* empty css        */const W={class:"auth-wrapper d-flex align-center justify-center pa-4"},X=["src"],Y={class:"d-flex align-center justify-space-between flex-wrap mt-1 mb-4"},Z=V("a",{class:"ms-2 mb-1",href:"javascript:void(0)"}," Şifremi Unuttum? ",-1),fe=T({__name:"login",setup(ee){const r=i({email:"",password:"",remember:!1}),d=i(!1),b=i(),u=i(!1),m=i(),w=j(),{login:k}=B(),y=[l=>!!l||"Email is required",l=>/.+@.+\..+/.test(l)||"Email must be valid"],_=[l=>!!l||"Password is required",l=>l.length>=6||"Password must be at least 6 characters"],x=async()=>{var l,s,t;if((l=b.value)==null||l.validate(),d.value){u.value=!0,m.value="";try{await k(r.value).then(n=>{console.log(n)})}catch(n){if(n instanceof q&&((s=n.response)==null?void 0:s.status)===422){m.value=((t=n.response)==null?void 0:t._data.message)||"An error occurred";return}m.value=n||"An error occurred"}finally{u.value=!1}}},C=E(()=>w.global.name.value==="light"?G:L),c=i(!1);return(l,s)=>(h(),M("div",W,[a(H,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:o(()=>[a(z,{class:"justify-center"},{prepend:o(()=>[V("img",{src:e(F),width:"175",role:"link"},null,8,X)]),_:1}),a($,null,{default:o(()=>[a(J,{ref_key:"loginform",ref:b,modelValue:e(d),"onUpdate:modelValue":s[4]||(s[4]=t=>N(d)?d.value=t:null),"lazy-validation":"",onSubmit:P(()=>{},["prevent"])},{default:o(()=>[a(K,null,{default:o(()=>[a(f,{cols:"12"},{default:o(()=>[a(v,{modelValue:e(r).email,"onUpdate:modelValue":s[0]||(s[0]=t=>e(r).email=t),label:"Email",type:"email",rules:y},null,8,["modelValue"])]),_:1}),a(f,{cols:"12"},{default:o(()=>[a(v,{modelValue:e(r).password,"onUpdate:modelValue":s[1]||(s[1]=t=>e(r).password=t),label:"Password",placeholder:"············",rules:_,type:e(c)?"text":"password","append-inner-icon":e(c)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":s[2]||(s[2]=t=>c.value=!e(c))},null,8,["modelValue","type","append-inner-icon"]),V("div",Y,[a(O,{modelValue:e(r).remember,"onUpdate:modelValue":s[3]||(s[3]=t=>e(r).remember=t),label:"Remember me"},null,8,["modelValue"]),Z]),e(m)?(h(),R(Q,{key:0,type:"error",class:"mb-3"},{default:o(()=>[g(U(e(m)),1)]),_:1})):A("",!0),a(S,{block:"",type:"submit",to:"/",disabled:!e(d)||e(u),loading:e(u),onClick:x},{default:o(()=>[g(" Sisteme Giriş ")]),_:1},8,["disabled","loading"])]),_:1}),a(f,{cols:"12",class:"d-flex align-center"})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(p,{class:"auth-footer-start-tree d-none d-md-block",src:e(I),width:250},null,8,["src"]),a(p,{src:e(D),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),a(p,{class:"auth-footer-mask d-none d-md-block",src:e(C)},null,8,["src"])]))}});export{fe as default};
