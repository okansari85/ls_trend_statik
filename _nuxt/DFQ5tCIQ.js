import{d as X,r as Y,$ as Z,a0 as G,n as ee,s as ae,B as te,G as b,a1 as s,a2 as oe,J as le,e as u,F as re,O as f}from"./PumYwwwi.js";import{m as ne,d as se,e as ue,f as de,g as ce,h as ie,i as me,j as ge,p as pe,k as ve,l as be,n as fe,o as Pe,q as ye,r as Te,s as w,t as B,v as _}from"./D7O-W2zi.js";import{V as I}from"./Czq9LeV1.js";const he=Symbol.for("nuxt:client-only"),Ve=X({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(a,{slots:r,attrs:i}){const e=Y(!1);return Z(()=>{e.value=!0}),G(he,!0),o=>{var n;if(e.value)return(n=r.default)==null?void 0:n.call(r);const l=r.fallback||r.placeholder;if(l)return l();const m=o.fallback||o.placeholder||"",g=o.fallbackTag||o.placeholderTag||"span";return ee(g,i,m)}}}),Se=ae({itemsLength:{type:[Number,String],required:!0},...ne(),...se(),...ue()},"VDataTableServer"),we=te()({name:"VDataTableServer",props:Se(),emits:{"update:modelValue":a=>!0,"update:page":a=>!0,"update:itemsPerPage":a=>!0,"update:sortBy":a=>!0,"update:options":a=>!0,"update:expanded":a=>!0,"update:groupBy":a=>!0},setup(a,r){let{attrs:i,slots:e}=r;const{groupBy:o}=de(a),{sortBy:l,multiSort:m,mustSort:g}=ce(a),{page:n,itemsPerPage:p}=ie(a),E=b(()=>parseInt(a.itemsLength,10)),{columns:P,headers:F}=me(a,{groupBy:o,showSelect:s(a,"showSelect"),showExpand:s(a,"showExpand")}),{items:c}=ge(a,P),{toggleSort:y}=pe({sortBy:l,multiSort:m,mustSort:g,page:n}),{opened:R,isGroupOpen:C,toggleGroup:O,extractRows:H}=ve({groupBy:o,sortBy:l}),{pageCount:N,setItemsPerPage:L}=be({page:n,itemsPerPage:p,itemsLength:E}),{flatItems:T}=fe(c,o,R),{isSelected:q,select:A,selectAll:j,toggleSelect:J,someSelected:M,allSelected:W}=Pe(a,{allItems:c,currentPage:c}),{isExpanded:$,toggleExpand:z}=ye(a),h=b(()=>H(c.value));Te({page:n,itemsPerPage:p,sortBy:l,groupBy:o,search:s(a,"search")}),G("v-data-table",{toggleSort:y,sortBy:l}),oe({VDataTableRows:{hideNoData:s(a,"hideNoData"),noDataText:s(a,"noDataText"),loading:s(a,"loading"),loadingText:s(a,"loadingText")}});const t=b(()=>({page:n.value,itemsPerPage:p.value,sortBy:l.value,pageCount:N.value,toggleSort:y,setItemsPerPage:L,someSelected:M.value,allSelected:W.value,isSelected:q,select:A,selectAll:j,toggleSelect:J,isExpanded:$,toggleExpand:z,isGroupOpen:C,toggleGroup:O,items:h.value.map(v=>v.raw),internalItems:h.value,groupedItems:T.value,columns:P.value,headers:F.value}));le(()=>{const v=w.filterProps(a),K=B.filterProps(a),Q=_.filterProps(a),U=I.filterProps(a);return u(I,f({class:["v-data-table",{"v-data-table--loading":a.loading},a.class],style:a.style},U),{top:()=>{var d;return(d=e.top)==null?void 0:d.call(e,t.value)},default:()=>{var d,S,D,x,k,V;return e.default?e.default(t.value):u(re,null,[(d=e.colgroup)==null?void 0:d.call(e,t.value),u("thead",{class:"v-data-table__thead",role:"rowgroup"},[u(B,f(K,{sticky:a.fixedHeader}),e)]),(S=e.thead)==null?void 0:S.call(e,t.value),u("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(D=e["body.prepend"])==null?void 0:D.call(e,t.value),e.body?e.body(t.value):u(_,f(i,Q,{items:T.value}),e),(x=e["body.append"])==null?void 0:x.call(e,t.value)]),(k=e.tbody)==null?void 0:k.call(e,t.value),(V=e.tfoot)==null?void 0:V.call(e,t.value)])},bottom:()=>e.bottom?e.bottom(t.value):u(w,v,{prepend:e["footer.prepend"]})})})}});export{we as V,Ve as _};
