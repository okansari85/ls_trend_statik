import{s as c,v,A as d,B as h,D as m,a8 as u,a2 as g,G as k,J as C,ak as r,e as x}from"./DkOmN_ZY.js";const y=c({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},"VDivider"),f=h()({name:"VDivider",props:y(),setup(e,i){let{attrs:t}=i;const{themeClasses:s}=m(e),{textColorClasses:o,textColorStyles:l}=u(g(e,"color")),n=k(()=>{const a={};return e.length&&(a[e.vertical?"maxHeight":"maxWidth"]=r(e.length)),e.thickness&&(a[e.vertical?"borderRightWidth":"borderTopWidth"]=r(e.thickness)),a});return C(()=>x("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{f as V};
