import{_ as $}from"./w4guafZl.js";import{V as K,_ as H,b as W}from"./C28fEvqQ.js";import{k as te,r as k,G as oe,l as ie,d as T,U as ne,o as E,c as D,b as g,e as y,a as j,i as M,t as w,f as v,n as x,j as P,p as z,af as ae,P as R,F as A,V as F,N as V,g as re,Q as le,R as se,h as J,ag as de,m as ce}from"./BZTnykiJ.js";import{a as B,d as ue,V as fe}from"./DWs8ge_J.js";import{V as G,a as Y}from"./CjqnntEv.js";import{V as X}from"./CD3bP1I6.js";import{a as I,V as N}from"./CL4Mg6s6.js";import{_ as Z}from"./DlAUqK2U.js";import{V as pe,a as me}from"./DOMwVMyf.js";import{V as ge,a as ye,b as U,c as he}from"./CWrbeSqs.js";import"./SGITEjV6.js";/* empty css        */import"./CVIILcFq.js";import"./DY7PVvcf.js";import"./D_EVcEZw.js";import"./C-GTDzx5.js";import"./BoqnSi74.js";import"./Bb6CEQdm.js";import"./DLfrnkUN.js";import"./CrsJ6Nwx.js";const Q=te("siparisler",()=>{const S=k([]),C=k(0),l=k(!1),u=ie(),t=k(""),a=k({page:1,itemsPerPage:100,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:"",status:0});async function s(){l.value=!0,t.value="",await u(`/api/orders?page=${a.value.page}&status=${a.value.status}&per_page=${a.value.itemsPerPage}&depo_id=${a.value.depo_id}&search=${a.value.search}`).then(n=>{l.value=!1,S.value=n.data,C.value=n.total}).catch(n=>{l.value=!1,t.value=n.message})}async function d(n){l.value=!0,t.value="",await u("/api/addHakedisItem",{method:"POST",body:{orderID:n}}).then(i=>{l.value=!1}).catch(i=>{l.value=!1,t.value=i.message})}async function p(n){l.value=!0,t.value="",await u("/api/orders/mark-printed",{method:"POST",body:{orderID:n}}).then(i=>{l.value=!1;const o=S.value.find(m=>m.id===n);o&&(o.is_printed=1)}).catch(i=>{l.value=!1,t.value=i.message})}return{confirmedOrders:oe(()=>S.value.filter(n=>n.is_confirmed===1)),totalItems:C,loading:l,options:a,fetchData:s,error:t,orders:S,addHakedis:d,markAsPrinted:p}}),be={class:"d-flex"},ve={key:0,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/N11_logo.svg/320px-N11_logo.svg.png",alt:"n11 Logo",class:"logo n11-logo",style:{"inline-size":"50px"}},_e={key:1,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/320px-Hepsiburada_logo_official.svg.png",alt:"Hepsiburada Logo",class:"logo",style:{"inline-size":"90px"}},Ee={key:2,src:"https://birfatura.com/wp-content/uploads/2022/03/pazarama-pazaryeri-entegrasyonu.svg",alt:"Pazarama Logo",class:"logo",style:{"inline-size":"90px"}},we={class:"d-flex"},xe={class:"d-flex flex-column"},ke={class:"d-block font-weight-medium text-high-emphasis text-truncate"},Se={class:"title_class pa-0 ma-0"},Ce={class:"title_class pa-0 ma-0"},Pe={key:0,class:"title_class",style:{padding:"0",color:"red"}},je={class:"d-flex gap-2"},Oe=T({__name:"SiparisListesi",setup(S,{expose:C}){const l=Q(),u=k(""),t=k(!1),a=[{title:"S/N",value:"siparisNo"},{title:"Platform",key:"platformId"},{title:"Sipariş Bilgileri",key:"orderDate"},{title:"Müşteri Bilgileri",key:"buyer"},{title:"Ürün Bilgileri",key:"items"},{title:"Kargo Bilgileri",key:"shippingCompanyName"},{title:"Teyitli mi",key:"is_confirmed"},{title:"Aksiyonlar",key:"actions"}],s=k({deger:"",item:0,title:"",message:""}),d=(n,i)=>{s.value.deger=n,s.value.item=i.id,s.value.title="Emin misiniz?",s.value.message="Siparişi onayladığınızda sipariş kalemleri hakedişe düşecek ve sipariş onaylanacaktır.",t.value=!0},p=async n=>{n.deger==="approve_order"&&await l.addHakedis(n.item).then(()=>{t.value=!1,l.options.status=1,l.fetchData()})},r=n=>{l.options.page=n.page??0,l.options.search=n.search??"",l.options.status=1,l.fetchData()};return C({updateOptions:r}),(n,i)=>{const o=$,m=H,h=ne("Vtitle");return E(),D(N,null,{default:g(()=>[y(o,{modelValue:j(l).loading,"onUpdate:modelValue":i[0]||(i[0]=e=>j(l).loading=e)},null,8,["modelValue"]),y(m,{modelValue:t.value,"onUpdate:modelValue":i[1]||(i[1]=e=>t.value=e),deger:s.value.deger,item:s.value.item,title:s.value.title,message:s.value.message,onClickedAgree:p},null,8,["modelValue","deger","item","title","message"]),y(I,{cols:"12",md:"12"},{default:g(()=>[y(B,null,{default:g(()=>[y(K,{headers:a,items:j(l).confirmedOrders,"items-length":j(l).totalItems,loading:j(l).loading,search:u.value,"item-value":"id",class:"text-no-wrap","hide-default-footer":"","onUpdate:options":r},{"item.siparisNo":g(({index:e})=>[M(w(e+1),1)]),"item.platformId":g(({item:e})=>[v("div",be,[e.platformId===1?(E(),x("img",ve)):P("",!0),e.platformId===2?(E(),x("img",_e)):P("",!0),e.platformId===3?(E(),x("img",Ee)):P("",!0)])]),"item.orderDate":g(({item:e})=>[v("div",we,[v("span",null,w(e.orderDate),1)])]),"item.buyer":g(({item:e})=>[v("div",xe,[v("span",ke,w(e.buyer.fullName),1),v("small",null,w(e.buyer.adresses[0].district)+" / "+w(e.buyer.adresses[0].city),1)])]),"item.items":g(({item:e})=>[y(G,null,{default:g(()=>[(E(!0),x(A,null,z(e.items,c=>(E(),D(Y,{key:c.id,style:ae(c.product.productCode==="12040144_1"?{color:"red"}:{})},{prepend:g(()=>[y(X,{color:"grey",rounded:"0",size:"64"},{default:g(()=>[y(R,{src:c.product.cover_image.url},null,8,["src"])]),_:2},1024)]),default:g(()=>[y(h,null,{default:g(()=>[v("div",Se,w(c.product.productTitle),1)]),_:2},1024),y(ue,{style:{"padding-block":"0, !important","padding-inline":"im !important"}},{default:g(()=>[v("div",Ce,w(c.product.productCode)+" x "+w(c.orderable.quantity),1),e.status===5?(E(),x("div",Pe," Geciken Kargolama ")):P("",!0)]),_:2},1024)]),_:2},1032,["style"]))),128))]),_:2},1024)]),"item.is_confirmed":g(({item:e})=>[e.is_confirmed===1?(E(),D(F,{key:0,color:"success",icon:"ri-check-line"})):P("",!0)]),"item.actions":g(({item:e})=>[v("div",je,[y(V,{type:"submit",size:"small",onClick:c=>d("approve_order",e)},{default:g(()=>[M(" Onayla ")]),_:2},1032,["onClick"]),y(V,{type:"submit",size:"small",color:"error"},{default:g(()=>[M(" Reddet ")]),_:1})])]),_:1},8,["items","items-length","loading","search"])]),_:1})]),_:1})]),_:1})}}}),Me=Z(Oe,[["__scopeId","data-v-50240389"]]);var q={exports:{}};(function(S,C){(function(u,t){S.exports=t()})(window,function(){return function(l){var u={};function t(a){if(u[a])return u[a].exports;var s=u[a]={i:a,l:!1,exports:{}};return l[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=l,t.c=u,t.d=function(a,s,d){t.o(a,s)||Object.defineProperty(a,s,{enumerable:!0,get:d})},t.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,s){if(s&1&&(a=t(a)),s&8||s&4&&typeof a=="object"&&a&&a.__esModule)return a;var d=Object.create(null);if(t.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),s&2&&typeof a!="string")for(var p in a)t.d(d,p,(function(r){return a[r]}).bind(null,p));return d},t.n=function(a){var s=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(s,"a",s),s},t.o=function(a,s){return Object.prototype.hasOwnProperty.call(a,s)},t.p="",t(t.s=0)}({"./src/index.js":function(l,u,t){t.r(u),t("./src/sass/index.scss");var a=t("./src/js/init.js"),s=a.default.init;typeof window<"u"&&(window.printJS=s),u.default=s},"./src/js/browser.js":function(l,u,t){t.r(u);var a={isFirefox:function(){return typeof InstallTrigger<"u"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!a.isIE()&&!!window.StyleMedia},isChrome:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!d.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};u.default=a},"./src/js/functions.js":function(l,u,t){t.r(u),t.d(u,"addWrapper",function(){return p}),t.d(u,"capitalizePrint",function(){return r}),t.d(u,"collectStyles",function(){return n}),t.d(u,"addHeader",function(){return o}),t.d(u,"cleanUp",function(){return m}),t.d(u,"isRawHTML",function(){return h});var a=t("./src/js/modal.js"),s=t("./src/js/browser.js");function d(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(b){return typeof b}:d=function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},d(e)}function p(e,c){var b="font-family:"+c.font+" !important; font-size: "+c.font_size+" !important; width:100%;";return'<div style="'+b+'">'+e+"</div>"}function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function n(e,c){for(var b=document.defaultView||window,f="",_=b.getComputedStyle(e,""),O=0;O<_.length;O++)(c.targetStyles.indexOf("*")!==-1||c.targetStyle.indexOf(_[O])!==-1||i(c.targetStyles,_[O]))&&_.getPropertyValue(_[O])&&(f+=_[O]+":"+_.getPropertyValue(_[O])+";");return f+="max-width: "+c.maxWidth+"px !important; font-size: "+c.font_size+" !important;",f}function i(e,c){for(var b=0;b<e.length;b++)if(d(c)==="object"&&c.indexOf(e[b])!==-1)return!0;return!1}function o(e,c){var b=document.createElement("div");if(h(c.header))b.innerHTML=c.header;else{var f=document.createElement("h1"),_=document.createTextNode(c.header);f.appendChild(_),f.setAttribute("style",c.headerStyle),b.appendChild(f)}e.insertBefore(b,e.childNodes[0])}function m(e){e.showModal&&a.default.close(),e.onLoadingEnd&&e.onLoadingEnd(),(e.showModal||e.onLoadingStart)&&window.URL.revokeObjectURL(e.printable);var c="mouseover";(s.default.isChrome()||s.default.isFirefox())&&(c="focus");var b=function f(){window.removeEventListener(c,f),e.onPrintDialogClose();var _=document.getElementById(e.frameId);_&&_.remove()};window.addEventListener(c,b)}function h(e){var c=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return c.test(e)}},"./src/js/html.js":function(l,u,t){t.r(u);var a=t("./src/js/functions.js"),s=t("./src/js/print.js");function d(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(o){return typeof o}:d=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},d(n)}u.default={print:function(i,o){var m=r(i.printable)?i.printable:document.getElementById(i.printable);if(!m){window.console.error("Invalid HTML element id: "+i.printable);return}i.printableElement=p(m,i),i.header&&Object(a.addHeader)(i.printableElement,i),s.default.send(i,o)}};function p(n,i){for(var o=n.cloneNode(),m=Array.prototype.slice.call(n.childNodes),h=0;h<m.length;h++)if(i.ignoreElements.indexOf(m[h].id)===-1){var e=p(m[h],i);o.appendChild(e)}switch(i.scanStyles&&n.nodeType===1&&o.setAttribute("style",Object(a.collectStyles)(n,i)),n.tagName){case"SELECT":o.value=n.value;break;case"CANVAS":o.getContext("2d").drawImage(n,0,0);break}return o}function r(n){return d(n)==="object"&&n&&(n instanceof HTMLElement||n.nodeType===1)}},"./src/js/image.js":function(l,u,t){t.r(u);var a=t("./src/js/functions.js"),s=t("./src/js/print.js"),d=t("./src/js/browser.js");u.default={print:function(r,n){r.printable.constructor!==Array&&(r.printable=[r.printable]),r.printableElement=document.createElement("div"),r.printable.forEach(function(i){var o=document.createElement("img");if(o.setAttribute("style",r.imageStyle),o.src=i,d.default.isFirefox()){var m=o.src;o.src=m}var h=document.createElement("div");h.appendChild(o),r.printableElement.appendChild(h)}),r.header&&Object(a.addHeader)(r.printableElement,r),s.default.send(r,n)}}},"./src/js/init.js":function(l,u,t){t.r(u);var a=t("./src/js/browser.js"),s=t("./src/js/modal.js"),d=t("./src/js/pdf.js"),p=t("./src/js/html.js"),r=t("./src/js/raw-html.js"),n=t("./src/js/image.js"),i=t("./src/js/json.js");function o(h){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?o=function(c){return typeof c}:o=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},o(h)}var m=["pdf","html","image","json","raw-html"];u.default={init:function(){var e={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(ee){throw ee},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},c=arguments[0];if(c===void 0)throw new Error("printJS expects at least 1 attribute.");switch(o(c)){case"string":e.printable=encodeURI(c),e.fallbackPrintable=e.printable,e.type=arguments[1]||e.type;break;case"object":e.printable=c.printable,e.fallbackPrintable=typeof c.fallbackPrintable<"u"?c.fallbackPrintable:e.printable,e.fallbackPrintable=e.base64?"data:application/pdf;base64,".concat(e.fallbackPrintable):e.fallbackPrintable;for(var b in e)b==="printable"||b==="fallbackPrintable"||(e[b]=typeof c[b]<"u"?c[b]:e[b]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+o(c))}if(!e.printable)throw new Error("Missing printable information.");if(!e.type||typeof e.type!="string"||m.indexOf(e.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");e.showModal&&s.default.show(e),e.onLoadingStart&&e.onLoadingStart();var f=document.getElementById(e.frameId);f&&f.parentNode.removeChild(f);var _=document.createElement("iframe");switch(a.default.isFirefox()?_.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):_.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),_.setAttribute("id",e.frameId),e.type!=="pdf"&&(_.srcdoc="<html><head><title>"+e.documentTitle+"</title>",e.css&&(Array.isArray(e.css)||(e.css=[e.css]),e.css.forEach(function(L){_.srcdoc+='<link rel="stylesheet" href="'+L+'">'})),_.srcdoc+="</head><body></body></html>"),e.type){case"pdf":if(a.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var O=window.open(e.fallbackPrintable,"_blank");O.focus(),e.onIncompatibleBrowser()}catch(L){e.onError(L)}finally{e.showModal&&s.default.close(),e.onLoadingEnd&&e.onLoadingEnd()}else d.default.print(e,_);break;case"image":n.default.print(e,_);break;case"html":p.default.print(e,_);break;case"raw-html":r.default.print(e,_);break;case"json":i.default.print(e,_);break}}}},"./src/js/json.js":function(l,u,t){t.r(u);var a=t("./src/js/functions.js"),s=t("./src/js/print.js");function d(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(i){return typeof i}:d=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},d(r)}u.default={print:function(n,i){if(d(n.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof n.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!n.properties||!Array.isArray(n.properties))throw new Error("Invalid properties array for your JSON data.");n.properties=n.properties.map(function(o){return{field:d(o)==="object"?o.field:o,displayName:d(o)==="object"?o.displayName:o,columnSize:d(o)==="object"&&o.columnSize?o.columnSize+";":100/n.properties.length+"%;"}}),n.printableElement=document.createElement("div"),n.header&&Object(a.addHeader)(n.printableElement,n),n.printableElement.innerHTML+=p(n),s.default.send(n,i)}};function p(r){var n=r.printable,i=r.properties,o='<table style="border-collapse: collapse; width: 100%;">';r.repeatTableHeader&&(o+="<thead>"),o+="<tr>";for(var m=0;m<i.length;m++)o+='<th style="width:'+i[m].columnSize+";"+r.gridHeaderStyle+'">'+Object(a.capitalizePrint)(i[m].displayName)+"</th>";o+="</tr>",r.repeatTableHeader&&(o+="</thead>"),o+="<tbody>";for(var h=0;h<n.length;h++){o+="<tr>";for(var e=0;e<i.length;e++){var c=n[h],b=i[e].field.split(".");if(b.length>1)for(var f=0;f<b.length;f++)c=c[b[f]];else c=c[i[e].field];o+='<td style="width:'+i[e].columnSize+r.gridStyle+'">'+c+"</td>"}o+="</tr>"}return o+="</tbody></table>",o}},"./src/js/modal.js":function(l,u,t){t.r(u);var a={show:function(d){var p="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",r=document.createElement("div");r.setAttribute("style",p),r.setAttribute("id","printJS-Modal");var n=document.createElement("div");n.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var i=document.createElement("div");i.setAttribute("class","printClose"),i.setAttribute("id","printClose"),n.appendChild(i);var o=document.createElement("span");o.setAttribute("class","printSpinner"),n.appendChild(o);var m=document.createTextNode(d.modalMessage);n.appendChild(m),r.appendChild(n),document.getElementsByTagName("body")[0].appendChild(r),document.getElementById("printClose").addEventListener("click",function(){a.close()})},close:function(){var d=document.getElementById("printJS-Modal");d&&d.parentNode.removeChild(d)}};u.default=a},"./src/js/pdf.js":function(l,u,t){t.r(u);var a=t("./src/js/print.js"),s=t("./src/js/functions.js");u.default={print:function(r,n){if(r.base64){var i=Uint8Array.from(atob(r.printable),function(m){return m.charCodeAt(0)});d(r,n,i);return}r.printable=/^(blob|http|\/\/)/i.test(r.printable)?r.printable:window.location.origin+(r.printable.charAt(0)!=="/"?"/"+r.printable:r.printable);var o=new window.XMLHttpRequest;o.responseType="arraybuffer",o.addEventListener("error",function(){Object(s.cleanUp)(r),r.onError(o.statusText,o)}),o.addEventListener("load",function(){if([200,201].indexOf(o.status)===-1){Object(s.cleanUp)(r),r.onError(o.statusText,o);return}d(r,n,o.response)}),o.open("GET",r.printable,!0),o.send()}};function d(p,r,n){var i=new window.Blob([n],{type:"application/pdf"});i=window.URL.createObjectURL(i),r.setAttribute("src",i),a.default.send(p,r)}},"./src/js/print.js":function(l,u,t){t.r(u);var a=t("./src/js/browser.js"),s=t("./src/js/functions.js"),d={send:function(o,m){document.getElementsByTagName("body")[0].appendChild(m);var h=document.getElementById(o.frameId);h.onload=function(){if(o.type==="pdf"){a.default.isFirefox()?setTimeout(function(){return p(h,o)},1e3):p(h,o);return}var e=h.contentWindow||h.contentDocument;if(e.document&&(e=e.document),e.body.appendChild(o.printableElement),o.type!=="pdf"&&o.style){var c=document.createElement("style");c.innerHTML=o.style,e.head.appendChild(c)}var b=e.getElementsByTagName("img");b.length>0?r(Array.from(b)).then(function(){return p(h,o)}):p(h,o)}}};function p(i,o){try{if(i.focus(),a.default.isEdge()||a.default.isIE())try{i.contentWindow.document.execCommand("print",!1,null)}catch{i.contentWindow.print()}else i.contentWindow.print()}catch(m){o.onError(m)}finally{a.default.isFirefox()&&(i.style.visibility="hidden",i.style.left="-1px"),Object(s.cleanUp)(o)}}function r(i){var o=i.map(function(m){if(m.src&&m.src!==window.location.href)return n(m)});return Promise.all(o)}function n(i){return new Promise(function(o){var m=function h(){!i||typeof i.naturalWidth>"u"||i.naturalWidth===0||!i.complete?setTimeout(h,500):o()};m()})}u.default=d},"./src/js/raw-html.js":function(l,u,t){t.r(u);var a=t("./src/js/print.js");u.default={print:function(d,p){d.printableElement=document.createElement("div"),d.printableElement.setAttribute("style","width:100%"),d.printableElement.innerHTML=d.printable,a.default.send(d,p)}}},"./src/sass/index.scss":function(l,u,t){},0:function(l,u,t){l.exports=t("./src/index.js")}}).default})})(q);var Le=q.exports;const De=re(Le),Ie={class:"header"},Te={class:"customer-name"},ze={class:"location"},Ae={class:"shipping-logo-container"},Be=["src"],Ne={class:"logos"},Ve={key:0,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/N11_logo.svg/320px-N11_logo.svg.png",alt:"n11 Logo",class:"logo n11-logo"},Ue={key:1,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/320px-Hepsiburada_logo_official.svg.png",alt:"Hepsiburada Logo",class:"logo"},$e={key:2,src:"https://birfatura.com/wp-content/uploads/2022/03/pazarama-pazaryeri-entegrasyonu.svg",alt:"Pazarama Logo",class:"logo"},Ke={class:"barcode"},He=["src"],We={class:"footer"},Re={class:"stock-code"},Fe={style:{"margin-block-end":"5px"}},Je={class:"mt-1"},Ge=T({__name:"Yazdir",props:{platform:{},customerName:{},isPrinted:{},city:{},district:{},shippingCompanyName:{},barcodeNumber:{},orderId:{},items:{}},emits:["printDone"],setup(S,{emit:C}){const l=S,u=C,t=`${l.shippingCompanyName.toUpperCase()} `.repeat(500);function a(){return{"sürat kargo":"https://galeri12.uludagsozluk.com/590/surat-kargo_620735.png","yurtiçi kargo":"https://upload.wikimedia.org/wikipedia/tr/a/a6/YurticiKargo_Logo.gif","mng kargo":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/MNG_Cargo_logo.svg/320px-MNG_Cargo_logo.svg.png",mng:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/MNG_Cargo_logo.svg/320px-MNG_Cargo_logo.svg.png"}[l.shippingCompanyName.toLowerCase()]||""}const s=function(){u("printDone",l.orderId)};function d(){const p=l.items.map(r=>`
    <div class="label">
      <div class="header">
        <p class="customer-name">${l.customerName}</p>
        <p class="location">${l.city} / ${l.district}</p>
      </div>
      <div class="shipping-logo-container">
     
        <img src="${a()}" alt="Kargo Firması Logo" class="shipping-logo" />
       </div>
       
      <div class="logos">
        <img src="${l.platform==="n11"?"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/N11_logo.svg/320px-N11_logo.svg.png":l.platform==="hepsiburada"?"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/320px-Hepsiburada_logo_official.svg.png":l.platform==="pazarama"?"https://birfatura.com/wp-content/uploads/2022/03/pazarama-pazaryeri-entegrasyonu.svg":""}" alt="Platform Logo" class="logo ${l.platform==="n11"?"n11-logo":""}" />
      </div>
      <div class="barcode">
        <img src="https://barcode.tec-it.com/barcode.ashx?data=${l.barcodeNumber}&code=Code128" alt="Barkod" />
      </div>
      <div class="footer">
        <p class="stock-code">Stok Kodu: ${r.product.productCode}</p>
      </div>
    </div>
  `).join("");De({printable:p,type:"raw-html",onPrintDialogClose:s,targetStyles:["*"],style:`
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
  width: 10cm;
  height: 10cm;
  position: relative; /* Pseudo-element konumlandırma için gerekli */
  overflow: hidden; /* Taşmaları önlemek için */
}

.label::before {
  content: '${t}'; /* Watermark metni */
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%; /* Genişliği artırarak tüm arka plana yayılır */
  height: 200%; /* Yüksekliği artırarak tüm arka plana yayılır */
  transform: rotate(-45deg); /* Ortala ve döndür */
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.1); /* Şeffaflık ayarı */
  z-index: 1; /* Diğer içeriklerin altında kalması için */
  pointer-events: none; /* Tıklanamaz hale getir */
}

.header {
  margin-block: 0.5cm 0.5cm /* Müşteri bilgilerini 0.5 cm aşağı kaydır */
}

.header,
.barcode,
.shipping-logo-container {
  position: relative; /* Üstte kalması için */
  z-index: 2; /* Watermark altında */
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
  inline-size: 120px; /* Platform logosunun boyutunu ayarlayın */
}

.n11-logo {
  inline-size: 70px;
}

.shipping-logo-container {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
   width: 100%;
  margin-block-start: 0.5cm; /* Kargo logosu için üstten boşluk */
}

.shipping-logo {
  margin: 0;
  max-width: 100%;
  block-size: auto;
  inline-size: 250px; /* Kargo firmasının logosunun boyutunu ayarlayın */
 
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
    `,scanStyles:!1,honorMarginPadding:!1})}return(p,r)=>(E(),x("div",null,[(E(!0),x(A,null,z(p.items,(n,i)=>(E(),x("div",{key:i,class:"label",style:{display:"none"}},[v("div",Ie,[v("p",Te,w(p.customerName),1),v("p",ze,w(p.city)+" / "+w(p.district),1)]),v("div",Ae,[v("img",{src:a(),alt:"Kargo Firması Logo",class:"shipping-logo"},null,8,Be)]),v("div",Ne,[p.platform==="n11"?(E(),x("img",Ve)):P("",!0),p.platform==="hepsiburada"?(E(),x("img",Ue)):P("",!0),p.platform==="pazarama"?(E(),x("img",$e)):P("",!0)]),v("div",Ke,[v("img",{src:`https://barcode.tec-it.com/barcode.ashx?data=${p.barcodeNumber}&code=Code128`,alt:"Barkod"},null,8,He)]),v("div",We,[v("p",Re," Stok Kodu: "+w(n.product.productCode),1)])]))),128)),le(v("small",Fe,[y(W,{elevated:"",color:"error",class:"font-weight-medium mt-2",size:"small",label:""},{default:g(()=>[M(" Kontrol Edilecek ")]),_:1})],512),[[se,p.isPrinted===1]]),v("div",Je,[v("span",null,[v("a",{href:"#",class:"print-link",onClick:J(d,["prevent"])},w(p.isPrinted===0?"Etiket Yazdır":"Tekrar Yazdır"),1)])])]))}}),Ye=Z(Ge,[["__scopeId","data-v-eca84b59"]]),Xe={class:"d-flex"},Ze={key:0,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/N11_logo.svg/320px-N11_logo.svg.png",alt:"n11 Logo",class:"logo n11-logo",style:{"inline-size":"50px"}},Qe={key:1,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/320px-Hepsiburada_logo_official.svg.png",alt:"Hepsiburada Logo",class:"logo",style:{"inline-size":"90px"}},qe={key:2,src:"https://birfatura.com/wp-content/uploads/2022/03/pazarama-pazaryeri-entegrasyonu.svg",alt:"Pazarama Logo",class:"logo",style:{"inline-size":"90px"}},et={class:"d-flex"},tt={class:"d-flex flex-column"},ot={class:"d-block font-weight-medium text-high-emphasis text-truncate"},it={class:"d-flex flex-column"},nt={class:"d-block font-weight-small text-high-emphasis text-truncate",style:{"font-size":"14px"}},at={style:{"margin-block-end":"0"}},rt={class:"d-flex flex-column"},lt=T({__name:"SiparisListesiSecond",setup(S,{expose:C}){const l=Q(),u=k(""),t=k(""),a=k(!1),s=[{title:"S/N",value:"siparisNo"},{title:"Platform",key:"platformId"},{title:"Sipariş Bilgileri",key:"orderDate"},{title:"Müşteri Bilgileri",key:"buyer"},{title:"Ürün Bilgileri",key:"items"},{title:"Kargo Bilgileri",key:"shippingCompanyName"}],d=k({deger:"",item:0,title:"",message:""}),p=async m=>{m.deger==="approve_order"&&await l.addHakedis(m.item).then(()=>{a.value=!1,l.options.status=1,l.fetchData()})},r=m=>{l.options.page=m.page??0,l.options.search=m.search??"",l.options.status=2,l.fetchData()},n=m=>{l.markAsPrinted(m)},i=async m=>{},o=()=>{t.value&&i(t.value)};return C({updateDataTable:r}),(m,h)=>{const e=$,c=H,b=Ye;return E(),D(N,null,{default:g(()=>[y(e,{modelValue:j(l).loading,"onUpdate:modelValue":h[0]||(h[0]=f=>j(l).loading=f)},null,8,["modelValue"]),y(c,{modelValue:a.value,"onUpdate:modelValue":h[1]||(h[1]=f=>a.value=f),deger:d.value.deger,item:d.value.item,title:d.value.title,message:d.value.message,onClickedAgree:p},null,8,["modelValue","deger","item","title","message"]),y(I,{cols:"12",md:"12"},{default:g(()=>[y(B,null,{default:g(()=>[y(fe,null,{default:g(()=>[y(pe,{onSubmit:J(()=>{},["prevent"])},{default:g(()=>[y(N,null,{default:g(()=>[y(I,{cols:"12",md:"12"},{default:g(()=>[y(me,{modelValue:t.value,"onUpdate:modelValue":h[2]||(h[2]=f=>t.value=f),"prepend-inner-icon":"ri-barcode-line",label:"Son Kontrol için Barkod Okut",placeholder:"Son Kontrol için Barkod Okut",onKeyup:de(o,["enter"])},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),y(I,{cols:"12",md:"12"},{default:g(()=>[y(B,null,{default:g(()=>[y(K,{headers:s,items:j(l).confirmedOrders,"items-length":j(l).totalItems,loading:j(l).loading,search:u.value,"item-value":"id",class:"text-no-wrap","hide-default-footer":"","onUpdate:options":r},{"item.siparisNo":g(({index:f})=>[M(w(f+1),1)]),"item.platformId":g(({item:f})=>[v("div",Xe,[f.platformId===1?(E(),x("img",Ze)):P("",!0),f.platformId===2?(E(),x("img",Qe)):P("",!0),f.platformId===3?(E(),x("img",qe)):P("",!0)])]),"item.orderDate":g(({item:f})=>[v("div",et,[v("span",null,w(f.orderDate),1)])]),"item.buyer":g(({item:f})=>[v("div",tt,[v("span",ot,w(f.buyer.fullName),1),v("small",null,w(f.buyer.adresses[0].district)+" / "+w(f.buyer.adresses[0].city),1)])]),"item.items":g(({item:f})=>[y(G,null,{default:g(()=>[(E(!0),x(A,null,z(f.items,_=>(E(),D(Y,{key:_.id,subtitle:`${_.product.productCode} X ${_.orderable.quantity}`,title:_.product.productTitle},{prepend:g(()=>[y(X,{color:"grey",rounded:"0",size:"64"},{default:g(()=>[y(R,{src:_.product.cover_image.url},null,8,["src"])]),_:2},1024)]),_:2},1032,["subtitle","title"]))),128))]),_:2},1024)]),"item.shippingCompanyName":g(({item:f})=>[v("div",it,[v("span",nt,w(f.shippingCompanyName),1),v("small",at,[y(W,{elevated:"",color:"success",size:"small",class:"mt-1",label:""},{default:g(()=>[M(w(f.campaignNumber),1)]),_:2},1024)]),v("div",rt,[y(b,{platform:f.platformId===1?"n11":f.platformId===2?"hepsiburada":"pazarama",district:f.buyer.adresses[0].district,city:f.buyer.adresses[0].city,"shipping-company-name":f.shippingCompanyName,"barcode-number":f.campaignNumber,"customer-name":f.buyer.fullName,items:f.items,"order-id":f.id,"is-printed":f.is_printed,onPrintDone:n},null,8,["platform","district","city","shipping-company-name","barcode-number","customer-name","items","order-id","is-printed"])])])]),_:1},8,["items","items-length","loading","search"])]),_:1})]),_:1})]),_:1})}}}),jt=T({__name:"siparisler",setup(S){const C=ce(),l=k(C.params.tab),u=k(),t=k(),a=[{tab:"account",title:"Yeni Siparişler",icon:"ri-group-line"},{tab:"security",title:"Kargolanacak Siparişler (Onaylanmış)",icon:"ri-lock-line"}],s=d=>{d==="account"&&u.value.updateOptions({page:1,itemsPerPage:100,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:"",status:1}),d==="security"&&t.value.updateDataTable({page:1,itemsPerPage:100,sortBy:[],sortDesc:[],groupBy:[],depo_id:0,search:"",status:2})};return(d,p)=>(E(),x("div",null,[y(ye,{modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=r=>l.value=r),"show-arrows":""},{default:g(()=>[(E(),x(A,null,z(a,r=>y(ge,{key:r.icon,value:r.tab,onClick:n=>s(r.tab)},{default:g(()=>[y(F,{size:"20",start:"",icon:r.icon},null,8,["icon"]),M(" "+w(r.title),1)]),_:2},1032,["value","onClick"])),64))]),_:1},8,["modelValue"]),y(he,{modelValue:l.value,"onUpdate:modelValue":p[1]||(p[1]=r=>l.value=r),class:"mt-5 disable-tab-transition",disabled:""},{default:g(()=>[y(U,{value:"account"},{default:g(()=>[y(Me,{ref_key:"siparisListesi",ref:u},null,512)]),_:1}),y(U,{value:"security"},{default:g(()=>[y(lt,{ref_key:"siparisListesiSecond",ref:t},null,512)]),_:1})]),_:1},8,["modelValue"])]))}});export{jt as default};
