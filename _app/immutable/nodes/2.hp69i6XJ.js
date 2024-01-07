import{s as A,e as U,o as O,n as W}from"../chunks/scheduler.XGLZWGdw.js";import{S as F,i as G,e as H,a as x,d as $,t as w,b as J,f as p,g,s as P,r as K,h as b,j as k,x as E,c as S,u as Q,k as D,y as h,v as R,w as X,m as C,n as I,z as Y,o as L,p as Z}from"../chunks/index.li6Z87Pf.js";import{B as ee,e as j,c as q,a as V}from"../chunks/button.Ox5GKV_y.js";import{g as M}from"../chunks/navigation.a4OkPTbD.js";function B(c,e,s){const t=c.slice();return t[6]=e[s],t}function N(c){let e,s,t,a="Welcome to Pointing Poker",l,d,u,m,i;function f(r,y){return r[1]?se:te}let _=f(c),o=_(c);u=new ee({props:{$$slots:{default:[ne]},$$scope:{ctx:c}}}),u.$on("click",c[3]);let n=c[2]&&T(c);return{c(){e=g("div"),s=g("div"),t=g("h1"),t.textContent=a,l=P(),o.c(),d=P(),K(u.$$.fragment),m=P(),n&&n.c(),this.h()},l(r){e=b(r,"DIV",{class:!0});var y=k(e);s=b(y,"DIV",{class:!0});var v=k(s);t=b(v,"H1",{class:!0,"data-svelte-h":!0}),E(t)!=="svelte-1c2fdh4"&&(t.textContent=a),l=S(v),o.l(v),d=S(v),Q(u.$$.fragment,v),m=S(v),n&&n.l(v),v.forEach(p),y.forEach(p),this.h()},h(){D(t,"class","text-center text-3xl font-bold"),D(s,"class","container mx-auto p-2 text-center"),D(e,"class","p-8 min-h-full flex flex-col flex-grow justify-center items-center")},m(r,y){x(r,e,y),h(e,s),h(s,t),h(s,l),o.m(s,null),h(s,d),R(u,s,null),h(s,m),n&&n.m(s,null),i=!0},p(r,y){_===(_=f(r))&&o?o.p(r,y):(o.d(1),o=_(r),o&&(o.c(),o.m(s,d)));const v={};y&512&&(v.$$scope={dirty:y,ctx:r}),u.$set(v),r[2]?n?n.p(r,y):(n=T(r),n.c(),n.m(s,null)):n&&(n.d(1),n=null)},i(r){i||($(u.$$.fragment,r),i=!0)},o(r){w(u.$$.fragment,r),i=!1},d(r){r&&p(e),o.d(),X(u),n&&n.d()}}}function te(c){let e,s="Display name: loading...";return{c(){e=g("div"),e.textContent=s},l(t){e=b(t,"DIV",{"data-svelte-h":!0}),E(e)!=="svelte-1ar43gj"&&(e.textContent=s)},m(t,a){x(t,e,a)},p:W,d(t){t&&p(e)}}}function se(c){let e,s,t,a=c[1].display_name+"",l;return{c(){e=g("div"),s=C("Display name: "),t=g("p"),l=C(a),this.h()},l(d){e=b(d,"DIV",{});var u=k(e);s=I(u,"Display name: "),t=b(u,"P",{class:!0});var m=k(t);l=I(m,a),m.forEach(p),u.forEach(p),this.h()},h(){D(t,"class","text-aqua font-bold")},m(d,u){x(d,e,u),h(e,s),h(e,t),h(t,l)},p(d,u){u&2&&a!==(a=d[1].display_name+"")&&L(l,a)},d(d){d&&p(e)}}}function ne(c){let e;return{c(){e=C("Start new Pointing Session")},l(s){e=I(s,"Start new Pointing Session")},m(s,t){x(s,e,t)},d(s){s&&p(e)}}}function T(c){let e,s,t="Previous Sessions:",a,l,d,u="<div>Session ID</div> <div>Last Used</div>",m,i=j(c[2]),f=[];for(let _=0;_<i.length;_+=1)f[_]=z(B(c,i,_));return{c(){e=g("div"),s=g("h4"),s.textContent=t,a=P(),l=g("ul"),d=g("li"),d.innerHTML=u,m=P();for(let _=0;_<f.length;_+=1)f[_].c();this.h()},l(_){e=b(_,"DIV",{class:!0});var o=k(e);s=b(o,"H4",{class:!0,"data-svelte-h":!0}),E(s)!=="svelte-1r56ubk"&&(s.textContent=t),a=S(o),l=b(o,"UL",{});var n=k(l);d=b(n,"LI",{class:!0,"data-svelte-h":!0}),E(d)!=="svelte-1r9llr4"&&(d.innerHTML=u),m=S(n);for(let r=0;r<f.length;r+=1)f[r].l(n);n.forEach(p),o.forEach(p),this.h()},h(){D(s,"class","text-2xl font-bold"),D(d,"class","grid grid-cols-2"),D(e,"class","w-full")},m(_,o){x(_,e,o),h(e,s),h(e,a),h(e,l),h(l,d),h(l,m);for(let n=0;n<f.length;n+=1)f[n]&&f[n].m(l,null)},p(_,o){if(o&4){i=j(_[2]);let n;for(n=0;n<i.length;n+=1){const r=B(_,i,n);f[n]?f[n].p(r,o):(f[n]=z(r),f[n].c(),f[n].m(l,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=i.length}},d(_){_&&p(e),Y(f,_)}}}function z(c){let e,s,t,a=c[6].id+"",l,d,u,m=c[6].last_updated+"",i,f,_;return{c(){e=g("li"),s=g("a"),t=g("div"),l=C(a),d=P(),u=g("div"),i=C(m),_=P(),this.h()},l(o){e=b(o,"LI",{});var n=k(e);s=b(n,"A",{class:!0,href:!0});var r=k(s);t=b(r,"DIV",{});var y=k(t);l=I(y,a),y.forEach(p),d=S(r),u=b(r,"DIV",{});var v=k(u);i=I(v,m),v.forEach(p),r.forEach(p),_=S(n),n.forEach(p),this.h()},h(){D(s,"class","grid grid-cols-2 border border-1 rounded m-1 p-1"),D(s,"href",f="/points/"+c[6].id+"/")},m(o,n){x(o,e,n),h(e,s),h(s,t),h(t,l),h(s,d),h(s,u),h(u,i),h(e,_)},p(o,n){n&4&&a!==(a=o[6].id+"")&&L(l,a),n&4&&m!==(m=o[6].last_updated+"")&&L(i,m),n&4&&f!==(f="/points/"+o[6].id+"/")&&D(s,"href",f)},d(o){o&&p(e)}}}function le(c){let e,s,t=c[0].session&&N(c);return{c(){t&&t.c(),e=H()},l(a){t&&t.l(a),e=H()},m(a,l){t&&t.m(a,l),x(a,e,l),s=!0},p(a,[l]){a[0].session?t?(t.p(a,l),l&1&&$(t,1)):(t=N(a),t.c(),$(t,1),t.m(e.parentNode,e)):t&&(Z(),w(t,1,1,()=>{t=null}),J())},i(a){s||($(t),s=!0)},o(a){w(t),s=!1},d(a){a&&p(e),t&&t.d(a)}}}function ae(c,e,s){let t,a;U(c,V,i=>s(1,t=i)),U(c,q,i=>s(2,a=i));let{data:l}=e,{supabase:d}=l;async function u(){const i={version:1,activePlayers:{}};i[l.session.user.is]={id:l.session.user.id,displayName:t.display_name,currentVote:""},d.from("PointingSession").insert({last_updated:new Date().toISOString(),game_state:i,users:[l.session.user.id]}).select().single().then(f=>{console.log("started new session",f),f.data&&M(`/points/${f.data.id}`)})}async function m(){d.from("PointingSession").select().contains("users",[l.session?.user.id]).order("last_updated",{ascending:!1}).then(i=>{q.set(i.data)}),d.from("profiles").select("*").eq("id",l.session?.user.id).limit(1).single().then(i=>{console.log("profile",i),i?.data?V.set(i.data):V.set({display_name:"default",temporary:!0})})}return O(async()=>{l.session||M("/auth")}),c.$$set=i=>{"data"in i&&s(0,l=i.data)},c.$$.update=()=>{c.$$.dirty&1&&({supabase:d}=l),c.$$.dirty&1&&l.session&&m()},[l,t,a,u]}class de extends F{constructor(e){super(),G(this,e,ae,le,A,{data:0})}}export{de as component};