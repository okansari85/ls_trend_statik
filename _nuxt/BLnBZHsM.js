import{s as c,v,A as d,B as h,D as m,a7 as u,a1 as g,G as C,J as k,aj as r,e as x}from"./DYYK1XON.js";const y=c({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},"VDivider"),f=h()({name:"VDivider",props:y(),setup(e,i){let{attrs:t}=i;const{themeClasses:s}=m(e),{textColorClasses:o,textColorStyles:l}=u(g(e,"color")),n=C(()=>{const a={};return e.length&&(a[e.vertical?"maxHeight":"maxWidth"]=r(e.length)),e.thickness&&(a[e.vertical?"borderRightWidth":"borderTopWidth"]=r(e.thickness)),a});return k(()=>x("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{f as V};
