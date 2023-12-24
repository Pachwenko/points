import{s as W,n as H,o as X,r as Y}from"../chunks/scheduler.k-kUyWhY.js";import{S as Z,i as $,e as J,a as z,f as w,g as m,s as x,h,j as P,c as k,y as V,k as l,x as r,z as I,A as j,m as ee,n as te,o as ae}from"../chunks/index.8oxJKiNT.js";import{g as se}from"../chunks/navigation.8a9JcXl1.js";function K(n){let s,e,t,a,_,E="Display Name",N,i,D,o,c,T="Email",U,p,L,f,g,F="New Password",q,b,M,C,R="Save Changes",O,G,u=n[1]&&Q(n);return{c(){s=m("div"),e=m("form"),u&&u.c(),t=x(),a=m("div"),_=m("label"),_.textContent=E,N=x(),i=m("input"),D=x(),o=m("div"),c=m("label"),c.textContent=T,U=x(),p=m("input"),L=x(),f=m("div"),g=m("label"),g.textContent=F,q=x(),b=m("input"),M=x(),C=m("button"),C.textContent=R,this.h()},l(d){s=h(d,"DIV",{class:!0});var y=P(s);e=h(y,"FORM",{class:!0});var v=P(e);u&&u.l(v),t=k(v),a=h(v,"DIV",{class:!0});var A=P(a);_=h(A,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),V(_)!=="svelte-1l1bv0c"&&(_.textContent=E),N=k(A),i=h(A,"INPUT",{id:!0,name:!0,class:!0,placeholder:!0}),A.forEach(w),D=k(v),o=h(v,"DIV",{class:!0});var B=P(o);c=h(B,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),V(c)!=="svelte-3a67ff"&&(c.textContent=T),U=k(B),p=h(B,"INPUT",{id:!0,name:!0,class:!0,placeholder:!0}),B.forEach(w),L=k(v),f=h(v,"DIV",{class:!0});var S=P(f);g=h(S,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),V(g)!=="svelte-hwxk3l"&&(g.textContent=F),q=k(S),b=h(S,"INPUT",{id:!0,name:!0,class:!0,placeholder:!0}),S.forEach(w),M=k(v),C=h(v,"BUTTON",{class:!0,"data-svelte-h":!0}),V(C)!=="svelte-g3kh9p"&&(C.textContent=R),v.forEach(w),y.forEach(w),this.h()},h(){l(_,"for","display-name"),l(_,"class","block text-gray-300 mb-2"),l(i,"id","display-name"),l(i,"name","display_name"),l(i,"class","w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"),l(i,"placeholder","Display Name"),l(a,"class","mb-4"),l(c,"for","email"),l(c,"class","block text-gray-300 mb-2"),l(p,"id","email"),l(p,"name","email"),l(p,"class","w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"),l(p,"placeholder","me@example.com"),l(o,"class","mb-4"),l(g,"for","password"),l(g,"class","block text-gray-300 mb-2"),l(b,"id","password"),l(b,"name","password"),l(b,"class","w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"),l(b,"placeholder","new password"),l(f,"class","mb-4"),l(C,"class","w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"),l(e,"class","bg-gray-800 p-6 rounded-lg w-full max-w-md"),l(s,"class","min-h-screen flex justify-center items-center bg-gray-900")},m(d,y){z(d,s,y),r(s,e),u&&u.m(e,null),r(e,t),r(e,a),r(a,_),r(a,N),r(a,i),I(i,n[2]),r(e,D),r(e,o),r(o,c),r(o,U),r(o,p),I(p,n[3]),r(e,L),r(e,f),r(f,g),r(f,q),r(f,b),I(b,n[4]),r(e,M),r(e,C),O||(G=[j(i,"input",n[6]),j(p,"input",n[7]),j(b,"input",n[8]),j(e,"submit",n[5])],O=!0)},p(d,y){d[1]?u?u.p(d,y):(u=Q(d),u.c(),u.m(e,t)):u&&(u.d(1),u=null),y&4&&i.value!==d[2]&&I(i,d[2]),y&8&&p.value!==d[3]&&I(p,d[3]),y&16&&b.value!==d[4]&&I(b,d[4])},d(d){d&&w(s),u&&u.d(),O=!1,Y(G)}}}function Q(n){let s,e;return{c(){s=m("p"),e=ee(n[1]),this.h()},l(t){s=h(t,"P",{class:!0});var a=P(s);e=te(a,n[1]),a.forEach(w),this.h()},h(){l(s,"class","text-gray-300 text-2xl text-center border border-2")},m(t,a){z(t,s,a),r(s,e)},p(t,a){a&2&&ae(e,t[1])},d(t){t&&w(s)}}}function le(n){let s,e=n[0].session&&K(n);return{c(){e&&e.c(),s=J()},l(t){e&&e.l(t),s=J()},m(t,a){e&&e.m(t,a),z(t,s,a)},p(t,[a]){t[0].session?e?e.p(t,a):(e=K(t),e.c(),e.m(s.parentNode,s)):e&&(e.d(1),e=null)},i:H,o:H,d(t){t&&w(s),e&&e.d(t)}}}function ne(n,s,e){let{data:t}=s,{supabase:a}=t,_="",E,N="",i="",D="",o="",c="";async function T(){i!==N&&(E?await t.supabase.from("profiles").update({display_name:i}).eq("id",t.session?.user.id):await a.from("profiles").insert({id:t.session?.user.id,display_name:i})),c&&await a.auth.updateUser({password:c}),o!==D&&(await a.auth.updateUser({email:o}),e(1,_+="Please go to your email and confirm the change."))}X(async()=>{t.session||se("/auth");const{data:f}=await a.from("profiles").select("*").limit(1);f&&f.length>0&&(E=f[0],e(2,i=E.display_name),N=i);const{data:{user:g}}=await a.auth.getUser();g&&(e(3,o=g.email),D=o)});function U(){i=this.value,e(2,i)}function p(){o=this.value,e(3,o)}function L(){c=this.value,e(4,c)}return n.$$set=f=>{"data"in f&&e(0,t=f.data)},n.$$.update=()=>{n.$$.dirty&1&&({supabase:a}=t)},[t,_,i,o,c,T,U,p,L]}class ue extends Z{constructor(s){super(),$(this,s,ne,le,W,{data:0})}}export{ue as component};
