import{B as c,bb as y,bR as V,v as m,bp as f,s as k,I as P,x as C,a4 as S,y as z,z as h,A as b,al as A,D as x,am as I,an as R,a7 as B,b4 as D,J as T,e as u,P as F,V as _,as as J}from"./CjMdsmGA.js";function j(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return c()({name:e??y(V(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...m()},setup(t,r){let{slots:s}=r;return()=>{var n;return f(t.tag,{class:[a,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}})}const N=k({start:Boolean,end:Boolean,icon:P,image:String,text:String,...m(),...C(),...S(),...z(),...h(),...b(),...A({variant:"flat"})},"VAvatar"),q=c()({name:"VAvatar",props:N(),setup(a,l){let{slots:e}=l;const{themeClasses:t}=x(a),{colorClasses:r,colorStyles:s,variantClasses:n}=I(a),{densityClasses:o}=R(a),{roundedClasses:v}=B(a),{sizeClasses:g,sizeStyles:d}=D(a);return T(()=>u(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},t.value,r.value,o.value,v.value,g.value,n.value,a.class],style:[s.value,d.value,a.style]},{default:()=>{var i;return[a.image?u(F,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?u(_,{key:"icon",icon:a.icon},null):((i=e.default)==null?void 0:i.call(e))??a.text,J(!1,"v-avatar")]}})),{}}});export{q as V,j as c};
