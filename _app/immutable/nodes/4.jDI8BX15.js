import{s as be,e as ie,o as ve,f as R,n as ye}from"../chunks/scheduler.XGLZWGdw.js";import{S as $e,i as ke,g as $,h as k,j as P,f as p,k as D,a as C,d as V,t as S,b as Z,s as T,m as I,r as ee,x as Pe,c as z,n as N,u as te,y as g,v as le,p as x,z as W,w as ae,e as ce,o as Q}from"../chunks/index.li6Z87Pf.js";import{e as J,B as ne,b as H,a as X}from"../chunks/button.TlDIyBNw.js";import{g as Y}from"../chunks/navigation.YvH0BLeh.js";const Ve=({params:l})=>({slug:l.slug}),Ue=Object.freeze(Object.defineProperty({__proto__:null,load:Ve},Symbol.toStringTag,{value:"Module"}));function ue(l,e,a){const t=l.slice();return t[19]=e[a],t}function fe(l,e,a){const t=l.slice();return t[22]=e[a],t}function _e(l,e,a){const t=l.slice();return t[25]=e[a],t}function de(l){let e,a,t,n,s,c="Player Votes",f,h,d,u,q,L,G,M,j,E,U,B=J(l[5]),v=[];for(let o=0;o<B.length;o+=1)v[o]=he(_e(l,B,o));let O=J(l[6]),r=[];for(let o=0;o<O.length;o+=1)r[o]=me(fe(l,O,o));const A=o=>S(r[o],1,1,()=>{r[o]=null});let F=J(l[3]),m=[];for(let o=0;o<F.length;o+=1)m[o]=ge(ue(l,F,o));const pe=o=>S(m[o],1,1,()=>{m[o]=null});return E=new ne({props:{$$slots:{default:[Ne]},$$scope:{ctx:l}}}),E.$on("click",l[12]),{c(){e=$("div"),a=$("div"),t=$("h1"),n=$("h1"),s=$("h3"),s.textContent=c,f=T(),h=$("ol");for(let o=0;o<v.length;o+=1)v[o].c();d=T(),u=$("div"),q=I(`Select your pointing system:
				`),L=$("ul");for(let o=0;o<r.length;o+=1)r[o].c();G=T();for(let o=0;o<m.length;o+=1)m[o].c();M=T(),j=$("div"),ee(E.$$.fragment),this.h()},l(o){e=k(o,"DIV",{class:!0});var _=P(e);a=k(_,"DIV",{});var b=P(a);t=k(b,"H1",{class:!0});var i=P(t);n=k(i,"H1",{});var y=P(n);s=k(y,"H3",{class:!0,"data-svelte-h":!0}),Pe(s)!=="svelte-1vfpxjc"&&(s.textContent=c),f=z(y),h=k(y,"OL",{});var se=P(h);for(let w=0;w<v.length;w+=1)v[w].l(se);se.forEach(p),y.forEach(p),i.forEach(p),b.forEach(p),d=z(_),u=k(_,"DIV",{});var K=P(u);q=N(K,`Select your pointing system:
				`),L=k(K,"UL",{});var re=P(L);for(let w=0;w<r.length;w+=1)r[w].l(re);re.forEach(p),G=z(K);for(let w=0;w<m.length;w+=1)m[w].l(K);K.forEach(p),M=z(_),j=k(_,"DIV",{});var oe=P(j);te(E.$$.fragment,oe),oe.forEach(p),_.forEach(p),this.h()},h(){D(s,"class","font-bold text-2xl mb-2"),D(t,"class","text-3xl font-bold p-3"),D(e,"class","grid grid-cols-3")},m(o,_){C(o,e,_),g(e,a),g(a,t),g(t,n),g(n,s),g(n,f),g(n,h);for(let b=0;b<v.length;b+=1)v[b]&&v[b].m(h,null);g(e,d),g(e,u),g(u,q),g(u,L);for(let b=0;b<r.length;b+=1)r[b]&&r[b].m(L,null);g(u,G);for(let b=0;b<m.length;b+=1)m[b]&&m[b].m(u,null);g(e,M),g(e,j),le(E,j,null),U=!0},p(o,_){if(_&33){B=J(o[5]);let i;for(i=0;i<B.length;i+=1){const y=_e(o,B,i);v[i]?v[i].p(y,_):(v[i]=he(y),v[i].c(),v[i].m(h,null))}for(;i<v.length;i+=1)v[i].d(1);v.length=B.length}if(_&66){O=J(o[6]);let i;for(i=0;i<O.length;i+=1){const y=fe(o,O,i);r[i]?(r[i].p(y,_),V(r[i],1)):(r[i]=me(y),r[i].c(),V(r[i],1),r[i].m(L,null))}for(x(),i=O.length;i<r.length;i+=1)A(i);Z()}if(_&152){F=J(o[3]);let i;for(i=0;i<F.length;i+=1){const y=ue(o,F,i);m[i]?(m[i].p(y,_),V(m[i],1)):(m[i]=ge(y),m[i].c(),V(m[i],1),m[i].m(u,null))}for(x(),i=F.length;i<m.length;i+=1)pe(i);Z()}const b={};_&268435456&&(b.$$scope={dirty:_,ctx:o}),E.$set(b)},i(o){if(!U){for(let _=0;_<O.length;_+=1)V(r[_]);for(let _=0;_<F.length;_+=1)V(m[_]);V(E.$$.fragment,o),U=!0}},o(o){r=r.filter(Boolean);for(let _=0;_<r.length;_+=1)S(r[_]);m=m.filter(Boolean);for(let _=0;_<m.length;_+=1)S(m[_]);S(E.$$.fragment,o),U=!1},d(o){o&&p(e),W(v,o),W(r,o),W(m,o),ae(E)}}}function Ee(l){let e,a=l[25].displayName+"",t,n,s=l[25].currentVote+"",c,f,h;return{c(){e=$("li"),t=I(a),n=I(": "),c=I(s),f=T(),this.h()},l(d){e=k(d,"LI",{class:!0,"data-test-id":!0});var u=P(e);t=N(u,a),n=N(u,": "),c=N(u,s),f=z(u),u.forEach(p),this.h()},h(){D(e,"class","text-lg"),D(e,"data-test-id",h="user-"+l[25].id)},m(d,u){C(d,e,u),g(e,t),g(e,n),g(e,c),g(e,f)},p(d,u){u&32&&a!==(a=d[25].displayName+"")&&Q(t,a),u&32&&s!==(s=d[25].currentVote+"")&&Q(c,s),u&32&&h!==(h="user-"+d[25].id)&&D(e,"data-test-id",h)},d(d){d&&p(e)}}}function we(l){let e,a=l[25].displayName+"",t,n,s=l[25].currentVote+"",c,f,h;return{c(){e=$("li"),t=I(a),n=I(": "),c=I(s),f=T(),this.h()},l(d){e=k(d,"LI",{class:!0,"data-test-id":!0});var u=P(e);t=N(u,a),n=N(u,": "),c=N(u,s),f=z(u),u.forEach(p),this.h()},h(){D(e,"class","text-lg font-bold text-lime-300"),D(e,"data-test-id",h="user-"+l[25].id)},m(d,u){C(d,e,u),g(e,t),g(e,n),g(e,c),g(e,f)},p(d,u){u&32&&a!==(a=d[25].displayName+"")&&Q(t,a),u&32&&s!==(s=d[25].currentVote+"")&&Q(c,s),u&32&&h!==(h="user-"+d[25].id)&&D(e,"data-test-id",h)},d(d){d&&p(e)}}}function he(l){let e;function a(s,c){return s[25].id===s[0].user.id?we:Ee}let t=a(l),n=t(l);return{c(){n.c(),e=ce()},l(s){n.l(s),e=ce()},m(s,c){n.m(s,c),C(s,e,c)},p(s,c){t===(t=a(s))&&n?n.p(s,c):(n.d(1),n=t(s),n&&(n.c(),n.m(e.parentNode,e)))},d(s){s&&p(e),n.d(s)}}}function De(l){let e=l[22]+"",a;return{c(){a=I(e)},l(t){a=N(t,e)},m(t,n){C(t,a,n)},p:ye,d(t){t&&p(a)}}}function me(l){let e,a,t,n;function s(){return l[10](l[22])}return a=new ne({props:{"aria-current":l[1]===l[22],"aria-label":l[22],selected:l[22]===l[1],$$slots:{default:[De]},$$scope:{ctx:l}}}),a.$on("click",s),{c(){e=$("li"),ee(a.$$.fragment),t=T()},l(c){e=k(c,"LI",{});var f=P(e);te(a.$$.fragment,f),t=z(f),f.forEach(p)},m(c,f){C(c,e,f),le(a,e,null),g(e,t),n=!0},p(c,f){l=c;const h={};f&2&&(h["aria-current"]=l[1]===l[22]),f&2&&(h.selected=l[22]===l[1]),f&268435456&&(h.$$scope={dirty:f,ctx:l}),a.$set(h)},i(c){n||(V(a.$$.fragment,c),n=!0)},o(c){S(a.$$.fragment,c),n=!1},d(c){c&&p(e),ae(a)}}}function Ie(l){let e=l[19]+"",a;return{c(){a=I(e)},l(t){a=N(t,e)},m(t,n){C(t,a,n)},p(t,n){n&8&&e!==(e=t[19]+"")&&Q(a,e)},d(t){t&&p(a)}}}function ge(l){let e,a;function t(){return l[11](l[19])}return e=new ne({props:{"aria-current":l[4]===l[19],"aria-label":l[19],selected:l[4]===l[19],$$slots:{default:[Ie]},$$scope:{ctx:l}}}),e.$on("click",t),{c(){ee(e.$$.fragment)},l(n){te(e.$$.fragment,n)},m(n,s){le(e,n,s),a=!0},p(n,s){l=n;const c={};s&24&&(c["aria-current"]=l[4]===l[19]),s&8&&(c["aria-label"]=l[19]),s&24&&(c.selected=l[4]===l[19]),s&268435464&&(c.$$scope={dirty:s,ctx:l}),e.$set(c)},i(n){a||(V(e.$$.fragment,n),a=!0)},o(n){S(e.$$.fragment,n),a=!1},d(n){ae(e,n)}}}function Ne(l){let e;return{c(){e=I("Clear Votes")},l(a){e=N(a,"Clear Votes")},m(a,t){C(a,e,t)},d(a){a&&p(e)}}}function je(l){let e,a,t=l[2]&&l[0]&&de(l);return{c(){e=$("div"),t&&t.c(),this.h()},l(n){e=k(n,"DIV",{class:!0});var s=P(e);t&&t.l(s),s.forEach(p),this.h()},h(){D(e,"class","text-yellow-100 p-8 h-full flex flex-col justify-center items-center")},m(n,s){C(n,e,s),t&&t.m(e,null),a=!0},p(n,[s]){n[2]&&n[0]?t?(t.p(n,s),s&5&&V(t,1)):(t=de(n),t.c(),V(t,1),t.m(e,null)):t&&(x(),S(t,1,1,()=>{t=null}),Z())},i(n){a||(V(t),a=!0)},o(n){S(t),a=!1},d(n){n&&p(e),t&&t.d()}}}function Oe(){return new Date().toISOString()}function Se(l,e,a){let t,n;ie(l,H,r=>a(2,t=r)),ie(l,X,r=>a(15,n=r));let{data:s}=e,{supabase:c,session:f}=s,h=[];const d=["Fibonacci"];let u=d[0],q;async function L(r){console.debug("syncPointingSession",r),H.set(r.new)}async function G(r){a(4,q=r),R(H,t.game_state.activePlayers[f.user.id].currentVote=q,t),R(H,t.game_state.activePlayers[f.user.id].displayName=n.display_name,t),R(H,t.game_state.last_updated=Oe(),t),await j()}async function M(){a(4,q=""),Object.entries(t.game_state.activePlayers).forEach(([r,A])=>(A.currentVote="",A)),await j()}async function j(){await c.from("PointingSession").update({game_state:t.game_state,last_updated:t.last_updated}).eq("id",t.id).select().single().then(r=>{r.data&&(H.set(r.data),console.log("synced game state",r)),r.error&&console.error("error updating game state",r.error)})}async function E(){await c.from("profiles").select("*").eq("id",f.user.id).limit(1).single().then(r=>{r?.data?X.set(r.data):X.set({display_name:"default",temporary:!0})}),await c.from("PointingSession").select("*").eq("id",s.slug).single().then(r=>{console.log("Got the pointing session",r),r.data?(c.channel(`${s.slug}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"PointingSession",filter:`id=eq.${r.data.id}`},A=>L(A)).subscribe(),Object.hasOwn(r.data.game_state.activePlayers,f.user.id)?(console.log("syncing display name"),r.data.game_state.activePlayers[f.user.id]={...r.data.game_state.activePlayers[f.user.id],displayName:n.display_name}):r.data.game_state.activePlayers[f.user.id]={currentVote:"",id:f.user.id,displayName:n.display_name},H.set(r.data),j()):Y("/")})}let U=[];ve(async()=>{s.slug||Y("/"),f||(console.log("not loggin in, session:",f),Y(`/auth?next=${location}`))});const B=r=>a(1,u=r),v=r=>G(r),O=()=>M();return l.$$set=r=>{"data"in r&&a(9,s=r.data)},l.$$.update=()=>{l.$$.dirty&512&&a(0,{supabase:c,session:f}=s,f),l.$$.dirty&1&&f&&E(),l.$$.dirty&4&&t&&t?.game_state?.activePlayers&&a(5,U=Object.values(t.game_state.activePlayers)),l.$$.dirty&2&&u&&a(3,h={Fibonacci:{name:"Fibonacci",numbers:[1,2,3,5,8]}}[u].numbers)},[f,u,t,h,q,U,d,G,M,s,B,v,O]}class Fe extends $e{constructor(e){super(),ke(this,e,Se,je,be,{data:9})}}export{Fe as component,Ue as universal};
