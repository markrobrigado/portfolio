var An=Array.isArray,gn=Array.from,Dn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,In=Object.prototype,Rn=Array.prototype,Ut=Object.getPrototypeOf;const Sn=()=>{};function On(t){return t()}function Vt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ct=4,M=8,nt=16,y=32,K=64,S=128,U=256,p=512,D=1024,H=2048,C=4096,Y=8192,$t=16384,vt=32768,xn=65536,Gt=1<<18,pt=1<<19,ut=Symbol("$state"),kn=Symbol("");function ht(t){return t===this.v}function Kt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!Kt(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function Nn(){throw new Error("hydration_failed")}function Cn(t){throw new Error("props_invalid_value")}function bn(){throw new Error("state_descriptors_fixed")}function Fn(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}let Z=!1;function Pn(){Z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function qn(t){return tn(rt(t))}function Ln(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),Z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function tn(t){return u!==null&&u.f&m&&(E===null?hn([t]):E.push(t)),t}function Mn(t,n){return u!==null&&at()&&u.f&(m|nt)&&(E===null||!E.includes(t))&&Qt(),nn(t,n)}function nn(t,n){return t.equals(n)||(t.v=n,t.version=qt(),Et(t,D),at()&&o!==null&&o.f&p&&!(o.f&y)&&(_!==null&&_.includes(t)?(w(o,D),W(o)):g===null?dn([t]):g.push(t))),n}function Et(t,n){var r=t.reactions;if(r!==null)for(var e=at(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&D||!e&&l===o||(w(l,n),i&(p|S)&&(i&m?Et(l,H):W(l)))}}const Hn=1,Yn=2,jn=4,Bn=8,Un=16,Vn=1,$n=2,Gn=4,Kn=8,Zn=16,zn=1,Wn=2,rn="[",en="[!",sn="]",yt={},Xn=Symbol();function wt(t){console.warn("hydration_mismatch")}let R=!1;function Jn(t){R=t}let d;function P(t){if(t===null)throw wt(),yt;return d=t}function Qn(){return P(O(d))}function tr(t){if(R){if(O(d)!==null)throw wt(),yt;d=t}}function nr(t=1){if(R){for(var n=t,r=d;n--;)r=O(r);d=r}}function rr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=O(n);n.remove(),n=e}}var it,an,Tt,mt;function er(){if(it===void 0){it=window,an=document;var t=Element.prototype,n=Node.prototype;Tt=ot(n,"firstChild").get,mt=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return Tt.call(t)}function O(t){return mt.call(t)}function sr(t,n){if(!R)return J(t);var r=J(d);if(r===null)r=d.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),P(e),e}return P(r),r}function ar(t,n){if(!R){var r=J(t);return r instanceof Comment&&r.data===""?O(r):r}return d}function lr(t,n=1,r=!1){let e=R?d:t;for(;n--;)e=O(e);if(!R)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),P(a),a}return P(e),e}function or(t){t.textContent=""}function ln(t){var n=m|D;o===null?n|=S:o.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&m){var e=u;(e.children??(e.children=[])).push(r)}return r}function ur(t){const n=ln(t);return n.equals=dt,n}function At(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?et(e):F(e)}}}function gt(t){var n,r=o;G(t.parent);try{At(t),n=Lt(t)}finally{G(r)}return n}function Dt(t){var n=gt(t),r=(x||t.f&S)&&t.deps!==null?H:p;w(t,r),t.equals(n)||(t.v=n,t.version=qt())}function et(t){At(t),L(t,0),w(t,Y),t.v=t.children=t.deps=t.ctx=t.reactions=null}function It(t){o===null&&u===null&&Wt(),u!==null&&u.f&S&&zt(),st&&Zt()}function on(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&K)!==0,a=o,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{ft(!0),z(l),l.f|=$t}catch(c){throw F(l),c}finally{ft(i)}}else n!==null&&W(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&pt)===0;if(!T&&!s&&e&&(a!==null&&on(l,a),u!==null&&u.f&m)){var A=u;(A.children??(A.children=[])).push(l)}return l}function ir(t){const n=b(M,null,!1);return w(n,p),n.teardown=t,n}function fr(t){It();var n=o!==null&&(o.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Rt(t);return e}}function _r(t){return It(),un(t)}function cr(t){const n=b(K,t,!0);return()=>{F(n)}}function Rt(t){return b(ct,t,!1)}function un(t){return b(M,t,!0)}function vr(t){return fn(t)}function fn(t,n=0){return b(M|nt|n,t,!0)}function pr(t,n=!0){return b(M|y,t,!0,n)}function St(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),$(null);try{n.call(null)}finally{_t(r),$(e)}}}function Ot(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function xt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function _n(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Gt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:O(e);e.remove(),e=a}r=!0}xt(t,n&&!r),Ot(t),L(t,0),w(t,Y);var l=t.transitions;if(l!==null)for(const T of l)T.stop();St(t);var i=t.parent;i!==null&&i.first!==null&&kt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function kt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function hr(t,n){var r=[];Nt(t,r,!0),cn(r,()=>{F(t),n&&n()})}function cn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Nt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&vt)!==0||(e.f&y)!==0;Nt(e,n,a?r:!1),e=s}}}function dr(t){Ct(t,!0)}function Ct(t,n){if(t.f&C){j(t)&&z(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&y)!==0;Ct(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let V=!1,Q=[];function bt(){V=!1;const t=Q.slice();Q=[],Vt(t)}function Er(t){V||(V=!0,queueMicrotask(bt)),Q.push(t)}function vn(){V&&bt()}const Ft=0,pn=1;let B=Ft,q=!1,k=!1,st=!1;function ft(t){k=t}function _t(t){st=t}let I=[],N=0;let u=null;function $(t){u=t}let o=null;function G(t){o=t}let E=null;function hn(t){E=t}let _=null,h=0,g=null;function dn(t){g=t}let Pt=0,x=!1,f=null;function qt(){return++Pt}function at(){return!Z||f!==null&&f.l===null}function j(t){var l,i;var n=t.f;if(n&D)return!0;if(n&H){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(j(a)&&Dt(a),e&&o!==null&&!x&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||w(t,p)}return!1}function En(t,n,r){throw t}function Lt(t){var lt;var n=_,r=h,e=g,s=u,a=x,l=E,i=f,T=t.f;_=null,h=0,g=null,u=T&(y|K)?null:t,x=!k&&(T&S)!==0,E=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!x)for(v=h;v<c.length;v++)((lt=c[v]).reactions??(lt.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return A}finally{_=n,h=r,g=e,u=s,x=a,E=l,f=i}}function yn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,H),n.f&(S|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)yn(t,r[e])}function z(t){var n=t.f;if(!(n&Y)){w(t,p);var r=o;o=t;try{n&nt?_n(t):xt(t),Ot(t),St(t);var e=Lt(t);t.teardown=typeof e=="function"?e:null,t.version=Pt}catch(s){En(s)}finally{o=r}}}function Mt(){N>1e3&&(N=0,Xt()),N++}function Ht(t){var n=t.length;if(n!==0){Mt();var r=k;k=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Yt(s,a),wn(a)}}finally{k=r}}}function wn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(Y|C))&&j(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?kt(e):e.fn=null))}}function Tn(){if(q=!1,N>1001)return;const t=I;I=[],Ht(t),q||(N=0)}function W(t){B===Ft&&(q||(q=!0,queueMicrotask(Tn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|y)){if(!(r&p))return;n.f^=p}}I.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&y)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&M){a?r.f^=p:j(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Yt(i,n)}function jt(t){var n=B,r=I;try{Mt();const s=[];B=pn,I=s,q=!1,Ht(r);var e=t==null?void 0:t();return vn(),(I.length>0||s.length>0)&&jt(),N=0,e}finally{B=n,I=r}}async function yr(){await Promise.resolve(),jt()}function wr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&Y){var e=gt(t);return et(t),e}if(u!==null){E!==null&&E.includes(t)&&Jt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&o!==null&&o.f&p&&!(o.f&y)&&g.includes(t)&&(w(o,D),W(o))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,j(a)&&Dt(a)),t.v}function Tr(t){const n=u;try{return u=null,t()}finally{u=n}}const mn=~(D|H|p);function w(t,n){t.f=t.f&mn|n}function mr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function Ar(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];G(a.effect),$(a.reaction),Rt(a.fn)}}finally{G(r),$(e)}}f=n.p,n.m=!0}return{}}function gr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{dr as $,An as A,u as B,o as C,X as D,fn as E,rn as F,O as G,Gt as H,Jn as I,P as J,d as K,J as L,er as M,yt as N,sn as O,wt as P,Nn as Q,or as R,gn as S,cr as T,pr as U,zn as V,Wn as W,jn as X,en as Y,rr as Z,C as _,_r as a,hr as a0,Er as a1,Hn as a2,nn as a3,Yn as a4,Nt as a5,cn as a6,F as a7,Bn as a8,rt as a9,ur as aA,Zn as aB,jt as aC,yr as aD,qn as aE,Kt as aF,Un as aa,Ut as ab,Bt as ac,kn as ad,nr as ae,an as af,ut as ag,In as ah,Rn as ai,bn as aj,Xn as ak,ot as al,Fn as am,vt as an,Rt as ao,un as ap,Cn as aq,xn as ar,Gn as as,dt as at,y as au,K as av,Vn as aw,Z as ax,$n as ay,Kn as az,fr as b,f as c,On as d,Pn as e,gr as f,wr as g,ln as h,ar as i,vr as j,Ar as k,sr as l,Ln as m,Sn as n,tr as o,mr as p,lr as q,Vt as r,Mn as s,ir as t,Tr as u,R as v,Qn as w,Dn as x,$ as y,G as z};