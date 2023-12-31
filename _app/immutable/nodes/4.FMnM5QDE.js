import{s as oe,n as R,e as W,o as ie,f as X}from"../chunks/scheduler.Z_PGJaWH.js";import{S as ce,i as ue,g as y,h as k,j as E,f as d,k as P,a as q,s as z,m as j,x as fe,c as A,n as S,y as h,A as M,e as Y,z as se,o as B}from"../chunks/index.i8b6seFL.js";import{e as F,b as U,a as J}from"../chunks/store.GR-__OLj.js";import{g as Z}from"../chunks/navigation.3zXXK8Cs.js";const _e=({params:a})=>({slug:a.slug}),ke=Object.freeze(Object.defineProperty({__proto__:null,load:_e},Symbol.toStringTag,{value:"Module"}));function $(a,e,t){const l=a.slice();return l[17]=e[t],l}function x(a,e,t){const l=a.slice();return l[20]=e[t],l}function ee(a,e,t){const l=a.slice();return l[23]=e[t],l}function te(a){let e,t,l,o,n,f="Player Votes",c,u,b,_,p,V,C,L,w,N=F(a[4]),m=[];for(let i=0;i<N.length;i+=1)m[i]=le(ee(a,N,i));let O=F(a[5]),s=[];for(let i=0;i<O.length;i+=1)s[i]=ae(x(a,O,i));let T=F(a[3]),g=[];for(let i=0;i<T.length;i+=1)g[i]=re($(a,T,i));return{c(){e=y("div"),t=y("div"),l=y("h1"),o=y("h1"),n=y("h3"),n.textContent=f,c=z(),u=y("ol");for(let i=0;i<m.length;i+=1)m[i].c();b=z(),_=y("div"),p=j(`Select your pointing system:
                `),V=y("ul");for(let i=0;i<s.length;i+=1)s[i].c();C=z();for(let i=0;i<g.length;i+=1)g[i].c();L=z(),w=y("div"),this.h()},l(i){e=k(i,"DIV",{class:!0});var v=E(e);t=k(v,"DIV",{});var r=E(t);l=k(r,"H1",{class:!0});var D=E(l);o=k(D,"H1",{});var G=E(o);n=k(G,"H3",{class:!0,"data-svelte-h":!0}),fe(n)!=="svelte-1vfpxjc"&&(n.textContent=f),c=A(G),u=k(G,"OL",{});var K=E(u);for(let I=0;I<m.length;I+=1)m[I].l(K);K.forEach(d),G.forEach(d),D.forEach(d),r.forEach(d),b=A(v),_=k(v,"DIV",{});var H=E(_);p=S(H,`Select your pointing system:
                `),V=k(H,"UL",{});var Q=E(V);for(let I=0;I<s.length;I+=1)s[I].l(Q);Q.forEach(d),C=A(H);for(let I=0;I<g.length;I+=1)g[I].l(H);H.forEach(d),L=A(v),w=k(v,"DIV",{}),E(w).forEach(d),v.forEach(d),this.h()},h(){P(n,"class","font-bold text-2xl mb-2"),P(l,"class","text-3xl font-bold p-3"),P(e,"class","grid grid-cols-3")},m(i,v){q(i,e,v),h(e,t),h(t,l),h(l,o),h(o,n),h(o,c),h(o,u);for(let r=0;r<m.length;r+=1)m[r]&&m[r].m(u,null);h(e,b),h(e,_),h(_,p),h(_,V);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(V,null);h(_,C);for(let r=0;r<g.length;r+=1)g[r]&&g[r].m(_,null);h(e,L),h(e,w)},p(i,v){if(v&17){N=F(i[4]);let r;for(r=0;r<N.length;r+=1){const D=ee(i,N,r);m[r]?m[r].p(D,v):(m[r]=le(D),m[r].c(),m[r].m(u,null))}for(;r<m.length;r+=1)m[r].d(1);m.length=N.length}if(v&34){O=F(i[5]);let r;for(r=0;r<O.length;r+=1){const D=x(i,O,r);s[r]?s[r].p(D,v):(s[r]=ae(D),s[r].c(),s[r].m(V,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=O.length}if(v&74){T=F(i[3]);let r;for(r=0;r<T.length;r+=1){const D=$(i,T,r);g[r]?g[r].p(D,v):(g[r]=re(D),g[r].c(),g[r].m(_,null))}for(;r<g.length;r+=1)g[r].d(1);g.length=T.length}},d(i){i&&d(e),M(m,i),M(s,i),M(g,i)}}}function he(a){let e,t=a[23].displayName+"",l,o,n=a[23].currentVote+"",f;return{c(){e=y("li"),l=j(t),o=j(": "),f=j(n),this.h()},l(c){e=k(c,"LI",{class:!0});var u=E(e);l=S(u,t),o=S(u,": "),f=S(u,n),u.forEach(d),this.h()},h(){P(e,"class","text-lg")},m(c,u){q(c,e,u),h(e,l),h(e,o),h(e,f)},p(c,u){u&16&&t!==(t=c[23].displayName+"")&&B(l,t),u&16&&n!==(n=c[23].currentVote+"")&&B(f,n)},d(c){c&&d(e)}}}function de(a){let e,t=a[23].displayName+"",l,o,n=a[23].currentVote+"",f;return{c(){e=y("li"),l=j(t),o=j(": "),f=j(n),this.h()},l(c){e=k(c,"LI",{class:!0});var u=E(e);l=S(u,t),o=S(u,": "),f=S(u,n),u.forEach(d),this.h()},h(){P(e,"class","text-lg font-bold")},m(c,u){q(c,e,u),h(e,l),h(e,o),h(e,f)},p(c,u){u&16&&t!==(t=c[23].displayName+"")&&B(l,t),u&16&&n!==(n=c[23].currentVote+"")&&B(f,n)},d(c){c&&d(e)}}}function le(a){let e;function t(n,f){return n[23].id===n[0].user.id?de:he}let l=t(a),o=l(a);return{c(){o.c(),e=Y()},l(n){o.l(n),e=Y()},m(n,f){o.m(n,f),q(n,e,f)},p(n,f){l===(l=t(n))&&o?o.p(n,f):(o.d(1),o=l(n),o&&(o.c(),o.m(e.parentNode,e)))},d(n){n&&d(e),o.d(n)}}}function ae(a){let e,t,l=a[20]+"",o,n,f,c,u;function b(){return a[8](a[20])}return{c(){e=y("li"),t=y("button"),o=j(l),f=z(),this.h()},l(_){e=k(_,"LI",{});var p=E(e);t=k(p,"BUTTON",{class:!0,"aria-current":!0,"aria-label":!0});var V=E(t);o=S(V,l),V.forEach(d),f=A(p),p.forEach(d),this.h()},h(){P(t,"class","border border-1 border-round bg-gray-700 hoder:bg-gray-600 m-1 p-2"),P(t,"aria-current",n=a[1]===a[20]),P(t,"aria-label",a[20])},m(_,p){q(_,e,p),h(e,t),h(t,o),h(e,f),c||(u=se(t,"click",b),c=!0)},p(_,p){a=_,p&2&&n!==(n=a[1]===a[20])&&P(t,"aria-current",n)},d(_){_&&d(e),c=!1,u()}}}function re(a){let e,t=a[17]+"",l,o,n,f,c;function u(){return a[9](a[17])}return{c(){e=y("button"),l=j(t),this.h()},l(b){e=k(b,"BUTTON",{class:!0,"aria-current":!0,"aria-label":!0});var _=E(e);l=S(_,t),_.forEach(d),this.h()},h(){P(e,"class","border border-1 m-1 p-1"),P(e,"aria-current",o=a[1]===a[17]),P(e,"aria-label",n=a[17])},m(b,_){q(b,e,_),h(e,l),f||(c=se(e,"click",u),f=!0)},p(b,_){a=b,_&8&&t!==(t=a[17]+"")&&B(l,t),_&10&&o!==(o=a[1]===a[17])&&P(e,"aria-current",o),_&8&&n!==(n=a[17])&&P(e,"aria-label",n)},d(b){b&&d(e),f=!1,c()}}}function me(a){let e,t=a[2]&&a[0]&&te(a);return{c(){e=y("div"),t&&t.c(),this.h()},l(l){e=k(l,"DIV",{class:!0});var o=E(e);t&&t.l(o),o.forEach(d),this.h()},h(){P(e,"class","bg-gray-900 text-white p-8 min-h-screen flex flex-col justify-center items-center")},m(l,o){q(l,e,o),t&&t.m(e,null)},p(l,[o]){l[2]&&l[0]?t?t.p(l,o):(t=te(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:R,o:R,d(l){l&&d(e),t&&t.d()}}}function ne(){return new Date().toISOString()}function ge(a,e,t){let l,o;W(a,U,s=>t(2,l=s)),W(a,J,s=>t(12,o=s));let{data:n}=e,{supabase:f,session:c}=n,u,b=[];const _=["Fibonacci"];let p=_[0];async function V(s){console.debug("rtu session",s),U.set(s.new)}async function C(s){console.log(`Voted ${s}`),console.log("lkjashbdjlkahsdasdasd",l.game_state.activePlayers),X(U,l.game_state.activePlayers[c.user.id].currentVote=s,l),X(U,l.game_state.last_updated=ne(),l),L()}async function L(){console.log("syncing game state",l),f.from("PointingSession").update({users:l.users,game_state:l.game_state,last_updated:ne()}).eq("id",l.id).select().single().then(s=>{s.data&&(U.set(s.data),console.log("updated game state",s)),s.error&&console.error("error updating game state",s.error)})}async function w(){f.from("profiles").select("*").eq("id",c.user.id).limit(1).single().then(s=>{console.log("profile",s),s?.data?J.set(s.data):J.set({display_name:"default",temporary:!0})}),f.from("PointingSession").select("*").eq("id",n.slug).single().then(s=>{console.log("Got pointing session",s,U),s.data&&(s.data.game_state.activePlayers[c.user.id]={id:c.user.id,displayName:o.display_name,currentVote:""},U.set(s.data),L(),u=f.channel(`${n.slug}-${c.user.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"PointingSession",filter:`id=eq.${s.data.id}`},T=>V(T)).subscribe(),console.log("subscribing to reatltime updates",s.data.id,u))})}let N=[];ie(async()=>{n.slug||Z("/"),console.log("sessions",c),c||Z(`/auth?next=${location}`)});const m=s=>t(1,p=s),O=s=>C(s);return a.$$set=s=>{"data"in s&&t(7,n=s.data)},a.$$.update=()=>{a.$$.dirty&128&&t(0,{supabase:f,session:c}=n,c),a.$$.dirty&1&&c&&w(),a.$$.dirty&4&&l&&l?.game_state?.activePlayers&&t(4,N=Object.values(l.game_state.activePlayers)),a.$$.dirty&2&&p&&t(3,b={Fibonacci:{name:"Fibonacci",numbers:[1,2,3,5,8]}}[p].numbers)},[c,p,l,b,N,_,C,n,m,O]}class Pe extends ce{constructor(e){super(),ue(this,e,ge,me,oe,{data:7})}}export{Pe as component,ke as universal};
