import{u as t,a}from"./Bz5J01ak.js";const n="sanctum.token.cookie",u={async get(e){return await e.runWithContext(()=>{const o=t(n,{readonly:!0});return a(o.value)??void 0})},async set(e,o){await e.runWithContext(()=>{const r=t(n,{secure:!0});r.value=o})}};export{u as cookieTokenStorage};
