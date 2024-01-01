import{s as $,n as Q,o as ee,r as te}from"../chunks/scheduler.Z_PGJaWH.js";import{S as ae,i as se,e as W,a as G,f as w,g as p,s as x,h as m,j as P,c as k,x as S,k as l,y as i,B as I,z as O,m as le,n as ne,o as ie}from"../chunks/index.i8b6seFL.js";import{g as X}from"../chunks/navigation.HTgVpVhm.js";function Y(n){let s,e,t,a,_,E="Display Name",U,r,D,o,f,q="Email",T,h,B,v,c,L="New Password",M,b,z,N,H="Save Changes",F,C,J="Sign out",R,K,u=n[1]&&Z(n);return{c(){s=p("div"),e=p("form"),u&&u.c(),t=x(),a=p("div"),_=p("label"),_.textContent=E,U=x(),r=p("input"),D=x(),o=p("div"),f=p("label"),f.textContent=q,T=x(),h=p("input"),B=x(),v=p("div"),c=p("label"),c.textContent=L,M=x(),b=p("input"),z=x(),N=p("button"),N.textContent=H,F=x(),C=p("button"),C.textContent=J,this.h()},l(d){s=m(d,"DIV",{class:!0});var y=P(s);e=m(y,"FORM",{class:!0});var g=P(e);u&&u.l(g),t=k(g),a=m(g,"DIV",{class:!0});var V=P(a);_=m(V,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),S(_)!=="svelte-1l1bv0c"&&(_.textContent=E),U=k(V),r=m(V,"INPUT",{id:!0,name:!0,class:!0,placeholder:!0}),V.forEach(w),D=k(g),o=m(g,"DIV",{class:!0});var A=P(o);f=m(A,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),S(f)!=="svelte-3a67ff"&&(f.textContent=q),T=k(A),h=m(A,"INPUT",{id:!0,name:!0,class:!0,placeholder:!0}),A.forEach(w),B=k(g),v=m(g,"DIV",{class:!0});var j=P(v);c=m(j,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),S(c)!=="svelte-hwxk3l"&&(c.textContent=L),M=k(j),b=m(j,"INPUT",{id:!0,name:!0,class:!0,placeholder:!0}),j.forEach(w),z=k(g),N=m(g,"BUTTON",{class:!0,"data-svelte-h":!0}),S(N)!=="svelte-1m4tkw0"&&(N.textContent=H),F=k(g),C=m(g,"BUTTON",{class:!0,"data-svelte-h":!0}),S(C)!=="svelte-1k2o8tq"&&(C.textContent=J),g.forEach(w),y.forEach(w),this.h()},h(){l(_,"for","display-name"),l(_,"class","block text-gray-300 mb-2"),l(r,"id","display-name"),l(r,"name","display_name"),l(r,"class","w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"),l(r,"placeholder","Display Name"),l(a,"class","mb-4"),l(f,"for","email"),l(f,"class","block text-gray-300 mb-2"),l(h,"id","email"),l(h,"name","email"),l(h,"class","w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"),l(h,"placeholder","me@example.com"),l(o,"class","mb-4"),l(c,"for","password"),l(c,"class","block text-gray-300 mb-2"),l(b,"id","password"),l(b,"name","password"),l(b,"class","w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"),l(b,"placeholder","new password"),l(v,"class","mb-4"),l(N,"class","w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"),l(C,"class","w-full mt-4 p-3 bg-red-500 text-white rounded-lg hover:bg-red-600"),l(e,"class","bg-gray-800 p-6 rounded-lg w-full max-w-md"),l(s,"class","min-h-screen flex justify-center items-center bg-gray-900")},m(d,y){G(d,s,y),i(s,e),u&&u.m(e,null),i(e,t),i(e,a),i(a,_),i(a,U),i(a,r),I(r,n[2]),i(e,D),i(e,o),i(o,f),i(o,T),i(o,h),I(h,n[3]),i(e,B),i(e,v),i(v,c),i(v,M),i(v,b),I(b,n[4]),i(e,z),i(e,N),i(e,F),i(e,C),R||(K=[O(r,"input",n[7]),O(h,"input",n[8]),O(b,"input",n[9]),O(C,"click",n[6]),O(e,"submit",n[5])],R=!0)},p(d,y){d[1]?u?u.p(d,y):(u=Z(d),u.c(),u.m(e,t)):u&&(u.d(1),u=null),y&4&&r.value!==d[2]&&I(r,d[2]),y&8&&h.value!==d[3]&&I(h,d[3]),y&16&&b.value!==d[4]&&I(b,d[4])},d(d){d&&w(s),u&&u.d(),R=!1,te(K)}}}function Z(n){let s,e;return{c(){s=p("p"),e=le(n[1]),this.h()},l(t){s=m(t,"P",{class:!0});var a=P(s);e=ne(a,n[1]),a.forEach(w),this.h()},h(){l(s,"class","text-gray-300 text-2xl text-center border border-2")},m(t,a){G(t,s,a),i(s,e)},p(t,a){a&2&&ie(e,t[1])},d(t){t&&w(s)}}}function re(n){let s,e=n[0].session&&Y(n);return{c(){e&&e.c(),s=W()},l(t){e&&e.l(t),s=W()},m(t,a){e&&e.m(t,a),G(t,s,a)},p(t,[a]){t[0].session?e?e.p(t,a):(e=Y(t),e.c(),e.m(s.parentNode,s)):e&&(e.d(1),e=null)},i:Q,o:Q,d(t){t&&w(s),e&&e.d(t)}}}function oe(n,s,e){let{data:t}=s,{supabase:a}=t,_="",E,U="",r="",D="",o="",f="";async function q(){r!==U&&(E?await t.supabase.from("profiles").update({display_name:r}).eq("id",t.session?.user.id):await a.from("profiles").insert({id:t.session?.user.id,display_name:r})),f&&await a.auth.updateUser({password:f}),o!==D&&(await a.auth.updateUser({email:o}),e(1,_+="Please go to your email and confirm the change."))}const T=async()=>{await a.auth.signOut(),X("/auth")};ee(async()=>{t.session||X("/auth");const{data:c}=await a.from("profiles").select("*").eq("id",t.session?.user.id).limit(1).single();c&&(E=c,e(2,r=E.display_name),U=r);const{data:{user:L}}=await a.auth.getUser();L&&(e(3,o=L.email),D=o)});function h(){r=this.value,e(2,r)}function B(){o=this.value,e(3,o)}function v(){f=this.value,e(4,f)}return n.$$set=c=>{"data"in c&&e(0,t=c.data)},n.$$.update=()=>{n.$$.dirty&1&&({supabase:a}=t)},[t,_,r,o,f,q,T,h,B,v]}class ce extends ae{constructor(s){super(),se(this,s,oe,re,$,{data:0})}}export{ce as component};
