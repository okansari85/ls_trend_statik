import{d as p,o as r,m as u,e as o,t as c,r as b,b as t,V as h,br as m,u as i,aQ as f,c as k,a as v,bs as C,P as a,Q as s,F as y}from"./JGG0kRnj.js";import{_ as $}from"./w-gwd1yq.js";const w={class:"nav-section-title"},N={class:"title-wrapper"},V=["textContent"],g=p({__name:"VerticalNavSectionTitle",props:{item:{}},setup(d){return(e,l)=>(r(),u("li",w,[o("div",N,[o("span",{class:"title-text",textContent:c(e.item.heading)},null,8,V)])]))}}),A={class:"nav-item-title"},D={class:"nav-group-children-wrapper"},I={class:"nav-group-children"},L=p({__name:"VerticalNavGroup",props:{item:{}},setup(d){const e=b(!1);return(l,_)=>(r(),u("li",{class:m(["nav-group",i(e)&&"open"])},[o("div",{class:"nav-group-label",onClick:_[0]||(_[0]=T=>e.value=!i(e))},[t(h,{icon:l.item.icon||"ri-checkbox-blank-circle-line",class:"nav-item-icon"},null,8,["icon"]),o("span",A,c(l.item.title),1),o("span",{class:m(["nav-item-badge",l.item.badgeClass])},c(l.item.badgeContent),3),t(h,{icon:"ri-arrow-right-s-line",class:"nav-group-arrow"})]),o("div",D,[o("ul",I,[f(l.$slots,"default")])])],2))}}),S={class:"nav-item-title"},n=p({__name:"VerticalNavLink",props:{item:{}},setup(d){return(e,l)=>(r(),u("li",{class:m(["nav-link",{disabled:e.item.disable}])},[(r(),k(C(e.item.to?i($):"a"),{to:e.item.to,href:e.item.href,target:e.item.target},{default:v(()=>[t(h,{icon:e.item.icon||"ri-checkbox-blank-circle-line",class:"nav-item-icon"},null,8,["icon"]),o("span",S,c(e.item.title),1),o("span",{class:m(["nav-item-badge",e.item.badgeClass])},c(e.item.badgeContent),3)]),_:1},8,["to","href","target"]))],2))}}),x=p({__name:"NavItems",setup(d){const e=b(!1);return(l,_)=>(r(),u(y,null,[t(n,{item:{title:"Stok Giriş/Çıkış",to:"/stok-hareketleri"}}),t(n,{item:{title:"Geçmiş Hareketler",to:"/stock-moevements"}}),a(t(L,{item:{title:"Dashboards",badgeContent:"5",badgeClass:"bg-error",icon:"ri-home-smile-line"}},{default:v(()=>[t(n,{item:{title:"Analytics",to:"/dashboard"}})]),_:1},512),[[s,i(e)]]),t(g,{item:{heading:"TANIMLAMALAR"}}),t(n,{item:{title:"Depo & Raflar",icon:"ri-user-settings-line",to:"/account-settings"}}),t(n,{item:{title:"Malzemeler",icon:"ri-bar-chart-box-line",to:"/malzemeler"}}),a(t(n,{item:{title:"Login",icon:"ri-login-box-line",to:"/login"}},null,512),[[s,i(e)]]),a(t(n,{item:{title:"Register",icon:"ri-user-add-line",to:"/register"}},null,512),[[s,i(e)]]),a(t(n,{item:{title:"Error",icon:"ri-information-line",to:"/no-existence"}},null,512),[[s,i(e)]]),a(t(g,{item:{heading:"User Interface"}},null,512),[[s,i(e)]]),a(t(n,{item:{title:"Typography",icon:"ri-text",to:"/typography"}},null,512),[[s,i(e)]]),a(t(n,{item:{title:"Icons",icon:"ri-remixicon-line",to:"/icons"}},null,512),[[s,i(e)]]),a(t(n,{item:{title:"Cards",icon:"ri-bar-chart-box-line",to:"/cards"}},null,512),[[s,i(e)]]),a(t(g,{item:{heading:"Forms & Tables"}},null,512),[[s,i(e)]]),a(t(n,{item:{title:"Form Layouts",icon:"ri-layout-4-line",to:"/form-layouts"}},null,512),[[s,i(e)]]),a(t(n,{item:{title:"Tables",icon:"ri-table-alt-line",to:"/tables"}},null,512),[[s,i(e)]])],64))}});export{x as _};
