import{aS as w,r as v,H as C,Z as b,aT as S,aU as O,aV as E,av as x,aW as P,ah as B,aX as T,a as H,aY as M,k as R,G as I,l as z}from"./D0fYuCab.js";const U=s=>s==="defer"||s===!1;function $(...s){var g;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[a,l,e={}]=s;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=B(),p=l,D=()=>null,m=()=>n.isHydrating?n.payload.data[a]:n.static.data[a];e.server=e.server??!0,e.default=e.default??D,e.getCachedData=e.getCachedData??m,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??w.deep,e.dedupe=e.dedupe??"cancel";const y=()=>e.getCachedData(a,n)!=null;if(!n._asyncData[a]||!e.immediate){(g=n.payload._errors)[a]??(g[a]=null);const c=e.deep?v:C;n._asyncData[a]={data:c(e.getCachedData(a,n)??e.default()),pending:v(!y()),error:b(n.payload._errors,a),status:v("idle")}}const t={...n._asyncData[a]};t.refresh=t.execute=(c={})=>{if(n._asyncDataPromises[a]){if(U(c.dedupe??e.dedupe))return n._asyncDataPromises[a];n._asyncDataPromises[a].cancelled=!0}if((c._initial||n.isHydrating&&c._initial!==!1)&&y())return Promise.resolve(e.getCachedData(a,n));t.pending.value=!0,t.status.value="pending";const f=new Promise((d,i)=>{try{d(p(n))}catch(_){i(_)}}).then(async d=>{if(f.cancelled)return n._asyncDataPromises[a];let i=d;e.transform&&(i=await e.transform(d)),e.pick&&(i=K(i,e.pick)),n.payload.data[a]=i,t.data.value=i,t.error.value=null,t.status.value="success"}).catch(d=>{if(f.cancelled)return n._asyncDataPromises[a];t.error.value=T(d),t.data.value=H(e.default()),t.status.value="error"}).finally(()=>{f.cancelled||(t.pending.value=!1,delete n._asyncDataPromises[a])});return n._asyncDataPromises[a]=f,n._asyncDataPromises[a]},t.clear=()=>j(n,a);const o=()=>t.refresh({_initial:!0}),u=e.server!==!1&&n.payload.serverRendered;{const c=S();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const i=c._nuxtOnBeforeMountCbs;O(()=>{i.forEach(_=>{_()}),i.splice(0,i.length)}),E(()=>i.splice(0,i.length))}u&&n.isHydrating&&(t.error.value||y())?(t.pending.value=!1,t.status.value=t.error.value?"error":"success"):c&&(n.payload.serverRendered&&n.isHydrating||e.lazy)&&e.immediate?c._nuxtOnBeforeMountCbs.push(o):e.immediate&&o();const f=M();if(e.watch){const i=x(e.watch,()=>t.refresh());f&&P(i)}const d=n.hook("app:data:refresh",async i=>{(!i||i.includes(a))&&await t.refresh()});f&&P(d)}const h=Promise.resolve(n._asyncDataPromises[a]).then(()=>t);return Object.assign(h,t),h}function j(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=null),s._asyncData[r]&&(s._asyncData[r].data.value=void 0,s._asyncData[r].error.value=null,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r].cancelled=!0,s._asyncDataPromises[r]=void 0)}function K(s,r){const a={};for(const l of r)a[l]=s[l];return a}const F=R("depolar",()=>{const s=v([]),r=v([]),a=v(!1),l=v(""),e=z();async function n(){a.value=!0,l.value="",await e("/api/get_depos").then(t=>{a.value=!1,s.value=t}).catch(t=>{a.value=!1,l.value=t.message})}async function p(t){a.value=!0,l.value="",await e("/api/addDepo",{method:"POST",body:{category_name:t,parent_id:0}}).then(o=>{s.value.push(o),a.value=!1}).catch(o=>{a.value=!1,l.value=o.message})}async function D(t){a.value=!0,l.value="",await e(`/api/get_depos/${t.id}`,{method:"PUT",body:{name:t.depo_adi}}).then(o=>{a.value=!1;const u=s.value.findIndex(h=>h.id===o.id);u!==-1&&(s.value[u]=o)}).catch(o=>{a.value=!1,l.value=o.message})}async function m(t){a.value=!0,l.value="",await e(`/api/get_depos/${t}`,{method:"DELETE"}).then(()=>{a.value=!1;const o=s.value.findIndex(u=>u.id===t);o!==-1&&s.value.splice(o,1)}).catch(o=>{a.value=!1,l.value=o.message})}const y=I(()=>t=>{const o=s.value.findIndex(u=>u.id===t);r.value=s.value[o].children??[]});return{depo:s,getAllDepos:n,addDepo:p,editDepo:D,deleteDepo:m,loading:a,error:l,getRaflar:y,raflar:r}});export{$ as a,F as u};
