import{_ as z}from"./CxfgnBk-.js";import{V,b as U,_ as $}from"./Bf29TZ2X.js";import{k as q,r as S,G as ee,l as te,d as I,o as E,c as L,b as y,e as h,a as P,f as b,n as C,j as M,t as x,p as T,P as H,F as A,i as D,V as R,N as B,g as oe,h as ie,m as ne}from"./D_QZiPIX.js";import{a as K}from"./DV259-op.js";import{V as W,a as F}from"./DU-bX6v-.js";import{V as J}from"./CCyC8UY2.js";import{a as Y,V as G}from"./Bvbawomh.js";import{_ as re}from"./DlAUqK2U.js";import{V as ae,a as le,b as N,c as se}from"./UzsXkn4i.js";import"./1Rk8X-ds.js";/* empty css        */import"./B9UPQo3T.js";import"./DY7PVvcf.js";import"./B6Q9b_Uo.js";import"./C-GTDzx5.js";import"./DO2OKmI2.js";import"./CjGu2mHo.js";import"./C-yawpeX.js";import"./CtiO9Fri.js";import"./BxbpNniz.js";const X=q("siparisler",()=>{const j=S([]),_=S(0),c=S(!1),u=te(),e=S(""),n=S({page:1,itemsPerPage:20,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:"",status:0});async function s(){c.value=!0,e.value="",await u(`/api/orders?page=${n.value.page}&status=${n.value.status}&per_page=${n.value.itemsPerPage}&depo_id=${n.value.depo_id}&search=${n.value.search}`).then(i=>{c.value=!1,j.value=i.data,_.value=i.total}).catch(i=>{c.value=!1,e.value=i.message})}async function d(i){c.value=!0,e.value="",await u("/api/addHakedisItem",{method:"POST",body:{orderID:i}}).then(l=>{c.value=!1}).catch(l=>{c.value=!1,e.value=l.message})}return{confirmedOrders:ee(()=>j.value.filter(i=>i.is_confirmed===1)),totalItems:_,loading:c,options:n,fetchData:s,error:e,orders:j,addHakedis:d}}),de={class:"d-flex"},ce={key:0,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/N11_logo.svg/320px-N11_logo.svg.png",alt:"n11 Logo",class:"logo n11-logo",style:{"inline-size":"50px"}},ue={key:1,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/320px-Hepsiburada_logo_official.svg.png",alt:"Hepsiburada Logo",class:"logo",style:{"inline-size":"90px"}},fe={class:"d-flex"},pe={class:"d-flex flex-column"},me={class:"d-block font-weight-medium text-high-emphasis text-truncate"},ge={class:"d-flex gap-2"},ye={class:"d-flex gap-2"},he=I({__name:"SiparisListesi",setup(j,{expose:_}){const c=X(),u=S(""),e=S(!1),n=[{title:"Platform",key:"platformId"},{title:"Sipariş Bilgileri",key:"orderDate"},{title:"Müşteri Bilgileri",key:"buyer"},{title:"Ürün Bilgileri",key:"items"},{title:"Kargo Bilgileri",key:"shippingCompanyName"},{title:"Teyitli mi",key:"is_confirmed"},{title:"Aksiyonlar",key:"actions"}],s=S({deger:"",item:0,title:"",message:""}),d=(l,a)=>{s.value.deger=l,s.value.item=a.id,s.value.title="Emin misiniz?",s.value.message="Siparişi onayladığınızda sipariş kalemleri hakedişe düşecek ve sipariş onaylanacaktır.",e.value=!0},m=async l=>{l.deger==="approve_order"&&await c.addHakedis(l.item).then(()=>{e.value=!1,c.options.status=1,c.fetchData()})},i=l=>{c.options.page=l.page??0,c.options.search=l.search??"",c.options.status=1,c.fetchData()};return _({updateOptions:i}),(l,a)=>{const o=z,p=$;return E(),L(G,null,{default:y(()=>[h(o,{modelValue:P(c).loading,"onUpdate:modelValue":a[0]||(a[0]=r=>P(c).loading=r)},null,8,["modelValue"]),h(p,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=r=>e.value=r),deger:s.value.deger,item:s.value.item,title:s.value.title,message:s.value.message,onClickedAgree:m},null,8,["modelValue","deger","item","title","message"]),h(Y,{cols:"12",md:"12"},{default:y(()=>[h(K,null,{default:y(()=>[h(V,{headers:n,items:P(c).confirmedOrders,"items-length":P(c).totalItems,loading:P(c).loading,search:u.value,"item-value":"id",class:"text-no-wrap","hide-default-footer":"","onUpdate:options":i},{"item.platformId":y(({item:r})=>[b("div",de,[r.platformId===1?(E(),C("img",ce)):M("",!0),r.platformId===2?(E(),C("img",ue)):M("",!0)])]),"item.orderDate":y(({item:r})=>[b("div",fe,[b("span",null,x(r.orderDate),1)])]),"item.buyer":y(({item:r})=>[b("div",pe,[b("span",me,x(r.buyer.fullName),1),b("small",null,x(r.buyer.adresses[0].district)+" / "+x(r.buyer.adresses[0].city),1)])]),"item.items":y(({item:r})=>[h(W,null,{default:y(()=>[(E(!0),C(A,null,T(r.items,t=>(E(),L(F,{key:t.id,subtitle:`${t.product.productCode} X ${t.orderable.quantity}`,title:t.product.productTitle},{prepend:y(()=>[h(J,{color:"grey",rounded:"0",size:"64"},{default:y(()=>[h(H,{src:t.product.cover_image.url},null,8,["src"])]),_:2},1024)]),_:2},1032,["subtitle","title"]))),128))]),_:2},1024)]),"item.raf":y(({item:r})=>[b("div",ge,[b("span",null,x(r.malzemos.raf.name),1)])]),"item.stock":y(({item:r})=>[h(U,{color:"success",class:"font-weight-medium",size:"small"},{default:y(()=>[D(" + "+x(r.stock),1)]),_:2},1024)]),"item.is_confirmed":y(({item:r})=>[r.is_confirmed===1?(E(),L(R,{key:0,color:"success",icon:"ri-check-line"})):M("",!0)]),"item.actions":y(({item:r})=>[b("div",ye,[h(B,{type:"submit",size:"small",onClick:t=>d("approve_order",r)},{default:y(()=>[D(" Onayla ")]),_:2},1032,["onClick"]),h(B,{type:"submit",size:"small",color:"error"},{default:y(()=>[D(" Reddet ")]),_:1})])]),_:1},8,["items","items-length","loading","search"])]),_:1})]),_:1})]),_:1})}}});var Z={exports:{}};(function(j,_){(function(u,e){j.exports=e()})(window,function(){return function(c){var u={};function e(n){if(u[n])return u[n].exports;var s=u[n]={i:n,l:!1,exports:{}};return c[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}return e.m=c,e.c=u,e.d=function(n,s,d){e.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:d})},e.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,s){if(s&1&&(n=e(n)),s&8||s&4&&typeof n=="object"&&n&&n.__esModule)return n;var d=Object.create(null);if(e.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:n}),s&2&&typeof n!="string")for(var m in n)e.d(d,m,(function(i){return n[i]}).bind(null,m));return d},e.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(s,"a",s),s},e.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},e.p="",e(e.s=0)}({"./src/index.js":function(c,u,e){e.r(u),e("./src/sass/index.scss");var n=e("./src/js/init.js"),s=n.default.init;typeof window<"u"&&(window.printJS=s),u.default=s},"./src/js/browser.js":function(c,u,e){e.r(u);var n={isFirefox:function(){return typeof InstallTrigger<"u"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!n.isIE()&&!!window.StyleMedia},isChrome:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!d.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};u.default=n},"./src/js/functions.js":function(c,u,e){e.r(u),e.d(u,"addWrapper",function(){return m}),e.d(u,"capitalizePrint",function(){return i}),e.d(u,"collectStyles",function(){return l}),e.d(u,"addHeader",function(){return o}),e.d(u,"cleanUp",function(){return p}),e.d(u,"isRawHTML",function(){return r});var n=e("./src/js/modal.js"),s=e("./src/js/browser.js");function d(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(g){return typeof g}:d=function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},d(t)}function m(t,f){var g="font-family:"+f.font+" !important; font-size: "+f.font_size+" !important; width:100%;";return'<div style="'+g+'">'+t+"</div>"}function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l(t,f){for(var g=document.defaultView||window,w="",v=g.getComputedStyle(t,""),O=0;O<v.length;O++)(f.targetStyles.indexOf("*")!==-1||f.targetStyle.indexOf(v[O])!==-1||a(f.targetStyles,v[O]))&&v.getPropertyValue(v[O])&&(w+=v[O]+":"+v.getPropertyValue(v[O])+";");return w+="max-width: "+f.maxWidth+"px !important; font-size: "+f.font_size+" !important;",w}function a(t,f){for(var g=0;g<t.length;g++)if(d(f)==="object"&&f.indexOf(t[g])!==-1)return!0;return!1}function o(t,f){var g=document.createElement("div");if(r(f.header))g.innerHTML=f.header;else{var w=document.createElement("h1"),v=document.createTextNode(f.header);w.appendChild(v),w.setAttribute("style",f.headerStyle),g.appendChild(w)}t.insertBefore(g,t.childNodes[0])}function p(t){t.showModal&&n.default.close(),t.onLoadingEnd&&t.onLoadingEnd(),(t.showModal||t.onLoadingStart)&&window.URL.revokeObjectURL(t.printable);var f="mouseover";(s.default.isChrome()||s.default.isFirefox())&&(f="focus");var g=function w(){window.removeEventListener(f,w),t.onPrintDialogClose();var v=document.getElementById(t.frameId);v&&v.remove()};window.addEventListener(f,g)}function r(t){var f=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return f.test(t)}},"./src/js/html.js":function(c,u,e){e.r(u);var n=e("./src/js/functions.js"),s=e("./src/js/print.js");function d(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(o){return typeof o}:d=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},d(l)}u.default={print:function(a,o){var p=i(a.printable)?a.printable:document.getElementById(a.printable);if(!p){window.console.error("Invalid HTML element id: "+a.printable);return}a.printableElement=m(p,a),a.header&&Object(n.addHeader)(a.printableElement,a),s.default.send(a,o)}};function m(l,a){for(var o=l.cloneNode(),p=Array.prototype.slice.call(l.childNodes),r=0;r<p.length;r++)if(a.ignoreElements.indexOf(p[r].id)===-1){var t=m(p[r],a);o.appendChild(t)}switch(a.scanStyles&&l.nodeType===1&&o.setAttribute("style",Object(n.collectStyles)(l,a)),l.tagName){case"SELECT":o.value=l.value;break;case"CANVAS":o.getContext("2d").drawImage(l,0,0);break}return o}function i(l){return d(l)==="object"&&l&&(l instanceof HTMLElement||l.nodeType===1)}},"./src/js/image.js":function(c,u,e){e.r(u);var n=e("./src/js/functions.js"),s=e("./src/js/print.js"),d=e("./src/js/browser.js");u.default={print:function(i,l){i.printable.constructor!==Array&&(i.printable=[i.printable]),i.printableElement=document.createElement("div"),i.printable.forEach(function(a){var o=document.createElement("img");if(o.setAttribute("style",i.imageStyle),o.src=a,d.default.isFirefox()){var p=o.src;o.src=p}var r=document.createElement("div");r.appendChild(o),i.printableElement.appendChild(r)}),i.header&&Object(n.addHeader)(i.printableElement,i),s.default.send(i,l)}}},"./src/js/init.js":function(c,u,e){e.r(u);var n=e("./src/js/browser.js"),s=e("./src/js/modal.js"),d=e("./src/js/pdf.js"),m=e("./src/js/html.js"),i=e("./src/js/raw-html.js"),l=e("./src/js/image.js"),a=e("./src/js/json.js");function o(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?o=function(f){return typeof f}:o=function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},o(r)}var p=["pdf","html","image","json","raw-html"];u.default={init:function(){var t={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(Q){throw Q},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},f=arguments[0];if(f===void 0)throw new Error("printJS expects at least 1 attribute.");switch(o(f)){case"string":t.printable=encodeURI(f),t.fallbackPrintable=t.printable,t.type=arguments[1]||t.type;break;case"object":t.printable=f.printable,t.fallbackPrintable=typeof f.fallbackPrintable<"u"?f.fallbackPrintable:t.printable,t.fallbackPrintable=t.base64?"data:application/pdf;base64,".concat(t.fallbackPrintable):t.fallbackPrintable;for(var g in t)g==="printable"||g==="fallbackPrintable"||(t[g]=typeof f[g]<"u"?f[g]:t[g]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+o(f))}if(!t.printable)throw new Error("Missing printable information.");if(!t.type||typeof t.type!="string"||p.indexOf(t.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");t.showModal&&s.default.show(t),t.onLoadingStart&&t.onLoadingStart();var w=document.getElementById(t.frameId);w&&w.parentNode.removeChild(w);var v=document.createElement("iframe");switch(n.default.isFirefox()?v.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):v.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),v.setAttribute("id",t.frameId),t.type!=="pdf"&&(v.srcdoc="<html><head><title>"+t.documentTitle+"</title>",t.css&&(Array.isArray(t.css)||(t.css=[t.css]),t.css.forEach(function(k){v.srcdoc+='<link rel="stylesheet" href="'+k+'">'})),v.srcdoc+="</head><body></body></html>"),t.type){case"pdf":if(n.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var O=window.open(t.fallbackPrintable,"_blank");O.focus(),t.onIncompatibleBrowser()}catch(k){t.onError(k)}finally{t.showModal&&s.default.close(),t.onLoadingEnd&&t.onLoadingEnd()}else d.default.print(t,v);break;case"image":l.default.print(t,v);break;case"html":m.default.print(t,v);break;case"raw-html":i.default.print(t,v);break;case"json":a.default.print(t,v);break}}}},"./src/js/json.js":function(c,u,e){e.r(u);var n=e("./src/js/functions.js"),s=e("./src/js/print.js");function d(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(a){return typeof a}:d=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},d(i)}u.default={print:function(l,a){if(d(l.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof l.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!l.properties||!Array.isArray(l.properties))throw new Error("Invalid properties array for your JSON data.");l.properties=l.properties.map(function(o){return{field:d(o)==="object"?o.field:o,displayName:d(o)==="object"?o.displayName:o,columnSize:d(o)==="object"&&o.columnSize?o.columnSize+";":100/l.properties.length+"%;"}}),l.printableElement=document.createElement("div"),l.header&&Object(n.addHeader)(l.printableElement,l),l.printableElement.innerHTML+=m(l),s.default.send(l,a)}};function m(i){var l=i.printable,a=i.properties,o='<table style="border-collapse: collapse; width: 100%;">';i.repeatTableHeader&&(o+="<thead>"),o+="<tr>";for(var p=0;p<a.length;p++)o+='<th style="width:'+a[p].columnSize+";"+i.gridHeaderStyle+'">'+Object(n.capitalizePrint)(a[p].displayName)+"</th>";o+="</tr>",i.repeatTableHeader&&(o+="</thead>"),o+="<tbody>";for(var r=0;r<l.length;r++){o+="<tr>";for(var t=0;t<a.length;t++){var f=l[r],g=a[t].field.split(".");if(g.length>1)for(var w=0;w<g.length;w++)f=f[g[w]];else f=f[a[t].field];o+='<td style="width:'+a[t].columnSize+i.gridStyle+'">'+f+"</td>"}o+="</tr>"}return o+="</tbody></table>",o}},"./src/js/modal.js":function(c,u,e){e.r(u);var n={show:function(d){var m="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",i=document.createElement("div");i.setAttribute("style",m),i.setAttribute("id","printJS-Modal");var l=document.createElement("div");l.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var a=document.createElement("div");a.setAttribute("class","printClose"),a.setAttribute("id","printClose"),l.appendChild(a);var o=document.createElement("span");o.setAttribute("class","printSpinner"),l.appendChild(o);var p=document.createTextNode(d.modalMessage);l.appendChild(p),i.appendChild(l),document.getElementsByTagName("body")[0].appendChild(i),document.getElementById("printClose").addEventListener("click",function(){n.close()})},close:function(){var d=document.getElementById("printJS-Modal");d&&d.parentNode.removeChild(d)}};u.default=n},"./src/js/pdf.js":function(c,u,e){e.r(u);var n=e("./src/js/print.js"),s=e("./src/js/functions.js");u.default={print:function(i,l){if(i.base64){var a=Uint8Array.from(atob(i.printable),function(p){return p.charCodeAt(0)});d(i,l,a);return}i.printable=/^(blob|http|\/\/)/i.test(i.printable)?i.printable:window.location.origin+(i.printable.charAt(0)!=="/"?"/"+i.printable:i.printable);var o=new window.XMLHttpRequest;o.responseType="arraybuffer",o.addEventListener("error",function(){Object(s.cleanUp)(i),i.onError(o.statusText,o)}),o.addEventListener("load",function(){if([200,201].indexOf(o.status)===-1){Object(s.cleanUp)(i),i.onError(o.statusText,o);return}d(i,l,o.response)}),o.open("GET",i.printable,!0),o.send()}};function d(m,i,l){var a=new window.Blob([l],{type:"application/pdf"});a=window.URL.createObjectURL(a),i.setAttribute("src",a),n.default.send(m,i)}},"./src/js/print.js":function(c,u,e){e.r(u);var n=e("./src/js/browser.js"),s=e("./src/js/functions.js"),d={send:function(o,p){document.getElementsByTagName("body")[0].appendChild(p);var r=document.getElementById(o.frameId);r.onload=function(){if(o.type==="pdf"){n.default.isFirefox()?setTimeout(function(){return m(r,o)},1e3):m(r,o);return}var t=r.contentWindow||r.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(o.printableElement),o.type!=="pdf"&&o.style){var f=document.createElement("style");f.innerHTML=o.style,t.head.appendChild(f)}var g=t.getElementsByTagName("img");g.length>0?i(Array.from(g)).then(function(){return m(r,o)}):m(r,o)}}};function m(a,o){try{if(a.focus(),n.default.isEdge()||n.default.isIE())try{a.contentWindow.document.execCommand("print",!1,null)}catch{a.contentWindow.print()}else a.contentWindow.print()}catch(p){o.onError(p)}finally{n.default.isFirefox()&&(a.style.visibility="hidden",a.style.left="-1px"),Object(s.cleanUp)(o)}}function i(a){var o=a.map(function(p){if(p.src&&p.src!==window.location.href)return l(p)});return Promise.all(o)}function l(a){return new Promise(function(o){var p=function r(){!a||typeof a.naturalWidth>"u"||a.naturalWidth===0||!a.complete?setTimeout(r,500):o()};p()})}u.default=d},"./src/js/raw-html.js":function(c,u,e){e.r(u);var n=e("./src/js/print.js");u.default={print:function(d,m){d.printableElement=document.createElement("div"),d.printableElement.setAttribute("style","width:100%"),d.printableElement.innerHTML=d.printable,n.default.send(d,m)}}},"./src/sass/index.scss":function(c,u,e){},0:function(c,u,e){c.exports=e("./src/index.js")}}).default})})(Z);var be=Z.exports;const ve=oe(be),_e={class:"header"},Ee={class:"customer-name"},we={class:"location"},xe={class:"shipping-logo-container"},Se=["src"],Ce={class:"logos"},je={key:0,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/N11_logo.svg/320px-N11_logo.svg.png",alt:"n11 Logo",class:"logo n11-logo"},Pe={key:1,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/320px-Hepsiburada_logo_official.svg.png",alt:"Hepsiburada Logo",class:"logo"},Oe={class:"barcode"},Me=["src"],ke={class:"footer"},Le={class:"stock-code"},De=I({__name:"Yazdir",props:{platform:{},customerName:{},city:{},district:{},shippingCompanyName:{},barcodeNumber:{},items:{}},setup(j){const _=j;function c(){return{"sürat kargo":"https://galeri12.uludagsozluk.com/590/surat-kargo_620735.png","yurtiçi kargo":"https://upload.wikimedia.org/wikipedia/tr/a/a6/YurticiKargo_Logo.gif","mng kargo":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/MNG_Cargo_logo.svg/320px-MNG_Cargo_logo.svg.png"}[_.shippingCompanyName.toLowerCase()]||""}function u(){const e=_.items.map(n=>`
    <div class="label">
      <div class="header">
        <p class="customer-name">${_.customerName}</p>
        <p class="location">${_.city} / ${_.district}</p>
      </div>
      <div class="shipping-logo-container">
        <img src="${c()}" alt="Kargo Firması Logo" class="shipping-logo" />
      </div>
      <div class="logos">
        <img src="${_.platform==="n11"?"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/N11_logo.svg/320px-N11_logo.svg.png":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/320px-Hepsiburada_logo_official.svg.png"}" alt="Platform Logo" class="logo ${_.platform==="n11"?"n11-logo":""}" />
      </div>
      <div class="barcode">
        <img src="https://barcode.tec-it.com/barcode.ashx?data=${_.barcodeNumber}&code=Code128" alt="Barkod" />
      </div>
      <div class="footer">
        <p class="stock-code">Stok Kodu: ${n.product.productCode}</p>
      </div>
    </div>
  `).join("");ve({printable:e,type:"raw-html",targetStyles:["*"],style:`
      @page {
        size: 10.4cm 10.4cm; /* Sayfa boyutu ayarı */
        margin: 0; /* Kenar boşluklarını sıfırlama */
      }
      .label {
  display: flex;
  box-sizing: border-box; /* Kenar boşluklarını ve içeriği doğru bir şekilde hesaplamak için */
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black; /* Kenarlık (isteğe bağlı) */
  block-size: 10cm; /* İçerik alanı */
  font-family: Arial, sans-serif;
  inline-size: 10cm; /* İçerik alanı */
  margin-bottom:0.35cm;
}

.header {
  margin-block: 0.5cm 0.5cm /* Müşteri bilgilerini 0.5 cm aşağı kaydır */
}

.customer-name {
  padding: 0;
  margin: 0;
  font-size: 1em;
}

.location {
  padding: 0;
  margin: 0;
  font-size: 0.8em;
}

.logos {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.logo {
  margin: 0;
  block-size: auto;
  inline-size: 200px; /* Platform logosunun boyutunu ayarlayın */
}

.n11-logo {
  inline-size: 100px;
}

.shipping-logo-container {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-block-start: 0.5cm; /* Kargo logosu için üstten boşluk */
}

.shipping-logo {
  margin: 0;
  block-size: auto;
  inline-size: 150px; /* Kargo firmasının logosunun boyutunu ayarlayın */
}

.barcode {
  padding: 0;
  margin: 0;
  text-align: center;
}

.barcode img {
  block-size: auto; /* Barkod boyutunu ayarlayın */
  max-inline-size: 100%;
}

.footer {
  text-align: center;
}

.stock-code {
  padding: 0;
  margin: 0;
  font-size: 0.8em;
}
    `,scanStyles:!1,honorMarginPadding:!1})}return(e,n)=>(E(),C("div",null,[(E(!0),C(A,null,T(e.items,(s,d)=>(E(),C("div",{key:d,class:"label",style:{display:"none"}},[b("div",_e,[b("p",Ee,x(e.customerName),1),b("p",we,x(e.city)+" / "+x(e.district),1)]),b("div",xe,[b("img",{src:c(),alt:"Kargo Firması Logo",class:"shipping-logo"},null,8,Se)]),b("div",Ce,[e.platform==="n11"?(E(),C("img",je)):M("",!0),e.platform==="hepsiburada"?(E(),C("img",Pe)):M("",!0)]),b("div",Oe,[b("img",{src:`https://barcode.tec-it.com/barcode.ashx?data=${e.barcodeNumber}&code=Code128`,alt:"Barkod"},null,8,Me)]),b("div",ke,[b("p",Le," Stok Kodu: "+x(s.product.productCode),1)])]))),128)),b("a",{href:"#",class:"print-link",onClick:ie(u,["prevent"])}," Etiket Yazdır")]))}}),Ie=re(De,[["__scopeId","data-v-4fc77301"]]),Te={class:"d-flex"},Ae={key:0,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/N11_logo.svg/320px-N11_logo.svg.png",alt:"n11 Logo",class:"logo n11-logo",style:{"inline-size":"50px"}},Be={key:1,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/320px-Hepsiburada_logo_official.svg.png",alt:"Hepsiburada Logo",class:"logo",style:{"inline-size":"90px"}},Ne={class:"d-flex"},ze={class:"d-flex flex-column"},Ve={class:"d-block font-weight-medium text-high-emphasis text-truncate"},Ue={class:"d-flex flex-column"},$e={class:"d-block font-weight-medium text-high-emphasis text-truncate"},He={style:{"margin-block-end":"5px"}},Re=I({__name:"SiparisListesiSecond",setup(j,{expose:_}){const c=X(),u=S(""),e=S(!1),n=[{title:"Platform",key:"platformId"},{title:"Sipariş Bilgileri",key:"orderDate"},{title:"Müşteri Bilgileri",key:"buyer"},{title:"Ürün Bilgileri",key:"items"},{title:"Kargo Bilgileri",key:"shippingCompanyName"}],s=S({deger:"",item:0,title:"",message:""}),d=async i=>{i.deger==="approve_order"&&await c.addHakedis(i.item).then(()=>{e.value=!1,c.options.status=1,c.fetchData()})},m=i=>{c.options.page=i.page??0,c.options.search=i.search??"",c.options.status=2,c.fetchData()};return _({updateOptions:m}),(i,l)=>{const a=z,o=$,p=Ie;return E(),L(G,null,{default:y(()=>[h(a,{modelValue:P(c).loading,"onUpdate:modelValue":l[0]||(l[0]=r=>P(c).loading=r)},null,8,["modelValue"]),h(o,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=r=>e.value=r),deger:s.value.deger,item:s.value.item,title:s.value.title,message:s.value.message,onClickedAgree:d},null,8,["modelValue","deger","item","title","message"]),h(Y,{cols:"12",md:"12"},{default:y(()=>[h(K,null,{default:y(()=>[h(V,{headers:n,items:P(c).confirmedOrders,"items-length":P(c).totalItems,loading:P(c).loading,search:u.value,"item-value":"id",class:"text-no-wrap","hide-default-footer":"","onUpdate:options":m},{"item.platformId":y(({item:r})=>[b("div",Te,[r.platformId===1?(E(),C("img",Ae)):M("",!0),r.platformId===2?(E(),C("img",Be)):M("",!0)])]),"item.orderDate":y(({item:r})=>[b("div",Ne,[b("span",null,x(r.orderDate),1)])]),"item.buyer":y(({item:r})=>[b("div",ze,[b("span",Ve,x(r.buyer.fullName),1),b("small",null,x(r.buyer.adresses[0].district)+" / "+x(r.buyer.adresses[0].city),1)])]),"item.items":y(({item:r})=>[h(W,null,{default:y(()=>[(E(!0),C(A,null,T(r.items,t=>(E(),L(F,{key:t.id,subtitle:`${t.product.productCode} X ${t.orderable.quantity}`,title:t.product.productTitle},{prepend:y(()=>[h(J,{color:"grey",rounded:"0",size:"64"},{default:y(()=>[h(H,{src:t.product.cover_image.url},null,8,["src"])]),_:2},1024)]),_:2},1032,["subtitle","title"]))),128))]),_:2},1024)]),"item.shippingCompanyName":y(({item:r})=>[b("div",Ue,[b("span",$e,x(r.shippingCompanyName),1),b("small",He,[h(U,{color:"success",class:"font-weight-medium",size:"small"},{default:y(()=>[D(x(r.campaignNumber),1)]),_:2},1024)]),h(p,{platform:r.platformId===1?"n11":"hepsiburada",district:r.buyer.adresses[0].district,city:r.buyer.adresses[0].city,"shipping-company-name":r.shippingCompanyName,"barcode-number":r.campaignNumber,"customer-name":r.buyer.fullName,items:r.items},null,8,["platform","district","city","shipping-company-name","barcode-number","customer-name","items"])])]),_:1},8,["items","items-length","loading","search"])]),_:1})]),_:1})]),_:1})}}}),ct=I({__name:"siparisler",setup(j){const _=ne(),c=S(_.params.tab),u=S(),e=S();S({page:1,itemsPerPage:20,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:"",status:1});const n=[{tab:"account",title:"Yeni Siparişler",icon:"ri-group-line"},{tab:"security",title:"Kargolanacak Siparişler (Onaylanmış)",icon:"ri-lock-line"}],s=d=>{d==="account"&&u.value.updateOptions({page:1,itemsPerPage:20,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:"",status:1}),d==="security"&&e.value.updateOptions({page:1,itemsPerPage:20,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:"",status:2})};return(d,m)=>(E(),C("div",null,[h(le,{modelValue:c.value,"onUpdate:modelValue":m[0]||(m[0]=i=>c.value=i),"show-arrows":""},{default:y(()=>[(E(),C(A,null,T(n,i=>h(ae,{key:i.icon,value:i.tab,onClick:l=>s(i.tab)},{default:y(()=>[h(R,{size:"20",start:"",icon:i.icon},null,8,["icon"]),D(" "+x(i.title),1)]),_:2},1032,["value","onClick"])),64))]),_:1},8,["modelValue"]),h(se,{modelValue:c.value,"onUpdate:modelValue":m[1]||(m[1]=i=>c.value=i),class:"mt-5 disable-tab-transition"},{default:y(()=>[h(N,{value:"account"},{default:y(()=>[h(he,{ref_key:"siparisListesi",ref:u},null,512)]),_:1}),h(N,{value:"security"},{default:y(()=>[h(Re,{ref_key:"siparisListesiSecond",ref:e},null,512)]),_:1})]),_:1},8,["modelValue"])]))}});export{ct as default};
