import{d as U,r as X,a9 as $,a8 as G,n as ee,s as ae,B as te,G as b,Z as s,Y as oe,J as le,e as u,F as re,O as f}from"./D0fYuCab.js";import{m as ne,c as se,d as ue,e as de,f as ce,g as ie,h as me,u as ge,p as pe,i as ve,j as be,k as fe,l as Pe,n as ye,o as Te,q as w,r as B,s as _}from"./B-988mtu.js";import{V as I}from"./DswDXCCb.js";const he=Symbol.for("nuxt:client-only"),Ve=U({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(a,{slots:r,attrs:i}){const e=X(!1);return $(()=>{e.value=!0}),G(he,!0),o=>{var n;if(e.value)return(n=r.default)==null?void 0:n.call(r);const l=r.fallback||r.placeholder;if(l)return l();const m=o.fallback||o.placeholder||"",g=o.fallbackTag||o.placeholderTag||"span";return ee(g,i,m)}}}),Se=ae({itemsLength:{type:[Number,String],required:!0},...ne(),...se(),...ue()},"VDataTableServer"),we=te()({name:"VDataTableServer",props:Se(),emits:{"update:modelValue":a=>!0,"update:page":a=>!0,"update:itemsPerPage":a=>!0,"update:sortBy":a=>!0,"update:options":a=>!0,"update:expanded":a=>!0,"update:groupBy":a=>!0},setup(a,r){let{attrs:i,slots:e}=r;const{groupBy:o}=de(a),{sortBy:l,multiSort:m,mustSort:g}=ce(a),{page:n,itemsPerPage:p}=ie(a),E=b(()=>parseInt(a.itemsLength,10)),{columns:P,headers:F}=me(a,{groupBy:o,showSelect:s(a,"showSelect"),showExpand:s(a,"showExpand")}),{items:c}=ge(a,P),{toggleSort:y}=pe({sortBy:l,multiSort:m,mustSort:g,page:n}),{opened:R,isGroupOpen:C,toggleGroup:O,extractRows:H}=ve({groupBy:o,sortBy:l}),{pageCount:N,setItemsPerPage:L}=be({page:n,itemsPerPage:p,itemsLength:E}),{flatItems:T}=fe(c,o,R),{isSelected:q,select:A,selectAll:j,toggleSelect:J,someSelected:M,allSelected:W}=Pe(a,{allItems:c,currentPage:c}),{isExpanded:Y,toggleExpand:Z}=ye(a),h=b(()=>H(c.value));Te({page:n,itemsPerPage:p,sortBy:l,groupBy:o,search:s(a,"search")}),G("v-data-table",{toggleSort:y,sortBy:l}),oe({VDataTableRows:{hideNoData:s(a,"hideNoData"),noDataText:s(a,"noDataText"),loading:s(a,"loading"),loadingText:s(a,"loadingText")}});const t=b(()=>({page:n.value,itemsPerPage:p.value,sortBy:l.value,pageCount:N.value,toggleSort:y,setItemsPerPage:L,someSelected:M.value,allSelected:W.value,isSelected:q,select:A,selectAll:j,toggleSelect:J,isExpanded:Y,toggleExpand:Z,isGroupOpen:C,toggleGroup:O,items:h.value.map(v=>v.raw),internalItems:h.value,groupedItems:T.value,columns:P.value,headers:F.value}));le(()=>{const v=w.filterProps(a),z=B.filterProps(a),K=_.filterProps(a),Q=I.filterProps(a);return u(I,f({class:["v-data-table",{"v-data-table--loading":a.loading},a.class],style:a.style},Q),{top:()=>{var d;return(d=e.top)==null?void 0:d.call(e,t.value)},default:()=>{var d,S,D,x,k,V;return e.default?e.default(t.value):u(re,null,[(d=e.colgroup)==null?void 0:d.call(e,t.value),u("thead",{class:"v-data-table__thead",role:"rowgroup"},[u(B,f(z,{sticky:a.fixedHeader}),e)]),(S=e.thead)==null?void 0:S.call(e,t.value),u("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(D=e["body.prepend"])==null?void 0:D.call(e,t.value),e.body?e.body(t.value):u(_,f(i,K,{items:T.value}),e),(x=e["body.append"])==null?void 0:x.call(e,t.value)]),(k=e.tbody)==null?void 0:k.call(e,t.value),(V=e.tfoot)==null?void 0:V.call(e,t.value)])},bottom:()=>e.bottom?e.bottom(t.value):u(w,v,{prepend:e["footer.prepend"]})})})}});export{we as V,Ve as _};
