import{a as k,t as y}from"../chunks/disclose-version.Dmm2mwWi.js";import"../chunks/legacy.8aSset0J.js";import{Q as ca,V as fa,W as ra,S as $,G as P,I as pa,y as xa,O as sa,X as _a,Y as J,F as j,J as S,Z as L,_ as na,R as ia,$ as ua,a0 as ha,A as Q,a1 as V,a2 as W,a3 as q,a4 as ga,N as ma,a5 as ba,a6 as ka,C as ya,K as Aa,z as wa,a7 as Ca,m as Ea,a8 as Z,a9 as Ia,D as Ta,aa as Na,ab as aa,ac as $a,l as b,o as d,q as w,ad as la,j as Ma,g as B}from"../chunks/runtime.CQsCpo6g.js";import{s as Ra}from"../chunks/render.5oCh57BQ.js";function I(t,a){return a}function Sa(t,a,e,s){for(var r=[],o=a.length,l=0;l<o;l++)ga(a[l].e,r,!0);var x=o>0&&r.length===0&&e!==null;if(x){var g=e.parentNode;ma(g),g.append(e),s.clear(),M(t,a[0].prev,a[o-1].next)}ba(r,()=>{for(var m=0;m<o;m++){var _=a[m];x||(s.delete(_.k),M(t,_.prev,_.next)),ka(_.e,!x)}})}function T(t,a,e,s,r,o=null){var l=t,x={flags:a,items:new Map,first:null},g=(a&ra)!==0;if(g){var m=t;l=$?P(ya(m)):m.appendChild(ca())}$&&pa();var _=null,C=!1;fa(()=>{var n=e(),i=xa(n)?n:n==null?[]:sa(n),v=i.length;if(C&&v===0)return;C=v===0;let f=!1;if($){var E=l.data===_a;E!==(v===0)&&(l=J(),P(l),j(!1),f=!0)}if($){for(var h=null,A,c=0;c<v;c++){if(S.nodeType===8&&S.data===Aa){l=S,f=!0,j(!1);break}var p=i[c],u=s(p,c);A=oa(S,x,h,null,p,u,c,r,a),x.items.set(u,A),h=A}v>0&&P(J())}if(!$){var D=wa;Ha(i,x,l,r,a,(D.f&L)!==0,s)}o!==null&&(v===0?_?na(_):_=ia(()=>o(l)):_!==null&&ua(_,()=>{_=null})),f&&j(!0),e()}),$&&(l=S)}function Ha(t,a,e,s,r,o,l){var G,K,U,X;var x=(r&Ca)!==0,g=(r&(V|q))!==0,m=t.length,_=a.items,C=a.first,n=C,i,v=null,f,E=[],h=[],A,c,p,u;if(x)for(u=0;u<m;u+=1)A=t[u],c=l(A,u),p=_.get(c),p!==void 0&&((G=p.a)==null||G.measure(),(f??(f=new Set)).add(p));for(u=0;u<m;u+=1){if(A=t[u],c=l(A,u),p=_.get(c),p===void 0){var D=n?n.e.nodes_start:e;v=oa(D,a,v,v===null?a.first:v.next,A,c,u,s,r),_.set(c,v),E=[],h=[],n=v.next;continue}if(g&&La(p,A,u,r),p.e.f&L&&(na(p.e),x&&((K=p.a)==null||K.unfix(),(f??(f=new Set)).delete(p))),p!==n){if(i!==void 0&&i.has(p)){if(E.length<h.length){var H=h[0],N;v=H.prev;var z=E[0],O=E[E.length-1];for(N=0;N<E.length;N+=1)ea(E[N],H,e);for(N=0;N<h.length;N+=1)i.delete(h[N]);M(a,z.prev,O.next),M(a,v,z),M(a,O,H),n=H,v=O,u-=1,E=[],h=[]}else i.delete(p),ea(p,n,e),M(a,p.prev,p.next),M(a,p,v===null?a.first:v.next),M(a,v,p),v=p;continue}for(E=[],h=[];n!==null&&n.k!==c;)(o||!(n.e.f&L))&&(i??(i=new Set)).add(n),h.push(n),n=n.next;if(n===null)continue;p=n}E.push(p),v=p,n=p.next}if(n!==null||i!==void 0){for(var R=i===void 0?[]:sa(i);n!==null;)(o||!(n.e.f&L))&&R.push(n),n=n.next;var Y=R.length;if(Y>0){var da=r&ra&&m===0?e:null;if(x){for(u=0;u<Y;u+=1)(U=R[u].a)==null||U.measure();for(u=0;u<Y;u+=1)(X=R[u].a)==null||X.fix()}Sa(a,R,da,_)}}x&&ha(()=>{var F;if(f!==void 0)for(p of f)(F=p.a)==null||F.apply()}),Q.first=a.first&&a.first.e,Q.last=v&&v.e}function La(t,a,e,s){s&V&&W(t.v,a),s&q?W(t.i,e):t.i=e}function oa(t,a,e,s,r,o,l,x,g){var m=(g&V)!==0,_=(g&Ia)===0,C=m?_?Ea(r):Z(r):r,n=g&q?Z(l):l,i={i:n,v:C,k:o,a:null,e:null,prev:e,next:s};try{return i.e=ia(()=>x(t,C,n),$),i.e.prev=e&&e.e,i.e.next=s&&s.e,e===null?a.first=i:(e.next=i,e.e.next=i.e),s!==null&&(s.prev=i,s.e.prev=i.e),i}finally{}}function ea(t,a,e){for(var s=t.next?t.next.e.nodes_start:e,r=a?a.e.nodes_start:e,o=t.e.nodes_start;o!==s;){var l=Ta(o);r.before(o),o=l}}function M(t,a,e){a===null?t.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}function va(t,a,e,s){var r=t.__attributes??(t.__attributes={});$&&(r[a]=t.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&t.nodeName==="LINK")||r[a]!==(r[a]=e)&&(a==="style"&&"__styles"in t&&(t.__styles={}),a==="loading"&&(t[Na]=e),e==null?t.removeAttribute(a):typeof e!="string"&&Da(t).includes(a)?t[a]=e:t.setAttribute(a,e))}var ta=new Map;function Da(t){var a=ta.get(t.nodeName);if(a)return a;ta.set(t.nodeName,a=[]);for(var e,s=aa(t),r=Element.prototype;r!==s;){e=$a(s);for(var o in e)e[o].set&&a.push(o);s=aa(s)}return a}var Oa=y('<span class="text-[256px] leading-[0.85] font-black text-fill-transparent"></span>'),Ya=y('<span class="text-[256px] leading-[0.85] font-black text-fill-transparent"></span>'),Pa=y('<span class="text-[256px] leading-[0.85] font-black text-fill-transparent"></span>'),ja=y('<span class="text-[256px] leading-[0.85] font-black text-fill-transparent"></span>'),Ba=y('<span class="text-[256px] leading-[0.85] font-black text-fill-transparent"></span>'),Va=y('<span class="text-[256px] leading-[0.85] font-black text-fill-transparent"></span>'),qa=y('<div class="relative flex flex-col justify-center overflow-hidden h-auto min-h-screen"><div class="absolute"><div class="flex space-x-0.5 overflow-hidden"><div class="flex space-x-0.5 animate-loop-scroll"></div> <div class="flex space-x-0.5 animate-loop-scroll" aria-hidden="true"></div></div> <div class="flex space-x-0.5 overflow-hidden"><div class="flex space-x-0.5 animate-loop-scroll-reverse"></div> <div class="flex space-x-0.5 animate-loop-scroll-reverse" aria-hidden="true"></div></div> <div class="flex space-x-0.5 overflow-hidden"><div class="flex space-x-0.5 animate-loop-scroll"></div> <div class="flex space-x-0.5 animate-loop-scroll" aria-hidden="true"></div></div></div> <div class="relative flex justify-center"><a href="#about"><img alt="animated waving hand emoji"></a></div></div>');function za(t){const a="HELLO",e="/hello.png";var s=qa(),r=b(s),o=b(r),l=b(o);T(l,4,()=>Array(5),I,(h,A)=>{var c=Oa();c.textContent=a,k(h,c)}),d(l);var x=w(l,2);T(x,4,()=>Array(5),I,(h,A)=>{var c=Ya();c.textContent=a,k(h,c)}),d(x),d(o);var g=w(o,2),m=b(g);T(m,4,()=>Array(5),I,(h,A)=>{var c=Pa();c.textContent=a,k(h,c)}),d(m);var _=w(m,2);T(_,4,()=>Array(5),I,(h,A)=>{var c=ja();c.textContent=a,k(h,c)}),d(_),d(g);var C=w(g,2),n=b(C);T(n,4,()=>Array(5),I,(h,A)=>{var c=Ba();c.textContent=a,k(h,c)}),d(n);var i=w(n,2);T(i,4,()=>Array(5),I,(h,A)=>{var c=Va();c.textContent=a,k(h,c)}),d(i),d(C),d(r);var v=w(r,2),f=b(v),E=b(f);va(E,"src",e),d(f),d(v),d(s),k(t,s)}var Ga=y(`<div class="flex flex-col h-auto min-h-screen items-center justify-center p-8 bg-blue-700"><span class="font-black text-white text-3xl md:text-5xl text-center leading-tight">① hello👋 i am Mark Robrigado, a passionate software developer; ② i
    previously worked as a cybersecurity analyst &#91;PwC, '23-'24&#93; and as a
    backend software engineer intern &#91;Suiterus, '22&#93;; ③ i graduated in
    2022 from Polytechnic University of the Philippines with a degree in
    computer science; ④ take a look at some of my <a href="#projects" class="underline">work</a> or say <a href="#contact" class="underline">hello</a></span></div>`);function Ka(t){var a=Ga();k(t,a)}var Ua=y('<span class="text-[256px] leading-[0.85] font-black text-fill-transparent"></span>'),Xa=y('<span class="text-[256px] leading-[0.85] font-black text-fill-transparent"></span>'),Fa=y('<span class="text-[256px] leading-[0.85] font-black text-fill-transparent"></span>'),Ja=y('<span class="text-[256px] leading-[0.85] font-black text-fill-transparent"></span>'),Qa=y('<span class="text-[256px] leading-[0.85] font-black text-fill-transparent"></span>'),Wa=y('<span class="text-[256px] leading-[0.85] font-black text-fill-transparent"></span>'),Za=y('<div class="relative flex flex-col justify-center overflow-hidden h-auto min-h-screen"><div class="absolute"><div class="flex space-x-0.5 overflow-hidden"><div class="flex space-x-0.5 animate-loop-scroll"></div> <div class="flex space-x-0.5 animate-loop-scroll" aria-hidden="true"></div></div> <div class="flex space-x-0.5 overflow-hidden"><div class="flex space-x-0.5 animate-loop-scroll-reverse"></div> <div class="flex space-x-0.5 animate-loop-scroll-reverse" aria-hidden="true"></div></div> <div class="flex space-x-0.5 overflow-hidden"><div class="flex space-x-0.5 animate-loop-scroll"></div> <div class="flex space-x-0.5 animate-loop-scroll" aria-hidden="true"></div></div></div> <div class="relative flex justify-center py-8 bg-blue-700"><a href="mailto:mrobrigado.dev@gmail.com" class="text-2xl md:text-5xl text-center font-black text-white">👋say hello at mrobrigado.dev&#91;at&#93;gmail.com</a></div></div>');function ae(t){const a="BYE";var e=Za(),s=b(e),r=b(s),o=b(r);T(o,4,()=>Array(5),I,(i,v)=>{var f=Ua();f.textContent=a,k(i,f)}),d(o);var l=w(o,2);T(l,4,()=>Array(5),I,(i,v)=>{var f=Xa();f.textContent=a,k(i,f)}),d(l),d(r);var x=w(r,2),g=b(x);T(g,4,()=>Array(5),I,(i,v)=>{var f=Fa();f.textContent=a,k(i,f)}),d(g);var m=w(g,2);T(m,4,()=>Array(5),I,(i,v)=>{var f=Ja();f.textContent=a,k(i,f)}),d(m),d(x);var _=w(x,2),C=b(_);T(C,4,()=>Array(5),I,(i,v)=>{var f=Qa();f.textContent=a,k(i,f)}),d(C);var n=w(C,2);T(n,4,()=>Array(5),I,(i,v)=>{var f=Wa();f.textContent=a,k(i,f)}),d(n),d(_),d(s),la(2),d(e),k(t,e)}var ee=y('<a target="_blank" rel="noopener noreferrer" class="font-black text-2xl md:text-5xl text-stone-900 pb-8 border-b-4 border-red-600"> </a>'),te=y('<div class="flex flex-col h-auto min-h-screen items-center justify-center p-8 bg-stone-400 space-y-12 md:space-y-24"><span class="font-extrabold text-xl md:text-3xl text-stone-900">i made these👇</span> <div class="flex flex-col space-y-8"></div> <a href="https://github.com/markrobrigado?tab=repositories" target="_blank" rel="noopener noreferrer" class="font-extrabold text-xl md:text-3xl text-stone-900">and a few more &#91;github&#93;</a></div>');function re(t){let a=[{title:"covbayes",description:"an android app that checks the likelihood of covid-19",link:"https://github.com/markrobrigado/covid-diagnosis-app"},{title:"soterra",description:"a decentralized application for land registration",link:"https://github.com/markrobrigado/blockchain-land-registration"},{title:"codex lang",description:"a c-like, general purpose, and procedural language",link:"https://github.com/markrobrigado/codex-lang"},{title:"passlock",description:"a desktop password manager",link:"https://github.com/markrobrigado/password-manager"}];var e=te(),s=w(b(e),2);T(s,5,()=>a,I,(r,o)=>{var l=ee(),x=b(l);d(l),Ma(()=>{va(l,"href",B(o).link),Ra(x,`${B(o).description??""} [${B(o).title??""}]`)}),k(r,l)}),d(s),la(2),d(e),k(t,e)}var se=y('<div class="flex flex-col"><section id="home"><!></section> <section id="about"><!></section> <section id="projects"><!></section> <section id="contact"><!></section></div>');function ne(t){var a=se(),e=b(a),s=b(e);za(s),d(e);var r=w(e,2),o=b(r);Ka(o),d(r);var l=w(r,2),x=b(l);re(x),d(l);var g=w(l,2),m=b(g);ae(m),d(g),d(a),k(t,a)}function de(t){ne(t)}export{de as component};
