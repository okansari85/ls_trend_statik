import{A as c,b9 as y,bT as V,s as o,bn as f,q as C,I as k,v as P,au as S,x as z,y as h,z as A,av as b,C as x,aw as I,af as T,aB as B,b2 as R,H as D,e as u,O as F,V as O,aC as _}from"./DzPJtO7j.js";function H(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return c()({name:e??y(V(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...o()},setup(t,r){let{slots:s}=r;return()=>{var n;return f(t.tag,{class:[a,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}})}const q=C({start:Boolean,end:Boolean,icon:k,image:String,text:String,...o(),...P(),...S(),...z(),...h(),...A(),...b({variant:"flat"})},"VAvatar"),N=c()({name:"VAvatar",props:q(),setup(a,l){let{slots:e}=l;const{themeClasses:t}=x(a),{colorClasses:r,colorStyles:s,variantClasses:n}=I(a),{densityClasses:m}=T(a),{roundedClasses:v}=B(a),{sizeClasses:g,sizeStyles:d}=R(a);return D(()=>u(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},t.value,r.value,m.value,v.value,g.value,n.value,a.class],style:[s.value,d.value,a.style]},{default:()=>{var i;return[a.image?u(F,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?u(O,{key:"icon",icon:a.icon},null):((i=e.default)==null?void 0:i.call(e))??a.text,_(!1,"v-avatar")]}})),{}}});export{N as V,H as c};
