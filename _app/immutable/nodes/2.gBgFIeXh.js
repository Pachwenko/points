import{s as Z,n as D,r as x,e as U}from"../chunks/scheduler.k-kUyWhY.js";import{S as B,i as Q,g as E,m as P,s as J,h as v,j as L,n as O,c as R,y as X,f as g,k as A,a as T,x as b,z as j,A as V,B as z,o as C}from"../chunks/index.8oxJKiNT.js";import{c as K}from"../chunks/index.GQbBJPuZ.js";import{w as F}from"../chunks/index.e6102C95.js";function S(l){return l?.length!==void 0?l:Array.from(l)}const G=F([]),Y=F([]);function k(l,e,o){const t=l.slice();return t[10]=e[o],t}function w(l,e,o){const t=l.slice();return t[13]=e[o],t}function M(l){let e,o,t,a,n,I,_=S(l[2]),r=[];for(let s=0;s<_.length;s+=1)r[s]=N(w(l,_,s));return{c(){e=E("div"),o=P(`Players:
            `),t=E("ul"),a=E("li"),n=P(l[1]),I=J();for(let s=0;s<r.length;s+=1)r[s].c()},l(s){e=v(s,"DIV",{});var m=L(e);o=O(m,`Players:
            `),t=v(m,"UL",{});var i=L(t);a=v(i,"LI",{});var u=L(a);n=O(u,l[1]),u.forEach(g),I=R(i);for(let c=0;c<r.length;c+=1)r[c].l(i);i.forEach(g),m.forEach(g)},m(s,m){T(s,e,m),b(e,o),b(e,t),b(t,a),b(a,n),b(t,I);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(t,null)},p(s,m){if(m&2&&C(n,s[1]),m&4){_=S(s[2]);let i;for(i=0;i<_.length;i+=1){const u=w(s,_,i);r[i]?r[i].p(u,m):(r[i]=N(u),r[i].c(),r[i].m(t,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=_.length}},d(s){s&&g(e),z(r,s)}}}function N(l){let e,o=l[13]+"",t;return{c(){e=E("li"),t=P(o)},l(a){e=v(a,"LI",{});var n=L(e);t=O(n,o),n.forEach(g)},m(a,n){T(a,e,n),b(e,t)},p(a,n){n&4&&o!==(o=a[13]+"")&&C(t,o)},d(a){a&&g(e)}}}function q(l){let e,o=l[10]+"",t;return{c(){e=E("li"),t=P(o),this.h()},l(a){e=v(a,"LI",{class:!0});var n=L(e);t=O(n,o),n.forEach(g),this.h()},h(){A(e,"class","bg-gray-800 p-3 border-2 border-blue-500 rounded mb-2")},m(a,n){T(a,e,n),b(e,t)},p(a,n){n&8&&o!==(o=a[10]+"")&&C(t,o)},d(a){a&&g(e)}}}function H(l){let e,o,t,a,n,I="Enter Pointing Session",_,r,s,m,i,u=l[0]&&M(l),c=S(l[3]),d=[];for(let f=0;f<c.length;f+=1)d[f]=q(k(l,c,f));return{c(){e=E("div"),o=P("Username: "),t=E("input"),a=J(),n=E("button"),n.textContent=I,_=J(),u&&u.c(),r=J(),s=E("ul");for(let f=0;f<d.length;f+=1)d[f].c();this.h()},l(f){e=v(f,"DIV",{class:!0});var p=L(e);o=O(p,"Username: "),t=v(p,"INPUT",{class:!0,placeholder:!0}),a=R(p),n=v(p,"BUTTON",{class:!0,"data-svelte-h":!0}),X(n)!=="svelte-jojf7d"&&(n.textContent=I),_=R(p),u&&u.l(p),r=R(p),s=v(p,"UL",{class:!0});var h=L(s);for(let y=0;y<d.length;y+=1)d[y].l(h);h.forEach(g),p.forEach(g),this.h()},h(){A(t,"class","bg-gray-800 text-white p-3 border-2 border-blue-500 rounded mb-4"),A(t,"placeholder","Enter your Username"),A(n,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"),A(s,"class","mt-4 w-full max-w-md"),A(e,"class","bg-gray-900 text-white p-8 min-h-screen flex flex-col justify-center items-center")},m(f,p){T(f,e,p),b(e,o),b(e,t),j(t,l[1]),b(e,a),b(e,n),b(e,_),u&&u.m(e,null),b(e,r),b(e,s);for(let h=0;h<d.length;h+=1)d[h]&&d[h].m(s,null);m||(i=[V(t,"input",l[5]),V(n,"click",l[4])],m=!0)},p(f,[p]){if(p&2&&t.value!==f[1]&&j(t,f[1]),f[0]?u?u.p(f,p):(u=M(f),u.c(),u.m(e,r)):u&&(u.d(1),u=null),p&8){c=S(f[3]);let h;for(h=0;h<c.length;h+=1){const y=k(f,c,h);d[h]?d[h].p(y,p):(d[h]=q(y),d[h].c(),d[h].m(s,null))}for(;h<d.length;h+=1)d[h].d(1);d.length=c.length}},i:D,o:D,d(f){f&&g(e),u&&u.d(),z(d,f),m=!1,x(i)}}}const W="room1",$="https://otnrjsuiprjpbjvwsyrv.supabase.co",ee="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90bnJqc3VpcHJqcGJqdndzeXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1OTkzODcsImV4cCI6MjAxODE3NTM4N30.RZp9Y6FAhq9M2QK7AAq0eLsq-9QZ0kUZIKfS0Q8M-MM";function te(l){console.log("player left",l)}function le(l){console.log("player voted",l)}function ne(l){console.log("clear votes",l)}function se(l,e,o){let t,a;U(l,Y,c=>o(2,t=c)),U(l,G,c=>o(3,a=c));const n={PLAYER_JOINED:"PLAYER_JOINED",PLAYER_LEFT:"PLAYER_LEFT",VOTED:"VOTED",CLEAR_COTES:"CLEAR_VOTES"},_=K($,ee).channel(W);let r=!1,s="";function m(c){Y.update(d=>[...d,c.payload.name]),console.log("player joined",c)}_.subscribe(),_.on("broadcast",{event:n.PLAYER_JOINED},c=>m(c)),_.on("broadcast",{event:n.PLAYER_LEFT},c=>te(c)),_.on("broadcast",{event:n.VOTED},c=>le(c)),_.on("broadcast",{event:n.CLEAR_COTES},c=>ne(c));function i(){s&&(o(0,r=!0),_.send({type:"broadcast",event:n.PLAYER_JOINED,payload:{name:s}}))}function u(){s=this.value,o(1,s)}return[r,s,t,a,i,u]}class ce extends B{constructor(e){super(),Q(this,e,se,H,Z,{})}}export{ce as component};
