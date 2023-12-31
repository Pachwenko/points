import{s as W,n as H,o as X,r as Y}from"../chunks/scheduler.Z_PGJaWH.js";import{S as Z,i as $,e as J,a as z,f as w,g as m,s as x,h,j as P,c as k,x as q,k as l,y as r,B as I,z as A,m as ee,n as te,o as ae}from"../chunks/index.i8b6seFL.js";import{g as se}from"../chunks/navigation.BDY4RwZ-.js";function K(i){let s,e,t,a,_,E="Display Name",N,n,D,o,d,B="Email",U,p,L,c,g,F="New Password",j,b,M,C,R="Save Changes",O,G,u=i[1]&&Q(i);return{c(){s=m("div"),e=m("form"),u&&u.c(),t=x(),a=m("div"),_=m("label"),_.textContent=E,N=x(),n=m("input"),D=x(),o=m("div"),d=m("label"),d.textContent=B,U=x(),p=m("input"),L=x(),c=m("div"),g=m("label"),g.textContent=F,j=x(),b=m("input"),M=x(),C=m("button"),C.textContent=R,this.h()},l(f){s=h(f,"DIV",{class:!0});var y=P(s);e=h(y,"FORM",{class:!0});var v=P(e);u&&u.l(v),t=k(v),a=h(v,"DIV",{class:!0});var T=P(a);_=h(T,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),q(_)!=="svelte-1l1bv0c"&&(_.textContent=E),N=k(T),n=h(T,"INPUT",{id:!0,name:!0,class:!0,placeholder:!0}),T.forEach(w),D=k(v),o=h(v,"DIV",{class:!0});var S=P(o);d=h(S,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),q(d)!=="svelte-3a67ff"&&(d.textContent=B),U=k(S),p=h(S,"INPUT",{id:!0,name:!0,class:!0,placeholder:!0}),S.forEach(w),L=k(v),c=h(v,"DIV",{class:!0});var V=P(c);g=h(V,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),q(g)!=="svelte-hwxk3l"&&(g.textContent=F),j=k(V),b=h(V,"INPUT",{id:!0,name:!0,class:!0,placeholder:!0}),V.forEach(w),M=k(v),C=h(v,"BUTTON",{class:!0,"data-svelte-h":!0}),q(C)!=="svelte-g3kh9p"&&(C.textContent=R),v.forEach(w),y.forEach(w),this.h()},h(){l(_,"for","display-name"),l(_,"class","block text-gray-300 mb-2"),l(n,"id","display-name"),l(n,"name","display_name"),l(n,"class","w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"),l(n,"placeholder","Display Name"),l(a,"class","mb-4"),l(d,"for","email"),l(d,"class","block text-gray-300 mb-2"),l(p,"id","email"),l(p,"name","email"),l(p,"class","w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"),l(p,"placeholder","me@example.com"),l(o,"class","mb-4"),l(g,"for","password"),l(g,"class","block text-gray-300 mb-2"),l(b,"id","password"),l(b,"name","password"),l(b,"class","w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"),l(b,"placeholder","new password"),l(c,"class","mb-4"),l(C,"class","w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"),l(e,"class","bg-gray-800 p-6 rounded-lg w-full max-w-md"),l(s,"class","min-h-screen flex justify-center items-center bg-gray-900")},m(f,y){z(f,s,y),r(s,e),u&&u.m(e,null),r(e,t),r(e,a),r(a,_),r(a,N),r(a,n),I(n,i[2]),r(e,D),r(e,o),r(o,d),r(o,U),r(o,p),I(p,i[3]),r(e,L),r(e,c),r(c,g),r(c,j),r(c,b),I(b,i[4]),r(e,M),r(e,C),O||(G=[A(n,"input",i[6]),A(p,"input",i[7]),A(b,"input",i[8]),A(e,"submit",i[5])],O=!0)},p(f,y){f[1]?u?u.p(f,y):(u=Q(f),u.c(),u.m(e,t)):u&&(u.d(1),u=null),y&4&&n.value!==f[2]&&I(n,f[2]),y&8&&p.value!==f[3]&&I(p,f[3]),y&16&&b.value!==f[4]&&I(b,f[4])},d(f){f&&w(s),u&&u.d(),O=!1,Y(G)}}}function Q(i){let s,e;return{c(){s=m("p"),e=ee(i[1]),this.h()},l(t){s=h(t,"P",{class:!0});var a=P(s);e=te(a,i[1]),a.forEach(w),this.h()},h(){l(s,"class","text-gray-300 text-2xl text-center border border-2")},m(t,a){z(t,s,a),r(s,e)},p(t,a){a&2&&ae(e,t[1])},d(t){t&&w(s)}}}function le(i){let s,e=i[0].session&&K(i);return{c(){e&&e.c(),s=J()},l(t){e&&e.l(t),s=J()},m(t,a){e&&e.m(t,a),z(t,s,a)},p(t,[a]){t[0].session?e?e.p(t,a):(e=K(t),e.c(),e.m(s.parentNode,s)):e&&(e.d(1),e=null)},i:H,o:H,d(t){t&&w(s),e&&e.d(t)}}}function ie(i,s,e){let{data:t}=s,{supabase:a}=t,_="",E,N="",n="",D="",o="",d="";async function B(){n!==N&&(E?await t.supabase.from("profiles").update({display_name:n}).eq("id",t.session?.user.id):await a.from("profiles").insert({id:t.session?.user.id,display_name:n})),d&&await a.auth.updateUser({password:d}),o!==D&&(await a.auth.updateUser({email:o}),e(1,_+="Please go to your email and confirm the change."))}X(async()=>{t.session||se("/auth");const{data:c}=await a.from("profiles").select("*").eq("id",t.session?.user.id).limit(1).single();c&&(E=c,e(2,n=E.display_name),N=n);const{data:{user:g}}=await a.auth.getUser();g&&(e(3,o=g.email),D=o)});function U(){n=this.value,e(2,n)}function p(){o=this.value,e(3,o)}function L(){d=this.value,e(4,d)}return i.$$set=c=>{"data"in c&&e(0,t=c.data)},i.$$.update=()=>{i.$$.dirty&1&&({supabase:a}=t)},[t,_,n,o,d,B,U,p,L]}class ue extends Z{constructor(s){super(),$(this,s,ie,le,W,{data:0})}}export{ue as component};