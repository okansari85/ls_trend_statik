import{B as c,bc as y,bS as V,v as o,bq as f,s as k,I as P,x as S,a4 as C,y as z,z as h,A,am as b,D as x,an as I,ao as B,a7 as D,b5 as R,J as T,e as u,P as F,V as _,at as q}from"./BZTnykiJ.js";function O(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return c()({name:e??y(V(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...o()},setup(t,r){let{slots:s}=r;return()=>{var n;return f(t.tag,{class:[a,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}})}const J=k({start:Boolean,end:Boolean,icon:P,image:String,text:String,...o(),...S(),...C(),...z(),...h(),...A(),...b({variant:"flat"})},"VAvatar"),j=c()({name:"VAvatar",props:J(),setup(a,l){let{slots:e}=l;const{themeClasses:t}=x(a),{colorClasses:r,colorStyles:s,variantClasses:n}=I(a),{densityClasses:m}=B(a),{roundedClasses:v}=D(a),{sizeClasses:g,sizeStyles:d}=R(a);return T(()=>u(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},t.value,r.value,m.value,v.value,g.value,n.value,a.class],style:[s.value,d.value,a.style]},{default:()=>{var i;return[a.image?u(F,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?u(_,{key:"icon",icon:a.icon},null):((i=e.default)==null?void 0:i.call(e))??a.text,q(!1,"v-avatar")]}})),{}}});export{j as V,O as c};
