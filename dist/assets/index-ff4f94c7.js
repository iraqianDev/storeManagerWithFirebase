(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Ba(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const fe={},os=[],gt=()=>{},b_=()=>!1,v_=/^on[^a-z]/,qr=t=>v_.test(t),$a=t=>t.startsWith("onUpdate:"),Fe=Object.assign,Ha=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},E_=Object.prototype.hasOwnProperty,se=(t,e)=>E_.call(t,e),V=Array.isArray,as=t=>zr(t)==="[object Map]",Bd=t=>zr(t)==="[object Set]",Y=t=>typeof t=="function",ke=t=>typeof t=="string",Wa=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",$d=t=>_e(t)&&Y(t.then)&&Y(t.catch),Hd=Object.prototype.toString,zr=t=>Hd.call(t),C_=t=>zr(t).slice(8,-1),Wd=t=>zr(t)==="[object Object]",ja=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ir=Ba(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},I_=/-(\w)/g,ms=Kr(t=>t.replace(I_,(e,n)=>n?n.toUpperCase():"")),T_=/\B([A-Z])/g,Ss=Kr(t=>t.replace(T_,"-$1").toLowerCase()),jd=Kr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Po=Kr(t=>t?`on${jd(t)}`:""),ui=(t,e)=>!Object.is(t,e),rr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},pr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},na=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yc;const sa=()=>Yc||(Yc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Va(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ke(s)?x_(s):Va(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ke(t))return t;if(_e(t))return t}}const S_=/;(?![^(]*\))/g,k_=/:([^]+)/,A_=/\/\*[^]*?\*\//g;function x_(t){const e={};return t.replace(A_,"").split(S_).forEach(n=>{if(n){const s=n.split(k_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function qa(t){let e="";if(ke(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=qa(t[n]);s&&(e+=s+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const R_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",P_=Ba(R_);function Vd(t){return!!t||t===""}const Ct=t=>ke(t)?t:t==null?"":V(t)||_e(t)&&(t.toString===Hd||!Y(t.toString))?JSON.stringify(t,qd,2):String(t),qd=(t,e)=>e&&e.__v_isRef?qd(t,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Bd(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!V(e)&&!Wd(e)?String(e):e;let ct;class N_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ct,!e&&ct&&(this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){ct=this}off(){ct=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function O_(t,e=ct){e&&e.active&&e.effects.push(t)}function D_(){return ct}const za=t=>{const e=new Set(t);return e.w=0,e.n=0,e},zd=t=>(t.w&pn)>0,Kd=t=>(t.n&pn)>0,M_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=pn},L_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];zd(i)&&!Kd(i)?i.delete(t):e[n++]=i,i.w&=~pn,i.n&=~pn}e.length=n}},ia=new WeakMap;let Qs=0,pn=1;const ra=30;let ut;const An=Symbol(""),oa=Symbol("");class Ka{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,O_(this,s)}run(){if(!this.active)return this.fn();let e=ut,n=cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ut,ut=this,cn=!0,pn=1<<++Qs,Qs<=ra?M_(this):Qc(this),this.fn()}finally{Qs<=ra&&L_(this),pn=1<<--Qs,ut=this.parent,cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ut===this?this.deferStop=!0:this.active&&(Qc(this),this.onStop&&this.onStop(),this.active=!1)}}function Qc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let cn=!0;const Gd=[];function ks(){Gd.push(cn),cn=!1}function As(){const t=Gd.pop();cn=t===void 0?!0:t}function nt(t,e,n){if(cn&&ut){let s=ia.get(t);s||ia.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=za()),Yd(i)}}function Yd(t,e){let n=!1;Qs<=ra?Kd(t)||(t.n|=pn,n=!zd(t)):n=!t.has(ut),n&&(t.add(ut),ut.deps.push(t))}function $t(t,e,n,s,i,r){const o=ia.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&V(t)){const d=Number(s);o.forEach((u,f)=>{(f==="length"||f>=d)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":V(t)?ja(n)&&c.push(o.get("length")):(c.push(o.get(An)),as(t)&&c.push(o.get(oa)));break;case"delete":V(t)||(c.push(o.get(An)),as(t)&&c.push(o.get(oa)));break;case"set":as(t)&&c.push(o.get(An));break}if(c.length===1)c[0]&&aa(c[0]);else{const d=[];for(const u of c)u&&d.push(...u);aa(za(d))}}function aa(t,e){const n=V(t)?t:[...t];for(const s of n)s.computed&&Jc(s);for(const s of n)s.computed||Jc(s)}function Jc(t,e){(t!==ut||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const F_=Ba("__proto__,__v_isRef,__isVue"),Qd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wa)),U_=Ga(),B_=Ga(!1,!0),$_=Ga(!0),Xc=H_();function H_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let r=0,o=this.length;r<o;r++)nt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(re)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ks();const s=re(this)[e].apply(this,n);return As(),s}}),t}function W_(t){const e=re(this);return nt(e,"has",t),e.hasOwnProperty(t)}function Ga(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?iw:th:e?eh:Zd).get(s))return s;const o=V(s);if(!t){if(o&&se(Xc,i))return Reflect.get(Xc,i,r);if(i==="hasOwnProperty")return W_}const c=Reflect.get(s,i,r);return(Wa(i)?Qd.has(i):F_(i))||(t||nt(s,"get",i),e)?c:We(c)?o&&ja(i)?c:c.value:_e(c)?t?nh(c):Ja(c):c}}const j_=Jd(),V_=Jd(!0);function Jd(t=!1){return function(n,s,i,r){let o=n[s];if(_s(o)&&We(o)&&!We(i))return!1;if(!t&&(!gr(i)&&!_s(i)&&(o=re(o),i=re(i)),!V(n)&&We(o)&&!We(i)))return o.value=i,!0;const c=V(n)&&ja(s)?Number(s)<n.length:se(n,s),d=Reflect.set(n,s,i,r);return n===re(r)&&(c?ui(i,o)&&$t(n,"set",s,i):$t(n,"add",s,i)),d}}function q_(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&$t(t,"delete",e,void 0),s}function z_(t,e){const n=Reflect.has(t,e);return(!Wa(e)||!Qd.has(e))&&nt(t,"has",e),n}function K_(t){return nt(t,"iterate",V(t)?"length":An),Reflect.ownKeys(t)}const Xd={get:U_,set:j_,deleteProperty:q_,has:z_,ownKeys:K_},G_={get:$_,set(t,e){return!0},deleteProperty(t,e){return!0}},Y_=Fe({},Xd,{get:B_,set:V_}),Ya=t=>t,Gr=t=>Reflect.getPrototypeOf(t);function Ki(t,e,n=!1,s=!1){t=t.__v_raw;const i=re(t),r=re(e);n||(e!==r&&nt(i,"get",e),nt(i,"get",r));const{has:o}=Gr(i),c=s?Ya:n?Za:di;if(o.call(i,e))return c(t.get(e));if(o.call(i,r))return c(t.get(r));t!==i&&t.get(e)}function Gi(t,e=!1){const n=this.__v_raw,s=re(n),i=re(t);return e||(t!==i&&nt(s,"has",t),nt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Yi(t,e=!1){return t=t.__v_raw,!e&&nt(re(t),"iterate",An),Reflect.get(t,"size",t)}function Zc(t){t=re(t);const e=re(this);return Gr(e).has.call(e,t)||(e.add(t),$t(e,"add",t,t)),this}function eu(t,e){e=re(e);const n=re(this),{has:s,get:i}=Gr(n);let r=s.call(n,t);r||(t=re(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ui(e,o)&&$t(n,"set",t,e):$t(n,"add",t,e),this}function tu(t){const e=re(this),{has:n,get:s}=Gr(e);let i=n.call(e,t);i||(t=re(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&$t(e,"delete",t,void 0),r}function nu(){const t=re(this),e=t.size!==0,n=t.clear();return e&&$t(t,"clear",void 0,void 0),n}function Qi(t,e){return function(s,i){const r=this,o=r.__v_raw,c=re(o),d=e?Ya:t?Za:di;return!t&&nt(c,"iterate",An),o.forEach((u,f)=>s.call(i,d(u),d(f),r))}}function Ji(t,e,n){return function(...s){const i=this.__v_raw,r=re(i),o=as(r),c=t==="entries"||t===Symbol.iterator&&o,d=t==="keys"&&o,u=i[t](...s),f=n?Ya:e?Za:di;return!e&&nt(r,"iterate",d?oa:An),{next(){const{value:p,done:_}=u.next();return _?{value:p,done:_}:{value:c?[f(p[0]),f(p[1])]:f(p),done:_}},[Symbol.iterator](){return this}}}}function Xt(t){return function(...e){return t==="delete"?!1:this}}function Q_(){const t={get(r){return Ki(this,r)},get size(){return Yi(this)},has:Gi,add:Zc,set:eu,delete:tu,clear:nu,forEach:Qi(!1,!1)},e={get(r){return Ki(this,r,!1,!0)},get size(){return Yi(this)},has:Gi,add:Zc,set:eu,delete:tu,clear:nu,forEach:Qi(!1,!0)},n={get(r){return Ki(this,r,!0)},get size(){return Yi(this,!0)},has(r){return Gi.call(this,r,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Qi(!0,!1)},s={get(r){return Ki(this,r,!0,!0)},get size(){return Yi(this,!0)},has(r){return Gi.call(this,r,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ji(r,!1,!1),n[r]=Ji(r,!0,!1),e[r]=Ji(r,!1,!0),s[r]=Ji(r,!0,!0)}),[t,n,e,s]}const[J_,X_,Z_,ew]=Q_();function Qa(t,e){const n=e?t?ew:Z_:t?X_:J_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(se(n,i)&&i in s?n:s,i,r)}const tw={get:Qa(!1,!1)},nw={get:Qa(!1,!0)},sw={get:Qa(!0,!1)},Zd=new WeakMap,eh=new WeakMap,th=new WeakMap,iw=new WeakMap;function rw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ow(t){return t.__v_skip||!Object.isExtensible(t)?0:rw(C_(t))}function Ja(t){return _s(t)?t:Xa(t,!1,Xd,tw,Zd)}function aw(t){return Xa(t,!1,Y_,nw,eh)}function nh(t){return Xa(t,!0,G_,sw,th)}function Xa(t,e,n,s,i){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=ow(t);if(o===0)return t;const c=new Proxy(t,o===2?s:n);return i.set(t,c),c}function ls(t){return _s(t)?ls(t.__v_raw):!!(t&&t.__v_isReactive)}function _s(t){return!!(t&&t.__v_isReadonly)}function gr(t){return!!(t&&t.__v_isShallow)}function sh(t){return ls(t)||_s(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function ih(t){return pr(t,"__v_skip",!0),t}const di=t=>_e(t)?Ja(t):t,Za=t=>_e(t)?nh(t):t;function rh(t){cn&&ut&&(t=re(t),Yd(t.dep||(t.dep=za())))}function oh(t,e){t=re(t);const n=t.dep;n&&aa(n)}function We(t){return!!(t&&t.__v_isRef===!0)}function we(t){return lw(t,!1)}function lw(t,e){return We(t)?t:new cw(t,e)}class cw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:di(e)}get value(){return rh(this),this._value}set value(e){const n=this.__v_isShallow||gr(e)||_s(e);e=n?e:re(e),ui(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:di(e),oh(this))}}function uw(t){return We(t)?t.value:t}const dw={get:(t,e,n)=>uw(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return We(i)&&!We(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ah(t){return ls(t)?t:new Proxy(t,dw)}class hw{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ka(e,()=>{this._dirty||(this._dirty=!0,oh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=re(this);return rh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function fw(t,e,n=!1){let s,i;const r=Y(t);return r?(s=t,i=gt):(s=t.get,i=t.set),new hw(s,i,r||!i,n)}function un(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Yr(r,e,n)}return i}function mt(t,e,n,s){if(Y(t)){const r=un(t,e,n,s);return r&&$d(r)&&r.catch(o=>{Yr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(mt(t[r],e,n,s));return i}function Yr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,c=n;for(;r;){const u=r.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,o,c)===!1)return}r=r.parent}const d=e.appContext.config.errorHandler;if(d){un(d,null,10,[t,o,c]);return}}pw(t,n,i,s)}function pw(t,e,n,s=!0){console.error(t)}let hi=!1,la=!1;const $e=[];let St=0;const cs=[];let Ot=null,Cn=0;const lh=Promise.resolve();let el=null;function gw(t){const e=el||lh;return t?e.then(this?t.bind(this):t):e}function mw(t){let e=St+1,n=$e.length;for(;e<n;){const s=e+n>>>1;fi($e[s])<t?e=s+1:n=s}return e}function tl(t){(!$e.length||!$e.includes(t,hi&&t.allowRecurse?St+1:St))&&(t.id==null?$e.push(t):$e.splice(mw(t.id),0,t),ch())}function ch(){!hi&&!la&&(la=!0,el=lh.then(dh))}function _w(t){const e=$e.indexOf(t);e>St&&$e.splice(e,1)}function ww(t){V(t)?cs.push(...t):(!Ot||!Ot.includes(t,t.allowRecurse?Cn+1:Cn))&&cs.push(t),ch()}function su(t,e=hi?St+1:0){for(;e<$e.length;e++){const n=$e[e];n&&n.pre&&($e.splice(e,1),e--,n())}}function uh(t){if(cs.length){const e=[...new Set(cs)];if(cs.length=0,Ot){Ot.push(...e);return}for(Ot=e,Ot.sort((n,s)=>fi(n)-fi(s)),Cn=0;Cn<Ot.length;Cn++)Ot[Cn]();Ot=null,Cn=0}}const fi=t=>t.id==null?1/0:t.id,yw=(t,e)=>{const n=fi(t)-fi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function dh(t){la=!1,hi=!0,$e.sort(yw);const e=gt;try{for(St=0;St<$e.length;St++){const n=$e[St];n&&n.active!==!1&&un(n,null,14)}}finally{St=0,$e.length=0,uh(),hi=!1,el=null,($e.length||cs.length)&&dh()}}function bw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||fe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:_}=s[f]||fe;_&&(i=n.map(y=>ke(y)?y.trim():y)),p&&(i=n.map(na))}let c,d=s[c=Po(e)]||s[c=Po(ms(e))];!d&&r&&(d=s[c=Po(Ss(e))]),d&&mt(d,t,6,i);const u=s[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,mt(u,t,6,i)}}function hh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},c=!1;if(!Y(t)){const d=u=>{const f=hh(u,e,!0);f&&(c=!0,Fe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}return!r&&!c?(_e(t)&&s.set(t,null),null):(V(r)?r.forEach(d=>o[d]=null):Fe(o,r),_e(t)&&s.set(t,o),o)}function Qr(t,e){return!t||!qr(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Ss(e))||se(t,e))}let ht=null,fh=null;function mr(t){const e=ht;return ht=t,fh=t&&t.type.__scopeId||null,e}function vw(t,e=ht,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&pu(-1);const r=mr(e);let o;try{o=t(...i)}finally{mr(r),s._d&&pu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function No(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:c,attrs:d,emit:u,render:f,renderCache:p,data:_,setupState:y,ctx:I,inheritAttrs:P}=t;let F,K;const ee=mr(t);try{if(n.shapeFlag&4){const N=i||s;F=Tt(f.call(N,N,p,r,y,_,I)),K=d}else{const N=e;F=Tt(N.length>1?N(r,{attrs:d,slots:c,emit:u}):N(r,null)),K=e.props?d:Ew(d)}}catch(N){si.length=0,Yr(N,t,1),F=tt(Dn)}let L=F;if(K&&P!==!1){const N=Object.keys(K),{shapeFlag:$}=L;N.length&&$&7&&(o&&N.some($a)&&(K=Cw(K,o)),L=ws(L,K))}return n.dirs&&(L=ws(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),F=L,mr(ee),F}const Ew=t=>{let e;for(const n in t)(n==="class"||n==="style"||qr(n))&&((e||(e={}))[n]=t[n]);return e},Cw=(t,e)=>{const n={};for(const s in t)(!$a(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Iw(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:c,patchFlag:d}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&d>=0){if(d&1024)return!0;if(d&16)return s?iu(s,o,u):!!o;if(d&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const _=f[p];if(o[_]!==s[_]&&!Qr(u,_))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:s===o?!1:s?o?iu(s,o,u):!0:!!o;return!1}function iu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Qr(n,r))return!0}return!1}function Tw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Sw=t=>t.__isSuspense;function kw(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):ww(t)}const Xi={};function Oo(t,e,n){return ph(t,e,n)}function ph(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=fe){var c;const d=D_()===((c=He)==null?void 0:c.scope)?He:null;let u,f=!1,p=!1;if(We(t)?(u=()=>t.value,f=gr(t)):ls(t)?(u=()=>t,s=!0):V(t)?(p=!0,f=t.some(N=>ls(N)||gr(N)),u=()=>t.map(N=>{if(We(N))return N.value;if(ls(N))return Tn(N);if(Y(N))return un(N,d,2)})):Y(t)?e?u=()=>un(t,d,2):u=()=>{if(!(d&&d.isUnmounted))return _&&_(),mt(t,d,3,[y])}:u=gt,e&&s){const N=u;u=()=>Tn(N())}let _,y=N=>{_=ee.onStop=()=>{un(N,d,4)}},I;if(mi)if(y=gt,e?n&&mt(e,d,3,[u(),p?[]:void 0,y]):u(),i==="sync"){const N=vy();I=N.__watcherHandles||(N.__watcherHandles=[])}else return gt;let P=p?new Array(t.length).fill(Xi):Xi;const F=()=>{if(ee.active)if(e){const N=ee.run();(s||f||(p?N.some(($,he)=>ui($,P[he])):ui(N,P)))&&(_&&_(),mt(e,d,3,[N,P===Xi?void 0:p&&P[0]===Xi?[]:P,y]),P=N)}else ee.run()};F.allowRecurse=!!e;let K;i==="sync"?K=F:i==="post"?K=()=>Je(F,d&&d.suspense):(F.pre=!0,d&&(F.id=d.uid),K=()=>tl(F));const ee=new Ka(u,K);e?n?F():P=ee.run():i==="post"?Je(ee.run.bind(ee),d&&d.suspense):ee.run();const L=()=>{ee.stop(),d&&d.scope&&Ha(d.scope.effects,ee)};return I&&I.push(L),L}function Aw(t,e,n){const s=this.proxy,i=ke(t)?t.includes(".")?gh(s,t):()=>s[t]:t.bind(s,s);let r;Y(e)?r=e:(r=e.handler,n=e);const o=He;ys(this);const c=ph(i,r.bind(s),n);return o?ys(o):Rn(),c}function gh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Tn(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),We(t))Tn(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)Tn(t[n],e);else if(Bd(t)||as(t))t.forEach(n=>{Tn(n,e)});else if(Wd(t))for(const n in t)Tn(t[n],e);return t}function Dt(t,e){const n=ht;if(n===null)return t;const s=eo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,c,d,u=fe]=e[r];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Tn(c),i.push({dir:o,instance:s,value:c,oldValue:void 0,arg:d,modifiers:u}))}return t}function yn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const c=i[o];r&&(c.oldValue=r[o].value);let d=c.dir[s];d&&(ks(),mt(d,n,8,[t.el,c,t,e]),As())}}const or=t=>!!t.type.__asyncLoader,mh=t=>t.type.__isKeepAlive;function xw(t,e){_h(t,"a",e)}function Rw(t,e){_h(t,"da",e)}function _h(t,e,n=He){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Jr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)mh(i.parent.vnode)&&Pw(s,e,n,i),i=i.parent}}function Pw(t,e,n,s){const i=Jr(e,t,s,!0);wh(()=>{Ha(s[e],i)},n)}function Jr(t,e,n=He,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ks(),ys(n);const c=mt(e,n,t,o);return Rn(),As(),c});return s?i.unshift(r):i.push(r),r}}const jt=t=>(e,n=He)=>(!mi||t==="sp")&&Jr(t,(...s)=>e(...s),n),Nw=jt("bm"),nl=jt("m"),Ow=jt("bu"),Dw=jt("u"),Mw=jt("bum"),wh=jt("um"),Lw=jt("sp"),Fw=jt("rtg"),Uw=jt("rtc");function Bw(t,e=He){Jr("ec",t,e)}const $w=Symbol.for("v-ndc");function ru(t,e,n,s){let i;const r=n&&n[s];if(V(t)||ke(t)){i=new Array(t.length);for(let o=0,c=t.length;o<c;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(_e(t))if(t[Symbol.iterator])i=Array.from(t,(o,c)=>e(o,c,void 0,r&&r[c]));else{const o=Object.keys(t);i=new Array(o.length);for(let c=0,d=o.length;c<d;c++){const u=o[c];i[c]=e(t[u],u,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const ca=t=>t?xh(t)?eo(t)||t.proxy:ca(t.parent):null,ni=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ca(t.parent),$root:t=>ca(t.root),$emit:t=>t.emit,$options:t=>sl(t),$forceUpdate:t=>t.f||(t.f=()=>tl(t.update)),$nextTick:t=>t.n||(t.n=gw.bind(t.proxy)),$watch:t=>Aw.bind(t)}),Do=(t,e)=>t!==fe&&!t.__isScriptSetup&&se(t,e),Hw={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:c,appContext:d}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Do(s,e))return o[e]=1,s[e];if(i!==fe&&se(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&se(u,e))return o[e]=3,r[e];if(n!==fe&&se(n,e))return o[e]=4,n[e];ua&&(o[e]=0)}}const f=ni[e];let p,_;if(f)return e==="$attrs"&&nt(t,"get",e),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==fe&&se(n,e))return o[e]=4,n[e];if(_=d.config.globalProperties,se(_,e))return _[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Do(i,e)?(i[e]=n,!0):s!==fe&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let c;return!!n[o]||t!==fe&&se(t,o)||Do(e,o)||(c=r[0])&&se(c,o)||se(s,o)||se(ni,o)||se(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ou(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ua=!0;function Ww(t){const e=sl(t),n=t.proxy,s=t.ctx;ua=!1,e.beforeCreate&&au(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:c,provide:d,inject:u,created:f,beforeMount:p,mounted:_,beforeUpdate:y,updated:I,activated:P,deactivated:F,beforeDestroy:K,beforeUnmount:ee,destroyed:L,unmounted:N,render:$,renderTracked:he,renderTriggered:ne,errorCaptured:pe,serverPrefetch:ge,expose:G,inheritAttrs:st,components:zt,directives:Kt,filters:bt}=e;if(u&&jw(u,s,null),o)for(const ce in o){const Q=o[ce];Y(Q)&&(s[ce]=Q.bind(n))}if(i){const ce=i.call(n,n);_e(ce)&&(t.data=Ja(ce))}if(ua=!0,r)for(const ce in r){const Q=r[ce],Ve=Y(Q)?Q.bind(n,n):Y(Q.get)?Q.get.bind(n,n):gt,it=!Y(Q)&&Y(Q.set)?Q.set.bind(n):gt,Nt=yy({get:Ve,set:it});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:De=>Nt.value=De})}if(c)for(const ce in c)yh(c[ce],s,n,ce);if(d){const ce=Y(d)?d.call(n):d;Reflect.ownKeys(ce).forEach(Q=>{Yw(Q,ce[Q])})}f&&au(f,t,"c");function Te(ce,Q){V(Q)?Q.forEach(Ve=>ce(Ve.bind(n))):Q&&ce(Q.bind(n))}if(Te(Nw,p),Te(nl,_),Te(Ow,y),Te(Dw,I),Te(xw,P),Te(Rw,F),Te(Bw,pe),Te(Uw,he),Te(Fw,ne),Te(Mw,ee),Te(wh,N),Te(Lw,ge),V(G))if(G.length){const ce=t.exposed||(t.exposed={});G.forEach(Q=>{Object.defineProperty(ce,Q,{get:()=>n[Q],set:Ve=>n[Q]=Ve})})}else t.exposed||(t.exposed={});$&&t.render===gt&&(t.render=$),st!=null&&(t.inheritAttrs=st),zt&&(t.components=zt),Kt&&(t.directives=Kt)}function jw(t,e,n=gt){V(t)&&(t=da(t));for(const s in t){const i=t[s];let r;_e(i)?"default"in i?r=ar(i.from||s,i.default,!0):r=ar(i.from||s):r=ar(i),We(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function au(t,e,n){mt(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function yh(t,e,n,s){const i=s.includes(".")?gh(n,s):()=>n[s];if(ke(t)){const r=e[t];Y(r)&&Oo(i,r)}else if(Y(t))Oo(i,t.bind(n));else if(_e(t))if(V(t))t.forEach(r=>yh(r,e,n,s));else{const r=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(r)&&Oo(i,r,t)}}function sl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,c=r.get(e);let d;return c?d=c:!i.length&&!n&&!s?d=e:(d={},i.length&&i.forEach(u=>_r(d,u,o,!0)),_r(d,e,o)),_e(e)&&r.set(e,d),d}function _r(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&_r(t,r,n,!0),i&&i.forEach(o=>_r(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const c=Vw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Vw={data:lu,props:cu,emits:cu,methods:Js,computed:Js,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:Js,directives:Js,watch:zw,provide:lu,inject:qw};function lu(t,e){return e?t?function(){return Fe(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function qw(t,e){return Js(da(t),da(e))}function da(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ke(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?Fe(Object.create(null),t,e):e}function cu(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:Fe(Object.create(null),ou(t),ou(e??{})):e}function zw(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=Ke(t[s],e[s]);return n}function bh(){return{app:null,config:{isNativeTag:b_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kw=0;function Gw(t,e){return function(s,i=null){Y(s)||(s=Fe({},s)),i!=null&&!_e(i)&&(i=null);const r=bh(),o=new Set;let c=!1;const d=r.app={_uid:Kw++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Ey,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(d,...f)):Y(u)&&(o.add(u),u(d,...f))),d},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),d},component(u,f){return f?(r.components[u]=f,d):r.components[u]},directive(u,f){return f?(r.directives[u]=f,d):r.directives[u]},mount(u,f,p){if(!c){const _=tt(s,i);return _.appContext=r,f&&e?e(_,u):t(_,u,p),c=!0,d._container=u,u.__vue_app__=d,eo(_.component)||_.component.proxy}},unmount(){c&&(t(null,d._container),delete d._container.__vue_app__)},provide(u,f){return r.provides[u]=f,d},runWithContext(u){wr=d;try{return u()}finally{wr=null}}};return d}}let wr=null;function Yw(t,e){if(He){let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[t]=e}}function ar(t,e,n=!1){const s=He||ht;if(s||wr){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:wr._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Y(e)?e.call(s&&s.proxy):e}}function Qw(t,e,n,s=!1){const i={},r={};pr(r,Zr,1),t.propsDefaults=Object.create(null),vh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:aw(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Jw(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,c=re(i),[d]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let _=f[p];if(Qr(t.emitsOptions,_))continue;const y=e[_];if(d)if(se(r,_))y!==r[_]&&(r[_]=y,u=!0);else{const I=ms(_);i[I]=ha(d,c,I,y,t,!1)}else y!==r[_]&&(r[_]=y,u=!0)}}}else{vh(t,e,i,r)&&(u=!0);let f;for(const p in c)(!e||!se(e,p)&&((f=Ss(p))===p||!se(e,f)))&&(d?n&&(n[p]!==void 0||n[f]!==void 0)&&(i[p]=ha(d,c,p,void 0,t,!0)):delete i[p]);if(r!==c)for(const p in r)(!e||!se(e,p))&&(delete r[p],u=!0)}u&&$t(t,"set","$attrs")}function vh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,c;if(e)for(let d in e){if(ir(d))continue;const u=e[d];let f;i&&se(i,f=ms(d))?!r||!r.includes(f)?n[f]=u:(c||(c={}))[f]=u:Qr(t.emitsOptions,d)||(!(d in s)||u!==s[d])&&(s[d]=u,o=!0)}if(r){const d=re(n),u=c||fe;for(let f=0;f<r.length;f++){const p=r[f];n[p]=ha(i,d,p,u[p],t,!se(u,p))}}return o}function ha(t,e,n,s,i,r){const o=t[n];if(o!=null){const c=se(o,"default");if(c&&s===void 0){const d=o.default;if(o.type!==Function&&!o.skipFactory&&Y(d)){const{propsDefaults:u}=i;n in u?s=u[n]:(ys(i),s=u[n]=d.call(null,e),Rn())}else s=d}o[0]&&(r&&!c?s=!1:o[1]&&(s===""||s===Ss(n))&&(s=!0))}return s}function Eh(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},c=[];let d=!1;if(!Y(t)){const f=p=>{d=!0;const[_,y]=Eh(p,e,!0);Fe(o,_),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!d)return _e(t)&&s.set(t,os),os;if(V(r))for(let f=0;f<r.length;f++){const p=ms(r[f]);uu(p)&&(o[p]=fe)}else if(r)for(const f in r){const p=ms(f);if(uu(p)){const _=r[f],y=o[p]=V(_)||Y(_)?{type:_}:Fe({},_);if(y){const I=fu(Boolean,y.type),P=fu(String,y.type);y[0]=I>-1,y[1]=P<0||I<P,(I>-1||se(y,"default"))&&c.push(p)}}}const u=[o,c];return _e(t)&&s.set(t,u),u}function uu(t){return t[0]!=="$"}function du(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function hu(t,e){return du(t)===du(e)}function fu(t,e){return V(e)?e.findIndex(n=>hu(n,t)):Y(e)&&hu(e,t)?0:-1}const Ch=t=>t[0]==="_"||t==="$stable",il=t=>V(t)?t.map(Tt):[Tt(t)],Xw=(t,e,n)=>{if(e._n)return e;const s=vw((...i)=>il(e(...i)),n);return s._c=!1,s},Ih=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ch(i))continue;const r=t[i];if(Y(r))e[i]=Xw(i,r,s);else if(r!=null){const o=il(r);e[i]=()=>o}}},Th=(t,e)=>{const n=il(e);t.slots.default=()=>n},Zw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),pr(e,"_",n)):Ih(e,t.slots={})}else t.slots={},e&&Th(t,e);pr(t.slots,Zr,1)},ey=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=fe;if(s.shapeFlag&32){const c=e._;c?n&&c===1?r=!1:(Fe(i,e),!n&&c===1&&delete i._):(r=!e.$stable,Ih(e,i)),o=e}else e&&(Th(t,e),o={default:1});if(r)for(const c in i)!Ch(c)&&!(c in o)&&delete i[c]};function fa(t,e,n,s,i=!1){if(V(t)){t.forEach((_,y)=>fa(_,e&&(V(e)?e[y]:e),n,s,i));return}if(or(s)&&!i)return;const r=s.shapeFlag&4?eo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:c,r:d}=t,u=e&&e.r,f=c.refs===fe?c.refs={}:c.refs,p=c.setupState;if(u!=null&&u!==d&&(ke(u)?(f[u]=null,se(p,u)&&(p[u]=null)):We(u)&&(u.value=null)),Y(d))un(d,c,12,[o,f]);else{const _=ke(d),y=We(d);if(_||y){const I=()=>{if(t.f){const P=_?se(p,d)?p[d]:f[d]:d.value;i?V(P)&&Ha(P,r):V(P)?P.includes(r)||P.push(r):_?(f[d]=[r],se(p,d)&&(p[d]=f[d])):(d.value=[r],t.k&&(f[t.k]=d.value))}else _?(f[d]=o,se(p,d)&&(p[d]=o)):y&&(d.value=o,t.k&&(f[t.k]=o))};o?(I.id=-1,Je(I,n)):I()}}}const Je=kw;function ty(t){return ny(t)}function ny(t,e){const n=sa();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:c,createComment:d,setText:u,setElementText:f,parentNode:p,nextSibling:_,setScopeId:y=gt,insertStaticContent:I}=t,P=(m,w,v,C=null,T=null,R=null,D=!1,E=null,A=!!w.dynamicChildren)=>{if(m===w)return;m&&!Vs(m,w)&&(C=Gn(m),De(m,T,R,!0),m=null),w.patchFlag===-2&&(A=!1,w.dynamicChildren=null);const{type:S,ref:U,shapeFlag:O}=w;switch(S){case Xr:F(m,w,v,C);break;case Dn:K(m,w,v,C);break;case Mo:m==null&&ee(w,v,C,D);break;case Xe:zt(m,w,v,C,T,R,D,E,A);break;default:O&1?$(m,w,v,C,T,R,D,E,A):O&6?Kt(m,w,v,C,T,R,D,E,A):(O&64||O&128)&&S.process(m,w,v,C,T,R,D,E,A,vt)}U!=null&&T&&fa(U,m&&m.ref,R,w||m,!w)},F=(m,w,v,C)=>{if(m==null)s(w.el=c(w.children),v,C);else{const T=w.el=m.el;w.children!==m.children&&u(T,w.children)}},K=(m,w,v,C)=>{m==null?s(w.el=d(w.children||""),v,C):w.el=m.el},ee=(m,w,v,C)=>{[m.el,m.anchor]=I(m.children,w,v,C,m.el,m.anchor)},L=({el:m,anchor:w},v,C)=>{let T;for(;m&&m!==w;)T=_(m),s(m,v,C),m=T;s(w,v,C)},N=({el:m,anchor:w})=>{let v;for(;m&&m!==w;)v=_(m),i(m),m=v;i(w)},$=(m,w,v,C,T,R,D,E,A)=>{D=D||w.type==="svg",m==null?he(w,v,C,T,R,D,E,A):ge(m,w,T,R,D,E,A)},he=(m,w,v,C,T,R,D,E)=>{let A,S;const{type:U,props:O,shapeFlag:M,transition:W,dirs:q}=m;if(A=m.el=o(m.type,R,O&&O.is,O),M&8?f(A,m.children):M&16&&pe(m.children,A,null,C,T,R&&U!=="foreignObject",D,E),q&&yn(m,null,C,"created"),ne(A,m,m.scopeId,D,C),O){for(const oe in O)oe!=="value"&&!ir(oe)&&r(A,oe,null,O[oe],R,m.children,C,T,rt);"value"in O&&r(A,"value",null,O.value),(S=O.onVnodeBeforeMount)&&It(S,C,m)}q&&yn(m,null,C,"beforeMount");const z=(!T||T&&!T.pendingBranch)&&W&&!W.persisted;z&&W.beforeEnter(A),s(A,w,v),((S=O&&O.onVnodeMounted)||z||q)&&Je(()=>{S&&It(S,C,m),z&&W.enter(A),q&&yn(m,null,C,"mounted")},T)},ne=(m,w,v,C,T)=>{if(v&&y(m,v),C)for(let R=0;R<C.length;R++)y(m,C[R]);if(T){let R=T.subTree;if(w===R){const D=T.vnode;ne(m,D,D.scopeId,D.slotScopeIds,T.parent)}}},pe=(m,w,v,C,T,R,D,E,A=0)=>{for(let S=A;S<m.length;S++){const U=m[S]=E?tn(m[S]):Tt(m[S]);P(null,U,w,v,C,T,R,D,E)}},ge=(m,w,v,C,T,R,D)=>{const E=w.el=m.el;let{patchFlag:A,dynamicChildren:S,dirs:U}=w;A|=m.patchFlag&16;const O=m.props||fe,M=w.props||fe;let W;v&&bn(v,!1),(W=M.onVnodeBeforeUpdate)&&It(W,v,w,m),U&&yn(w,m,v,"beforeUpdate"),v&&bn(v,!0);const q=T&&w.type!=="foreignObject";if(S?G(m.dynamicChildren,S,E,v,C,q,R):D||Q(m,w,E,null,v,C,q,R,!1),A>0){if(A&16)st(E,w,O,M,v,C,T);else if(A&2&&O.class!==M.class&&r(E,"class",null,M.class,T),A&4&&r(E,"style",O.style,M.style,T),A&8){const z=w.dynamicProps;for(let oe=0;oe<z.length;oe++){const me=z[oe],Ye=O[me],Et=M[me];(Et!==Ye||me==="value")&&r(E,me,Ye,Et,T,m.children,v,C,rt)}}A&1&&m.children!==w.children&&f(E,w.children)}else!D&&S==null&&st(E,w,O,M,v,C,T);((W=M.onVnodeUpdated)||U)&&Je(()=>{W&&It(W,v,w,m),U&&yn(w,m,v,"updated")},C)},G=(m,w,v,C,T,R,D)=>{for(let E=0;E<w.length;E++){const A=m[E],S=w[E],U=A.el&&(A.type===Xe||!Vs(A,S)||A.shapeFlag&70)?p(A.el):v;P(A,S,U,null,C,T,R,D,!0)}},st=(m,w,v,C,T,R,D)=>{if(v!==C){if(v!==fe)for(const E in v)!ir(E)&&!(E in C)&&r(m,E,v[E],null,D,w.children,T,R,rt);for(const E in C){if(ir(E))continue;const A=C[E],S=v[E];A!==S&&E!=="value"&&r(m,E,S,A,D,w.children,T,R,rt)}"value"in C&&r(m,"value",v.value,C.value)}},zt=(m,w,v,C,T,R,D,E,A)=>{const S=w.el=m?m.el:c(""),U=w.anchor=m?m.anchor:c("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:W}=w;W&&(E=E?E.concat(W):W),m==null?(s(S,v,C),s(U,v,C),pe(w.children,v,U,T,R,D,E,A)):O>0&&O&64&&M&&m.dynamicChildren?(G(m.dynamicChildren,M,v,T,R,D,E),(w.key!=null||T&&w===T.subTree)&&Sh(m,w,!0)):Q(m,w,v,U,T,R,D,E,A)},Kt=(m,w,v,C,T,R,D,E,A)=>{w.slotScopeIds=E,m==null?w.shapeFlag&512?T.ctx.activate(w,v,C,D,A):bt(w,v,C,T,R,D,A):Us(m,w,A)},bt=(m,w,v,C,T,R,D)=>{const E=m.component=fy(m,C,T);if(mh(m)&&(E.ctx.renderer=vt),py(E),E.asyncDep){if(T&&T.registerDep(E,Te),!m.el){const A=E.subTree=tt(Dn);K(null,A,w,v)}return}Te(E,m,w,v,T,R,D)},Us=(m,w,v)=>{const C=w.component=m.component;if(Iw(m,w,v))if(C.asyncDep&&!C.asyncResolved){ce(C,w,v);return}else C.next=w,_w(C.update),C.update();else w.el=m.el,C.vnode=w},Te=(m,w,v,C,T,R,D)=>{const E=()=>{if(m.isMounted){let{next:U,bu:O,u:M,parent:W,vnode:q}=m,z=U,oe;bn(m,!1),U?(U.el=q.el,ce(m,U,D)):U=q,O&&rr(O),(oe=U.props&&U.props.onVnodeBeforeUpdate)&&It(oe,W,U,q),bn(m,!0);const me=No(m),Ye=m.subTree;m.subTree=me,P(Ye,me,p(Ye.el),Gn(Ye),m,T,R),U.el=me.el,z===null&&Tw(m,me.el),M&&Je(M,T),(oe=U.props&&U.props.onVnodeUpdated)&&Je(()=>It(oe,W,U,q),T)}else{let U;const{el:O,props:M}=w,{bm:W,m:q,parent:z}=m,oe=or(w);if(bn(m,!1),W&&rr(W),!oe&&(U=M&&M.onVnodeBeforeMount)&&It(U,z,w),bn(m,!0),O&&Bs){const me=()=>{m.subTree=No(m),Bs(O,m.subTree,m,T,null)};oe?w.type.__asyncLoader().then(()=>!m.isUnmounted&&me()):me()}else{const me=m.subTree=No(m);P(null,me,v,C,m,T,R),w.el=me.el}if(q&&Je(q,T),!oe&&(U=M&&M.onVnodeMounted)){const me=w;Je(()=>It(U,z,me),T)}(w.shapeFlag&256||z&&or(z.vnode)&&z.vnode.shapeFlag&256)&&m.a&&Je(m.a,T),m.isMounted=!0,w=v=C=null}},A=m.effect=new Ka(E,()=>tl(S),m.scope),S=m.update=()=>A.run();S.id=m.uid,bn(m,!0),S()},ce=(m,w,v)=>{w.component=m;const C=m.vnode.props;m.vnode=w,m.next=null,Jw(m,w.props,C,v),ey(m,w.children,v),ks(),su(),As()},Q=(m,w,v,C,T,R,D,E,A=!1)=>{const S=m&&m.children,U=m?m.shapeFlag:0,O=w.children,{patchFlag:M,shapeFlag:W}=w;if(M>0){if(M&128){it(S,O,v,C,T,R,D,E,A);return}else if(M&256){Ve(S,O,v,C,T,R,D,E,A);return}}W&8?(U&16&&rt(S,T,R),O!==S&&f(v,O)):U&16?W&16?it(S,O,v,C,T,R,D,E,A):rt(S,T,R,!0):(U&8&&f(v,""),W&16&&pe(O,v,C,T,R,D,E,A))},Ve=(m,w,v,C,T,R,D,E,A)=>{m=m||os,w=w||os;const S=m.length,U=w.length,O=Math.min(S,U);let M;for(M=0;M<O;M++){const W=w[M]=A?tn(w[M]):Tt(w[M]);P(m[M],W,v,null,T,R,D,E,A)}S>U?rt(m,T,R,!0,!1,O):pe(w,v,C,T,R,D,E,A,O)},it=(m,w,v,C,T,R,D,E,A)=>{let S=0;const U=w.length;let O=m.length-1,M=U-1;for(;S<=O&&S<=M;){const W=m[S],q=w[S]=A?tn(w[S]):Tt(w[S]);if(Vs(W,q))P(W,q,v,null,T,R,D,E,A);else break;S++}for(;S<=O&&S<=M;){const W=m[O],q=w[M]=A?tn(w[M]):Tt(w[M]);if(Vs(W,q))P(W,q,v,null,T,R,D,E,A);else break;O--,M--}if(S>O){if(S<=M){const W=M+1,q=W<U?w[W].el:C;for(;S<=M;)P(null,w[S]=A?tn(w[S]):Tt(w[S]),v,q,T,R,D,E,A),S++}}else if(S>M)for(;S<=O;)De(m[S],T,R,!0),S++;else{const W=S,q=S,z=new Map;for(S=q;S<=M;S++){const qe=w[S]=A?tn(w[S]):Tt(w[S]);qe.key!=null&&z.set(qe.key,S)}let oe,me=0;const Ye=M-q+1;let Et=!1,$i=0;const Qt=new Array(Ye);for(S=0;S<Ye;S++)Qt[S]=0;for(S=W;S<=O;S++){const qe=m[S];if(me>=Ye){De(qe,T,R,!0);continue}let xe;if(qe.key!=null)xe=z.get(qe.key);else for(oe=q;oe<=M;oe++)if(Qt[oe-q]===0&&Vs(qe,w[oe])){xe=oe;break}xe===void 0?De(qe,T,R,!0):(Qt[xe-q]=S+1,xe>=$i?$i=xe:Et=!0,P(qe,w[xe],v,null,T,R,D,E,A),me++)}const Hi=Et?sy(Qt):os;for(oe=Hi.length-1,S=Ye-1;S>=0;S--){const qe=q+S,xe=w[qe],Wi=qe+1<U?w[qe+1].el:C;Qt[S]===0?P(null,xe,v,Wi,T,R,D,E,A):Et&&(oe<0||S!==Hi[oe]?Nt(xe,v,Wi,2):oe--)}}},Nt=(m,w,v,C,T=null)=>{const{el:R,type:D,transition:E,children:A,shapeFlag:S}=m;if(S&6){Nt(m.component.subTree,w,v,C);return}if(S&128){m.suspense.move(w,v,C);return}if(S&64){D.move(m,w,v,vt);return}if(D===Xe){s(R,w,v);for(let O=0;O<A.length;O++)Nt(A[O],w,v,C);s(m.anchor,w,v);return}if(D===Mo){L(m,w,v);return}if(C!==2&&S&1&&E)if(C===0)E.beforeEnter(R),s(R,w,v),Je(()=>E.enter(R),T);else{const{leave:O,delayLeave:M,afterLeave:W}=E,q=()=>s(R,w,v),z=()=>{O(R,()=>{q(),W&&W()})};M?M(R,q,z):z()}else s(R,w,v)},De=(m,w,v,C=!1,T=!1)=>{const{type:R,props:D,ref:E,children:A,dynamicChildren:S,shapeFlag:U,patchFlag:O,dirs:M}=m;if(E!=null&&fa(E,null,v,m,!0),U&256){w.ctx.deactivate(m);return}const W=U&1&&M,q=!or(m);let z;if(q&&(z=D&&D.onVnodeBeforeUnmount)&&It(z,w,m),U&6)Kn(m.component,v,C);else{if(U&128){m.suspense.unmount(v,C);return}W&&yn(m,null,w,"beforeUnmount"),U&64?m.type.remove(m,w,v,T,vt,C):S&&(R!==Xe||O>0&&O&64)?rt(S,w,v,!1,!0):(R===Xe&&O&384||!T&&U&16)&&rt(A,w,v),C&&Gt(m)}(q&&(z=D&&D.onVnodeUnmounted)||W)&&Je(()=>{z&&It(z,w,m),W&&yn(m,null,w,"unmounted")},v)},Gt=m=>{const{type:w,el:v,anchor:C,transition:T}=m;if(w===Xe){Bi(v,C);return}if(w===Mo){N(m);return}const R=()=>{i(v),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(m.shapeFlag&1&&T&&!T.persisted){const{leave:D,delayLeave:E}=T,A=()=>D(v,R);E?E(m.el,R,A):A()}else R()},Bi=(m,w)=>{let v;for(;m!==w;)v=_(m),i(m),m=v;i(w)},Kn=(m,w,v)=>{const{bum:C,scope:T,update:R,subTree:D,um:E}=m;C&&rr(C),T.stop(),R&&(R.active=!1,De(D,m,w,v)),E&&Je(E,w),Je(()=>{m.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},rt=(m,w,v,C=!1,T=!1,R=0)=>{for(let D=R;D<m.length;D++)De(m[D],w,v,C,T)},Gn=m=>m.shapeFlag&6?Gn(m.component.subTree):m.shapeFlag&128?m.suspense.next():_(m.anchor||m.el),Yn=(m,w,v)=>{m==null?w._vnode&&De(w._vnode,null,null,!0):P(w._vnode||null,m,w,null,null,null,v),su(),uh(),w._vnode=m},vt={p:P,um:De,m:Nt,r:Gt,mt:bt,mc:pe,pc:Q,pbc:G,n:Gn,o:t};let Yt,Bs;return e&&([Yt,Bs]=e(vt)),{render:Yn,hydrate:Yt,createApp:Gw(Yn,Yt)}}function bn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sh(t,e,n=!1){const s=t.children,i=e.children;if(V(s)&&V(i))for(let r=0;r<s.length;r++){const o=s[r];let c=i[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[r]=tn(i[r]),c.el=o.el),n||Sh(o,c)),c.type===Xr&&(c.el=o.el)}}function sy(t){const e=t.slice(),n=[0];let s,i,r,o,c;const d=t.length;for(s=0;s<d;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)c=r+o>>1,t[n[c]]<u?r=c+1:o=c;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const iy=t=>t.__isTeleport,Xe=Symbol.for("v-fgt"),Xr=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),Mo=Symbol.for("v-stc"),si=[];let ft=null;function Me(t=!1){si.push(ft=t?null:[])}function ry(){si.pop(),ft=si[si.length-1]||null}let pi=1;function pu(t){pi+=t}function kh(t){return t.dynamicChildren=pi>0?ft||os:null,ry(),pi>0&&ft&&ft.push(t),t}function Be(t,e,n,s,i,r){return kh(k(t,e,n,s,i,r,!0))}function oy(t,e,n,s,i){return kh(tt(t,e,n,s,i,!0))}function ay(t){return t?t.__v_isVNode===!0:!1}function Vs(t,e){return t.type===e.type&&t.key===e.key}const Zr="__vInternal",Ah=({key:t})=>t??null,lr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ke(t)||We(t)||Y(t)?{i:ht,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,s=0,i=null,r=t===Xe?0:1,o=!1,c=!1){const d={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ah(e),ref:e&&lr(e),scopeId:fh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ht};return c?(rl(d,n),r&128&&t.normalize(d)):n&&(d.shapeFlag|=ke(n)?8:16),pi>0&&!o&&ft&&(d.patchFlag>0||r&6)&&d.patchFlag!==32&&ft.push(d),d}const tt=ly;function ly(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===$w)&&(t=Dn),ay(t)){const c=ws(t,e,!0);return n&&rl(c,n),pi>0&&!r&&ft&&(c.shapeFlag&6?ft[ft.indexOf(t)]=c:ft.push(c)),c.patchFlag|=-2,c}if(wy(t)&&(t=t.__vccOpts),e){e=cy(e);let{class:c,style:d}=e;c&&!ke(c)&&(e.class=qa(c)),_e(d)&&(sh(d)&&!V(d)&&(d=Fe({},d)),e.style=Va(d))}const o=ke(t)?1:Sw(t)?128:iy(t)?64:_e(t)?4:Y(t)?2:0;return k(t,e,n,s,i,o,r,!0)}function cy(t){return t?sh(t)||Zr in t?Fe({},t):t:null}function ws(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,c=e?uy(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ah(c),ref:e&&e.ref?n&&i?V(i)?i.concat(lr(e)):[i,lr(e)]:lr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ws(t.ssContent),ssFallback:t.ssFallback&&ws(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gi(t=" ",e=0){return tt(Xr,null,t,e)}function xn(t="",e=!1){return e?(Me(),oy(Dn,null,t)):tt(Dn,null,t)}function Tt(t){return t==null||typeof t=="boolean"?tt(Dn):V(t)?tt(Xe,null,t.slice()):typeof t=="object"?tn(t):tt(Xr,null,String(t))}function tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ws(t)}function rl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),rl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Zr in e)?e._ctx=ht:i===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:ht},n=32):(e=String(e),s&64?(n=16,e=[gi(e)]):n=8);t.children=e,t.shapeFlag|=n}function uy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=qa([e.class,s.class]));else if(i==="style")e.style=Va([e.style,s.style]);else if(qr(i)){const r=e[i],o=s[i];o&&r!==o&&!(V(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function It(t,e,n,s=null){mt(t,e,7,[n,s])}const dy=bh();let hy=0;function fy(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||dy,r={uid:hy++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new N_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Eh(s,i),emitsOptions:hh(s,i),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:s.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=bw.bind(null,r),t.ce&&t.ce(r),r}let He=null,ol,ts,gu="__VUE_INSTANCE_SETTERS__";(ts=sa()[gu])||(ts=sa()[gu]=[]),ts.push(t=>He=t),ol=t=>{ts.length>1?ts.forEach(e=>e(t)):ts[0](t)};const ys=t=>{ol(t),t.scope.on()},Rn=()=>{He&&He.scope.off(),ol(null)};function xh(t){return t.vnode.shapeFlag&4}let mi=!1;function py(t,e=!1){mi=e;const{props:n,children:s}=t.vnode,i=xh(t);Qw(t,n,i,e),Zw(t,s);const r=i?gy(t,e):void 0;return mi=!1,r}function gy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ih(new Proxy(t.ctx,Hw));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?_y(t):null;ys(t),ks();const r=un(s,t,0,[t.props,i]);if(As(),Rn(),$d(r)){if(r.then(Rn,Rn),e)return r.then(o=>{mu(t,o,e)}).catch(o=>{Yr(o,t,0)});t.asyncDep=r}else mu(t,r,e)}else Rh(t,e)}function mu(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=ah(e)),Rh(t,n)}let _u;function Rh(t,e,n){const s=t.type;if(!t.render){if(!e&&_u&&!s.render){const i=s.template||sl(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:d}=s,u=Fe(Fe({isCustomElement:r,delimiters:c},o),d);s.render=_u(i,u)}}t.render=s.render||gt}ys(t),ks(),Ww(t),As(),Rn()}function my(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return nt(t,"get","$attrs"),e[n]}}))}function _y(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return my(t)},slots:t.slots,emit:t.emit,expose:e}}function eo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ah(ih(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ni)return ni[n](t)},has(e,n){return n in e||n in ni}}))}function wy(t){return Y(t)&&"__vccOpts"in t}const yy=(t,e)=>fw(t,e,mi),by=Symbol.for("v-scx"),vy=()=>ar(by),Ey="3.3.4",Cy="http://www.w3.org/2000/svg",In=typeof document<"u"?document:null,wu=In&&In.createElement("template"),Iy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?In.createElementNS(Cy,t):In.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>In.createTextNode(t),createComment:t=>In.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>In.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{wu.innerHTML=s?`<svg>${t}</svg>`:t;const c=wu.content;if(s){const d=c.firstChild;for(;d.firstChild;)c.appendChild(d.firstChild);c.removeChild(d)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ty(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Sy(t,e,n){const s=t.style,i=ke(n);if(n&&!i){if(e&&!ke(e))for(const r in e)n[r]==null&&pa(s,r,"");for(const r in n)pa(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const yu=/\s*!important$/;function pa(t,e,n){if(V(n))n.forEach(s=>pa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ky(t,e);yu.test(n)?t.setProperty(Ss(s),n.replace(yu,""),"important"):t[s]=n}}const bu=["Webkit","Moz","ms"],Lo={};function ky(t,e){const n=Lo[e];if(n)return n;let s=ms(e);if(s!=="filter"&&s in t)return Lo[e]=s;s=jd(s);for(let i=0;i<bu.length;i++){const r=bu[i]+s;if(r in t)return Lo[e]=r}return e}const vu="http://www.w3.org/1999/xlink";function Ay(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vu,e.slice(6,e.length)):t.setAttributeNS(vu,e,n);else{const r=P_(e);n==null||r&&!Vd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function xy(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const u=c==="OPTION"?t.getAttribute("value"):t.value,f=n??"";u!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let d=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Vd(n):n==null&&u==="string"?(n="",d=!0):u==="number"&&(n=0,d=!0)}try{t[e]=n}catch{}d&&t.removeAttribute(e)}function ss(t,e,n,s){t.addEventListener(e,n,s)}function Ry(t,e,n,s){t.removeEventListener(e,n,s)}function Py(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[c,d]=Ny(e);if(s){const u=r[e]=My(s,i);ss(t,c,u,d)}else o&&(Ry(t,c,o,d),r[e]=void 0)}}const Eu=/(?:Once|Passive|Capture)$/;function Ny(t){let e;if(Eu.test(t)){e={};let s;for(;s=t.match(Eu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ss(t.slice(2)),e]}let Fo=0;const Oy=Promise.resolve(),Dy=()=>Fo||(Oy.then(()=>Fo=0),Fo=Date.now());function My(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;mt(Ly(s,n.value),e,5,[s])};return n.value=t,n.attached=Dy(),n}function Ly(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Cu=/^on[a-z]/,Fy=(t,e,n,s,i=!1,r,o,c,d)=>{e==="class"?Ty(t,s,i):e==="style"?Sy(t,n,s):qr(e)?$a(e)||Py(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Uy(t,e,s,i))?xy(t,e,s,r,o,c,d):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ay(t,e,s,i))};function Uy(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Cu.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Cu.test(e)&&ke(n)?!1:e in t}const Iu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>rr(e,n):e};function By(t){t.target.composing=!0}function Tu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Mt={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Iu(i);const r=s||i.props&&i.props.type==="number";ss(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),r&&(c=na(c)),t._assign(c)}),n&&ss(t,"change",()=>{t.value=t.value.trim()}),e||(ss(t,"compositionstart",By),ss(t,"compositionend",Tu),ss(t,"change",Tu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Iu(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&na(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},$y=Fe({patchProp:Fy},Iy);let Su;function Hy(){return Su||(Su=ty($y))}const Wy=(...t)=>{const e=Hy().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=jy(s);if(!i)return;const r=e._component;!Y(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function jy(t){return ke(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw xs(e)},xs=function(t){return new Error("Firebase Database ("+Ph.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],c=t[n++],d=((i&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},al={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,c=o?t[i+1]:0,d=i+2<t.length,u=d?t[i+2]:0,f=r>>2,p=(r&3)<<4|c>>4;let _=(c&15)<<2|u>>6,y=u&63;d||(y=64,o||(_=64)),s.push(n[f],n[p],n[_],n[y])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||c==null||u==null||p==null)throw new qy;const _=r<<2|c>>4;if(s.push(_),u!==64){const y=c<<4&240|u>>2;if(s.push(y),p!==64){const I=u<<6&192|p;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oh=function(t){const e=Nh(t);return al.encodeByteArray(e,!0)},yr=function(t){return Oh(t).replace(/\./g,"")},br=function(t){try{return al.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){return Dh(void 0,t)}function Dh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ky(n)||(t[n]=Dh(t[n],e[n]));return t}function Ky(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=()=>Gy().__FIREBASE_DEFAULTS__,Qy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&br(t[1]);return e&&JSON.parse(e)},to=()=>{try{return Yy()||Qy()||Jy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mh=t=>{var e,n;return(n=(e=to())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Lh=t=>{const e=Mh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Fh=()=>{var t;return(t=to())===null||t===void 0?void 0:t.config},Uh=t=>{var e;return(e=to())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[yr(JSON.stringify(n)),yr(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ll(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Xy(){var t;const e=(t=to())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $h(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eb(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hh(){return Ph.NODE_ADMIN===!0}function tb(){try{return typeof indexedDB=="object"}catch{return!1}}function nb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="FirebaseError";class Vt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=sb,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ib(r,s):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Vt(i,c,s)}}function ib(t,e){return t.replace(rb,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const rb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t){return JSON.parse(t)}function Oe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=_i(br(r[0])||""),n=_i(br(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ob=function(t){const e=Wh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ab=function(t){const e=Wh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ga(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Er(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ku(r)&&ku(o)){if(!Er(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ku(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)s[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const _=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(_<<1|_>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],c=this.chain_[3],d=this.chain_[4],u,f;for(let p=0;p<80;p++){p<40?p<20?(u=c^r&(o^c),f=1518500249):(u=r^o^c,f=1859775393):p<60?(u=r&o|c&(r|o),f=2400959708):(u=r^o^c,f=3395469782);const _=(i<<5|i>>>27)+u+d+f+s[p]&4294967295;d=c,c=o,o=(r<<30|r>>>2)&4294967295,r=i,i=_}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function cb(t,e){const n=new ub(t,e);return n.subscribe.bind(n)}class ub{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");db(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Uo),i.error===void 0&&(i.error=Uo),i.complete===void 0&&(i.complete=Uo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function db(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uo(){}function no(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},so=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new xi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gb(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pb(t){return t===vn?void 0:t}function gb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const _b={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},wb=ae.INFO,yb={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},bb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=yb[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=wb,this._logHandler=bb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_b[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const vb=(t,e)=>e.some(n=>t instanceof n);let Au,xu;function Eb(){return Au||(Au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cb(){return xu||(xu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jh=new WeakMap,ma=new WeakMap,Vh=new WeakMap,Bo=new WeakMap,ul=new WeakMap;function Ib(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(dn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jh.set(n,t)}).catch(()=>{}),ul.set(e,t),e}function Tb(t){if(ma.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ma.set(t,e)}let _a={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ma.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sb(t){_a=t(_a)}function kb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call($o(this),e,...n);return Vh.set(s,e.sort?e.sort():[e]),dn(s)}:Cb().includes(t)?function(...e){return t.apply($o(this),e),dn(jh.get(this))}:function(...e){return dn(t.apply($o(this),e))}}function Ab(t){return typeof t=="function"?kb(t):(t instanceof IDBTransaction&&Tb(t),vb(t,Eb())?new Proxy(t,_a):t)}function dn(t){if(t instanceof IDBRequest)return Ib(t);if(Bo.has(t))return Bo.get(t);const e=Ab(t);return e!==t&&(Bo.set(t,e),ul.set(e,t)),e}const $o=t=>ul.get(t);function xb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),c=dn(o);return s&&o.addEventListener("upgradeneeded",d=>{s(dn(o.result),d.oldVersion,d.newVersion,dn(o.transaction),d)}),n&&o.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),c.then(d=>{r&&d.addEventListener("close",()=>r()),i&&d.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Rb=["get","getKey","getAll","getAllKeys","count"],Pb=["put","add","delete","clear"],Ho=new Map;function Ru(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ho.get(e))return Ho.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Pb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Rb.includes(n)))return;const r=async function(o,...c){const d=this.transaction(o,i?"readwrite":"readonly");let u=d.store;return s&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),i&&d.done]))[0]};return Ho.set(e,r),r}Sb(t=>({...t,get:(e,n,s)=>Ru(e,n)||t.get(e,n,s),has:(e,n)=>!!Ru(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ob(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ob(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wa="@firebase/app",Pu="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new cl("@firebase/app"),Db="@firebase/app-compat",Mb="@firebase/analytics-compat",Lb="@firebase/analytics",Fb="@firebase/app-check-compat",Ub="@firebase/app-check",Bb="@firebase/auth",$b="@firebase/auth-compat",Hb="@firebase/database",Wb="@firebase/database-compat",jb="@firebase/functions",Vb="@firebase/functions-compat",qb="@firebase/installations",zb="@firebase/installations-compat",Kb="@firebase/messaging",Gb="@firebase/messaging-compat",Yb="@firebase/performance",Qb="@firebase/performance-compat",Jb="@firebase/remote-config",Xb="@firebase/remote-config-compat",Zb="@firebase/storage",ev="@firebase/storage-compat",tv="@firebase/firestore",nv="@firebase/firestore-compat",sv="firebase",iv="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="[DEFAULT]",rv={[wa]:"fire-core",[Db]:"fire-core-compat",[Lb]:"fire-analytics",[Mb]:"fire-analytics-compat",[Ub]:"fire-app-check",[Fb]:"fire-app-check-compat",[Bb]:"fire-auth",[$b]:"fire-auth-compat",[Hb]:"fire-rtdb",[Wb]:"fire-rtdb-compat",[jb]:"fire-fn",[Vb]:"fire-fn-compat",[qb]:"fire-iid",[zb]:"fire-iid-compat",[Kb]:"fire-fcm",[Gb]:"fire-fcm-compat",[Yb]:"fire-perf",[Qb]:"fire-perf-compat",[Jb]:"fire-rc",[Xb]:"fire-rc-compat",[Zb]:"fire-gcs",[ev]:"fire-gcs-compat",[tv]:"fire-fst",[nv]:"fire-fst-compat","fire-js":"fire-js",[sv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Map,ba=new Map;function ov(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(ba.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;ba.set(e,t);for(const n of Cr.values())ov(n,t);return!0}function io(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hn=new Ri("app","Firebase",av);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=iv;function qh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ya,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw hn.create("bad-app-name",{appName:String(i)});if(n||(n=Fh()),!n)throw hn.create("no-options");const r=Cr.get(i);if(r){if(Er(n,r.options)&&Er(s,r.config))return r;throw hn.create("duplicate-app",{appName:i})}const o=new mb(i);for(const d of ba.values())o.addComponent(d);const c=new lv(n,s,o);return Cr.set(i,c),c}function dl(t=ya){const e=Cr.get(t);if(!e&&t===ya&&Fh())return qh();if(!e)throw hn.create("no-app",{appName:t});return e}function At(t,e,n){var s;let i=(s=rv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const c=[`Unable to register library "${i}" with version "${e}":`];r&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(c.join(" "));return}Ln(new gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv="firebase-heartbeat-database",uv=1,wi="firebase-heartbeat-store";let Wo=null;function zh(){return Wo||(Wo=xb(cv,uv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wi)}}}).catch(t=>{throw hn.create("idb-open",{originalErrorMessage:t.message})})),Wo}async function dv(t){try{return await(await zh()).transaction(wi).objectStore(wi).get(Kh(t))}catch(e){if(e instanceof Vt)Mn.warn(e.message);else{const n=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function Nu(t,e){try{const s=(await zh()).transaction(wi,"readwrite");await s.objectStore(wi).put(e,Kh(t)),await s.done}catch(n){if(n instanceof Vt)Mn.warn(n.message);else{const s=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(s.message)}}}function Kh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=1024,fv=30*24*60*60*1e3;class pv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ou();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=fv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ou(),{heartbeatsToSend:n,unsentEntries:s}=gv(this._heartbeatsCache.heartbeats),i=yr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ou(){return new Date().toISOString().substring(0,10)}function gv(t,e=hv){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Du(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Du(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tb()?nb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Du(t){return yr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t){Ln(new gn("platform-logger",e=>new Nb(e),"PRIVATE")),Ln(new gn("heartbeat",e=>new pv(e),"PRIVATE")),At(wa,Pu,t),At(wa,Pu,"esm2017"),At("fire-js","")}_v("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="firebasestorage.googleapis.com",Yh="storageBucket",wv=2*60*1e3,yv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends Vt{constructor(e,n,s=0){super(jo(e),`Firebase Storage: ${n} (${jo(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ve||(ve={}));function jo(t){return"storage/"+t}function hl(){const t="An unknown error occurred, please check the error payload for server response.";return new Ee(ve.UNKNOWN,t)}function bv(t){return new Ee(ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function vv(t){return new Ee(ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ev(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ee(ve.UNAUTHENTICATED,t)}function Cv(){return new Ee(ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Iv(t){return new Ee(ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Tv(){return new Ee(ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Sv(){return new Ee(ve.CANCELED,"User canceled the upload/download.")}function kv(t){return new Ee(ve.INVALID_URL,"Invalid URL '"+t+"'.")}function Av(t){return new Ee(ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function xv(){return new Ee(ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Yh+"' property when initializing the app?")}function Rv(){return new Ee(ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Pv(){return new Ee(ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Nv(t){return new Ee(ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function va(t){return new Ee(ve.INVALID_ARGUMENT,t)}function Qh(){return new Ee(ve.APP_DELETED,"The Firebase app was deleted.")}function Ov(t){return new Ee(ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ii(t,e){return new Ee(ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function qs(t){throw new Ee(ve.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ot.makeFromUrl(e,n)}catch{return new ot(e,"")}if(s.path==="")return s;throw Av(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),d={bucket:1,path:3};function u(N){N.path_=decodeURIComponent(N.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${f}/b/${i}/o${_}`,"i"),I={bucket:1,path:3},P=n===Gh?"(?:storage.googleapis.com|storage.cloud.google.com)":n,F="([^?#]*)",K=new RegExp(`^https?://${P}/${i}/${F}`,"i"),L=[{regex:c,indices:d,postModify:r},{regex:y,indices:I,postModify:u},{regex:K,indices:{bucket:1,path:2},postModify:u}];for(let N=0;N<L.length;N++){const $=L[N],he=$.regex.exec(e);if(he){const ne=he[$.indices.bucket];let pe=he[$.indices.path];pe||(pe=""),s=new ot(ne,pe),$.postModify(s);break}}if(s==null)throw kv(e);return s}}class Dv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t,e,n){let s=1,i=null,r=null,o=!1,c=0;function d(){return c===2}let u=!1;function f(...F){u||(u=!0,e.apply(null,F))}function p(F){i=setTimeout(()=>{i=null,t(y,d())},F)}function _(){r&&clearTimeout(r)}function y(F,...K){if(u){_();return}if(F){_(),f.call(null,F,...K);return}if(d()||o){_(),f.call(null,F,...K);return}s<64&&(s*=2);let L;c===1?(c=2,L=0):L=(s+Math.random())*1e3,p(L)}let I=!1;function P(F){I||(I=!0,_(),!u&&(i!==null?(F||(c=2),clearTimeout(i),p(0)):F||(c=1)))}return p(0),r=setTimeout(()=>{o=!0,P(!0)},n),P}function Lv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t){return t!==void 0}function Uv(t){return typeof t=="object"&&!Array.isArray(t)}function fl(t){return typeof t=="string"||t instanceof String}function Mu(t){return pl()&&t instanceof Blob}function pl(){return typeof Blob<"u"&&!Xy()}function Lu(t,e,n,s){if(s<e)throw va(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw va(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Jh(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Pn||(Pn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n,s,i,r,o,c,d,u,f,p,_=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=d,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,I)=>{this.resolve_=y,this.reject_=I,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Zi(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const d=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===Pn.NO_ERROR,d=r.getStatus();if(!c||Bv(d,this.additionalRetryCodes_)&&this.retry){const f=r.getErrorCode()===Pn.ABORT;s(!1,new Zi(!1,null,f));return}const u=this.successCodes_.indexOf(d)!==-1;s(!0,new Zi(u,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());Fv(d)?r(d):r()}catch(d){o(d)}else if(c!==null){const d=hl();d.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,d)):o(d)}else if(i.canceled){const d=this.appDelete_?Qh():Sv();o(d)}else{const d=Tv();o(d)}};this.canceled_?n(!1,new Zi(!1,null,!0)):this.backoffId_=Mv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Lv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zi{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Hv(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Wv(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Vv(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qv(t,e,n,s,i,r,o=!0){const c=Jh(t.urlParams),d=t.url+c,u=Object.assign({},t.headers);return jv(u,e),Hv(u,n),Wv(u,r),Vv(u,s),new $v(d,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Kv(...t){const e=zv();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(pl())return new Blob(t);throw new Ee(ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Gv(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t){if(typeof atob>"u")throw Nv("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Vo{constructor(e,n){this.data=e,this.contentType=n||null}}function Qv(t,e){switch(t){case kt.RAW:return new Vo(Xh(e));case kt.BASE64:case kt.BASE64URL:return new Vo(Zh(t,e));case kt.DATA_URL:return new Vo(Xv(e),Zv(e))}throw hl()}function Xh(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Jv(t){let e;try{e=decodeURIComponent(t)}catch{throw ii(kt.DATA_URL,"Malformed data URL.")}return Xh(e)}function Zh(t,e){switch(t){case kt.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw ii(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case kt.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw ii(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Yv(e)}catch(i){throw i.message.includes("polyfill")?i:ii(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class ef{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ii(kt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=e0(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Xv(t){const e=new ef(t);return e.base64?Zh(kt.BASE64,e.rest):Jv(e.rest)}function Zv(t){return new ef(t).contentType}function e0(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n){let s=0,i="";Mu(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Mu(this.data_)){const s=this.data_,i=Gv(s,e,n);return i===null?null:new nn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new nn(s,!0)}}static getBlob(...e){if(pl()){const n=e.map(s=>s instanceof nn?s.data_:s);return new nn(Kv.apply(null,n))}else{const n=e.map(o=>fl(o)?Qv(kt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)i[r++]=o[c]}),new nn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){let e;try{e=JSON.parse(t)}catch{return null}return Uv(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function n0(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function nf(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t,e){return e}class ze{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||s0}}let er=null;function i0(t){return!fl(t)||t.length<2?t:nf(t)}function sf(){if(er)return er;const t=[];t.push(new ze("bucket")),t.push(new ze("generation")),t.push(new ze("metageneration")),t.push(new ze("name","fullPath",!0));function e(r,o){return i0(o)}const n=new ze("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new ze("size");return i.xform=s,t.push(i),t.push(new ze("timeCreated")),t.push(new ze("updated")),t.push(new ze("md5Hash",null,!0)),t.push(new ze("cacheControl",null,!0)),t.push(new ze("contentDisposition",null,!0)),t.push(new ze("contentEncoding",null,!0)),t.push(new ze("contentLanguage",null,!0)),t.push(new ze("contentType",null,!0)),t.push(new ze("metadata","customMetadata",!0)),er=t,er}function r0(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new ot(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function o0(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return r0(s,t),s}function rf(t,e,n){const s=tf(e);return s===null?null:o0(t,s,n)}function a0(t,e,n,s){const i=tf(e);if(i===null||!fl(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const f=t.bucket,p=t.fullPath,_="/b/"+o(f)+"/o/"+o(p),y=ro(_,n,s),I=Jh({alt:"media",token:u});return y+I})[0]}function l0(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class gl{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t){if(!t)throw hl()}function c0(t,e){function n(s,i){const r=rf(t,i,e);return of(r!==null),r}return n}function u0(t,e){function n(s,i){const r=rf(t,i,e);return of(r!==null),a0(r,i,t.host,t._protocol)}return n}function af(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Cv():i=Ev():n.getStatus()===402?i=vv(t.bucket):n.getStatus()===403?i=Iv(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function lf(t){const e=af(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=bv(t.path)),r.serverResponse=i.serverResponse,r}return n}function d0(t,e,n){const s=e.fullServerUrl(),i=ro(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,c=new gl(i,r,u0(t,n),o);return c.errorHandler=lf(e),c}function h0(t,e){const n=e.fullServerUrl(),s=ro(n,t.host,t._protocol),i="DELETE",r=t.maxOperationRetryTime;function o(d,u){}const c=new gl(s,i,o,r);return c.successCodes=[200,204],c.errorHandler=lf(e),c}function f0(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function p0(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=f0(null,e)),s}function g0(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let L="";for(let N=0;N<2;N++)L=L+Math.random().toString().slice(2);return L}const d=c();o["Content-Type"]="multipart/related; boundary="+d;const u=p0(e,s,i),f=l0(u,n),p="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+d+`\r
Content-Type: `+u.contentType+`\r
\r
`,_=`\r
--`+d+"--",y=nn.getBlob(p,s,_);if(y===null)throw Rv();const I={name:u.fullPath},P=ro(r,t.host,t._protocol),F="POST",K=t.maxUploadRetryTime,ee=new gl(P,F,c0(t,n),K);return ee.urlParams=I,ee.headers=o,ee.body=y.uploadData(),ee.errorHandler=af(e),ee}class m0{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Pn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Pn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Pn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw qs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class _0 extends m0{initXhr(){this.xhr_.responseType="text"}}function ml(){return new _0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n){this._service=e,n instanceof ot?this._location=n:this._location=ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fn(e,n)}get root(){const e=new ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nf(this._location.path)}get storage(){return this._service}get parent(){const e=t0(this._location.path);if(e===null)return null;const n=new ot(this._location.bucket,e);return new Fn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Ov(e)}}function w0(t,e,n){t._throwIfRoot("uploadBytes");const s=g0(t.storage,t._location,sf(),new nn(e,!0),n);return t.storage.makeRequestWithTokens(s,ml).then(i=>({metadata:i,ref:t}))}function y0(t){t._throwIfRoot("getDownloadURL");const e=d0(t.storage,t._location,sf());return t.storage.makeRequestWithTokens(e,ml).then(n=>{if(n===null)throw Pv();return n})}function b0(t){t._throwIfRoot("deleteObject");const e=h0(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ml)}function v0(t,e){const n=n0(t._location.path,e),s=new ot(t._location.bucket,n);return new Fn(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){return/^[A-Za-z]+:\/\//.test(t)}function C0(t,e){return new Fn(t,e)}function cf(t,e){if(t instanceof _l){const n=t;if(n._bucket==null)throw xv();const s=new Fn(n,n._bucket);return e!=null?cf(s,e):s}else return e!==void 0?v0(t,e):t}function I0(t,e){if(e&&E0(e)){if(t instanceof _l)return C0(t,e);throw va("To use ref(service, url), the first argument must be a Storage instance.")}else return cf(t,e)}function Fu(t,e){const n=e==null?void 0:e[Yh];return n==null?null:ot.makeFromBucketSpec(n,t)}function T0(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Bh(i,t.app.options.projectId))}class _l{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Gh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wv,this._maxUploadRetryTime=yv,this._requests=new Set,i!=null?this._bucket=ot.makeFromBucketSpec(i,this._host):this._bucket=Fu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ot.makeFromBucketSpec(this._url,e):this._bucket=Fu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Lu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Lu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fn(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Dv(Qh());{const o=qv(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Uu="@firebase/storage",Bu="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="storage";function df(t,e,n){return t=Ae(t),w0(t,e,n)}function S0(t){return t=Ae(t),y0(t)}function k0(t){return t=Ae(t),b0(t)}function Ir(t,e){return t=Ae(t),I0(t,e)}function A0(t=dl(),e){t=Ae(t);const s=io(t,uf).getImmediate({identifier:e}),i=Lh("storage");return i&&x0(s,...i),s}function x0(t,e,n,s={}){T0(t,e,n,s)}function R0(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new _l(n,s,i,e,Vn)}function P0(){Ln(new gn(uf,R0,"PUBLIC").setMultipleInstances(!0)),At(Uu,Bu,""),At(Uu,Bu,"esm2017")}P0();const $u="@firebase/database",Hu="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hf="";function N0(t){hf=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_i(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new O0(e)}}catch{}return new D0},Sn=ff("localStorage"),Ea=ff("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new cl("@firebase/database"),M0=function(){let t=1;return function(){return t++}}(),pf=function(t){const e=hb(t),n=new lb;n.update(e);const s=n.digest();return al.encodeByteArray(s)},Pi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Pi.apply(null,s):typeof s=="object"?e+=Oe(s):e+=s,e+=" "}return e};let Nn=null,Wu=!0;const L0=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(us.logLevel=ae.VERBOSE,Nn=us.log.bind(us),e&&Ea.set("logging_enabled",!0)):typeof t=="function"?Nn=t:(Nn=null,Ea.remove("logging_enabled"))},Le=function(...t){if(Wu===!0&&(Wu=!1,Nn===null&&Ea.get("logging_enabled")===!0&&L0(!0)),Nn){const e=Pi.apply(null,t);Nn(e)}},Ni=function(t){return function(...e){Le(t,...e)}},Ca=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pi(...t);us.error(e)},Ht=function(...t){const e=`FIREBASE FATAL ERROR: ${Pi(...t)}`;throw us.error(e),new Error(e)},Ge=function(...t){const e="FIREBASE WARNING: "+Pi(...t);us.warn(e)},F0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},U0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vs="[MIN_NAME]",Un="[MAX_NAME]",qn=function(t,e){if(t===e)return 0;if(t===vs||e===Un)return-1;if(e===vs||t===Un)return 1;{const n=ju(t),s=ju(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},B0=function(t,e){return t===e?0:t<e?-1:1},zs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Oe(e))},yl=function(t){if(typeof t!="object"||t===null)return Oe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Oe(e[s]),n+=":",n+=yl(t[e[s]]);return n+="}",n},gf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mf=function(t){x(!wl(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,c,d;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=c+s,o=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(d=n;d;d-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(d=e;d;d-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const f=u.join("");let p="";for(d=0;d<64;d+=8){let _=parseInt(f.substr(d,8),2).toString(16);_.length===1&&(_="0"+_),p=p+_}return p.toLowerCase()},$0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},H0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function W0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const j0=new RegExp("^-?(0*)\\d{1,10}$"),V0=-2147483648,q0=2147483647,ju=function(t){if(j0.test(t)){const e=Number(t);if(e>=V0&&e<=q0)return e}return null},Ps=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ge("Exception was thrown by user callback.",n),e},Math.floor(0))}},z0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ri=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class ds{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ds.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="5",_f="v",wf="s",yf="r",bf="f",vf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ef="ls",Cf="p",Ia="ac",If="websocket",Tf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,s,i,r=!1,o="",c=!1,d=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Y0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function kf(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===If)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Tf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Y0(t)&&(n.ns=t.namespace);const i=[];return Ue(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(){this.counters_={}}incrementCounter(e,n=1){Pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zy(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={},zo={};function vl(t){const e=t.toString();return qo[e]||(qo[e]=new Q0),qo[e]}function J0(t,e){const n=t.toString();return zo[n]||(zo[n]=e()),zo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ps(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="start",Z0="close",eE="pLPCommand",tE="pRTLPCB",Af="id",xf="pw",Rf="ser",nE="cb",sE="seg",iE="ts",rE="d",oE="dframe",Pf=1870,Nf=30,aE=Pf-Nf,lE=25e3,cE=3e4;class is{constructor(e,n,s,i,r,o,c){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ni(e),this.stats_=vl(n),this.urlFn=d=>(this.appCheckToken&&(d[Ia]=this.appCheckToken),kf(n,Tf,d))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new X0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cE)),U0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new El((...r)=>{const[o,c,d,u,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vu)this.id=c,this.password=d;else if(o===Z0)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,c]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,c)},()=>{this.onClosed_()},this.urlFn);const s={};s[Vu]="t",s[Rf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[nE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[_f]=bl,this.transportSessionId&&(s[wf]=this.transportSessionId),this.lastSessionId&&(s[Ef]=this.lastSessionId),this.applicationId&&(s[Cf]=this.applicationId),this.appCheckToken&&(s[Ia]=this.appCheckToken),typeof location<"u"&&location.hostname&&vf.test(location.hostname)&&(s[yf]=bf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){is.forceAllow_=!0}static forceDisallow(){is.forceDisallow_=!0}static isAvailable(){return is.forceAllow_?!0:!is.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$0()&&!H0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Oh(n),i=gf(s,aE);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[oE]="t",s[Af]=e,s[xf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class El{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=M0(),window[eE+this.uniqueCallbackIdentifier]=e,window[tE+this.uniqueCallbackIdentifier]=n,this.myIFrame=El.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(c){Le("frame writing exception"),c.stack&&Le(c.stack),Le(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Af]=this.myID,e[xf]=this.myPW,e[Rf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Nf+s.length<=Pf;){const o=this.pendingSegs.shift();s=s+"&"+sE+i+"="+o.seg+"&"+iE+i+"="+o.ts+"&"+rE+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(lE)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=16384,dE=45e3;let Tr=null;typeof MozWebSocket<"u"?Tr=MozWebSocket:typeof WebSocket<"u"&&(Tr=WebSocket);class dt{constructor(e,n,s,i,r,o,c){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ni(this.connId),this.stats_=vl(n),this.connURL=dt.connectionURL_(n,o,c,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[_f]=bl,typeof location<"u"&&location.hostname&&vf.test(location.hostname)&&(o[yf]=bf),n&&(o[wf]=n),s&&(o[Ef]=s),i&&(o[Ia]=i),r&&(o[Cf]=r),kf(e,If,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sn.set("previous_websocket_failure",!0);try{let s;Hh(),this.mySock=new Tr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Tr!==null&&!dt.forceDisallow_}static previouslyFailed(){return Sn.isInMemoryStorage||Sn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Sn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=_i(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gf(n,uE);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[is,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let s=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[dt];else{const i=this.transports_=[];for(const r of yi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);yi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=6e4,fE=5e3,pE=10*1024,gE=100*1024,Ko="t",qu="d",mE="s",zu="r",_E="e",Ku="o",Gu="a",Yu="n",Qu="p",wE="h";class yE{constructor(e,n,s,i,r,o,c,d,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=c,this.onDisconnect_=d,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ni("c:"+this.id+":"),this.transportManager_=new yi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ri(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>pE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ko in e){const n=e[Ko];n===Gu?this.upgradeIfSecondaryHealthy_():n===zu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ku&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zs("t",e),s=zs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zs("t",e),s=zs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zs(Ko,e);if(qu in e){const s=e[qu];if(n===wE){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Yu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===mE?this.onConnectionShutdown_(s):n===zu?this.onReset_(s):n===_E?Ca("Server Error: "+s):n===Ku?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ca("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bl!==s&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ri(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ri(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Df{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ll()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Sr}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=32,Xu=768;class le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ie(){return new le("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mn(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new le(t.pieces_,e)}function Cl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function bi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new le(e,0)}function ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof le)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new le(n,0)}function Z(t){return t.pieceNum_>=t.pieces_.length}function Ze(t,e){const n=J(t),s=J(e);if(n===null)return e;if(n===s)return Ze(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vE(t,e){const n=bi(t,0),s=bi(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=qn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Il(t,e){if(mn(t)!==mn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function at(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(mn(t)>mn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class EE{constructor(e,n){this.errorPrefix_=n,this.parts_=bi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=so(this.parts_[s]);Lf(this)}}function CE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=so(e),Lf(t)}function IE(t){const e=t.parts_.pop();t.byteLength_-=so(e),t.parts_.length>0&&(t.byteLength_-=1)}function Lf(t){if(t.byteLength_>Xu)throw new Error(t.errorPrefix_+"has a key path longer than "+Xu+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ju)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ju+") or object contains a cycle "+En(t))}function En(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends Df{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Tl}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=1e3,TE=60*5*1e3,Zu=30*1e3,SE=1.3,kE=3e4,AE="server_kill",ed=3;class Bt extends Of{constructor(e,n,s,i,r,o,c,d){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=c,this.authOverride_=d,this.id=Bt.nextPersistentConnectionId_++,this.log_=Ni("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ks,this.maxReconnectDelay_=TE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d&&!Hh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Tl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Oe(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new xi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const c=o.d;o.s==="ok"?n.resolve(c):n.reject(c)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const c={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,c=>{const d=c.d,u=c.s;Bt.warnOnListenWarnings_(d,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",c),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,d))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Pt(e,"w")){const s=bs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ab(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ob(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ca("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kE&&(this.reconnectDelay_=Ks),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bt.nextConnectionId_++,r=this.lastSessionId;let o=!1,c=null;const d=function(){c?c.close():(o=!0,s())},u=function(p){x(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(p)};this.realtime_={close:d,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,_]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=_&&_.token,c=new yE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,y=>{Ge(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(AE)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Ge(p),d())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ga(this.interruptReasons_)&&(this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>yl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new le(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ed&&(this.reconnectDelay_=Zu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ed&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hf.replace(/\./g,"-")]=1,ll()?e["framework.cordova"]=1:$h()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sr.getInstance().currentlyOnline();return ga(this.interruptReasons_)&&e}}Bt.nextPersistentConnectionId_=0;Bt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new X(vs,e),i=new X(vs,n);return this.compare(s,i)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr;class Ff extends oo{static get __EMPTY_NODE(){return tr}static set __EMPTY_NODE(e){tr=e}compare(e,n){return qn(e.name,n.name)}isDefinedOn(e){throw xs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(Un,tr)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,tr)}toString(){return".key"}}const hs=new Ff;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Pe.RED,this.left=i??et.EMPTY_NODE,this.right=r??et.EMPTY_NODE}copy(e,n,s,i,r){return new Pe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class xE{copy(e,n,s,i,r){return this}insert(e,n,s){return new Pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class et{constructor(e,n=et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new nr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new nr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new nr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new nr(this.root_,null,this.comparator_,!0,e)}}et.EMPTY_NODE=new xE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t,e){return qn(t.name,e.name)}function Sl(t,e){return qn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta;function PE(t){Ta=t}const Uf=function(t){return typeof t=="number"?"number:"+mf(t):"string:"+t},Bf=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pt(e,".sv"),"Priority must be a string or number.")}else x(t===Ta||t.isEmpty(),"priority of unexpected type.");x(t===Ta||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let td;class Re{constructor(e,n=Re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bf(this.priorityNode_)}static set __childrenNodeConstructor(e){td=e}static get __childrenNodeConstructor(){return td}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Z(e)?this:J(e)===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=J(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Re.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mf(this.value_):e+=this.value_,this.lazyHash_=pf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Re.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Re.VALUE_TYPE_ORDER.indexOf(n),r=Re.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $f,Hf;function NE(t){$f=t}function OE(t){Hf=t}class DE extends oo{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?qn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Un,new Re("[PRIORITY-POST]",Hf))}makePost(e,n){const s=$f(e);return new X(n,new Re("[PRIORITY-POST]",s))}toString(){return".priority"}}const be=new DE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=Math.log(2);class LE{constructor(e){const n=r=>parseInt(Math.log(r)/ME,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const kr=function(t,e,n,s){t.sort(e);const i=function(d,u){const f=u-d;let p,_;if(f===0)return null;if(f===1)return p=t[d],_=n?n(p):p,new Pe(_,p.node,Pe.BLACK,null,null);{const y=parseInt(f/2,10)+d,I=i(d,y),P=i(y+1,u);return p=t[y],_=n?n(p):p,new Pe(_,p.node,Pe.BLACK,I,P)}},r=function(d){let u=null,f=null,p=t.length;const _=function(I,P){const F=p-I,K=p;p-=I;const ee=i(F+1,K),L=t[F],N=n?n(L):L;y(new Pe(N,L.node,P,null,ee))},y=function(I){u?(u.left=I,u=I):(f=I,u=I)};for(let I=0;I<d.count;++I){const P=d.nextBitIsOne(),F=Math.pow(2,d.count-(I+1));P?_(F,Pe.BLACK):(_(F,Pe.BLACK),_(F,Pe.RED))}return f},o=new LE(t.length),c=r(o);return new et(s||e,c)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go;const ns={};class Lt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(ns&&be,"ChildrenNode.ts has not been loaded"),Go=Go||new Lt({".priority":ns},{".priority":be}),Go}get(e){const n=bs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof et?n:null}hasIndex(e){return Pt(this.indexSet_,e.toString())}addIndex(e,n){x(e!==hs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(X.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let c;i?c=kr(s,e.getCompare()):c=ns;const d=e.toString(),u=Object.assign({},this.indexSet_);u[d]=e;const f=Object.assign({},this.indexes_);return f[d]=c,new Lt(f,u)}addToIndexes(e,n){const s=vr(this.indexes_,(i,r)=>{const o=bs(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===ns)if(o.isDefinedOn(e.node)){const c=[],d=n.getIterator(X.Wrap);let u=d.getNext();for(;u;)u.name!==e.name&&c.push(u),u=d.getNext();return c.push(e),kr(c,o.getCompare())}else return ns;else{const c=n.get(e.name);let d=i;return c&&(d=d.remove(new X(e.name,c))),d.insert(e,e.node)}});return new Lt(s,this.indexSet_)}removeFromIndexes(e,n){const s=vr(this.indexes_,i=>{if(i===ns)return i;{const r=n.get(e.name);return r?i.remove(new X(e.name,r)):i}});return new Lt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs;class H{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Bf(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Gs||(Gs=new H(new et(Sl),null,Lt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gs}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Gs:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(de(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new X(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Gs:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=J(e);if(s===null)return n;{x(J(e)!==".priority"||mn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(de(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(be,(o,c)=>{n[o]=c.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const c in n)o[c]=n[c];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uf(this.getPriority().val())+":"),this.forEachChild(be,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":pf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new X(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Oi?-1:0}withIndex(e){if(e===hs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===hs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(be),i=n.getIterator(be);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hs?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class FE extends H{constructor(){super(new et(Sl),H.EMPTY_NODE,Lt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Oi=new FE;Object.defineProperties(X,{MIN:{value:new X(vs,H.EMPTY_NODE)},MAX:{value:new X(Un,Oi)}});Ff.__EMPTY_NODE=H.EMPTY_NODE;Re.__childrenNodeConstructor=H;PE(Oi);OE(Oi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=!0;function Ne(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Re(n,Ne(e))}if(!(t instanceof Array)&&UE){const n=[];let s=!1;if(Ue(t,(o,c)=>{if(o.substring(0,1)!=="."){const d=Ne(c);d.isEmpty()||(s=s||!d.getPriority().isEmpty(),n.push(new X(o,d)))}}),n.length===0)return H.EMPTY_NODE;const r=kr(n,RE,o=>o.name,Sl);if(s){const o=kr(n,be.getCompare());return new H(r,Ne(e),new Lt({".priority":o},{".priority":be}))}else return new H(r,Ne(e),Lt.Default)}else{let n=H.EMPTY_NODE;return Ue(t,(s,i)=>{if(Pt(t,s)&&s.substring(0,1)!=="."){const r=Ne(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ne(e))}}NE(Ne);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE extends oo{constructor(e){super(),this.indexPath_=e,x(!Z(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?qn(e.name,n.name):r}makePost(e,n){const s=Ne(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new X(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Oi);return new X(Un,e)}toString(){return bi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E extends oo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?qn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const s=Ne(e);return new X(n,s)}toString(){return".value"}}const HE=new $E;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t){return{type:"value",snapshotNode:t}}function Es(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ei(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function WE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=e.getImmediateChild(n);return c.getChild(i).equals(s.getChild(i))&&c.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(vi(n,c)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?o.trackChildChange(Es(n,s)):o.trackChildChange(Ei(n,s,c))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(be,(i,r)=>{n.hasChild(i)||s.trackChildChange(vi(i,r))}),n.isLeafNode()||n.forEachChild(be,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ei(i,r,o))}else s.trackChildChange(Es(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.indexedFilter_=new kl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ci.getStartPost_(e),this.endPost_=Ci.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new X(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(be,(o,c)=>{r.matches(new X(o,c))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ci(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new X(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const c=r.getNext();if(this.withinDirectionalStart(c))if(this.withinDirectionalEnd(c))i=i.updateImmediateChild(c.name,c.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const c=r.getNext();o<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?o++:i=i.updateImmediateChild(c.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(_,y)=>p(y,_)}else o=this.index_.getCompare();const c=e;x(c.numChildren()===this.limit_,"");const d=new X(n,s),u=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),f=this.rangedFilter_.matches(d);if(c.hasChild(n)){const p=c.getImmediateChild(n);let _=i.getChildAfterChild(this.index_,u,this.reverse_);for(;_!=null&&(_.name===n||c.hasChild(_.name));)_=i.getChildAfterChild(this.index_,_,this.reverse_);const y=_==null?1:o(_,d);if(f&&!s.isEmpty()&&y>=0)return r!=null&&r.trackChildChange(Ei(n,s,p)),c.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(vi(n,p));const P=c.updateImmediateChild(n,H.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(r!=null&&r.trackChildChange(Es(_.name,_.node)),P.updateImmediateChild(_.name,_.node)):P}}else return s.isEmpty()?e:f&&o(u,d)>=0?(r!=null&&(r.trackChildChange(vi(u.name,u.node)),r.trackChildChange(Es(n,s))),c.updateImmediateChild(n,s).updateImmediateChild(u.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vs}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Un}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===be}copy(){const e=new Al;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function VE(t){return t.loadsAllData()?new kl(t.getIndex()):t.hasLimit()?new jE(t):new Ci(t)}function nd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===be?n="$priority":t.index_===HE?n="$value":t.index_===hs?n="$key":(x(t.index_ instanceof BE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Oe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Oe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Oe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Oe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Oe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function sd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==be&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Of{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ni("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ar.getListenId_(e,s),c={};this.listens_[o]=c;const d=nd(e._queryParams);this.restRequest_(r+".json",d,(u,f)=>{let p=f;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(r,p,!1,s),bs(this.listens_,o)===c){let _;u?u===401?_="permission_denied":_="rest_error:"+u:_="ok",i(_,null)}})}unlisten(e,n){const s=Ar.getListenId_(e,n);delete this.listens_[s]}get(e){const n=nd(e._queryParams),s=e._path.toString(),i=new xi;return this.restRequest_(s+".json",n,(r,o)=>{let c=o;r===404&&(c=null,r=null),r===null?(this.onDataUpdate_(s,c,!1,null),i.resolve(c)):i.reject(new Error(c))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rs(n);this.log_("Sending REST request for "+o);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(s&&c.readyState===4){this.log_("REST Response for "+o+" received. status:",c.status,"response:",c.responseText);let d=null;if(c.status>=200&&c.status<300){try{d=_i(c.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+c.responseText)}s(null,d)}else c.status!==401&&c.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+c.status),s(c.status);s=null}},c.open("GET",o,!0),c.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(){return{value:null,children:new Map}}function jf(t,e,n){if(Z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=J(e);t.children.has(s)||t.children.set(s,xr());const i=t.children.get(s);e=de(e),jf(i,e,n)}}function Sa(t,e,n){t.value!==null?n(e,t.value):zE(t,(s,i)=>{const r=new le(e.toString()+"/"+s);Sa(i,r,n)})}function zE(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=10*1e3,GE=30*1e3,YE=5*60*1e3;class QE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new KE(e);const s=id+(GE-id)*Math.random();ri(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ue(e,(i,r)=>{r>0&&Pt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ri(this.reportStats_.bind(this),Math.floor(Math.random()*2*YE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function xl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=pt.ACK_USER_WRITE,this.source=xl()}operationForChild(e){if(Z(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new le(e));return new Rr(ie(),n,this.revert)}}else return x(J(this.path)===e,"operationForChild called for unrelated child."),new Rr(de(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return Z(this.path)?new Ii(this.source,ie()):new Ii(this.source,de(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=pt.OVERWRITE}operationForChild(e){return Z(this.path)?new Bn(this.source,ie(),this.snap.getImmediateChild(e)):new Bn(this.source,de(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=pt.MERGE}operationForChild(e){if(Z(this.path)){const n=this.children.subtree(new le(e));return n.isEmpty()?null:n.value?new Bn(this.source,ie(),n.value):new Cs(this.source,ie(),n)}else return x(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cs(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Z(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function XE(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(WE(o.childName,o.snapshotNode))}),Ys(t,i,"child_removed",e,s,n),Ys(t,i,"child_added",e,s,n),Ys(t,i,"child_moved",r,s,n),Ys(t,i,"child_changed",e,s,n),Ys(t,i,"value",e,s,n),i}function Ys(t,e,n,s,i,r){const o=s.filter(c=>c.type===n);o.sort((c,d)=>eC(t,c,d)),o.forEach(c=>{const d=ZE(t,c,r);i.forEach(u=>{u.respondsTo(c.type)&&e.push(u.createEvent(d,t.query_))})})}function ZE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function eC(t,e,n){if(e.childName==null||n.childName==null)throw xs("Should only compare child_ events.");const s=new X(e.childName,e.snapshotNode),i=new X(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t,e){return{eventCache:t,serverCache:e}}function oi(t,e,n,s){return ao(new $n(e,n,s),t.serverCache)}function Vf(t,e,n,s){return ao(t.eventCache,new $n(e,n,s))}function ka(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Hn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo;const tC=()=>(Yo||(Yo=new et(B0)),Yo);class ue{constructor(e,n=tC()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return Ue(e,(s,i)=>{n=n.set(new le(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ie(),value:this.value};if(Z(e))return null;{const s=J(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(de(e),n);return r!=null?{path:ye(new le(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Z(e))return this;{const n=J(e),s=this.children.get(n);return s!==null?s.subtree(de(e)):new ue(null)}}set(e,n){if(Z(e))return new ue(n,this.children);{const s=J(e),r=(this.children.get(s)||new ue(null)).set(de(e),n),o=this.children.insert(s,r);return new ue(this.value,o)}}remove(e){if(Z(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=J(e),s=this.children.get(n);if(s){const i=s.remove(de(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ue(null):new ue(this.value,r)}else return this}}get(e){if(Z(e))return this.value;{const n=J(e),s=this.children.get(n);return s?s.get(de(e)):null}}setTree(e,n){if(Z(e))return n;{const s=J(e),r=(this.children.get(s)||new ue(null)).setTree(de(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ue(this.value,o)}}fold(e){return this.fold_(ie(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ye(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ie(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Z(e))return null;{const r=J(e),o=this.children.get(r);return o?o.findOnPath_(de(e),ye(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ie(),n)}foreachOnPath_(e,n,s){if(Z(e))return this;{this.value&&s(n,this.value);const i=J(e),r=this.children.get(i);return r?r.foreachOnPath_(de(e),ye(n,i),s):new ue(null)}}foreach(e){this.foreach_(ie(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new ue(null))}}function ai(t,e,n){if(Z(e))return new _t(new ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ze(i,e);return r=r.updateChild(o,n),new _t(t.writeTree_.set(i,r))}else{const i=new ue(n),r=t.writeTree_.setTree(e,i);return new _t(r)}}}function Aa(t,e,n){let s=t;return Ue(n,(i,r)=>{s=ai(s,ye(e,i),r)}),s}function rd(t,e){if(Z(e))return _t.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new _t(n)}}function xa(t,e){return zn(t,e)!=null}function zn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ze(n.path,e)):null}function od(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(be,(s,i)=>{e.push(new X(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new X(s,i.value))}),e}function fn(t,e){if(Z(e))return t;{const n=zn(t,e);return n!=null?new _t(new ue(n)):new _t(t.writeTree_.subtree(e))}}function Ra(t){return t.writeTree_.isEmpty()}function Is(t,e){return qf(ie(),t.writeTree_,e)}function qf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=qf(ye(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ye(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e){return Yf(e,t)}function nC(t,e,n,s,i){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ai(t.visibleWrites,e,n)),t.lastWriteId=s}function sC(t,e,n,s){x(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Aa(t.visibleWrites,e,n),t.lastWriteId=s}function iC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function rC(t,e){const n=t.allWrites.findIndex(c=>c.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const c=t.allWrites[o];c.visible&&(o>=n&&oC(c,s.path)?i=!1:at(s.path,c.path)&&(r=!0)),o--}if(i){if(r)return aC(t),!0;if(s.snap)t.visibleWrites=rd(t.visibleWrites,s.path);else{const c=s.children;Ue(c,d=>{t.visibleWrites=rd(t.visibleWrites,ye(s.path,d))})}return!0}else return!1}function oC(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(ye(t.path,n),e))return!0;return!1}function aC(t){t.visibleWrites=zf(t.allWrites,lC,ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function lC(t){return t.visible}function zf(t,e,n){let s=_t.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let c;if(r.snap)at(n,o)?(c=Ze(n,o),s=ai(s,c,r.snap)):at(o,n)&&(c=Ze(o,n),s=ai(s,ie(),r.snap.getChild(c)));else if(r.children){if(at(n,o))c=Ze(n,o),s=Aa(s,c,r.children);else if(at(o,n))if(c=Ze(o,n),Z(c))s=Aa(s,ie(),r.children);else{const d=bs(r.children,J(c));if(d){const u=d.getChild(de(c));s=ai(s,ie(),u)}}}else throw xs("WriteRecord should have .snap or .children")}}return s}function Kf(t,e,n,s,i){if(!s&&!i){const r=zn(t.visibleWrites,e);if(r!=null)return r;{const o=fn(t.visibleWrites,e);if(Ra(o))return n;if(n==null&&!xa(o,ie()))return null;{const c=n||H.EMPTY_NODE;return Is(o,c)}}}else{const r=fn(t.visibleWrites,e);if(!i&&Ra(r))return n;if(!i&&n==null&&!xa(r,ie()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(at(u.path,e)||at(e,u.path))},c=zf(t.allWrites,o,e),d=n||H.EMPTY_NODE;return Is(c,d)}}}function cC(t,e,n){let s=H.EMPTY_NODE;const i=zn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(be,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=fn(t.visibleWrites,e);return n.forEachChild(be,(o,c)=>{const d=Is(fn(r,new le(o)),c);s=s.updateImmediateChild(o,d)}),od(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=fn(t.visibleWrites,e);return od(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function uC(t,e,n,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ye(e,n);if(xa(t.visibleWrites,r))return null;{const o=fn(t.visibleWrites,r);return Ra(o)?i.getChild(n):Is(o,i.getChild(n))}}function dC(t,e,n,s){const i=ye(e,n),r=zn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=fn(t.visibleWrites,i);return Is(o,s.getNode().getImmediateChild(n))}else return null}function hC(t,e){return zn(t.visibleWrites,e)}function fC(t,e,n,s,i,r,o){let c;const d=fn(t.visibleWrites,e),u=zn(d,ie());if(u!=null)c=u;else if(n!=null)c=Is(d,n);else return[];if(c=c.withIndex(o),!c.isEmpty()&&!c.isLeafNode()){const f=[],p=o.getCompare(),_=r?c.getReverseIteratorFrom(s,o):c.getIteratorFrom(s,o);let y=_.getNext();for(;y&&f.length<i;)p(y,s)!==0&&f.push(y),y=_.getNext();return f}else return[]}function pC(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function Pr(t,e,n,s){return Kf(t.writeTree,t.treePath,e,n,s)}function Ol(t,e){return cC(t.writeTree,t.treePath,e)}function ad(t,e,n,s){return uC(t.writeTree,t.treePath,e,n,s)}function Nr(t,e){return hC(t.writeTree,ye(t.treePath,e))}function gC(t,e,n,s,i,r){return fC(t.writeTree,t.treePath,e,n,s,i,r)}function Dl(t,e,n){return dC(t.writeTree,t.treePath,e,n)}function Gf(t,e){return Yf(ye(t.treePath,e),t.writeTree)}function Yf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ei(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,vi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Es(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ei(s,e.snapshotNode,i.oldSnap));else throw xs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Qf=new _C;class Ml{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new $n(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Hn(this.viewCache_),r=gC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){return{filter:t}}function yC(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function bC(t,e,n,s,i){const r=new mC;let o,c;if(n.type===pt.OVERWRITE){const u=n;u.source.fromUser?o=Pa(t,e,u.path,u.snap,s,i,r):(x(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered()&&!Z(u.path),o=Or(t,e,u.path,u.snap,s,i,c,r))}else if(n.type===pt.MERGE){const u=n;u.source.fromUser?o=EC(t,e,u.path,u.children,s,i,r):(x(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered(),o=Na(t,e,u.path,u.children,s,i,c,r))}else if(n.type===pt.ACK_USER_WRITE){const u=n;u.revert?o=TC(t,e,u.path,s,i,r):o=CC(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===pt.LISTEN_COMPLETE)o=IC(t,e,n.path,s,r);else throw xs("Unknown operation type: "+n.type);const d=r.getChanges();return vC(e,o,d),{viewCache:o,changes:d}}function vC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ka(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Wf(ka(e)))}}function Jf(t,e,n,s,i,r){const o=e.eventCache;if(Nr(s,n)!=null)return e;{let c,d;if(Z(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Hn(e),f=u instanceof H?u:H.EMPTY_NODE,p=Ol(s,f);c=t.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const u=Pr(s,Hn(e));c=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=J(n);if(u===".priority"){x(mn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();d=e.serverCache.getNode();const p=ad(s,n,f,d);p!=null?c=t.filter.updatePriority(f,p):c=o.getNode()}else{const f=de(n);let p;if(o.isCompleteForChild(u)){d=e.serverCache.getNode();const _=ad(s,n,o.getNode(),d);_!=null?p=o.getNode().getImmediateChild(u).updateChild(f,_):p=o.getNode().getImmediateChild(u)}else p=Dl(s,u,e.serverCache);p!=null?c=t.filter.updateChild(o.getNode(),u,p,f,i,r):c=o.getNode()}}return oi(e,c,o.isFullyInitialized()||Z(n),t.filter.filtersNodes())}}function Or(t,e,n,s,i,r,o,c){const d=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(Z(n))u=f.updateFullNode(d.getNode(),s,null);else if(f.filtersNodes()&&!d.isFiltered()){const y=d.getNode().updateChild(n,s);u=f.updateFullNode(d.getNode(),y,null)}else{const y=J(n);if(!d.isCompleteForPath(n)&&mn(n)>1)return e;const I=de(n),F=d.getNode().getImmediateChild(y).updateChild(I,s);y===".priority"?u=f.updatePriority(d.getNode(),F):u=f.updateChild(d.getNode(),y,F,I,Qf,null)}const p=Vf(e,u,d.isFullyInitialized()||Z(n),f.filtersNodes()),_=new Ml(i,p,r);return Jf(t,p,n,i,_,c)}function Pa(t,e,n,s,i,r,o){const c=e.eventCache;let d,u;const f=new Ml(i,e,r);if(Z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),d=oi(e,u,!0,t.filter.filtersNodes());else{const p=J(n);if(p===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),d=oi(e,u,c.isFullyInitialized(),c.isFiltered());else{const _=de(n),y=c.getNode().getImmediateChild(p);let I;if(Z(_))I=s;else{const P=f.getCompleteChild(p);P!=null?Cl(_)===".priority"&&P.getChild(Mf(_)).isEmpty()?I=P:I=P.updateChild(_,s):I=H.EMPTY_NODE}if(y.equals(I))d=e;else{const P=t.filter.updateChild(c.getNode(),p,I,_,f,o);d=oi(e,P,c.isFullyInitialized(),t.filter.filtersNodes())}}}return d}function ld(t,e){return t.eventCache.isCompleteForChild(e)}function EC(t,e,n,s,i,r,o){let c=e;return s.foreach((d,u)=>{const f=ye(n,d);ld(e,J(f))&&(c=Pa(t,c,f,u,i,r,o))}),s.foreach((d,u)=>{const f=ye(n,d);ld(e,J(f))||(c=Pa(t,c,f,u,i,r,o))}),c}function cd(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Na(t,e,n,s,i,r,o,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,u;Z(n)?u=s:u=new ue(null).setTree(n,s);const f=e.serverCache.getNode();return u.children.inorderTraversal((p,_)=>{if(f.hasChild(p)){const y=e.serverCache.getNode().getImmediateChild(p),I=cd(t,y,_);d=Or(t,d,new le(p),I,i,r,o,c)}}),u.children.inorderTraversal((p,_)=>{const y=!e.serverCache.isCompleteForChild(p)&&_.value===null;if(!f.hasChild(p)&&!y){const I=e.serverCache.getNode().getImmediateChild(p),P=cd(t,I,_);d=Or(t,d,new le(p),P,i,r,o,c)}}),d}function CC(t,e,n,s,i,r,o){if(Nr(i,n)!=null)return e;const c=e.serverCache.isFiltered(),d=e.serverCache;if(s.value!=null){if(Z(n)&&d.isFullyInitialized()||d.isCompleteForPath(n))return Or(t,e,n,d.getNode().getChild(n),i,r,c,o);if(Z(n)){let u=new ue(null);return d.getNode().forEachChild(hs,(f,p)=>{u=u.set(new le(f),p)}),Na(t,e,n,u,i,r,c,o)}else return e}else{let u=new ue(null);return s.foreach((f,p)=>{const _=ye(n,f);d.isCompleteForPath(_)&&(u=u.set(f,d.getNode().getChild(_)))}),Na(t,e,n,u,i,r,c,o)}}function IC(t,e,n,s,i){const r=e.serverCache,o=Vf(e,r.getNode(),r.isFullyInitialized()||Z(n),r.isFiltered());return Jf(t,o,n,s,Qf,i)}function TC(t,e,n,s,i,r){let o;if(Nr(s,n)!=null)return e;{const c=new Ml(s,e,i),d=e.eventCache.getNode();let u;if(Z(n)||J(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Pr(s,Hn(e));else{const p=e.serverCache.getNode();x(p instanceof H,"serverChildren would be complete if leaf node"),f=Ol(s,p)}f=f,u=t.filter.updateFullNode(d,f,r)}else{const f=J(n);let p=Dl(s,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=d.getImmediateChild(f)),p!=null?u=t.filter.updateChild(d,f,p,de(n),c,r):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(d,f,H.EMPTY_NODE,de(n),c,r):u=d,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Pr(s,Hn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Nr(s,ie())!=null,oi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new kl(s.getIndex()),r=VE(s);this.processor_=wC(r);const o=n.serverCache,c=n.eventCache,d=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(H.EMPTY_NODE,c.getNode(),null),f=new $n(d,o.isFullyInitialized(),i.filtersNodes()),p=new $n(u,c.isFullyInitialized(),r.filtersNodes());this.viewCache_=ao(p,f),this.eventGenerator_=new JE(this.query_)}get query(){return this.query_}}function kC(t){return t.viewCache_.serverCache.getNode()}function AC(t,e){const n=Hn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Z(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function ud(t){return t.eventRegistrations_.length===0}function xC(t,e){t.eventRegistrations_.push(e)}function dd(t,e,n){const s=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function hd(t,e,n,s){e.type===pt.MERGE&&e.source.queryId!==null&&(x(Hn(t.viewCache_),"We should always have a full cache before handling merges"),x(ka(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=bC(t.processor_,i,e,n,s);return yC(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Xf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function RC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(be,(r,o)=>{s.push(Es(r,o))}),n.isFullyInitialized()&&s.push(Wf(n.getNode())),Xf(t,s,n.getNode(),e)}function Xf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return XE(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dr;class PC{constructor(){this.views=new Map}}function NC(t){x(!Dr,"__referenceConstructor has already been defined"),Dr=t}function OC(){return x(Dr,"Reference.ts has not been loaded"),Dr}function DC(t){return t.views.size===0}function Ll(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),hd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(hd(o,e,n,s));return r}}function MC(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let c=Pr(n,i?s:null),d=!1;c?d=!0:s instanceof H?(c=Ol(n,s),d=!1):(c=H.EMPTY_NODE,d=!1);const u=ao(new $n(c,d,!1),new $n(s,i,!1));return new SC(e,u)}return o}function LC(t,e,n,s,i,r){const o=MC(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xC(o,n),RC(o,n)}function FC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const c=_n(t);if(i==="default")for(const[d,u]of t.views.entries())o=o.concat(dd(u,n,s)),ud(u)&&(t.views.delete(d),u.query._queryParams.loadsAllData()||r.push(u.query));else{const d=t.views.get(i);d&&(o=o.concat(dd(d,n,s)),ud(d)&&(t.views.delete(i),d.query._queryParams.loadsAllData()||r.push(d.query)))}return c&&!_n(t)&&r.push(new(OC())(e._repo,e._path)),{removed:r,events:o}}function Zf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function fs(t,e){let n=null;for(const s of t.views.values())n=n||AC(s,e);return n}function ep(t,e){if(e._queryParams.loadsAllData())return lo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function tp(t,e){return ep(t,e)!=null}function _n(t){return lo(t)!=null}function lo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr;function UC(t){x(!Mr,"__referenceConstructor has already been defined"),Mr=t}function BC(){return x(Mr,"Reference.ts has not been loaded"),Mr}let $C=1;class fd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=pC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function np(t,e,n,s,i){return nC(t.pendingWriteTree_,e,n,s,i),i?Ns(t,new Bn(xl(),e,n)):[]}function HC(t,e,n,s){sC(t.pendingWriteTree_,e,n,s);const i=ue.fromObject(n);return Ns(t,new Cs(xl(),e,i))}function ln(t,e,n=!1){const s=iC(t.pendingWriteTree_,e);if(rC(t.pendingWriteTree_,e)){let r=new ue(null);return s.snap!=null?r=r.set(ie(),!0):Ue(s.children,o=>{r=r.set(new le(o),!0)}),Ns(t,new Rr(s.path,r,n))}else return[]}function co(t,e,n){return Ns(t,new Bn(Rl(),e,n))}function WC(t,e,n){const s=ue.fromObject(n);return Ns(t,new Cs(Rl(),e,s))}function jC(t,e){return Ns(t,new Ii(Rl(),e))}function VC(t,e,n){const s=Ul(t,n);if(s){const i=Bl(s),r=i.path,o=i.queryId,c=Ze(r,e),d=new Ii(Pl(o),c);return $l(t,r,d)}else return[]}function Oa(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let c=[];if(o&&(e._queryIdentifier==="default"||tp(o,e))){const d=FC(o,e,n,s);DC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=d.removed;if(c=d.events,!i){const f=u.findIndex(_=>_._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(r,(_,y)=>_n(y));if(f&&!p){const _=t.syncPointTree_.subtree(r);if(!_.isEmpty()){const y=KC(_);for(let I=0;I<y.length;++I){const P=y[I],F=P.query,K=rp(t,P);t.listenProvider_.startListening(li(F),Lr(t,F),K.hashFn,K.onComplete)}}}!p&&u.length>0&&!s&&(f?t.listenProvider_.stopListening(li(e),null):u.forEach(_=>{const y=t.queryToTagMap.get(uo(_));t.listenProvider_.stopListening(li(_),y)}))}GC(t,u)}return c}function qC(t,e,n,s){const i=Ul(t,s);if(i!=null){const r=Bl(i),o=r.path,c=r.queryId,d=Ze(o,e),u=new Bn(Pl(c),d,n);return $l(t,o,u)}else return[]}function zC(t,e,n,s){const i=Ul(t,s);if(i){const r=Bl(i),o=r.path,c=r.queryId,d=Ze(o,e),u=ue.fromObject(n),f=new Cs(Pl(c),d,u);return $l(t,o,f)}else return[]}function pd(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(_,y)=>{const I=Ze(_,i);r=r||fs(y,I),o=o||_n(y)});let c=t.syncPointTree_.get(i);c?(o=o||_n(c),r=r||fs(c,ie())):(c=new PC,t.syncPointTree_=t.syncPointTree_.set(i,c));let d;r!=null?d=!0:(d=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,I)=>{const P=fs(I,ie());P&&(r=r.updateImmediateChild(y,P))}));const u=tp(c,e);if(!u&&!e._queryParams.loadsAllData()){const _=uo(e);x(!t.queryToTagMap.has(_),"View does not exist, but we have a tag");const y=YC();t.queryToTagMap.set(_,y),t.tagToQueryMap.set(y,_)}const f=Nl(t.pendingWriteTree_,i);let p=LC(c,e,n,f,r,d);if(!u&&!o&&!s){const _=ep(c,e);p=p.concat(QC(t,e,_))}return p}function Fl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,c)=>{const d=Ze(o,e),u=fs(c,d);if(u)return u});return Kf(i,e,r,n,!0)}function Ns(t,e){return sp(e,t.syncPointTree_,null,Nl(t.pendingWriteTree_,ie()))}function sp(t,e,n,s){if(Z(t.path))return ip(t,e,n,s);{const i=e.get(ie());n==null&&i!=null&&(n=fs(i,ie()));let r=[];const o=J(t.path),c=t.operationForChild(o),d=e.children.get(o);if(d&&c){const u=n?n.getImmediateChild(o):null,f=Gf(s,o);r=r.concat(sp(c,d,u,f))}return i&&(r=r.concat(Ll(i,t,s,n))),r}}function ip(t,e,n,s){const i=e.get(ie());n==null&&i!=null&&(n=fs(i,ie()));let r=[];return e.children.inorderTraversal((o,c)=>{const d=n?n.getImmediateChild(o):null,u=Gf(s,o),f=t.operationForChild(o);f&&(r=r.concat(ip(f,c,d,u)))}),i&&(r=r.concat(Ll(i,t,s,n))),r}function rp(t,e){const n=e.query,s=Lr(t,n);return{hashFn:()=>(kC(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?VC(t,n._path,s):jC(t,n._path);{const r=W0(i,n);return Oa(t,n,null,r)}}}}function Lr(t,e){const n=uo(e);return t.queryToTagMap.get(n)}function uo(t){return t._path.toString()+"$"+t._queryIdentifier}function Ul(t,e){return t.tagToQueryMap.get(e)}function Bl(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new le(t.substr(0,e))}}function $l(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=Nl(t.pendingWriteTree_,e);return Ll(s,n,i,null)}function KC(t){return t.fold((e,n,s)=>{if(n&&_n(n))return[lo(n)];{let i=[];return n&&(i=Zf(n)),Ue(s,(r,o)=>{i=i.concat(o)}),i}})}function li(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(BC())(t._repo,t._path):t}function GC(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=uo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function YC(){return $C++}function QC(t,e,n){const s=e._path,i=Lr(t,e),r=rp(t,n),o=t.listenProvider_.startListening(li(e),i,r.hashFn,r.onComplete),c=t.syncPointTree_.subtree(s);if(i)x(!_n(c.value),"If we're adding a query, it shouldn't be shadowed");else{const d=c.fold((u,f,p)=>{if(!Z(u)&&f&&_n(f))return[lo(f).query];{let _=[];return f&&(_=_.concat(Zf(f).map(y=>y.query))),Ue(p,(y,I)=>{_=_.concat(I)}),_}});for(let u=0;u<d.length;++u){const f=d[u];t.listenProvider_.stopListening(li(f),Lr(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Hl(n)}node(){return this.node_}}class Wl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new Wl(this.syncTree_,n)}node(){return Fl(this.syncTree_,this.path_)}}const JC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},gd=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return XC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ZC(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},XC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},ZC=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},op=function(t,e,n,s){return jl(e,new Wl(n,t),s)},ap=function(t,e,n){return jl(t,new Hl(e),n)};function jl(t,e,n){const s=t.getPriority().val(),i=gd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,c=gd(o.getValue(),e,n);return c!==o.getValue()||i!==o.getPriority().val()?new Re(c,Ne(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Re(i))),o.forEachChild(be,(c,d)=>{const u=jl(d,e.getImmediateChild(c),n);u!==d&&(r=r.updateImmediateChild(c,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ql(t,e){let n=e instanceof le?e:new le(e),s=t,i=J(n);for(;i!==null;){const r=bs(s.node.children,i)||{children:{},childCount:0};s=new Vl(i,s,r),n=de(n),i=J(n)}return s}function Os(t){return t.node.value}function lp(t,e){t.node.value=e,Da(t)}function cp(t){return t.node.childCount>0}function eI(t){return Os(t)===void 0&&!cp(t)}function ho(t,e){Ue(t.node.children,(n,s)=>{e(new Vl(n,t,s))})}function up(t,e,n,s){n&&!s&&e(t),ho(t,i=>{up(i,e,!0,s)}),n&&s&&e(t)}function tI(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Di(t){return new le(t.parent===null?t.name:Di(t.parent)+"/"+t.name)}function Da(t){t.parent!==null&&nI(t.parent,t.name,t)}function nI(t,e,n){const s=eI(n),i=Pt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Da(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Da(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=/[\[\].#$\/\u0000-\u001F\u007F]/,iI=/[\[\].#$\u0000-\u001F\u007F]/,Qo=10*1024*1024,zl=function(t){return typeof t=="string"&&t.length!==0&&!sI.test(t)},dp=function(t){return typeof t=="string"&&t.length!==0&&!iI.test(t)},rI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dp(t)},oI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!wl(t)||t&&typeof t=="object"&&Pt(t,".sv")},aI=function(t,e,n,s){s&&e===void 0||fo(no(t,"value"),e,n)},fo=function(t,e,n){const s=n instanceof le?new EE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+En(s));if(typeof e=="function")throw new Error(t+"contains a function "+En(s)+" with contents = "+e.toString());if(wl(e))throw new Error(t+"contains "+e.toString()+" "+En(s));if(typeof e=="string"&&e.length>Qo/3&&so(e)>Qo)throw new Error(t+"contains a string greater than "+Qo+" utf8 bytes "+En(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ue(e,(o,c)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!zl(o)))throw new Error(t+" contains an invalid key ("+o+") "+En(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);CE(s,o),fo(t,c,s),IE(s)}),i&&r)throw new Error(t+' contains ".value" child '+En(s)+" in addition to actual children.")}},lI=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=bi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!zl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(vE);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&at(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},cI=function(t,e,n,s){if(s&&e===void 0)return;const i=no(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ue(e,(o,c)=>{const d=new le(o);if(fo(i,c,ye(n,d)),Cl(d)===".priority"&&!oI(c))throw new Error(i+"contains an invalid value for '"+d.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(d)}),lI(i,r)},hp=function(t,e,n,s){if(!(s&&n===void 0)&&!dp(n))throw new Error(no(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},uI=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hp(t,e,n,s)},fp=function(t,e){if(J(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},dI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rI(n))throw new Error(no(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function po(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Il(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function pp(t,e,n){po(t,n),gp(t,s=>Il(s,e))}function wt(t,e,n){po(t,n),gp(t,s=>at(s,e)||at(e,s))}function gp(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(fI(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function fI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Nn&&Le("event: "+n.toString()),Ps(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="repo_interrupt",gI=25;class mI{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xr(),this.transactionQueueTree_=new Vl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _I(t,e,n){if(t.stats_=vl(t.repoInfo_),t.forceRestClient_||z0())t.server_=new Ar(t.repoInfo_,(s,i,r,o)=>{md(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_d(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Bt(t.repoInfo_,e,(s,i,r,o)=>{md(t,s,i,r,o)},s=>{_d(t,s)},s=>{yI(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=J0(t.repoInfo_,()=>new QE(t.stats_,t.server_)),t.infoData_=new qE,t.infoSyncTree_=new fd({startListening:(s,i,r,o)=>{let c=[];const d=t.infoData_.getNode(s._path);return d.isEmpty()||(c=co(t.infoSyncTree_,s._path,d),setTimeout(()=>{o("ok")},0)),c},stopListening:()=>{}}),Kl(t,"connected",!1),t.serverSyncTree_=new fd({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(c,d)=>{const u=o(c,d);wt(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function wI(t){const n=t.infoData_.getNode(new le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function go(t){return JC({timestamp:wI(t)})}function md(t,e,n,s,i){t.dataUpdateCount++;const r=new le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const d=vr(n,u=>Ne(u));o=zC(t.serverSyncTree_,r,d,i)}else{const d=Ne(n);o=qC(t.serverSyncTree_,r,d,i)}else if(s){const d=vr(n,u=>Ne(u));o=WC(t.serverSyncTree_,r,d)}else{const d=Ne(n);o=co(t.serverSyncTree_,r,d)}let c=r;o.length>0&&(c=Ts(t,r)),wt(t.eventQueue_,c,o)}function _d(t,e){Kl(t,"connected",e),e===!1&&EI(t)}function yI(t,e){Ue(e,(n,s)=>{Kl(t,n,s)})}function Kl(t,e,n){const s=new le("/.info/"+e),i=Ne(n);t.infoData_.updateSnapshot(s,i);const r=co(t.infoSyncTree_,s,i);wt(t.eventQueue_,s,r)}function Gl(t){return t.nextWriteId_++}function bI(t,e,n,s,i){mo(t,"set",{path:e.toString(),value:n,priority:s});const r=go(t),o=Ne(n,s),c=Fl(t.serverSyncTree_,e),d=ap(o,c,r),u=Gl(t),f=np(t.serverSyncTree_,e,d,u,!0);po(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(_,y)=>{const I=_==="ok";I||Ge("set at "+e+" failed: "+_);const P=ln(t.serverSyncTree_,u,!I);wt(t.eventQueue_,e,P),Ma(t,i,_,y)});const p=Ql(t,e);Ts(t,p),wt(t.eventQueue_,p,[])}function vI(t,e,n,s){mo(t,"update",{path:e.toString(),value:n});let i=!0;const r=go(t),o={};if(Ue(n,(c,d)=>{i=!1,o[c]=op(ye(e,c),Ne(d),t.serverSyncTree_,r)}),i)Le("update() called with empty data.  Don't do anything."),Ma(t,s,"ok",void 0);else{const c=Gl(t),d=HC(t.serverSyncTree_,e,o,c);po(t.eventQueue_,d),t.server_.merge(e.toString(),n,(u,f)=>{const p=u==="ok";p||Ge("update at "+e+" failed: "+u);const _=ln(t.serverSyncTree_,c,!p),y=_.length>0?Ts(t,e):e;wt(t.eventQueue_,y,_),Ma(t,s,u,f)}),Ue(n,u=>{const f=Ql(t,ye(e,u));Ts(t,f)}),wt(t.eventQueue_,e,[])}}function EI(t){mo(t,"onDisconnectEvents");const e=go(t),n=xr();Sa(t.onDisconnect_,ie(),(i,r)=>{const o=op(i,r,t.serverSyncTree_,e);jf(n,i,o)});let s=[];Sa(n,ie(),(i,r)=>{s=s.concat(co(t.serverSyncTree_,i,r));const o=Ql(t,i);Ts(t,o)}),t.onDisconnect_=xr(),wt(t.eventQueue_,ie(),s)}function CI(t,e,n){let s;J(e._path)===".info"?s=pd(t.infoSyncTree_,e,n):s=pd(t.serverSyncTree_,e,n),pp(t.eventQueue_,e._path,s)}function wd(t,e,n){let s;J(e._path)===".info"?s=Oa(t.infoSyncTree_,e,n):s=Oa(t.serverSyncTree_,e,n),pp(t.eventQueue_,e._path,s)}function II(t){t.persistentConnection_&&t.persistentConnection_.interrupt(pI)}function mo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function Ma(t,e,n,s){e&&Ps(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function mp(t,e,n){return Fl(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function Yl(t,e=t.transactionQueueTree_){if(e||_o(t,e),Os(e)){const n=wp(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&TI(t,Di(e),n)}else cp(e)&&ho(e,n=>{Yl(t,n)})}function TI(t,e,n){const s=n.map(u=>u.currentWriteId),i=mp(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];x(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Ze(e,f.path);r=r.updateChild(p,f.currentOutputSnapshotRaw)}const c=r.val(!0),d=e;t.server_.put(d.toString(),c,u=>{mo(t,"transaction put response",{path:d.toString(),status:u});let f=[];if(u==="ok"){const p=[];for(let _=0;_<n.length;_++)n[_].status=2,f=f.concat(ln(t.serverSyncTree_,n[_].currentWriteId)),n[_].onComplete&&p.push(()=>n[_].onComplete(null,!0,n[_].currentOutputSnapshotResolved)),n[_].unwatcher();_o(t,ql(t.transactionQueueTree_,e)),Yl(t,t.transactionQueueTree_),wt(t.eventQueue_,e,f);for(let _=0;_<p.length;_++)Ps(p[_])}else{if(u==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Ge("transaction at "+d.toString()+" failed: "+u);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=u}Ts(t,e)}},o)}function Ts(t,e){const n=_p(t,e),s=Di(n),i=wp(t,n);return SI(t,i,s),s}function SI(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const d=e[c],u=Ze(n,d.path);let f=!1,p;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)f=!0,p=d.abortReason,i=i.concat(ln(t.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=gI)f=!0,p="maxretry",i=i.concat(ln(t.serverSyncTree_,d.currentWriteId,!0));else{const _=mp(t,d.path,o);d.currentInputSnapshot=_;const y=e[c].update(_.val());if(y!==void 0){fo("transaction failed: Data returned ",y,d.path);let I=Ne(y);typeof y=="object"&&y!=null&&Pt(y,".priority")||(I=I.updatePriority(_.getPriority()));const F=d.currentWriteId,K=go(t),ee=ap(I,_,K);d.currentOutputSnapshotRaw=I,d.currentOutputSnapshotResolved=ee,d.currentWriteId=Gl(t),o.splice(o.indexOf(F),1),i=i.concat(np(t.serverSyncTree_,d.path,ee,d.currentWriteId,d.applyLocally)),i=i.concat(ln(t.serverSyncTree_,F,!0))}else f=!0,p="nodata",i=i.concat(ln(t.serverSyncTree_,d.currentWriteId,!0))}wt(t.eventQueue_,n,i),i=[],f&&(e[c].status=2,function(_){setTimeout(_,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&(p==="nodata"?s.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):s.push(()=>e[c].onComplete(new Error(p),!1,null))))}_o(t,t.transactionQueueTree_);for(let c=0;c<s.length;c++)Ps(s[c]);Yl(t,t.transactionQueueTree_)}function _p(t,e){let n,s=t.transactionQueueTree_;for(n=J(e);n!==null&&Os(s)===void 0;)s=ql(s,n),e=de(e),n=J(e);return s}function wp(t,e){const n=[];return yp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function yp(t,e,n){const s=Os(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ho(e,i=>{yp(t,i,n)})}function _o(t,e){const n=Os(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,lp(e,n.length>0?n:void 0)}ho(e,s=>{_o(t,s)})}function Ql(t,e){const n=Di(_p(t,e)),s=ql(t.transactionQueueTree_,e);return tI(s,i=>{Jo(t,i)}),Jo(t,s),up(s,i=>{Jo(t,i)}),n}function Jo(t,e){const n=Os(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ln(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?lp(e,void 0):n.length=r+1,wt(t.eventQueue_,Di(e),i);for(let o=0;o<s.length;o++)Ps(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function AI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ge(`Invalid query segment '${n}' in query '${t}'`)}return e}const yd=function(t,e){const n=xI(t),s=n.namespace;n.domain==="firebase.com"&&Ht(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ht("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||F0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Sf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new le(n.pathString)}},xI=function(t){let e="",n="",s="",i="",r="",o=!0,c="https",d=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(c=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(f,p)),f<p&&(i=kI(t.substring(f,p)));const _=AI(t.substring(Math.min(t.length,p)));u=e.indexOf(":"),u>=0?(o=c==="https"||c==="wss",d=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in _&&(r=_.ns)}return{host:e,port:d,domain:n,subdomain:s,secure:o,scheme:c,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class vp{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Z(this._path)?null:Cl(this._path)}get ref(){return new qt(this._repo,this._path)}get _queryIdentifier(){const e=sd(this._queryParams),n=yl(e);return n==="{}"?"default":n}get _queryObject(){return sd(this._queryParams)}isEqual(e){if(e=Ae(e),!(e instanceof Jl))return!1;const n=this._repo===e._repo,s=Il(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+bE(this._path)}}class qt extends Jl{constructor(e,n){super(e,n,new Al,!1)}get parent(){const e=Mf(this._path);return e===null?null:new qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ti{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new le(e),s=Fr(this.ref,e);return new Ti(this._node.getChild(n),s,be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ti(i,Fr(this.ref,s),be)))}hasChild(e){const n=new le(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ei(t,e){return t=Ae(t),t._checkNotDeleted("ref"),e!==void 0?Fr(t._root,e):t._root}function Fr(t,e){return t=Ae(t),J(t._path)===null?uI("child","path",e,!1):hp("child","path",e,!1),new qt(t._repo,ye(t._path,e))}function PI(t){return fp("remove",t._path),Ep(t,null)}function Ep(t,e){t=Ae(t),fp("set",t._path),aI("set",e,t._path,!1);const n=new xi;return bI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function bd(t,e){cI("update",e,t._path,!1);const n=new xi;return vI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Xl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new bp("value",this,new Ti(e.snapshotNode,new qt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vp(this,e,n):null}matches(e){return e instanceof Xl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Zl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vp(this,e,n):null}createEvent(e,n){x(e.childName!=null,"Child events should have a childName.");const s=Fr(new qt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new bp(e.type,this,new Ti(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Zl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function NI(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const d=n,u=(f,p)=>{wd(t._repo,t,c),d(f,p)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new RI(n,r||void 0),c=e==="value"?new Xl(o):new Zl(e,o);return CI(t._repo,t,c),()=>wd(t._repo,t,c)}function OI(t,e,n,s){return NI(t,"value",e,n,s)}NC(qt);UC(qt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="FIREBASE_DATABASE_EMULATOR_HOST",La={};let MI=!1;function LI(t,e,n,s){t.repoInfo_=new Sf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function FI(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ht("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=yd(r,i),c=o.repoInfo,d,u;typeof process<"u"&&process.env&&(u=process.env[DI]),u?(d=!0,r=`http://${u}?ns=${c.namespace}`,o=yd(r,i),c=o.repoInfo):d=!o.repoInfo.secure;const f=i&&d?new ds(ds.OWNER):new G0(t.name,t.options,e);dI("Invalid Firebase Database URL",o),Z(o.path)||Ht("Database URL must point to the root of a Firebase Database (not including a child path).");const p=BI(c,t,f,new K0(t.name,n));return new $I(p,t)}function UI(t,e){const n=La[e];(!n||n[t.key]!==t)&&Ht(`Database ${e}(${t.repoInfo_}) has already been deleted.`),II(t),delete n[t.key]}function BI(t,e,n,s){let i=La[e.name];i||(i={},La[e.name]=i);let r=i[t.toURLString()];return r&&Ht("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new mI(t,MI,n,s),i[t.toURLString()]=r,r}class $I{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_I(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qt(this._repo,ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(UI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ht("Cannot call "+e+" on a deleted database.")}}function HI(t=dl(),e){const n=io(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Lh("database");s&&WI(n,...s)}return n}function WI(t,e,n,s={}){t=Ae(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ht("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ht('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ds(ds.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Bh(s.mockUserToken,t.app.options.projectId);r=new ds(o)}LI(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t){N0(Vn),Ln(new gn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return FI(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),At($u,Hu,t),At($u,Hu,"esm2017")}Bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};jI();var VI="firebase",qI="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(VI,qI,"app");const zI={apiKey:"AIzaSyAMGNeMS80LqNzLroQX3Ai3D9gWssBlk7M",authDomain:"aswartask.firebaseapp.com",projectId:"aswartask",storageBucket:"aswartask.appspot.com",messagingSenderId:"691853190479",appId:"1:691853190479:web:dd85c084597b639709113a",databaseURL:"https://aswartask-default-rtdb.europe-west1.firebasedatabase.app"},Cp=qh(zI),Ur=A0(Cp),ti=HI(Cp);var Zt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function KI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ip={exports:{}};/*!
* sweetalert2 v11.7.20
* Released under the MIT License.
*/(function(t,e){(function(n,s){t.exports=s()})(Zt,function(){const s={},i=()=>{s.previousActiveElement instanceof HTMLElement?(s.previousActiveElement.focus(),s.previousActiveElement=null):document.body&&document.body.focus()},r=a=>new Promise(l=>{if(!a)return l();const h=window.scrollX,g=window.scrollY;s.restoreFocusTimeout=setTimeout(()=>{i(),l()},100),window.scrollTo(h,g)});var o={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const c="swal2-",u=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((a,l)=>(a[l]=c+l,a),{}),p=["success","warning","info","question","error"].reduce((a,l)=>(a[l]=c+l,a),{}),_="SweetAlert2:",y=a=>a.charAt(0).toUpperCase()+a.slice(1),I=a=>{console.warn(`${_} ${typeof a=="object"?a.join(" "):a}`)},P=a=>{console.error(`${_} ${a}`)},F=[],K=a=>{F.includes(a)||(F.push(a),I(a))},ee=(a,l)=>{K(`"${a}" is deprecated and will be removed in the next major release. Please use "${l}" instead.`)},L=a=>typeof a=="function"?a():a,N=a=>a&&typeof a.toPromise=="function",$=a=>N(a)?a.toPromise():Promise.resolve(a),he=a=>a&&Promise.resolve(a)===a,ne=()=>document.body.querySelector(`.${u.container}`),pe=a=>{const l=ne();return l?l.querySelector(a):null},ge=a=>pe(`.${a}`),G=()=>ge(u.popup),st=()=>ge(u.icon),zt=()=>ge(u["icon-content"]),Kt=()=>ge(u.title),bt=()=>ge(u["html-container"]),Us=()=>ge(u.image),Te=()=>ge(u["progress-steps"]),ce=()=>ge(u["validation-message"]),Q=()=>pe(`.${u.actions} .${u.confirm}`),Ve=()=>pe(`.${u.actions} .${u.cancel}`),it=()=>pe(`.${u.actions} .${u.deny}`),Nt=()=>ge(u["input-label"]),De=()=>pe(`.${u.loader}`),Gt=()=>ge(u.actions),Bi=()=>ge(u.footer),Kn=()=>ge(u["timer-progress-bar"]),rt=()=>ge(u.close),Gn=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Yn=()=>{const a=G();if(!a)return[];const l=a.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),h=Array.from(l).sort((B,te)=>{const Se=parseInt(B.getAttribute("tabindex")||"0"),Ie=parseInt(te.getAttribute("tabindex")||"0");return Se>Ie?1:Se<Ie?-1:0}),g=a.querySelectorAll(Gn),b=Array.from(g).filter(B=>B.getAttribute("tabindex")!=="-1");return[...new Set(h.concat(b))].filter(B=>z(B))},vt=()=>w(document.body,u.shown)&&!w(document.body,u["toast-shown"])&&!w(document.body,u["no-backdrop"]),Yt=()=>{const a=G();return a?w(a,u.toast):!1},Bs=()=>{const a=G();return a?a.hasAttribute("data-loading"):!1},m=(a,l)=>{if(a.textContent="",l){const g=new DOMParser().parseFromString(l,"text/html"),b=g.querySelector("head");b&&Array.from(b.childNodes).forEach(te=>{a.appendChild(te)});const B=g.querySelector("body");B&&Array.from(B.childNodes).forEach(te=>{te instanceof HTMLVideoElement||te instanceof HTMLAudioElement?a.appendChild(te.cloneNode(!0)):a.appendChild(te)})}},w=(a,l)=>{if(!l)return!1;const h=l.split(/\s+/);for(let g=0;g<h.length;g++)if(!a.classList.contains(h[g]))return!1;return!0},v=(a,l)=>{Array.from(a.classList).forEach(h=>{!Object.values(u).includes(h)&&!Object.values(p).includes(h)&&!Object.values(l.showClass||{}).includes(h)&&a.classList.remove(h)})},C=(a,l,h)=>{if(v(a,l),l.customClass&&l.customClass[h]){if(typeof l.customClass[h]!="string"&&!l.customClass[h].forEach){I(`Invalid type of customClass.${h}! Expected string or iterable object, got "${typeof l.customClass[h]}"`);return}E(a,l.customClass[h])}},T=(a,l)=>{if(!l)return null;switch(l){case"select":case"textarea":case"file":return a.querySelector(`.${u.popup} > .${u[l]}`);case"checkbox":return a.querySelector(`.${u.popup} > .${u.checkbox} input`);case"radio":return a.querySelector(`.${u.popup} > .${u.radio} input:checked`)||a.querySelector(`.${u.popup} > .${u.radio} input:first-child`);case"range":return a.querySelector(`.${u.popup} > .${u.range} input`);default:return a.querySelector(`.${u.popup} > .${u.input}`)}},R=a=>{if(a.focus(),a.type!=="file"){const l=a.value;a.value="",a.value=l}},D=(a,l,h)=>{!a||!l||(typeof l=="string"&&(l=l.split(/\s+/).filter(Boolean)),l.forEach(g=>{Array.isArray(a)?a.forEach(b=>{h?b.classList.add(g):b.classList.remove(g)}):h?a.classList.add(g):a.classList.remove(g)}))},E=(a,l)=>{D(a,l,!0)},A=(a,l)=>{D(a,l,!1)},S=(a,l)=>{const h=Array.from(a.children);for(let g=0;g<h.length;g++){const b=h[g];if(b instanceof HTMLElement&&w(b,l))return b}},U=(a,l,h)=>{h===`${parseInt(h)}`&&(h=parseInt(h)),h||parseInt(h)===0?a.style[l]=typeof h=="number"?`${h}px`:h:a.style.removeProperty(l)},O=function(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";a&&(a.style.display=l)},M=a=>{a&&(a.style.display="none")},W=(a,l,h,g)=>{const b=a.querySelector(l);b&&(b.style[h]=g)},q=function(a,l){let h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";l?O(a,h):M(a)},z=a=>!!(a&&(a.offsetWidth||a.offsetHeight||a.getClientRects().length)),oe=()=>!z(Q())&&!z(it())&&!z(Ve()),me=a=>a.scrollHeight>a.clientHeight,Ye=a=>{const l=window.getComputedStyle(a),h=parseFloat(l.getPropertyValue("animation-duration")||"0"),g=parseFloat(l.getPropertyValue("transition-duration")||"0");return h>0||g>0},Et=function(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const h=Kn();z(h)&&(l&&(h.style.transition="none",h.style.width="100%"),setTimeout(()=>{h.style.transition=`width ${a/1e3}s linear`,h.style.width="0%"},10))},$i=()=>{const a=Kn(),l=parseInt(window.getComputedStyle(a).width);a.style.removeProperty("transition"),a.style.width="100%";const h=parseInt(window.getComputedStyle(a).width),g=l/h*100;a.style.width=`${g}%`},Qt=()=>typeof window>"u"||typeof document>"u",Hi=`
 <div aria-labelledby="${u.title}" aria-describedby="${u["html-container"]}" class="${u.popup}" tabindex="-1">
   <button type="button" class="${u.close}"></button>
   <ul class="${u["progress-steps"]}"></ul>
   <div class="${u.icon}"></div>
   <img class="${u.image}" />
   <h2 class="${u.title}" id="${u.title}"></h2>
   <div class="${u["html-container"]}" id="${u["html-container"]}"></div>
   <input class="${u.input}" id="${u.input}" />
   <input type="file" class="${u.file}" />
   <div class="${u.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${u.select}" id="${u.select}"></select>
   <div class="${u.radio}"></div>
   <label class="${u.checkbox}">
     <input type="checkbox" id="${u.checkbox}" />
     <span class="${u.label}"></span>
   </label>
   <textarea class="${u.textarea}" id="${u.textarea}"></textarea>
   <div class="${u["validation-message"]}" id="${u["validation-message"]}"></div>
   <div class="${u.actions}">
     <div class="${u.loader}"></div>
     <button type="button" class="${u.confirm}"></button>
     <button type="button" class="${u.deny}"></button>
     <button type="button" class="${u.cancel}"></button>
   </div>
   <div class="${u.footer}"></div>
   <div class="${u["timer-progress-bar-container"]}">
     <div class="${u["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),qe=()=>{const a=ne();return a?(a.remove(),A([document.documentElement,document.body],[u["no-backdrop"],u["toast-shown"],u["has-column"]]),!0):!1},xe=()=>{s.currentInstance.resetValidationMessage()},Wi=()=>{const a=G(),l=S(a,u.input),h=S(a,u.file),g=a.querySelector(`.${u.range} input`),b=a.querySelector(`.${u.range} output`),B=S(a,u.select),te=a.querySelector(`.${u.checkbox} input`),Se=S(a,u.textarea);l.oninput=xe,h.onchange=xe,B.onchange=xe,te.onchange=xe,Se.oninput=xe,g.oninput=()=>{xe(),b.value=g.value},g.onchange=()=>{xe(),b.value=g.value}},ig=a=>typeof a=="string"?document.querySelector(a):a,rg=a=>{const l=G();l.setAttribute("role",a.toast?"alert":"dialog"),l.setAttribute("aria-live",a.toast?"polite":"assertive"),a.toast||l.setAttribute("aria-modal","true")},og=a=>{window.getComputedStyle(a).direction==="rtl"&&E(ne(),u.rtl)},ag=a=>{const l=qe();if(Qt()){P("SweetAlert2 requires document to initialize");return}const h=document.createElement("div");h.className=u.container,l&&E(h,u["no-transition"]),m(h,Hi);const g=ig(a.target);g.appendChild(h),rg(a),og(g),Wi()},vo=(a,l)=>{a instanceof HTMLElement?l.appendChild(a):typeof a=="object"?lg(a,l):a&&m(l,a)},lg=(a,l)=>{a.jquery?cg(l,a):m(l,a.toString())},cg=(a,l)=>{if(a.textContent="",0 in l)for(let h=0;h in l;h++)a.appendChild(l[h].cloneNode(!0));else a.appendChild(l.cloneNode(!0))},$s=(()=>{if(Qt())return!1;const a=document.createElement("div"),l={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const h in l)if(Object.prototype.hasOwnProperty.call(l,h)&&typeof a.style[h]<"u")return l[h];return!1})(),ug=(a,l)=>{const h=Gt(),g=De();!h||!g||(!l.showConfirmButton&&!l.showDenyButton&&!l.showCancelButton?M(h):O(h),C(h,l,"actions"),dg(h,g,l),m(g,l.loaderHtml||""),C(g,l,"loader"))};function dg(a,l,h){const g=Q(),b=it(),B=Ve();!g||!b||!B||(Eo(g,"confirm",h),Eo(b,"deny",h),Eo(B,"cancel",h),hg(g,b,B,h),h.reverseButtons&&(h.toast?(a.insertBefore(B,g),a.insertBefore(b,g)):(a.insertBefore(B,l),a.insertBefore(b,l),a.insertBefore(g,l))))}function hg(a,l,h,g){if(!g.buttonsStyling){A([a,l,h],u.styled);return}E([a,l,h],u.styled),g.confirmButtonColor&&(a.style.backgroundColor=g.confirmButtonColor,E(a,u["default-outline"])),g.denyButtonColor&&(l.style.backgroundColor=g.denyButtonColor,E(l,u["default-outline"])),g.cancelButtonColor&&(h.style.backgroundColor=g.cancelButtonColor,E(h,u["default-outline"]))}function Eo(a,l,h){const g=y(l);q(a,h[`show${g}Button`],"inline-block"),m(a,h[`${l}ButtonText`]||""),a.setAttribute("aria-label",h[`${l}ButtonAriaLabel`]||""),a.className=u[l],C(a,h,`${l}Button`)}const fg=(a,l)=>{const h=rt();h&&(m(h,l.closeButtonHtml||""),C(h,l,"closeButton"),q(h,l.showCloseButton),h.setAttribute("aria-label",l.closeButtonAriaLabel||""))},pg=(a,l)=>{const h=ne();h&&(gg(h,l.backdrop),mg(h,l.position),_g(h,l.grow),C(h,l,"container"))};function gg(a,l){typeof l=="string"?a.style.background=l:l||E([document.documentElement,document.body],u["no-backdrop"])}function mg(a,l){l&&(l in u?E(a,u[l]):(I('The "position" parameter is not valid, defaulting to "center"'),E(a,u.center)))}function _g(a,l){l&&E(a,u[`grow-${l}`])}const wg=["input","file","range","select","radio","checkbox","textarea"],yg=(a,l)=>{const h=G(),g=o.innerParams.get(a),b=!g||l.input!==g.input;wg.forEach(B=>{const te=S(h,u[B]);Eg(B,l.inputAttributes),te.className=u[B],b&&M(te)}),l.input&&(b&&bg(l),Cg(l))},bg=a=>{if(!Qe[a.input]){P(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${a.input}"`);return}const l=cc(a.input),h=Qe[a.input](l,a);O(l),a.inputAutoFocus&&setTimeout(()=>{R(h)})},vg=a=>{for(let l=0;l<a.attributes.length;l++){const h=a.attributes[l].name;["id","type","value","style"].includes(h)||a.removeAttribute(h)}},Eg=(a,l)=>{const h=T(G(),a);if(h){vg(h);for(const g in l)h.setAttribute(g,l[g])}},Cg=a=>{const l=cc(a.input);typeof a.customClass=="object"&&E(l,a.customClass.input)},Co=(a,l)=>{(!a.placeholder||l.inputPlaceholder)&&(a.placeholder=l.inputPlaceholder)},Hs=(a,l,h)=>{if(h.inputLabel){const g=document.createElement("label"),b=u["input-label"];g.setAttribute("for",a.id),g.className=b,typeof h.customClass=="object"&&E(g,h.customClass.inputLabel),g.innerText=h.inputLabel,l.insertAdjacentElement("beforebegin",g)}},cc=a=>S(G(),u[a]||u.input),ji=(a,l)=>{["string","number"].includes(typeof l)?a.value=`${l}`:he(l)||I(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof l}"`)},Qe={};Qe.text=Qe.email=Qe.password=Qe.number=Qe.tel=Qe.url=(a,l)=>(ji(a,l.inputValue),Hs(a,a,l),Co(a,l),a.type=l.input,a),Qe.file=(a,l)=>(Hs(a,a,l),Co(a,l),a),Qe.range=(a,l)=>{const h=a.querySelector("input"),g=a.querySelector("output");return ji(h,l.inputValue),h.type=l.input,ji(g,l.inputValue),Hs(h,a,l),a},Qe.select=(a,l)=>{if(a.textContent="",l.inputPlaceholder){const h=document.createElement("option");m(h,l.inputPlaceholder),h.value="",h.disabled=!0,h.selected=!0,a.appendChild(h)}return Hs(a,a,l),a},Qe.radio=a=>(a.textContent="",a),Qe.checkbox=(a,l)=>{const h=T(G(),"checkbox");h.value="1",h.checked=!!l.inputValue;const g=a.querySelector("span");return m(g,l.inputPlaceholder),h},Qe.textarea=(a,l)=>{ji(a,l.inputValue),Co(a,l),Hs(a,a,l);const h=g=>parseInt(window.getComputedStyle(g).marginLeft)+parseInt(window.getComputedStyle(g).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const g=parseInt(window.getComputedStyle(G()).width),b=()=>{if(!document.body.contains(a))return;const B=a.offsetWidth+h(a);B>g?G().style.width=`${B}px`:U(G(),"width",l.width)};new MutationObserver(b).observe(a,{attributes:!0,attributeFilter:["style"]})}}),a};const Ig=(a,l)=>{const h=bt();h&&(C(h,l,"htmlContainer"),l.html?(vo(l.html,h),O(h,"block")):l.text?(h.textContent=l.text,O(h,"block")):M(h),yg(a,l))},Tg=(a,l)=>{const h=Bi();h&&(q(h,l.footer),l.footer&&vo(l.footer,h),C(h,l,"footer"))},Sg=(a,l)=>{const h=o.innerParams.get(a),g=st();if(g){if(h&&l.icon===h.icon){dc(g,l),uc(g,l);return}if(!l.icon&&!l.iconHtml){M(g);return}if(l.icon&&Object.keys(p).indexOf(l.icon)===-1){P(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${l.icon}"`),M(g);return}O(g),dc(g,l),uc(g,l),E(g,l.showClass&&l.showClass.icon)}},uc=(a,l)=>{for(const[h,g]of Object.entries(p))l.icon!==h&&A(a,g);E(a,l.icon&&p[l.icon]),Rg(a,l),kg(),C(a,l,"icon")},kg=()=>{const a=G();if(!a)return;const l=window.getComputedStyle(a).getPropertyValue("background-color"),h=a.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let g=0;g<h.length;g++)h[g].style.backgroundColor=l},Ag=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,xg=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,dc=(a,l)=>{if(!l.icon&&!l.iconHtml)return;let h=a.innerHTML,g="";l.iconHtml?g=hc(l.iconHtml):l.icon==="success"?(g=Ag,h=h.replace(/ style=".*?"/g,"")):l.icon==="error"?g=xg:l.icon&&(g=hc({question:"?",warning:"!",info:"i"}[l.icon])),h.trim()!==g.trim()&&m(a,g)},Rg=(a,l)=>{if(l.iconColor){a.style.color=l.iconColor,a.style.borderColor=l.iconColor;for(const h of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])W(a,h,"backgroundColor",l.iconColor);W(a,".swal2-success-ring","borderColor",l.iconColor)}},hc=a=>`<div class="${u["icon-content"]}">${a}</div>`,Pg=(a,l)=>{const h=Us();if(h){if(!l.imageUrl){M(h);return}O(h,""),h.setAttribute("src",l.imageUrl),h.setAttribute("alt",l.imageAlt||""),U(h,"width",l.imageWidth),U(h,"height",l.imageHeight),h.className=u.image,C(h,l,"image")}},Ng=(a,l)=>{const h=ne(),g=G();if(!(!h||!g)){if(l.toast){U(h,"width",l.width),g.style.width="100%";const b=De();b&&g.insertBefore(b,st())}else U(g,"width",l.width);U(g,"padding",l.padding),l.color&&(g.style.color=l.color),l.background&&(g.style.background=l.background),M(ce()),Og(g,l)}},Og=(a,l)=>{const h=l.showClass||{};a.className=`${u.popup} ${z(a)?h.popup:""}`,l.toast?(E([document.documentElement,document.body],u["toast-shown"]),E(a,u.toast)):E(a,u.modal),C(a,l,"popup"),typeof l.customClass=="string"&&E(a,l.customClass),l.icon&&E(a,u[`icon-${l.icon}`])},Dg=(a,l)=>{const h=Te();if(!h)return;const{progressSteps:g,currentProgressStep:b}=l;if(!g||g.length===0||b===void 0){M(h);return}O(h),h.textContent="",b>=g.length&&I("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),g.forEach((B,te)=>{const Se=Mg(B);if(h.appendChild(Se),te===b&&E(Se,u["active-progress-step"]),te!==g.length-1){const Ie=Lg(l);h.appendChild(Ie)}})},Mg=a=>{const l=document.createElement("li");return E(l,u["progress-step"]),m(l,a),l},Lg=a=>{const l=document.createElement("li");return E(l,u["progress-step-line"]),a.progressStepsDistance&&U(l,"width",a.progressStepsDistance),l},Fg=(a,l)=>{const h=Kt();h&&(q(h,l.title||l.titleText,"block"),l.title&&vo(l.title,h),l.titleText&&(h.innerText=l.titleText),C(h,l,"title"))},fc=(a,l)=>{Ng(a,l),pg(a,l),Dg(a,l),Sg(a,l),Pg(a,l),Fg(a,l),fg(a,l),Ig(a,l),ug(a,l),Tg(a,l);const h=G();typeof l.didRender=="function"&&h&&l.didRender(h)},Ug=()=>z(G()),pc=()=>Q()&&Q().click(),Bg=()=>it()&&it().click(),$g=()=>Ve()&&Ve().click(),Qn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),gc=a=>{a.keydownTarget&&a.keydownHandlerAdded&&(a.keydownTarget.removeEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!1)},Hg=(a,l,h,g)=>{gc(l),h.toast||(l.keydownHandler=b=>jg(a,b,g),l.keydownTarget=h.keydownListenerCapture?window:G(),l.keydownListenerCapture=h.keydownListenerCapture,l.keydownTarget.addEventListener("keydown",l.keydownHandler,{capture:l.keydownListenerCapture}),l.keydownHandlerAdded=!0)},Io=(a,l)=>{const h=Yn();if(h.length){a=a+l,a===h.length?a=0:a===-1&&(a=h.length-1),h[a].focus();return}G().focus()},mc=["ArrowRight","ArrowDown"],Wg=["ArrowLeft","ArrowUp"],jg=(a,l,h)=>{const g=o.innerParams.get(a);g&&(l.isComposing||l.keyCode===229||(g.stopKeydownPropagation&&l.stopPropagation(),l.key==="Enter"?Vg(a,l,g):l.key==="Tab"?qg(l):[...mc,...Wg].includes(l.key)?zg(l.key):l.key==="Escape"&&Kg(l,g,h)))},Vg=(a,l,h)=>{if(L(h.allowEnterKey)&&l.target&&a.getInput()&&l.target instanceof HTMLElement&&l.target.outerHTML===a.getInput().outerHTML){if(["textarea","file"].includes(h.input))return;pc(),l.preventDefault()}},qg=a=>{const l=a.target,h=Yn();let g=-1;for(let b=0;b<h.length;b++)if(l===h[b]){g=b;break}a.shiftKey?Io(g,-1):Io(g,1),a.stopPropagation(),a.preventDefault()},zg=a=>{const l=Q(),h=it(),g=Ve(),b=[l,h,g];if(document.activeElement instanceof HTMLElement&&!b.includes(document.activeElement))return;const B=mc.includes(a)?"nextElementSibling":"previousElementSibling";let te=document.activeElement;for(let Se=0;Se<Gt().children.length;Se++){if(te=te[B],!te)return;if(te instanceof HTMLButtonElement&&z(te))break}te instanceof HTMLButtonElement&&te.focus()},Kg=(a,l,h)=>{L(l.allowEscapeKey)&&(a.preventDefault(),h(Qn.esc))};var Ws={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Gg=()=>{Array.from(document.body.children).forEach(l=>{l===ne()||l.contains(ne())||(l.hasAttribute("aria-hidden")&&l.setAttribute("data-previous-aria-hidden",l.getAttribute("aria-hidden")||""),l.setAttribute("aria-hidden","true"))})},_c=()=>{Array.from(document.body.children).forEach(l=>{l.hasAttribute("data-previous-aria-hidden")?(l.setAttribute("aria-hidden",l.getAttribute("data-previous-aria-hidden")||""),l.removeAttribute("data-previous-aria-hidden")):l.removeAttribute("aria-hidden")})},wc=typeof window<"u"&&!!window.GestureEvent,Yg=()=>{if(wc&&!w(document.body,u.iosfix)){const a=document.body.scrollTop;document.body.style.top=`${a*-1}px`,E(document.body,u.iosfix),Qg()}},Qg=()=>{const a=ne();let l;a.ontouchstart=h=>{l=Jg(h)},a.ontouchmove=h=>{l&&(h.preventDefault(),h.stopPropagation())}},Jg=a=>{const l=a.target,h=ne();return Xg(a)||Zg(a)?!1:l===h||!me(h)&&l instanceof HTMLElement&&l.tagName!=="INPUT"&&l.tagName!=="TEXTAREA"&&!(me(bt())&&bt().contains(l))},Xg=a=>a.touches&&a.touches.length&&a.touches[0].touchType==="stylus",Zg=a=>a.touches&&a.touches.length>1,em=()=>{if(w(document.body,u.iosfix)){const a=parseInt(document.body.style.top,10);A(document.body,u.iosfix),document.body.style.top="",document.body.scrollTop=a*-1}},tm=()=>{const a=document.createElement("div");a.className=u["scrollbar-measure"],document.body.appendChild(a);const l=a.getBoundingClientRect().width-a.clientWidth;return document.body.removeChild(a),l};let Jn=null;const nm=()=>{Jn===null&&document.body.scrollHeight>window.innerHeight&&(Jn=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Jn+tm()}px`)},sm=()=>{Jn!==null&&(document.body.style.paddingRight=`${Jn}px`,Jn=null)};function yc(a,l,h,g){Yt()?vc(a,g):(r(h).then(()=>vc(a,g)),gc(s)),wc?(l.setAttribute("style","display:none !important"),l.removeAttribute("class"),l.innerHTML=""):l.remove(),vt()&&(sm(),em(),_c()),im()}function im(){A([document.documentElement,document.body],[u.shown,u["height-auto"],u["no-backdrop"],u["toast-shown"]])}function Jt(a){a=om(a);const l=Ws.swalPromiseResolve.get(this),h=rm(this);this.isAwaitingPromise?a.isDismissed||(js(this),l(a)):h&&l(a)}const rm=a=>{const l=G();if(!l)return!1;const h=o.innerParams.get(a);if(!h||w(l,h.hideClass.popup))return!1;A(l,h.showClass.popup),E(l,h.hideClass.popup);const g=ne();return A(g,h.showClass.backdrop),E(g,h.hideClass.backdrop),am(a,l,h),!0};function bc(a){const l=Ws.swalPromiseReject.get(this);js(this),l&&l(a)}const js=a=>{a.isAwaitingPromise&&(delete a.isAwaitingPromise,o.innerParams.get(a)||a._destroy())},om=a=>typeof a>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},a),am=(a,l,h)=>{const g=ne(),b=$s&&Ye(l);typeof h.willClose=="function"&&h.willClose(l),b?lm(a,l,g,h.returnFocus,h.didClose):yc(a,g,h.returnFocus,h.didClose)},lm=(a,l,h,g,b)=>{s.swalCloseEventFinishedCallback=yc.bind(null,a,h,g,b),l.addEventListener($s,function(B){B.target===l&&(s.swalCloseEventFinishedCallback(),delete s.swalCloseEventFinishedCallback)})},vc=(a,l)=>{setTimeout(()=>{typeof l=="function"&&l.bind(a.params)(),a._destroy&&a._destroy()})},Xn=a=>{let l=G();l||new zi,l=G();const h=De();Yt()?M(st()):cm(l,a),O(h),l.setAttribute("data-loading","true"),l.setAttribute("aria-busy","true"),l.focus()},cm=(a,l)=>{const h=Gt(),g=De();!l&&z(Q())&&(l=Q()),O(h),l&&(M(l),g.setAttribute("data-button-to-replace",l.className)),g.parentNode.insertBefore(g,l),E([a,h],u.loading)},um=(a,l)=>{l.input==="select"||l.input==="radio"?gm(a,l):["text","email","number","tel","textarea"].includes(l.input)&&(N(l.inputValue)||he(l.inputValue))&&(Xn(Q()),mm(a,l))},dm=(a,l)=>{const h=a.getInput();if(!h)return null;switch(l.input){case"checkbox":return hm(h);case"radio":return fm(h);case"file":return pm(h);default:return l.inputAutoTrim?h.value.trim():h.value}},hm=a=>a.checked?1:0,fm=a=>a.checked?a.value:null,pm=a=>a.files.length?a.getAttribute("multiple")!==null?a.files:a.files[0]:null,gm=(a,l)=>{const h=G(),g=b=>{_m[l.input](h,To(b),l)};N(l.inputOptions)||he(l.inputOptions)?(Xn(Q()),$(l.inputOptions).then(b=>{a.hideLoading(),g(b)})):typeof l.inputOptions=="object"?g(l.inputOptions):P(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof l.inputOptions}`)},mm=(a,l)=>{const h=a.getInput();M(h),$(l.inputValue).then(g=>{h.value=l.input==="number"?`${parseFloat(g)||0}`:`${g}`,O(h),h.focus(),a.hideLoading()}).catch(g=>{P(`Error in inputValue promise: ${g}`),h.value="",O(h),h.focus(),a.hideLoading()})},_m={select:(a,l,h)=>{const g=S(a,u.select),b=(B,te,Se)=>{const Ie=document.createElement("option");Ie.value=Se,m(Ie,te),Ie.selected=Ec(Se,h.inputValue),B.appendChild(Ie)};l.forEach(B=>{const te=B[0],Se=B[1];if(Array.isArray(Se)){const Ie=document.createElement("optgroup");Ie.label=te,Ie.disabled=!1,g.appendChild(Ie),Se.forEach(es=>b(Ie,es[1],es[0]))}else b(g,Se,te)}),g.focus()},radio:(a,l,h)=>{const g=S(a,u.radio);l.forEach(B=>{const te=B[0],Se=B[1],Ie=document.createElement("input"),es=document.createElement("label");Ie.type="radio",Ie.name=u.radio,Ie.value=te,Ec(te,h.inputValue)&&(Ie.checked=!0);const Ro=document.createElement("span");m(Ro,Se),Ro.className=u.label,es.appendChild(Ie),es.appendChild(Ro),g.appendChild(es)});const b=g.querySelectorAll("input");b.length&&b[0].focus()}},To=a=>{const l=[];return typeof Map<"u"&&a instanceof Map?a.forEach((h,g)=>{let b=h;typeof b=="object"&&(b=To(b)),l.push([g,b])}):Object.keys(a).forEach(h=>{let g=a[h];typeof g=="object"&&(g=To(g)),l.push([h,g])}),l},Ec=(a,l)=>l&&l.toString()===a.toString(),wm=a=>{const l=o.innerParams.get(a);a.disableButtons(),l.input?Cc(a,"confirm"):ko(a,!0)},ym=a=>{const l=o.innerParams.get(a);a.disableButtons(),l.returnInputValueOnDeny?Cc(a,"deny"):So(a,!1)},bm=(a,l)=>{a.disableButtons(),l(Qn.cancel)},Cc=(a,l)=>{const h=o.innerParams.get(a);if(!h.input){P(`The "input" parameter is needed to be set when using returnInputValueOn${y(l)}`);return}const g=dm(a,h);h.inputValidator?vm(a,g,l):a.getInput().checkValidity()?l==="deny"?So(a,g):ko(a,g):(a.enableButtons(),a.showValidationMessage(h.validationMessage))},vm=(a,l,h)=>{const g=o.innerParams.get(a);a.disableInput(),Promise.resolve().then(()=>$(g.inputValidator(l,g.validationMessage))).then(B=>{a.enableButtons(),a.enableInput(),B?a.showValidationMessage(B):h==="deny"?So(a,l):ko(a,l)})},So=(a,l)=>{const h=o.innerParams.get(a||void 0);h.showLoaderOnDeny&&Xn(it()),h.preDeny?(a.isAwaitingPromise=!0,Promise.resolve().then(()=>$(h.preDeny(l,h.validationMessage))).then(b=>{b===!1?(a.hideLoading(),js(a)):a.close({isDenied:!0,value:typeof b>"u"?l:b})}).catch(b=>Tc(a||void 0,b))):a.close({isDenied:!0,value:l})},Ic=(a,l)=>{a.close({isConfirmed:!0,value:l})},Tc=(a,l)=>{a.rejectPromise(l)},ko=(a,l)=>{const h=o.innerParams.get(a||void 0);h.showLoaderOnConfirm&&Xn(),h.preConfirm?(a.resetValidationMessage(),a.isAwaitingPromise=!0,Promise.resolve().then(()=>$(h.preConfirm(l,h.validationMessage))).then(b=>{z(ce())||b===!1?(a.hideLoading(),js(a)):Ic(a,typeof b>"u"?l:b)}).catch(b=>Tc(a||void 0,b))):Ic(a,l)};function Vi(){const a=o.innerParams.get(this);if(!a)return;const l=o.domCache.get(this);M(l.loader),Yt()?a.icon&&O(st()):Em(l),A([l.popup,l.actions],u.loading),l.popup.removeAttribute("aria-busy"),l.popup.removeAttribute("data-loading"),l.confirmButton.disabled=!1,l.denyButton.disabled=!1,l.cancelButton.disabled=!1}const Em=a=>{const l=a.popup.getElementsByClassName(a.loader.getAttribute("data-button-to-replace"));l.length?O(l[0],"inline-block"):oe()&&M(a.actions)};function Sc(){const a=o.innerParams.get(this),l=o.domCache.get(this);return l?T(l.popup,a.input):null}function kc(a,l,h){const g=o.domCache.get(a);l.forEach(b=>{g[b].disabled=h})}function Ac(a,l){if(a)if(a.type==="radio"){const g=a.parentNode.parentNode.querySelectorAll("input");for(let b=0;b<g.length;b++)g[b].disabled=l}else a.disabled=l}function xc(){kc(this,["confirmButton","denyButton","cancelButton"],!1)}function Rc(){kc(this,["confirmButton","denyButton","cancelButton"],!0)}function Pc(){Ac(this.getInput(),!1)}function Nc(){Ac(this.getInput(),!0)}function Oc(a){const l=o.domCache.get(this),h=o.innerParams.get(this);m(l.validationMessage,a),l.validationMessage.className=u["validation-message"],h.customClass&&h.customClass.validationMessage&&E(l.validationMessage,h.customClass.validationMessage),O(l.validationMessage);const g=this.getInput();g&&(g.setAttribute("aria-invalid",!0),g.setAttribute("aria-describedby",u["validation-message"]),R(g),E(g,u.inputerror))}function Dc(){const a=o.domCache.get(this);a.validationMessage&&M(a.validationMessage);const l=this.getInput();l&&(l.removeAttribute("aria-invalid"),l.removeAttribute("aria-describedby"),A(l,u.inputerror))}const Zn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Cm=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Im={},Tm=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Mc=a=>Object.prototype.hasOwnProperty.call(Zn,a),Lc=a=>Cm.indexOf(a)!==-1,Fc=a=>Im[a],Sm=a=>{Mc(a)||I(`Unknown parameter "${a}"`)},km=a=>{Tm.includes(a)&&I(`The parameter "${a}" is incompatible with toasts`)},Am=a=>{const l=Fc(a);l&&ee(a,l)},xm=a=>{a.backdrop===!1&&a.allowOutsideClick&&I('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const l in a)Sm(l),a.toast&&km(l),Am(l)};function Uc(a){const l=G(),h=o.innerParams.get(this);if(!l||w(l,h.hideClass.popup)){I("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const g=Rm(a),b=Object.assign({},h,g);fc(this,b),o.innerParams.set(this,b),Object.defineProperties(this,{params:{value:Object.assign({},this.params,a),writable:!1,enumerable:!0}})}const Rm=a=>{const l={};return Object.keys(a).forEach(h=>{Lc(h)?l[h]=a[h]:I(`Invalid parameter to update: ${h}`)}),l};function Bc(){const a=o.domCache.get(this),l=o.innerParams.get(this);if(!l){$c(this);return}a.popup&&s.swalCloseEventFinishedCallback&&(s.swalCloseEventFinishedCallback(),delete s.swalCloseEventFinishedCallback),typeof l.didDestroy=="function"&&l.didDestroy(),Pm(this)}const Pm=a=>{$c(a),delete a.params,delete s.keydownHandler,delete s.keydownTarget,delete s.currentInstance},$c=a=>{a.isAwaitingPromise?(Ao(o,a),a.isAwaitingPromise=!0):(Ao(Ws,a),Ao(o,a),delete a.isAwaitingPromise,delete a.disableButtons,delete a.enableButtons,delete a.getInput,delete a.disableInput,delete a.enableInput,delete a.hideLoading,delete a.disableLoading,delete a.showValidationMessage,delete a.resetValidationMessage,delete a.close,delete a.closePopup,delete a.closeModal,delete a.closeToast,delete a.rejectPromise,delete a.update,delete a._destroy)},Ao=(a,l)=>{for(const h in a)a[h].delete(l)};var Nm=Object.freeze({__proto__:null,_destroy:Bc,close:Jt,closeModal:Jt,closePopup:Jt,closeToast:Jt,disableButtons:Rc,disableInput:Nc,disableLoading:Vi,enableButtons:xc,enableInput:Pc,getInput:Sc,handleAwaitingPromise:js,hideLoading:Vi,rejectPromise:bc,resetValidationMessage:Dc,showValidationMessage:Oc,update:Uc});const Om=(a,l,h)=>{o.innerParams.get(a).toast?Dm(a,l,h):(Lm(l),Fm(l),Um(a,l,h))},Dm=(a,l,h)=>{l.popup.onclick=()=>{const g=o.innerParams.get(a);g&&(Mm(g)||g.timer||g.input)||h(Qn.close)}},Mm=a=>a.showConfirmButton||a.showDenyButton||a.showCancelButton||a.showCloseButton;let qi=!1;const Lm=a=>{a.popup.onmousedown=()=>{a.container.onmouseup=function(l){a.container.onmouseup=void 0,l.target===a.container&&(qi=!0)}}},Fm=a=>{a.container.onmousedown=()=>{a.popup.onmouseup=function(l){a.popup.onmouseup=void 0,(l.target===a.popup||a.popup.contains(l.target))&&(qi=!0)}}},Um=(a,l,h)=>{l.container.onclick=g=>{const b=o.innerParams.get(a);if(qi){qi=!1;return}g.target===l.container&&L(b.allowOutsideClick)&&h(Qn.backdrop)}},Bm=a=>typeof a=="object"&&a.jquery,Hc=a=>a instanceof Element||Bm(a),$m=a=>{const l={};return typeof a[0]=="object"&&!Hc(a[0])?Object.assign(l,a[0]):["title","html","icon"].forEach((h,g)=>{const b=a[g];typeof b=="string"||Hc(b)?l[h]=b:b!==void 0&&P(`Unexpected type of ${h}! Expected "string" or "Element", got ${typeof b}`)}),l};function Hm(){const a=this;for(var l=arguments.length,h=new Array(l),g=0;g<l;g++)h[g]=arguments[g];return new a(...h)}function Wm(a){class l extends this{_main(g,b){return super._main(g,Object.assign({},a,b))}}return l}const jm=()=>s.timeout&&s.timeout.getTimerLeft(),Wc=()=>{if(s.timeout)return $i(),s.timeout.stop()},jc=()=>{if(s.timeout){const a=s.timeout.start();return Et(a),a}},Vm=()=>{const a=s.timeout;return a&&(a.running?Wc():jc())},qm=a=>{if(s.timeout){const l=s.timeout.increase(a);return Et(l,!0),l}},zm=()=>!!(s.timeout&&s.timeout.isRunning());let Vc=!1;const xo={};function Km(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";xo[a]=this,Vc||(document.body.addEventListener("click",Gm),Vc=!0)}const Gm=a=>{for(let l=a.target;l&&l!==document;l=l.parentNode)for(const h in xo){const g=l.getAttribute(h);if(g){xo[h].fire({template:g});return}}};var Ym=Object.freeze({__proto__:null,argsToParams:$m,bindClickHandler:Km,clickCancel:$g,clickConfirm:pc,clickDeny:Bg,enableLoading:Xn,fire:Hm,getActions:Gt,getCancelButton:Ve,getCloseButton:rt,getConfirmButton:Q,getContainer:ne,getDenyButton:it,getFocusableElements:Yn,getFooter:Bi,getHtmlContainer:bt,getIcon:st,getIconContent:zt,getImage:Us,getInputLabel:Nt,getLoader:De,getPopup:G,getProgressSteps:Te,getTimerLeft:jm,getTimerProgressBar:Kn,getTitle:Kt,getValidationMessage:ce,increaseTimer:qm,isDeprecatedParameter:Fc,isLoading:Bs,isTimerRunning:zm,isUpdatableParameter:Lc,isValidParameter:Mc,isVisible:Ug,mixin:Wm,resumeTimer:jc,showLoading:Xn,stopTimer:Wc,toggleTimer:Vm});class Qm{constructor(l,h){this.callback=l,this.remaining=h,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(l){const h=this.running;return h&&this.stop(),this.remaining+=l,h&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const qc=["swal-title","swal-html","swal-footer"],Jm=a=>{const l=typeof a.template=="string"?document.querySelector(a.template):a.template;if(!l)return{};const h=l.content;return r_(h),Object.assign(Xm(h),Zm(h),e_(h),t_(h),n_(h),s_(h),i_(h,qc))},Xm=a=>{const l={};return Array.from(a.querySelectorAll("swal-param")).forEach(g=>{wn(g,["name","value"]);const b=g.getAttribute("name"),B=g.getAttribute("value");typeof Zn[b]=="boolean"?l[b]=B!=="false":typeof Zn[b]=="object"?l[b]=JSON.parse(B):l[b]=B}),l},Zm=a=>{const l={};return Array.from(a.querySelectorAll("swal-function-param")).forEach(g=>{const b=g.getAttribute("name"),B=g.getAttribute("value");l[b]=new Function(`return ${B}`)()}),l},e_=a=>{const l={};return Array.from(a.querySelectorAll("swal-button")).forEach(g=>{wn(g,["type","color","aria-label"]);const b=g.getAttribute("type");l[`${b}ButtonText`]=g.innerHTML,l[`show${y(b)}Button`]=!0,g.hasAttribute("color")&&(l[`${b}ButtonColor`]=g.getAttribute("color")),g.hasAttribute("aria-label")&&(l[`${b}ButtonAriaLabel`]=g.getAttribute("aria-label"))}),l},t_=a=>{const l={},h=a.querySelector("swal-image");return h&&(wn(h,["src","width","height","alt"]),h.hasAttribute("src")&&(l.imageUrl=h.getAttribute("src")),h.hasAttribute("width")&&(l.imageWidth=h.getAttribute("width")),h.hasAttribute("height")&&(l.imageHeight=h.getAttribute("height")),h.hasAttribute("alt")&&(l.imageAlt=h.getAttribute("alt"))),l},n_=a=>{const l={},h=a.querySelector("swal-icon");return h&&(wn(h,["type","color"]),h.hasAttribute("type")&&(l.icon=h.getAttribute("type")),h.hasAttribute("color")&&(l.iconColor=h.getAttribute("color")),l.iconHtml=h.innerHTML),l},s_=a=>{const l={},h=a.querySelector("swal-input");h&&(wn(h,["type","label","placeholder","value"]),l.input=h.getAttribute("type")||"text",h.hasAttribute("label")&&(l.inputLabel=h.getAttribute("label")),h.hasAttribute("placeholder")&&(l.inputPlaceholder=h.getAttribute("placeholder")),h.hasAttribute("value")&&(l.inputValue=h.getAttribute("value")));const g=Array.from(a.querySelectorAll("swal-input-option"));return g.length&&(l.inputOptions={},g.forEach(b=>{wn(b,["value"]);const B=b.getAttribute("value"),te=b.innerHTML;l.inputOptions[B]=te})),l},i_=(a,l)=>{const h={};for(const g in l){const b=l[g],B=a.querySelector(b);B&&(wn(B,[]),h[b.replace(/^swal-/,"")]=B.innerHTML.trim())}return h},r_=a=>{const l=qc.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(a.children).forEach(h=>{const g=h.tagName.toLowerCase();l.includes(g)||I(`Unrecognized element <${g}>`)})},wn=(a,l)=>{Array.from(a.attributes).forEach(h=>{l.indexOf(h.name)===-1&&I([`Unrecognized attribute "${h.name}" on <${a.tagName.toLowerCase()}>.`,`${l.length?`Allowed attributes are: ${l.join(", ")}`:"To set the value, use HTML within the element."}`])})},zc=10,o_=a=>{const l=ne(),h=G();typeof a.willOpen=="function"&&a.willOpen(h);const b=window.getComputedStyle(document.body).overflowY;c_(l,h,a),setTimeout(()=>{a_(l,h)},zc),vt()&&(l_(l,a.scrollbarPadding,b),Gg()),!Yt()&&!s.previousActiveElement&&(s.previousActiveElement=document.activeElement),typeof a.didOpen=="function"&&setTimeout(()=>a.didOpen(h)),A(l,u["no-transition"])},Kc=a=>{const l=G();if(a.target!==l)return;const h=ne();l.removeEventListener($s,Kc),h.style.overflowY="auto"},a_=(a,l)=>{$s&&Ye(l)?(a.style.overflowY="hidden",l.addEventListener($s,Kc)):a.style.overflowY="auto"},l_=(a,l,h)=>{Yg(),l&&h!=="hidden"&&nm(),setTimeout(()=>{a.scrollTop=0})},c_=(a,l,h)=>{E(a,h.showClass.backdrop),l.style.setProperty("opacity","0","important"),O(l,"grid"),setTimeout(()=>{E(l,h.showClass.popup),l.style.removeProperty("opacity")},zc),E([document.documentElement,document.body],u.shown),h.heightAuto&&h.backdrop&&!h.toast&&E([document.documentElement,document.body],u["height-auto"])};var Gc={email:(a,l)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(a)?Promise.resolve():Promise.resolve(l||"Invalid email address"),url:(a,l)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(a)?Promise.resolve():Promise.resolve(l||"Invalid URL")};function u_(a){a.inputValidator||(a.input==="email"&&(a.inputValidator=Gc.email),a.input==="url"&&(a.inputValidator=Gc.url))}function d_(a){(!a.target||typeof a.target=="string"&&!document.querySelector(a.target)||typeof a.target!="string"&&!a.target.appendChild)&&(I('Target parameter is not valid, defaulting to "body"'),a.target="body")}function h_(a){u_(a),a.showLoaderOnConfirm&&!a.preConfirm&&I(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),d_(a),typeof a.title=="string"&&(a.title=a.title.split(`
`).join("<br />")),ag(a)}let lt;class Ce{constructor(){if(typeof window>"u")return;lt=this;for(var l=arguments.length,h=new Array(l),g=0;g<l;g++)h[g]=arguments[g];const b=Object.freeze(this.constructor.argsToParams(h));this.params=b,this.isAwaitingPromise=!1;const B=lt._main(lt.params);o.promise.set(this,B)}_main(l){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};xm(Object.assign({},h,l)),s.currentInstance&&(s.currentInstance._destroy(),vt()&&_c()),s.currentInstance=lt;const g=p_(l,h);h_(g),Object.freeze(g),s.timeout&&(s.timeout.stop(),delete s.timeout),clearTimeout(s.restoreFocusTimeout);const b=g_(lt);return fc(lt,g),o.innerParams.set(lt,g),f_(lt,b,g)}then(l){return o.promise.get(this).then(l)}finally(l){return o.promise.get(this).finally(l)}}const f_=(a,l,h)=>new Promise((g,b)=>{const B=te=>{a.close({isDismissed:!0,dismiss:te})};Ws.swalPromiseResolve.set(a,g),Ws.swalPromiseReject.set(a,b),l.confirmButton.onclick=()=>{wm(a)},l.denyButton.onclick=()=>{ym(a)},l.cancelButton.onclick=()=>{bm(a,B)},l.closeButton.onclick=()=>{B(Qn.close)},Om(a,l,B),Hg(a,s,h,B),um(a,h),o_(h),m_(s,h,B),__(l,h),setTimeout(()=>{l.container.scrollTop=0})}),p_=(a,l)=>{const h=Jm(a),g=Object.assign({},Zn,l,h,a);return g.showClass=Object.assign({},Zn.showClass,g.showClass),g.hideClass=Object.assign({},Zn.hideClass,g.hideClass),g},g_=a=>{const l={popup:G(),container:ne(),actions:Gt(),confirmButton:Q(),denyButton:it(),cancelButton:Ve(),loader:De(),closeButton:rt(),validationMessage:ce(),progressSteps:Te()};return o.domCache.set(a,l),l},m_=(a,l,h)=>{const g=Kn();M(g),l.timer&&(a.timeout=new Qm(()=>{h("timer"),delete a.timeout},l.timer),l.timerProgressBar&&(O(g),C(g,l,"timerProgressBar"),setTimeout(()=>{a.timeout&&a.timeout.running&&Et(l.timer)})))},__=(a,l)=>{if(!l.toast){if(!L(l.allowEnterKey)){y_();return}w_(a,l)||Io(-1,1)}},w_=(a,l)=>l.focusDeny&&z(a.denyButton)?(a.denyButton.focus(),!0):l.focusCancel&&z(a.cancelButton)?(a.cancelButton.focus(),!0):l.focusConfirm&&z(a.confirmButton)?(a.confirmButton.focus(),!0):!1,y_=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const a=new Date,l=localStorage.getItem("swal-initiation");l?(a.getTime()-Date.parse(l))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const h=document.createElement("audio");h.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",h.loop=!0,document.body.appendChild(h),setTimeout(()=>{h.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${a}`)}Ce.prototype.disableButtons=Rc,Ce.prototype.enableButtons=xc,Ce.prototype.getInput=Sc,Ce.prototype.disableInput=Nc,Ce.prototype.enableInput=Pc,Ce.prototype.hideLoading=Vi,Ce.prototype.disableLoading=Vi,Ce.prototype.showValidationMessage=Oc,Ce.prototype.resetValidationMessage=Dc,Ce.prototype.close=Jt,Ce.prototype.closePopup=Jt,Ce.prototype.closeModal=Jt,Ce.prototype.closeToast=Jt,Ce.prototype.rejectPromise=bc,Ce.prototype.update=Uc,Ce.prototype._destroy=Bc,Object.assign(Ce,Ym),Object.keys(Nm).forEach(a=>{Ce[a]=function(){return lt&&lt[a]?lt[a](...arguments):null}}),Ce.DismissReason=Qn,Ce.version="11.7.20";const zi=Ce;return zi.default=zi,zi}),typeof Zt<"u"&&Zt.Sweetalert2&&(Zt.swal=Zt.sweetAlert=Zt.Swal=Zt.SweetAlert=Zt.Sweetalert2),typeof document<"u"&&function(n,s){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=s);else try{i.innerHTML=s}catch{i.innerText=s}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(Ip);var GI=Ip.exports;const kn=KI(GI),YI={class:"grid bg-white w-[90%] sm:w-[80%] md:w-1/2 mx-auto gap-4 p-4 rounded my-3"},QI=k("h1",{class:"text-center text-3xl font-bold"},"Upload Post",-1),JI={__name:"Form",setup(t){const e=we(""),n=we(""),s=we(),i=we(),r=we(null),o=async()=>{const d=e.value.trim(),u=n.value.trim(),f=!isNaN(s.value);if(d&&u&&r.value&&f&&i.value>0){const p=r.value.name.split(".")[1],_=(Math.random()+1).toString(36).substring(2)+(Math.random()+1).toString(36).substring(2),y=Ir(Ur,`images/${_}.${p}`),P=(await df(y,r.value)).metadata.fullPath;try{Ep(ei(ti,`/${_}`),{id:_,title:d,desc:u,price:Number(s.value),file:P,quantity:Number(i.value),date:new Date().toDateString()})}catch(F){console.log("Error adding document: ",F)}e.value="",n.value="",s.value="",i.value=""}else kn.fire({icon:"error",title:"Oops...",text:"Please Fill All Information"})},c=d=>{const u=d.target.files[0];r.value=u};return(d,u)=>(Me(),Be("div",YI,[QI,Dt(k("input",{class:"px-4 py-2 rounded border w-full",type:"text","onUpdate:modelValue":u[0]||(u[0]=f=>e.value=f),placeholder:"Title"},null,512),[[Mt,e.value]]),Dt(k("textarea",{class:"px-4 py-2 rounded border",rows:"5",type:"text","onUpdate:modelValue":u[1]||(u[1]=f=>n.value=f),placeholder:"Description"},null,512),[[Mt,n.value]]),Dt(k("input",{class:"px-4 py-2 rounded border w-full",type:"number","onUpdate:modelValue":u[2]||(u[2]=f=>s.value=f),placeholder:"Price in USD$"},null,512),[[Mt,s.value]]),Dt(k("input",{class:"px-4 py-2 rounded border w-full",type:"number","onUpdate:modelValue":u[3]||(u[3]=f=>i.value=f),placeholder:"Quantity"},null,512),[[Mt,i.value]]),k("input",{type:"file",name:"myFile",id:"file-upload",class:"input-file",accept:".jpeg, .png, .jpg",onChange:c},null,32),k("button",{class:"bg-blue-500 text-white rounded w-fit px-5 py-3",onClick:o}," Upload ")]))}},XI=["src"],vd={__name:"CloudImage",props:["path"],setup(t){const{path:e}=t,n=we(null);return nl(async()=>{let s=await S0(Ir(Ur,e));n.value=s}),(s,i)=>(Me(),Be("img",{src:n.value,alt:"product image",className:"block w-full aspect-[4/3] object-cover"},null,8,XI))}},ZI={key:0,class:"container mt-20"},eT={key:1,class:"container my-20"},tT={class:"mb-5"},nT=k("label",{for:"filters"},"Filter Products By: ",-1),sT=k("option",{value:"title"},"Title",-1),iT=k("option",{value:"price"},"Price",-1),rT=k("option",{value:"date"},"Date",-1),oT=k("option",{value:"quantity"},"Quantity",-1),aT=[sT,iT,rT,oT],lT={class:"items-stretch justify-center grid-auto"},cT={className:"px-4 pt-2 pb-12"},uT={class:"text-sm text-slate-400 mb-0"},dT={className:" text-2xl text-blue-500 font-bold my-1"},hT={className:"text-slate-600 line-clamp-3 break-words"},fT={class:"text-lg"},pT=k("span",{class:"text-green-500"},"$",-1),gT={className:"text-gray-400"},mT={class:"absolute flex gap-2 justify-end w-full -left-2 bottom-2"},_T=["onClick"],wT=["onClick"],yT={class:"flex items-end justify-center gap-4"},bT=k("option",{value:"title"},"Title",-1),vT=k("option",{value:"price"},"Price",-1),ET=k("option",{value:"quantity"},"Quantity",-1),CT=[bT,vT,ET],IT={class:"grid-auto mt-10"},TT={className:"px-4 pt-2 pb-12"},ST={class:"text-sm text-slate-400 mb-0"},kT={className:"text-2xl text-blue-500 font-bold my-1"},AT={className:"text-slate-600 line-clamp-3 break-words"},xT={class:"text-lg"},RT=k("span",{class:"text-green-500"},"$",-1),PT={className:"text-gray-400"},NT={class:"absolute flex gap-2 justify-end w-full -left-2 bottom-2"},OT=["onClick"],DT=["onClick"],MT={key:2,class:"grid-auto container mt-20 items-center justify-center"},LT=k("div",{role:"status",class:"w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"},[k("div",{class:"flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"},[k("svg",{class:"w-10 h-10 text-gray-200 dark:text-gray-600","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20"},[k("path",{d:"M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"}),k("path",{d:"M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"})])]),k("div",{class:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"}),k("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),k("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),k("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700"})],-1),FT=k("div",{role:"status",class:"w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"},[k("div",{class:"flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"},[k("svg",{class:"w-10 h-10 text-gray-200 dark:text-gray-600","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20"},[k("path",{d:"M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"}),k("path",{d:"M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"})])]),k("div",{class:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"}),k("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),k("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),k("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700"})],-1),UT=k("div",{role:"status",class:"w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"},[k("div",{class:"flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"},[k("svg",{class:"w-10 h-10 text-gray-200 dark:text-gray-600","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20"},[k("path",{d:"M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"}),k("path",{d:"M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"})])]),k("div",{class:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"}),k("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),k("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),k("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700"})],-1),BT=[LT,FT,UT],$T={__name:"Data",setup(t){const e=we([]),n=we("title"),s=we(""),i=we(""),r=we(),o=we(),c=we(),d=we(!1),u=we(""),f=we("title"),p=we([]);function _(){OI(ei(ti),L=>{const N=L.val();if(N!==null){d.value=!1;let $=[];Object.values(N).map(he=>{$.push(he)}),e.value=$}else e.value=[],d.value=!0})}_();const y=L=>{kn.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(N=>{N.isConfirmed&&(PI(ei(ti,`/${L.id}`)),kn.fire("Deleted!","Your file has been deleted.","success"),_())}),K()},I=async(L,N)=>{if((await kn.fire({title:"Edit Product",html:`
    <input  style="width:67% !important" id="swal-input1" class="swal2-input" placeholder="Enter Title" value="${L.title}">

    <textarea style="width:67% !important" id="swal-input2" class="swal2-textarea" placeholder="Enter textarea">${L.desc}</textarea>
     <input style="width:67% !important" id="swal-input3" class="swal2-input" placeholder="Enter Price" value="${L.price}">
        <input  style="width:67% !important" id="swal-input4" class="swal2-input" placeholder="Enter Quantity" value="${L.quantity}">
     <input id="swal-input-file" type="file" class="swal2-file-input" style="margin-top: 20px">
  `,focusConfirm:!1,showCancelButton:!0,cancelButtonText:"Cancel",preConfirm:()=>{s.value=document.getElementById("swal-input1").value,i.value=document.getElementById("swal-input2").value,r.value=document.getElementById("swal-input3").value,c.value=document.getElementById("swal-input4").value,o.value=document.getElementById("swal-input-file").files[0]}})).isConfirmed){let he=s.value.trim(),ne=i.value.trim(),pe=c.value.trim(),ge=!isNaN(r.value);if(he&&ne&&ge&&pe)if(o.value){const G=Ir(Ur,`${L.file}`);await k0(G);const st=o.value.name.split(".")[1],zt=Ir(Ur,`images/${L.id}2.${st}`),bt=(await df(zt,o.value)).metadata.fullPath;await bd(ei(ti,`/${L.id}`),{title:he,desc:ne,quantity:Number(pe),price:Number(r.value),id:L.id,file:bt})}else bd(ei(ti,`/${L.id}`),{title:he,desc:ne,quantity:pe,price:r.value,id:L.id});else kn.fire({icon:"error",title:"Oops...",text:"Please Fill All Information"})}K()},P=L=>{n.value=L,F()};function F(){e.value.sort((L,N)=>n.value==="title"?L.title.localeCompare(N.title):n.value==="date"?L.date.localeCompare(N.date):N[n.value]-L[n.value])}const K=()=>{if(p.value=[],isNaN(u.value)){if(u.value.trim()){const L=u.value.toLowerCase().trim();e.value.filter(N=>{N[f.value].toLowerCase().includes(L)&&p.value.push(N)})}}else isNaN(u.value)?p.value=[]:e.value.filter(L=>{+L[f.value]>=+u.value&&p.value.push(L)})},ee=L=>{f.value=L};return(L,N)=>(Me(),Be(Xe,null,[d.value?(Me(),Be("h2",ZI,"There's No Products")):xn("",!0),e.value.length>0?(Me(),Be("div",eT,[k("div",tT,[nT,k("select",{name:"filter",id:"filters",onChange:N[0]||(N[0]=$=>P($.target.value)),class:"outline-none w-full border-b border-gray text-darkblue h-[38px] text-xl"},aT,32)]),k("div",lT,[(Me(!0),Be(Xe,null,ru(e.value,($,he)=>(Me(),Be("div",{key:$.file,className:"bg-white rounded overflow-hidden relative group"},[k("div",null,[tt(vd,{path:$.file},null,8,["path"])]),k("div",cT,[k("p",uT,"Order Date "+Ct($.date),1),k("h3",dT,Ct($.title),1),k("p",hT,Ct($.desc),1),k("p",fT,[gi(" Price: "+Ct($.price),1),pT]),k("p",gT,"Quantity: "+Ct($.quantity),1)]),k("div",mT,[k("button",{onClick:ne=>y($),class:"btn bg-red-500 hover:bg-red-400"}," Delete ",8,_T),k("button",{onClick:ne=>I($),class:"btn bg-green-500 hover:bg-green-600"}," Edit ",8,wT)])]))),128))]),k("div",yT,[Dt(k("input",{"onUpdate:modelValue":N[1]||(N[1]=$=>u.value=$),onKeyup:K,type:"text",placeholder:"Search",class:"mx-auto input border-gray-500 mt-5 w-3/4"},null,544),[[Mt,u.value]]),k("select",{name:"filter",id:"filters",onChange:N[2]||(N[2]=$=>ee($.target.value)),class:"outline-none w-1/4 border-b border-gray text-darkblue text-xl h-12"},CT,32)]),k("div",IT,[(Me(!0),Be(Xe,null,ru(p.value,($,he)=>(Me(),Be("div",{key:$.file,className:"bg-white rounded overflow-hidden relative group"},[k("div",null,[tt(vd,{path:$.file},null,8,["path"])]),k("div",TT,[k("p",ST,"Order Date "+Ct($.date),1),k("h3",kT,Ct($.title),1),k("p",AT,Ct($.desc),1),k("p",xT,[gi(" Price: "+Ct($.price),1),RT]),k("p",PT,"Quantity: "+Ct($.quantity),1)]),k("div",NT,[k("button",{onClick:ne=>y($),class:"btn bg-red-500 hover:bg-red-400"}," Delete ",8,OT),k("button",{onClick:ne=>I($),class:"btn bg-green-500 hover:bg-green-600"}," Edit ",8,DT)])]))),128))])])):xn("",!0),e.value.length===0&&!d.value?(Me(),Be("div",MT,BT)):xn("",!0)],64))}};function ec(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Tp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HT=Tp,Sp=new Ri("auth","Firebase",Tp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new cl("@firebase/auth");function WT(t,...e){Br.logLevel<=ae.WARN&&Br.warn(`Auth (${Vn}): ${t}`,...e)}function cr(t,...e){Br.logLevel<=ae.ERROR&&Br.error(`Auth (${Vn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,...e){throw tc(t,...e)}function xt(t,...e){return tc(t,...e)}function jT(t,e,n){const s=Object.assign(Object.assign({},HT()),{[e]:n});return new Ri("auth","Firebase",s).create(e,{appName:t.name})}function tc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Sp.create(t,...e)}function j(t,e,...n){if(!t)throw tc(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cr(e),new Error(e)}function Wt(t,e){t||Ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VT(){return Ed()==="http:"||Ed()==="https:"}function Ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VT()||Zy()||"connection"in navigator)?navigator.onLine:!0}function zT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wt(n>e,"Short delay should be less than long delay!"),this.isMobile=ll()||$h()}get(){return qT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t,e){Wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=new Mi(3e4,6e4);function Ds(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ms(t,e,n,s,i={}){return Ap(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const c=Rs(Object.assign({key:t.config.apiKey},o)).slice(1),d=await t._getAdditionalHeaders();return d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode),kp.fetch()(xp(t,t.config.apiHost,n,c),Object.assign({method:e,headers:d,referrerPolicy:"no-referrer"},r))})}async function Ap(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},KT),e);try{const i=new YT(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw sr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[d,u]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw sr(t,"credential-already-in-use",o);if(d==="EMAIL_EXISTS")throw sr(t,"email-already-in-use",o);if(d==="USER_DISABLED")throw sr(t,"user-disabled",o);const f=s[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jT(t,f,u);yt(t,f)}}catch(i){if(i instanceof Vt)throw i;yt(t,"network-request-failed",{message:String(i)})}}async function Li(t,e,n,s,i={}){const r=await Ms(t,e,n,s,i);return"mfaPendingCredential"in r&&yt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function xp(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?nc(t.config,i):`${t.config.apiScheme}://${i}`}class YT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(xt(this.auth,"network-request-failed")),GT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=xt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t,e){return Ms(t,"POST","/v1/accounts:delete",e)}async function JT(t,e){return Ms(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XT(t,e=!1){const n=Ae(t),s=await n.getIdToken(e),i=sc(s);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ci(Xo(i.auth_time)),issuedAtTime:ci(Xo(i.iat)),expirationTime:ci(Xo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Xo(t){return Number(t)*1e3}function sc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return cr("JWT malformed, contained fewer than 3 sections"),null;try{const i=br(n);return i?JSON.parse(i):(cr("Failed to decode base64 JWT payload"),null)}catch(i){return cr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ZT(t){const e=sc(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Vt&&eS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function eS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ci(this.lastLoginAt),this.creationTime=ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Si(t,JT(n,{idToken:s}));j(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?iS(r.providerUserInfo):[],c=sS(t.providerData,o),d=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(c!=null&&c.length),f=d?u:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new Rp(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function nS(t){const e=Ae(t);await $r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sS(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function iS(t){return t.map(e=>{var{providerId:n}=e,s=ec(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e){const n=await Ap(t,{},async()=>{const s=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=xp(t,i,"/v1/token",`key=${r}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",kp.fetch()(o,{method:"POST",headers:c,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ZT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await rS(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ki;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(j(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ki,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ec(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Rp(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Si(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XT(this,e)}reload(){return nS(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $r(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Si(this,QT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,c,d,u,f;const p=(s=n.displayName)!==null&&s!==void 0?s:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,y=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,F=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,K=(u=n.createdAt)!==null&&u!==void 0?u:void 0,ee=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:L,emailVerified:N,isAnonymous:$,providerData:he,stsTokenManager:ne}=n;j(L&&ne,e,"internal-error");const pe=ki.fromJSON(this.name,ne);j(typeof L=="string",e,"internal-error"),en(p,e.name),en(_,e.name),j(typeof N=="boolean",e,"internal-error"),j(typeof $=="boolean",e,"internal-error"),en(y,e.name),en(I,e.name),en(P,e.name),en(F,e.name),en(K,e.name),en(ee,e.name);const ge=new On({uid:L,auth:e,email:_,emailVerified:N,displayName:p,isAnonymous:$,photoURL:I,phoneNumber:y,tenantId:P,stsTokenManager:pe,createdAt:K,lastLoginAt:ee});return he&&Array.isArray(he)&&(ge.providerData=he.map(G=>Object.assign({},G))),F&&(ge._redirectEventId=F),ge}static async _fromIdTokenResponse(e,n,s=!1){const i=new ki;i.updateFromServerResponse(n);const r=new On({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await $r(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=new Map;function Ut(t){Wt(t instanceof Function,"Expected a class definition");let e=Cd.get(t);return e?(Wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pp.type="NONE";const Id=Pp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ur(this.userKey,i.apiKey,r),this.fullPersistenceKey=ur("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ps(Ut(Id),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Ut(Id);const o=ur(s,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){const p=On._fromJSON(e,f);u!==r&&(c=p),r=u;break}}catch{}const d=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!d.length?new ps(r,e,s):(r=d[0],c&&await r._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ps(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Np(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lp(e))return"Blackberry";if(Fp(e))return"Webos";if(ic(e))return"Safari";if((e.includes("chrome/")||Op(e))&&!e.includes("edge/"))return"Chrome";if(Mp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Np(t=je()){return/firefox\//i.test(t)}function ic(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Op(t=je()){return/crios\//i.test(t)}function Dp(t=je()){return/iemobile/i.test(t)}function Mp(t=je()){return/android/i.test(t)}function Lp(t=je()){return/blackberry/i.test(t)}function Fp(t=je()){return/webos/i.test(t)}function wo(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oS(t=je()){var e;return wo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aS(){return eb()&&document.documentMode===10}function Up(t=je()){return wo(t)||Mp(t)||Fp(t)||Lp(t)||/windows phone/i.test(t)||Dp(t)}function lS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t,e=[]){let n;switch(t){case"Browser":n=Td(je());break;case"Worker":n=`${Td(je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vn}/${s}`}async function $p(t,e){return Ms(t,"GET","/v2/recaptchaConfig",Ds(t,e))}function Sd(t){return t!==void 0&&t.enterprise!==void 0}class Hp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Wp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=xt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",cS().appendChild(s)})}function uS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dS="https://www.google.com/recaptcha/enterprise.js?render=",hS="recaptcha-enterprise",fS="NO_RECAPTCHA";class jp{constructor(e){this.type=hS,this.auth=Ls(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{$p(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Hp(d);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(d=>{c(d)})})}function i(r,o,c){const d=window.grecaptcha;Sd(d)?d.enterprise.ready(()=>{d.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(fS)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(c=>{if(!n&&Sd(window.grecaptcha))i(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Wp(dS+c).then(()=>{i(c,r,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function Hr(t,e,n,s=!1){const i=new jp(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,c)=>{try{const d=e(r);o(d)}catch(d){c(d)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kd(this),this.idTokenSubscription=new kd(this),this.beforeStateQueue=new pS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(e);(!o||o===c)&&(d!=null&&d.user)&&(i=d.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $r(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ae(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}async initializeRecaptchaConfig(){const e=await $p(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Hp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new jp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ls(t){return Ae(t)}class kd{constructor(e){this.auth=e,this.observer=null,this.addObserver=cb(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(t,e){const n=io(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Er(r,e??{}))return i;yt(i,"already-initialized")}return n.initialize({options:e})}function _S(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function wS(t,e,n){const s=Ls(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Vp(e),{host:o,port:c}=yS(e),d=c===null?"":`:${c}`;s.config.emulator={url:`${r}//${o}${d}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||bS()}function Vp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yS(t){const e=Vp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Ad(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Ad(o)}}}function Ad(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}async function vS(t,e){return Ms(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t,e){return Li(t,"POST","/v1/accounts:signInWithPassword",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",Ds(t,e))}async function CS(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends rc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ai(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ai(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Hr(e,s,"signInWithPassword");return Zo(e,i)}else return Zo(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Hr(e,s,"signInWithPassword");return Zo(e,r)}else return Promise.reject(i)});case"emailLink":return ES(e,{email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return vS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return CS(e,{idToken:n,email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e){return Li(t,"POST","/v1/accounts:signInWithIdp",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS="http://localhost";class Wn extends rc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ec(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Wn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:IS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SS(t){const e=Xs(Zs(t)).link,n=e?Xs(Zs(e)).deep_link_id:null,s=Xs(Zs(t)).deep_link_id;return(s?Xs(Zs(s)).link:null)||s||n||e||t}class oc{constructor(e){var n,s,i,r,o,c;const d=Xs(Zs(e)),u=(n=d.apiKey)!==null&&n!==void 0?n:null,f=(s=d.oobCode)!==null&&s!==void 0?s:null,p=TS((i=d.mode)!==null&&i!==void 0?i:null);j(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(r=d.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=d.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=d.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=SS(e);try{return new oc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return Ai._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=oc.parseLink(n);return j(s,"argument-error"),Ai._fromEmailAndCode(e,s.code,s.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends qp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Fi{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return rn.credential(n,s)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Fi{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Fi{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return an.credential(n,s)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(t,e){return Li(t,"POST","/v1/accounts:signUp",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await On._fromIdTokenResponse(e,s,i),o=xd(s);return new jn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=xd(s);return new jn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function xd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Vt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Wr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Wr(e,n,s,i)}}function zp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Wr._fromErrorAndOperation(t,r,e,s):r})}async function kS(t,e,n=!1){const s=await Si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AS(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Si(t,zp(s,i,e,t),n);j(r.idToken,s,"internal-error");const o=sc(r.idToken);j(o,s,"internal-error");const{sub:c}=o;return j(t.uid===c,s,"user-mismatch"),jn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&yt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(t,e,n=!1){const s="signIn",i=await zp(t,s,e),r=await jn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function xS(t,e){return Kp(Ls(t),e)}async function RS(t,e,n){var s;const i=Ls(t),r={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const u=await Hr(i,r,"signUpPassword");o=ea(i,u)}else o=ea(i,r).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const f=await Hr(i,r,"signUpPassword");return ea(i,f)}else return Promise.reject(u)});const c=await o.catch(u=>Promise.reject(u)),d=await jn._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function PS(t,e,n){return xS(Ae(t),Fs.credential(e,n))}function NS(t,e,n,s){return Ae(t).onIdTokenChanged(e,n,s)}function OS(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function DS(t,e,n,s){return Ae(t).onAuthStateChanged(e,n,s)}function MS(t){return Ae(t).signOut()}const jr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jr,"1"),this.storage.removeItem(jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(){const t=je();return ic(t)||wo(t)}const FS=1e3,US=10;class Yp extends Gp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=LS()&&lS(),this.fallbackToPolling=Up(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,d)=>{this.notifyListeners(o,d)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);aS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,US):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},FS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yp.type="LOCAL";const BS=Yp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp extends Gp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qp.type="SESSION";const Jp=Qp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new yo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(o).map(async u=>u(n.origin,r)),d=await $S(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((c,d)=>{const u=ac("",20);i.port1.start();const f=setTimeout(()=>{d(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){const _=p;if(_.data.eventId===u)switch(_.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(_.data.response);break;default:clearTimeout(f),clearTimeout(r),d(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function WS(t){Rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function jS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qS(){return Xp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="firebaseLocalStorageDb",zS=1,Vr="firebaseLocalStorage",eg="fbase_key";class Ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bo(t,e){return t.transaction([Vr],e?"readwrite":"readonly").objectStore(Vr)}function KS(){const t=indexedDB.deleteDatabase(Zp);return new Ui(t).toPromise()}function Ua(){const t=indexedDB.open(Zp,zS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Vr,{keyPath:eg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Vr)?e(s):(s.close(),await KS(),e(await Ua()))})})}async function Rd(t,e,n){const s=bo(t,!0).put({[eg]:e,value:n});return new Ui(s).toPromise()}async function GS(t,e){const n=bo(t,!1).get(e),s=await new Ui(n).toPromise();return s===void 0?null:s.value}function Pd(t,e){const n=bo(t,!0).delete(e);return new Ui(n).toPromise()}const YS=800,QS=3;class tg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ua(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>QS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yo._getInstance(qS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jS(),!this.activeServiceWorker)return;this.sender=new HS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ua();return await Rd(e,jr,"1"),await Pd(e,jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Rd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>GS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=bo(i,!1).getAll();return new Ui(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tg.type="LOCAL";const JS=tg;new Mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t,e){return e?Ut(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends rc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZS(t){return Kp(t.auth,new lc(t),t.bypassAuthState)}function ek(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),AS(n,new lc(t),t.bypassAuthState)}async function tk(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),kS(n,new lc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const d={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZS;case"linkViaPopup":case"linkViaRedirect":return tk;case"reauthViaPopup":case"reauthViaRedirect":return ek;default:yt(this.auth,"internal-error")}}resolve(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new Mi(2e3,1e4);class rs extends ng{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const e=ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nk.get())};e()}}rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk="pendingRedirect",dr=new Map;class ik extends ng{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=dr.get(this.auth._key());if(!e){try{const s=await rk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}dr.set(this.auth._key(),e)}return this.bypassAuthState||dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rk(t,e){const n=lk(e),s=ak(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function ok(t,e){dr.set(t._key(),e)}function ak(t){return Ut(t._redirectPersistence)}function lk(t){return ur(sk,t.config.apiKey,t.name)}async function ck(t,e,n=!1){const s=Ls(t),i=XS(s,e),o=await new ik(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=10*60*1e3;class dk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!sg(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nd(e))}saveEventToCache(e){this.cachedEventUids.add(Nd(e)),this.lastProcessedEventTime=Date.now()}}function Nd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fk(t,e={}){return Ms(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gk=/^https?/;async function mk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fk(t);for(const n of e)try{if(_k(n))return}catch{}yt(t,"unauthorized-domain")}function _k(t){const e=Fa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!gk.test(n))return!1;if(pk.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=new Mi(3e4,6e4);function Od(){const t=Rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yk(t){return new Promise((e,n)=>{var s,i,r;function o(){Od(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Od(),n(xt(t,"network-request-failed"))},timeout:wk.get()})}if(!((i=(s=Rt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Rt().gapi)===null||r===void 0)&&r.load)o();else{const c=uS("iframefcb");return Rt()[c]=()=>{gapi.load?o():n(xt(t,"network-request-failed"))},Wp(`https://apis.google.com/js/api.js?onload=${c}`).catch(d=>n(d))}}).catch(e=>{throw hr=null,e})}let hr=null;function bk(t){return hr=hr||yk(t),hr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=new Mi(5e3,15e3),Ek="__/auth/iframe",Ck="emulator/auth/iframe",Ik={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sk(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nc(e,Ck):`https://${t.config.authDomain}/${Ek}`,s={apiKey:e.apiKey,appName:t.name,v:Vn},i=Tk.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Rs(s).slice(1)}`}async function kk(t){const e=await bk(t),n=Rt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:Sk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ik,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),c=Rt().setTimeout(()=>{r(o)},vk.get());function d(){Rt().clearTimeout(c),i(s)}s.ping(d).then(d,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xk=500,Rk=600,Pk="_blank",Nk="http://localhost";class Dd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ok(t,e,n,s=xk,i=Rk){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const d=Object.assign(Object.assign({},Ak),{width:s.toString(),height:i.toString(),top:r,left:o}),u=je().toLowerCase();n&&(c=Op(u)?Pk:n),Np(u)&&(e=e||Nk,d.scrollbars="yes");const f=Object.entries(d).reduce((_,[y,I])=>`${_}${y}=${I},`,"");if(oS(u)&&c!=="_self")return Dk(e||"",c),new Dd(null);const p=window.open(e||"",c,f);j(p,t,"popup-blocked");try{p.focus()}catch{}return new Dd(p)}function Dk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="__/auth/handler",Lk="emulator/auth/handler",Fk=encodeURIComponent("fac");async function Md(t,e,n,s,i,r){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Vn,eventId:i};if(e instanceof qp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ga(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(r||{}))o[f]=p}if(e instanceof Fi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const d=await t._getAppCheckToken(),u=d?`#${Fk}=${encodeURIComponent(d)}`:"";return`${Uk(t)}?${Rs(c).slice(1)}${u}`}function Uk({config:t}){return t.emulator?nc(t,Lk):`https://${t.authDomain}/${Mk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="webStorageSupport";class Bk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jp,this._completeRedirectFn=ck,this._overrideRedirectResult=ok}async _openPopup(e,n,s,i){var r;Wt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Md(e,n,s,Fa(),i);return Ok(e,o,ac())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Md(e,n,s,Fa(),i);return WS(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Wt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await kk(e),s=new dk(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ta,{type:ta},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ta];o!==void 0&&n(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Up()||ic()||wo()}}const $k=Bk;var Ld="@firebase/auth",Fd="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jk(t){Ln(new gn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const d={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bp(t)},u=new gS(s,i,r,d);return _S(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ln(new gn("auth-internal",e=>{const n=Ls(e.getProvider("auth").getImmediate());return(s=>new Hk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(Ld,Fd,Wk(t)),At(Ld,Fd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=5*60,qk=Uh("authIdTokenMaxAge")||Vk;let Ud=null;const zk=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>qk)return;const i=n==null?void 0:n.token;Ud!==i&&(Ud=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fr(t=dl()){const e=io(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mS(t,{popupRedirectResolver:$k,persistence:[JS,BS,Jp]}),s=Uh("authTokenSyncURL");if(s){const r=zk(s);OS(n,r,()=>r(n.currentUser)),NS(n,o=>r(o))}const i=Mh("auth");return i&&wS(n,`http://${i}`),n}jk("Browser");const Kk={key:0,class:"w-full h-screen flex flex-col items-center justify-center px-4"},Gk={class:"max-w-sm w-full text-gray-600"},Yk=k("h3",{class:"text-gray-800 text-2xl font-bold sm:text-3xl"},"Sign up",-1),Qk=k("label",{class:"font-medium"}," Email ",-1),Jk=k("label",{class:"font-medium"}," Password ",-1),Xk=k("button",{class:"w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"}," Create account ",-1),Zk={key:1,class:"w-full h-screen flex flex-col items-center justify-center px-4"},eA={class:"max-w-sm w-full text-gray-600"},tA=k("h3",{class:"text-gray-800 text-2xl font-bold sm:text-3xl"},"Login",-1),nA=k("label",{class:"font-medium"}," Email ",-1),sA=k("label",{class:"font-medium"}," Password ",-1),iA=k("button",{class:"w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"}," Login ",-1),rA={__name:"Login",emits:["Login"],setup(t,{emit:e}){const n=we(""),s=we(""),i=we(!1),r=we(!1);nl(()=>{DS(fr(),u=>{u?(r.value=!0,e("Login",r)):r.value=!1})});const o=async u=>{u.preventDefault();try{await RS(fr(),n.value,s.value)}catch(f){kn.fire({icon:"error",title:"Oops...",text:`${f.code}!`})}},c=async u=>{u.preventDefault();try{await PS(fr(),n.value,s.value)}catch(f){kn.fire({icon:"error",title:"Oops...",text:`${f.code}!`})}},d=()=>{i.value=!i.value,s.value="",n.value=""};return(u,f)=>(Me(),Be(Xe,null,[i.value?xn("",!0):(Me(),Be("main",Kk,[k("div",Gk,[k("div",{class:"text-center"},[k("div",{class:"mt-5 space-y-2"},[Yk,k("p",{class:""},[gi(" Already have an account? "),k("button",{onClick:d,class:"font-medium text-indigo-600 hover:text-indigo-500"}," Log in ")])])]),k("form",{onSubmit:o,class:"mt-8 space-y-5"},[k("div",null,[Qk,Dt(k("input",{type:"email","onUpdate:modelValue":f[0]||(f[0]=p=>n.value=p),placeholder:"Email Address",required:"",class:"w-full border-black mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"},null,512),[[Mt,n.value]])]),k("div",null,[Jk,Dt(k("input",{"onUpdate:modelValue":f[1]||(f[1]=p=>s.value=p),type:"password",placeholder:"Password",required:"",class:"w-full border-black mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"},null,512),[[Mt,s.value]])]),Xk],32)])])),i.value?(Me(),Be("main",Zk,[k("div",eA,[k("div",{class:"text-center"},[k("div",{class:"mt-5 space-y-2"},[tA,k("p",{class:""},[gi(" new to the service? "),k("button",{onClick:d,class:"font-medium text-indigo-600 hover:text-indigo-500"}," signup! ")])])]),k("form",{onSubmit:c,class:"mt-8 space-y-5"},[k("div",null,[nA,Dt(k("input",{type:"email",placeholder:"Email Address","onUpdate:modelValue":f[2]||(f[2]=p=>n.value=p),required:"",class:"w-full border-black mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"},null,512),[[Mt,n.value]])]),k("div",null,[sA,Dt(k("input",{"onUpdate:modelValue":f[3]||(f[3]=p=>s.value=p),type:"password",placeholder:"Password",required:"",class:"w-full border-black mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"},null,512),[[Mt,s.value]])]),iA],32)])])):xn("",!0)],64))}},oA={key:0},aA={key:1},lA={__name:"App",setup(t){const e=we(!1),n=()=>{MS(fr()).then(()=>{e.value=!1})};return(s,i)=>(Me(),Be(Xe,null,[e.value?xn("",!0):(Me(),Be("div",oA,[tt(rA,{onLogin:i[0]||(i[0]=r=>e.value=r.value)})])),e.value?(Me(),Be("div",aA,[k("button",{class:"ml-auto w-fit block btn bg-slate-600 mt-5",onClick:n},"Sign Out"),tt(JI),tt($T)])):xn("",!0)],64))}};Wy(lA).mount("#app");
