import{B as c,bb as y,bR as V,v as o,bp as f,s as k,I as P,x as z,ax as C,y as S,z as h,A as b,ay as x,D as A,az as I,ai as R,aE as B,b4 as D,J as F,e as u,P as T,V as _,aF as E}from"./DkOmN_ZY.js";function O(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return c()({name:e??y(V(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...o()},setup(t,r){let{slots:s}=r;return()=>{var n;return f(t.tag,{class:[a,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}})}const J=k({start:Boolean,end:Boolean,icon:P,image:String,text:String,...o(),...z(),...C(),...S(),...h(),...b(),...x({variant:"flat"})},"VAvatar"),j=c()({name:"VAvatar",props:J(),setup(a,l){let{slots:e}=l;const{themeClasses:t}=A(a),{colorClasses:r,colorStyles:s,variantClasses:n}=I(a),{densityClasses:m}=R(a),{roundedClasses:v}=B(a),{sizeClasses:g,sizeStyles:d}=D(a);return F(()=>u(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},t.value,r.value,m.value,v.value,g.value,n.value,a.class],style:[s.value,d.value,a.style]},{default:()=>{var i;return[a.image?u(T,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?u(_,{key:"icon",icon:a.icon},null):((i=e.default)==null?void 0:i.call(e))??a.text,E(!1,"v-avatar")]}})),{}}});export{j as V,O as c};