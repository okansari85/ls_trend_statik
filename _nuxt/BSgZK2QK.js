import{_ as J}from"./Bn0eEpFj.js";import{l as st}from"./CLyAcjTy.js";import{bp as L,d as O,aM as F,r as $,br as Q,av as at,o as Z,c as G,b as T,f as P,aJ as E,e as W,a as C,bs as it,bt as ct,S as ht,T as ut,U as ft,V}from"./Bzl7vgEE.js";import{l as dt}from"./nmMOoAIE.js";import{_ as tt}from"./DlAUqK2U.js";import{u as pt,s as vt,_ as gt}from"./BcgiY33Y.js";import{_ as bt}from"./CTSB2dqs.js";import mt from"./BeV4tH9W.js";import{_ as yt}from"./BeW0ktpI.js";import{V as wt}from"./DchmxpWH.js";import"./CgOdu4Xv.js";import"./DH9be-oK.js";import"./DY7PVvcf.js";import"./B-jP44J3.js";import"./C-GTDzx5.js";import"./s5ckIUta.js";import"./ldpW4_za.js";import"./DkY6O8V-.js";import"./B3S9jgMf.js";import"./D3f_2ugs.js";import"./CS6wCvD6.js";/* empty css        *//*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function H(t){return getComputedStyle(t)}function y(t,e){for(var l in e){var n=e[l];typeof n=="number"&&(n=n+"px"),t.style[l]=n}return t}function x(t){var e=document.createElement("div");return e.className=t,e}var K=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function R(t,e){if(!K)throw new Error("No element matching method supported");return K.call(t,e)}function A(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function U(t,e){return Array.prototype.filter.call(t.children,function(l){return R(l,e)})}var g={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},et={x:null,y:null};function rt(t,e){var l=t.element.classList,n=g.state.scrolling(e);l.contains(n)?clearTimeout(et[e]):l.add(n)}function lt(t,e){et[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(g.state.scrolling(e))},t.settings.scrollingThreshold)}function Yt(t,e){rt(t,e),lt(t,e)}var D=function(e){this.element=e,this.handlers={}},ot={isEmpty:{configurable:!0}};D.prototype.bind=function(e,l){typeof this.handlers[e]>"u"&&(this.handlers[e]=[]),this.handlers[e].push(l),this.element.addEventListener(e,l,!1)};D.prototype.unbind=function(e,l){var n=this;this.handlers[e]=this.handlers[e].filter(function(a){return l&&a!==l?!0:(n.element.removeEventListener(e,a,!1),!1)})};D.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)};ot.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return t.handlers[e].length===0})};Object.defineProperties(D.prototype,ot);var k=function(){this.eventElements=[]};k.prototype.eventElement=function(e){var l=this.eventElements.filter(function(n){return n.element===e})[0];return l||(l=new D(e),this.eventElements.push(l)),l};k.prototype.bind=function(e,l,n){this.eventElement(e).bind(l,n)};k.prototype.unbind=function(e,l,n){var a=this.eventElement(e);a.unbind(l,n),a.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(a),1)};k.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]};k.prototype.once=function(e,l,n){var a=this.eventElement(e),i=function(o){a.unbind(l,i),n(o)};a.bind(l,i)};function B(t){if(typeof window.CustomEvent=="function")return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function I(t,e,l,n,a){n===void 0&&(n=!0),a===void 0&&(a=!1);var i;if(e==="top")i=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(e==="left")i=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");Wt(t,l,i,n,a)}function Wt(t,e,l,n,a){var i=l[0],o=l[1],s=l[2],r=l[3],c=l[4],d=l[5];n===void 0&&(n=!0),a===void 0&&(a=!1);var b=t.element;t.reach[r]=null,b[s]<1&&(t.reach[r]="start"),b[s]>t[i]-t[o]-1&&(t.reach[r]="end"),e&&(b.dispatchEvent(B("ps-scroll-"+r)),e<0?b.dispatchEvent(B("ps-scroll-"+c)):e>0&&b.dispatchEvent(B("ps-scroll-"+d)),n&&Yt(t,r)),t.reach[r]&&(e||a)&&b.dispatchEvent(B("ps-"+r+"-reach-"+t.reach[r]))}function v(t){return parseInt(t,10)||0}function Xt(t){return R(t,"input,[contenteditable]")||R(t,"select,[contenteditable]")||R(t,"textarea,[contenteditable]")||R(t,"button,[contenteditable]")}function Lt(t){var e=H(t);return v(e.width)+v(e.paddingLeft)+v(e.paddingRight)+v(e.borderLeftWidth)+v(e.borderRightWidth)}var M={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function S(t){var e=t.element,l=Math.floor(e.scrollTop),n=e.getBoundingClientRect();t.containerWidth=Math.round(n.width),t.containerHeight=Math.round(n.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(U(e,g.element.rail("x")).forEach(function(a){return A(a)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(U(e,g.element.rail("y")).forEach(function(a){return A(a)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=j(t,v(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=v((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=j(t,v(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=v(l*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),Tt(e,t),t.scrollbarXActive?e.classList.add(g.state.active("x")):(e.classList.remove(g.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=t.isRtl===!0?t.contentWidth:0),t.scrollbarYActive?e.classList.add(g.state.active("y")):(e.classList.remove(g.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function j(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function Tt(t,e){var l={width:e.railXWidth},n=Math.floor(t.scrollTop);e.isRtl?l.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:l.left=t.scrollLeft,e.isScrollbarXUsingBottom?l.bottom=e.scrollbarXBottom-n:l.top=e.scrollbarXTop+n,y(e.scrollbarXRail,l);var a={top:n,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?a.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:a.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?a.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth*2-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:a.left=e.scrollbarYLeft+t.scrollLeft,y(e.scrollbarYRail,a),y(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),y(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function Ht(t){t.element,t.event.bind(t.scrollbarY,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var l=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,n=l>t.scrollbarYTop?1:-1;t.element.scrollTop+=n*t.containerHeight,S(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var l=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,n=l>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=n*t.containerWidth,S(t),e.stopPropagation()})}function St(t){q(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),q(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function q(t,e){var l=e[0],n=e[1],a=e[2],i=e[3],o=e[4],s=e[5],r=e[6],c=e[7],d=e[8],b=t.element,m=null,w=null,h=null;function u(f){f.touches&&f.touches[0]&&(f[a]=f.touches[0].pageY),b[r]=m+h*(f[a]-w),rt(t,c),S(t),f.stopPropagation(),f.type.startsWith("touch")&&f.changedTouches.length>1&&f.preventDefault()}function Y(){lt(t,c),t[d].classList.remove(g.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",u)}function p(f,X){m=b[r],X&&f.touches&&(f[a]=f.touches[0].pageY),w=f[a],h=(t[n]-t[l])/(t[i]-t[s]),X?t.event.bind(t.ownerDocument,"touchmove",u):(t.event.bind(t.ownerDocument,"mousemove",u),t.event.once(t.ownerDocument,"mouseup",Y),f.preventDefault()),t[d].classList.add(g.state.clicking),f.stopPropagation()}t.event.bind(t[o],"mousedown",function(f){p(f)}),t.event.bind(t[o],"touchstart",function(f){p(f,!0)})}function Rt(t){var e=t.element,l=function(){return R(e,":hover")},n=function(){return R(t.scrollbarX,":focus")||R(t.scrollbarY,":focus")};function a(i,o){var s=Math.floor(e.scrollTop);if(i===0){if(!t.scrollbarYActive)return!1;if(s===0&&o>0||s>=t.contentHeight-t.containerHeight&&o<0)return!t.settings.wheelPropagation}var r=e.scrollLeft;if(o===0){if(!t.scrollbarXActive)return!1;if(r===0&&i<0||r>=t.contentWidth-t.containerWidth&&i>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",function(i){if(!(i.isDefaultPrevented&&i.isDefaultPrevented()||i.defaultPrevented)&&!(!l()&&!n())){var o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if(o.tagName==="IFRAME")o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(Xt(o))return}var s=0,r=0;switch(i.which){case 37:i.metaKey?s=-t.contentWidth:i.altKey?s=-t.containerWidth:s=-30;break;case 38:i.metaKey?r=t.contentHeight:i.altKey?r=t.containerHeight:r=30;break;case 39:i.metaKey?s=t.contentWidth:i.altKey?s=t.containerWidth:s=30;break;case 40:i.metaKey?r=-t.contentHeight:i.altKey?r=-t.containerHeight:r=-30;break;case 32:i.shiftKey?r=t.containerHeight:r=-t.containerHeight;break;case 33:r=t.containerHeight;break;case 34:r=-t.containerHeight;break;case 36:r=t.contentHeight;break;case 35:r=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&s!==0||t.settings.suppressScrollY&&r!==0||(e.scrollTop-=r,e.scrollLeft+=s,S(t),a(s,r)&&i.preventDefault())}})}function _t(t){var e=t.element;function l(o,s){var r=Math.floor(e.scrollTop),c=e.scrollTop===0,d=r+e.offsetHeight===e.scrollHeight,b=e.scrollLeft===0,m=e.scrollLeft+e.offsetWidth===e.scrollWidth,w;return Math.abs(s)>Math.abs(o)?w=c||d:w=b||m,w?!t.settings.wheelPropagation:!0}function n(o){var s=o.deltaX,r=-1*o.deltaY;return(typeof s>"u"||typeof r>"u")&&(s=-1*o.wheelDeltaX/6,r=o.wheelDeltaY/6),o.deltaMode&&o.deltaMode===1&&(s*=10,r*=10),s!==s&&r!==r&&(s=0,r=o.wheelDelta),o.shiftKey?[-r,-s]:[s,r]}function a(o,s,r){if(!M.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(o))return!1;for(var c=o;c&&c!==e;){if(c.classList.contains(g.element.consuming))return!0;var d=H(c);if(r&&d.overflowY.match(/(scroll|auto)/)){var b=c.scrollHeight-c.clientHeight;if(b>0&&(c.scrollTop>0&&r<0||c.scrollTop<b&&r>0))return!0}if(s&&d.overflowX.match(/(scroll|auto)/)){var m=c.scrollWidth-c.clientWidth;if(m>0&&(c.scrollLeft>0&&s<0||c.scrollLeft<m&&s>0))return!0}c=c.parentNode}return!1}function i(o){var s=n(o),r=s[0],c=s[1];if(!a(o.target,r,c)){var d=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(c?e.scrollTop-=c*t.settings.wheelSpeed:e.scrollTop+=r*t.settings.wheelSpeed,d=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(r?e.scrollLeft+=r*t.settings.wheelSpeed:e.scrollLeft-=c*t.settings.wheelSpeed,d=!0):(e.scrollTop-=c*t.settings.wheelSpeed,e.scrollLeft+=r*t.settings.wheelSpeed),S(t),d=d||l(r,c),d&&!o.ctrlKey&&(o.stopPropagation(),o.preventDefault())}}typeof window.onwheel<"u"?t.event.bind(e,"wheel",i):typeof window.onmousewheel<"u"&&t.event.bind(e,"mousewheel",i)}function Et(t){if(!M.supportsTouch&&!M.supportsIePointer)return;var e=t.element;function l(h,u){var Y=Math.floor(e.scrollTop),p=e.scrollLeft,f=Math.abs(h),X=Math.abs(u);if(X>f){if(u<0&&Y===t.contentHeight-t.containerHeight||u>0&&Y===0)return window.scrollY===0&&u>0&&M.isChrome}else if(f>X&&(h<0&&p===t.contentWidth-t.containerWidth||h>0&&p===0))return!0;return!0}function n(h,u){e.scrollTop-=u,e.scrollLeft-=h,S(t)}var a={},i=0,o={},s=null;function r(h){return h.targetTouches?h.targetTouches[0]:h}function c(h){return h.pointerType&&h.pointerType==="pen"&&h.buttons===0?!1:!!(h.targetTouches&&h.targetTouches.length===1||h.pointerType&&h.pointerType!=="mouse"&&h.pointerType!==h.MSPOINTER_TYPE_MOUSE)}function d(h){if(c(h)){var u=r(h);a.pageX=u.pageX,a.pageY=u.pageY,i=new Date().getTime(),s!==null&&clearInterval(s)}}function b(h,u,Y){if(!e.contains(h))return!1;for(var p=h;p&&p!==e;){if(p.classList.contains(g.element.consuming))return!0;var f=H(p);if(Y&&f.overflowY.match(/(scroll|auto)/)){var X=p.scrollHeight-p.clientHeight;if(X>0&&(p.scrollTop>0&&Y<0||p.scrollTop<X&&Y>0))return!0}if(u&&f.overflowX.match(/(scroll|auto)/)){var _=p.scrollWidth-p.clientWidth;if(_>0&&(p.scrollLeft>0&&u<0||p.scrollLeft<_&&u>0))return!0}p=p.parentNode}return!1}function m(h){if(c(h)){var u=r(h),Y={pageX:u.pageX,pageY:u.pageY},p=Y.pageX-a.pageX,f=Y.pageY-a.pageY;if(b(h.target,p,f))return;n(p,f),a=Y;var X=new Date().getTime(),_=X-i;_>0&&(o.x=p/_,o.y=f/_,i=X),l(p,f)&&h.preventDefault()}}function w(){t.settings.swipeEasing&&(clearInterval(s),s=setInterval(function(){if(t.isInitialized){clearInterval(s);return}if(!o.x&&!o.y){clearInterval(s);return}if(Math.abs(o.x)<.01&&Math.abs(o.y)<.01){clearInterval(s);return}if(!t.element){clearInterval(s);return}n(o.x*30,o.y*30),o.x*=.8,o.y*=.8},10))}M.supportsTouch?(t.event.bind(e,"touchstart",d),t.event.bind(e,"touchmove",m),t.event.bind(e,"touchend",w)):M.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",d),t.event.bind(e,"pointermove",m),t.event.bind(e,"pointerup",w)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",d),t.event.bind(e,"MSPointerMove",m),t.event.bind(e,"MSPointerUp",w)))}var Mt=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},At={"click-rail":Ht,"drag-thumb":St,keyboard:Rt,wheel:_t,touch:Et},N=function(e,l){var n=this;if(l===void 0&&(l={}),typeof e=="string"&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=e,e.classList.add(g.main),this.settings=Mt();for(var a in l)this.settings[a]=l[a];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var i=function(){return e.classList.add(g.state.focus)},o=function(){return e.classList.remove(g.state.focus)};this.isRtl=H(e).direction==="rtl",this.isRtl===!0&&e.classList.add(g.rtl),this.isNegativeScroll=function(){var c=e.scrollLeft,d=null;return e.scrollLeft=-1,d=e.scrollLeft<0,e.scrollLeft=c,d}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new k,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=x(g.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=x(g.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",i),this.event.bind(this.scrollbarX,"blur",o),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var s=H(this.scrollbarXRail);this.scrollbarXBottom=parseInt(s.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=v(s.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=v(s.borderLeftWidth)+v(s.borderRightWidth),y(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=v(s.marginLeft)+v(s.marginRight),y(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=x(g.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=x(g.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",i),this.event.bind(this.scrollbarY,"blur",o),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var r=H(this.scrollbarYRail);this.scrollbarYRight=parseInt(r.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=v(r.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?Lt(this.scrollbarY):null,this.railBorderYWidth=v(r.borderTopWidth)+v(r.borderBottomWidth),y(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=v(r.marginTop)+v(r.marginBottom),y(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return At[c](n)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(c){return n.onScroll(c)}),S(this)};N.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,y(this.scrollbarXRail,{display:"block"}),y(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=v(H(this.scrollbarXRail).marginLeft)+v(H(this.scrollbarXRail).marginRight),this.railYMarginHeight=v(H(this.scrollbarYRail).marginTop)+v(H(this.scrollbarYRail).marginBottom),y(this.scrollbarXRail,{display:"none"}),y(this.scrollbarYRail,{display:"none"}),S(this),I(this,"top",0,!1,!0),I(this,"left",0,!1,!0),y(this.scrollbarXRail,{display:""}),y(this.scrollbarYRail,{display:""}))};N.prototype.onScroll=function(e){this.isAlive&&(S(this),I(this,"top",this.element.scrollTop-this.lastScrollTop),I(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};N.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),A(this.scrollbarX),A(this.scrollbarY),A(this.scrollbarXRail),A(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};N.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};const z=["scroll","ps-scroll-y","ps-scroll-x","ps-scroll-up","ps-scroll-down","ps-scroll-left","ps-scroll-right","ps-y-reach-start","ps-y-reach-end","ps-x-reach-start","ps-x-reach-end"];var Pt={name:"PerfectScrollbar",props:{options:{type:Object,required:!1,default:()=>{}},tag:{type:String,required:!1,default:"div"},watchOptions:{type:Boolean,required:!1,default:!1}},emits:z,data(){return{ps:null}},watch:{watchOptions(t){!t&&this.watcher?this.watcher():this.createWatcher()}},mounted(){this.create(),this.watchOptions&&this.createWatcher()},updated(){this.$nextTick(()=>{this.update()})},beforeUnmount(){this.destroy()},methods:{create(){this.ps&&this.$isServer||(this.ps=new N(this.$el,this.options),z.forEach(t=>{this.ps.element.addEventListener(t,e=>this.$emit(t,e))}))},createWatcher(){this.watcher=this.$watch("options",()=>{this.destroy(),this.create()},{deep:!0})},update(){this.ps&&this.ps.update()},destroy(){this.ps&&(this.ps.destroy(),this.ps=null)}},render(){return L(this.tag,{class:"ps"},this.$slots.default&&this.$slots.default())}};const nt=t=>(ht("data-v-444354aa"),t=t(),ut(),t),kt={class:"nav-header"},Ct=["innerHTML"],Dt=nt(()=>P("h1",{class:"font-weight-medium leading-normal text-xl text-uppercase"}," Materio ",-1)),Nt=nt(()=>P("div",{class:"vertical-nav-items-shadow"},null,-1)),xt=O({__name:"VerticalNav",props:{tag:{default:"aside"},isOverlayNavActive:{type:Boolean},toggleIsOverlayNavActive:{}},setup(t){const e=t,{mdAndDown:l}=F(),n=$(),a=Q();at(()=>a.path,()=>{e.toggleIsOverlayNavActive(!1)});const i=$(!1),o=r=>i.value=r,s=r=>{i.value=r.target.scrollTop>0};return(r,c)=>{const d=J;return Z(),G(ct(e.tag),{ref_key:"refNav",ref:n,class:it(["layout-vertical-nav",[{visible:r.isOverlayNavActive,scrolled:C(i),"overlay-nav":C(l)}]])},{default:T(()=>[P("div",kt,[E(r.$slots,"nav-header",{},()=>[W(d,{to:"/",class:"app-logo app-title-wrapper"},{default:T(()=>[P("div",{class:"d-flex",innerHTML:C(dt)},null,8,Ct),Dt]),_:1})],!0)]),E(r.$slots,"before-nav-items",{},()=>[Nt],!0),E(r.$slots,"nav-items",{updateIsVerticalNavScrolled:o},()=>[W(C(Pt),{tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:s},{default:T(()=>[E(r.$slots,"default",{},void 0,!0)]),_:3})],!0),E(r.$slots,"after-nav-items",{},void 0,!0)]),_:3},8,["class"])}}}),Bt=tt(xt,[["__scopeId","data-v-444354aa"]]),$t=O({setup(t,{slots:e}){const l=$(!1),n=$(!1),a=pt(l),i=Q(),{mdAndDown:o}=F();return vt(l,n),()=>{var m,w,h;const s=L(Bt,{isOverlayNavActive:l.value,toggleIsOverlayNavActive:a},{"nav-header":()=>{var u;return(u=e["vertical-nav-header"])==null?void 0:u.call(e,{toggleIsOverlayNavActive:a})},"before-nav-items":()=>{var u;return(u=e["before-vertical-nav-items"])==null?void 0:u.call(e)},default:()=>{var u;return(u=e["vertical-nav-content"])==null?void 0:u.call(e)},"after-nav-items":()=>{var u;return(u=e["after-vertical-nav-items"])==null?void 0:u.call(e)}}),r=L("header",{class:["layout-navbar navbar-blur"]},[L("div",{class:"navbar-content-container"},(m=e.navbar)==null?void 0:m.call(e,{toggleVerticalOverlayNavActive:a}))]),c=L("main",{class:"layout-page-content"},L("div",{class:"page-content-container"},(w=e.default)==null?void 0:w.call(e))),d=L("footer",{class:"layout-footer"},[L("div",{class:"footer-content-container"},(h=e.footer)==null?void 0:h.call(e))]),b=L("div",{class:["layout-overlay",{visible:n.value}],onClick:()=>{n.value=!n.value}});return L("div",{class:["layout-wrapper layout-nav-type-vertical layout-navbar-static layout-footer-static layout-content-width-fluid",o.value&&"layout-overlay-nav",i.meta.layoutWrapperClasses]},[s,L("div",{class:"layout-content-wrapper"},[r,c,d]),b])}}}),It={class:"d-flex h-100 align-center"},Ot=["src","onClick"],Vt=O({__name:"DefaultLayoutWithVerticalNav",setup(t){return(e,l)=>{const n=ft("IconBtn"),a=J;return Z(),G($t,null,{navbar:T(({toggleVerticalOverlayNavActive:i})=>[P("div",It,[W(n,{class:"ms-n3 d-lg-none",onClick:o=>i(!0)},{default:T(()=>[W(V,{icon:"ri-menu-line"})]),_:2},1032,["onClick"]),W(wt),W(gt,{class:"me-2"}),W(yt)])]),"vertical-nav-header":T(({toggleIsOverlayNavActive:i})=>[W(a,{to:"/",class:"app-logo app-title-wrapper"},{default:T(({navigate:o})=>[P("img",{src:C(st),width:"175",role:"link",onClick:o},null,8,Ot)]),_:1}),W(n,{class:"d-block d-lg-none",onClick:o=>i(!1)},{default:T(()=>[W(V,{icon:"ri-close-line"})]),_:2},1032,["onClick"])]),"vertical-nav-content":T(()=>[W(bt)]),footer:T(()=>[W(mt)]),default:T(()=>[E(e.$slots,"default",{},void 0,!0)]),_:3})}}}),fe=tt(Vt,[["__scopeId","data-v-ea4282f3"]]);export{fe as default};
