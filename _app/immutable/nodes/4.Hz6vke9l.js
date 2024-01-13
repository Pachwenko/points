import{s as be,e as ie,o as ve,f as R,n as ye}from"../chunks/scheduler.XGLZWGdw.js";import{S as $e,i as ke,g as $,h as k,j as P,f as p,k as D,a as C,d as V,t as S,b as Z,s as A,m as I,r as ee,x as Pe,c as J,n as N,u as te,y as g,v as le,p as x,z as W,w as ae,e as ce,o as Q}from"../chunks/index.li6Z87Pf.js";import{e as M,B as ne,b as H,a as X}from"../chunks/button.SqWMFCdU.js";import{g as Y}from"../chunks/navigation.UR4SuMSN.js";const Ve=({params:l})=>({slug:l.slug}),Ue=Object.freeze(Object.defineProperty({__proto__:null,load:Ve},Symbol.toStringTag,{value:"Module"}));function ue(l,e,a){const t=l.slice();return t[19]=e[a],t}function fe(l,e,a){const t=l.slice();return t[22]=e[a],t}function _e(l,e,a){const t=l.slice();return t[25]=e[a],t}function de(l){let e,a,t,n,r,c="Player Votes",u,_,d,h,q,L,T,z,j,w,U,B=M(l[5]),v=[];for(let o=0;o<B.length;o+=1)v[o]=he(_e(l,B,o));let O=M(l[6]),s=[];for(let o=0;o<O.length;o+=1)s[o]=me(fe(l,O,o));const G=o=>S(s[o],1,1,()=>{s[o]=null});let F=M(l[3]),m=[];for(let o=0;o<F.length;o+=1)m[o]=ge(ue(l,F,o));const pe=o=>S(m[o],1,1,()=>{m[o]=null});return w=new ne({props:{$$slots:{default:[Ne]},$$scope:{ctx:l}}}),w.$on("click",l[12]),{c(){e=$("div"),a=$("div"),t=$("h1"),n=$("h1"),r=$("h3"),r.textContent=c,u=A(),_=$("ol");for(let o=0;o<v.length;o+=1)v[o].c();d=A(),h=$("div"),q=I(`Select your pointing system:
				`),L=$("ul");for(let o=0;o<s.length;o+=1)s[o].c();T=A();for(let o=0;o<m.length;o+=1)m[o].c();z=A(),j=$("div"),ee(w.$$.fragment),this.h()},l(o){e=k(o,"DIV",{class:!0});var f=P(e);a=k(f,"DIV",{});var b=P(a);t=k(b,"H1",{class:!0});var i=P(t);n=k(i,"H1",{});var y=P(n);r=k(y,"H3",{class:!0,"data-svelte-h":!0}),Pe(r)!=="svelte-1vfpxjc"&&(r.textContent=c),u=J(y),_=k(y,"OL",{});var se=P(_);for(let E=0;E<v.length;E+=1)v[E].l(se);se.forEach(p),y.forEach(p),i.forEach(p),b.forEach(p),d=J(f),h=k(f,"DIV",{});var K=P(h);q=N(K,`Select your pointing system:
				`),L=k(K,"UL",{});var re=P(L);for(let E=0;E<s.length;E+=1)s[E].l(re);re.forEach(p),T=J(K);for(let E=0;E<m.length;E+=1)m[E].l(K);K.forEach(p),z=J(f),j=k(f,"DIV",{});var oe=P(j);te(w.$$.fragment,oe),oe.forEach(p),f.forEach(p),this.h()},h(){D(r,"class","font-bold text-2xl mb-2"),D(t,"class","text-3xl font-bold p-3"),D(e,"class","grid grid-cols-3")},m(o,f){C(o,e,f),g(e,a),g(a,t),g(t,n),g(n,r),g(n,u),g(n,_);for(let b=0;b<v.length;b+=1)v[b]&&v[b].m(_,null);g(e,d),g(e,h),g(h,q),g(h,L);for(let b=0;b<s.length;b+=1)s[b]&&s[b].m(L,null);g(h,T);for(let b=0;b<m.length;b+=1)m[b]&&m[b].m(h,null);g(e,z),g(e,j),le(w,j,null),U=!0},p(o,f){if(f&33){B=M(o[5]);let i;for(i=0;i<B.length;i+=1){const y=_e(o,B,i);v[i]?v[i].p(y,f):(v[i]=he(y),v[i].c(),v[i].m(_,null))}for(;i<v.length;i+=1)v[i].d(1);v.length=B.length}if(f&66){O=M(o[6]);let i;for(i=0;i<O.length;i+=1){const y=fe(o,O,i);s[i]?(s[i].p(y,f),V(s[i],1)):(s[i]=me(y),s[i].c(),V(s[i],1),s[i].m(L,null))}for(x(),i=O.length;i<s.length;i+=1)G(i);Z()}if(f&152){F=M(o[3]);let i;for(i=0;i<F.length;i+=1){const y=ue(o,F,i);m[i]?(m[i].p(y,f),V(m[i],1)):(m[i]=ge(y),m[i].c(),V(m[i],1),m[i].m(h,null))}for(x(),i=F.length;i<m.length;i+=1)pe(i);Z()}const b={};f&268435456&&(b.$$scope={dirty:f,ctx:o}),w.$set(b)},i(o){if(!U){for(let f=0;f<O.length;f+=1)V(s[f]);for(let f=0;f<F.length;f+=1)V(m[f]);V(w.$$.fragment,o),U=!0}},o(o){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)S(s[f]);m=m.filter(Boolean);for(let f=0;f<m.length;f+=1)S(m[f]);S(w.$$.fragment,o),U=!1},d(o){o&&p(e),W(v,o),W(s,o),W(m,o),ae(w)}}}function we(l){let e,a=l[25].displayName+"",t,n,r=l[25].currentVote+"",c,u;return{c(){e=$("li"),t=I(a),n=I(": "),c=I(r),this.h()},l(_){e=k(_,"LI",{class:!0,"data-test-id":!0});var d=P(e);t=N(d,a),n=N(d,": "),c=N(d,r),d.forEach(p),this.h()},h(){D(e,"class","text-lg"),D(e,"data-test-id",u="user-"+l[25].id)},m(_,d){C(_,e,d),g(e,t),g(e,n),g(e,c)},p(_,d){d&32&&a!==(a=_[25].displayName+"")&&Q(t,a),d&32&&r!==(r=_[25].currentVote+"")&&Q(c,r),d&32&&u!==(u="user-"+_[25].id)&&D(e,"data-test-id",u)},d(_){_&&p(e)}}}function Ee(l){let e,a=l[25].displayName+"",t,n,r=l[25].currentVote+"",c,u,_;return{c(){e=$("li"),t=I(a),n=I(": "),c=I(r),u=A(),this.h()},l(d){e=k(d,"LI",{class:!0,"data-test-id":!0});var h=P(e);t=N(h,a),n=N(h,": "),c=N(h,r),u=J(h),h.forEach(p),this.h()},h(){D(e,"class","text-lg font-bold text-lime-300"),D(e,"data-test-id",_="user-"+l[25].id)},m(d,h){C(d,e,h),g(e,t),g(e,n),g(e,c),g(e,u)},p(d,h){h&32&&a!==(a=d[25].displayName+"")&&Q(t,a),h&32&&r!==(r=d[25].currentVote+"")&&Q(c,r),h&32&&_!==(_="user-"+d[25].id)&&D(e,"data-test-id",_)},d(d){d&&p(e)}}}function he(l){let e;function a(r,c){return r[25].id===r[0].user.id?Ee:we}let t=a(l),n=t(l);return{c(){n.c(),e=ce()},l(r){n.l(r),e=ce()},m(r,c){n.m(r,c),C(r,e,c)},p(r,c){t===(t=a(r))&&n?n.p(r,c):(n.d(1),n=t(r),n&&(n.c(),n.m(e.parentNode,e)))},d(r){r&&p(e),n.d(r)}}}function De(l){let e=l[22]+"",a;return{c(){a=I(e)},l(t){a=N(t,e)},m(t,n){C(t,a,n)},p:ye,d(t){t&&p(a)}}}function me(l){let e,a,t,n;function r(){return l[10](l[22])}return a=new ne({props:{"aria-current":l[1]===l[22],"aria-label":l[22],selected:l[22]===l[1],$$slots:{default:[De]},$$scope:{ctx:l}}}),a.$on("click",r),{c(){e=$("li"),ee(a.$$.fragment),t=A()},l(c){e=k(c,"LI",{});var u=P(e);te(a.$$.fragment,u),t=J(u),u.forEach(p)},m(c,u){C(c,e,u),le(a,e,null),g(e,t),n=!0},p(c,u){l=c;const _={};u&2&&(_["aria-current"]=l[1]===l[22]),u&2&&(_.selected=l[22]===l[1]),u&268435456&&(_.$$scope={dirty:u,ctx:l}),a.$set(_)},i(c){n||(V(a.$$.fragment,c),n=!0)},o(c){S(a.$$.fragment,c),n=!1},d(c){c&&p(e),ae(a)}}}function Ie(l){let e=l[19]+"",a;return{c(){a=I(e)},l(t){a=N(t,e)},m(t,n){C(t,a,n)},p(t,n){n&8&&e!==(e=t[19]+"")&&Q(a,e)},d(t){t&&p(a)}}}function ge(l){let e,a;function t(){return l[11](l[19])}return e=new ne({props:{"aria-current":l[4]===l[19],"aria-label":l[19],selected:l[4]===l[19],$$slots:{default:[Ie]},$$scope:{ctx:l}}}),e.$on("click",t),{c(){ee(e.$$.fragment)},l(n){te(e.$$.fragment,n)},m(n,r){le(e,n,r),a=!0},p(n,r){l=n;const c={};r&24&&(c["aria-current"]=l[4]===l[19]),r&8&&(c["aria-label"]=l[19]),r&24&&(c.selected=l[4]===l[19]),r&268435464&&(c.$$scope={dirty:r,ctx:l}),e.$set(c)},i(n){a||(V(e.$$.fragment,n),a=!0)},o(n){S(e.$$.fragment,n),a=!1},d(n){ae(e,n)}}}function Ne(l){let e;return{c(){e=I("Clear Votes")},l(a){e=N(a,"Clear Votes")},m(a,t){C(a,e,t)},d(a){a&&p(e)}}}function je(l){let e,a,t=l[2]&&l[0]&&de(l);return{c(){e=$("div"),t&&t.c(),this.h()},l(n){e=k(n,"DIV",{class:!0});var r=P(e);t&&t.l(r),r.forEach(p),this.h()},h(){D(e,"class","text-yellow-100 p-8 h-full flex flex-col justify-center items-center")},m(n,r){C(n,e,r),t&&t.m(e,null),a=!0},p(n,[r]){n[2]&&n[0]?t?(t.p(n,r),r&5&&V(t,1)):(t=de(n),t.c(),V(t,1),t.m(e,null)):t&&(x(),S(t,1,1,()=>{t=null}),Z())},i(n){a||(V(t),a=!0)},o(n){S(t),a=!1},d(n){n&&p(e),t&&t.d()}}}function Oe(){return new Date().toISOString()}function Se(l,e,a){let t,n;ie(l,H,s=>a(2,t=s)),ie(l,X,s=>a(15,n=s));let{data:r}=e,{supabase:c,session:u}=r,_=[];const d=["Fibonacci"];let h=d[0],q;async function L(s){s.new.last_updated>t.last_updated&&(console.debug("syncPointingSession",s),H.set(s.new))}async function T(s){a(4,q=s),R(H,t.game_state.activePlayers[u.user.id].currentVote=q,t),R(H,t.game_state.activePlayers[u.user.id].displayName=n.display_name,t),R(H,t.game_state.last_updated=Oe(),t),await j()}async function z(){a(4,q=""),Object.entries(t.game_state.activePlayers).forEach(([s,G])=>(G.currentVote="",G)),await j()}async function j(){await c.from("PointingSession").update({game_state:t.game_state,last_updated:t.last_updated}).eq("id",t.id).select().single().then(s=>{s.data&&(H.set(s.data),console.log("synced game state",s)),s.error&&console.error("error updating game state",s.error)})}async function w(){await c.from("profiles").select("*").eq("id",u.user.id).limit(1).single().then(s=>{s?.data?X.set(s.data):X.set({display_name:"default",temporary:!0})}),await c.from("PointingSession").select("*").eq("id",r.slug).single().then(s=>{console.log("Got the pointing session",s),s.data?(c.channel(`${r.slug}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"PointingSession",filter:`id=eq.${s.data.id}`},G=>L(G)).subscribe(),Object.hasOwn(s.data.game_state.activePlayers,u.user.id)?(console.log("syncing display name"),s.data.game_state.activePlayers[u.user.id]={...s.data.game_state.activePlayers[u.user.id],displayName:n.display_name}):s.data.game_state.activePlayers[u.user.id]={currentVote:"",id:u.user.id,displayName:n.display_name},H.set(s.data),j()):Y("/")})}let U=[];ve(async()=>{r.slug||Y("/"),u||(console.log("not loggin in, session:",u),Y(`/auth?next=${location}`))});const B=s=>a(1,h=s),v=s=>T(s),O=()=>z();return l.$$set=s=>{"data"in s&&a(9,r=s.data)},l.$$.update=()=>{l.$$.dirty&512&&a(0,{supabase:c,session:u}=r,u),l.$$.dirty&1&&u&&w(),l.$$.dirty&4&&t&&t?.game_state?.activePlayers&&a(5,U=Object.values(t.game_state.activePlayers)),l.$$.dirty&2&&h&&a(3,_={Fibonacci:{name:"Fibonacci",numbers:[1,2,3,5,8]}}[h].numbers)},[u,h,t,_,q,U,d,T,z,r,B,v,O]}class Fe extends $e{constructor(e){super(),ke(this,e,Se,je,be,{data:9})}}export{Fe as component,Ue as universal};