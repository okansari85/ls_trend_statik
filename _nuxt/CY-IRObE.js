import{s as be,ad as Ce,au as Se,B as we,C as xe,r as D,H as M,E as $,G as w,ar as Fe,av as O,J as _e,aw as Y,ax as Ae,e as a,F as G,O as N,V as Z,ay as De,at as Ie,i as Pe,az as Re,aA as Me,aB as ee,d as Te,o as Be,c as Ue,b as x,h as Ke}from"./DDcnI4lj.js";import{V as Le,a as T}from"./P0_uWgPB.js";import{y as ze,C as Ee,z as Ne,D as Oe,E as Ge,b as qe}from"./BiSwKGsN.js";import{e as He,f as Je,V as B,d as We}from"./BOwTQUPn.js";import{f as $e}from"./C-GTDzx5.js";import{u as je,b as Qe,V as Xe,a as le}from"./DGIEl3SU.js";import{V as Ye}from"./2NKi-hGJ.js";import{V as Ze}from"./bv9ZKqQG.js";function el(e,g,u){if(g==null)return e;if(Array.isArray(g))throw new Error("Multiple matches is not implemented");return typeof g=="number"&&~g?a(G,null,[a("span",{class:"v-autocomplete__unmask"},[e.substr(0,g)]),a("span",{class:"v-autocomplete__mask"},[e.substr(g,u)]),a("span",{class:"v-autocomplete__unmask"},[e.substr(g+u)])]):e}const ll=be({autoSelectFirst:{type:[Boolean,String]},search:String,...ze({filterKeys:["title"]}),...Ee(),...Ce(He({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Se({transition:!1})},"VAutocomplete"),ae=we()({name:"VAutocomplete",props:ll(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,g){let{slots:u}=g;const{t:S}=xe(),p=D(),V=M(!1),y=M(!0),d=M(!1),U=D(),K=D(),P=$(e,"menu"),i=w({get:()=>P.value,set:l=>{var n;P.value&&!l&&((n=U.value)!=null&&n.ΨopenChildren)||(P.value=l)}}),t=M(-1),r=w(()=>{var l;return(l=p.value)==null?void 0:l.color}),j=w(()=>i.value?e.closeText:e.openText),{items:q,transformIn:te,transformOut:ue}=je(e),{textColorClasses:ne,textColorStyles:oe}=Fe(r),f=$(e,"search",""),s=$(e,"modelValue",[],l=>te(l===null?[null]:Me(l)),l=>{const n=ue(l);return e.multiple?n:n[0]??null}),ie=w(()=>typeof e.counterValue=="function"?e.counterValue(s.value):typeof e.counterValue=="number"?e.counterValue:s.value.length),I=Je(),{filteredItems:H,getMatches:se}=Ne(e,q,()=>y.value?"":f.value),C=w(()=>e.hideSelected?H.value.filter(l=>!s.value.some(n=>n.value===l.value)):H.value),re=w(()=>s.value.map(l=>l.props.value)),L=w(()=>{var n;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&f.value===((n=C.value[0])==null?void 0:n.title))&&C.value.length>0&&!y.value&&!d.value}),J=w(()=>e.hideNoData&&!q.value.length||e.readonly||(I==null?void 0:I.isReadonly.value)),W=D(),{onListScroll:de,onListKeydown:ce}=Oe(W,p);function ve(l){e.openOnClear&&(i.value=!0),f.value=""}function fe(){J.value||(i.value=!0)}function me(l){J.value||(V.value&&(l.preventDefault(),l.stopPropagation()),i.value=!i.value)}function pe(l){var k,o,m;if(e.readonly||I!=null&&I.isReadonly.value)return;const n=p.value.selectionStart,v=s.value.length;if((t.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(i.value=!0),["Escape"].includes(l.key)&&(i.value=!1),L.value&&["Enter","Tab"].includes(l.key)&&F(C.value[0]),l.key==="ArrowDown"&&L.value&&((k=W.value)==null||k.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(t.value<0){l.key==="Backspace"&&!f.value&&(t.value=v-1);return}const c=t.value,b=s.value[t.value];b&&!b.props.disabled&&F(b),t.value=c>=v-1?v-2:c}if(l.key==="ArrowLeft"){if(t.value<0&&n>0)return;const c=t.value>-1?t.value-1:v-1;s.value[c]?t.value=c:(t.value=-1,p.value.setSelectionRange((o=f.value)==null?void 0:o.length,(m=f.value)==null?void 0:m.length))}if(l.key==="ArrowRight"){if(t.value<0)return;const c=t.value+1;s.value[c]?t.value=c:(t.value=-1,p.value.setSelectionRange(0,0))}}}function Ve(l){if(ee(p.value,":autofill")||ee(p.value,":-webkit-autofill")){const n=q.value.find(v=>v.title===l.target.value);n&&F(n)}}function he(){var l;V.value&&(y.value=!0,(l=p.value)==null||l.focus())}function ge(l){V.value=!0,setTimeout(()=>{d.value=!0})}function ye(l){d.value=!1}function ke(l){(l==null||l===""&&!e.multiple)&&(s.value=[])}const R=M(!1);function F(l){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const v=s.value.findIndex(k=>e.valueComparator(k.value,l.value));if(v===-1)s.value=[...s.value,l];else{const k=[...s.value];k.splice(v,1),s.value=k}}else s.value=n?[l]:[],R.value=!0,f.value=n?l.title:"",i.value=!1,y.value=!0,Y(()=>R.value=!1)}return O(V,(l,n)=>{var v;l!==n&&(l?(R.value=!0,f.value=e.multiple?"":String(((v=s.value.at(-1))==null?void 0:v.props.title)??""),y.value=!0,Y(()=>R.value=!1)):(!e.multiple&&f.value==null?s.value=[]:L.value&&!d.value&&!s.value.some(k=>{let{value:o}=k;return o===C.value[0].value})&&F(C.value[0]),i.value=!1,f.value="",t.value=-1))}),O(f,l=>{!V.value||R.value||(l&&(i.value=!0),y.value=!l)}),O(i,()=>{if(!e.hideSelected&&i.value&&s.value.length){const l=C.value.findIndex(n=>s.value.some(v=>n.value===v.value));Ae&&window.requestAnimationFrame(()=>{var n;l>=0&&((n=K.value)==null||n.scrollToIndex(l))})}}),_e(()=>{const l=!!(e.chips||u.chip),n=!!(!e.hideNoData||C.value.length||u["prepend-item"]||u["append-item"]||u["no-data"]),v=s.value.length>0,k=B.filterProps(e);return a(B,N({ref:p},k,{modelValue:f.value,"onUpdate:modelValue":[o=>f.value=o,ke],focused:V.value,"onUpdate:focused":o=>V.value=o,validationValue:s.externalValue,counterValue:ie.value,dirty:v,onChange:Ve,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":i.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!u.selection,"v-autocomplete--selecting-index":t.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:v?void 0:e.placeholder,"onClick:clear":ve,"onMousedown:control":fe,onKeydown:pe}),{...u,default:()=>a(G,null,[a(Qe,N({ref:U,modelValue:i.value,"onUpdate:modelValue":o=>i.value=o,activator:"parent",contentClass:"v-autocomplete__content",disabled:J.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:he},e.menuProps),{default:()=>[n&&a(Xe,{ref:W,selected:re.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onKeydown:ce,onFocusin:ge,onFocusout:ye,onScrollPassive:de,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var o,m,c;return[(o=u["prepend-item"])==null?void 0:o.call(u),!C.value.length&&!e.hideNoData&&(((m=u["no-data"])==null?void 0:m.call(u))??a(le,{title:S(e.noDataText)},null)),a(Ge,{ref:K,renderless:!0,items:C.value},{default:b=>{var X;let{item:h,index:_,itemRef:A}=b;const Q=N(h.props,{ref:A,key:_,active:L.value&&_===0?!0:void 0,onClick:()=>F(h)});return((X=u.item)==null?void 0:X.call(u,{item:h,index:_,props:Q}))??a(le,Q,{prepend:z=>{let{isSelected:E}=z;return a(G,null,[e.multiple&&!e.hideSelected?a(We,{key:h.value,modelValue:E,ripple:!1,tabindex:"-1"},null):void 0,h.props.prependIcon&&a(Z,{icon:h.props.prependIcon},null)])},title:()=>{var z,E;return y.value?h.title:el(h.title,(z=se(h))==null?void 0:z.title,((E=f.value)==null?void 0:E.length)??0)}})}}),(c=u["append-item"])==null?void 0:c.call(u)]}})]}),s.value.map((o,m)=>{function c(A){A.stopPropagation(),A.preventDefault(),F(o,!1)}const b={"onClick:close":c,onMousedown(A){A.preventDefault(),A.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},h=l?!!u.chip:!!u.selection,_=h?De(l?u.chip({item:o,index:m,props:b}):u.selection({item:o,index:m})):void 0;if(!(h&&!_))return a("div",{key:o.value,class:["v-autocomplete__selection",m===t.value&&["v-autocomplete__selection--selected",ne.value]],style:m===t.value?oe.value:{}},[l?u.chip?a(Ie,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[_]}):a(qe,N({key:"chip",closable:e.closableChips,size:"small",text:o.title,disabled:o.props.disabled},b),null):_??a("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&m<s.value.length-1&&a("span",{class:"v-autocomplete__selection-comma"},[Pe(",")])])])})]),"append-inner":function(){var b;for(var o=arguments.length,m=new Array(o),c=0;c<o;c++)m[c]=arguments[c];return a(G,null,[(b=u["append-inner"])==null?void 0:b.call(u,...m),e.menuIcon?a(Z,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:me,onClick:Re,"aria-label":S(j.value),title:S(j.value)},null):void 0])}})}),$e({isFocused:V,isPristine:y,menu:i,search:f,filteredItems:H,select:F},p)}}),dl=Te({__name:"ProductForm",props:{modelValue:{},depolar:{},raflar:{},disabled:{type:Boolean}},emits:["depoChange"],setup(e,{expose:g,emit:u}){const S=e,p=u,V=D(!1),y=D(),d=D({...S.modelValue}),U=i=>{d.value.raf_id="",p("depoChange",i)},K=()=>{d.value.raf_id="",d.value.product_desc=""},P=()=>{var i;return(i=y.value)==null||i.validate(),!!V.value};return O(()=>S.modelValue,i=>{d.value={...i}},{deep:!0}),g({clearForm:K,validate:P,internalFormData:d}),(i,t)=>(Be(),Ue(Ze,{ref_key:"productForm",ref:y,modelValue:V.value,"onUpdate:modelValue":t[5]||(t[5]=r=>V.value=r),"lazy-validation":"",onSubmit:Ke(()=>{},["prevent"])},{default:x(()=>[a(Ye,{fluid:"",style:{"padding-inline":"0 0"}},{default:x(()=>[a(Le,null,{default:x(()=>[a(T,{cols:"12",md:"12"},{default:x(()=>[a(ae,{modelValue:d.value.depo_id,"onUpdate:modelValue":[t[0]||(t[0]=r=>d.value.depo_id=r),U],label:"Depo Seçiniz",placeholder:"Depo Seçiniz",items:i.depolar,"item-title":"name","item-value":"id",rules:[r=>!!r||"Depo Seçimi Gereklidir."],required:"","auto-select-first":"",disabled:S.disabled},null,8,["modelValue","items","rules","disabled"])]),_:1}),a(T,{cols:"12",md:"12"},{default:x(()=>[a(B,{modelValue:d.value.product_code,"onUpdate:modelValue":t[1]||(t[1]=r=>d.value.product_code=r),"prepend-inner-icon":"ri-barcode-line",label:"Ürün Kodu",placeholder:"Ürün Kodu",disabled:S.disabled,required:"",rules:[r=>!!r||"Ürün Kodu Gereklidir."]},null,8,["modelValue","disabled","rules"])]),_:1}),a(T,{cols:"12",md:"12"},{default:x(()=>[a(ae,{modelValue:d.value.raf_id,"onUpdate:modelValue":t[2]||(t[2]=r=>d.value.raf_id=r),"auto-select-first":"",items:i.raflar,label:"Raf Seçiniz","item-value":"id","item-title":"name",required:"",rules:[r=>!!r||"Raf Seçimi Gereklidir."]},null,8,["modelValue","items","rules"])]),_:1}),a(T,{cols:"12",md:"12"},{default:x(()=>[a(B,{modelValue:d.value.product_desc,"onUpdate:modelValue":t[3]||(t[3]=r=>d.value.product_desc=r),"prepend-inner-icon":"ri-water-flash-fill",label:"Ürün Kısa Açıklaması",placeholder:"Ürün Kısa Açıklaması",rules:[r=>!!r||"Ürün Açıklaması Gereklidir."]},null,8,["modelValue","rules"])]),_:1}),a(T,{cols:"12",md:"12"},{default:x(()=>[a(B,{modelValue:d.value.stock,"onUpdate:modelValue":t[4]||(t[4]=r=>d.value.stock=r),"prepend-inner-icon":"ri-add-fill",label:"Başlangıç Stok",placeholder:"Başlangıç Stok"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});export{dl as _};
