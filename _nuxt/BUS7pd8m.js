import{d,o as r,n as u,f as o,t as c,r as b,e as t,V as g,bt as p,a,aK as f,c as k,b as v,bu as C,Q as n,R as s,F as y}from"./DqC41hmf.js";import{_ as w}from"./C3E4XblB.js";const $={class:"nav-section-title"},N={class:"title-wrapper"},R=["textContent"],m=d({__name:"VerticalNavSectionTitle",props:{item:{}},setup(_){return(e,l)=>(r(),u("li",$,[o("div",N,[o("span",{class:"title-text",textContent:c(e.item.heading)},null,8,R)])]))}}),S={class:"nav-item-title"},T={class:"nav-group-children-wrapper"},V={class:"nav-group-children"},A=d({__name:"VerticalNavGroup",props:{item:{}},setup(_){const e=b(!1);return(l,h)=>(r(),u("li",{class:p(["nav-group",a(e)&&"open"])},[o("div",{class:"nav-group-label",onClick:h[0]||(h[0]=D=>e.value=!a(e))},[t(g,{icon:l.item.icon||"ri-checkbox-blank-circle-line",class:"nav-item-icon"},null,8,["icon"]),o("span",S,c(l.item.title),1),o("span",{class:p(["nav-item-badge",l.item.badgeClass])},c(l.item.badgeContent),3),t(g,{icon:"ri-arrow-right-s-line",class:"nav-group-arrow"})]),o("div",T,[o("ul",V,[f(l.$slots,"default")])])],2))}}),L={class:"nav-item-title"},i=d({__name:"VerticalNavLink",props:{item:{}},setup(_){return(e,l)=>(r(),u("li",{class:p(["nav-link",{disabled:e.item.disable}])},[(r(),k(C(e.item.to?a(w):"a"),{to:e.item.to,href:e.item.href,target:e.item.target},{default:v(()=>[t(g,{icon:e.item.icon||"ri-checkbox-blank-circle-line",class:"nav-item-icon"},null,8,["icon"]),o("span",L,c(e.item.title),1),o("span",{class:p(["nav-item-badge",e.item.badgeClass])},c(e.item.badgeContent),3)]),_:1},8,["to","href","target"]))],2))}}),F=d({__name:"NavItems",setup(_){const e=b(!1);return(l,h)=>(r(),u(y,null,[t(i,{item:{title:"Stok Giriş/Çıkış",to:"/stok-hareketleri"}}),t(i,{item:{title:"Geçmiş Hareketler",to:"/stock-moevements"}}),n(t(A,{item:{title:"Dashboards",badgeContent:"5",badgeClass:"bg-error",icon:"ri-home-smile-line"}},{default:v(()=>[t(i,{item:{title:"Analytics",to:"/dashboard"}})]),_:1},512),[[s,a(e)]]),t(m,{item:{heading:"TANIMLAMALAR"}}),t(i,{item:{title:"Depo & Raflar",icon:"ri-user-settings-line",to:"/account-settings"}}),t(i,{item:{title:"Malzemeler",icon:"ri-bar-chart-box-line",to:"/malzemeler"}}),t(m,{item:{heading:"MÜŞTERİ SİPARİŞLERİ"}}),t(i,{item:{title:"Siparişler",icon:"ri-bank-card-fill",to:"/siparisler"}}),t(i,{item:{title:"Hakediş Tablosu",icon:"ri-archive-drawer-line",to:"/hakedis"}}),n(t(i,{item:{title:"Login",icon:"ri-login-box-line",to:"/login"}},null,512),[[s,a(e)]]),n(t(i,{item:{title:"Register",icon:"ri-user-add-line",to:"/register"}},null,512),[[s,a(e)]]),n(t(m,{item:{heading:"User Interface"}},null,512),[[s,a(e)]]),n(t(i,{item:{title:"Typography",icon:"ri-text",to:"/typography"}},null,512),[[s,a(e)]]),n(t(i,{item:{title:"Icons",icon:"ri-remixicon-line",to:"/icons"}},null,512),[[s,a(e)]]),n(t(i,{item:{title:"Cards",icon:"ri-bar-chart-box-line",to:"/cards"}},null,512),[[s,a(e)]]),n(t(m,{item:{heading:"Forms & Tables"}},null,512),[[s,a(e)]]),n(t(i,{item:{title:"Form Layouts",icon:"ri-layout-4-line",to:"/form-layouts"}},null,512),[[s,a(e)]]),n(t(i,{item:{title:"Tables",icon:"ri-table-alt-line",to:"/tables"}},null,512),[[s,a(e)]])],64))}});export{F as _};
