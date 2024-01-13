import{s as se,n as $,r as ae,e as le,o as ne}from"../chunks/scheduler.XGLZWGdw.js";import{S as re,i as ie,g as o,s as E,h as u,j as z,x as B,c as k,f as I,k as t,a as te,y as s,A as L,B as S,m as oe,n as ue,o as de}from"../chunks/index.li6Z87Pf.js";import{g as F}from"../chunks/navigation.jKlczxhc.js";import{p as ce}from"../chunks/stores.YiG883lK.js";function ee(l){let a,e;return{c(){a=o("p"),e=oe(l[3]),this.h()},l(n){a=u(n,"P",{id:!0,class:!0,"data-test-id":!0});var m=z(a);e=ue(m,l[3]),m.forEach(I),this.h()},h(){t(a,"id","error"),t(a,"class","text-red-600 text-center text-2xl font-bold mb-3"),t(a,"data-test-id","error-message")},m(n,m){te(n,a,m),s(a,e)},p(n,m){m&8&&de(e,n[3])},d(n){n&&I(a)}}}function fe(l){let a,e,n,m="Welcome! This site is completely free to use, but you must sign up first!",P,w,d,c,T="Display Name",v,h,V,_,x,j="Email",r,f,G,U,D,R="Password",H,g,J,N,q,X="Sign Up",K,y,Y="Sign In",Q,Z,i=l[3]&&ee(l);return{c(){a=o("div"),e=o("form"),n=o("p"),n.textContent=m,P=E(),i&&i.c(),w=E(),d=o("div"),c=o("label"),c.textContent=T,v=E(),h=o("input"),V=E(),_=o("div"),x=o("label"),x.textContent=j,r=E(),f=o("input"),G=E(),U=o("div"),D=o("label"),D.textContent=R,H=E(),g=o("input"),J=E(),N=o("div"),q=o("button"),q.textContent=X,K=E(),y=o("button"),y.textContent=Y,this.h()},l(p){a=u(p,"DIV",{class:!0});var C=z(a);e=u(C,"FORM",{class:!0});var b=z(e);n=u(b,"P",{class:!0,"data-svelte-h":!0}),B(n)!=="svelte-ie8qrn"&&(n.textContent=m),P=k(b),i&&i.l(b),w=k(b),d=u(b,"DIV",{class:!0});var A=z(d);c=u(A,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),B(c)!=="svelte-xvxr5t"&&(c.textContent=T),v=k(A),h=u(A,"INPUT",{id:!0,name:!0,class:!0,placeholder:!0}),A.forEach(I),V=k(b),_=u(b,"DIV",{class:!0});var M=z(_);x=u(M,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),B(x)!=="svelte-5n7jdk"&&(x.textContent=j),r=k(M),f=u(M,"INPUT",{id:!0,name:!0,class:!0,placeholder:!0}),M.forEach(I),G=k(b),U=u(b,"DIV",{class:!0});var O=z(U);D=u(O,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),B(D)!=="svelte-kmyewi"&&(D.textContent=R),H=k(O),g=u(O,"INPUT",{id:!0,type:!0,name:!0,class:!0,placeholder:!0}),O.forEach(I),J=k(b),N=u(b,"DIV",{class:!0});var W=z(N);q=u(W,"BUTTON",{class:!0,"data-svelte-h":!0}),B(q)!=="svelte-528h29"&&(q.textContent=X),K=k(W),y=u(W,"BUTTON",{class:!0,"data-test-id":!0,"data-svelte-h":!0}),B(y)!=="svelte-1x3kev2"&&(y.textContent=Y),W.forEach(I),b.forEach(I),C.forEach(I),this.h()},h(){t(n,"class","text-2xl mb-5"),t(c,"for","display-name"),t(c,"class","block mb-2"),t(h,"id","display-name"),t(h,"name","display-name"),t(h,"class","w-full p-2 text-zinc-900 bg-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"),t(h,"placeholder","Display name"),t(d,"class","mb-4"),t(x,"for","email"),t(x,"class","block mb-2"),f.required=!0,t(f,"id","email"),t(f,"name","email"),t(f,"class","w-full p-2 text-zinc-900 bg-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"),t(f,"placeholder","Email"),t(_,"class","mb-4"),t(D,"for","password"),t(D,"class","block mb-2"),g.required=!0,t(g,"id","password"),t(g,"type","password"),t(g,"name","password"),t(g,"class","w-full p-2 text-zinc-900 bg-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"),t(g,"placeholder","Password"),t(U,"class","mb-4"),t(q,"class","w-1/3 px-4 py-2 bg-aqua text-white rounded-lg hover:bg-dim-aqua"),t(y,"class","w-1/3 px-4 py-2 bg-green text-white rounded-lg hover:bg-dim-green"),t(y,"data-test-id","sign-in"),t(N,"class","mb-4 flex justify-between"),t(e,"class","container mx-auto p-6 rounded-lg w-full max-w-md"),t(a,"class","flex flex-grow h-full justify-center items-center")},m(p,C){te(p,a,C),s(a,e),s(e,n),s(e,P),i&&i.m(e,null),s(e,w),s(e,d),s(d,c),s(d,v),s(d,h),L(h,l[0]),s(e,V),s(e,_),s(_,x),s(_,r),s(_,f),L(f,l[1]),s(e,G),s(e,U),s(U,D),s(U,H),s(U,g),L(g,l[2]),s(e,J),s(e,N),s(N,q),s(N,K),s(N,y),Q||(Z=[S(h,"input",l[7]),S(f,"input",l[8]),S(g,"input",l[9]),S(q,"click",l[4]),S(y,"click",l[5]),S(e,"submit",l[5])],Q=!0)},p(p,[C]){p[3]?i?i.p(p,C):(i=ee(p),i.c(),i.m(e,w)):i&&(i.d(1),i=null),C&1&&h.value!==p[0]&&L(h,p[0]),C&2&&f.value!==p[1]&&L(f,p[1]),C&4&&g.value!==p[2]&&L(g,p[2])},i:$,o:$,d(p){p&&I(a),i&&i.d(),Q=!1,ae(Z)}}}function pe(l,a,e){let n;le(l,ce,r=>e(12,n=r));let{data:m}=a,{supabase:P}=m,w="",d="",c="",T="",v="";const h=async()=>{await P.auth.signUp({email:d,password:c,options:{emailRedirectTo:v||location.origin}}).then(async r=>{r.error?e(3,T=r.error.message):await P.from("profiles").insert({id:r.data.user.id,display_name:w}).then(f=>{f.error?e(3,T=f.error.message):v?F(v):F(`${location.origin}/`)})})},V=async()=>{if(!d||!c){e(3,T="Please enter your email and password to log in.");return}P.auth.signInWithPassword({email:d,password:c}).then(r=>{console.log(r),r.error?e(3,T=r.error.message):v?F(v):F(`${location.origin}/`)})};ne(()=>{v=n.url.searchParams.get("next")});function _(){w=this.value,e(0,w)}function x(){d=this.value,e(1,d)}function j(){c=this.value,e(2,c)}return l.$$set=r=>{"data"in r&&e(6,m=r.data)},l.$$.update=()=>{l.$$.dirty&64&&({supabase:P}=m)},[w,d,c,T,h,V,m,_,x,j]}class ve extends re{constructor(a){super(),ie(this,a,pe,fe,se,{data:6})}}export{ve as component};
