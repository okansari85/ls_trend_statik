import{d as T,r as i,U as E,W as M,E as U,o as h,m as B,b as a,a as o,e as V,u as e,p as R,f as j,c as A,h as g,t as N,i as P,M as S,O as p,X as F}from"./CfGkcj_x.js";import{l as I}from"./3VvzMcdG.js";import{a as q,b as D,c as L,d as z}from"./DCq_rTV5.js";import{b as G,V as O,a as W}from"./BR2ghWlW.js";import{V as X,a as v}from"./uBBX_7ss.js";import{V as $,a as f}from"./CEag6pLT.js";import{V as H}from"./DeVumNIn.js";import{V as J}from"./DnfRf-M9.js";import"./C69wVWO-.js";import"./DrgXVpKh.js";import"./DY7PVvcf.js";import"./C-GTDzx5.js";/* empty css        */const K={class:"auth-wrapper d-flex align-center justify-center pa-4"},Q=["src"],Y={class:"d-flex align-center justify-space-between flex-wrap mt-1 mb-4"},Z=V("a",{class:"ms-2 mb-1",href:"javascript:void(0)"}," Şifremi Unuttum? ",-1),fe=T({__name:"login",setup(ee){const r=i({email:"",password:"",remember:!1}),d=i(!1),b=i(),u=i(!1),m=i(),w=E(),{login:k}=M(),y=[l=>!!l||"Email is required",l=>/.+@.+\..+/.test(l)||"Email must be valid"],_=[l=>!!l||"Password is required",l=>l.length>=6||"Password must be at least 6 characters"],x=async()=>{var l,s,t;if((l=b.value)==null||l.validate(),d.value){u.value=!0,m.value="";try{await k(r.value).then(n=>{console.log(n)})}catch(n){if(n instanceof F&&((s=n.response)==null?void 0:s.status)===422){m.value=((t=n.response)==null?void 0:t._data.message)||"An error occurred";return}m.value=n||"An error occurred"}finally{u.value=!1}}},C=U(()=>w.global.name.value==="light"?L:z),c=i(!1);return(l,s)=>(h(),B("div",K,[a(W,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:o(()=>[a(G,{class:"justify-center"},{prepend:o(()=>[V("img",{src:e(I),width:"175",role:"link"},null,8,Q)]),_:1}),a(O,null,{default:o(()=>[a(X,{ref_key:"loginform",ref:b,modelValue:e(d),"onUpdate:modelValue":s[4]||(s[4]=t=>R(d)?d.value=t:null),"lazy-validation":"",onSubmit:j(()=>{},["prevent"])},{default:o(()=>[a($,null,{default:o(()=>[a(f,{cols:"12"},{default:o(()=>[a(v,{modelValue:e(r).email,"onUpdate:modelValue":s[0]||(s[0]=t=>e(r).email=t),label:"Email",type:"email",rules:y},null,8,["modelValue"])]),_:1}),a(f,{cols:"12"},{default:o(()=>[a(v,{modelValue:e(r).password,"onUpdate:modelValue":s[1]||(s[1]=t=>e(r).password=t),label:"Password",placeholder:"············",rules:_,type:e(c)?"text":"password","append-inner-icon":e(c)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":s[2]||(s[2]=t=>c.value=!e(c))},null,8,["modelValue","type","append-inner-icon"]),V("div",Y,[a(H,{modelValue:e(r).remember,"onUpdate:modelValue":s[3]||(s[3]=t=>e(r).remember=t),label:"Remember me"},null,8,["modelValue"]),Z]),e(m)?(h(),A(J,{key:0,type:"error",class:"mb-3"},{default:o(()=>[g(N(e(m)),1)]),_:1})):P("",!0),a(S,{block:"",type:"submit",to:"/",disabled:!e(d)||e(u),loading:e(u),onClick:x},{default:o(()=>[g(" Sisteme Giriş ")]),_:1},8,["disabled","loading"])]),_:1}),a(f,{cols:"12",class:"d-flex align-center"})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(p,{class:"auth-footer-start-tree d-none d-md-block",src:e(q),width:250},null,8,["src"]),a(p,{src:e(D),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),a(p,{class:"auth-footer-mask d-none d-md-block",src:e(C)},null,8,["src"])]))}});export{fe as default};
