import{s as c,v,A as d,B as h,D as m,ar as u,Z as g,G as C,J as k,aF as a,e as x}from"./CDye5War.js";const y=c({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},"VDivider"),f=h()({name:"VDivider",props:y(),setup(e,i){let{attrs:t}=i;const{themeClasses:s}=m(e),{textColorClasses:o,textColorStyles:l}=u(g(e,"color")),n=C(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=a(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=a(e.thickness)),r});return k(()=>x("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{f as V};
