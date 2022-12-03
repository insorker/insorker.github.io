(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function Xi(e,n){const t=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)t[r[o]]=!0;return n?o=>!!t[o.toLowerCase()]:o=>!!t[o]}function Qi(e){if(te(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],o=Re(r)?Bd(r):Qi(r);if(o)for(const i in o)n[i]=o[i]}return n}else{if(Re(e))return e;if(ke(e))return e}}const Dd=/;(?![^(]*\))/g,Fd=/:([^]+)/,Pd=/\/\*.*?\*\//gs;function Bd(e){const n={};return e.replace(Pd,"").split(Dd).forEach(t=>{if(t){const r=t.split(Fd);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Ji(e){let n="";if(Re(e))n=e;else if(te(e))for(let t=0;t<e.length;t++){const r=Ji(e[t]);r&&(n+=r+" ")}else if(ke(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const qd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ud=Xi(qd);function Wl(e){return!!e||e===""}function zd(e,n){if(e.length!==n.length)return!1;let t=!0;for(let r=0;t&&r<e.length;r++)t=zr(e[r],n[r]);return t}function zr(e,n){if(e===n)return!0;let t=tc(e),r=tc(n);if(t||r)return t&&r?e.getTime()===n.getTime():!1;if(t=Pt(e),r=Pt(n),t||r)return e===n;if(t=te(e),r=te(n),t||r)return t&&r?zd(e,n):!1;if(t=ke(e),r=ke(n),t||r){if(!t||!r)return!1;const o=Object.keys(e).length,i=Object.keys(n).length;if(o!==i)return!1;for(const s in e){const c=e.hasOwnProperty(s),a=n.hasOwnProperty(s);if(c&&!a||!c&&a||!zr(e[s],n[s]))return!1}}return String(e)===String(n)}function Kl(e,n){return e.findIndex(t=>zr(t,n))}const He=e=>Re(e)?e:e==null?"":te(e)||ke(e)&&(e.toString===Vl||!ie(e.toString))?JSON.stringify(e,Zl,2):String(e),Zl=(e,n)=>n&&n.__v_isRef?Zl(e,n.value):ft(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,o])=>(t[`${r} =>`]=o,t),{})}:Hr(n)?{[`Set(${n.size})`]:[...n.values()]}:ke(n)&&!te(n)&&!Yl(n)?String(n):n,we={},ut=[],tn=()=>{},$d=()=>!1,Hd=/^on[^a-z]/,$r=e=>Hd.test(e),es=e=>e.startsWith("onUpdate:"),Be=Object.assign,ns=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Gd=Object.prototype.hasOwnProperty,de=(e,n)=>Gd.call(e,n),te=Array.isArray,ft=e=>Qt(e)==="[object Map]",Hr=e=>Qt(e)==="[object Set]",tc=e=>Qt(e)==="[object Date]",ie=e=>typeof e=="function",Re=e=>typeof e=="string",Pt=e=>typeof e=="symbol",ke=e=>e!==null&&typeof e=="object",jl=e=>ke(e)&&ie(e.then)&&ie(e.catch),Vl=Object.prototype.toString,Qt=e=>Vl.call(e),Wd=e=>Qt(e).slice(8,-1),Yl=e=>Qt(e)==="[object Object]",ts=e=>Re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,vr=Xi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gr=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Kd=/-(\w)/g,mn=Gr(e=>e.replace(Kd,(n,t)=>t?t.toUpperCase():"")),Zd=/\B([A-Z])/g,xt=Gr(e=>e.replace(Zd,"-$1").toLowerCase()),Wr=Gr(e=>e.charAt(0).toUpperCase()+e.slice(1)),_o=Gr(e=>e?`on${Wr(e)}`:""),Bt=(e,n)=>!Object.is(e,n),yr=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},Tr=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},Xl=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let rc;const jd=()=>rc||(rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let un;class Vd{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=un,!n&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}run(n){if(this.active){const t=un;try{return un=this,n()}finally{un=t}}}on(){un=this}off(){un=this.parent}stop(n){if(this.active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function Yd(e,n=un){n&&n.active&&n.effects.push(e)}const rs=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Ql=e=>(e.w&In)>0,Jl=e=>(e.n&In)>0,Xd=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=In},Qd=e=>{const{deps:n}=e;if(n.length){let t=0;for(let r=0;r<n.length;r++){const o=n[r];Ql(o)&&!Jl(o)?o.delete(e):n[t++]=o,o.w&=~In,o.n&=~In}n.length=t}},Si=new WeakMap;let Ot=0,In=1;const Ti=30;let en;const jn=Symbol(""),Ni=Symbol("");class os{constructor(n,t=null,r){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Yd(this,r)}run(){if(!this.active)return this.fn();let n=en,t=Nn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=en,en=this,Nn=!0,In=1<<++Ot,Ot<=Ti?Xd(this):oc(this),this.fn()}finally{Ot<=Ti&&Qd(this),In=1<<--Ot,en=this.parent,Nn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){en===this?this.deferStop=!0:this.active&&(oc(this),this.onStop&&this.onStop(),this.active=!1)}}function oc(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let Nn=!0;const eu=[];function kt(){eu.push(Nn),Nn=!1}function wt(){const e=eu.pop();Nn=e===void 0?!0:e}function We(e,n,t){if(Nn&&en){let r=Si.get(e);r||Si.set(e,r=new Map);let o=r.get(t);o||r.set(t,o=rs()),nu(o)}}function nu(e,n){let t=!1;Ot<=Ti?Jl(e)||(e.n|=In,t=!Ql(e)):t=!e.has(en),t&&(e.add(en),en.deps.push(e))}function xn(e,n,t,r,o,i){const s=Si.get(e);if(!s)return;let c=[];if(n==="clear")c=[...s.values()];else if(t==="length"&&te(e)){const a=Xl(r);s.forEach((l,u)=>{(u==="length"||u>=a)&&c.push(l)})}else switch(t!==void 0&&c.push(s.get(t)),n){case"add":te(e)?ts(t)&&c.push(s.get("length")):(c.push(s.get(jn)),ft(e)&&c.push(s.get(Ni)));break;case"delete":te(e)||(c.push(s.get(jn)),ft(e)&&c.push(s.get(Ni)));break;case"set":ft(e)&&c.push(s.get(jn));break}if(c.length===1)c[0]&&Ri(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);Ri(rs(a))}}function Ri(e,n){const t=te(e)?e:[...e];for(const r of t)r.computed&&ic(r);for(const r of t)r.computed||ic(r)}function ic(e,n){(e!==en||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Jd=Xi("__proto__,__v_isRef,__isVue"),tu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pt)),ep=is(),np=is(!1,!0),tp=is(!0),sc=rp();function rp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const r=he(this);for(let i=0,s=this.length;i<s;i++)We(r,"get",i+"");const o=r[n](...t);return o===-1||o===!1?r[n](...t.map(he)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){kt();const r=he(this)[n].apply(this,t);return wt(),r}}),e}function is(e=!1,n=!1){return function(r,o,i){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&i===(e?n?Ep:cu:n?su:iu).get(r))return r;const s=te(r);if(!e&&s&&de(sc,o))return Reflect.get(sc,o,i);const c=Reflect.get(r,o,i);return(Pt(o)?tu.has(o):Jd(o))||(e||We(r,"get",o),n)?c:De(c)?s&&ts(o)?c:c.value:ke(c)?e?au(c):Jt(c):c}}const op=ru(),ip=ru(!0);function ru(e=!1){return function(t,r,o,i){let s=t[r];if(mt(s)&&De(s)&&!De(o))return!1;if(!e&&(!Nr(o)&&!mt(o)&&(s=he(s),o=he(o)),!te(t)&&De(s)&&!De(o)))return s.value=o,!0;const c=te(t)&&ts(r)?Number(r)<t.length:de(t,r),a=Reflect.set(t,r,o,i);return t===he(i)&&(c?Bt(o,s)&&xn(t,"set",r,o):xn(t,"add",r,o)),a}}function sp(e,n){const t=de(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&t&&xn(e,"delete",n,void 0),r}function cp(e,n){const t=Reflect.has(e,n);return(!Pt(n)||!tu.has(n))&&We(e,"has",n),t}function ap(e){return We(e,"iterate",te(e)?"length":jn),Reflect.ownKeys(e)}const ou={get:ep,set:op,deleteProperty:sp,has:cp,ownKeys:ap},lp={get:tp,set(e,n){return!0},deleteProperty(e,n){return!0}},up=Be({},ou,{get:np,set:ip}),ss=e=>e,Kr=e=>Reflect.getPrototypeOf(e);function lr(e,n,t=!1,r=!1){e=e.__v_raw;const o=he(e),i=he(n);t||(n!==i&&We(o,"get",n),We(o,"get",i));const{has:s}=Kr(o),c=r?ss:t?ls:qt;if(s.call(o,n))return c(e.get(n));if(s.call(o,i))return c(e.get(i));e!==o&&e.get(n)}function ur(e,n=!1){const t=this.__v_raw,r=he(t),o=he(e);return n||(e!==o&&We(r,"has",e),We(r,"has",o)),e===o?t.has(e):t.has(e)||t.has(o)}function fr(e,n=!1){return e=e.__v_raw,!n&&We(he(e),"iterate",jn),Reflect.get(e,"size",e)}function cc(e){e=he(e);const n=he(this);return Kr(n).has.call(n,e)||(n.add(e),xn(n,"add",e,e)),this}function ac(e,n){n=he(n);const t=he(this),{has:r,get:o}=Kr(t);let i=r.call(t,e);i||(e=he(e),i=r.call(t,e));const s=o.call(t,e);return t.set(e,n),i?Bt(n,s)&&xn(t,"set",e,n):xn(t,"add",e,n),this}function lc(e){const n=he(this),{has:t,get:r}=Kr(n);let o=t.call(n,e);o||(e=he(e),o=t.call(n,e)),r&&r.call(n,e);const i=n.delete(e);return o&&xn(n,"delete",e,void 0),i}function uc(){const e=he(this),n=e.size!==0,t=e.clear();return n&&xn(e,"clear",void 0,void 0),t}function dr(e,n){return function(r,o){const i=this,s=i.__v_raw,c=he(s),a=n?ss:e?ls:qt;return!e&&We(c,"iterate",jn),s.forEach((l,u)=>r.call(o,a(l),a(u),i))}}function pr(e,n,t){return function(...r){const o=this.__v_raw,i=he(o),s=ft(i),c=e==="entries"||e===Symbol.iterator&&s,a=e==="keys"&&s,l=o[e](...r),u=t?ss:n?ls:qt;return!n&&We(i,"iterate",a?Ni:jn),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:c?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function wn(e){return function(...n){return e==="delete"?!1:this}}function fp(){const e={get(i){return lr(this,i)},get size(){return fr(this)},has:ur,add:cc,set:ac,delete:lc,clear:uc,forEach:dr(!1,!1)},n={get(i){return lr(this,i,!1,!0)},get size(){return fr(this)},has:ur,add:cc,set:ac,delete:lc,clear:uc,forEach:dr(!1,!0)},t={get(i){return lr(this,i,!0)},get size(){return fr(this,!0)},has(i){return ur.call(this,i,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:dr(!0,!1)},r={get(i){return lr(this,i,!0,!0)},get size(){return fr(this,!0)},has(i){return ur.call(this,i,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=pr(i,!1,!1),t[i]=pr(i,!0,!1),n[i]=pr(i,!1,!0),r[i]=pr(i,!0,!0)}),[e,t,n,r]}const[dp,pp,hp,gp]=fp();function cs(e,n){const t=n?e?gp:hp:e?pp:dp;return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(de(t,o)&&o in r?t:r,o,i)}const mp={get:cs(!1,!1)},bp={get:cs(!1,!0)},_p={get:cs(!0,!1)},iu=new WeakMap,su=new WeakMap,cu=new WeakMap,Ep=new WeakMap;function vp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yp(e){return e.__v_skip||!Object.isExtensible(e)?0:vp(Wd(e))}function Jt(e){return mt(e)?e:as(e,!1,ou,mp,iu)}function xp(e){return as(e,!1,up,bp,su)}function au(e){return as(e,!0,lp,_p,cu)}function as(e,n,t,r,o){if(!ke(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const s=yp(e);if(s===0)return e;const c=new Proxy(e,s===2?r:t);return o.set(e,c),c}function dt(e){return mt(e)?dt(e.__v_raw):!!(e&&e.__v_isReactive)}function mt(e){return!!(e&&e.__v_isReadonly)}function Nr(e){return!!(e&&e.__v_isShallow)}function lu(e){return dt(e)||mt(e)}function he(e){const n=e&&e.__v_raw;return n?he(n):e}function uu(e){return Tr(e,"__v_skip",!0),e}const qt=e=>ke(e)?Jt(e):e,ls=e=>ke(e)?au(e):e;function fu(e){Nn&&en&&(e=he(e),nu(e.dep||(e.dep=rs())))}function du(e,n){e=he(e),e.dep&&Ri(e.dep)}function De(e){return!!(e&&e.__v_isRef===!0)}function Dn(e){return pu(e,!1)}function kp(e){return pu(e,!0)}function pu(e,n){return De(e)?e:new wp(e,n)}class wp{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:he(n),this._value=t?n:qt(n)}get value(){return fu(this),this._value}set value(n){const t=this.__v_isShallow||Nr(n)||mt(n);n=t?n:he(n),Bt(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:qt(n),du(this))}}function Ye(e){return De(e)?e.value:e}const Ap={get:(e,n,t)=>Ye(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const o=e[n];return De(o)&&!De(t)?(o.value=t,!0):Reflect.set(e,n,t,r)}};function hu(e){return dt(e)?e:new Proxy(e,Ap)}var gu;class Cp{constructor(n,t,r,o){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[gu]=!1,this._dirty=!0,this.effect=new os(n,()=>{this._dirty||(this._dirty=!0,du(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const n=he(this);return fu(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}gu="__v_isReadonly";function Sp(e,n,t=!1){let r,o;const i=ie(e);return i?(r=e,o=tn):(r=e.get,o=e.set),new Cp(r,o,i||!o,t)}function Rn(e,n,t,r){let o;try{o=r?e(...r):e()}catch(i){Zr(i,n,t)}return o}function Xe(e,n,t,r){if(ie(e)){const i=Rn(e,n,t,r);return i&&jl(i)&&i.catch(s=>{Zr(s,n,t)}),i}const o=[];for(let i=0;i<e.length;i++)o.push(Xe(e[i],n,t,r));return o}function Zr(e,n,t,r=!0){const o=n?n.vnode:null;if(n){let i=n.parent;const s=n.proxy,c=t;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,s,c)===!1)return}i=i.parent}const a=n.appContext.config.errorHandler;if(a){Rn(a,null,10,[e,s,c]);return}}Tp(e,t,o,r)}function Tp(e,n,t,r=!0){console.error(e)}let Ut=!1,Oi=!1;const Pe=[];let dn=0;const pt=[];let vn=null,zn=0;const mu=Promise.resolve();let us=null;function fs(e){const n=us||mu;return e?n.then(this?e.bind(this):e):n}function Np(e){let n=dn+1,t=Pe.length;for(;n<t;){const r=n+t>>>1;zt(Pe[r])<e?n=r+1:t=r}return n}function ds(e){(!Pe.length||!Pe.includes(e,Ut&&e.allowRecurse?dn+1:dn))&&(e.id==null?Pe.push(e):Pe.splice(Np(e.id),0,e),bu())}function bu(){!Ut&&!Oi&&(Oi=!0,us=mu.then(Eu))}function Rp(e){const n=Pe.indexOf(e);n>dn&&Pe.splice(n,1)}function Op(e){te(e)?pt.push(...e):(!vn||!vn.includes(e,e.allowRecurse?zn+1:zn))&&pt.push(e),bu()}function fc(e,n=Ut?dn+1:0){for(;n<Pe.length;n++){const t=Pe[n];t&&t.pre&&(Pe.splice(n,1),n--,t())}}function _u(e){if(pt.length){const n=[...new Set(pt)];if(pt.length=0,vn){vn.push(...n);return}for(vn=n,vn.sort((t,r)=>zt(t)-zt(r)),zn=0;zn<vn.length;zn++)vn[zn]();vn=null,zn=0}}const zt=e=>e.id==null?1/0:e.id,Ip=(e,n)=>{const t=zt(e)-zt(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function Eu(e){Oi=!1,Ut=!0,Pe.sort(Ip);const n=tn;try{for(dn=0;dn<Pe.length;dn++){const t=Pe[dn];t&&t.active!==!1&&Rn(t,null,14)}}finally{dn=0,Pe.length=0,_u(),Ut=!1,us=null,(Pe.length||pt.length)&&Eu()}}function Lp(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||we;let o=t;const i=n.startsWith("update:"),s=i&&n.slice(7);if(s&&s in r){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:f,trim:d}=r[u]||we;d&&(o=t.map(p=>Re(p)?p.trim():p)),f&&(o=t.map(Xl))}let c,a=r[c=_o(n)]||r[c=_o(mn(n))];!a&&i&&(a=r[c=_o(xt(n))]),a&&Xe(a,e,6,o);const l=r[c+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Xe(l,e,6,o)}}function vu(e,n,t=!1){const r=n.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let s={},c=!1;if(!ie(e)){const a=l=>{const u=vu(l,n,!0);u&&(c=!0,Be(s,u))};!t&&n.mixins.length&&n.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!c?(ke(e)&&r.set(e,null),null):(te(i)?i.forEach(a=>s[a]=null):Be(s,i),ke(e)&&r.set(e,s),s)}function jr(e,n){return!e||!$r(n)?!1:(n=n.slice(2).replace(/Once$/,""),de(e,n[0].toLowerCase()+n.slice(1))||de(e,xt(n))||de(e,n))}let Ge=null,Vr=null;function Rr(e){const n=Ge;return Ge=e,Vr=e&&e.type.__scopeId||null,n}function ps(e){Vr=e}function hs(){Vr=null}function $t(e,n=Ge,t){if(!n||e._n)return e;const r=(...o)=>{r._d&&yc(-1);const i=Rr(n);let s;try{s=e(...o)}finally{Rr(i),r._d&&yc(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Eo(e){const{type:n,vnode:t,proxy:r,withProxy:o,props:i,propsOptions:[s],slots:c,attrs:a,emit:l,render:u,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:m}=e;let E,_;const v=Rr(e);try{if(t.shapeFlag&4){const C=o||r;E=fn(u.call(C,C,f,i,p,d,g)),_=a}else{const C=n;E=fn(C.length>1?C(i,{attrs:a,slots:c,emit:l}):C(i,null)),_=n.props?a:Mp(a)}}catch(C){Lt.length=0,Zr(C,e,1),E=xe(on)}let y=E;if(_&&m!==!1){const C=Object.keys(_),{shapeFlag:P}=y;C.length&&P&7&&(s&&C.some(es)&&(_=Dp(_,s)),y=Ln(y,_))}return t.dirs&&(y=Ln(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),E=y,Rr(v),E}const Mp=e=>{let n;for(const t in e)(t==="class"||t==="style"||$r(t))&&((n||(n={}))[t]=e[t]);return n},Dp=(e,n)=>{const t={};for(const r in e)(!es(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function Fp(e,n,t){const{props:r,children:o,component:i}=e,{props:s,children:c,patchFlag:a}=n,l=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return r?dc(r,s,l):!!s;if(a&8){const u=n.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(s[d]!==r[d]&&!jr(l,d))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:r===s?!1:r?s?dc(r,s,l):!0:!!s;return!1}function dc(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(n[i]!==e[i]&&!jr(t,i))return!0}return!1}function Pp({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Bp=e=>e.__isSuspense;function qp(e,n){n&&n.pendingBranch?te(e)?n.effects.push(...e):n.effects.push(e):Op(e)}function xr(e,n){if(Oe){let t=Oe.provides;const r=Oe.parent&&Oe.parent.provides;r===t&&(t=Oe.provides=Object.create(r)),t[e]=n}}function rn(e,n,t=!1){const r=Oe||Ge;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return t&&ie(n)?n.call(r.proxy):n}}function Up(e,n){return gs(e,null,n)}const hr={};function ht(e,n,t){return gs(e,n,t)}function gs(e,n,{immediate:t,deep:r,flush:o,onTrack:i,onTrigger:s}=we){const c=Oe;let a,l=!1,u=!1;if(De(e)?(a=()=>e.value,l=Nr(e)):dt(e)?(a=()=>e,r=!0):te(e)?(u=!0,l=e.some(y=>dt(y)||Nr(y)),a=()=>e.map(y=>{if(De(y))return y.value;if(dt(y))return Wn(y);if(ie(y))return Rn(y,c,2)})):ie(e)?n?a=()=>Rn(e,c,2):a=()=>{if(!(c&&c.isUnmounted))return f&&f(),Xe(e,c,3,[d])}:a=tn,n&&r){const y=a;a=()=>Wn(y())}let f,d=y=>{f=_.onStop=()=>{Rn(y,c,4)}},p;if(Gt)if(d=tn,n?t&&Xe(n,c,3,[a(),u?[]:void 0,d]):a(),o==="sync"){const y=Dh();p=y.__watcherHandles||(y.__watcherHandles=[])}else return tn;let g=u?new Array(e.length).fill(hr):hr;const m=()=>{if(!!_.active)if(n){const y=_.run();(r||l||(u?y.some((C,P)=>Bt(C,g[P])):Bt(y,g)))&&(f&&f(),Xe(n,c,3,[y,g===hr?void 0:u&&g[0]===hr?[]:g,d]),g=y)}else _.run()};m.allowRecurse=!!n;let E;o==="sync"?E=m:o==="post"?E=()=>ze(m,c&&c.suspense):(m.pre=!0,c&&(m.id=c.uid),E=()=>ds(m));const _=new os(a,E);n?t?m():g=_.run():o==="post"?ze(_.run.bind(_),c&&c.suspense):_.run();const v=()=>{_.stop(),c&&c.scope&&ns(c.scope.effects,_)};return p&&p.push(v),v}function zp(e,n,t){const r=this.proxy,o=Re(e)?e.includes(".")?yu(r,e):()=>r[e]:e.bind(r,r);let i;ie(n)?i=n:(i=n.handler,t=n);const s=Oe;bt(this);const c=gs(o,i.bind(r),t);return s?bt(s):Vn(),c}function yu(e,n){const t=n.split(".");return()=>{let r=e;for(let o=0;o<t.length&&r;o++)r=r[t[o]];return r}}function Wn(e,n){if(!ke(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),De(e))Wn(e.value,n);else if(te(e))for(let t=0;t<e.length;t++)Wn(e[t],n);else if(Hr(e)||ft(e))e.forEach(t=>{Wn(t,n)});else if(Yl(e))for(const t in e)Wn(e[t],n);return e}function $p(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bs(()=>{e.isMounted=!0}),_s(()=>{e.isUnmounting=!0}),e}const je=[Function,Array],Hp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:je,onEnter:je,onAfterEnter:je,onEnterCancelled:je,onBeforeLeave:je,onLeave:je,onAfterLeave:je,onLeaveCancelled:je,onBeforeAppear:je,onAppear:je,onAfterAppear:je,onAppearCancelled:je},setup(e,{slots:n}){const t=ws(),r=$p();let o;return()=>{const i=n.default&&ku(n.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){for(const m of i)if(m.type!==on){s=m;break}}const c=he(e),{mode:a}=c;if(r.isLeaving)return vo(s);const l=pc(s);if(!l)return vo(s);const u=Ii(l,c,r,t);Li(l,u);const f=t.subTree,d=f&&pc(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const m=g();o===void 0?o=m:m!==o&&(o=m,p=!0)}if(d&&d.type!==on&&(!$n(l,d)||p)){const m=Ii(d,c,r,t);if(Li(d,m),a==="out-in")return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,t.update.active!==!1&&t.update()},vo(s);a==="in-out"&&l.type!==on&&(m.delayLeave=(E,_,v)=>{const y=xu(r,d);y[String(d.key)]=d,E._leaveCb=()=>{_(),E._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=v})}return s}}},Gp=Hp;function xu(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function Ii(e,n,t,r){const{appear:o,mode:i,persisted:s=!1,onBeforeEnter:c,onEnter:a,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:E,onAfterAppear:_,onAppearCancelled:v}=n,y=String(e.key),C=xu(t,e),P=(R,Y)=>{R&&Xe(R,r,9,Y)},N=(R,Y)=>{const z=Y[1];P(R,Y),te(R)?R.every(j=>j.length<=1)&&z():R.length<=1&&z()},G={mode:i,persisted:s,beforeEnter(R){let Y=c;if(!t.isMounted)if(o)Y=m||c;else return;R._leaveCb&&R._leaveCb(!0);const z=C[y];z&&$n(e,z)&&z.el._leaveCb&&z.el._leaveCb(),P(Y,[R])},enter(R){let Y=a,z=l,j=u;if(!t.isMounted)if(o)Y=E||a,z=_||l,j=v||u;else return;let ae=!1;const ue=R._enterCb=I=>{ae||(ae=!0,I?P(j,[R]):P(z,[R]),G.delayedLeave&&G.delayedLeave(),R._enterCb=void 0)};Y?N(Y,[R,ue]):ue()},leave(R,Y){const z=String(e.key);if(R._enterCb&&R._enterCb(!0),t.isUnmounting)return Y();P(f,[R]);let j=!1;const ae=R._leaveCb=ue=>{j||(j=!0,Y(),ue?P(g,[R]):P(p,[R]),R._leaveCb=void 0,C[z]===e&&delete C[z])};C[z]=e,d?N(d,[R,ae]):ae()},clone(R){return Ii(R,n,t,r)}};return G}function vo(e){if(Yr(e))return e=Ln(e),e.children=null,e}function pc(e){return Yr(e)?e.children?e.children[0]:void 0:e}function Li(e,n){e.shapeFlag&6&&e.component?Li(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function ku(e,n=!1,t){let r=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const c=t==null?s.key:String(t)+String(s.key!=null?s.key:i);s.type===Te?(s.patchFlag&128&&o++,r=r.concat(ku(s.children,n,c))):(n||s.type!==on)&&r.push(c!=null?Ln(s,{key:c}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ms(e){return ie(e)?{setup:e,name:e.name}:e}const kr=e=>!!e.type.__asyncLoader,Yr=e=>e.type.__isKeepAlive;function Wp(e,n){wu(e,"a",n)}function Kp(e,n){wu(e,"da",n)}function wu(e,n,t=Oe){const r=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Xr(n,r,t),t){let o=t.parent;for(;o&&o.parent;)Yr(o.parent.vnode)&&Zp(r,n,t,o),o=o.parent}}function Zp(e,n,t,r){const o=Xr(n,e,r,!0);Au(()=>{ns(r[n],o)},t)}function Xr(e,n,t=Oe,r=!1){if(t){const o=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...s)=>{if(t.isUnmounted)return;kt(),bt(t);const c=Xe(n,t,e,s);return Vn(),wt(),c});return r?o.unshift(i):o.push(i),i}}const kn=e=>(n,t=Oe)=>(!Gt||e==="sp")&&Xr(e,(...r)=>n(...r),t),jp=kn("bm"),bs=kn("m"),Vp=kn("bu"),Yp=kn("u"),_s=kn("bum"),Au=kn("um"),Xp=kn("sp"),Qp=kn("rtg"),Jp=kn("rtc");function eh(e,n=Oe){Xr("ec",e,n)}function nh(e,n){const t=Ge;if(t===null)return e;const r=no(t)||t.proxy,o=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[s,c,a,l=we]=n[i];s&&(ie(s)&&(s={mounted:s,updated:s}),s.deep&&Wn(c),o.push({dir:s,instance:r,value:c,oldValue:void 0,arg:a,modifiers:l}))}return e}function Pn(e,n,t,r){const o=e.dirs,i=n&&n.dirs;for(let s=0;s<o.length;s++){const c=o[s];i&&(c.oldValue=i[s].value);let a=c.dir[r];a&&(kt(),Xe(a,t,8,[e.el,c,e,n]),wt())}}const Cu="components";function Qr(e,n){return rh(Cu,e,!0,n)||e}const th=Symbol();function rh(e,n,t=!0,r=!1){const o=Ge||Oe;if(o){const i=o.type;if(e===Cu){const c=Ih(i,!1);if(c&&(c===n||c===mn(n)||c===Wr(mn(n))))return i}const s=hc(o[e]||i[e],n)||hc(o.appContext[e],n);return!s&&r?i:s}}function hc(e,n){return e&&(e[n]||e[mn(n)]||e[Wr(mn(n))])}function er(e,n,t,r){let o;const i=t&&t[r];if(te(e)||Re(e)){o=new Array(e.length);for(let s=0,c=e.length;s<c;s++)o[s]=n(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=n(s+1,s,void 0,i&&i[s])}else if(ke(e))if(e[Symbol.iterator])o=Array.from(e,(s,c)=>n(s,c,void 0,i&&i[c]));else{const s=Object.keys(e);o=new Array(s.length);for(let c=0,a=s.length;c<a;c++){const l=s[c];o[c]=n(e[l],l,c,i&&i[c])}}else o=[];return t&&(t[r]=o),o}const Mi=e=>e?Pu(e)?no(e)||e.proxy:Mi(e.parent):null,It=Be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mi(e.parent),$root:e=>Mi(e.root),$emit:e=>e.emit,$options:e=>Es(e),$forceUpdate:e=>e.f||(e.f=()=>ds(e.update)),$nextTick:e=>e.n||(e.n=fs.bind(e.proxy)),$watch:e=>zp.bind(e)}),yo=(e,n)=>e!==we&&!e.__isScriptSetup&&de(e,n),oh={get({_:e},n){const{ctx:t,setupState:r,data:o,props:i,accessCache:s,type:c,appContext:a}=e;let l;if(n[0]!=="$"){const p=s[n];if(p!==void 0)switch(p){case 1:return r[n];case 2:return o[n];case 4:return t[n];case 3:return i[n]}else{if(yo(r,n))return s[n]=1,r[n];if(o!==we&&de(o,n))return s[n]=2,o[n];if((l=e.propsOptions[0])&&de(l,n))return s[n]=3,i[n];if(t!==we&&de(t,n))return s[n]=4,t[n];Di&&(s[n]=0)}}const u=It[n];let f,d;if(u)return n==="$attrs"&&We(e,"get",n),u(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(t!==we&&de(t,n))return s[n]=4,t[n];if(d=a.config.globalProperties,de(d,n))return d[n]},set({_:e},n,t){const{data:r,setupState:o,ctx:i}=e;return yo(o,n)?(o[n]=t,!0):r!==we&&de(r,n)?(r[n]=t,!0):de(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:o,propsOptions:i}},s){let c;return!!t[s]||e!==we&&de(e,s)||yo(n,s)||(c=i[0])&&de(c,s)||de(r,s)||de(It,s)||de(o.config.globalProperties,s)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:de(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let Di=!0;function ih(e){const n=Es(e),t=e.proxy,r=e.ctx;Di=!1,n.beforeCreate&&gc(n.beforeCreate,e,"bc");const{data:o,computed:i,methods:s,watch:c,provide:a,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:E,beforeDestroy:_,beforeUnmount:v,destroyed:y,unmounted:C,render:P,renderTracked:N,renderTriggered:G,errorCaptured:R,serverPrefetch:Y,expose:z,inheritAttrs:j,components:ae,directives:ue,filters:I}=n;if(l&&sh(l,r,null,e.appContext.config.unwrapInjectedRef),s)for(const B in s){const $=s[B];ie($)&&(r[B]=$.bind(t))}if(o){const B=o.call(t,t);ke(B)&&(e.data=Jt(B))}if(Di=!0,i)for(const B in i){const $=i[B],oe=ie($)?$.bind(t,t):ie($.get)?$.get.bind(t,t):tn,fe=!ie($)&&ie($.set)?$.set.bind(t):tn,pe=Ve({get:oe,set:fe});Object.defineProperty(r,B,{enumerable:!0,configurable:!0,get:()=>pe.value,set:me=>pe.value=me})}if(c)for(const B in c)Su(c[B],r,t,B);if(a){const B=ie(a)?a.call(t):a;Reflect.ownKeys(B).forEach($=>{xr($,B[$])})}u&&gc(u,e,"c");function x(B,$){te($)?$.forEach(oe=>B(oe.bind(t))):$&&B($.bind(t))}if(x(jp,f),x(bs,d),x(Vp,p),x(Yp,g),x(Wp,m),x(Kp,E),x(eh,R),x(Jp,N),x(Qp,G),x(_s,v),x(Au,C),x(Xp,Y),te(z))if(z.length){const B=e.exposed||(e.exposed={});z.forEach($=>{Object.defineProperty(B,$,{get:()=>t[$],set:oe=>t[$]=oe})})}else e.exposed||(e.exposed={});P&&e.render===tn&&(e.render=P),j!=null&&(e.inheritAttrs=j),ae&&(e.components=ae),ue&&(e.directives=ue)}function sh(e,n,t=tn,r=!1){te(e)&&(e=Fi(e));for(const o in e){const i=e[o];let s;ke(i)?"default"in i?s=rn(i.from||o,i.default,!0):s=rn(i.from||o):s=rn(i),De(s)&&r?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:c=>s.value=c}):n[o]=s}}function gc(e,n,t){Xe(te(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Su(e,n,t,r){const o=r.includes(".")?yu(t,r):()=>t[r];if(Re(e)){const i=n[e];ie(i)&&ht(o,i)}else if(ie(e))ht(o,e.bind(t));else if(ke(e))if(te(e))e.forEach(i=>Su(i,n,t,r));else{const i=ie(e.handler)?e.handler.bind(t):n[e.handler];ie(i)&&ht(o,i,e)}}function Es(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,c=i.get(n);let a;return c?a=c:!o.length&&!t&&!r?a=n:(a={},o.length&&o.forEach(l=>Or(a,l,s,!0)),Or(a,n,s)),ke(n)&&i.set(n,a),a}function Or(e,n,t,r=!1){const{mixins:o,extends:i}=n;i&&Or(e,i,t,!0),o&&o.forEach(s=>Or(e,s,t,!0));for(const s in n)if(!(r&&s==="expose")){const c=ch[s]||t&&t[s];e[s]=c?c(e[s],n[s]):n[s]}return e}const ch={data:mc,props:Un,emits:Un,methods:Un,computed:Un,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:Un,directives:Un,watch:lh,provide:mc,inject:ah};function mc(e,n){return n?e?function(){return Be(ie(e)?e.call(this,this):e,ie(n)?n.call(this,this):n)}:n:e}function ah(e,n){return Un(Fi(e),Fi(n))}function Fi(e){if(te(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Ue(e,n){return e?[...new Set([].concat(e,n))]:n}function Un(e,n){return e?Be(Be(Object.create(null),e),n):n}function lh(e,n){if(!e)return n;if(!n)return e;const t=Be(Object.create(null),e);for(const r in n)t[r]=Ue(e[r],n[r]);return t}function uh(e,n,t,r=!1){const o={},i={};Tr(i,eo,1),e.propsDefaults=Object.create(null),Tu(e,n,o,i);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);t?e.props=r?o:xp(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function fh(e,n,t,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=e,c=he(o),[a]=e.propsOptions;let l=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(jr(e.emitsOptions,d))continue;const p=n[d];if(a)if(de(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const g=mn(d);o[g]=Pi(a,c,g,p,e,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{Tu(e,n,o,i)&&(l=!0);let u;for(const f in c)(!n||!de(n,f)&&((u=xt(f))===f||!de(n,u)))&&(a?t&&(t[f]!==void 0||t[u]!==void 0)&&(o[f]=Pi(a,c,f,void 0,e,!0)):delete o[f]);if(i!==c)for(const f in i)(!n||!de(n,f)&&!0)&&(delete i[f],l=!0)}l&&xn(e,"set","$attrs")}function Tu(e,n,t,r){const[o,i]=e.propsOptions;let s=!1,c;if(n)for(let a in n){if(vr(a))continue;const l=n[a];let u;o&&de(o,u=mn(a))?!i||!i.includes(u)?t[u]=l:(c||(c={}))[u]=l:jr(e.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,s=!0)}if(i){const a=he(t),l=c||we;for(let u=0;u<i.length;u++){const f=i[u];t[f]=Pi(o,a,f,l[f],e,!de(l,f))}}return s}function Pi(e,n,t,r,o,i){const s=e[t];if(s!=null){const c=de(s,"default");if(c&&r===void 0){const a=s.default;if(s.type!==Function&&ie(a)){const{propsDefaults:l}=o;t in l?r=l[t]:(bt(o),r=l[t]=a.call(null,n),Vn())}else r=a}s[0]&&(i&&!c?r=!1:s[1]&&(r===""||r===xt(t))&&(r=!0))}return r}function Nu(e,n,t=!1){const r=n.propsCache,o=r.get(e);if(o)return o;const i=e.props,s={},c=[];let a=!1;if(!ie(e)){const u=f=>{a=!0;const[d,p]=Nu(f,n,!0);Be(s,d),p&&c.push(...p)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!a)return ke(e)&&r.set(e,ut),ut;if(te(i))for(let u=0;u<i.length;u++){const f=mn(i[u]);bc(f)&&(s[f]=we)}else if(i)for(const u in i){const f=mn(u);if(bc(f)){const d=i[u],p=s[f]=te(d)||ie(d)?{type:d}:Object.assign({},d);if(p){const g=vc(Boolean,p.type),m=vc(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||de(p,"default"))&&c.push(f)}}}const l=[s,c];return ke(e)&&r.set(e,l),l}function bc(e){return e[0]!=="$"}function _c(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function Ec(e,n){return _c(e)===_c(n)}function vc(e,n){return te(n)?n.findIndex(t=>Ec(t,e)):ie(n)&&Ec(n,e)?0:-1}const Ru=e=>e[0]==="_"||e==="$stable",vs=e=>te(e)?e.map(fn):[fn(e)],dh=(e,n,t)=>{if(n._n)return n;const r=$t((...o)=>vs(n(...o)),t);return r._c=!1,r},Ou=(e,n,t)=>{const r=e._ctx;for(const o in e){if(Ru(o))continue;const i=e[o];if(ie(i))n[o]=dh(o,i,r);else if(i!=null){const s=vs(i);n[o]=()=>s}}},Iu=(e,n)=>{const t=vs(n);e.slots.default=()=>t},ph=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=he(n),Tr(n,"_",t)):Ou(n,e.slots={})}else e.slots={},n&&Iu(e,n);Tr(e.slots,eo,1)},hh=(e,n,t)=>{const{vnode:r,slots:o}=e;let i=!0,s=we;if(r.shapeFlag&32){const c=n._;c?t&&c===1?i=!1:(Be(o,n),!t&&c===1&&delete o._):(i=!n.$stable,Ou(n,o)),s=n}else n&&(Iu(e,n),s={default:1});if(i)for(const c in o)!Ru(c)&&!(c in s)&&delete o[c]};function Lu(){return{app:null,config:{isNativeTag:$d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gh=0;function mh(e,n){return function(r,o=null){ie(r)||(r=Object.assign({},r)),o!=null&&!ke(o)&&(o=null);const i=Lu(),s=new Set;let c=!1;const a=i.app={_uid:gh++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:Uu,get config(){return i.config},set config(l){},use(l,...u){return s.has(l)||(l&&ie(l.install)?(s.add(l),l.install(a,...u)):ie(l)&&(s.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,f){if(!c){const d=xe(r,o);return d.appContext=i,u&&n?n(d,l):e(d,l,f),c=!0,a._container=l,l.__vue_app__=a,no(d.component)||d.component.proxy}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a}};return a}}function Bi(e,n,t,r,o=!1){if(te(e)){e.forEach((d,p)=>Bi(d,n&&(te(n)?n[p]:n),t,r,o));return}if(kr(r)&&!o)return;const i=r.shapeFlag&4?no(r.component)||r.component.proxy:r.el,s=o?null:i,{i:c,r:a}=e,l=n&&n.r,u=c.refs===we?c.refs={}:c.refs,f=c.setupState;if(l!=null&&l!==a&&(Re(l)?(u[l]=null,de(f,l)&&(f[l]=null)):De(l)&&(l.value=null)),ie(a))Rn(a,c,12,[s,u]);else{const d=Re(a),p=De(a);if(d||p){const g=()=>{if(e.f){const m=d?de(f,a)?f[a]:u[a]:a.value;o?te(m)&&ns(m,i):te(m)?m.includes(i)||m.push(i):d?(u[a]=[i],de(f,a)&&(f[a]=u[a])):(a.value=[i],e.k&&(u[e.k]=a.value))}else d?(u[a]=s,de(f,a)&&(f[a]=s)):p&&(a.value=s,e.k&&(u[e.k]=s))};s?(g.id=-1,ze(g,t)):g()}}}const ze=qp;function bh(e){return _h(e)}function _h(e,n){const t=jd();t.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:s,createText:c,createComment:a,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=tn,insertStaticContent:g}=e,m=(h,b,k,S=null,O=null,w=null,H=!1,L=null,M=!!b.dynamicChildren)=>{if(h===b)return;h&&!$n(h,b)&&(S=F(h),me(h,O,w,!0),h=null),b.patchFlag===-2&&(M=!1,b.dynamicChildren=null);const{type:D,ref:K,shapeFlag:V}=b;switch(D){case Jr:E(h,b,k,S);break;case on:_(h,b,k,S);break;case xo:h==null&&v(b,k,S,H);break;case Te:ae(h,b,k,S,O,w,H,L,M);break;default:V&1?P(h,b,k,S,O,w,H,L,M):V&6?ue(h,b,k,S,O,w,H,L,M):(V&64||V&128)&&D.process(h,b,k,S,O,w,H,L,M,ne)}K!=null&&O&&Bi(K,h&&h.ref,w,b||h,!b)},E=(h,b,k,S)=>{if(h==null)r(b.el=c(b.children),k,S);else{const O=b.el=h.el;b.children!==h.children&&l(O,b.children)}},_=(h,b,k,S)=>{h==null?r(b.el=a(b.children||""),k,S):b.el=h.el},v=(h,b,k,S)=>{[h.el,h.anchor]=g(h.children,b,k,S,h.el,h.anchor)},y=({el:h,anchor:b},k,S)=>{let O;for(;h&&h!==b;)O=d(h),r(h,k,S),h=O;r(b,k,S)},C=({el:h,anchor:b})=>{let k;for(;h&&h!==b;)k=d(h),o(h),h=k;o(b)},P=(h,b,k,S,O,w,H,L,M)=>{H=H||b.type==="svg",h==null?N(b,k,S,O,w,H,L,M):Y(h,b,O,w,H,L,M)},N=(h,b,k,S,O,w,H,L)=>{let M,D;const{type:K,props:V,shapeFlag:Q,transition:T,dirs:q}=h;if(M=h.el=s(h.type,w,V&&V.is,V),Q&8?u(M,h.children):Q&16&&R(h.children,M,null,S,O,w&&K!=="foreignObject",H,L),q&&Pn(h,null,S,"created"),V){for(const X in V)X!=="value"&&!vr(X)&&i(M,X,null,V[X],w,h.children,S,O,U);"value"in V&&i(M,"value",null,V.value),(D=V.onVnodeBeforeMount)&&ln(D,S,h)}G(M,h,h.scopeId,H,S),q&&Pn(h,null,S,"beforeMount");const Z=(!O||O&&!O.pendingBranch)&&T&&!T.persisted;Z&&T.beforeEnter(M),r(M,b,k),((D=V&&V.onVnodeMounted)||Z||q)&&ze(()=>{D&&ln(D,S,h),Z&&T.enter(M),q&&Pn(h,null,S,"mounted")},O)},G=(h,b,k,S,O)=>{if(k&&p(h,k),S)for(let w=0;w<S.length;w++)p(h,S[w]);if(O){let w=O.subTree;if(b===w){const H=O.vnode;G(h,H,H.scopeId,H.slotScopeIds,O.parent)}}},R=(h,b,k,S,O,w,H,L,M=0)=>{for(let D=M;D<h.length;D++){const K=h[D]=L?Cn(h[D]):fn(h[D]);m(null,K,b,k,S,O,w,H,L)}},Y=(h,b,k,S,O,w,H)=>{const L=b.el=h.el;let{patchFlag:M,dynamicChildren:D,dirs:K}=b;M|=h.patchFlag&16;const V=h.props||we,Q=b.props||we;let T;k&&Bn(k,!1),(T=Q.onVnodeBeforeUpdate)&&ln(T,k,b,h),K&&Pn(b,h,k,"beforeUpdate"),k&&Bn(k,!0);const q=O&&b.type!=="foreignObject";if(D?z(h.dynamicChildren,D,L,k,S,q,w):H||$(h,b,L,null,k,S,q,w,!1),M>0){if(M&16)j(L,b,V,Q,k,S,O);else if(M&2&&V.class!==Q.class&&i(L,"class",null,Q.class,O),M&4&&i(L,"style",V.style,Q.style,O),M&8){const Z=b.dynamicProps;for(let X=0;X<Z.length;X++){const ce=Z[X],Ce=V[ce],an=Q[ce];(an!==Ce||ce==="value")&&i(L,ce,Ce,an,O,h.children,k,S,U)}}M&1&&h.children!==b.children&&u(L,b.children)}else!H&&D==null&&j(L,b,V,Q,k,S,O);((T=Q.onVnodeUpdated)||K)&&ze(()=>{T&&ln(T,k,b,h),K&&Pn(b,h,k,"updated")},S)},z=(h,b,k,S,O,w,H)=>{for(let L=0;L<b.length;L++){const M=h[L],D=b[L],K=M.el&&(M.type===Te||!$n(M,D)||M.shapeFlag&70)?f(M.el):k;m(M,D,K,null,S,O,w,H,!0)}},j=(h,b,k,S,O,w,H)=>{if(k!==S){if(k!==we)for(const L in k)!vr(L)&&!(L in S)&&i(h,L,k[L],null,H,b.children,O,w,U);for(const L in S){if(vr(L))continue;const M=S[L],D=k[L];M!==D&&L!=="value"&&i(h,L,D,M,H,b.children,O,w,U)}"value"in S&&i(h,"value",k.value,S.value)}},ae=(h,b,k,S,O,w,H,L,M)=>{const D=b.el=h?h.el:c(""),K=b.anchor=h?h.anchor:c("");let{patchFlag:V,dynamicChildren:Q,slotScopeIds:T}=b;T&&(L=L?L.concat(T):T),h==null?(r(D,k,S),r(K,k,S),R(b.children,k,K,O,w,H,L,M)):V>0&&V&64&&Q&&h.dynamicChildren?(z(h.dynamicChildren,Q,k,O,w,H,L),(b.key!=null||O&&b===O.subTree)&&Mu(h,b,!0)):$(h,b,k,K,O,w,H,L,M)},ue=(h,b,k,S,O,w,H,L,M)=>{b.slotScopeIds=L,h==null?b.shapeFlag&512?O.ctx.activate(b,k,S,H,M):I(b,k,S,O,w,H,M):re(h,b,M)},I=(h,b,k,S,O,w,H)=>{const L=h.component=Sh(h,S,O);if(Yr(h)&&(L.ctx.renderer=ne),Th(L),L.asyncDep){if(O&&O.registerDep(L,x),!h.el){const M=L.subTree=xe(on);_(null,M,b,k)}return}x(L,h,b,k,O,w,H)},re=(h,b,k)=>{const S=b.component=h.component;if(Fp(h,b,k))if(S.asyncDep&&!S.asyncResolved){B(S,b,k);return}else S.next=b,Rp(S.update),S.update();else b.el=h.el,S.vnode=b},x=(h,b,k,S,O,w,H)=>{const L=()=>{if(h.isMounted){let{next:K,bu:V,u:Q,parent:T,vnode:q}=h,Z=K,X;Bn(h,!1),K?(K.el=q.el,B(h,K,H)):K=q,V&&yr(V),(X=K.props&&K.props.onVnodeBeforeUpdate)&&ln(X,T,K,q),Bn(h,!0);const ce=Eo(h),Ce=h.subTree;h.subTree=ce,m(Ce,ce,f(Ce.el),F(Ce),h,O,w),K.el=ce.el,Z===null&&Pp(h,ce.el),Q&&ze(Q,O),(X=K.props&&K.props.onVnodeUpdated)&&ze(()=>ln(X,T,K,q),O)}else{let K;const{el:V,props:Q}=b,{bm:T,m:q,parent:Z}=h,X=kr(b);if(Bn(h,!1),T&&yr(T),!X&&(K=Q&&Q.onVnodeBeforeMount)&&ln(K,Z,b),Bn(h,!0),V&&ee){const ce=()=>{h.subTree=Eo(h),ee(V,h.subTree,h,O,null)};X?b.type.__asyncLoader().then(()=>!h.isUnmounted&&ce()):ce()}else{const ce=h.subTree=Eo(h);m(null,ce,k,S,h,O,w),b.el=ce.el}if(q&&ze(q,O),!X&&(K=Q&&Q.onVnodeMounted)){const ce=b;ze(()=>ln(K,Z,ce),O)}(b.shapeFlag&256||Z&&kr(Z.vnode)&&Z.vnode.shapeFlag&256)&&h.a&&ze(h.a,O),h.isMounted=!0,b=k=S=null}},M=h.effect=new os(L,()=>ds(D),h.scope),D=h.update=()=>M.run();D.id=h.uid,Bn(h,!0),D()},B=(h,b,k)=>{b.component=h;const S=h.vnode.props;h.vnode=b,h.next=null,fh(h,b.props,S,k),hh(h,b.children,k),kt(),fc(),wt()},$=(h,b,k,S,O,w,H,L,M=!1)=>{const D=h&&h.children,K=h?h.shapeFlag:0,V=b.children,{patchFlag:Q,shapeFlag:T}=b;if(Q>0){if(Q&128){fe(D,V,k,S,O,w,H,L,M);return}else if(Q&256){oe(D,V,k,S,O,w,H,L,M);return}}T&8?(K&16&&U(D,O,w),V!==D&&u(k,V)):K&16?T&16?fe(D,V,k,S,O,w,H,L,M):U(D,O,w,!0):(K&8&&u(k,""),T&16&&R(V,k,S,O,w,H,L,M))},oe=(h,b,k,S,O,w,H,L,M)=>{h=h||ut,b=b||ut;const D=h.length,K=b.length,V=Math.min(D,K);let Q;for(Q=0;Q<V;Q++){const T=b[Q]=M?Cn(b[Q]):fn(b[Q]);m(h[Q],T,k,null,O,w,H,L,M)}D>K?U(h,O,w,!0,!1,V):R(b,k,S,O,w,H,L,M,V)},fe=(h,b,k,S,O,w,H,L,M)=>{let D=0;const K=b.length;let V=h.length-1,Q=K-1;for(;D<=V&&D<=Q;){const T=h[D],q=b[D]=M?Cn(b[D]):fn(b[D]);if($n(T,q))m(T,q,k,null,O,w,H,L,M);else break;D++}for(;D<=V&&D<=Q;){const T=h[V],q=b[Q]=M?Cn(b[Q]):fn(b[Q]);if($n(T,q))m(T,q,k,null,O,w,H,L,M);else break;V--,Q--}if(D>V){if(D<=Q){const T=Q+1,q=T<K?b[T].el:S;for(;D<=Q;)m(null,b[D]=M?Cn(b[D]):fn(b[D]),k,q,O,w,H,L,M),D++}}else if(D>Q)for(;D<=V;)me(h[D],O,w,!0),D++;else{const T=D,q=D,Z=new Map;for(D=q;D<=Q;D++){const Fe=b[D]=M?Cn(b[D]):fn(b[D]);Fe.key!=null&&Z.set(Fe.key,D)}let X,ce=0;const Ce=Q-q+1;let an=!1,nt=0;const _e=new Array(Ce);for(D=0;D<Ce;D++)_e[D]=0;for(D=T;D<=V;D++){const Fe=h[D];if(ce>=Ce){me(Fe,O,w,!0);continue}let Ze;if(Fe.key!=null)Ze=Z.get(Fe.key);else for(X=q;X<=Q;X++)if(_e[X-q]===0&&$n(Fe,b[X])){Ze=X;break}Ze===void 0?me(Fe,O,w,!0):(_e[Ze-q]=D+1,Ze>=nt?nt=Ze:an=!0,m(Fe,b[Ze],k,null,O,w,H,L,M),ce++)}const Nt=an?Eh(_e):ut;for(X=Nt.length-1,D=Ce-1;D>=0;D--){const Fe=q+D,Ze=b[Fe],nc=Fe+1<K?b[Fe+1].el:S;_e[D]===0?m(null,Ze,k,nc,O,w,H,L,M):an&&(X<0||D!==Nt[X]?pe(Ze,k,nc,2):X--)}}},pe=(h,b,k,S,O=null)=>{const{el:w,type:H,transition:L,children:M,shapeFlag:D}=h;if(D&6){pe(h.component.subTree,b,k,S);return}if(D&128){h.suspense.move(b,k,S);return}if(D&64){H.move(h,b,k,ne);return}if(H===Te){r(w,b,k);for(let V=0;V<M.length;V++)pe(M[V],b,k,S);r(h.anchor,b,k);return}if(H===xo){y(h,b,k);return}if(S!==2&&D&1&&L)if(S===0)L.beforeEnter(w),r(w,b,k),ze(()=>L.enter(w),O);else{const{leave:V,delayLeave:Q,afterLeave:T}=L,q=()=>r(w,b,k),Z=()=>{V(w,()=>{q(),T&&T()})};Q?Q(w,q,Z):Z()}else r(w,b,k)},me=(h,b,k,S=!1,O=!1)=>{const{type:w,props:H,ref:L,children:M,dynamicChildren:D,shapeFlag:K,patchFlag:V,dirs:Q}=h;if(L!=null&&Bi(L,null,k,h,!0),K&256){b.ctx.deactivate(h);return}const T=K&1&&Q,q=!kr(h);let Z;if(q&&(Z=H&&H.onVnodeBeforeUnmount)&&ln(Z,b,h),K&6)A(h.component,k,S);else{if(K&128){h.suspense.unmount(k,S);return}T&&Pn(h,null,b,"beforeUnmount"),K&64?h.type.remove(h,b,k,O,ne,S):D&&(w!==Te||V>0&&V&64)?U(D,b,k,!1,!0):(w===Te&&V&384||!O&&K&16)&&U(M,b,k),S&&Le(h)}(q&&(Z=H&&H.onVnodeUnmounted)||T)&&ze(()=>{Z&&ln(Z,b,h),T&&Pn(h,null,b,"unmounted")},k)},Le=h=>{const{type:b,el:k,anchor:S,transition:O}=h;if(b===Te){be(k,S);return}if(b===xo){C(h);return}const w=()=>{o(k),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(h.shapeFlag&1&&O&&!O.persisted){const{leave:H,delayLeave:L}=O,M=()=>H(k,w);L?L(h.el,w,M):M()}else w()},be=(h,b)=>{let k;for(;h!==b;)k=d(h),o(h),h=k;o(b)},A=(h,b,k)=>{const{bum:S,scope:O,update:w,subTree:H,um:L}=h;S&&yr(S),O.stop(),w&&(w.active=!1,me(H,h,b,k)),L&&ze(L,b),ze(()=>{h.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},U=(h,b,k,S=!1,O=!1,w=0)=>{for(let H=w;H<h.length;H++)me(h[H],b,k,S,O)},F=h=>h.shapeFlag&6?F(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),W=(h,b,k)=>{h==null?b._vnode&&me(b._vnode,null,null,!0):m(b._vnode||null,h,b,null,null,null,k),fc(),_u(),b._vnode=h},ne={p:m,um:me,m:pe,r:Le,mt:I,mc:R,pc:$,pbc:z,n:F,o:e};let le,ee;return n&&([le,ee]=n(ne)),{render:W,hydrate:le,createApp:mh(W,le)}}function Bn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Mu(e,n,t=!1){const r=e.children,o=n.children;if(te(r)&&te(o))for(let i=0;i<r.length;i++){const s=r[i];let c=o[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[i]=Cn(o[i]),c.el=s.el),t||Mu(s,c)),c.type===Jr&&(c.el=s.el)}}function Eh(e){const n=e.slice(),t=[0];let r,o,i,s,c;const a=e.length;for(r=0;r<a;r++){const l=e[r];if(l!==0){if(o=t[t.length-1],e[o]<l){n[r]=o,t.push(r);continue}for(i=0,s=t.length-1;i<s;)c=i+s>>1,e[t[c]]<l?i=c+1:s=c;l<e[t[i]]&&(i>0&&(n[r]=t[i-1]),t[i]=r)}}for(i=t.length,s=t[i-1];i-- >0;)t[i]=s,s=n[s];return t}const vh=e=>e.__isTeleport,Te=Symbol(void 0),Jr=Symbol(void 0),on=Symbol(void 0),xo=Symbol(void 0),Lt=[];let nn=null;function ye(e=!1){Lt.push(nn=e?null:[])}function yh(){Lt.pop(),nn=Lt[Lt.length-1]||null}let Ht=1;function yc(e){Ht+=e}function Du(e){return e.dynamicChildren=Ht>0?nn||ut:null,yh(),Ht>0&&nn&&nn.push(e),e}function Ae(e,n,t,r,o,i){return Du(ve(e,n,t,r,o,i,!0))}function ys(e,n,t,r,o){return Du(xe(e,n,t,r,o,!0))}function qi(e){return e?e.__v_isVNode===!0:!1}function $n(e,n){return e.type===n.type&&e.key===n.key}const eo="__vInternal",Fu=({key:e})=>e!=null?e:null,wr=({ref:e,ref_key:n,ref_for:t})=>e!=null?Re(e)||De(e)||ie(e)?{i:Ge,r:e,k:n,f:!!t}:e:null;function ve(e,n=null,t=null,r=0,o=null,i=e===Te?0:1,s=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Fu(n),ref:n&&wr(n),scopeId:Vr,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ge};return c?(ks(a,t),i&128&&e.normalize(a)):t&&(a.shapeFlag|=Re(t)?8:16),Ht>0&&!s&&nn&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&nn.push(a),a}const xe=xh;function xh(e,n=null,t=null,r=0,o=null,i=!1){if((!e||e===th)&&(e=on),qi(e)){const c=Ln(e,n,!0);return t&&ks(c,t),Ht>0&&!i&&nn&&(c.shapeFlag&6?nn[nn.indexOf(e)]=c:nn.push(c)),c.patchFlag|=-2,c}if(Lh(e)&&(e=e.__vccOpts),n){n=kh(n);let{class:c,style:a}=n;c&&!Re(c)&&(n.class=Ji(c)),ke(a)&&(lu(a)&&!te(a)&&(a=Be({},a)),n.style=Qi(a))}const s=Re(e)?1:Bp(e)?128:vh(e)?64:ke(e)?4:ie(e)?2:0;return ve(e,n,t,r,o,s,i,!0)}function kh(e){return e?lu(e)||eo in e?Be({},e):e:null}function Ln(e,n,t=!1){const{props:r,ref:o,patchFlag:i,children:s}=e,c=n?wh(r||{},n):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Fu(c),ref:n&&n.ref?t&&o?te(o)?o.concat(wr(n)):[o,wr(n)]:wr(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Te?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ln(e.ssContent),ssFallback:e.ssFallback&&Ln(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Ui(e=" ",n=0){return xe(Jr,null,e,n)}function xs(e="",n=!1){return n?(ye(),ys(on,null,e)):xe(on,null,e)}function fn(e){return e==null||typeof e=="boolean"?xe(on):te(e)?xe(Te,null,e.slice()):typeof e=="object"?Cn(e):xe(Jr,null,String(e))}function Cn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ln(e)}function ks(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(te(n))t=16;else if(typeof n=="object")if(r&65){const o=n.default;o&&(o._c&&(o._d=!1),ks(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!(eo in n)?n._ctx=Ge:o===3&&Ge&&(Ge.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ie(n)?(n={default:n,_ctx:Ge},t=32):(n=String(n),r&64?(t=16,n=[Ui(n)]):t=8);e.children=n,e.shapeFlag|=t}function wh(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const o in r)if(o==="class")n.class!==r.class&&(n.class=Ji([n.class,r.class]));else if(o==="style")n.style=Qi([n.style,r.style]);else if($r(o)){const i=n[o],s=r[o];s&&i!==s&&!(te(i)&&i.includes(s))&&(n[o]=i?[].concat(i,s):s)}else o!==""&&(n[o]=r[o])}return n}function ln(e,n,t,r=null){Xe(e,n,7,[t,r])}const Ah=Lu();let Ch=0;function Sh(e,n,t){const r=e.type,o=(n?n.appContext:e.appContext)||Ah,i={uid:Ch++,vnode:e,type:r,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nu(r,o),emitsOptions:vu(r,o),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=Lp.bind(null,i),e.ce&&e.ce(i),i}let Oe=null;const ws=()=>Oe||Ge,bt=e=>{Oe=e,e.scope.on()},Vn=()=>{Oe&&Oe.scope.off(),Oe=null};function Pu(e){return e.vnode.shapeFlag&4}let Gt=!1;function Th(e,n=!1){Gt=n;const{props:t,children:r}=e.vnode,o=Pu(e);uh(e,t,o,n),ph(e,r);const i=o?Nh(e,n):void 0;return Gt=!1,i}function Nh(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=uu(new Proxy(e.ctx,oh));const{setup:r}=t;if(r){const o=e.setupContext=r.length>1?Oh(e):null;bt(e),kt();const i=Rn(r,e,0,[e.props,o]);if(wt(),Vn(),jl(i)){if(i.then(Vn,Vn),n)return i.then(s=>{xc(e,s,n)}).catch(s=>{Zr(s,e,0)});e.asyncDep=i}else xc(e,i,n)}else Bu(e,n)}function xc(e,n,t){ie(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ke(n)&&(e.setupState=hu(n)),Bu(e,t)}let kc;function Bu(e,n,t){const r=e.type;if(!e.render){if(!n&&kc&&!r.render){const o=r.template||Es(e).template;if(o){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:c,compilerOptions:a}=r,l=Be(Be({isCustomElement:i,delimiters:c},s),a);r.render=kc(o,l)}}e.render=r.render||tn}bt(e),kt(),ih(e),wt(),Vn()}function Rh(e){return new Proxy(e.attrs,{get(n,t){return We(e,"get","$attrs"),n[t]}})}function Oh(e){const n=r=>{e.exposed=r||{}};let t;return{get attrs(){return t||(t=Rh(e))},slots:e.slots,emit:e.emit,expose:n}}function no(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(hu(uu(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in It)return It[t](e)},has(n,t){return t in n||t in It}}))}function Ih(e,n=!0){return ie(e)?e.displayName||e.name:e.name||n&&e.__name}function Lh(e){return ie(e)&&"__vccOpts"in e}const Ve=(e,n)=>Sp(e,n,Gt);function qu(e,n,t){const r=arguments.length;return r===2?ke(n)&&!te(n)?qi(n)?xe(e,null,[n]):xe(e,n):xe(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&qi(t)&&(t=[t]),xe(e,n,t))}const Mh=Symbol(""),Dh=()=>rn(Mh),Uu="3.2.45",Fh="http://www.w3.org/2000/svg",Hn=typeof document<"u"?document:null,wc=Hn&&Hn.createElement("template"),Ph={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const o=n?Hn.createElementNS(Fh,e):Hn.createElement(e,t?{is:t}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Hn.createTextNode(e),createComment:e=>Hn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Hn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,o,i){const s=t?t.previousSibling:n.lastChild;if(o&&(o===i||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===i||!(o=o.nextSibling)););else{wc.innerHTML=r?`<svg>${e}</svg>`:e;const c=wc.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}n.insertBefore(c,t)}return[s?s.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function Bh(e,n,t){const r=e._vtc;r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function qh(e,n,t){const r=e.style,o=Re(t);if(t&&!o){for(const i in t)zi(r,i,t[i]);if(n&&!Re(n))for(const i in n)t[i]==null&&zi(r,i,"")}else{const i=r.display;o?n!==t&&(r.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ac=/\s*!important$/;function zi(e,n,t){if(te(t))t.forEach(r=>zi(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=Uh(e,n);Ac.test(t)?e.setProperty(xt(r),t.replace(Ac,""),"important"):e[r]=t}}const Cc=["Webkit","Moz","ms"],ko={};function Uh(e,n){const t=ko[n];if(t)return t;let r=mn(n);if(r!=="filter"&&r in e)return ko[n]=r;r=Wr(r);for(let o=0;o<Cc.length;o++){const i=Cc[o]+r;if(i in e)return ko[n]=i}return n}const Sc="http://www.w3.org/1999/xlink";function zh(e,n,t,r,o){if(r&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(Sc,n.slice(6,n.length)):e.setAttributeNS(Sc,n,t);else{const i=Ud(n);t==null||i&&!Wl(t)?e.removeAttribute(n):e.setAttribute(n,i?"":t)}}function $h(e,n,t,r,o,i,s){if(n==="innerHTML"||n==="textContent"){r&&s(r,o,i),e[n]=t==null?"":t;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const a=t==null?"":t;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),t==null&&e.removeAttribute(n);return}let c=!1;if(t===""||t==null){const a=typeof e[n];a==="boolean"?t=Wl(t):t==null&&a==="string"?(t="",c=!0):a==="number"&&(t=0,c=!0)}try{e[n]=t}catch{}c&&e.removeAttribute(n)}function zu(e,n,t,r){e.addEventListener(n,t,r)}function Hh(e,n,t,r){e.removeEventListener(n,t,r)}function Gh(e,n,t,r,o=null){const i=e._vei||(e._vei={}),s=i[n];if(r&&s)s.value=r;else{const[c,a]=Wh(n);if(r){const l=i[n]=jh(r,o);zu(e,c,l,a)}else s&&(Hh(e,c,s,a),i[n]=void 0)}}const Tc=/(?:Once|Passive|Capture)$/;function Wh(e){let n;if(Tc.test(e)){n={};let r;for(;r=e.match(Tc);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):xt(e.slice(2)),n]}let wo=0;const Kh=Promise.resolve(),Zh=()=>wo||(Kh.then(()=>wo=0),wo=Date.now());function jh(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Xe(Vh(r,t.value),n,5,[r])};return t.value=e,t.attached=Zh(),t}function Vh(e,n){if(te(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>o=>!o._stopped&&r&&r(o))}else return n}const Nc=/^on[a-z]/,Yh=(e,n,t,r,o=!1,i,s,c,a)=>{n==="class"?Bh(e,r,o):n==="style"?qh(e,t,r):$r(n)?es(n)||Gh(e,n,t,r,s):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Xh(e,n,r,o))?$h(e,n,r,i,s,c,a):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),zh(e,n,r,o))};function Xh(e,n,t,r){return r?!!(n==="innerHTML"||n==="textContent"||n in e&&Nc.test(n)&&ie(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Nc.test(n)&&Re(t)?!1:n in e}const Qh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Gp.props;const Rc=e=>{const n=e.props["onUpdate:modelValue"]||!1;return te(n)?t=>yr(n,t):n},Jh={deep:!0,created(e,n,t){e._assign=Rc(t),zu(e,"change",()=>{const r=e._modelValue,o=eg(e),i=e.checked,s=e._assign;if(te(r)){const c=Kl(r,o),a=c!==-1;if(i&&!a)s(r.concat(o));else if(!i&&a){const l=[...r];l.splice(c,1),s(l)}}else if(Hr(r)){const c=new Set(r);i?c.add(o):c.delete(o),s(c)}else s($u(e,i))})},mounted:Oc,beforeUpdate(e,n,t){e._assign=Rc(t),Oc(e,n,t)}};function Oc(e,{value:n,oldValue:t},r){e._modelValue=n,te(n)?e.checked=Kl(n,r.props.value)>-1:Hr(n)?e.checked=n.has(r.props.value):n!==t&&(e.checked=zr(n,$u(e,!0)))}function eg(e){return"_value"in e?e._value:e.value}function $u(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const ng=Be({patchProp:Yh},Ph);let Ic;function tg(){return Ic||(Ic=bh(ng))}const rg=(...e)=>{const n=tg().createApp(...e),{mount:t}=n;return n.mount=r=>{const o=og(r);if(!o)return;const i=n._component;!ie(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const s=t(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},n};function og(e){return Re(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const st=typeof window<"u";function ig(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Ao(e,n){const t={};for(const r in n){const o=n[r];t[r]=sn(o)?o.map(e):e(o)}return t}const Mt=()=>{},sn=Array.isArray,sg=/\/$/,cg=e=>e.replace(sg,"");function Co(e,n,t="/"){let r,o={},i="",s="";const c=n.indexOf("#");let a=n.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=n.slice(0,a),i=n.slice(a+1,c>-1?c:n.length),o=e(i)),c>-1&&(r=r||n.slice(0,c),s=n.slice(c,n.length)),r=fg(r!=null?r:n,t),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function ag(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function Lc(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function lg(e,n,t){const r=n.matched.length-1,o=t.matched.length-1;return r>-1&&r===o&&_t(n.matched[r],t.matched[o])&&Hu(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function _t(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Hu(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!ug(e[t],n[t]))return!1;return!0}function ug(e,n){return sn(e)?Mc(e,n):sn(n)?Mc(n,e):e===n}function Mc(e,n){return sn(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function fg(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/");let o=t.length-1,i,s;for(i=0;i<r.length;i++)if(s=r[i],s!==".")if(s==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Wt;(function(e){e.pop="pop",e.push="push"})(Wt||(Wt={}));var Dt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Dt||(Dt={}));function dg(e){if(!e)if(st){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),cg(e)}const pg=/^[^#]+#/;function hg(e,n){return e.replace(pg,"#")+n}function gg(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const to=()=>({left:window.pageXOffset,top:window.pageYOffset});function mg(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;n=gg(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Dc(e,n){return(history.state?history.state.position-n:-1)+e}const $i=new Map;function bg(e,n){$i.set(e,n)}function _g(e){const n=$i.get(e);return $i.delete(e),n}let Eg=()=>location.protocol+"//"+location.host;function Gu(e,n){const{pathname:t,search:r,hash:o}=n,i=e.indexOf("#");if(i>-1){let c=o.includes(e.slice(i))?e.slice(i).length:1,a=o.slice(c);return a[0]!=="/"&&(a="/"+a),Lc(a,"")}return Lc(t,e)+r+o}function vg(e,n,t,r){let o=[],i=[],s=null;const c=({state:d})=>{const p=Gu(e,location),g=t.value,m=n.value;let E=0;if(d){if(t.value=p,n.value=d,s&&s===g){s=null;return}E=m?d.position-m.position:0}else r(p);o.forEach(_=>{_(t.value,g,{delta:E,type:Wt.pop,direction:E?E>0?Dt.forward:Dt.back:Dt.unknown})})};function a(){s=t.value}function l(d){o.push(d);const p=()=>{const g=o.indexOf(d);g>-1&&o.splice(g,1)};return i.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(Ee({},d.state,{scroll:to()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:l,destroy:f}}function Fc(e,n,t,r=!1,o=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:o?to():null}}function yg(e){const{history:n,location:t}=window,r={value:Gu(e,t)},o={value:n.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const f=e.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?e:e.slice(f))+a:Eg()+e+a;try{n[u?"replaceState":"pushState"](l,"",d),o.value=l}catch(p){console.error(p),t[u?"replace":"assign"](d)}}function s(a,l){const u=Ee({},n.state,Fc(o.value.back,a,o.value.forward,!0),l,{position:o.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=Ee({},o.value,n.state,{forward:a,scroll:to()});i(u.current,u,!0);const f=Ee({},Fc(r.value,a,null),{position:u.position+1},l);i(a,f,!1),r.value=a}return{location:r,state:o,push:c,replace:s}}function xg(e){e=dg(e);const n=yg(e),t=vg(e,n.state,n.location,n.replace);function r(i,s=!0){s||t.pauseListeners(),history.go(i)}const o=Ee({location:"",base:e,go:r,createHref:hg.bind(null,e)},n,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function kg(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),xg(e)}function wg(e){return typeof e=="string"||e&&typeof e=="object"}function Wu(e){return typeof e=="string"||typeof e=="symbol"}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ku=Symbol("");var Pc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Pc||(Pc={}));function Et(e,n){return Ee(new Error,{type:e,[Ku]:!0},n)}function En(e,n){return e instanceof Error&&Ku in e&&(n==null||!!(e.type&n))}const Bc="[^/]+?",Ag={sensitive:!1,strict:!1,start:!0,end:!0},Cg=/[.+*?^${}()[\]/\\]/g;function Sg(e,n){const t=Ee({},Ag,n),r=[];let o=t.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];t.strict&&!l.length&&(o+="/");for(let f=0;f<l.length;f++){const d=l[f];let p=40+(t.sensitive?.25:0);if(d.type===0)f||(o+="/"),o+=d.value.replace(Cg,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:m,optional:E,regexp:_}=d;i.push({name:g,repeatable:m,optional:E});const v=_||Bc;if(v!==Bc){p+=10;try{new RegExp(`(${v})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${g}" (${v}): `+C.message)}}let y=m?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(y=E&&l.length<2?`(?:/${y})`:"/"+y),E&&(y+="?"),o+=y,p+=20,E&&(p+=-8),m&&(p+=-20),v===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(t.strict&&t.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}t.strict||(o+="/?"),t.end?o+="$":t.strict&&(o+="(?:/|$)");const s=new RegExp(o,t.sensitive?"":"i");function c(l){const u=l.match(s),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=i[d-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function a(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:E}=p,_=g in l?l[g]:"";if(sn(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const v=sn(_)?_.join("/"):_;if(!v)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=v}}return u||"/"}return{re:s,score:r,keys:i,parse:c,stringify:a}}function Tg(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function Ng(e,n){let t=0;const r=e.score,o=n.score;for(;t<r.length&&t<o.length;){const i=Tg(r[t],o[t]);if(i)return i;t++}if(Math.abs(o.length-r.length)===1){if(qc(r))return 1;if(qc(o))return-1}return o.length-r.length}function qc(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Rg={type:0,value:""},Og=/[a-zA-Z0-9_]/;function Ig(e){if(!e)return[[]];if(e==="/")return[[Rg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(p){throw new Error(`ERR (${t})/"${l}": ${p}`)}let t=0,r=t;const o=[];let i;function s(){i&&o.push(i),i=[]}let c=0,a,l="",u="";function f(){!l||(t===0?i.push({type:0,value:l}):t===1||t===2||t===3?(i.length>1&&(a==="*"||a==="+")&&n(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):n("Invalid state to consume buffer"),l="")}function d(){l+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:a==="/"?(l&&f(),s()):a===":"?(f(),t=1):d();break;case 4:d(),t=r;break;case 1:a==="("?t=2:Og.test(a)?d():(f(),t=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:t=3:u+=a;break;case 3:f(),t=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${l}"`),f(),s(),o}function Lg(e,n,t){const r=Sg(Ig(e.path),t),o=Ee(r,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function Mg(e,n){const t=[],r=new Map;n=$c({strict:!1,end:!0,sensitive:!1},n);function o(u){return r.get(u)}function i(u,f,d){const p=!d,g=Dg(u);g.aliasOf=d&&d.record;const m=$c(n,u),E=[g];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of y)E.push(Ee({},g,{components:d?d.record.components:g.components,path:C,aliasOf:d?d.record:g}))}let _,v;for(const y of E){const{path:C}=y;if(f&&C[0]!=="/"){const P=f.record.path,N=P[P.length-1]==="/"?"":"/";y.path=f.record.path+(C&&N+C)}if(_=Lg(y,f,m),d?d.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),p&&u.name&&!zc(_)&&s(u.name)),g.children){const P=g.children;for(let N=0;N<P.length;N++)i(P[N],_,d&&d.children[N])}d=d||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&a(_)}return v?()=>{s(v)}:Mt}function s(u){if(Wu(u)){const f=r.get(u);f&&(r.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function c(){return t}function a(u){let f=0;for(;f<t.length&&Ng(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Zu(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!zc(u)&&r.set(u.record.name,u)}function l(u,f){let d,p={},g,m;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Et(1,{location:u});m=d.record.name,p=Ee(Uc(f.params,d.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&Uc(u.params,d.keys.map(v=>v.name))),g=d.stringify(p)}else if("path"in u)g=u.path,d=t.find(v=>v.re.test(g)),d&&(p=d.parse(g),m=d.record.name);else{if(d=f.name?r.get(f.name):t.find(v=>v.re.test(f.path)),!d)throw Et(1,{location:u,currentLocation:f});m=d.record.name,p=Ee({},f.params,u.params),g=d.stringify(p)}const E=[];let _=d;for(;_;)E.unshift(_.record),_=_.parent;return{name:m,path:g,params:p,matched:E,meta:Pg(E)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:s,getRoutes:c,getRecordMatcher:o}}function Uc(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function Dg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Fg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Fg(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="boolean"?t:t[r];return n}function zc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pg(e){return e.reduce((n,t)=>Ee(n,t.meta),{})}function $c(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}function Zu(e,n){return n.children.some(t=>t===e||Zu(e,t))}const ju=/#/g,Bg=/&/g,qg=/\//g,Ug=/=/g,zg=/\?/g,Vu=/\+/g,$g=/%5B/g,Hg=/%5D/g,Yu=/%5E/g,Gg=/%60/g,Xu=/%7B/g,Wg=/%7C/g,Qu=/%7D/g,Kg=/%20/g;function As(e){return encodeURI(""+e).replace(Wg,"|").replace($g,"[").replace(Hg,"]")}function Zg(e){return As(e).replace(Xu,"{").replace(Qu,"}").replace(Yu,"^")}function Hi(e){return As(e).replace(Vu,"%2B").replace(Kg,"+").replace(ju,"%23").replace(Bg,"%26").replace(Gg,"`").replace(Xu,"{").replace(Qu,"}").replace(Yu,"^")}function jg(e){return Hi(e).replace(Ug,"%3D")}function Vg(e){return As(e).replace(ju,"%23").replace(zg,"%3F")}function Yg(e){return e==null?"":Vg(e).replace(qg,"%2F")}function Ir(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Xg(e){const n={};if(e===""||e==="?")return n;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(Vu," "),s=i.indexOf("="),c=Ir(s<0?i:i.slice(0,s)),a=s<0?null:Ir(i.slice(s+1));if(c in n){let l=n[c];sn(l)||(l=n[c]=[l]),l.push(a)}else n[c]=a}return n}function Hc(e){let n="";for(let t in e){const r=e[t];if(t=jg(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(sn(r)?r.map(i=>i&&Hi(i)):[r&&Hi(r)]).forEach(i=>{i!==void 0&&(n+=(n.length?"&":"")+t,i!=null&&(n+="="+i))})}return n}function Qg(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=sn(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return n}const Jg=Symbol(""),Gc=Symbol(""),Cs=Symbol(""),Ss=Symbol(""),Gi=Symbol("");function Rt(){let e=[];function n(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function Sn(e,n,t,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,c)=>{const a=f=>{f===!1?c(Et(4,{from:t,to:n})):f instanceof Error?c(f):wg(f)?c(Et(2,{from:n,to:f})):(i&&r.enterCallbacks[o]===i&&typeof f=="function"&&i.push(f),s())},l=e.call(r&&r.instances[o],n,t,a);let u=Promise.resolve(l);e.length<3&&(u=u.then(a)),u.catch(f=>c(f))})}function So(e,n,t,r){const o=[];for(const i of e)for(const s in i.components){let c=i.components[s];if(!(n!=="beforeRouteEnter"&&!i.instances[s]))if(em(c)){const l=(c.__vccOpts||c)[n];l&&o.push(Sn(l,t,r,i,s))}else{let a=c();o.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));const u=ig(l)?l.default:l;i.components[s]=u;const d=(u.__vccOpts||u)[n];return d&&Sn(d,t,r,i,s)()}))}}return o}function em(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Wc(e){const n=rn(Cs),t=rn(Ss),r=Ve(()=>n.resolve(Ye(e.to))),o=Ve(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(_t.bind(null,u));if(d>-1)return d;const p=Kc(a[l-2]);return l>1&&Kc(u)===p&&f[f.length-1].path!==p?f.findIndex(_t.bind(null,a[l-2])):d}),i=Ve(()=>o.value>-1&&om(t.params,r.value.params)),s=Ve(()=>o.value>-1&&o.value===t.matched.length-1&&Hu(t.params,r.value.params));function c(a={}){return rm(a)?n[Ye(e.replace)?"replace":"push"](Ye(e.to)).catch(Mt):Promise.resolve()}return{route:r,href:Ve(()=>r.value.href),isActive:i,isExactActive:s,navigate:c}}const nm=ms({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wc,setup(e,{slots:n}){const t=Jt(Wc(e)),{options:r}=rn(Cs),o=Ve(()=>({[Zc(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Zc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=n.default&&n.default(t);return e.custom?i:qu("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},i)}}}),tm=nm;function rm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function om(e,n){for(const t in n){const r=n[t],o=e[t];if(typeof r=="string"){if(r!==o)return!1}else if(!sn(o)||o.length!==r.length||r.some((i,s)=>i!==o[s]))return!1}return!0}function Kc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Zc=(e,n,t)=>e!=null?e:n!=null?n:t,im=ms({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=rn(Gi),o=Ve(()=>e.route||r.value),i=rn(Gc,0),s=Ve(()=>{let l=Ye(i);const{matched:u}=o.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),c=Ve(()=>o.value.matched[s.value]);xr(Gc,Ve(()=>s.value+1)),xr(Jg,c),xr(Gi,o);const a=Dn();return ht(()=>[a.value,c.value,e.name],([l,u,f],[d,p,g])=>{u&&(u.instances[f]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!_t(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(m=>m(l))},{flush:"post"}),()=>{const l=o.value,u=e.name,f=c.value,d=f&&f.components[u];if(!d)return jc(t.default,{Component:d,route:l});const p=f.props[u],g=p?p===!0?l.params:typeof p=="function"?p(l):p:null,E=qu(d,Ee({},g,n,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:a}));return jc(t.default,{Component:E,route:l})||E}}});function jc(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const sm=im;function cm(e){const n=Mg(e.routes,e),t=e.parseQuery||Xg,r=e.stringifyQuery||Hc,o=e.history,i=Rt(),s=Rt(),c=Rt(),a=kp(An);let l=An;st&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ao.bind(null,A=>""+A),f=Ao.bind(null,Yg),d=Ao.bind(null,Ir);function p(A,U){let F,W;return Wu(A)?(F=n.getRecordMatcher(A),W=U):W=A,n.addRoute(W,F)}function g(A){const U=n.getRecordMatcher(A);U&&n.removeRoute(U)}function m(){return n.getRoutes().map(A=>A.record)}function E(A){return!!n.getRecordMatcher(A)}function _(A,U){if(U=Ee({},U||a.value),typeof A=="string"){const h=Co(t,A,U.path),b=n.resolve({path:h.path},U),k=o.createHref(h.fullPath);return Ee(h,b,{params:d(b.params),hash:Ir(h.hash),redirectedFrom:void 0,href:k})}let F;if("path"in A)F=Ee({},A,{path:Co(t,A.path,U.path).path});else{const h=Ee({},A.params);for(const b in h)h[b]==null&&delete h[b];F=Ee({},A,{params:f(A.params)}),U.params=f(U.params)}const W=n.resolve(F,U),ne=A.hash||"";W.params=u(d(W.params));const le=ag(r,Ee({},A,{hash:Zg(ne),path:W.path})),ee=o.createHref(le);return Ee({fullPath:le,hash:ne,query:r===Hc?Qg(A.query):A.query||{}},W,{redirectedFrom:void 0,href:ee})}function v(A){return typeof A=="string"?Co(t,A,a.value.path):Ee({},A)}function y(A,U){if(l!==A)return Et(8,{from:U,to:A})}function C(A){return G(A)}function P(A){return C(Ee(v(A),{replace:!0}))}function N(A){const U=A.matched[A.matched.length-1];if(U&&U.redirect){const{redirect:F}=U;let W=typeof F=="function"?F(A):F;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=v(W):{path:W},W.params={}),Ee({query:A.query,hash:A.hash,params:"path"in W?{}:A.params},W)}}function G(A,U){const F=l=_(A),W=a.value,ne=A.state,le=A.force,ee=A.replace===!0,h=N(F);if(h)return G(Ee(v(h),{state:typeof h=="object"?Ee({},ne,h.state):ne,force:le,replace:ee}),U||F);const b=F;b.redirectedFrom=U;let k;return!le&&lg(r,W,F)&&(k=Et(16,{to:b,from:W}),fe(W,W,!0,!1)),(k?Promise.resolve(k):Y(b,W)).catch(S=>En(S)?En(S,2)?S:oe(S):B(S,b,W)).then(S=>{if(S){if(En(S,2))return G(Ee({replace:ee},v(S.to),{state:typeof S.to=="object"?Ee({},ne,S.to.state):ne,force:le}),U||b)}else S=j(b,W,!0,ee,ne);return z(b,W,S),S})}function R(A,U){const F=y(A,U);return F?Promise.reject(F):Promise.resolve()}function Y(A,U){let F;const[W,ne,le]=am(A,U);F=So(W.reverse(),"beforeRouteLeave",A,U);for(const h of W)h.leaveGuards.forEach(b=>{F.push(Sn(b,A,U))});const ee=R.bind(null,A,U);return F.push(ee),tt(F).then(()=>{F=[];for(const h of i.list())F.push(Sn(h,A,U));return F.push(ee),tt(F)}).then(()=>{F=So(ne,"beforeRouteUpdate",A,U);for(const h of ne)h.updateGuards.forEach(b=>{F.push(Sn(b,A,U))});return F.push(ee),tt(F)}).then(()=>{F=[];for(const h of A.matched)if(h.beforeEnter&&!U.matched.includes(h))if(sn(h.beforeEnter))for(const b of h.beforeEnter)F.push(Sn(b,A,U));else F.push(Sn(h.beforeEnter,A,U));return F.push(ee),tt(F)}).then(()=>(A.matched.forEach(h=>h.enterCallbacks={}),F=So(le,"beforeRouteEnter",A,U),F.push(ee),tt(F))).then(()=>{F=[];for(const h of s.list())F.push(Sn(h,A,U));return F.push(ee),tt(F)}).catch(h=>En(h,8)?h:Promise.reject(h))}function z(A,U,F){for(const W of c.list())W(A,U,F)}function j(A,U,F,W,ne){const le=y(A,U);if(le)return le;const ee=U===An,h=st?history.state:{};F&&(W||ee?o.replace(A.fullPath,Ee({scroll:ee&&h&&h.scroll},ne)):o.push(A.fullPath,ne)),a.value=A,fe(A,U,F,ee),oe()}let ae;function ue(){ae||(ae=o.listen((A,U,F)=>{if(!be.listening)return;const W=_(A),ne=N(W);if(ne){G(Ee(ne,{replace:!0}),W).catch(Mt);return}l=W;const le=a.value;st&&bg(Dc(le.fullPath,F.delta),to()),Y(W,le).catch(ee=>En(ee,12)?ee:En(ee,2)?(G(ee.to,W).then(h=>{En(h,20)&&!F.delta&&F.type===Wt.pop&&o.go(-1,!1)}).catch(Mt),Promise.reject()):(F.delta&&o.go(-F.delta,!1),B(ee,W,le))).then(ee=>{ee=ee||j(W,le,!1),ee&&(F.delta&&!En(ee,8)?o.go(-F.delta,!1):F.type===Wt.pop&&En(ee,20)&&o.go(-1,!1)),z(W,le,ee)}).catch(Mt)}))}let I=Rt(),re=Rt(),x;function B(A,U,F){oe(A);const W=re.list();return W.length?W.forEach(ne=>ne(A,U,F)):console.error(A),Promise.reject(A)}function $(){return x&&a.value!==An?Promise.resolve():new Promise((A,U)=>{I.add([A,U])})}function oe(A){return x||(x=!A,ue(),I.list().forEach(([U,F])=>A?F(A):U()),I.reset()),A}function fe(A,U,F,W){const{scrollBehavior:ne}=e;if(!st||!ne)return Promise.resolve();const le=!F&&_g(Dc(A.fullPath,0))||(W||!F)&&history.state&&history.state.scroll||null;return fs().then(()=>ne(A,U,le)).then(ee=>ee&&mg(ee)).catch(ee=>B(ee,A,U))}const pe=A=>o.go(A);let me;const Le=new Set,be={currentRoute:a,listening:!0,addRoute:p,removeRoute:g,hasRoute:E,getRoutes:m,resolve:_,options:e,push:C,replace:P,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:i.add,beforeResolve:s.add,afterEach:c.add,onError:re.add,isReady:$,install(A){const U=this;A.component("RouterLink",tm),A.component("RouterView",sm),A.config.globalProperties.$router=U,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>Ye(a)}),st&&!me&&a.value===An&&(me=!0,C(o.location).catch(ne=>{}));const F={};for(const ne in An)F[ne]=Ve(()=>a.value[ne]);A.provide(Cs,U),A.provide(Ss,Jt(F)),A.provide(Gi,a);const W=A.unmount;Le.add(A),A.unmount=function(){Le.delete(A),Le.size<1&&(l=An,ae&&ae(),ae=null,a.value=An,me=!1,x=!1),W()}}};return be}function tt(e){return e.reduce((n,t)=>n.then(()=>t()),Promise.resolve())}function am(e,n){const t=[],r=[],o=[],i=Math.max(n.matched.length,e.matched.length);for(let s=0;s<i;s++){const c=n.matched[s];c&&(e.matched.find(l=>_t(l,c))?r.push(c):t.push(c));const a=e.matched[s];a&&(n.matched.find(l=>_t(l,a))||o.push(a))}return[t,r,o]}function lm(){return rn(Ss)}function Wi(e,n={},t){for(const r in e){const o=e[r],i=t?`${t}:${r}`:r;typeof o=="object"&&o!==null?Wi(o,n,i):typeof o=="function"&&(n[i]=o)}return n}function um(e,n){return e.reduce((t,r)=>t.then(()=>r.apply(void 0,n)),Promise.resolve())}function fm(e,n){return Promise.all(e.map(t=>t.apply(void 0,n)))}function To(e,n){for(const t of e)t(n)}class dm{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,t,r={}){if(!n||typeof t!="function")return()=>{};const o=n;let i;for(;this._deprecatedHooks[n];)i=this._deprecatedHooks[n],n=i.to;if(i&&!r.allowDeprecated){let s=i.message;s||(s=`${o} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(s)||(console.warn(s),this._deprecatedMessages.add(s))}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(t),()=>{t&&(this.removeHook(n,t),t=void 0)}}hookOnce(n,t){let r,o=(...i)=>(typeof r=="function"&&r(),r=void 0,o=void 0,t(...i));return r=this.hook(n,o),r}removeHook(n,t){if(this._hooks[n]){const r=this._hooks[n].indexOf(t);r!==-1&&this._hooks[n].splice(r,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,t){this._deprecatedHooks[n]=typeof t=="string"?{to:t}:t;const r=this._hooks[n]||[];this._hooks[n]=void 0;for(const o of r)this.hook(n,o)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const t in n)this.deprecateHook(t,n[t])}addHooks(n){const t=Wi(n),r=Object.keys(t).map(o=>this.hook(o,t[o]));return()=>{for(const o of r.splice(0,r.length))o()}}removeHooks(n){const t=Wi(n);for(const r in t)this.removeHook(r,t[r])}callHook(n,...t){return this.callHookWith(um,n,...t)}callHookParallel(n,...t){return this.callHookWith(fm,n,...t)}callHookWith(n,t,...r){const o=this._before||this._after?{name:t,args:r,context:{}}:void 0;this._before&&To(this._before,o);const i=n(this._hooks[t]||[],r);return i instanceof Promise?i.finally(()=>{this._after&&o&&To(this._after,o)}):(this._after&&o&&To(this._after,o),i)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{const t=this._before.indexOf(n);t!==-1&&this._before.splice(t,1)}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{const t=this._after.indexOf(n);t!==-1&&this._after.splice(t,1)}}}function pm(){return new dm}const hm=["script","style","noscript"],gm=["base","meta","link","style","script","noscript"],mm=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function bm(e,n){const{props:t,tag:r}=e;if(mm.includes(r))return r;if(r==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const o=["id"];r==="meta"&&o.push("name","property","http-equiv");for(const i of o)if(typeof t[i]<"u"){const s=String(t[i]);return n&&!n(s)?!1:`${r}:${i}:${s}`}return!1}const gr=(e,n)=>{const{tag:t,$el:r}=e;!r||(Object.entries(t.props).forEach(([o,i])=>{i=String(i);const s=`attr:${o}`;if(o==="class"){for(const c of i.split(" ")){const a=`${s}:${c}`;n&&n(e,a,()=>r.classList.remove(c)),r.classList.contains(c)||r.classList.add(c)}return}n&&!o.startsWith("data-h-")&&n(e,s,()=>r.removeAttribute(o)),r.getAttribute(o)!==i&&r.setAttribute(o,i)}),hm.includes(t.tag)&&r.innerHTML!==(t.children||"")&&(r.innerHTML=t.children||""))};function Ts(e){let n=9;for(let t=0;t<e.length;)n=Math.imul(n^e.charCodeAt(t++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function Ju(e,n={}){var u,f;const t={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",t),!t.shouldRender)return;const r=n.document||window.document,o=e._popSideEffectQueue();e.headEntries().map(d=>d._sde).forEach(d=>{Object.entries(d).forEach(([p,g])=>{o[p]=g})});const i=async d=>{const p=e.headEntries().find(m=>m._i===d._e),g={renderId:d._d||Ts(JSON.stringify({...d,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:d,entry:p,staleSideEffects:o};return await e.hooks.callHook("dom:beforeRenderTag",g),g},s=[],c={body:[],head:[]},a=(d,p,g)=>{p=`${d.renderId}:${p}`,d.entry&&(d.entry._sde[p]=g),delete o[p]},l=d=>{e._elMap[d.renderId]=d.$el,s.push(d),a(d,"el",()=>{var p;(p=d.$el)==null||p.remove(),delete e._elMap[d.renderId]})};for(const d of await e.resolveTags()){const p=await i(d);if(!p.shouldRender)continue;const{tag:g}=p;if(g.tag==="title"){r.title=g.children||"",s.push(p);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){p.$el=r[g.tag==="htmlAttrs"?"documentElement":"body"],gr(p,a),s.push(p);continue}if(p.$el=e._elMap[p.renderId],!p.$el&&g._hash&&(p.$el=r.querySelector(`${(u=g.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._hash}]`)),p.$el){p.tag._d&&gr(p),l(p);continue}p.$el=r.createElement(g.tag),gr(p),c[(f=g.tagPosition)!=null&&f.startsWith("body")?"body":"head"].push(p)}Object.entries(c).forEach(([d,p])=>{if(!!p.length){for(const g of[...r[d].children].reverse()){const m=g.tagName.toLowerCase();if(!gm.includes(m))continue;const E=bm({tag:m,props:g.getAttributeNames().reduce((v,y)=>({...v,[y]:g.getAttribute(y)}),{})}),_=p.findIndex(v=>v&&(v.tag._d===E||g.isEqualNode(v.$el)));if(_!==-1){const v=p[_];v.$el=g,gr(v),l(v),delete p[_]}}p.forEach(g=>{if(!!g.$el){switch(g.tag.tagPosition){case"bodyClose":r.body.appendChild(g.$el);break;case"bodyOpen":r.body.insertBefore(g.$el,r.body.firstChild);break;case"head":default:r.head.appendChild(g.$el);break}l(g)}})}});for(const d of s)await e.hooks.callHook("dom:renderTag",d);Object.values(o).forEach(d=>d())}let Ar=null;async function _m(e,n={}){function t(){return Ar=null,Ju(e,n)}const r=n.delayFn||(o=>setTimeout(o,10));return Ar=Ar||new Promise(o=>r(()=>o(t())))}const Em={__proto__:null,debouncedRenderDOMHead:_m,get domUpdatePromise(){return Ar},hashCode:Ts,renderDOMHead:Ju},vm=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],ym=["tagPosition","tagPriority","tagDuplicateStrategy"];async function xm(e,n){const t={tag:e,props:{}};return e==="title"||e==="titleTemplate"?(t.children=n instanceof Promise?await n:n,t):(t.props=await km({...n}),["children","innerHtml","innerHTML"].forEach(r=>{typeof t.props[r]<"u"&&(t.children=t.props[r],delete t.props[r])}),Object.keys(t.props).filter(r=>ym.includes(r)).forEach(r=>{t[r]=t.props[r],delete t.props[r]}),typeof t.props.class=="object"&&!Array.isArray(t.props.class)&&(t.props.class=Object.keys(t.props.class).filter(r=>t.props.class[r])),Array.isArray(t.props.class)&&(t.props.class=t.props.class.join(" ")),t.props.content&&Array.isArray(t.props.content)?t.props.content.map((r,o)=>{const i={...t,props:{...t.props}};return i.props.content=r,i.key=`${t.props.name||t.props.property}:${o}`,i}):t)}async function km(e){for(const n of Object.keys(e))e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]="":String(e[n])==="false"&&delete e[n];return e}const Vc=e=>{if(typeof e.tagPriority=="number")return e.tagPriority;switch(e.tagPriority){case"critical":return 2;case"high":return 9;case"low":return 12}switch(e.tag){case"base":return-1;case"title":return 1;case"meta":return e.props.charset?-2:e.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}},wm=(e,n)=>Vc(e)-Vc(n),Am=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function Cm(e,n){const{props:t,tag:r}=e;if(Am.includes(r))return r;if(r==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const o=["id"];r==="meta"&&o.push("name","property","http-equiv");for(const i of o)if(typeof t[i]<"u"){const s=String(t[i]);return n&&!n(s)?!1:`${r}:${i}:${s}`}return!1}const Yc=(e,n)=>e==null?n||null:typeof e=="function"?e(n):e.replace("%s",n!=null?n:"");function Sm(e){const n=e.findIndex(r=>r.tag==="titleTemplate"),t=e.findIndex(r=>r.tag==="title");if(t!==-1&&n!==-1){const r=Yc(e[n].children,e[t].children);r!==null?e[t].children=r||e[t].children:delete e[t]}else if(n!==-1){const r=Yc(e[n].children);r!==null&&(e[n].children=r,e[n].tag="title")}return n!==-1&&delete e[n],e.filter(Boolean)}const Tm=e=>{e=e||{};const n=e.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:t}){n.forEach(o=>{t.props[o]&&(t.key=t.props[o],delete t.props[o])});const r=t.key?`${t.tag}:${t.key}`:Cm(t);r&&(t._d=r)},"tags:resolve":function(t){const r={};t.tags.forEach(o=>{let i=o._d||o._p;const s=r[i];if(s){let c=o==null?void 0:o.tagDuplicateStrategy;if(!c&&(o.tag==="htmlAttrs"||o.tag==="bodyAttrs")&&(c="merge"),c==="merge"){const l=s.props;["class","style"].forEach(u=>{o.props[u]&&l[u]&&(u==="style"&&!l[u].endsWith(";")&&(l[u]+=";"),o.props[u]=`${l[u]} ${o.props[u]}`)}),r[i].props={...l,...o.props};return}else o._e===s._e&&(i=o._d=`${i}:${o._p}`);const a=Object.keys(o.props).length;if((a===0||a===1&&typeof o.props["data-h-key"]<"u")&&!o.children){delete r[i];return}}r[i]=o}),t.tags=Object.values(r)}}}},Nm=()=>({hooks:{"tags:resolve":e=>{const n=t=>{var r;return(r=e.tags.find(o=>o._d===t))==null?void 0:r._p};for(const t of e.tags){if(!t.tagPriority||typeof t.tagPriority=="number")continue;const r=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];for(const{prefix:o,offset:i}of r)if(t.tagPriority.startsWith(o)){const s=t.tagPriority.replace(o,""),c=n(s);typeof c<"u"&&(t._p=c+i)}}e.tags.sort((t,r)=>t._p-r._p).sort(wm)}}}),Rm=()=>({hooks:{"tags:resolve":e=>{e.tags=Sm(e.tags)}}}),Om=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),Im=typeof window<"u",Lm=()=>({hooks:{"tag:normalise":e=>{var o,i;const{tag:n,entry:t}=e,r=typeof n.props._dynamic<"u";!ef.includes(n.tag)||!n.key||(n._hash=Ts(JSON.stringify({tag:n.tag,key:n.key})),!(Im||((i=(o=tf())==null?void 0:o.resolvedOptions)==null?void 0:i.document))&&(t._m==="server"||r)&&(n.props[`data-h-${n._hash}`]=""))},"tags:resolve":e=>{e.tags=e.tags.map(n=>(delete n.props._dynamic,n))}}}),Mm=e=>({hooks:{"entries:updated":function(n){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let t=e==null?void 0:e.delayFn;!t&&typeof requestAnimationFrame<"u"&&(t=requestAnimationFrame),Promise.resolve().then(function(){return Em}).then(({debouncedRenderDOMHead:r})=>{r(n,{document:(e==null?void 0:e.document)||window.document,delayFn:t})})}}}),Dm=()=>{const e=(n,t)=>{const r={},o={};Object.entries(t.props).forEach(([s,c])=>{s.startsWith("on")&&typeof c=="function"?o[s]=c:r[s]=c});let i;return n==="dom"&&t.tag==="script"&&typeof r.src=="string"&&typeof o.onload<"u"&&(i=r.src,delete r.src),{props:r,eventHandlers:o,delayedSrc:i}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(t=>(t.props=e("ssr",t).props,t))},"dom:beforeRenderTag":function(n){const{props:t,eventHandlers:r,delayedSrc:o}=e("dom",n.tag);!Object.keys(r).length||(n.tag.props=t,n.tag._eventHandlers=r,n.tag._delayedSrc=o)},"dom:renderTag":function(n){const t=n.$el;if(!n.tag._eventHandlers||!t)return;const r=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:t;Object.entries(n.tag._eventHandlers).forEach(([o,i])=>{const s=`${n.tag._d||n.tag._p}:${o}`,c=o.slice(2).toLowerCase(),a=`data-h-${c}`;if(delete n.staleSideEffects[s],t.hasAttribute(a))return;const l=i;t.setAttribute(a,""),r.addEventListener(c,l),n.entry&&(n.entry._sde[s]=()=>{r.removeEventListener(c,l),t.removeAttribute(a)})}),n.tag._delayedSrc&&t.setAttribute("src",n.tag._delayedSrc)}}}};function Fm(e){return Array.isArray(e)?e:[e]}const ef=["base","meta","link","style","script","noscript"];let nf;const Pm=e=>nf=e,tf=()=>nf,Bm=10;async function qm(e){const n=[];return Object.entries(e.input).filter(([t,r])=>typeof r<"u"&&vm.includes(t)).forEach(([t,r])=>{const o=Fm(r);n.push(...o.map(i=>xm(t,i)).flat())}),(await Promise.all(n)).flat().map((t,r)=>(t._e=e._i,t._p=(e._i<<Bm)+r,t))}const Um=()=>[Tm(),Nm(),Rm(),Lm(),Dm(),Om()],zm=(e={})=>[Mm({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function $m(e={}){const n=Hm({...e,plugins:[...zm(e),...(e==null?void 0:e.plugins)||[]]});return Pm(n),n}function Hm(e={}){let n=[],t={},r=0;const o=pm();e!=null&&e.hooks&&o.addHooks(e.hooks),e.plugins=[...Um(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(c=>c.hooks&&o.addHooks(c.hooks));const i=()=>o.callHook("entries:updated",s),s={resolvedOptions:e,headEntries(){return n},get hooks(){return o},push(c,a){const l={_i:r++,input:c,_sde:{}};return a!=null&&a.mode&&(l._m=a==null?void 0:a.mode),n.push(l),i(),{dispose(){n=n.filter(u=>u._i!==l._i?!0:(t={...t,...u._sde||{}},u._sde={},i(),!1))},patch(u){n=n.map(f=>(f._i===l._i&&(l.input=f.input=u,i()),f))}}},async resolveTags(){const c={tags:[],entries:[...n]};await o.callHook("entries:resolve",c);for(const a of c.entries)for(const l of await qm(a)){const u={tag:l,entry:a};await o.callHook("tag:normalise",u),c.tags.push(u.tag)}return await o.callHook("tags:resolve",c),c.tags},_elMap:{},_popSideEffectQueue(){const c={...t};return t={},c}};return s.hooks.callHook("init",s),s}function Gm(e){return typeof e=="function"?e():Ye(e)}function Lr(e,n=""){if(e instanceof Promise)return e;const t=Gm(e);if(!e||!t)return t;if(Array.isArray(t))return t.map(r=>Lr(r,n));if(typeof t=="object"){let r=!1;const o=Object.fromEntries(Object.entries(t).map(([i,s])=>i==="titleTemplate"||i.startsWith("on")?[i,Ye(s)]:((typeof s=="function"||De(s))&&(r=!0),[i,Lr(s,i)])));return r&&ef.includes(String(n))&&(o._dynamic=!0),o}return t}const Wm=Uu.startsWith("3"),Xc=typeof window<"u",rf="usehead";function Ns(){return ws()&&rn(rf)||tf()}function Km(e={}){const n=$m({...e,domDelayFn:r=>setTimeout(()=>fs(()=>r()),10),plugins:[Zm(),...(e==null?void 0:e.plugins)||[]]}),t={install(r){Wm&&(r.config.globalProperties.$unhead=n,r.provide(rf,n))}};return n.install=t.install,n}const Zm=()=>({hooks:{"entries:resolve":function(e){for(const n of e.entries)n.input=Lr(n.input)}}});function jm(e,n={}){const t=Ns();if(!ws())return t.push(e,n);const o=Dn({});Up(()=>{o.value=Lr(e)});const i=t.push(o.value,n);return ht(o,s=>i.patch(s)),_s(()=>{i.dispose()}),i}function Vm(e,n={}){return Ns().push(e,n)}function Ym(e,n={}){var o;const t=Ns(),r=Xc||((o=t.resolvedOptions)==null?void 0:o.document);if(!(n.mode==="server"&&r||n.mode==="client"&&!r))return Xc?jm(e,n):Vm(e,n)}const Fn=(e,n)=>{const t=e.__vccOpts||e;for(const[r,o]of n)t[r]=o;return t},Xm=e=>(ps("data-v-7d59d6a9"),e=e(),hs(),e),Qm={class:"switch"},Jm=Xm(()=>ve("span",{class:"slider round"},null,-1)),eb={__name:"ThemeSwitch",setup(e){const n={light:{attr_theme:"light",link_md:new URL(""+new URL("github-markdown.761c10b6.css",import.meta.url).href,self.location).href,link_code:new URL("data:text/css;base64,cHJlIGNvZGUuaGxqc3tkaXNwbGF5OmJsb2NrO292ZXJmbG93LXg6YXV0bztwYWRkaW5nOjFlbX1jb2RlLmhsanN7cGFkZGluZzozcHggNXB4fS8qIQogIFRoZW1lOiBHaXRIdWIKICBEZXNjcmlwdGlvbjogTGlnaHQgdGhlbWUgYXMgc2VlbiBvbiBnaXRodWIuY29tCiAgQXV0aG9yOiBnaXRodWIuY29tCiAgTWFpbnRhaW5lcjogQEhpcnNlCiAgVXBkYXRlZDogMjAyMS0wNS0xNQoKICBPdXRkYXRlZCBiYXNlIHZlcnNpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9wcmltZXIvZ2l0aHViLXN5bnRheC1saWdodAogIEN1cnJlbnQgY29sb3JzIHRha2VuIGZyb20gR2l0SHViJ3MgQ1NTCiovLmhsanN7Y29sb3I6IzI0MjkyZTtiYWNrZ3JvdW5kOiNmZmZ9LmhsanMtZG9jdGFnLC5obGpzLWtleXdvcmQsLmhsanMtbWV0YSAuaGxqcy1rZXl3b3JkLC5obGpzLXRlbXBsYXRlLXRhZywuaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSwuaGxqcy10eXBlLC5obGpzLXZhcmlhYmxlLmxhbmd1YWdlX3tjb2xvcjojZDczYTQ5fS5obGpzLXRpdGxlLC5obGpzLXRpdGxlLmNsYXNzXywuaGxqcy10aXRsZS5jbGFzc18uaW5oZXJpdGVkX18sLmhsanMtdGl0bGUuZnVuY3Rpb25fe2NvbG9yOiM2ZjQyYzF9LmhsanMtYXR0ciwuaGxqcy1hdHRyaWJ1dGUsLmhsanMtbGl0ZXJhbCwuaGxqcy1tZXRhLC5obGpzLW51bWJlciwuaGxqcy1vcGVyYXRvciwuaGxqcy1zZWxlY3Rvci1hdHRyLC5obGpzLXNlbGVjdG9yLWNsYXNzLC5obGpzLXNlbGVjdG9yLWlkLC5obGpzLXZhcmlhYmxle2NvbG9yOiMwMDVjYzV9LmhsanMtbWV0YSAuaGxqcy1zdHJpbmcsLmhsanMtcmVnZXhwLC5obGpzLXN0cmluZ3tjb2xvcjojMDMyZjYyfS5obGpzLWJ1aWx0X2luLC5obGpzLXN5bWJvbHtjb2xvcjojZTM2MjA5fS5obGpzLWNvZGUsLmhsanMtY29tbWVudCwuaGxqcy1mb3JtdWxhe2NvbG9yOiM2YTczN2R9LmhsanMtbmFtZSwuaGxqcy1xdW90ZSwuaGxqcy1zZWxlY3Rvci1wc2V1ZG8sLmhsanMtc2VsZWN0b3ItdGFne2NvbG9yOiMyMjg2M2F9LmhsanMtc3Vic3R7Y29sb3I6IzI0MjkyZX0uaGxqcy1zZWN0aW9ue2NvbG9yOiMwMDVjYzU7Zm9udC13ZWlnaHQ6NzAwfS5obGpzLWJ1bGxldHtjb2xvcjojNzM1YzBmfS5obGpzLWVtcGhhc2lze2NvbG9yOiMyNDI5MmU7Zm9udC1zdHlsZTppdGFsaWN9LmhsanMtc3Ryb25ne2NvbG9yOiMyNDI5MmU7Zm9udC13ZWlnaHQ6NzAwfS5obGpzLWFkZGl0aW9ue2NvbG9yOiMyMjg2M2E7YmFja2dyb3VuZC1jb2xvcjojZjBmZmY0fS5obGpzLWRlbGV0aW9ue2NvbG9yOiNiMzFkMjg7YmFja2dyb3VuZC1jb2xvcjojZmZlZWYwfQ==",self.location).href},dark:{attr_theme:"dark",link_md:new URL(""+new URL("github-markdown-dark.007f734f.css",import.meta.url).href,self.location).href,link_code:new URL("data:text/css;base64,cHJlIGNvZGUuaGxqc3tkaXNwbGF5OmJsb2NrO292ZXJmbG93LXg6YXV0bztwYWRkaW5nOjFlbX1jb2RlLmhsanN7cGFkZGluZzozcHggNXB4fS8qIQogIFRoZW1lOiBHaXRIdWIgRGFyawogIERlc2NyaXB0aW9uOiBEYXJrIHRoZW1lIGFzIHNlZW4gb24gZ2l0aHViLmNvbQogIEF1dGhvcjogZ2l0aHViLmNvbQogIE1haW50YWluZXI6IEBIaXJzZQogIFVwZGF0ZWQ6IDIwMjEtMDUtMTUKCiAgT3V0ZGF0ZWQgYmFzZSB2ZXJzaW9uOiBodHRwczovL2dpdGh1Yi5jb20vcHJpbWVyL2dpdGh1Yi1zeW50YXgtZGFyawogIEN1cnJlbnQgY29sb3JzIHRha2VuIGZyb20gR2l0SHViJ3MgQ1NTCiovLmhsanN7Y29sb3I6I2M5ZDFkOTtiYWNrZ3JvdW5kOiMwZDExMTd9LmhsanMtZG9jdGFnLC5obGpzLWtleXdvcmQsLmhsanMtbWV0YSAuaGxqcy1rZXl3b3JkLC5obGpzLXRlbXBsYXRlLXRhZywuaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSwuaGxqcy10eXBlLC5obGpzLXZhcmlhYmxlLmxhbmd1YWdlX3tjb2xvcjojZmY3YjcyfS5obGpzLXRpdGxlLC5obGpzLXRpdGxlLmNsYXNzXywuaGxqcy10aXRsZS5jbGFzc18uaW5oZXJpdGVkX18sLmhsanMtdGl0bGUuZnVuY3Rpb25fe2NvbG9yOiNkMmE4ZmZ9LmhsanMtYXR0ciwuaGxqcy1hdHRyaWJ1dGUsLmhsanMtbGl0ZXJhbCwuaGxqcy1tZXRhLC5obGpzLW51bWJlciwuaGxqcy1vcGVyYXRvciwuaGxqcy1zZWxlY3Rvci1hdHRyLC5obGpzLXNlbGVjdG9yLWNsYXNzLC5obGpzLXNlbGVjdG9yLWlkLC5obGpzLXZhcmlhYmxle2NvbG9yOiM3OWMwZmZ9LmhsanMtbWV0YSAuaGxqcy1zdHJpbmcsLmhsanMtcmVnZXhwLC5obGpzLXN0cmluZ3tjb2xvcjojYTVkNmZmfS5obGpzLWJ1aWx0X2luLC5obGpzLXN5bWJvbHtjb2xvcjojZmZhNjU3fS5obGpzLWNvZGUsLmhsanMtY29tbWVudCwuaGxqcy1mb3JtdWxhe2NvbG9yOiM4Yjk0OWV9LmhsanMtbmFtZSwuaGxqcy1xdW90ZSwuaGxqcy1zZWxlY3Rvci1wc2V1ZG8sLmhsanMtc2VsZWN0b3ItdGFne2NvbG9yOiM3ZWU3ODd9LmhsanMtc3Vic3R7Y29sb3I6I2M5ZDFkOX0uaGxqcy1zZWN0aW9ue2NvbG9yOiMxZjZmZWI7Zm9udC13ZWlnaHQ6NzAwfS5obGpzLWJ1bGxldHtjb2xvcjojZjJjYzYwfS5obGpzLWVtcGhhc2lze2NvbG9yOiNjOWQxZDk7Zm9udC1zdHlsZTppdGFsaWN9LmhsanMtc3Ryb25ne2NvbG9yOiNjOWQxZDk7Zm9udC13ZWlnaHQ6NzAwfS5obGpzLWFkZGl0aW9ue2NvbG9yOiNhZmY1YjQ7YmFja2dyb3VuZC1jb2xvcjojMDMzYTE2fS5obGpzLWRlbGV0aW9ue2NvbG9yOiNmZmRjZDc7YmFja2dyb3VuZC1jb2xvcjojNjcwNjBjfQ==",self.location).href}},t=Dn(!1);r(),ht(t,r);function r(){const o=t.value?"dark":"light";Ym({htmlAttrs:{theme:n[o].attr_theme},link:[{rel:"stylesheet",id:"link-md",href:n[o].link_md},{rel:"stylesheet",id:"link-code",href:n[o].link_code}]})}return(o,i)=>(ye(),Ae("label",Qm,[nh(ve("input",{type:"checkbox","onUpdate:modelValue":i[0]||(i[0]=s=>t.value=s)},null,512),[[Jh,t.value]]),Jm]))}},nb=Fn(eb,[["__scopeId","data-v-7d59d6a9"]]),tb={class:"YRNavBar"},rb={class:"YRNavLinks"},ob={__name:"Navigation",setup(e){const n=Dn([{name:"Home",link:"/home"},{name:"Note",link:"/note"},{name:"Study",link:"/study"},{name:"TIC80",link:"/tic80"}]);return(t,r)=>{const o=Qr("router-link");return ye(),Ae("div",tb,[xe(o,{class:"YRNavLink",to:"/Home"},{default:$t(()=>[Ui("Home")]),_:1}),ve("div",rb,[(ye(!0),Ae(Te,null,er(n.value,i=>(ye(),ys(o,{class:"YRNavLink",to:i.link},{default:$t(()=>[Ui(He(i.name),1)]),_:2},1032,["to"]))),256))]),xe(nb)])}}},ib={class:"YRAppHeader"},sb={class:"YRAppContent"},cb={__name:"App",setup(e){return(n,t)=>{const r=Qr("router-view");return ye(),Ae(Te,null,[ve("header",ib,[xe(ob)]),ve("div",sb,[xe(r)])],64)}}};const ab={},lb={src:"https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/22-04-12-3.png"};function ub(e,n){return ye(),Ae("img",lb)}const fb=Fn(ab,[["render",ub],["__scopeId","data-v-637f7633"]]);const db=e=>(ps("data-v-03e7fca9"),e=e(),hs(),e),pb=db(()=>ve("h4",{class:"welcome"},"\u4E5F\u8BB8\uFF0C\u4F60\u8BA4\u8BC6\u6211\uFF1F",-1)),hb={__name:"Home",setup(e){return(n,t)=>(ye(),Ae(Te,null,[xe(fb,{class:"heroimage"}),pb],64))}},Qc=Fn(hb,[["__scopeId","data-v-03e7fca9"]]),of=`---\r
title: \u4E2A\u4EBA\u7AD9\uFF01By yori-vue\r
date: 2022-11-21\r
tags:\r
  - Blog-Design\r
brief: WordPress > Hexo > Typecho > CSDN > yori > yori-vue > ... \u4E0B\u4E00\u6B21\uFF0C\u53C8\u4F1A\u662F\u54EA\u4E2A\u4E3B\u9898\u5462\r
---\r
\r
# \u6D41\u6D6A\u751F\u6DAF\r
\r
## WordPress > Hexo > Typecho\r
\r
\u8FD9\u51E0\u4E2A\u9636\u6BB5\uFF0C\u53EF\u4EE5\u770B\u770B\u6211\u5728 CSDN \u4E0A\u7684\u8FD9\u7BC7[\u6587\u7AE0](https://blog.csdn.net/qq_45476172/article/details/120780086)\uFF0C\u8FD9\u662F\u5F53\u65F6\u7684\u6211\u7ECF\u5386\u4E86 WordPress \u548C Hexo \u4E4B\u540E\uFF0C\u521D\u6B21\u9047\u89C1 typecho \u65F6\u5019\u7684\u53CD\u6620\u3002\u56E0\u4E3A\u4E4B\u524D\u9009\u7684\u4E3B\u9898\u90FD\u6709\u70B9\u4E0D\u5408\u6211\u610F\uFF0C\u7F3A\u5C11\u90A3\u79CD\u6026\u7136\u5FC3\u52A8\u7684\u4E00\u51FB\uFF0C\u76F4\u5230\u770B\u5230\u8FD9\u4E2A[\u4E3B\u9898](https://zhebk.cn/)\uFF0C\u201C\u54C7\uFF0C\u8FD9\u4E2A\u4E5F\u592A\u597D\u770B\u4E86\u5427\u201D\uFF0C\u9042\u5B89\u88C5\uFF0C\u914D\u7F6E\uFF0C\u8015\u8018\u5199\u4F5C\u8BB8\u4E45\uFF0C\u5982\u4ECA\u60F3\u6765\uFF0C\u597D\u4F3C\u505A\u68A6\u3002\r
\r
## Typecho > NULL\r
\r
\u7136\u800C\u68A6\u603B\u6709\u7761\u9192\u7684\u90A3\u4E00\u5929\uFF0C\u670D\u52A1\u5668\u662F\u8981\u82B1\u94B1\u7684\uFF0C\u5199\u4F5C\u4E5F\u662F\u8981\u53BB\u575A\u6301\u7684\uFF0C\u6211\u65E2\u6CA1\u6709\u94B1\uFF0C\u4E5F\u6CA1\u6709\u6BC5\u529B\uFF0C\u4E8E\u662F\u66FE\u7ECF\u70ED\u95F9\u975E\u51E1\u7684\u8336\u9986\uFF0C\u5F88\u5FEB\u95E8\u53EF\u7F57\u96C0\u3002\r
\r
\u633A\u62B1\u6B49\u7684\uFF0C\u5982\u679C\u5F53\u65F6\u80FD\u575A\u6301\u5199\u4F5C\uFF0C\u4ECA\u5929\u7684\u6211\u5E94\u8BE5\u80FD\u770B\u5230\u4E0D\u5C11\u5F53\u5E74\u7684\u81EA\u5DF1\u5427\u3002\u6700\u540E\uFF0C\u670D\u52A1\u5668\u6211\u91CD\u88C5\u4E86\uFF0Ctypecho \u6210\u4E86\u6211\u4EBA\u751F\u91CC\u6D88\u901D\u7684\u4E00\u62B9\u8272\u5F69\uFF0C\u4E0D\u8FC7\u4E4B\u524D\u5199\u7684\u6587\u7AE0\u6211\u8FC1\u79FB\u4E86\u51FA\u6765\uFF0C\u76EE\u524D\u5B58\u653E\u5728 [CSDN](https://blog.csdn.net/qq_45476172) \u4E2D\uFF0C\u4F30\u8BA1\u5F88\u5FEB\u4E5F\u4F1A\u79FB\u5C45\u5230\u8FD9\u91CC\u7684\u3002\r
\r
# \u5B89\u5C45\r
\r
## NULL > CSDN\r
\r
\u4ECE CSDN \u6536\u5F55\u7684\u65F6\u95F4\u6765\u770B\uFF0C\u62C6\u6389 typecho \u5E94\u8BE5\u662F\u572821\u5E7410\u670815\u53F7\u3002\u5927\u6982\u4ECE\u6B64\u5F00\u59CB\u7684\u8FD9\u534A\u5E74\u7684\u65F6\u95F4\u91CC\uFF0C\u6211\u90FD\u662F\u5728 CSDN \u4E0A\u53D1\u8868\u6587\u7AE0\uFF0C\u56E0\u4E3A\u6211\u53D1\u73B0\u8FD9\u91CC\u633A\u597D\u7684\uFF0C\u53EA\u8981 CSDN \u4E0D\u6B7B\uFF0C\u6211\u7684\u6587\u7AE0\u5C31\u6C38\u8FDC\u4E0D\u4F1A\u6D88\u5931\uFF0C\u4E5F\u518D\u4E0D\u7528\u53BB\u4E3A\u4E00\u4E2A\u535A\u5BA2\u7CFB\u7EDF\u7684\u6B7B\u800C\u591A\u6101\u4F24\u611F\u3002\u800C\u4E14 CSDN \u80FD\u88AB\u522B\u4EBA\u770B\u5230\uFF0C\u5076\u5C14\u6709\u4EBA\u80FD\u6536\u85CF\u6211\u7684\u6587\u7AE0\uFF0C\u4E5F\u633A\u597D\u7684\u3002\r
\r
\u4E5F\u8BB8\uFF0C\u662F\u65F6\u5019\u505C\u4E0B\u4E86\u3002\r
\r
# \u5951\u673A\r
\r
## CSDN > yori\r
\r
22\u5E743\u670813\u65E5\uFF0C\u6211\u5728 yori \u4E2D\u5199\u4E0B\u4E86\u6211\u7B2C\u4E00\u4E2A\`Hello World\`\uFF0C\u6211\u505A\u4E86\u4E00\u4E2A\u5C5E\u4E8E\u6211\u81EA\u5DF1\u7684\u9759\u6001\u535A\u5BA2\u751F\u6210\u5668\uFF0C\u4E5F\u7B97\u5B9E\u73B0\u4E86\u6211\u5728 typecho \u65F6\u671F\u7684\u671F\u76FC\u3002\r
\r
> \u4E5F\u5E0C\u671B\u4EE5\u540E\u7684\u6211\u5F00\u53D1\u4E00\u6B3E\u81EA\u5DF1\u7684\u4E3B\u9898\uFF0C\u4E00\u5B9A\uFF01\r
\r
\u7B49\u7B49\uFF0C\u600E\u4E48\u5C31\u7A81\u7136 yori \u4E86\uFF0Cyori \u662F\u5565\uFF1F\r
\r
\u8BF4\u6765\u8BDD\u957F\uFF0C\u5F53\u65F6\u5728\u505A CSAPP cache lab\uFF0C\u7F51\u4E0A\u53C2\u8003\u6559\u7A0B\u7684\u65F6\u5019\u627E\u5230\u4E86\u8FD9\u7BC7\u6587\u7AE0[CSAPP Cache Lab \u7F13\u5B58\u5B9E\u9A8C](https://yangtau.me/posts/2019-08-21-csapp-cache.html)\uFF0C\u6587\u7AE0\u5199\u5F97\u5F88\u597D\uFF0C\u4F46\u66F4\u5438\u5F15\u6211\u7684\u662F\u4ED6\u7684\u6837\u5F0F\uFF0C\u7B80\u6D01\u3001\u660E\u5FEB\uFF0C\u5F88\u7B26\u5408\u6211\u5BF9\u535A\u5BA2\u7684\u60F3\u8C61\uFF08\u73B0\u5728\u4ED6\u5DF2\u7ECF\u6362\u4E3B\u9898\u4E86\uFF09\u3002\u66F4\u5DE7\u5408\u7684\u662F\u8FD9\u4E2A\u535A\u5BA2\u7CFB\u7EDF\u662F\u4ED6\u81EA\u5DF1\u505A\u7684\uFF0C[YABG](https://github.com/yangtau/yabg)\uFF0C\u66F4\u66F4\u5DE7\u5408\u7684\u662F\uFF0C\u4ED6\u7528\u7684\u662F Python\uFF0C\u5F88\u7B80\u5355\u5F88\u5BB9\u6613\u61C2\u3002\r
\r
\u4E8E\u662F\uFF0C\u5728\u5B8C\u5168\u4E0D\u8BA4\u8BC6\u4E92\u8054\u7F51\u5BF9\u9762\u7684\u90A3\u4E2A\u4EBA\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u7167\u7740\u4ED6\u7684\u4EE3\u7801\u601D\u8DEF\uFF0C\u5199\u4E86\u4E00\u4E2A\u5C5E\u4E8E\u6211\u81EA\u5DF1\u7684 ssg\uFF0C[yori](https://github.com/insorker/yori)\u3002\u771F\u7684\uFF0C\u5F53\u65F6\u6211\u4EFF\u4F5B\u53C8\u627E\u56DE\u4E86\u5931\u53BB\u7684\u90A3\u62B9\u8272\u5F69\uFF0C\u90A3\u51E0\u4E2A\u6708\u91CC\uFF0Cyori \u4E0D\u65AD\u66F4\u65B0\uFF0C\u5148\u540E\u6DFB\u52A0\u4E86\u3010slide & wiki & gittalk\u8BC4\u8BBA & \u6570\u5B66\u8868\u8FBE\u5F0F\u3011\u529F\u80FD\uFF0C\u90A3\u6BB5\u65F6\u95F4\u65E0\u8BBA\u662F\u5B66\u4E60\u8FD8\u662F\u953B\u70BC\u8FD8\u662F\u5199\u6587\u7AE0\uFF0C\u90FD\u5145\u6EE1\u4E86\u70ED\u60C5\uFF0C\u53C8\u5F00\u59CB\u4E86\u4E00\u573A\u65B0\u7684\u65C5\u884C\u3002\r
\r
# \u91CD\u751F\u4E4B\u6211\u6765\u5230\u4E86\u5F02\u4E16\u754C\r
\r
## yori > yori-vue\r
\r
\u5927\u6982\u5230\u4E866\u6708\u4EFD\uFF0C\u4EFF\u4F5B\u9EC4\u91D1\u65F6\u4EE3\u5FC5\u7136\u5C3E\u968F\u9ED1\u6697\u65F6\u4EE3\uFF0C\u957F\u8FBE4\u4E2A\u6708\u7684\u9ED1\u6697\u65F6\u4EE3\uFF0C\u6211\u7684\u4EA7\u51FA\u4E3A0\u3002\u5728\u8FD9\u671F\u95F4\uFF0C\u5927\u69827\u6708\u4EFD\u7684\u65F6\u5019\uFF0C\u6211\u5C31\u5F00\u59CB\u60F3\u7EE7\u7EED\u66F4\u65B0\u6211\u7684\u535A\u5BA2\u4E3B\u9898\u6837\u5F0F\uFF0C\u6253\u7B97\u4F7F\u7528 Vue \u7EE7\u7EED\u66F4\u65B0\u65F6\uFF0C\u53D1\u73B0\u66F4\u4E0D\u52A8\u4E86 \u2014\u2014\u2014\u2014 \u6211\u4F7F\u7528\u7684 Jinja2 \u548C Vue \u5728\u8BED\u6CD5\u4E0A\u4F1A\u53D1\u751F\u51B2\u7A81\uFF0C\u6211\u4E5F\u4E0D\u60F3\u5728\u8FD9\u4E2A\u5927\u95EE\u9898\u4E0A\u627E\u529E\u6CD5\u89E3\u51B3\u3002\r
\r
\u8FD9\u633A\u81F4\u547D\u7684\uFF0C\u524D\u7AEF\u66F4\u4E0D\u4E86\uFF0C\u540E\u7AEF\u4E5F\u6CA1\u6709\u7EE7\u7EED\u66F4\u65B0\u7684\u5FC5\u8981\uFF0C\u524D\u8FDB\u7684\u6B65\u4F10\u5C31\u5361\u6B7B\u5728\u8FD9\u8FB9\u4E86\u3002\u5927\u6982\u4E00\u76F4\u5230\u4E8610\u6708\u4EFD\uFF0C\u56E0\u4E3A vitepress \u5E26\u6765\u7684\u5F71\u54CD\uFF0C\u6211\u624D\u6700\u7EC8\u4E0B\u5B9A\u51B3\u5FC3\u653E\u5F03 yori\uFF0C\u5F7B\u5E95\u62E5\u62B1 Vue\u3002\r
\r
\u6881\u56ED\u867D\u597D\uFF0C\u4E0D\u662F\u4E45\u604B\u4E4B\u5BB6\u3002\u8FD9\u6B21\u662F\u53C8\u4E00\u6B21\u91CD\u65B0\u5F00\u59CB\uFF0C\u4E5F\u662F\u5BF9\u524D\u7AEF\u7684\u521D\u63A2\uFF0C\u53C2\u8003\u4E86 [Diu](https://ddiu.io/) \u7684\u6837\u5F0F\uFF0C~~\u5077~~\u5B66\u5230\u4E86\u4E0D\u5C11\u6709\u5173\u4E8E\u524D\u7AEF\u76F8\u5173\u7684\u6280\u672F\uFF08F12\u522B\u4EBA\u4EE3\u7801\u7684\u65F6\u5019\uFF09\u3002yori-vue \u76EE\u524D\u8FD8\u5728\u66F4\u65B0\u4E2D\uFF0C\u5F88\u591A\u529F\u80FD\u8FD8\u6CA1\u5199\u51FA\u6765\uFF0C\u672A\u6765\u4E5F\u8BB8\u4F1A\u66F4\u52A0\u6F02\u4EAE\u3002\u540C\u65F6\uFF0C\u90E8\u5206\u6587\u7AE0\u4E5F\u4F1A\u5728[\u77E5\u4E4E](https://www.zhihu.com/people/zhu-xing-da-15)\u540C\u6B65\uFF0C\u6B22\u8FCE\u5927\u5BB6\u524D\u6765\u89C2\u770B\u3002yori \u76EE\u524D\u53EA\u662F\u6682\u505C\u66F4\u65B0\uFF0C\u672A\u6765\u4E5F\u8BF4\u4E0D\u5B9A\u5462\u3002\r
\r
# \u6700\u540E\r
\r
\u6700\u540E\u7684\u6700\u540E\uFF0C\u6B22\u5E86\u65B0\u4E3B\u9898 yori-vue \u6210\u529F\u4E0A\u7EBF\uFF01\u5E0C\u671B\u770B\u5230\u8FD9\u91CC\u7684\u4F60\u4E5F\u80FD\u5F00\u5F00\u5FC3\u5FC3\uFF0C\u5FEB\u5FEB\u4E50\u4E50\uFF0C\u987A\u987A\u5229\u5229\uFF0C\u53D1\u53D1\u8D22\u8D22(\u2267\u2207\u2266)/\r
`,gb=Object.freeze(Object.defineProperty({__proto__:null,default:of},Symbol.toStringTag,{value:"Module"})),sf=`---\r
title: \u63D0\u95EE\u7684\u827A\u672F\r
date: 2022-11-21\r
tags:\r
  - \u4E00\u751F\u4E00\u82AF\r
brief: \u5173\u4E8E\u300A\u63D0\u95EE\u7684\u667A\u6167\u300B\u548C\u300A\u522B\u50CF\u5F31\u667A\u4E00\u6837\u63D0\u95EE\u300B\u7684\u8BFB\u540E\u611F\r
---\r
\r
# \u524D\u8A00\r
\r
\u5728\u771F\u6B63\u5F00\u59CB\u4E00\u7BC7\u8BFB\u540E\u611F\u4E4B\u524D\uFF0C\u6211\u7A81\u7136\u597D\u5947\uFF0C\u6211\u7684\u7B2C\u4E00\u6B21\u63D0\u95EE\u662F\u4EC0\u4E48\u6837\u7684\u3002\u4E8E\u662F\u6211\u5728\u767E\u5EA6\u77E5\u9053\u4E0A\u627E\u5230\u4E86\u6211\u63D0\u51FA\u7684\u7B2C\u4E00\u4E2A\u95EE\u9898\uFF1A\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/\u6355\u83B7.PNG)\r
\r
\u8F83\u771F\u7684\u5206\u6790\u4E00\u4E0B\uFF0C\u4E5F\u4E0D\u662F\u8BF4\u8FD9\u4E2A\u63D0\u95EE\u672C\u8EAB\u4E0D\u597D\uFF0C\u6BD5\u7ADF\u95EE\u9898\u592A\u8FC7\u7B80\u5355\u600E\u4E48\u95EE\u5176\u5B9E\u90FD\u4E0D\u4E3A\u8FC7\uFF0C\u4E8C\u8005\u4E5F\u4E0D\u80FD\u5BF9\u5C0F\u5B66\u751F\u7684\u6211\u82DB\u6C42\u592A\u591A\uFF0C\u4E0D\u8FC7\u8FD9\u91CC\u6700\u5927\u7684\u95EE\u9898\u662F\u4ED6\u4E0D\u5E94\u8BE5\u5728\u4E92\u8054\u7F51\u4E0A\u88AB\u95EE\u51FA\u6765\uFF0C\u56E0\u4E3A\u8FD9\u5B8C\u5168\u53EF\u4EE5\u901A\u8FC7\u641C\u7D22\u201C\u8D5E\u7F8E\u4ED6\u4EBA\u7684\u6210\u8BED\u201D\uFF0C\u6216\u8005\u7FFB\u9605\u81EA\u5DF1\u7684\u7B14\u8BB0\u6765\u89E3\u51B3\u3002\r
\r
\u6240\u4EE5\uFF0C\u63D0\u95EE\u7684\u6700\u4F73\u5B9E\u8DF5\u5176\u5B9E\u662F\u4E0D\u63D0\u95EE\uFF0C\u56E0\u4E3A\u901A\u7528\u7684\u95EE\u9898\u5927\u90E8\u5206\u5DF2\u7ECF\u901A\u8FC7\u4E92\u8054\u7F51\u5F97\u5230\u89E3\u7B54\uFF0C\u800C\u8FC7\u4E8E\u5177\u4F53\u4E13\u4E1A\u7684\u95EE\u9898\uFF0C\u6211\u503E\u5411\u4E8E\u7EBF\u4E0B\u6216\u8005\u5728\u4E13\u4E1A\u8BBA\u575B\u63D0\u95EE\uFF0C\u8FD9\u6837\u5F97\u5230\u56DE\u7B54\u7684\u6982\u7387\u4E5F\u4F1A\u5927\u5F88\u591A\u3002\r
\r
>\u5F53\u7136\u6709\u4E2A\u524D\u63D0\u662F\u5EFA\u7ACB\u5728\u4E92\u8054\u7F51\u4E0A\uFF0C\u53E6\u5916\u5F97\u662F\u6280\u672F\u95EE\u9898\uFF0C\u5343\u4E07\u4E0D\u8981\u5E26\u5165\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u804A\u5929\uFF0C\u6BD4\u5982\u522B\u4EBA\u6253\u7535\u8BDD\u95EE\u4F60\u201C\u4F60\u90A3\u8FB9\u5929\u6C14\u600E\u4E48\u6837\u201D\uFF0C\u4F60\u56DE\u4ED6\u4E00\u53E5\u201C\u8822\u8D27\uFF0C\u5929\u6C14\u597D\u4E0D\u597D\u4E0D\u4F1A\u4E0A\u7F51\u67E5\uFF1FSTFW\u53BB\uFF01\u201D\u3002\u90A3\u4E48\u6211\u76F8\u4FE1\u4EE5\u540E\u6CA1\u4EBA\u4F1A\u7ED9\u4F60\u6253\u7535\u8BDD\u4E86\u3002\r
\r
# \u6B63\u6587\r
\r
[\u63D0\u95EE\u7684\u667A\u6167](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)\u8FD9\u7BC7\u6587\u7AE0\u592A\u957F\u4E86\uFF0C\u5F88\u591A\u90FD\u662F\u5BF9\u4E00\u4E9B\u9006\u5929\u884C\u4E3A\u4F5C\u51FA\u6307\u5F15\uFF08\u6211\u662F\u65E0\u6CD5\u60F3\u8C61\u4E3A\u4EC0\u4E48\u8981\u5728\u63D0\u95EE\u65F6\u5199\u4E2A\u201C\u7D27\u6025\u201D\uFF09\u3002\u6240\u4EE5\uFF0C\u6211\u9488\u5BF9\u4E00\u4E9B\u81EA\u5DF1\u7684\u770B\u6CD5\u505A\u4E86\u603B\u7ED3\u3002\r
\r
\u53E6\u5916\uFF0C\u6211\u4E5F\u5BF9*\u5982\u4F55\u641C\u7D22\u95EE\u9898*\u548C*\u5982\u4F55\u56DE\u7B54\u95EE\u9898*\u505A\u4E86\u4E00\u4E9B\u81EA\u5DF1\u7684\u770B\u6CD5\u3002\r
\r
## \u641C\u7D22\u5F15\u64CE\r
\r
\u4E3A\u4EC0\u4E48\u4E0D\u63A8\u8350\u7528\u56FD\u5185\u641C\u7D22\u5F15\u64CE\r
\r
1. \u56FD\u5185\u641C\u7D22\u5F15\u64CE\u4E0D\u662F\u7CBE\u5EA6\u4E0D\u591F\uFF0C\u800C\u662F\u590D\u5236\u7C98\u8D34\u7684\u56DE\u7B54\u592A\u591A\u4E86\uFF0CCSDN\u7F6A\u5927\u6076\u6781\u3002\r
\r
2. github issue\u3001\u5B98\u65B9\u8BBA\u575B\u7B49\u5927\u90E8\u5206\u4F7F\u7528\u82F1\u6587\u3002\r
\r
3. \u56FD\u5185\u7F3A\u4E4F\u8F83\u4E3A\u7EDF\u4E00\u7684\u3001\u9762\u5411\u5927\u4F17\u6280\u672F\u7F51\u7AD9\u3002\r
\r
## \u81EA\u8EAB\u6280\u672F\u6C34\u5E73\r
\r
\u5FC5\u987B\u8BA4\u8BC6\u5230\u6280\u672F\u6C34\u5E73\u4F1A\u5F71\u54CD\u6211\u4EEC\u7684\u95EE\u9898\uFF0C\u6BD4\u5982\u4E00\u4E2AC\u8BED\u8A00\u65B0\u624B\u63D0\u95EE\u201C\u5982\u4F55\u5728linux\u73AF\u5883\u4E0B\u7F16\u8BD1C\u8BED\u8A00\u4EE3\u7801\u201D\uFF0C\u6211\u8BA4\u4E3A\u56DE\u7B54\u4ED6STFM\u4E5F\u662F\u4E0D\u8D1F\u8D23\u4EFB\u7684\u884C\u4E3A\u3002\r
\r
\u4F5C\u4E3A\u63D0\u95EE\u8005\uFF0C\u5E94\u8BE5\u601D\u8003\u95EE\u9898\u7684\u4EA7\u751F\u539F\u56E0\uFF0C\u662F\u5426\u51FA\u4E8E\u81EA\u5DF1\u77E5\u8BC6\u6C34\u5E73\u9650\u5236\uFF0C\u5982\u679C\u901A\u8FC7\u67D0\u65B9\u9762\u7684\u5B66\u4E60\uFF0C\u662F\u5426\u53EF\u4EE5\u89E3\u51B3\u6216\u4ECE\u65B0\u7684\u89D2\u5EA6\u770B\u5F85\u6211\u6240\u9047\u5230\u7684\u95EE\u9898\u3002\r
\r
\u4F5C\u4E3A\u56DE\u7B54\u8005\uFF0C\u4E5F\u5E94\u8BE5\u8BA4\u8BC6\u5230\u63D0\u95EE\u8005\u53EF\u80FD\u5E76\u975E\u4E0D\u4F1A\u63D0\u95EE\uFF0C\u4ED6\u53EF\u80FD\u4E0D\u77E5\u9053linux\u662F\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4E0D\u77E5\u9053gcc\u5DE5\u5177\uFF0C\u4E0D\u77E5\u9053C\u8BED\u8A00\u7684\u7F16\u8BD1\u8FC7\u7A0B\uFF0C\u8FD9\u4E9B\u77E5\u8BC6\u53EF\u4EE5\u901A\u8FC7\u6DF1\u5165\u5B66\u4E60\u89E3\u51B3\uFF0C\u4F46\u56DE\u7B54\u5E94\u8BE5\u5BF9\u521D\u5B66\u8005\u62A5\u4EE5\u5BBD\u5BB9\u3002\r
\r
## \u65F6\u95F4\u4E0E\u7248\u672C\r
\r
\u56E0\u4E3A\u6280\u672F\u8FED\u4EE3\uFF0C\u5F88\u591A\u6280\u672F\u95EE\u9898\u53EF\u80FD\u7ECF\u8FC71\u30012\u5E74\u7684\u65F6\u95F4\u5C31\u5DF2\u7ECF\u4E0D\u518D\u4F7F\u7528\uFF0C\u8BF7\u5C0F\u5FC3\u7504\u522B\u3002\r
\r
# \u6700\u540E\r
\r
## \u63D0\u95EE\u524D\r
\r
- \u5C1D\u8BD5\u5728\u4F60\u51C6\u5907\u63D0\u95EE\u7684\u8BBA\u575B\u7684\u65E7\u6587\u7AE0\u4E2D\u641C\u7D22\u7B54\u6848\u3002\r
- \u5C1D\u8BD5\u4E0A\u7F51\u641C\u7D22\u4EE5\u627E\u5230\u7B54\u6848\u3002\r
- \u5C1D\u8BD5\u9605\u8BFB\u624B\u518C\u4EE5\u627E\u5230\u7B54\u6848\u3002\r
- \u5C1D\u8BD5\u9605\u8BFB\u5E38\u89C1\u95EE\u9898\u6587\u4EF6\uFF08FAQ\uFF09\u4EE5\u627E\u5230\u7B54\u6848\u3002\r
- \u5C1D\u8BD5\u81EA\u5DF1\u68C0\u67E5\u6216\u8BD5\u9A8C\u4EE5\u627E\u5230\u7B54\u6848\u3002\r
- \u5411\u4F60\u8EAB\u8FB9\u7684\u5F3A\u8005\u670B\u53CB\u6253\u542C\u4EE5\u627E\u5230\u7B54\u6848\u3002\r
- \u5982\u679C\u4F60\u662F\u7A0B\u5E8F\u5F00\u53D1\u8005\uFF0C\u8BF7\u5C1D\u8BD5\u9605\u8BFB\u6E90\u4EE3\u7801\u4EE5\u627E\u5230\u7B54\u6848\u3002\r
\r
## \u63D0\u95EE\u65F6\r
\r
- \u4ED4\u7EC6\u3001\u6E05\u695A\u5730\u63CF\u8FF0\u4F60\u7684\u95EE\u9898\u6216 Bug \u7684\u75C7\u72B6\u3002\r
- \u63CF\u8FF0\u95EE\u9898\u53D1\u751F\u7684\u73AF\u5883\uFF08\u673A\u5668\u914D\u7F6E\u3001\u64CD\u4F5C\u7CFB\u7EDF\u3001\u5E94\u7528\u7A0B\u5E8F\u3001\u4EE5\u53CA\u76F8\u5173\u7684\u4FE1\u606F\uFF09\uFF0C\u63D0\u4F9B\u7ECF\u9500\u5546\u7684\u53D1\u884C\u7248\u548C\u7248\u672C\u53F7\uFF08\u5982\uFF1AFedora Core 4\u3001Slackware 9.1\u7B49\uFF09\u3002\r
- \u63CF\u8FF0\u5728\u63D0\u95EE\u524D\u4F60\u662F\u600E\u6837\u53BB\u7814\u7A76\u548C\u7406\u89E3\u8FD9\u4E2A\u95EE\u9898\u7684\u3002\r
- \u63CF\u8FF0\u5728\u63D0\u95EE\u524D\u4E3A\u786E\u5B9A\u95EE\u9898\u800C\u91C7\u53D6\u7684\u8BCA\u65AD\u6B65\u9AA4\u3002\r
- \u63CF\u8FF0\u6700\u8FD1\u505A\u8FC7\u4EC0\u4E48\u53EF\u80FD\u76F8\u5173\u7684\u786C\u4EF6\u6216\u8F6F\u4EF6\u53D8\u66F4\u3002\r
- \u5C3D\u53EF\u80FD\u5730\u63D0\u4F9B\u4E00\u4E2A\u53EF\u4EE5\u91CD\u73B0\u8FD9\u4E2A\u95EE\u9898\u7684\u53EF\u63A7\u73AF\u5883\u7684\u65B9\u6CD5\u3002\r
\r
## \u63D0\u95EE\u540E\r
\r
\u611F\u8C22\r
\r
# \u756A\u5916-0\r
\r
\u5439\u4E00\u6CE2 ysyx \u5F69\u8679\u5C41\uFF0C\u5199\u5B8C\u8BFB\u540E\u611F\u4E0D\u4E45\uFF0C\u6211\u63D0\u51FA\u4E86\u6211\u4EBA\u751F\u4E2D\u7684\u7B2C\u4E00\u4E2A[issue](https://github.com/rizsotto/Bear/issues/493)\uFF0C\u5E76\u83B7\u5F97\u4E86\u611F\u8C22\u{1F389}\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/\u6355\u83B7.PNG)\r
\r
\u4EE5\u524D\u8BF4\u5B9E\u8BDD\uFF0C\u4E5F\u4E0D\u662F\u4E0D\u770B\u82F1\u6587\u6587\u6863\uFF0C\u4F46\u591A\u5C11\u6709\u4E9B\u6297\u62D2\uFF0C\u73B0\u5728\u770B\u7684\u6BD4\u4E4B\u524D\u591A\u4E86\uFF08\u88AB\u8FEBXD\uFF09`,mb=Object.freeze(Object.defineProperty({__proto__:null,default:sf},Symbol.toStringTag,{value:"Module"}));function bb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function _b(e){var n=e.default;if(typeof n=="function"){var t=function(){return n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),t}var nr={exports:{}},Se={},tr={},Je={};function cf(e){return typeof e>"u"||e===null}function Eb(e){return typeof e=="object"&&e!==null}function vb(e){return Array.isArray(e)?e:cf(e)?[]:[e]}function yb(e,n){var t,r,o,i;if(n)for(i=Object.keys(n),t=0,r=i.length;t<r;t+=1)o=i[t],e[o]=n[o];return e}function xb(e,n){var t="",r;for(r=0;r<n;r+=1)t+=e;return t}function kb(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}Je.isNothing=cf;Je.isObject=Eb;Je.toArray=vb;Je.repeat=xb;Je.isNegativeZero=kb;Je.extend=yb;function Kt(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Kt.prototype=Object.create(Error.prototype);Kt.prototype.constructor=Kt;Kt.prototype.toString=function(n){var t=this.name+": ";return t+=this.reason||"(unknown reason)",!n&&this.mark&&(t+=" "+this.mark.toString()),t};var rr=Kt,Jc=Je;function Rs(e,n,t,r,o){this.name=e,this.buffer=n,this.position=t,this.line=r,this.column=o}Rs.prototype.getSnippet=function(n,t){var r,o,i,s,c;if(!this.buffer)return null;for(n=n||4,t=t||75,r="",o=this.position;o>0&&`\0\r
\x85\u2028\u2029`.indexOf(this.buffer.charAt(o-1))===-1;)if(o-=1,this.position-o>t/2-1){r=" ... ",o+=5;break}for(i="",s=this.position;s<this.buffer.length&&`\0\r
\x85\u2028\u2029`.indexOf(this.buffer.charAt(s))===-1;)if(s+=1,s-this.position>t/2-1){i=" ... ",s-=5;break}return c=this.buffer.slice(o,s),Jc.repeat(" ",n)+r+c+i+`
`+Jc.repeat(" ",n+this.position-o+r.length)+"^"};Rs.prototype.toString=function(n){var t,r="";return this.name&&(r+='in "'+this.name+'" '),r+="at line "+(this.line+1)+", column "+(this.column+1),n||(t=this.getSnippet(),t&&(r+=`:
`+t)),r};var wb=Rs,ea=rr,Ab=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],Cb=["scalar","sequence","mapping"];function Sb(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){n[String(r)]=t})}),n}function Tb(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(Ab.indexOf(t)===-1)throw new ea('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.defaultStyle=n.defaultStyle||null,this.styleAliases=Sb(n.styleAliases||null),Cb.indexOf(this.kind)===-1)throw new ea('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Ie=Tb,na=Je,Cr=rr,Nb=Ie;function Ki(e,n,t){var r=[];return e.include.forEach(function(o){t=Ki(o,n,t)}),e[n].forEach(function(o){t.forEach(function(i,s){i.tag===o.tag&&i.kind===o.kind&&r.push(s)}),t.push(o)}),t.filter(function(o,i){return r.indexOf(i)===-1})}function Rb(){var e={scalar:{},sequence:{},mapping:{},fallback:{}},n,t;function r(o){e[o.kind][o.tag]=e.fallback[o.tag]=o}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(r);return e}function ct(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach(function(n){if(n.loadKind&&n.loadKind!=="scalar")throw new Cr("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=Ki(this,"implicit",[]),this.compiledExplicit=Ki(this,"explicit",[]),this.compiledTypeMap=Rb(this.compiledImplicit,this.compiledExplicit)}ct.DEFAULT=null;ct.create=function(){var n,t;switch(arguments.length){case 1:n=ct.DEFAULT,t=arguments[0];break;case 2:n=arguments[0],t=arguments[1];break;default:throw new Cr("Wrong number of arguments for Schema.create function")}if(n=na.toArray(n),t=na.toArray(t),!n.every(function(r){return r instanceof ct}))throw new Cr("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!t.every(function(r){return r instanceof Nb}))throw new Cr("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new ct({include:n,explicit:t})};var At=ct,Ob=Ie,Ib=new Ob("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Lb=Ie,Mb=new Lb("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Db=Ie,Fb=new Db("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Pb=At,Os=new Pb({explicit:[Ib,Mb,Fb]}),Bb=Ie;function qb(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Ub(){return null}function zb(e){return e===null}var $b=new Bb("tag:yaml.org,2002:null",{kind:"scalar",resolve:qb,construct:Ub,predicate:zb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),Hb=Ie;function Gb(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Wb(e){return e==="true"||e==="True"||e==="TRUE"}function Kb(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Zb=new Hb("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Gb,construct:Wb,predicate:Kb,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"}),jb=Je,Vb=Ie;function Yb(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Xb(e){return 48<=e&&e<=55}function Qb(e){return 48<=e&&e<=57}function Jb(e){if(e===null)return!1;var n=e.length,t=0,r=!1,o;if(!n)return!1;if(o=e[t],(o==="-"||o==="+")&&(o=e[++t]),o==="0"){if(t+1===n)return!0;if(o=e[++t],o==="b"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(o!=="0"&&o!=="1")return!1;r=!0}return r&&o!=="_"}if(o==="x"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(!Yb(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}for(;t<n;t++)if(o=e[t],o!=="_"){if(!Xb(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}if(o==="_")return!1;for(;t<n;t++)if(o=e[t],o!=="_"){if(o===":")break;if(!Qb(e.charCodeAt(t)))return!1;r=!0}return!r||o==="_"?!1:o!==":"?!0:/^(:[0-5]?[0-9])+$/.test(e.slice(t))}function e_(e){var n=e,t=1,r,o,i=[];return n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),n=n.slice(1),r=n[0]),n==="0"?0:r==="0"?n[1]==="b"?t*parseInt(n.slice(2),2):n[1]==="x"?t*parseInt(n,16):t*parseInt(n,8):n.indexOf(":")!==-1?(n.split(":").forEach(function(s){i.unshift(parseInt(s,10))}),n=0,o=1,i.forEach(function(s){n+=s*o,o*=60}),t*n):t*parseInt(n,10)}function n_(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!jb.isNegativeZero(e)}var t_=new Vb("tag:yaml.org,2002:int",{kind:"scalar",resolve:Jb,construct:e_,predicate:n_,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0"+e.toString(8):"-0"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),af=Je,r_=Ie,o_=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function i_(e){return!(e===null||!o_.test(e)||e[e.length-1]==="_")}function s_(e){var n,t,r,o;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,o=[],"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:n.indexOf(":")>=0?(n.split(":").forEach(function(i){o.unshift(parseFloat(i,10))}),n=0,r=1,o.forEach(function(i){n+=i*r,r*=60}),t*n):t*parseFloat(n,10)}var c_=/^[-+]?[0-9]+e/;function a_(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(af.isNegativeZero(e))return"-0.0";return t=e.toString(10),c_.test(t)?t.replace("e",".e"):t}function l_(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||af.isNegativeZero(e))}var u_=new r_("tag:yaml.org,2002:float",{kind:"scalar",resolve:i_,construct:s_,predicate:l_,represent:a_,defaultStyle:"lowercase"}),f_=At,lf=new f_({include:[Os],implicit:[$b,Zb,t_,u_]}),d_=At,uf=new d_({include:[lf]}),p_=Ie,ff=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),df=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function h_(e){return e===null?!1:ff.exec(e)!==null||df.exec(e)!==null}function g_(e){var n,t,r,o,i,s,c,a=0,l=null,u,f,d;if(n=ff.exec(e),n===null&&(n=df.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],r=+n[2]-1,o=+n[3],!n[4])return new Date(Date.UTC(t,r,o));if(i=+n[4],s=+n[5],c=+n[6],n[7]){for(a=n[7].slice(0,3);a.length<3;)a+="0";a=+a}return n[9]&&(u=+n[10],f=+(n[11]||0),l=(u*60+f)*6e4,n[9]==="-"&&(l=-l)),d=new Date(Date.UTC(t,r,o,i,s,c,a)),l&&d.setTime(d.getTime()-l),d}function m_(e){return e.toISOString()}var b_=new p_("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:h_,construct:g_,instanceOf:Date,represent:m_}),__=Ie;function E_(e){return e==="<<"||e===null}var v_=new __("tag:yaml.org,2002:merge",{kind:"scalar",resolve:E_});function pf(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Kn;try{var y_=pf;Kn=y_("buffer").Buffer}catch{}var x_=Ie,Is=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function k_(e){if(e===null)return!1;var n,t,r=0,o=e.length,i=Is;for(t=0;t<o;t++)if(n=i.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function w_(e){var n,t,r=e.replace(/[\r\n=]/g,""),o=r.length,i=Is,s=0,c=[];for(n=0;n<o;n++)n%4===0&&n&&(c.push(s>>16&255),c.push(s>>8&255),c.push(s&255)),s=s<<6|i.indexOf(r.charAt(n));return t=o%4*6,t===0?(c.push(s>>16&255),c.push(s>>8&255),c.push(s&255)):t===18?(c.push(s>>10&255),c.push(s>>2&255)):t===12&&c.push(s>>4&255),Kn?Kn.from?Kn.from(c):new Kn(c):c}function A_(e){var n="",t=0,r,o,i=e.length,s=Is;for(r=0;r<i;r++)r%3===0&&r&&(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]),t=(t<<8)+e[r];return o=i%3,o===0?(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]):o===2?(n+=s[t>>10&63],n+=s[t>>4&63],n+=s[t<<2&63],n+=s[64]):o===1&&(n+=s[t>>2&63],n+=s[t<<4&63],n+=s[64],n+=s[64]),n}function C_(e){return Kn&&Kn.isBuffer(e)}var S_=new x_("tag:yaml.org,2002:binary",{kind:"scalar",resolve:k_,construct:w_,predicate:C_,represent:A_}),T_=Ie,N_=Object.prototype.hasOwnProperty,R_=Object.prototype.toString;function O_(e){if(e===null)return!0;var n=[],t,r,o,i,s,c=e;for(t=0,r=c.length;t<r;t+=1){if(o=c[t],s=!1,R_.call(o)!=="[object Object]")return!1;for(i in o)if(N_.call(o,i))if(!s)s=!0;else return!1;if(!s)return!1;if(n.indexOf(i)===-1)n.push(i);else return!1}return!0}function I_(e){return e!==null?e:[]}var L_=new T_("tag:yaml.org,2002:omap",{kind:"sequence",resolve:O_,construct:I_}),M_=Ie,D_=Object.prototype.toString;function F_(e){if(e===null)return!0;var n,t,r,o,i,s=e;for(i=new Array(s.length),n=0,t=s.length;n<t;n+=1){if(r=s[n],D_.call(r)!=="[object Object]"||(o=Object.keys(r),o.length!==1))return!1;i[n]=[o[0],r[o[0]]]}return!0}function P_(e){if(e===null)return[];var n,t,r,o,i,s=e;for(i=new Array(s.length),n=0,t=s.length;n<t;n+=1)r=s[n],o=Object.keys(r),i[n]=[o[0],r[o[0]]];return i}var B_=new M_("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:F_,construct:P_}),q_=Ie,U_=Object.prototype.hasOwnProperty;function z_(e){if(e===null)return!0;var n,t=e;for(n in t)if(U_.call(t,n)&&t[n]!==null)return!1;return!0}function $_(e){return e!==null?e:{}}var H_=new q_("tag:yaml.org,2002:set",{kind:"mapping",resolve:z_,construct:$_}),G_=At,or=new G_({include:[uf],implicit:[b_,v_],explicit:[S_,L_,B_,H_]}),W_=Ie;function K_(){return!0}function Z_(){}function j_(){return""}function V_(e){return typeof e>"u"}var Y_=new W_("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:K_,construct:Z_,predicate:V_,represent:j_}),X_=Ie;function Q_(e){if(e===null||e.length===0)return!1;var n=e,t=/\/([gim]*)$/.exec(e),r="";return!(n[0]==="/"&&(t&&(r=t[1]),r.length>3||n[n.length-r.length-1]!=="/"))}function J_(e){var n=e,t=/\/([gim]*)$/.exec(e),r="";return n[0]==="/"&&(t&&(r=t[1]),n=n.slice(1,n.length-r.length-1)),new RegExp(n,r)}function e0(e){var n="/"+e.source+"/";return e.global&&(n+="g"),e.multiline&&(n+="m"),e.ignoreCase&&(n+="i"),n}function n0(e){return Object.prototype.toString.call(e)==="[object RegExp]"}var t0=new X_("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:Q_,construct:J_,predicate:n0,represent:e0}),Mr;try{var r0=pf;Mr=r0("esprima")}catch{typeof window<"u"&&(Mr=window.esprima)}var o0=Ie;function i0(e){if(e===null)return!1;try{var n="("+e+")",t=Mr.parse(n,{range:!0});return!(t.type!=="Program"||t.body.length!==1||t.body[0].type!=="ExpressionStatement"||t.body[0].expression.type!=="ArrowFunctionExpression"&&t.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function s0(e){var n="("+e+")",t=Mr.parse(n,{range:!0}),r=[],o;if(t.type!=="Program"||t.body.length!==1||t.body[0].type!=="ExpressionStatement"||t.body[0].expression.type!=="ArrowFunctionExpression"&&t.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return t.body[0].expression.params.forEach(function(i){r.push(i.name)}),o=t.body[0].expression.body.range,t.body[0].expression.body.type==="BlockStatement"?new Function(r,n.slice(o[0]+1,o[1]-1)):new Function(r,"return "+n.slice(o[0],o[1]))}function c0(e){return e.toString()}function a0(e){return Object.prototype.toString.call(e)==="[object Function]"}var l0=new o0("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:i0,construct:s0,predicate:a0,represent:c0}),ta=At,ro=ta.DEFAULT=new ta({include:[or],explicit:[Y_,t0,l0]}),yn=Je,hf=rr,u0=wb,gf=or,f0=ro,Mn=Object.prototype.hasOwnProperty,Dr=1,mf=2,bf=3,Fr=4,No=1,d0=2,ra=3,p0=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,h0=/[\x85\u2028\u2029]/,g0=/[,\[\]\{\}]/,_f=/^(?:!|!!|![a-z\-]+!)$/i,Ef=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function oa(e){return Object.prototype.toString.call(e)}function gn(e){return e===10||e===13}function Yn(e){return e===9||e===32}function $e(e){return e===9||e===32||e===10||e===13}function at(e){return e===44||e===91||e===93||e===123||e===125}function m0(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function b0(e){return e===120?2:e===117?4:e===85?8:0}function _0(e){return 48<=e&&e<=57?e-48:-1}function ia(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function E0(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var vf=new Array(256),yf=new Array(256);for(var rt=0;rt<256;rt++)vf[rt]=ia(rt)?1:0,yf[rt]=ia(rt);function v0(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||f0,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function xf(e,n){return new hf(n,new u0(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function J(e,n){throw xf(e,n)}function Pr(e,n){e.onWarning&&e.onWarning.call(null,xf(e,n))}var sa={YAML:function(n,t,r){var o,i,s;n.version!==null&&J(n,"duplication of %YAML directive"),r.length!==1&&J(n,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),o===null&&J(n,"ill-formed argument of the YAML directive"),i=parseInt(o[1],10),s=parseInt(o[2],10),i!==1&&J(n,"unacceptable YAML version of the document"),n.version=r[0],n.checkLineBreaks=s<2,s!==1&&s!==2&&Pr(n,"unsupported YAML version of the document")},TAG:function(n,t,r){var o,i;r.length!==2&&J(n,"TAG directive accepts exactly two arguments"),o=r[0],i=r[1],_f.test(o)||J(n,"ill-formed tag handle (first argument) of the TAG directive"),Mn.call(n.tagMap,o)&&J(n,'there is a previously declared suffix for "'+o+'" tag handle'),Ef.test(i)||J(n,"ill-formed tag prefix (second argument) of the TAG directive"),n.tagMap[o]=i}};function On(e,n,t,r){var o,i,s,c;if(n<t){if(c=e.input.slice(n,t),r)for(o=0,i=c.length;o<i;o+=1)s=c.charCodeAt(o),s===9||32<=s&&s<=1114111||J(e,"expected valid JSON character");else p0.test(c)&&J(e,"the stream contains non-printable characters");e.result+=c}}function ca(e,n,t,r){var o,i,s,c;for(yn.isObject(t)||J(e,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(t),s=0,c=o.length;s<c;s+=1)i=o[s],Mn.call(n,i)||(n[i]=t[i],r[i]=!0)}function lt(e,n,t,r,o,i,s,c){var a,l;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),a=0,l=o.length;a<l;a+=1)Array.isArray(o[a])&&J(e,"nested arrays are not supported inside keys"),typeof o=="object"&&oa(o[a])==="[object Object]"&&(o[a]="[object Object]");if(typeof o=="object"&&oa(o)==="[object Object]"&&(o="[object Object]"),o=String(o),n===null&&(n={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(i))for(a=0,l=i.length;a<l;a+=1)ca(e,n,i[a],t);else ca(e,n,i,t);else!e.json&&!Mn.call(t,o)&&Mn.call(n,o)&&(e.line=s||e.line,e.position=c||e.position,J(e,"duplicated mapping key")),n[o]=i,delete t[o];return n}function Ls(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):J(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function Ne(e,n,t){for(var r=0,o=e.input.charCodeAt(e.position);o!==0;){for(;Yn(o);)o=e.input.charCodeAt(++e.position);if(n&&o===35)do o=e.input.charCodeAt(++e.position);while(o!==10&&o!==13&&o!==0);if(gn(o))for(Ls(e),o=e.input.charCodeAt(e.position),r++,e.lineIndent=0;o===32;)e.lineIndent++,o=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&Pr(e,"deficient indentation"),r}function oo(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||$e(t)))}function Ms(e,n){n===1?e.result+=" ":n>1&&(e.result+=yn.repeat(`
`,n-1))}function y0(e,n,t){var r,o,i,s,c,a,l,u,f=e.kind,d=e.result,p;if(p=e.input.charCodeAt(e.position),$e(p)||at(p)||p===35||p===38||p===42||p===33||p===124||p===62||p===39||p===34||p===37||p===64||p===96||(p===63||p===45)&&(o=e.input.charCodeAt(e.position+1),$e(o)||t&&at(o)))return!1;for(e.kind="scalar",e.result="",i=s=e.position,c=!1;p!==0;){if(p===58){if(o=e.input.charCodeAt(e.position+1),$e(o)||t&&at(o))break}else if(p===35){if(r=e.input.charCodeAt(e.position-1),$e(r))break}else{if(e.position===e.lineStart&&oo(e)||t&&at(p))break;if(gn(p))if(a=e.line,l=e.lineStart,u=e.lineIndent,Ne(e,!1,-1),e.lineIndent>=n){c=!0,p=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=a,e.lineStart=l,e.lineIndent=u;break}}c&&(On(e,i,s,!1),Ms(e,e.line-a),i=s=e.position,c=!1),Yn(p)||(s=e.position+1),p=e.input.charCodeAt(++e.position)}return On(e,i,s,!1),e.result?!0:(e.kind=f,e.result=d,!1)}function x0(e,n){var t,r,o;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=o=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(On(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,o=e.position;else return!0;else gn(t)?(On(e,r,o,!0),Ms(e,Ne(e,!1,n)),r=o=e.position):e.position===e.lineStart&&oo(e)?J(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);J(e,"unexpected end of the stream within a single quoted scalar")}function k0(e,n){var t,r,o,i,s,c;if(c=e.input.charCodeAt(e.position),c!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(c=e.input.charCodeAt(e.position))!==0;){if(c===34)return On(e,t,e.position,!0),e.position++,!0;if(c===92){if(On(e,t,e.position,!0),c=e.input.charCodeAt(++e.position),gn(c))Ne(e,!1,n);else if(c<256&&vf[c])e.result+=yf[c],e.position++;else if((s=b0(c))>0){for(o=s,i=0;o>0;o--)c=e.input.charCodeAt(++e.position),(s=m0(c))>=0?i=(i<<4)+s:J(e,"expected hexadecimal character");e.result+=E0(i),e.position++}else J(e,"unknown escape sequence");t=r=e.position}else gn(c)?(On(e,t,r,!0),Ms(e,Ne(e,!1,n)),t=r=e.position):e.position===e.lineStart&&oo(e)?J(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}J(e,"unexpected end of the stream within a double quoted scalar")}function w0(e,n){var t=!0,r,o=e.tag,i,s=e.anchor,c,a,l,u,f,d={},p,g,m,E;if(E=e.input.charCodeAt(e.position),E===91)a=93,f=!1,i=[];else if(E===123)a=125,f=!0,i={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=i),E=e.input.charCodeAt(++e.position);E!==0;){if(Ne(e,!0,n),E=e.input.charCodeAt(e.position),E===a)return e.position++,e.tag=o,e.anchor=s,e.kind=f?"mapping":"sequence",e.result=i,!0;t||J(e,"missed comma between flow collection entries"),g=p=m=null,l=u=!1,E===63&&(c=e.input.charCodeAt(e.position+1),$e(c)&&(l=u=!0,e.position++,Ne(e,!0,n))),r=e.line,vt(e,n,Dr,!1,!0),g=e.tag,p=e.result,Ne(e,!0,n),E=e.input.charCodeAt(e.position),(u||e.line===r)&&E===58&&(l=!0,E=e.input.charCodeAt(++e.position),Ne(e,!0,n),vt(e,n,Dr,!1,!0),m=e.result),f?lt(e,i,d,g,p,m):l?i.push(lt(e,null,d,g,p,m)):i.push(p),Ne(e,!0,n),E=e.input.charCodeAt(e.position),E===44?(t=!0,E=e.input.charCodeAt(++e.position)):t=!1}J(e,"unexpected end of the stream within a flow collection")}function A0(e,n){var t,r,o=No,i=!1,s=!1,c=n,a=0,l=!1,u,f;if(f=e.input.charCodeAt(e.position),f===124)r=!1;else if(f===62)r=!0;else return!1;for(e.kind="scalar",e.result="";f!==0;)if(f=e.input.charCodeAt(++e.position),f===43||f===45)No===o?o=f===43?ra:d0:J(e,"repeat of a chomping mode identifier");else if((u=_0(f))>=0)u===0?J(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?J(e,"repeat of an indentation width identifier"):(c=n+u-1,s=!0);else break;if(Yn(f)){do f=e.input.charCodeAt(++e.position);while(Yn(f));if(f===35)do f=e.input.charCodeAt(++e.position);while(!gn(f)&&f!==0)}for(;f!==0;){for(Ls(e),e.lineIndent=0,f=e.input.charCodeAt(e.position);(!s||e.lineIndent<c)&&f===32;)e.lineIndent++,f=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>c&&(c=e.lineIndent),gn(f)){a++;continue}if(e.lineIndent<c){o===ra?e.result+=yn.repeat(`
`,i?1+a:a):o===No&&i&&(e.result+=`
`);break}for(r?Yn(f)?(l=!0,e.result+=yn.repeat(`
`,i?1+a:a)):l?(l=!1,e.result+=yn.repeat(`
`,a+1)):a===0?i&&(e.result+=" "):e.result+=yn.repeat(`
`,a):e.result+=yn.repeat(`
`,i?1+a:a),i=!0,s=!0,a=0,t=e.position;!gn(f)&&f!==0;)f=e.input.charCodeAt(++e.position);On(e,t,e.position,!1)}return!0}function aa(e,n){var t,r=e.tag,o=e.anchor,i=[],s,c=!1,a;for(e.anchor!==null&&(e.anchorMap[e.anchor]=i),a=e.input.charCodeAt(e.position);a!==0&&!(a!==45||(s=e.input.charCodeAt(e.position+1),!$e(s)));){if(c=!0,e.position++,Ne(e,!0,-1)&&e.lineIndent<=n){i.push(null),a=e.input.charCodeAt(e.position);continue}if(t=e.line,vt(e,n,bf,!1,!0),i.push(e.result),Ne(e,!0,-1),a=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&a!==0)J(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return c?(e.tag=r,e.anchor=o,e.kind="sequence",e.result=i,!0):!1}function C0(e,n,t){var r,o,i,s,c=e.tag,a=e.anchor,l={},u={},f=null,d=null,p=null,g=!1,m=!1,E;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),E=e.input.charCodeAt(e.position);E!==0;){if(r=e.input.charCodeAt(e.position+1),i=e.line,s=e.position,(E===63||E===58)&&$e(r))E===63?(g&&(lt(e,l,u,f,d,null),f=d=p=null),m=!0,g=!0,o=!0):g?(g=!1,o=!0):J(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,E=r;else if(vt(e,t,mf,!1,!0))if(e.line===i){for(E=e.input.charCodeAt(e.position);Yn(E);)E=e.input.charCodeAt(++e.position);if(E===58)E=e.input.charCodeAt(++e.position),$e(E)||J(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(lt(e,l,u,f,d,null),f=d=p=null),m=!0,g=!1,o=!1,f=e.tag,d=e.result;else if(m)J(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=c,e.anchor=a,!0}else if(m)J(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=c,e.anchor=a,!0;else break;if((e.line===i||e.lineIndent>n)&&(vt(e,n,Fr,!0,o)&&(g?d=e.result:p=e.result),g||(lt(e,l,u,f,d,p,i,s),f=d=p=null),Ne(e,!0,-1),E=e.input.charCodeAt(e.position)),e.lineIndent>n&&E!==0)J(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return g&&lt(e,l,u,f,d,null),m&&(e.tag=c,e.anchor=a,e.kind="mapping",e.result=l),m}function S0(e){var n,t=!1,r=!1,o,i,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&J(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(t=!0,s=e.input.charCodeAt(++e.position)):s===33?(r=!0,o="!!",s=e.input.charCodeAt(++e.position)):o="!",n=e.position,t){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(i=e.input.slice(n,e.position),s=e.input.charCodeAt(++e.position)):J(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!$e(s);)s===33&&(r?J(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(n-1,e.position+1),_f.test(o)||J(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),s=e.input.charCodeAt(++e.position);i=e.input.slice(n,e.position),g0.test(i)&&J(e,"tag suffix cannot contain flow indicator characters")}return i&&!Ef.test(i)&&J(e,"tag name cannot contain such characters: "+i),t?e.tag=i:Mn.call(e.tagMap,o)?e.tag=e.tagMap[o]+i:o==="!"?e.tag="!"+i:o==="!!"?e.tag="tag:yaml.org,2002:"+i:J(e,'undeclared tag handle "'+o+'"'),!0}function T0(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&J(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!$e(t)&&!at(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&J(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function N0(e){var n,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!$e(r)&&!at(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&J(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),Mn.call(e.anchorMap,t)||J(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],Ne(e,!0,-1),!0}function vt(e,n,t,r,o){var i,s,c,a=1,l=!1,u=!1,f,d,p,g,m;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,i=s=c=Fr===t||bf===t,r&&Ne(e,!0,-1)&&(l=!0,e.lineIndent>n?a=1:e.lineIndent===n?a=0:e.lineIndent<n&&(a=-1)),a===1)for(;S0(e)||T0(e);)Ne(e,!0,-1)?(l=!0,c=i,e.lineIndent>n?a=1:e.lineIndent===n?a=0:e.lineIndent<n&&(a=-1)):c=!1;if(c&&(c=l||o),(a===1||Fr===t)&&(Dr===t||mf===t?g=n:g=n+1,m=e.position-e.lineStart,a===1?c&&(aa(e,m)||C0(e,m,g))||w0(e,g)?u=!0:(s&&A0(e,g)||x0(e,g)||k0(e,g)?u=!0:N0(e)?(u=!0,(e.tag!==null||e.anchor!==null)&&J(e,"alias node should not have any properties")):y0(e,g,Dr===t)&&(u=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):a===0&&(u=c&&aa(e,m))),e.tag!==null&&e.tag!=="!")if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&J(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),f=0,d=e.implicitTypes.length;f<d;f+=1)if(p=e.implicitTypes[f],p.resolve(e.result)){e.result=p.construct(e.result),e.tag=p.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else Mn.call(e.typeMap[e.kind||"fallback"],e.tag)?(p=e.typeMap[e.kind||"fallback"][e.tag],e.result!==null&&p.kind!==e.kind&&J(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+p.kind+'", not "'+e.kind+'"'),p.resolve(e.result)?(e.result=p.construct(e.result),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):J(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):J(e,"unknown tag !<"+e.tag+">");return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||u}function R0(e){var n=e.position,t,r,o,i=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};(s=e.input.charCodeAt(e.position))!==0&&(Ne(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(i=!0,s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!$e(s);)s=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),o=[],r.length<1&&J(e,"directive name must not be less than one character in length");s!==0;){for(;Yn(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!gn(s));break}if(gn(s))break;for(t=e.position;s!==0&&!$e(s);)s=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}s!==0&&Ls(e),Mn.call(sa,r)?sa[r](e,r,o):Pr(e,'unknown document directive "'+r+'"')}if(Ne(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,Ne(e,!0,-1)):i&&J(e,"directives end mark is expected"),vt(e,e.lineIndent-1,Fr,!1,!0),Ne(e,!0,-1),e.checkLineBreaks&&h0.test(e.input.slice(n,e.position))&&Pr(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&oo(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,Ne(e,!0,-1));return}if(e.position<e.length-1)J(e,"end of the stream or a document separator is expected");else return}function kf(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new v0(e,n),r=e.indexOf("\0");for(r!==-1&&(t.position=r,J(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)R0(t);return t.documents}function wf(e,n,t){n!==null&&typeof n=="object"&&typeof t>"u"&&(t=n,n=null);var r=kf(e,t);if(typeof n!="function")return r;for(var o=0,i=r.length;o<i;o+=1)n(r[o])}function Af(e,n){var t=kf(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new hf("expected a single document in the stream, but found more")}}function O0(e,n,t){return typeof n=="object"&&n!==null&&typeof t>"u"&&(t=n,n=null),wf(e,n,yn.extend({schema:gf},t))}function I0(e,n){return Af(e,yn.extend({schema:gf},n))}tr.loadAll=wf;tr.load=Af;tr.safeLoadAll=O0;tr.safeLoad=I0;var Ds={},ir=Je,sr=rr,L0=ro,M0=or,Cf=Object.prototype.toString,Sf=Object.prototype.hasOwnProperty,D0=9,Zt=10,F0=13,P0=32,B0=33,q0=34,Tf=35,U0=37,z0=38,$0=39,H0=42,Nf=44,G0=45,Rf=58,W0=61,K0=62,Z0=63,j0=64,Of=91,If=93,V0=96,Lf=123,Y0=124,Mf=125,qe={};qe[0]="\\0";qe[7]="\\a";qe[8]="\\b";qe[9]="\\t";qe[10]="\\n";qe[11]="\\v";qe[12]="\\f";qe[13]="\\r";qe[27]="\\e";qe[34]='\\"';qe[92]="\\\\";qe[133]="\\N";qe[160]="\\_";qe[8232]="\\L";qe[8233]="\\P";var X0=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function Q0(e,n){var t,r,o,i,s,c,a;if(n===null)return{};for(t={},r=Object.keys(n),o=0,i=r.length;o<i;o+=1)s=r[o],c=String(n[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),a=e.compiledTypeMap.fallback[s],a&&Sf.call(a.styleAliases,c)&&(c=a.styleAliases[c]),t[s]=c;return t}function la(e){var n,t,r;if(n=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new sr("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+ir.repeat("0",r-n.length)+n}function J0(e){this.schema=e.schema||L0,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=ir.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=Q0(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function ua(e,n){for(var t=ir.repeat(" ",n),r=0,o=-1,i="",s,c=e.length;r<c;)o=e.indexOf(`
`,r),o===-1?(s=e.slice(r),r=c):(s=e.slice(r,o+1),r=o+1),s.length&&s!==`
`&&(i+=t),i+=s;return i}function Zi(e,n){return`
`+ir.repeat(" ",e.indent*n)}function eE(e,n){var t,r,o;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(o=e.implicitTypes[t],o.resolve(n))return!0;return!1}function Fs(e){return e===P0||e===D0}function yt(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==65279||65536<=e&&e<=1114111}function nE(e){return yt(e)&&!Fs(e)&&e!==65279&&e!==F0&&e!==Zt}function fa(e,n){return yt(e)&&e!==65279&&e!==Nf&&e!==Of&&e!==If&&e!==Lf&&e!==Mf&&e!==Rf&&(e!==Tf||n&&nE(n))}function tE(e){return yt(e)&&e!==65279&&!Fs(e)&&e!==G0&&e!==Z0&&e!==Rf&&e!==Nf&&e!==Of&&e!==If&&e!==Lf&&e!==Mf&&e!==Tf&&e!==z0&&e!==H0&&e!==B0&&e!==Y0&&e!==W0&&e!==K0&&e!==$0&&e!==q0&&e!==U0&&e!==j0&&e!==V0}function Df(e){var n=/^\n* /;return n.test(e)}var Ff=1,Pf=2,Bf=3,qf=4,Sr=5;function rE(e,n,t,r,o){var i,s,c,a=!1,l=!1,u=r!==-1,f=-1,d=tE(e.charCodeAt(0))&&!Fs(e.charCodeAt(e.length-1));if(n)for(i=0;i<e.length;i++){if(s=e.charCodeAt(i),!yt(s))return Sr;c=i>0?e.charCodeAt(i-1):null,d=d&&fa(s,c)}else{for(i=0;i<e.length;i++){if(s=e.charCodeAt(i),s===Zt)a=!0,u&&(l=l||i-f-1>r&&e[f+1]!==" ",f=i);else if(!yt(s))return Sr;c=i>0?e.charCodeAt(i-1):null,d=d&&fa(s,c)}l=l||u&&i-f-1>r&&e[f+1]!==" "}return!a&&!l?d&&!o(e)?Ff:Pf:t>9&&Df(e)?Sr:l?qf:Bf}function oE(e,n,t,r){e.dump=function(){if(n.length===0)return"''";if(!e.noCompatMode&&X0.indexOf(n)!==-1)return"'"+n+"'";var o=e.indent*Math.max(1,t),i=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),s=r||e.flowLevel>-1&&t>=e.flowLevel;function c(a){return eE(e,a)}switch(rE(n,s,e.indent,i,c)){case Ff:return n;case Pf:return"'"+n.replace(/'/g,"''")+"'";case Bf:return"|"+da(n,e.indent)+pa(ua(n,o));case qf:return">"+da(n,e.indent)+pa(ua(iE(n,i),o));case Sr:return'"'+sE(n)+'"';default:throw new sr("impossible error: invalid scalar style")}}()}function da(e,n){var t=Df(e)?String(n):"",r=e[e.length-1]===`
`,o=r&&(e[e.length-2]===`
`||e===`
`),i=o?"+":r?"":"-";return t+i+`
`}function pa(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function iE(e,n){for(var t=/(\n+)([^\n]*)/g,r=function(){var l=e.indexOf(`
`);return l=l!==-1?l:e.length,t.lastIndex=l,ha(e.slice(0,l),n)}(),o=e[0]===`
`||e[0]===" ",i,s;s=t.exec(e);){var c=s[1],a=s[2];i=a[0]===" ",r+=c+(!o&&!i&&a!==""?`
`:"")+ha(a,n),o=i}return r}function ha(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,o=0,i,s=0,c=0,a="";r=t.exec(e);)c=r.index,c-o>n&&(i=s>o?s:c,a+=`
`+e.slice(o,i),o=i+1),s=c;return a+=`
`,e.length-o>n&&s>o?a+=e.slice(o,s)+`
`+e.slice(s+1):a+=e.slice(o),a.slice(1)}function sE(e){for(var n="",t,r,o,i=0;i<e.length;i++){if(t=e.charCodeAt(i),t>=55296&&t<=56319&&(r=e.charCodeAt(i+1),r>=56320&&r<=57343)){n+=la((t-55296)*1024+r-56320+65536),i++;continue}o=qe[t],n+=!o&&yt(t)?e[i]:o||la(t)}return n}function cE(e,n,t){var r="",o=e.tag,i,s;for(i=0,s=t.length;i<s;i+=1)Qn(e,n,t[i],!1,!1)&&(i!==0&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=o,e.dump="["+r+"]"}function aE(e,n,t,r){var o="",i=e.tag,s,c;for(s=0,c=t.length;s<c;s+=1)Qn(e,n+1,t[s],!0,!0)&&((!r||s!==0)&&(o+=Zi(e,n)),e.dump&&Zt===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump);e.tag=i,e.dump=o||"[]"}function lE(e,n,t){var r="",o=e.tag,i=Object.keys(t),s,c,a,l,u;for(s=0,c=i.length;s<c;s+=1)u="",s!==0&&(u+=", "),e.condenseFlow&&(u+='"'),a=i[s],l=t[a],Qn(e,n,a,!1,!1)&&(e.dump.length>1024&&(u+="? "),u+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Qn(e,n,l,!1,!1)&&(u+=e.dump,r+=u));e.tag=o,e.dump="{"+r+"}"}function uE(e,n,t,r){var o="",i=e.tag,s=Object.keys(t),c,a,l,u,f,d;if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys=="function")s.sort(e.sortKeys);else if(e.sortKeys)throw new sr("sortKeys must be a boolean or a function");for(c=0,a=s.length;c<a;c+=1)d="",(!r||c!==0)&&(d+=Zi(e,n)),l=s[c],u=t[l],Qn(e,n+1,l,!0,!0,!0)&&(f=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,f&&(e.dump&&Zt===e.dump.charCodeAt(0)?d+="?":d+="? "),d+=e.dump,f&&(d+=Zi(e,n)),Qn(e,n+1,u,!0,f)&&(e.dump&&Zt===e.dump.charCodeAt(0)?d+=":":d+=": ",d+=e.dump,o+=d));e.tag=i,e.dump=o||"{}"}function ga(e,n,t){var r,o,i,s,c,a;for(o=t?e.explicitTypes:e.implicitTypes,i=0,s=o.length;i<s;i+=1)if(c=o[i],(c.instanceOf||c.predicate)&&(!c.instanceOf||typeof n=="object"&&n instanceof c.instanceOf)&&(!c.predicate||c.predicate(n))){if(e.tag=t?c.tag:"?",c.represent){if(a=e.styleMap[c.tag]||c.defaultStyle,Cf.call(c.represent)==="[object Function]")r=c.represent(n,a);else if(Sf.call(c.represent,a))r=c.represent[a](n,a);else throw new sr("!<"+c.tag+'> tag resolver accepts not "'+a+'" style');e.dump=r}return!0}return!1}function Qn(e,n,t,r,o,i){e.tag=null,e.dump=t,ga(e,t,!1)||ga(e,t,!0);var s=Cf.call(e.dump);r&&(r=e.flowLevel<0||e.flowLevel>n);var c=s==="[object Object]"||s==="[object Array]",a,l;if(c&&(a=e.duplicates.indexOf(t),l=a!==-1),(e.tag!==null&&e.tag!=="?"||l||e.indent!==2&&n>0)&&(o=!1),l&&e.usedDuplicates[a])e.dump="*ref_"+a;else{if(c&&l&&!e.usedDuplicates[a]&&(e.usedDuplicates[a]=!0),s==="[object Object]")r&&Object.keys(e.dump).length!==0?(uE(e,n,e.dump,o),l&&(e.dump="&ref_"+a+e.dump)):(lE(e,n,e.dump),l&&(e.dump="&ref_"+a+" "+e.dump));else if(s==="[object Array]"){var u=e.noArrayIndent&&n>0?n-1:n;r&&e.dump.length!==0?(aE(e,u,e.dump,o),l&&(e.dump="&ref_"+a+e.dump)):(cE(e,u,e.dump),l&&(e.dump="&ref_"+a+" "+e.dump))}else if(s==="[object String]")e.tag!=="?"&&oE(e,e.dump,n,i);else{if(e.skipInvalid)return!1;throw new sr("unacceptable kind of an object to dump "+s)}e.tag!==null&&e.tag!=="?"&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function fE(e,n){var t=[],r=[],o,i;for(ji(e,t,r),o=0,i=r.length;o<i;o+=1)n.duplicates.push(t[r[o]]);n.usedDuplicates=new Array(i)}function ji(e,n,t){var r,o,i;if(e!==null&&typeof e=="object")if(o=n.indexOf(e),o!==-1)t.indexOf(o)===-1&&t.push(o);else if(n.push(e),Array.isArray(e))for(o=0,i=e.length;o<i;o+=1)ji(e[o],n,t);else for(r=Object.keys(e),o=0,i=r.length;o<i;o+=1)ji(e[r[o]],n,t)}function Uf(e,n){n=n||{};var t=new J0(n);return t.noRefs||fE(e,t),Qn(t,0,e,!0,!0)?t.dump+`
`:""}function dE(e,n){return Uf(e,ir.extend({schema:M0},n))}Ds.dump=Uf;Ds.safeDump=dE;var io=tr,zf=Ds;function so(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}Se.Type=Ie;Se.Schema=At;Se.FAILSAFE_SCHEMA=Os;Se.JSON_SCHEMA=lf;Se.CORE_SCHEMA=uf;Se.DEFAULT_SAFE_SCHEMA=or;Se.DEFAULT_FULL_SCHEMA=ro;Se.load=io.load;Se.loadAll=io.loadAll;Se.safeLoad=io.safeLoad;Se.safeLoadAll=io.safeLoadAll;Se.dump=zf.dump;Se.safeDump=zf.safeDump;Se.YAMLException=rr;Se.MINIMAL_SCHEMA=Os;Se.SAFE_SCHEMA=or;Se.DEFAULT_SCHEMA=ro;Se.scan=so("scan");Se.parse=so("parse");Se.compose=so("compose");Se.addConstructor=so("addConstructor");var pE=Se,hE=pE,ma=hE,gE="\\ufeff?",mE=typeof process<"u"?process.platform:"",bE="^("+gE+"(= yaml =|---)$([\\s\\S]*?)^(?:\\2|\\.\\.\\.)\\s*$"+(mE==="win32"?"\\r?":"")+"(?:\\n)?)",$f=new RegExp(bE,"m");nr.exports=_E;nr.exports.test=yE;function _E(e,n){e=e||"";var t={allowUnsafe:!1};n=n instanceof Object?{...t,...n}:t,n.allowUnsafe=Boolean(n.allowUnsafe);var r=e.split(/(\r?\n)/);return r[0]&&/= yaml =|---/.test(r[0])?vE(e,n.allowUnsafe):{attributes:{},body:e,bodyBegin:1}}function EE(e,n){for(var t=1,r=n.indexOf(`
`),o=e.index+e[0].length;r!==-1;){if(r>=o)return t;t++,r=n.indexOf(`
`,r+1)}return t}function vE(e,n){var t=$f.exec(e);if(!t)return{attributes:{},body:e,bodyBegin:1};var r=n?ma.load:ma.safeLoad,o=t[t.length-1].replace(/^\s+|\s+$/g,""),i=r(o)||{},s=e.replace(t[0],""),c=EE(t,e);return{attributes:i,body:s,bodyBegin:c,frontmatter:o}}function yE(e){return e=e||"",$f.test(e)}const xE={class:"YRCard post-card"},kE={class:"post-card-meta"},wE={class:"YRCardTags"},AE={class:"YRCardMeta"},CE={class:"YRCardMeta"},SE={class:"YRCardTitle"},TE={class:"YRCardBrief"},NE={__name:"PostCard",props:{link:String,tags:Array,date:Date,title:String,brief:String},setup(e){const n=e,t={year:"numeric",month:"long",day:"numeric"};return(r,o)=>{const i=Qr("router-link");return ye(),Ae("article",xE,[xe(i,{class:"YRCardLink",to:n.link},{default:$t(()=>[ve("div",kE,[ve("span",wE,[(ye(!0),Ae(Te,null,er(n.tags,s=>(ye(),Ae("span",AE,He(s),1))),256))]),ve("span",CE,He(n.date.toLocaleDateString("en-US",t)),1)]),ve("h1",SE,He(n.title),1),ve("section",TE,He(n.brief),1)]),_:1},8,["to"])])}}},RE=Fn(NE,[["__scopeId","data-v-0b890d43"]]),OE={class:"YRTitleHeader"},IE={class:"YRTitleName"},LE={class:"YRTitleBrief"},Hf={__name:"SiteTitle",props:{title:String,brief:String},setup(e){const n=e;return(t,r)=>(ye(),Ae("div",OE,[ve("h1",IE,He(n.title),1),ve("p",LE,He(n.brief),1)]))}},ME={class:"post-card-list"},DE={__name:"Note",setup(e){const n=Object.assign({"../docs/note/\u4E2A\u4EBA\u7AD9\uFF01By yori-vue.md":of,"../docs/note/\u63D0\u95EE\u7684\u827A\u672F.md":sf});var t=[];for(const r in n){let o=nr.exports(n[r]).attributes;o.link="/post/"+r.substring(r.lastIndexOf("/")+1,r.lastIndexOf(".")),t.push(o)}return t.sort((r,o)=>{if(r.top==!0&&o.top!=!0)return!0;if(o.top==!0&&r.top!=!0)return!1;Date.parse(r.date)>Date.parse(o.date)}),(r,o)=>(ye(),Ae(Te,null,[xe(Hf,{title:"note",brief:"coffee or tea"}),ve("div",ME,[(ye(!0),Ae(Te,null,er(Ye(t),i=>(ye(),Ae("div",null,[xe(RE,{link:i.link,tags:i.tags,date:i.date,title:i.title,brief:i.brief},null,8,["link","tags","date","title","brief"])]))),256))])],64))}},Gf=`---\r
title: 6.S081 | xv6-labs-2020 | Xv6 and Unix utilities\r
date: 2022-11-05\r
tags:\r
	- 6.S081\r
---\r
\r
# Preface\r
\r
\u4E8E\u5B9E\u9A8C\u5F00\u59CB\u524D\uFF0C\u5728\u6B64\u7ACB\u4E2Aflag\uFF0C\u6BD5\u4E1A\u524D\u4E00\u5B9A\u81EA\u5DF1\u52A8\u624B\u5B9E\u73B0\u4E00\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u3002\r
\r
# Introduction\r
\r
> This lab will familiarize you with xv6 and its system calls.\r
\r
\u5B9E\u9A8C\u4E3B\u8981\u662F\u5B9E\u73B0\u4E00\u4E9Bshell\u547D\u4EE4\uFF0C\u4EE5\u719F\u6089\u7CFB\u7EDF\u8C03\u7528\uFF0C\u6240\u4EE5\u975E\u5E38\u7B80\u5355\uFF1Feasy\u9898\u5C31\u4E0D\u89E3\u91CA\u4E86\uFF0C\u6BD4\u8F83\u597D\u505A(\u2312\u25BD\u2312)\r
\r
\u53E6\u5916\u672C\u4EBA\u6301\u8282\u80FD\u4E3B\u4E49\u89C2\u70B9\uFF0C\u5E0C\u671B\u4EE3\u7801\u80FD\u771F\u7684\u505A\u5230\u5C3D\u91CF\u7684\u7B80\u6D01\u597D\u8BFB\uFF0C\u6B22\u8FCE\u5927\u5BB6\u5BF9\u6B64\u63D0\u610F\u89C1\uFF0C\u6211\u5C3D\u529B\u6539\u6B63\u3002\r
\r
# Problems\r
\r
## sleep\r
\r
\`\`\`C\r
#include "kernel/types.h"\r
#include "kernel/stat.h"\r
#include "user/user.h"\r
\r
int\r
main(int argc, char *argv[])\r
{\r
	if (argc <= 1) {\r
		fprintf(2, "usage: sleep [time]\\n");\r
		exit(1);\r
	}\r
\r
	sleep(atoi(argv[1]));\r
	exit(0);\r
}\r
\`\`\`\r
\r
## pingpong\r
\r
\`\`\`C\r
#include "kernel/types.h"\r
#include "kernel/stat.h"\r
#include "user/user.h"\r
\r
int\r
main(int argc, char *argv[])\r
{\r
	int pipefd[2], pid;\r
\r
	if (pipe(pipefd) == -1) {\r
		fprintf(2, "pipe error");\r
		exit(1);\r
	}\r
\r
	pid = fork();\r
	if (pid == 0) {\r
		read(pipefd[0], &pid, sizeof pid);\r
		fprintf(1, "%d: received ping\\n", getpid());\r
		write(pipefd[1], &pid, sizeof pid);\r
	}\r
	else {\r
		write(pipefd[1], &pid, sizeof pid);\r
		wait(&pid);\r
		read(pipefd[0], &pid, sizeof pid);\r
		fprintf(1, "%d: received pong\\n", getpid());\r
	}\r
\r
	exit(0);\r
}\r
\`\`\`\r
\r
## primes\r
\r
\u76F8\u4FE1\u4F60\u5DF2\u7ECF\u770B\u8FC7\u9898\u76EE\u6240\u6709\u63D0\u793A\u548C\u8D44\u6599\uFF0C\u53EF\u80FD\u8FD8\u662F\u4E00\u5934\u96FE\u6C34\uFF0C\u8FD9\u91CC\u6211\u7B80\u5355\u8BF4\u4E00\u4E0B\u601D\u8DEF\uFF1A\r
\r
1. \u6BCF\u4E00\u4E2A\u8FDB\u7A0B\uFF08\u9664\u4E86\u7B2C\u4E00\u4E2A\uFF09\r
	 1. \u4E24\u4E2Apipe\r
	 2. \u5DE6pipe\u8F93\u5165n\r
	 3. \u8FDB\u7A0B\u5185\u90E8\u8BBEp = n\uFF0Cfork\u5B50\u8FDB\u7A0B\r
	 4. \u53F3pipe\u8F93\u51FAn if n % p != 0\r
2. \u7B2C\u4E00\u4E2A\u8FDB\u7A0B\r
   1. \u4E00\u4E2Apipe\r
   2. \u8FDB\u7A0B\u5185\u90E8\u8BBEn = for i in [0, 35]\uFF0Cfork\u5B50\u8FDB\u7A0B\r
   3. \u53F3pipe\u8F93\u51FAn\r
\r
\u4EE5\u4E0A\uFF0C\u7136\u540E\u5C31\u662F\u4EE3\u7801\u5B9E\u73B0\r
\r
> \u8865\u5145\u4E00\u4E2A\u5173\u4E8Eread\u7CFB\u7EDF\u8C03\u7528\u7684\u77E5\u8BC6\uFF1A\r
>\r
> [\u6559\u7A0B](https://pdos.csail.mit.edu/6.828/2020/xv6/book-riscv-rev1.pdf)\u7B2C16\u9875\u4E2D\u95F4\u6709\u4E00\u6BB5\u8BDD\r
>\r
> If no data is available, a read on a pipe waits for either data to be written or for all file descriptors referring to the write end to be closed; in the latter case, read will return 0, just as if the end of a data file had been reached. \r
>\r
> \u610F\u601D\u5C31\u662Fread\u7ED3\u675F\u4E00\u4E2A\u6761\u4EF6\u662FEOF\uFF0C\u53E6\u4E00\u4E2A\u662F\u6240\u6709\u8F93\u5165\u5173\u95ED\r
> \r
> \u8FD9\u9053\u9898\u8981\u6211\u4EEC\u624B\u52A8close\u6240\u6709\u8F93\u5165\u6587\u4EF6\u63CF\u8FF0\u7B26\r
\r
\`\`\`C\r
#include "kernel/types.h"\r
#include "kernel/stat.h"\r
#include "user/user.h"\r
\r
void\r
Pipe(int *pipefd)\r
{\r
	if (pipe(pipefd) == 1) {\r
		fprintf(2, "pipe error");\r
		exit(1);\r
	}\r
}\r
\r
int\r
main(int argc, char *argv[])\r
{\r
	int pipefd_le[2], pipefd_ri[2], p, n;\r
\r
	Pipe(pipefd_ri);\r
	for (int n = 2; n <= 35; n++)\r
		write(pipefd_ri[1], &n, sizeof n);\r
\r
	while (1) {\r
		pipefd_le[0] = pipefd_ri[0];\r
		close(pipefd_ri[1]);\r
\r
		if (fork() == 0) {\r
			Pipe(pipefd_ri);\r
\r
			if (!read(pipefd_le[0], &p, sizeof p))\r
				exit(0);\r
			fprintf(1, "prime %d\\n", p);\r
\r
			while (read(pipefd_le[0], &n, sizeof n))\r
				if (n % p)\r
					write(pipefd_ri[1], &n, sizeof n);	\r
		}\r
		else {\r
			wait(0);\r
			exit(0);\r
		}\r
	}\r
}\r
\`\`\`\r
\r
## find\r
\r
\u7167\u6284ls.c\uFF0C\u53EA\u8981\u4F60\u4E0D\u548C\u6211\u4E00\u6837\u6284\u9519\u8C03\u4E86\u534A\u5929\uFF0C\u8FD9\u9898\u7B97\u662Feasy\u9898\u3002\r
\r
\u6709\u4E00\u70B9\u8981\u6CE8\u610F\u7684\uFF0Cls.c\u539F\u6587\u4E2D\u8FD9\u4E00\u6BB5\u4EE3\u7801\u5199\u7684\u4E0D\u662F\u5F88\u597D\u3002\r
\r
\`\`\`C\r
memmove(p, de.name, DIRSIZ);\r
p[DIRSIZ] = 0;\r
\`\`\`\r
\r
p\u548Cde.name\u5E76\u4E0D\u662F\u4E00\u56DE\u4E8B\u3002\r
\r
\`\`\`C\r
#include "kernel/types.h"\r
#include "kernel/stat.h"\r
#include "user/user.h"\r
#include "kernel/fs.h"\r
\r
char*\r
fmtname(char *path)\r
{\r
  static char buf[DIRSIZ+1];\r
  char *p;\r
\r
  // Find first character after last slash.\r
  for(p=path+strlen(path); p >= path && *p != '/'; p--)\r
    ;\r
  p++;\r
\r
  // Return blank-padded name.\r
  if(strlen(p) >= DIRSIZ)\r
    return p;\r
  memmove(buf, p, strlen(p));\r
  memset(buf+strlen(p), ' ', DIRSIZ-strlen(p));\r
  return buf;\r
}\r
\r
void\r
find(char *path, char *file)\r
{\r
  char buf[512], *p;\r
  int fd;\r
  struct dirent de;\r
  struct stat st;\r
\r
  if((fd = open(path, 0)) < 0){\r
    fprintf(2, "find: cannot open %s\\n", path);\r
    return;\r
  }\r
\r
  if(fstat(fd, &st) < 0){\r
		fprintf(2, "find: cannot stat %s\\n", path);\r
    close(fd);\r
    return;\r
  }\r
\r
  switch(st.type){\r
  case T_FILE:\r
		if (strcmp(fmtname(path), file) == 0)\r
			printf("%s\\n", path);\r
    break;\r
	\r
	case T_DIR:\r
    if(strlen(path) + 1 + DIRSIZ + 1 > sizeof buf){\r
      printf("find: path too long\\n");\r
      break;\r
    }\r
    strcpy(buf, path);\r
    p = buf+strlen(buf);\r
    *p++ = '/';\r
    while(read(fd, &de, sizeof(de)) == sizeof(de)){\r
      if(de.inum == 0)\r
        continue;\r
      memmove(p, de.name, DIRSIZ);\r
      p[DIRSIZ] = 0;\r
      if(stat(buf, &st) < 0){\r
				printf("find: cannot stat %s\\n", buf);\r
        continue;\r
      }\r
\r
			if (strcmp(p, ".") == 0)\r
				continue;\r
			else if (strcmp(p, "..") == 0)\r
				continue;\r
			else if (strcmp(p, file) == 0)\r
				fprintf(1, "%s\\n", buf);\r
			else if (st.type == T_FILE && strcmp(de.name, file) == 0)\r
				fprintf(1, "%s\\n", buf);\r
			else\r
				find(buf, file);\r
    }\r
    break;\r
  }\r
	close(fd);\r
}\r
\r
int\r
main(int argc, char *argv[])\r
{\r
	if (argc < 3) {\r
		fprintf(2, "usage: find [path] [file]\\n");\r
		exit(1);\r
	}\r
\r
	for (int i = 2; i < argc; i++)\r
		find(argv[1], argv[i]);\r
\r
	exit(0);\r
}\r
\`\`\`\r
\r
## xargs\r
\r
\u8FD9\u9898\u96BE\u7684\u5730\u65B9\u5728\u4E8E\u770B\u61C2xargs\u662F\u5E72\u4EC0\u4E48\u7684\u3002\u9898\u4E2D\u7684\u610F\u601D\u662F\uFF0C\u628Axargs\u7684\u6807\u51C6\u8F93\u5165\u6309'\\n'\u5206\u5272\uFF0C\u4F5C\u4E3Axargs\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684\u7684\u6807\u51C6\u8F93\u5165\u53C2\u6570\uFF08\u63A5\u5728\u5176\u4ED6\u8F93\u5165\u53C2\u6570\u540E\u9762\uFF09\r
\r
\`\`\`C\r
#include "kernel/types.h"\r
#include "kernel/stat.h"\r
#include "user/user.h"\r
#include "kernel/param.h"\r
\r
int isspace(char c)\r
{\r
	switch (c) {\r
		case ' ':\r
		case '\\n':\r
		case '\\t':\r
			return 1;\r
	}\r
\r
	return 0;\r
}\r
\r
int\r
main(int argc, char *argv[])\r
{\r
	int idx;\r
	char letter, buf[512];\r
	char *argv_xargs[MAXARG];\r
\r
	for (int i = 1; i < argc; i++)\r
		argv_xargs[i - 1] = argv[i];\r
	argv_xargs[argc - 1] = buf;\r
	argv_xargs[argc] = 0;\r
\r
	while (read(0, &letter, sizeof(letter))) {\r
		buf[idx++] = letter;\r
\r
		if (isspace(letter)) {\r
			buf[idx - 1] = '\\0';\r
			idx = 0;\r
			\r
			if (fork() == 0) {\r
				exec(argv_xargs[0], argv_xargs);\r
				fprintf(2, "exec failed\\n");\r
				exit(1);\r
			}\r
			else wait(0);\r
		}\r
	}\r
\r
	exit(0);\r
}\r
\`\`\`\r
\r
# Ending\r
\r
\u5F00\u59CB\uFF1F\u8FD8\u662F\u7ED3\u675F\uFF1F\r
\r
\u4E0B\u4E00\u7AD9\uFF1A [Lab: system calls](https://pdos.csail.mit.edu/6.828/2020/labs/syscall.html)\r
`,FE=Object.freeze(Object.defineProperty({__proto__:null,default:Gf},Symbol.toStringTag,{value:"Module"})),Wf=`---\r
title: 6.S081 | xv6-labs-2020 | page tables\r
date: 2022-11-18\r
tags:\r
	- 6.S081\r
---\r
\r
# Preface\r
\r
> \u672C\u4EBA\u6301\u8282\u80FD\u4E3B\u4E49\u89C2\u70B9\uFF0C\u5E0C\u671B\u4EE3\u7801\u80FD\u771F\u7684\u505A\u5230\u7B80\u6D01\u597D\u8BFB\uFF0C\u6B22\u8FCE\u5927\u5BB6\u6279\u8BC4\u3002\r
\r
# Introduction\r
\r
# Problems\r
\r
## A kernel page table per process\r
\r
\u9898\u610F\u5F88\u7B80\u5355\uFF0Cxv6\u53EA\u7EF4\u62A4\u4E86\u4E00\u4E2A\u5185\u6838\u9875\u8868\uFF0C\u6240\u6709\u8FDB\u7A0B\u5171\u7528\u8FD9\u4E00\u4E2A\u5185\u6838\u9875\u8868\u3002\r
\r
\u4F60\u7684\u76EE\u6807\u662F\u4E3A\u6BCF\u4E2A\u8FDB\u7A0B\u7EF4\u62A4\u4E00\u4E2A\u81EA\u5DF1\u7684\u5185\u6838\u9875\u8868\uFF0C\u4F60\u7684\u4EFB\u52A1\u662F\u4FEE\u6539\u4E00\u4E9B\u5DF2\u7ECF\u5B58\u5728\u7684\u51FD\u6570\u3002\r
\r
> \u8FD9\u91CC\u63D0\u4E00\u70B9\u8981\u6CE8\u610F\u7684\uFF0C\u8BF7\u601D\u8003\u662F\u5426\u8981\u91CD\u5199\u5DF2\u7ECF\u5B58\u5728\u7684\u51FD\u6570\uFF0C\u56E0\u4E3A\u4F60\u4E0D\u77E5\u9053\u4ED6\u5728\u54EA\u91CC\u88AB\u8C03\u7528\u4E86\u3002\u6BD4\u5982\u4FEE\u6539\u4E86kvminit\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5728main\u51FD\u6570\u4E2D\u88AB\u8C03\u7528\u4E86\uFF0C\u5982\u679C\u4F60\u4FEE\u6539\u4E86\u539F\u51FD\u6570\uFF0C\u4F46\u662F\u6CA1\u6709\u5728 main \u51FD\u6570\u4E2D\u505A\u76F8\u5E94\u4FEE\u6539\uFF0C\u8FD0\u6C14\u597D\u4F60\u7F16\u8BD1\u5C31\u51FA\u9519\u4E86\uFF0C\u8FD0\u6C14\u4E0D\u597D\u8FD0\u884C\u65F6\u624D\u51FA\u9519\u3002\r
> \r
> \u5F53\u7136\u8FD9\u4E2A\u601D\u8003\u6210\u7ACB\u7684\u524D\u63D0\u5C31\u662F kvminit \u4ECD\u7136\u88AB\u9700\u8981\uFF08\u4ECD\u9700\u8981\u7EF4\u62A4\u4E00\u4E2A kernel_pagetable\uFF09\uFF0C\u4E0D\u7136\u7684\u8BDD\u53EA\u80FD\u4E00\u4E2A\u4E2A\u627E\u5230\u8C03\u7528\u7684\u4F4D\u7F6E\u4E86\u3002\r
\r
1. \u9996\u5148\u4FEE\u6539 struct proc\uFF0C\u6DFB\u52A0\u5185\u6838\u9875\u8868\u7684\u5B9A\u4E49\r
\r
\`\`\`c\r
// proc.h\r
struct proc {\r
  ...\r
  pagetable_t kpagetable;      // Kernel page table\r
};\r
\`\`\`\r
\r
2. \u4FEE\u6539\u5185\u6838\u9875\u8868\u7684\u521D\u59CB\u5316\u51FD\u6570\r
\r
\u89C2\u5BDF\u5230 kvminit \u8C03\u7528\u4E86 kvmmap\uFF0C\u6240\u4EE5\u5148\u4FEE\u6539 kvmmap\r
\r
\`\`\`c\r
// vm.c\r
void\r
proc_kvmmap(pagetable_t kernel_pagetable, uint64 va, uint64 pa, uint64 sz, int perm)\r
{\r
  if(mappages(kernel_pagetable, va, sz, pa, perm) != 0)\r
    panic("proc_kvmmap");\r
}\r
\r
void\r
kvmmap(uint64 va, uint64 pa, uint64 sz, int perm)\r
{\r
	proc_kvmmap(kernel_pagetable, va, pa, sz, perm);\r
}\r
\`\`\`\r
\r
\u7136\u540E\uFF0C\u4FEE\u6539 kvminit\r
\r
\`\`\`c\r
// vm.c\r
pagetable_t\r
proc_kvminit(void)\r
{\r
  pagetable_t kernel_pagetable = (pagetable_t) kalloc();\r
  memset(kernel_pagetable, 0, PGSIZE);\r
\r
  // uart registers\r
  proc_kvmmap(kernel_pagetable, UART0, UART0, PGSIZE, PTE_R | PTE_W);\r
\r
  ...\r
\r
  proc_kvmmap(kernel_pagetable, TRAMPOLINE, (uint64)trampoline, PGSIZE, PTE_R | PTE_X);\r
\r
	return kernel_pagetable;\r
}\r
\r
void\r
kvminit(void)\r
{\r
	kernel_pagetable = proc_kvminit();\r
}\r
\`\`\`\r
\r
\u6700\u540E\uFF0C\u5BF9\u6BCF\u4E00\u4E2A\u8FDB\u7A0B\u7684\u5185\u9875\u9875\u8868\u8FDB\u884C\u521D\u59CB\u5316\r
\r
\`\`\`c\r
// proc.c\r
static struct proc*\r
allocproc(void)\r
{\r
  ...\r
  p->kpagetable = proc_kvminit();\r
	if (p->kpagetable == 0) {\r
    freeproc(p);\r
    release(&p->lock);\r
    return 0;\r
	}\r
  ...\r
}\r
\`\`\`\r
\r
3. \u91CD\u65B0\u6620\u5C04\u5185\u6838\u6808\r
\r
\u8FD9\u4E2A\u5176\u5B9E\u6CA1\u5FC5\u8981\uFF0C\u5C31\u662F\u628A\u4EE3\u7801\u4ECE\u4E00\u4E2A\u4F4D\u7F6E\u632A\u5230\u4E86\u53E6\u4E00\u4E2A\u4F4D\u7F6E\r
\r
\`\`\`c\r
// proc.c\r
void\r
procinit(void)\r
{\r
  struct proc *p;\r
  \r
  initlock(&pid_lock, "nextpid");\r
  for(p = proc; p < &proc[NPROC]; p++) {\r
      initlock(&p->lock, "proc");\r
\r
			// lab3-2: move to allocproc() [proc.c]\r
  }\r
  kvminithart();\r
}\r
\r
static struct proc*\r
allocproc(void)\r
{\r
  ...\r
  char *pa = kalloc();\r
	if (pa == 0)\r
		panic("kalloc");\r
  // \u8FD9\u91CC\u56E0\u4E3A\u6CA1\u4E86\u5176\u4ED6\u8FDB\u7A0B\u7684kstack\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u4ECE0\u5F00\u59CB\u4E86\r
  // \u5C31\uFF0C\u4F60\u8BF4\u4ECE1\u5F00\u59CB\u884C\u4E0D\u884C\uFF0C\u884C\uFF0C\u90A3\u3002\u3002\u3002\u884C\u5427\r
	uint64 va = KSTACK(0);\r
	proc_kvmmap(p->kpagetable, va, (uint64)pa, PGSIZE, PTE_R | PTE_W);\r
	p->kstack = va;\r
  ...\r
}\r
\`\`\`\r
\r
4. \u8C03\u6574\u8C03\u5EA6\u51FD\u6570\r
\r
\u5C31\u662F\u539F\u6765\u9ED8\u8BA4\u8C03\u5EA6\u5230 kernel_pagetable\uFF0C\u73B0\u5728\u6211\u4E0D\u4E86\uFF0C\u6211\u8981\u628A satp \u7684\u503C\u8BBE\u7F6E\u6210\u8981\u8DF3\u8F6C\u7684 proc \u7684 kpagetable\r
\r
\u5148\u5B9A\u4E49\u4E00\u4E2A proc \u7684 satp \u5207\u6362\u51FD\u6570\r
\r
\`\`\`c\r
// vm.c\r
void\r
proc_kvminithart(pagetable_t kernel_pagetable)\r
{\r
  w_satp(MAKE_SATP(kernel_pagetable));\r
  sfence_vma();\r
}\r
\r
// Switch h/w page table register to the kernel's page table,\r
// and enable paging.\r
void\r
kvminithart()\r
{\r
	proc_kvminithart(kernel_pagetable);\r
}\r
\`\`\`\r
\r
\u7136\u540E\u5728 scheduler() \u4E2D\u8C03\u7528\uFF0C\u5E76\u4E14\u662F\u5728 swtch \u4E4B\u524D\u8C03\u7528\uFF0C\u56E0\u4E3A swtch \u540E\u5C31\u5207\u6362\u5230 forkret \u51FD\u6570\u4E86\uFF0C\u540C\u65F6 scheduler() \u5728\u6CA1\u7528 proc \u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u5168\u5C40 kernel_pagetable\r
\r
\`\`\`c\r
// proc.c\r
void\r
scheduler(void)\r
{\r
  ...\r
  proc_kvminithart(p->kpagetable);\r
  swtch(&c->context, &p->context);\r
  kvminithart();\r
  ...\r
}\r
\`\`\`\r
\r
5. free \u5185\u6838\u9875\u8868\r
\r
\u53C2\u8003 uvm \u7684 free \u65B9\u5F0F\r
\r
\u5148\u770B freewalk\uFF0Cfreewalk \u7ED9\u9875\u8868\u4E2D\u6240\u6709 page directory \u89E3\u9664\u7ED1\u5B9A\u5E76\u6E050\uFF08\u9632\u6B62\u6709\u7684\u5730\u65B9\u4E0D\u4E3A 0\uFF0C\u4EE5\u540E\u5224\u65AD\u9519\u8BEF\u5730\u5740\u7684 PTE_V \u53EF\u80FD\u8BEF\u5224\uFF09\u3002\u4ED6\u8981\u6C42\u6240\u6709 leaf\uFF0C\u5373\u771F\u6B63\u5F15\u7528 pa \u7684\u8282\u70B9\u90FD\u5DF2\u7ECF free \u4E86\u3002\r
\r
\u6240\u4EE5\u518D\u56DE\u5934\u770B\uFF0Cuvm \u63D0\u524D free \u4E86 trampoline, trapframe, user memory space\uFF0C\u76EE\u7684\u5728\u6B64\u3002\r
\r
\u90A3\u4E48 kernel \u5728\u8C03\u7528 freewalk \u4E4B\u524D\uFF0C\u9700\u8981 free \u4EC0\u4E48\u5462\uFF1F\u54E6\uFF0Chints \u4E2D\u6CA1\u8981\u6C42\u554A\uFF0C\u90A3\u6CA1\u4E8B\u4E86\uFF0C\u628A freewalk \u6539\u4E00\u4E0B\u5C31\u884C\u4E86\uFF0C\u4E8F\u6211\u60F3\u4E86\u534A\u5929\u3002\r
\r
\`\`\`c\r
// vm.c\r
void\r
freewalk(pagetable_t);\r
void\r
kvmfree(pagetable_t kpagetable)\r
{\r
  // there are 2^9 = 512 PTEs in a page table.\r
  for(int i = 0; i < 512; i++){\r
    pte_t pte = kpagetable[i];\r
\r
    if((pte & PTE_V) && (pte & (PTE_R|PTE_W|PTE_X)) == 0){\r
      // this PTE points to a lower-level page table.\r
      uint64 child = PTE2PA(pte);\r
      freewalk((pagetable_t)child);\r
      kpagetable[i] = 0;\r
    }\r
  }\r
  kfree((void*)kpagetable);\r
}\r
\r
void\r
proc_freekpagetable(pagetable_t kpagetable)\r
{\r
	kvmfree(kpagetable);\r
}\r
\`\`\`\r
\r
\u7136\u540E\u5728 freeproc \u4E2D\u4FEE\u6539\uFF0Cfree \u5185\u6838\u6808\u6211\u770B\u5230\u522B\u4EBA\u8FD9\u4E48\u505A\uFF0C\u4F46\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48\r
\r
\`\`\`c\r
// proc.c\r
static void\r
freeproc(struct proc *p)\r
{\r
  ...\r
  uint64 pa_kstack = proc_kvmpa(p->kpagetable, p->kstack);\r
	kfree((void *)pa_kstack);\r
	p->kstack = 0;\r
	if (p->kpagetable)\r
		proc_freekpagetable(p->kpagetable);\r
  ...\r
}\r
\`\`\`\r
\r
\u7136\u540E make grade \u4F60\u4F1A\u5361\u4F4F\u4E00\u4F1A\u7136\u540E\u62A5\u9519\uFF0C\u4F60\u4F1A\u770B\u5230 panic kvmpa\uFF0C\u8981\u60F3\u67E5\u5230\u9519\u8BEF\u539F\u56E0\uFF0C\u8981\u4E48\u4F60\u76F4\u63A5\u641C\u54EA\u91CC\u8C03\u7528\u4E86 kvmpa\uFF0C\u7136\u540E\u6309\u7167\u81EA\u5DF1\u5224\u65AD\u731C\u54EA\u91CC\u51FA\u9519\uFF0C\u8981\u4E48\u4F60\u5C31\u4E00\u6B65\u4E00\u6B65\u8C03\u8BD5\uFF0C\u8C03\u8BD5\u51FA\u6765\u9519\u8BEF\u5728 virtio\uFF0C\u7136\u540E\u4FEE\u6539\u4E00\u4E0B\r
\r
\`\`\`c\r
// virtio_disk.c\r
#include "proc.h"\r
\r
...\r
\r
void\r
virtio_disk_rw(struct buf *b, int write)\r
{\r
  ...\r
  disk.desc[idx[0]].addr = (uint64) proc_kvmpa(myproc()->kpagetable, (uint64) &buf0);\r
  ...\r
}\r
\`\`\`\r
\r
\u5927\u529F\u544A\u6210\uFF01\r
`,PE=Object.freeze(Object.defineProperty({__proto__:null,default:Wf},Symbol.toStringTag,{value:"Module"})),Kf=`---\r
title: 6.S081 | xv6-labs-2020 | system calls\r
date: 2022-11-07\r
tags:\r
	- 6.S081\r
---\r
\r
# Preface\r
\r
> \u672C\u4EBA\u6301\u8282\u80FD\u4E3B\u4E49\u89C2\u70B9\uFF0C\u5E0C\u671B\u4EE3\u7801\u80FD\u771F\u7684\u505A\u5230\u7B80\u6D01\u597D\u8BFB\uFF0C\u6B22\u8FCE\u5927\u5BB6\u6279\u8BC4\u3002\r
\r
\u505A\u8FD9\u4E2Alab\u6539\u53D8\u4E86\u6211\u5BF9\u7167\u6284\u7684\u4E00\u4E9B\u770B\u6CD5\u3002\u5176\u5B9E\u5927\u90E8\u5206\u4EE3\u7801\u672C\u8EAB\u8FD8\u662F\u5F88\u7B80\u5355\u7684\uFF0C\u53EA\u8981\u6CE8\u91CA\u7ED9\u7684\u6E05\u6670\uFF0C\u8010\u4E0B\u5FC3\u6765\u8BFB\u5B8C\u662F\u6CA1\u4EC0\u4E48\u95EE\u9898\u7684\uFF0C\u4E5F\u53EA\u6709\u8BFB\u5B8C\u4F60\u624D\u80FD\u7406\u89E3\u4F5C\u8005\u5728\u81EA\u8A00\u81EA\u8BED\u4EC0\u4E48\u3002\u4F60\u8981\u662F\u5C31\u8FD9\u4E48\u8DF3\u8FC7\uFF0CCV\u4E00\u4E0B\uFF0C\u5C31\u771F\u7684\u88ABunder tale\u91CC\u7684\u90A3\u53EA\u9752\u86D9\u51FB\u4E2D\u4E86\uFF0C"\u53EF\u6076\uFF0C\u8FDE\u4F60\u90FD\u8FD9\u6837"\u3002\r
\r
# Introduction\r
\r
> In the last lab you used systems calls to write a few utilities. In this lab you will add some new system calls to xv6, which will help you understand how they work and will expose you to some of the internals of the xv6 kernel. You will add more system calls in later labs.\r
\r
\u5B9E\u9A8C\u4E3B\u8981\u662F\u5B8C\u6210\u4E24\u4E2A\u7CFB\u7EDF\u8C03\u7528\u3002\u5BF9\u4E8Etrace\uFF0C\u4F60\u5982\u679C\u4E0A\u8FC7\u67D0\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u8BFE\uFF0C\u5C31\u5E94\u8BE5\u4F1A\u5BF9strace\u6709\u6DF1\u523B\u7684\u5370\u8C61\u3002\u53E6\u4E00\u4E2A\u7CFB\u7EDF\u8C03\u7528sysinfo\uFF0C\u6709\u79CD\u7F1D\u5408\u602A\u7684\u611F\u89C9\uFF0C\u5E94\u8BE5\u53EA\u662F\u7ED9\u6211\u4EEC\u7EC3\u624B\u7684\u5427\uFF0C\u53E6\u5916\u540C\u4E0A\uFF0C\u4F60\u5982\u679C\u4E0A\u8FC7\u67D0\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u8BFE\uFF0C\u5C31\u5E94\u8BE5\u4F1A\u5BF9kalloc\u6709\u79CD\u83AB\u540D\u7684\u4EB2\u5207\u611F\u3002\r
\r
# Problems\r
\r
## System call tracing\r
\r
\u7B80\u5355\u5206\u6790\u4E00\u4E0B\r
\r
1. \u9898\u610F\uFF1A\u8FFD\u8E2A\u7A0B\u5E8F\u8FD0\u884C\u4E2D\u4F7F\u7528\u7684syscall\r
2. \u601D\u8DEF\uFF1Asyscall\u88AB\u8C03\u7528\u540E\uFF0C\u8F93\u51FA\r
3. \u8F93\u51FA\u683C\u5F0F\uFF1A[pid]: syscall [name] -> [return value]\r
\r
> Run make qemu and you will see that the compiler cannot ... \r
\r
\u6309\u7167\u9898\u76EE\u7684\u914D\u7F6E\u53BB\u914D\u3002\r
\r
> Add a sys_trace() function in kernel/sysproc.c that implements the new system call by remembering its argument in a new variable in the proc structure (see kernel/proc.h). The functions to retrieve ...\r
\r
\u8FD9\u6BD4\u8F83\u7ED5\uFF0C\u6211\u7FFB\u8BD1\u4E00\u4E0B\uFF1A\u5728kernel/sysproc.c\u4E2D\u6DFB\u52A0sys_trace(\u53C2\u6570)\uFF0C\u8BF7\u4F60\u5728struct proc\u4E2D\u5B9A\u4E49\u4E00\u4E2A\u65B0\u53D8\u91CF\u6765\u8BB0\u5F55\u8FD9\u4E2A\u53C2\u6570\u3002\r
\r
\`\`\`C\r
// kernel/proc.h\r
struct proc {\r
	...\r
	int mask; // lab2: Trace of syscall\r
}\r
\`\`\`\r
\r
> Modify fork() (see kernel/proc.c) to copy the trace mask from the parent to the child process.\r
\r
\u7531\u4E8Estruct proc\u4E2D\u5B9A\u4E49\u4E86mask\uFF0C\u6240\u4EE5\u76F4\u63A5\u628Amask\u590D\u5236\u4E00\u4E0B\u5C31\u884C\u4E86\u3002\r
\r
> Modify the syscall() function in kernel/syscall.c to print the trace output. You will need to add an array of syscall names to index into.\r
\r
\u7FFB\u8BD1\u4E00\u4E0B\uFF1A \u9605\u8BFB\u5E76\u4FEE\u6539syscall()\uFF0C\u8F93\u51FA\u6700\u7EC8\u7ED3\u679C\u3002syscall()\u63D0\u4F9B\u4E86kernel/syscall.h\u4E2D\u7684\u6570\u5B57\uFF0C\u4F46\u672A\u63D0\u4F9B\u5BF9\u5E94\u7684\u540D\u5B57\uFF0C\u8BF7\u521B\u5EFA\u4E00\u4E2A\u6570\u7EC4\u6765\u83B7\u53D6\u5BF9\u5E94\u5173\u7CFB\u3002\r
\r
OK\uFF0C\u505A\u4E2A\u603B\u7ED3\uFF0C\u8FD9\u4E2Alab\u4E0D\u96BE\uFF0C\u96BE\u7684\u662F\u521D\u89C1\uFF0C\u5C31\u548C\u9ED1\u9B42\u4E00\u6837\uFF08\u60B2\uFF09\u3002\u6BD4\u5982\u4E00\u5F00\u59CB\u4F60\u53EF\u80FD\u4E0D\u77E5\u9053sys_trace\u8981\u505A\u4EC0\u4E48\uFF0C\u90A3\u4F60\u5C31\u5148\u8DF3\u8FC7\u53BB\u5B8C\u6210fork\uFF0C\u7136\u540E\u9605\u8BFBsyscall\uFF0C\u6700\u540E\u5B9E\u73B0sys_trace\uFF0C\u4F60\u5C31\u660E\u767D\u4E86\u3002\r
\r
\u56E0\u4E3A\u4EE3\u7801\u6BD4\u8F83\u5206\u6563\uFF0C\u800C\u4E14\u5F88\u7B80\u5355\uFF0C\u8FD9\u91CC\u4E3A\u4E86\u8282\u80FD\u5C31\u4E0D\u8D34\u4E86\uFF0C\u624D\u3002\u3002\u3002\u624D\u4E0D\u662F\u56E0\u4E3A\u5077\u61D2\u5462\u3002\r
\r
## Sysinfo\r
\r
\u5F00\u59CB\u662F\u548C\u4E0A\u9762\u4E00\u6837\u7684\u6B65\u9AA4\u3002\r
\r
> ... e.c) for examples of how to do that using copyout().\r
\r
\u8FD9\u91CC\u89E3\u91CA\u4E00\u4E0Bcopyout\u7684\u4F5C\u7528\u3002\u9996\u5148\u5408\u7406\u5047\u8BBE\uFF0C\u6211\u6709\u4E2A\u6307\u5411kernel space\u7684\u6307\u9488\uFF0C\u6211\u5728user mode\u662F\u7528\u4E0D\u4E86\u7684\uFF0C\u4F46\u5982\u679C\u4ED6\u88AB\u505A\u76F4\u63A5\u590D\u5236\u8FDBkernel space\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6307\u9488\u5C31\u80FD\u7528\u4E86\uFF0C\u90A3\u4E48\u5C31\u6709\u6F5C\u5728\u7684\u5371\u9669\uFF0C\u6240\u4EE5\u8981copyout()\u3002\u53E6\u5916\u4E664.4\u4E5F\u63D0\u5230\u4E86\u8FD9\u70B9\u3002\r
\r
> To collect the amount of free memory, add a function to kernel/kalloc.c\r
\r
\u8FD9\u91CC\u89E3\u91CA\u4E00\u4E0Bkalloc\u7684\u6784\u6210\u3002\u7C7B\u6BD4\u4E00\u4E0B\uFF0C\u6BD4\u5982\u6709[0, 100]\u8FD9\u6BB5\u7A7A\u95F4\uFF0C\u6211\u9996\u5148\u521D\u59CB\u5316\uFF0C\u4EE5\u6B65\u957F\u4E3A1\u505A\u4E00\u4E2A\u94FE\u8868\uFF0C\u800C\u4E14\u6BCF\u6BB5\u94FE\u8868\u672C\u8EAB\u5C31\u662F\u8981\u5206\u914D\u51FA\u53BB\u7684\u5185\u5B58\uFF0C\u6CA1\u6709\u4F7F\u7528\u989D\u5916\u7A7A\u95F4\r
\r
0->1->2...->100\r
\r
\u6BCF\u6B21malloc\u548Cfree\u4E00\u4E2A\u6B65\u957F\u3002malloc 1\u5C31\u662F\r
\r
0->2->3...->100\r
\r
free 1\u5C31\u662F\r
\r
0->1->2...->100\r
\r
\u6240\u4EE5\u4EE3\u7801\u91CC\u53EBfreelist\u3002\r
\r
\`\`\`C\r
struct {\r
	struct spinlock lock;\r
	struct run *freelist;\r
} kmem;\r
\`\`\`\r
\r
OK\uFF0C\u5168\u90E8\u5199\u5B8C\u540E\uFF0C\u4F60\u53EF\u80FD\u4F1A\u53D1\u73B0\u8FD9\u6837\u7684\u9519\u8BEF\r
\r
\`\`\`shell\r
kernel/sysproc.c:122:20: error: implicit declaration of function 'kfreemem'; did you mean 'kfree'? [-Werror=implicit-function-declaration]\r
  122 |  sysinfo.freemem = kfreemem();\r
      |                    ^~~~~~~~\r
      |                    kfree\r
cc1: all warnings being treated as errors\r
make: *** [<builtin>: kernel/sysproc.o] Error 1\r
\`\`\`\r
\r
\u8BF7\u5728kernel/defs.h\u4E2D\u6DFB\u52A0\u76F8\u5E94\u7684\u58F0\u660E\r
\r
\u6216\u8005\u8FD9\u6837\u7684\u9519\u8BEF\r
\r
\`\`\`shell\r
kernel/sysproc.c: In function 'sys_sysinfo':\r
kernel/sysproc.c:117:17: error: storage size of 'sysinfo' isn't known\r
  117 |  struct sysinfo sysinfo;\r
      |                 ^~~~~~~\r
kernel/sysproc.c:117:17: error: unused variable 'sysinfo' [-Werror=unused-variable]\r
cc1: all warnings being treated as errors\r
\`\`\`\r
\r
\u8BF7\u5728kernel/sysproc.h\u4E2D\u6DFB\u52A0\u76F8\u5E94\u7684\u5934\u6587\u4EF6\r
\r
# Ending\r
\r
\u771F\u4E0D\u6233\uFF0C\u665A\u996D\u8FD8\u6CA1\u5403\u7684\u611F\u89C9\u771F\u4E0D\u6233\u3002\r
\r
\u4E0B\u4E00\u7AD9\uFF1A\u6BCF\u628Alab\u90FD\u5F53\u6700\u540E\u4E00\u628A\uFF0C\u7136\u540E\u5C31\u4E5F\u4E0D\u8981\u6015\u8F93\u3002`,BE=Object.freeze(Object.defineProperty({__proto__:null,default:Kf},Symbol.toStringTag,{value:"Module"})),Zf=`\uFEFF---
title: The CSAPP Attack Lab
date: 2021-12-20
tags:
  - CSAPP
---

# The CSAPP Attack Lab

- insorker
- 2021/12/20

## Hello

\u548C\u4E0A\u4E00\u4E2Alab\u9694\u4E86\u597D\u4E45\u554A\uFF0C\u56E0\u4E3A\u5BF9\u6C47\u7F16\u505A\u51FA\u4E86\u9634\u5F71\u4E86\uFF0C\u800C\u4E14\u6025\u4E8E\u4E86\u89E3\u7F51\u7EDC\u7F16\u7A0B\uFF0C\u6240\u4EE5\u76F4\u63A5\u5F80\u540E\u9762\u770B\u4E86\u3002\u3002\u3002\u7136\u540E\uFF0C\u540E\u9762\u4E5F\u770B\u7684\u5DEE\u4E0D\u591A\u4E86\uFF0C\u6EDA\u56DE\u6765\u8865lab\u63A8\u8FDB\u5EA6\u4E86\u3002

## Introduction

\u8FD9\u4E2Alab\u8BF4\u6765\u5F88\u60ED\u6127\uFF0C\u6211\u6CA1\u80FD\u5168\u9760\u81EA\u5DF1\u8D70\u4E0B\u6765\uFF0C\u4E00\u8FB9\u505A\u4E00\u8FB9\u53C2\u8003\u522B\u4EBA\u7684\u7B14\u8BB0\uFF0C\u53EA\u80FD\u8BF4\u786E\u5B9E\u5B66\u7684\u4E0D\u624E\u5B9E\uFF0C\u5F88\u591A\u6982\u5FF5\u8FD8\u662F\u641E\u4E0D\u660E\u767D\u3002

\u{1F91A}\u4F1A\u8005\u4E0D\u96BE

## How to get start

\u5B8C\u5168\u63A8\u8350\u5B98\u65B9\u6559\u7A0B\uFF0C\u800C\u4E14\u5FC5\u987B\u4ECE\u5B98\u65B9\u6559\u7A0B\u5165\u624B\uFF0C\u4E0D\u7136\u4F60\u5B8C\u5168\u65E0\u4ECE\u5F00\u59CB[attacklab.pdf](http://csapp.cs.cmu.edu/3e/attacklab.pdf)

\u53C2\u8003[The CS:APP Bomb Lab_\u8FD9\u5C31\u5F88\u5E05\u7684\u535A\u5BA2-CSDN\u535A\u5BA2](https://blog.csdn.net/qq_45476172/article/details/121430101?spm=1001.2014.3001.5501)

\u53E6\u5916\uFF0Cobjdump\u4E5F\u8BF7\u81EA\u5B66\u4E00\u4E0B

\u{1F91A}\u4F1A\u8005\u4E0D\u96BE

## Problem

> \u8FD9\u6B21\u6211\u4E5F\u4E0D\u592A\u60F3\u7EC6\u8BB2\u4E86\uFF0C\u81EA\u5DF1\u4E5F\u662F\u5077\u5E08\u522B\u4EBA\u7684\uFF0C\u51B5\u4E14\u522B\u4EBA\u7684\u7B14\u8BB0\u5DF2\u7ECF\u5F88\u597D\u4E86

### ctarget

1. Level 1

   \u5F88\u7B80\u5355\u7684\u9898\uFF0C\u5173\u952E\u770B\u4F60\u7406\u4E0D\u7406\u89E3\u6982\u5FF5\uFF08\u6307ret\uFF09

   \u8BE6\u89C1\u4E66\u4E0AP166\u5173\u4E8Eret\u7684\u89E3\u91CA\uFF0Cret\u76F8\u5F53\u4E8E\u628A\u6808\u5E27\u5E95\u90E8\u7684\u5730\u5740\u7ED9\u8FD4\u56DE\u4E86\uFF0C\u6240\u4EE5\u8986\u76D6\u8FD9\u4E2A\u5730\u5740\u5C31\u884C\u4E86\u3002

   \u53E6\u5916\uFF0CBUFFER_SIZE\u7684\u5927\u5C0F\u4E5F\u5E76\u4E0D\u4E00\u5B9A\u662F40\uFF0C\u4F46\u4E0D\u5F71\u54CD\u505A\u9898\uFF0C\u8BE6\u89C1\u4E66\u4E0AP195\u6700\u540E\uFF0C\u548CP196\u4E0A\u9762\u7684\u90A3\u5F20\u56FE\u7247\u3002

2. Level 2

   \u8FD9\u91CC\u6211\u8FD8\u662F\u6709\u70B9\u7591\u95EE

   1. \u6309\u7167\u4E66\u4E0A\u7684\u8BF4\u6CD5\u662F\u5B58\u5728\u6808\u968F\u673A\u5316\u7684\u64CD\u4F5C\u7684\uFF0C\u4F46\u8FD9\u91CC\u6CA1\u6709
   2. push\u5230\u5E95\u628A\u8FD9\u4E2A\u5730\u5740\u585E\u5230\u54EA\u91CC\u53BB\u4E86\u554A

   \u4E0A\u9762\u7684\u95EE\u9898\u770B\u522B\u4EBA\u7684\u7B14\u8BB0\u5E76\u6CA1\u6709\u7ED9\u51FA\u89E3\u91CA\uFF0C\u8868\u793A\u5F88\u7591\u60D1

3. Level 3

   \u5173\u952E\u662F\u5B57\u7B26\u4E32\u7684\u4F4D\u7F6E\u9009\u5728\u54EA\u91CC\uFF0C\u9009\u5728\u4E0A\u4E00\u4E2A\u6808\u5E27\u91CC\u9762\u80AF\u5B9A\u4E0D\u4F1A\u6709\u9519\uFF0C\u4F46\u662F\u4E3A\u4EC0\u4E48\u653E\u5728buf\u91CC\u4E0D\u884C\u6211\u8FD8\u662F\u6CA1\u60F3\u660E\u767D\u3002

### rtarget

1. Level 2

   \u610F\u601D\u5C31\u662F\u4F60\u6CA1\u529E\u6CD5\u53BB\u6267\u884C\u4F60\u7684\u6808\u6CE8\u5165\u7684\u4EE3\u7801\u4E86\uFF0C\u4F60\u53EA\u80FD\u901A\u8FC7\u4E0D\u65AD\u7684\u8DF3\u8F6C\u51FD\u6570\uFF0C\u6267\u884C\u51FD\u6570\u91CC\u9762\u7684\u8BED\u53E5\uFF08\u542C\u8D77\u6765\u786E\u5B9E\u633A\u4E0D\u9760\u8C31\u7684\uFF09\uFF0C\u53BB\u627E\u5230\u4F60\u60F3\u8981\u7684\u4EE3\u7801\u3002\u7B80\u800C\u8A00\u4E4B\uFF0C\u5C31\u662F\u5C31\u5730\u53D6\u6750\uFF0C\u90A3\u4E48\u6839\u636E\u4F60\u8981\u627E\u7684\u6C47\u7F16\u4EE3\u7801\uFF0C\u6BD4\u5982

   \`\`\`
   The byte sequence 48 89 c7 encodes the instruction movq %rax, %rdi.
   \`\`\`

   \u5728vim\u91CC\u9762

   \`\`\`
   /48 89 c7
   \`\`\`

   \u53EF\u4EE5\u627E\u5230\u4E09\u4E2A\u5904\u5F15\u7528\uFF08\u5176\u5B9E\u56DB\u5904\uFF09\uFF0C\u7136\u540E\u4E09\u4E2A\u91CC\u9762\u53EA\u6709\u4E00\u4E2A\u572848 89 c7\u7684\u540E\u9762\u501F\u4E86\u4E00\u4E2A90\uFF08\u5373nop\uFF09\uFF0C\u6240\u4EE5\u3002\u3002\u3002

2. Level 3

   > \u5410\u69FD\u4E00\u4E0B\uFF0C\u5C45\u7136\u88AB\u6211\u627E\u5230\u4E86\u8BED\u6CD5\u9519\u8BEF
   >
   > you were able inject a type of program \u5C11\u4E86\u4E2A to \u5427

   \u76F4\u63A5\u653E\u5F03\uFF0C\u5B98\u65B9\u8BF4\u8981\u82B1\u4E0D\u5C11\u65F6\u95F4\uFF0C\u52A0\u4E0A\u6211\u524D\u9762\u90A3\u4E48\u591A\u95EE\u9898\u6CA1\u89E3\u51B3\uFF0C\u800C\u4E14\u5B66\u4E86\u4F30\u8BA1\u5F88\u5FEB\u5C31\u5FD8\u4E86\uFF08\u5176\u5B9E\u4E0D\u4F1A\u7684\uFF0C\u6211\u5230\u73B0\u5728\u8FD8\u8BB0\u5F97Lab1\u{1F62D}\u{1F62D}\u{1F62D}\uFF09

   \u5BF9\u4E0D\u8D77\uFF0C\u7F8A\u9A7C\uFF0C\u6211\u88AB\u4F60\u7206\u5565\u4E86\uFF0C\u6280\u672F\u4E0D\u884C\u{1F647}\u{1F647}\u{1F647}

## The End

\u8FD9\u628A\u786E\u5B9E\u62C9\u4E86

\u4E0B\u4E00\u7AD9\uFF1AArchitecture Lab
`,qE=Object.freeze(Object.defineProperty({__proto__:null,default:Zf},Symbol.toStringTag,{value:"Module"})),jf=`\uFEFF---
title: The CSAPP Bomb Lab
date: 2021-11-16
tags:
  - CSAPP
---

# The CSAPP Bomb Lab

- insorker
- 2021/11/16

## Hello

\u7535\u8D5B\u5BC4\u4E86\uFF0C\u6240\u4EE5\u6EDA\u56DE\u6765\u505Abomblab\u4E86

## Introduction

\u8FD9\u4E2A Lab \u4E00\u6837\u8BA9\u4EBA\u6478\u4E0D\u7740\u5934\u8111\uFF0C\u4E0A\u624B\u7684\u8BDD\u8FD8\u662F\u5C5E\u4E8E\u5B8C\u5168\u4E0D\u77E5\u9053\u5E72\u4EC0\u4E48\uFF0C\u4F46\u662F\u4E00\u65E6\u4E0A\u624B\u505A\u51FA\u7B2C\u4E00\u9898\u5C31\u597D\u50CF\u7A7F\u4E86\u4E09\u5929\u7684\u5185\u88E4\u7EC8\u4E8E\u88AB\u6362\u6389\u4E00\u6837\u8111\u888B\u8981\u9AD8\u5174\u5730\u4ECE\u5929\u4E0A\u98DE\u5230\u5730\u4E0B\uFF0C\u6240\u4EE5\u4E3A\u4E86\u9632\u6B62\u63A5\u4E0B\u6765\u7684\u521D\u4E0A\u624B\u7684\u840C\u65B0\u5927\u4F6C\u4E0D\u77E5\u9053\u4ECE\u4F55\u4E0B\u624B\uFF0C\u6211\u5148\u5199\u4E00\u4E2A\u7B80\u77ED\u7684\u4E0A\u624B\u5165\u95E8\u6765\u5E2E\u52A9\u5927\u5BB6\u3002

## How to get start

> \u65E0\u5267\u900F\uFF0C\u653E\u5FC3\u98DF\u7528
>
> which to blow yourself up. Have a nice day!

1. \u7B2C\u4E00\u4EF6\u4E8B\u662F\u5B66\u4F1A\u5982\u4F55\u4F7F\u7528**gdb**\uFF0C\u6211\u7ED9\u51FA\u5B66\u6821\u5B98\u65B9\u7684\u7B80\u6D01\u6559\u7A0B\uFF0C\u5E0C\u671B\u5927\u5BB6\u80FD\u5B8C\u6574\u7684\u8DDF\u4E00\u904D\uFF0C\u5E2E\u52A9\u786E\u5B9E\u5F88\u5927

   > http://beej.us/guide/bggdb/

2. \u5982\u679C\u662F\u7B2C\u4E00\u6B21\u5B66\u4F1A gdb \u7684\u4F7F\u7528\uFF0C\u53EF\u80FD\u8FD8\u6709\u70B9\u4F7F\u4E0D\u4E0A\u52B2\uFF0C\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u7528\u4E66\u4E0A\u7684\`disas\`\uFF0C\u63A8\u8350\u4F7F\u7528\`layout\`\uFF0C\u53EF\u4EE5\u4E0A\u7F51\u767E\u5EA6\uFF0C\u6216\u8005 help \u4E00\u4E0B\uFF0C\u6216\u8005\u4F7F\u7528\u4EE5\u4E0B\u7B80\u5355\u7684\u6307\u4EE4

   > layout \u7528\u4E8E\u5206\u5272\u7A97\u53E3\uFF0C\u53EF\u4EE5\u4E00\u8FB9\u67E5\u770B\u4EE3\u7801\uFF0C\u4E00\u8FB9\u6D4B\u8BD5\u3002\u4E3B\u8981\u6709\u4EE5\u4E0B\u51E0\u79CD\u7528\u6CD5\uFF1A
   > 	layout src\uFF1A\u663E\u793A\u6E90\u4EE3\u7801\u7A97\u53E3
   > 	layout asm\uFF1A\u663E\u793A\u6C47\u7F16\u7A97\u53E3
   > 	layout regs\uFF1A\u663E\u793A\u6E90\u4EE3\u7801/\u6C47\u7F16\u548C\u5BC4\u5B58\u5668\u7A97\u53E3
   > 	layout split\uFF1A\u663E\u793A\u6E90\u4EE3\u7801\u548C\u6C47\u7F16\u7A97\u53E3
   > 	layout next\uFF1A\u663E\u793A\u4E0B\u4E00\u4E2Alayout
   > 	layout prev\uFF1A\u663E\u793A\u4E0A\u4E00\u4E2Alayout
   > 	Ctrl + L\uFF1A\u5237\u65B0\u7A97\u53E3
   > 	Ctrl + x\uFF0C\u518D\u63091\uFF1A\u5355\u7A97\u53E3\u6A21\u5F0F\uFF0C\u663E\u793A\u4E00\u4E2A\u7A97\u53E3
   > 	Ctrl + x\uFF0C\u518D\u63092\uFF1A\u53CC\u7A97\u53E3\u6A21\u5F0F\uFF0C\u663E\u793A\u4E24\u4E2A\u7A97\u53E3
   >
   > \u200B	Ctrl + x\uFF0C\u518D\u6309a\uFF1A\u56DE\u5230\u4F20\u7EDF\u6A21\u5F0F\uFF0C\u5373\u9000\u51FAlayout\uFF0C\u56DE\u5230\u6267\u884Clayout\u4E4B\u524D\u7684\u8C03\u8BD5\u7A97\u53E3\u3002

3. \u5B66\u4E60\u4E00\u4E9B\u8F93\u51FA\u7684\u5C0F\u8BC0\u7A8D\uFF0C\u6BD4\u5982\u641C\u7D22 gdb x\uFF0C\u8FD8\u6709\u5982\u4E0B

   \`\`\`c
   print *(char *)$rax
   \`\`\`

\u7136\u540E\u5C31\u6CA1\u4EC0\u4E48\u597D\u8BF4\u7684\u4E86\uFF0C\u52A8\u624B\u8BD5\u8BD5\u5427

## Problem

### 1. phase_1

> Hmm...  Six phases must be more secure than one phase!

#### \u5F00\u89E3

\u5F88\u7B80\u5355\u7684\u9898\u76EE\uFF0C\u4E13\u95E8\u5751\u4E0D\u719F\u6089 gdb \u4F7F\u7528\u7684\u65B0\u624B

1. \u5728\`input = read_line();\`\u524D\u6572\u4E0B\u65AD\u70B9
   ![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_bomblab_1.png)


2. \u6267\u884C\u540E\u53D1\u73B0\u503C\u88AB\u5B58\u5165\u4E86\u5BC4\u5B58\u5668 %rdi
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_bomblab_2.png)


3. \u7136\u540E\u5355\u6B65\u8FDB\u5165 phase_1 \u53D1\u73B0 esi \u88AB\u5B58\u503C 'B'\uFF0C\u800C\u4E14\u8C03\u7528\u4E86\u51FD\u6570 strings_not_equal\uFF0C\u53EF\u60F3\u800C\u77E5\uFF0C\u9700\u8981\u8F93\u5165\u7684\u5B57\u6BCD\u662F**B**
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_bomblab_3.png)


4. \u9A8C\u8BC1\uFF0C\u5BC4\u4E86

	\u5F53\u65F6\u505A\u5230\u8FD9\u91CC\u6211\u662F\u4E07\u5206\u6FC0\u52A8\u554A\uFF0C\u89C9\u5F97\u7B80\u5355\u53C8\u6709\u6210\u5C31\u611F\uFF0C\u4F46\u662F\u5C1D\u8BD5\u8F93\u5165'B'\u7ED3\u679C\u5931\u8D25\u4E86\uFF0C\u8BA9\u6211\u5927\u5403\u4E00\u60CA\u3002\u56DE\u5934\u67E5\u770B\u7A0B\u5E8F\uFF0C\u4E00\u6B65\u6B65\u8C03\u8BD5 strings_not_equal\uFF0C\u53D1\u73B0\u679C\u7136\u662F\u6211\u60F3\u5F53\u7136\u4E86\uFF0C\u9898\u76EE\u4ECE\u6765\u6CA1\u660E\u8BF4\u8FC7\u8F93\u5165\u53EA\u662F\u4E00\u4E2A\u5B57\u7B26\uFF0C\u6211\u8C03\u8BD5\u4E86\u91CC\u9762\u7684 string_length\uFF0C\u53D1\u73B0\u6B63\u786E\u7B54\u6848\u7ADF\u7136\u6709 52 \u4E2A\u5B57\u7B26\uFF0C\u4F46\u4E0D\u53EF\u5426\u8BA4\u7684\u662F\uFF0C\u6211\u601D\u8DEF\u662F\u5BF9\u7684\uFF0C\u67E5\u770B\u7684\u65B9\u5F0F\u9519\u4E86\uFF0C\u4E8E\u662F\u6709\u4E86\u63A5\u4E0B\u6765\u7684

5. 
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_bomblab_4.png)

6. \u8FD9\u4E0BOK\u4E86

#### \u7B54\u6848

Border relations with Canada have never been better.

> Phase 1 defused. How about the next one?

### 2. phase_2

> The second phase is harder.  No one will ever figure out how to defuse this...

#### \u5F00\u89E3

\u4E0D\u5199\u592A\u8BE6\u7EC6\u4E86\uFF0C\u56E0\u4E3A\u622A\u56FE\u592A\u9EBB\u70E6\u4E86

\u8FD9\u9898\u9700\u8981\u4E00\u5B9A\u60F3\u8C61\u529B\uFF0C\u9898\u76EE\u8FD8\u662F\u5F88\u7B80\u5355\u7684\u3002\u9996\u5148\u8981\u731C\u6D4B\u8F93\u5165\u662F\u4EC0\u4E48\uFF0C\u4ECE\u4E00\u4E9B\u86DB\u4E1D\u9A6C\u8FF9\u8FD8\u662F\u53EF\u4EE5\u770B\u51FA\u6765\u5230\u5E95\u8F93\u5165\u662F\u4EC0\u4E48\uFF0C\u6BD4\u5982

\`\`\`c
0x400f05 <phase_2+9>    callq  0x40145c <read_six_numbers>
\`\`\`

\u53EA\u6709\u82F1\u8BED\u4E13\u516B\u624D\u80FD\u770B\u51FA\u6765\u662F\u8F93\u51656\u4E2A\u6570\u5B57\uFF0C\u4E8B\u5B9E\u4E5F\u786E\u5B9E\u662F\u8F93\u51656\u4E2A\u6570\u5B57\uFF0C\u5185\u90E8\u7EC6\u8282\u6211\u770B\u4E86\uFF0C\u548C\u4E3B\u7EBF\u6CA1\u5173\u7CFB\uFF08\u552F\u4E00\u7684\u5173\u7CFB\u544A\u8BC9\u4E86\u4F60\uFF0C\u6240\u6709\u53C2\u6570\u5BC4\u5B58\u5668\u7684\u5730\u5740\u90FD\u88AB\u79FB\u9001\u5230\u4E86\u6808\u4E2D\uFF0C\u4E5F\u5C31\u662F\u4F60\u7684\u8F93\u5165\u88AB\u9001\u5230\u4E86\u6808\u4E2D\u5B58\u50A8\uFF09

\`\`\`C
(gdb) x/6dw $rsp
0x7ffffffeda60: 1       2       4       8
0x7ffffffeda70: 16      32
\`\`\`

\u800C\u4E14\u5B83\u7684\u4E0B\u4E00\u53E5\u8BDD\u5B8C\u5168\u662F\u7ED9\u6211\u4EEC\u63D0\u793A\u4E86

\`\`\`C
0x400f0a <phase_2+14>   cmpl   $0x1,(%rsp)
\`\`\`

\u8FD9\u53E5\u8BDD\u8BF4\u660E\u8F93\u5165\u7684\u7B2C\u4E00\u4E2A\u6570\u8981\u6C42\u662F1\uFF0C\u6211\u53EA\u80FD\u8BF4\u5F88\u826F\u5FC3\u4E86

\u7136\u540E\u7684\u5173\u952E\u5728\u8FD9\u91CC

\`\`\`C
0x400f17 <phase_2+27>   mov    -0x4(%rbx),%eax
0x400f1a <phase_2+30>   add    %eax,%eax
0x400f1c <phase_2+32>   cmp    %eax,(%rbx)
0x400f1e <phase_2+34>   je     0x400f25 <phase_2+41>
0x400f20 <phase_2+36>   callq  0x40143a <explode_bomb>
0x400f25 <phase_2+41>   add    $0x4,%rbx
0x400f29 <phase_2+45>   cmp    %rbp,%rbx
0x400f2c <phase_2+48>   jne    0x400f17 <phase_2+27>
0x400f2e <phase_2+50>   jmp    0x400f3c <phase_2+64>
0x400f30 <phase_2+52>   lea    0x4(%rsp),%rbx
0x400f35 <phase_2+57>   lea    0x18(%rsp),%rbp
0x400f3a <phase_2+62>   jmp    0x400f17 <phase_2+27>
\`\`\`

\u6211\u90FD\u5DF2\u7ECF\u628A\u5173\u952E\u90E8\u5206\u63D0\u53D6\u51FA\u6765\u4E86\uFF0C\u7B54\u6848\u4E5F\u544A\u8BC9\u4F60\uFF0C\u63A8\u5BFC\u4E00\u5B9A\u5F88\u5BB9\u6613\u5427

#### \u7B54\u6848

1 2 4 8 16 32

> That's number 2.  Keep going!

### 3. phase_3

> I guess this is too easy so far.  Some more complex code will confuse people.

#### \u5F00\u89E3

\u7B2C3\u9898\u6709\u70B9\u70B9\u83AB\u540D\u5176\u5999\uFF0C\u770B\u8D77\u6765\u597D\u50CF\u662F\u4E00\u6761\u5206\u53C9\u8DEF\uFF0C\u8F93\u5165\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u9009\u62E9\u4F60\u8D70\u54EA\u6761\u8DEF\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u89E3\uFF0C\u8FD9\u91CC\u4EC5\u7ED9\u51FA\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A1\u7684\u89E3

\`\`\`C
0x400f75 <phase_3+50>   jmpq   *0x402470(,%rax,8)
\`\`\`

\u5982\u679C\u8F93\u51651\uFF0C1\u4F1A\u88AB\u5B58\u5165%rax\uFF0C\u5219\u4F1A\u8DF3\u8F6C\u5230\u8FD9\u4E2A\u4F4D\u7F6E

\`\`\`C
0x400fb9 <phase_3+118>  mov    $0x137,%eax
0x400fbe <phase_3+123>  cmp    0xc(%rsp),%eax
0x400fc2 <phase_3+127>  je     0x400fc9 <phase_3+134>
0x400fc4 <phase_3+129>  callq  0x40143a <explode_bomb>
\`\`\`

\u7136\u540E\u5F88\u7B80\u5355\uFF0C\u8FD9\u91CC\u660E\u8BF4\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F0x137\uFF0C\u5373\u5341\u8FDB\u5236311\uFF0Cbomb\u89E3\u51B3\u4E86

#### \u7B54\u6848

1 311

> Halfway there!

### 4. phase_4

> Oh yeah?  Well, how good is your math?  Try on this saucy problem!

#### \u5F00\u89E3

\u8FD9\u9898\u8FC7\u7684\u6709\u70B9\u61F5\u61F5\u7684\uFF0C\u5927\u90E8\u5206\u6211\u90FD\u770B\u61C2\u4E86\uFF0C\u5C31\u4E00\u4E2A\u5730\u65B9\u6CA1\u770B\u61C2\uFF0C\u5C31\u662F\u4E00\u4E2A\u53F3\u79FB\u64CD\u4F5C\u9664\u4E862\uFF0C\u4F46\u6211\u6CA1\u627E\u5230\u4E3A\u4EC0\u4E48\u8981\u9664\u4EE52\uFF0C\u660E\u660E cl \u662F0\u554A

\u8FD9\u91CC\u7B80\u5355\u8BF4\u660E\u4E00\u4E0B\u6211\u7684\u60F3\u6CD5\u5427\uFF0C\u8FD9\u4E00\u884C\u4EE3\u7801\u662F\u5173\u952E

\`\`\`C
0x40103a <phase_4+46>   mov    $0xe,%edx
0x40103f <phase_4+51>   mov    $0x0,%esi
\`\`\`

\u8FD9\u53E5\u8BDD\u544A\u8BC9\u4E86\u6211\u4EEC\u4F20\u5165 func4() \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F14\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F0\uFF0C\u90A3\u4F60\u53EF\u80FD\u8981\u95EE\u7B2C\u4E00\u4E2A\u53C2\u6570\u5462\uFF1F\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u6211\u4EEC\u952E\u76D8\u8F93\u5165\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u7136\u540E\u6211\u628A\u91CC\u9762\u7684 func4() \u7FFB\u8BD1\u4E3A\u4E86C\u8BED\u8A00\u4EE3\u7801

\`\`\`C
int func4(int edi, int edx, int esi) {
	unsigned int eax = edx - esi;
	unsigned int ecx = eax >> 31;
	eax = (eax + ecx) >> ecx;
	ecx = eax + esi;
	if (ecx > edi) {
		func4(edi, ecx - 1, esi);
		eax = eax + eax;
		return eax;
	}
	eax = 0;
	if (ecx < edi) {
		func4(edi, edx, ecx + 1);
		eax = eax + eax + 1;
	}
	return eax;
}
\`\`\`

\u8FD9\u4E2A\u4EE3\u7801\u7FFB\u8BD1\u7684\u4E0D\u4E00\u5B9A\u5BF9\uFF08\u800C\u4E14\u7B2C\u56DB\u884C\u7684\u53F3\u79FB\u64CD\u4F5C\u5728\u5B9E\u8DF5\u4E2D\u8BC1\u660E\u6211\u662F\u9519\u7684\uFF0C\u53EF\u80FD\u6211\u8FD8\u5F97\u770B\u770B\u522B\u4EBA\u7684\u653B\u7565\u5B66\u4E60\u5B66\u4E60\uFF09\uFF0C\u4F46\u5927\u4F53\u4E0A\u662F\u5BF9\u7684\uFF0C\u8FD8\u662F\u53EF\u4EE5\u53C2\u8003\u4E00\u4E0B\u7684\u3002

\u7ED3\u5408\u4E0A\u4E0B\u6587\uFF0C\u8FD9\u4E2A\u51FD\u6570\u7684\u76EE\u7684\u5C31\u662F\u8FD4\u56DE0\uFF0C\u5982\u4F55\u8FD4\u56DE0\u5462\uFF1F\u8981\u6C42 ecx == edi\uFF0C\u5DF2\u77E5 edx \u521D\u59CB\u5316\u4E3A14\uFF0Cesi \u521D\u59CB\u5316\u4E3A0\uFF0C\u7ECF\u8FC7\u8BA1\u7B97\u5230\u8FBE if \u5224\u65AD\u65F6\uFF0Cecx \u7684\u503C\u662F7\uFF0C\u90A3\u4E48 edi \u4F5C\u4E3A\u6211\u4EEC\u7684\u8F93\u5165\u6700\u7B80\u5355\u7684\u60C5\u51B5\u5C31\u662F\u4E3A7\u3002

\u6700\u540E\uFF0C\u8DF3\u51FA func4() \u540E\u8FD8\u80FD\u53D1\u73B0\u7B2C\u4E8C\u4E2A\u8F93\u5165\u88AB\u9650\u5B9A\u4E3A0\uFF0C\u90A3\u4E48\u7B54\u6848\u5C31\u547C\u4E4B\u6B32\u51FA\u4E86\u3002

#### \u7B54\u6848

7 0

> So you got that one.  Try this one.

### 5. phase_5

> Round and 'round in memory we go, where we stop, the bomb blows!

#### \u5F00\u89E3

\u8FD9\u9898\u975E\u5E38\u6709\u610F\u601D\uFF0C\u91CC\u9762\u6D89\u53CA\u5230\u4E86\u4E00\u4E2A\u53EB\u91D1\u4E1D\u96C0\u503C\u7684\u4E1C\u897F\uFF0C\u53EF\u662F\u548C\u89E3\u9898\u5012\u662F\u6CA1\u534A\u6BDB\u94B1\u5173\u7CFB\uFF08

\u7C97\u7565\u6D4F\u89C8\u4E00\u4E0B\u4EE3\u7801\uFF0C\u53D1\u73B0\u6211\u4EEC\u7684\u8F93\u5165\u88AB\u5B58\u5728\u4E86 rbx \u91CC\u9762\uFF0Cstring_length\u4E5F\u660E\u8BF4\u4E86\u8981\u8F93\u5165\u957F\u5EA6\u4E3A6\u7684\u5B57\u7B26\u4E32

\`\`\`C
(gdb) x/s $rbx
0x6038c0 <input_strings+320>:   "IONEFG"
\`\`\`

\u7136\u540E\u6838\u5FC3\u7684\u90E8\u5206\u5C31\u6765\u4E86

\`\`\`C
0x40108b <phase_5+41>   movzbl (%rbx,%rax,1),%ecx
0x40108f <phase_5+45>   mov    %cl,(%rsp)
0x401092 <phase_5+48>   mov    (%rsp),%rdx
0x401096 <phase_5+52>   and    $0xf,%edx
0x401099 <phase_5+55>   movzbl 0x4024b0(%rdx),%edx
0x4010a0 <phase_5+62>   mov    %dl,0x10(%rsp,%rax,1)
0x4010a4 <phase_5+66>   add    $0x1,%rax
0x4010a8 <phase_5+70>   cmp    $0x6,%rax
0x4010ac <phase_5+74>   jne    0x40108b <phase_5+41>
\`\`\`

\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\u5C31\u662F rax \u4E00\u5F00\u59CB\u88AB\u521D\u59CB\u5316\u4E3A0\uFF0C\u6BCF\u6B21\u5FAA\u73AF\u52A01\uFF0C\u76F4\u5230\u52A0\u52306\u8DF3\u51FA\u5FAA\u73AF\u3002\u90A3\u4E48\u8FD9\u4E2A\u5FAA\u73AF\u662F\u5E72\u4EC0\u4E48\u4E8B\u60C5\u7684\u5462\uFF1F\u53EF\u4EE5\u770B\u5230 rbx + rax \u7684\u503C\u88AB\u8D4B\u7ED9\u4E86ecx\uFF0C\u7136\u540E\u4E00\u76F4\u5230\u7B2C\u56DB\u884C\uFF0C\u628A\u8FD9\u4E2A\u503C\u622A\u65AD\u62104\u4F4D\u4E8C\u8FDB\u5236\u6570\uFF0C\u518D\u4ECE\u5185\u5B580x4024b0\u8BFB\u53D6\u4E00\u4E2A\u5B57\u7B26\u8D4B\u7ED9 edx\uFF0C\u7136\u540E\u5B58\u50A8\u5230 rsp + 10 + rax \u7684\u4F4D\u7F6E\uFF0C\u90A3\u6211\u4EEC\u6765\u770B\u770B0x4024b0\u91CC\u9762\u5B58\u50A8\u4E86\u4EC0\u4E48

\`\`\`C
(gdb) x/s 0x4024b0
0x4024b0 <array.3449>:  "maduiersnfotvbylSo you think you can stop the bomb with ctrl-c, do you?"
\`\`\`

\u4E00\u6BB5\u5947\u602A\u7684\u4E71\u7801\uFF0C\u6211\u4EEC\u8981\u4ECE\u8FD9\u4E9B\u4E71\u7801\u4E2D\u9009\u62E9\u6211\u4EEC\u9700\u8981\u7684\u5B57\u7B26\uFF0C\u90A3\u9700\u8981\u7684\u5B57\u7B26\u662F\u4EC0\u4E48\u634F\uFF1F

\u4E14\u770B

\`\`\`C
0x4010ae <phase_5+76>   movb   $0x0,0x16(%rsp)
0x4010b3 <phase_5+81>   mov    $0x40245e,%esi
0x4010b8 <phase_5+86>   lea    0x10(%rsp),%rdi
0x4010bd <phase_5+91>   callq  0x401338 <strings_not_equal>
\`\`\`

\u53BB\u52300x40245e\u4E2D\uFF0C\u4E00\u5207\u62E8\u4E91\u89C1\u65E5

\`\`\`C
(gdb) x/s 0x40245e
0x40245e:       "flyers"
\`\`\`

\u7B54\u6848\u5C31\u51FA\u6765\u4E86

> ASCII: 9 1514 6 7 8

#### \u7B54\u6848

IONEFG

> Good work!  On to the next...

### 6. phase_6

> This phase will never be used, since no one will get past the earlier ones.  But just in case, make this one extra hard.

#### \u5F00\u89E3

\u82B1\u4E86\u6211\u597D\u4E45\uFF0C\u539F\u6765\u8FD8\u633A\u7B80\u5355\u7684\uFF0C\u53EA\u662F\u6211\u81EA\u5DF1\u5728\u8DDF\u81EA\u5DF1\u6D6A\u8D39\u65F6\u95F4:sweat_smile:

\u7B80\u5355\u6765\u8BF4\u5206\u4E3A\u4EE5\u4E0B\u6B65\u9AA4

1. \u8BFB\u51656\u4E2A\u6570\u5B57\uFF0C\u8FD96\u4E2A\u6570\u5B57\u4F1A\u4F9D\u6B21\u51CF\u4E00\uFF08\u4E0D\u6539\u53D8\u5185\u5B58\u91CC\u9762\u7684\u503C\uFF09\uFF0C\u7136\u540E\u548C5\u6BD4\u8F83\uFF0C\u5927\u4E8E5\u5C31\u5BC4\u4E86

2. \u7136\u540E\u8FD96\u4E2A\u6570\u5B57\uFF0C\u4F1A\u68C0\u67E5\u662F\u5426\u6709\u91CD\u590D\uFF0C\u68C0\u67E5\u65B9\u5F0F\u662F\uFF1A\u7B2C\u4E00\u4E2A\u6570\u5B57\u9009\u62E9\uFF0C\u548C\u5176\u4ED6\u6570\u5B57\u5BF9\u6BD4\u662F\u5426\u76F8\u7B49\uFF0C\u7136\u540E\u9009\u62E9\u7B2C\u4E8C\u4E2A\u91CD\u590D\u4E0A\u8FF0\u64CD\u4F5C\uFF0C\u4EE5\u6B64\u7C7B\u63A8

3. \u7136\u540E %ecx \u88AB\u8D4B\u503C7\uFF0C\u7136\u540E\u6BCF\u4E2A\u539F\u6765\u4F60\u8F93\u5165\u7684\u4E1C\u897F\u90FD\u8981\u7528\u8FD9\u4E2A7\u53BB\u51CF\uFF08\u5751\u4F60\u7684\uFF09

4. \u6700\u96BE\u7684\u90E8\u5206\u6765\u4E86\uFF0C\u4F60\u8981\u770B\u51FA\u4E00\u4E2A\u53EB\u505A\u94FE\u8868\u7684\u4E1C\u897F

   > \u53EF\u4EE5\u770B\u51FA 0x6032d0 \u8FD9\u4E2A\u5730\u5740\u91CC\u9762\u5B58\u4E86\u4E9B\u4E1C\u897F\uFF0C\u6211\u4E00\u5F00\u59CB\u7528\u5341\u8FDB\u5236\u53BB\u770B\uFF0C\u5B8C\u5168\u6478\u4E0D\u7740\u5934\u8111\u3002\u5076\u7136\u4E00\u6B21\u752816\u8FDB\u5236\u53D6\u770B\u4E86\u770B
   >
   > \`\`\`C
   > (gdb) x/12ag 0x6032d0
   > 0x6032d0 <node1>:       0x10000014c     0x6032e0 <node2>
   > 0x6032e0 <node2>:       0x2000000a8     0x6032f0 <node3>
   > 0x6032f0 <node3>:       0x30000039c     0x603300 <node4>
   > 0x603300 <node4>:       0x4000002b3     0x603310 <node5>
   > 0x603310 <node5>:       0x5000001dd     0x603320 <node6>
   > 0x603320 <node6>:       0x6000001bb     0x0
   > \`\`\`
   >
   > \u6211\u8D85\uFF0C0x6032e0\u597D\u773C\u719F\u554A\uFF0C\u7B49\u7B49\uFF0C\u540E\u9762\u600E\u4E48\u8DDF\u4E86\u4E2A<node2>\u662F\u4E0D\u662F\u663E\u793A\u51FA\u95EE\u9898\u4E86\uFF0C\u6211\u7528\u5341\u8FDB\u5236\u8BD5\u4E00\u4E0B\u3002\u3002\u3002\u54CE\uFF1F\u4E0D\u4F1A\u663E\u793Anode2\u554A\uFF0C\u600E\u4E48\u5341\u516D\u8FDB\u5236\u5C31\u663E\u793A\u9519\u8BEF\u4E86\u3002\u3002\u3002\u7B49\u7B49\uFF0Cnode?\u6211\u8D85\uFF01\uFF01
   >
   > \u6240\u4EE5\u8FD9\u662F\u4E2A\u94FE\u8868\uFF01\uFF01\uFF01

5. \u94FE\u8868\u91CC\u7684\u4E0B\u6807\u5168\u90E8\u5B58\u5230\u4E86 $rsp + 0x20 \u7684\u4F4D\u7F6E\uFF08\u4E0D\u4FE1\u4F60\u8BD5\u8BD5\u554A\uFF09\uFF0C\u7136\u540E\u4ED6\u627E\u52300x20\u548C0x28\u7684\u4F4D\u7F6E\uFF0C\u4FEE\u65390x6032d0\u5185\u5B58\u4E2D\u94FE\u8868\u7684\u7B2C\u4E8C\u4E2A\u91CF\uFF0C\u5373\u4E0B\u4E2A\u4F4D\u7F6E\u7684\u94FE\u63A5\uFF0C\u628A0\u884C0x28\u63A5\u5230\u4E860x20\u540E\u9762\uFF0C\u563F\u563F\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u94FE\u8868\u7684\u987A\u5E8F\u88AB\u6539\u53D8\u4E86\uFF08\u5F53\u7136\u5C3E\u90E8\u4ECD\u7136\u6307\u54110\uFF09

6. \u6539\u53D8\u540E\uFF0C\u8981\u5E72\u4EC0\u4E48\u5462\uFF1F\u770B\u6E90\u7801\u53EF\u4EE5\u770B\u51FA\u4ED6\u628A\u6BCF\u4E24\u4E2A\u76F8\u90BB\u7684\u8282\u70B9\u6BD4\u5927\u5C0F\uFF0C\u5982\u679C\u524D\u4E00\u4E2A\u6BD4\u540E\u4E00\u4E2A\u5927\uFF0C\u5C31\u7EE7\u7EED\u8FD0\u884C\uFF0C\u5426\u5219BOOM!!!\uFF0C\u90A3\u4E48\u7B54\u6848\u4E0D\u5C31\u51FA\u6765\u4E86\u5417

\`\`\`C
x/12ag 0x6032d0

(gdb) x/12ag 0x6032d0

0x6032d0 <node1>:       0x10000014c     0x6032e0 <node2>
0x6032e0 <node2>:       0x2000000a8     0x6032f0 <node3>
0x6032f0 <node3>:       0x30000039c     0x603300 <node4>
0x603300 <node4>:       0x4000002b3     0x603310 <node5>
0x603310 <node5>:       0x5000001dd     0x603320 <node6>
0x603320 <node6>:       0x6000001bb     0x0

x/6ag $rsp + 0x20

0x7ffffffeda60: 0x6032d0 <node1>        0x6032e0 <node2>
0x7ffffffeda70: 0x6032f0 <node3>        0x603300 <node4>
0x7ffffffeda80: 0x603310 <node5>        0x603320 <node6>
\`\`\`

#### \u7B54\u6848

4 3 2 1 6 5

> Congratulations! You've defused the bomb!

## The End

\u662F\u5F00\u59CB\uFF1F\u8FD8\u662F\u6682\u6B47\uFF1F

\u4E0B\u4E00\u7AD9\uFF1AAttack Lab
`,UE=Object.freeze(Object.defineProperty({__proto__:null,default:jf},Symbol.toStringTag,{value:"Module"})),Vf=`\uFEFF---\r
title: The CSAPP Cache Lab\r
date: 2022-01-01\r
tags:\r
  - CSAPP\r
---\r
\r
# The CSAPP Cache Lab\r
\r
- insorker\r
- 2022/1/1\r
\r
## Hello\r
\r
\u505A\u5B8Clab\u662F\u53BB\u5E7412\u670824\u53F7\uFF0C\u8FC7\u4E86\u5F88\u4E45\u624D\u5199\u8FD9\u7BC7\u7B14\u8BB0\u8BF4\u5B9E\u8BDD\u662F\u6709\u4E9B\u4E0D\u5E94\u8BE5\u7684\uFF0C\u4F46\u8C01\u53EB\u6CA1\u4EBA\u50AC\u6211\u5462\r
\r
\u563F\u563F\r
\r
## Introduction\r
\r
\u8FD9\u4E2Alab\u53EF\u4EE5\u8BF4\u4EE3\u7801\u91CF\u6BD4\u4E4B\u524D\u63D0\u9AD8\u4E86\u597D\u591A\uFF0C\u4F46\u662F\u4EE3\u7801\u672C\u8EAB\u5F88\u7B80\u5355\uFF0C\u800C\u4E14\u4E5F\u4E0D\u8981\u6C42\u4F60\u53BB\u8BFB\u4ED6\u63D0\u4F9B\u7684\u6E90\u7801\uFF0C\u4ECE\u7801\u4EE3\u7801\u7684\u89D2\u5EA6\u4E0D\u5B58\u5728\u592A\u5927\u7684\u96BE\u70B9\u3002\r
\r
\u90A3\u4E48\u8FD9\u4E2Alab\u7684\u96BE\u70B9\u5728\u54EA\uFF1F\u770B\u4F60\u7406\u4E0D\u7406\u89E3\u6982\u5FF5\u548C\u4E00\u70B9\u5C0F\u5B66\u521D\u4E2D\u5965\u8D5B\u601D\u7EF4\u3002\r
\r
## How to start\r
\r
\u4E0D\u5B58\u5728How to start\uFF0C\u53BB\u770B\u5B98\u65B9\u7684pdf\uFF0C\u770B\u5B98\u65B9\u7684PPT\u5C31\u57FA\u672C\u4E0A\u591F\u4E86\r
\r
http://csapp.cs.cmu.edu/3e/cachelab.pdf\r
\r
http://www.cs.cmu.edu/afs/cs/academic/class/15213-f15/www/recitations/rec07.pdf\r
\r
## Problem\r
\r
### Part A\r
\r
\u8FD9\u91CC\u7684\u8981\u6C42\u4E0D\u662F\u8981\u6211\u4EEC\u5199\u4E00\u4E2Acache\uFF0C\u800C\u662F\u6A21\u62DF\u8BA1\u7B97\u4E00\u4E2Acache\u7684\u884C\u4E3A\u3002\r
\r
\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\u5C31\u662F\u4EE3\u7801\u4E0D\u9700\u8981\u505A\u5B9E\u9645\u5B58\u50A8\uFF0C\u6211\u4EEC\u53EA\u8981\u77E5\u9053hit, miss, eviction\u53D1\u751F\u4E86\u591A\u5C11\u6B21\u3002\r
\r
\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\u5C31\u662F\u53EA\u8981\u80FD\u660E\u767Dhit, miss, eviction\u7684\u903B\u8F91\u5C31\u53EF\u4EE5\u4E86\u3002\r
\r
\u597D\u7684\uFF0C\u90A3\u4E48\u903B\u8F91\u662F\u4EC0\u4E48\uFF0C\u6211\u5728\u6211\u7684\u4EE3\u7801\u91CC\u6CE8\u91CA\u4E86\u4E00\u4E0B\uFF08\u56E0\u4E3A\u770B\u522B\u4EBA\u7684\u653B\u7565\u4E5F\u6CA1\u80FD\u628A\u610F\u601D\u8868\u793A\u6E05\u695A\uFF0C\u6211\u4E5F\u53EA\u80FD\u8FD9\u4E48\u89E3\u91CA\u4E00\u4E0B\uFF09\r
\r
\`\`\`C\r
switch (tl.op) {\r
        case 'I':\r
                continue;\r
        case 'L':\r
                /* \u9996\u5148\u641E\u6E05\u695A\u6982\u5FF5\uFF0C\u8FD9\u4E2Aload\u662F\u4EC0\u4E48\u4E1C\u897F,store\u53C8\u662F\u4EC0\u4E48 */\r
                /* load: \u4ECE\u5185\u5B58\u4E2D\u8BFB\u53D6 */\r
                if (cache_load(ca)) {\r
                        /* store: \u5185\u5B58\u4E2D\u6CA1\u6709\uFF0C\u4ECE\u78C1\u76D8\u7F13\u5B58 */\r
                        cache_store(ca);\r
                }\r
                /* \u4E5F\u5C31\u662F\u8BF4\u8FD9\u513F\u7684"L"\u5F88\u7B80\u5355\uFF0C\u5C31\u662FCPU\u4ECE\u5185\u5B58\u4E2D\u8BFB\u53D6\uFF0C\u4E0D\u547D\u4E2D\u5C31\u4ECE\u78C1\u76D8\u8BFB\u5230\u5185\u5B58\uFF0C\u7136\u540E\u5728\u8BFB\u5230CPU */\r
                break;\r
        case 'S':\r
                /* \u4ECECPU\u4E2D\u5B58\u5230\u5185\u5B58\u4E2D */\r
                /* \u9996\u5148\u5224\u65AD\uFF0C\u5185\u5B58\u4E2D\u662F\u5426\u6709\u5BF9\u5E94block\uFF0C\u5982\u679C\u6709\uFF0C\u90A3\u4E48\u4ECEcpu\u5B58\u5230\u5185\u5B58\u4E2D */\r
                /* \u4F46\u662F\u7531\u4E8E\u5B58\u7684\u8FC7\u7A0B\u4E0D\u5F71\u54CDhit, miss, eviction\uFF0C\u6240\u4EE5\u8DF3\u8FC7store */\r
                if (cache_load(ca)) {\r
                        /* \u5982\u679C\u5185\u5B58\u4E2D\u6CA1\u6709\u5BF9\u5E94block\uFF0C\u90A3\u4E48\u8981\u4ECE\u78C1\u76D8\u7F13\u5B58 */\r
                        cache_store(ca);\r
                }\r
                /* \u8FD9\u513F\u7684\u5B58\u662F\u4ECECPU\u5B58\u5230\u5185\u5B58\uFF0C\u4F46\u662F\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u513F\u5206\u4E24\u79CD\u60C5\u51B5 */\r
                /*     1. \u4E0D\u547D\u4E2D\uFF0C\u90A3\u4E48\u8981\u5148\u4ECE\u78C1\u76D8\u8BFB\u5230\u5185\u5B58\uFF08\u548C"L"\u7684\u64CD\u4F5C\u662F\u4E00\u6837\u7684\uFF09 */\r
                /*     2. \u547D\u4E2D\uFF0C\u7B49\u4EF7\u4E8E1.\u7ED3\u675F\uFF0C\u4E0D\u9700\u8981\u4EFB\u4F55\u64CD\u4F5C */\r
                /* \u7136\u540E\uFF0C\u4ECECPU\u4E2D\u5B58\u5230\u5185\u5B58\u4E2D\uFF0C\u4F46\u662F\u95EE\u9898\u662F\u4ECECPU\u5199\u5230\u5185\u5B58\u4E0D\u6D89\u53CA\u4EFB\u4F55hit,miss,eviction */\r
                /* \u6240\u4EE5\u5C31\u5F88\u626F\u6DE1\u4E86\uFF0C\u5BFC\u81F4\u548C\u524D\u4E00\u4E2A\u64CD\u4F5C\u4E00\u6A21\u4E00\u6837 */\r
                break;\r
        case 'M':\r
                /* \u9898\u76EE\u597D\u5FC3\u7684\u544A\u8BC9\u4E86\u6211\u4EECmodify\u7B49\u4EF7\u4E8E\u5148load\uFF0C\u540Estore */\r
                if (cache_load(ca)) {\r
                        cache_store(ca);\r
                }\r
                if (cache_load(ca)) {\r
                        cache_store(ca);\r
                }\r
                break;\r
}\r
\`\`\`\r
\r
\u7136\u540E\u5C31\u662Fcache\u7684\u5177\u4F53\u5B9E\u73B0\uFF0CPPT\u91CC\u9762\u7ED9\u4E86\u4E00\u4E9B\u7ED3\u6784\u53EF\u4EE5\u53C2\u8003\u4E00\u4E0B\uFF0C\u6BD4\u8F83\u7B80\u5355\u3002\r
\r
\`\`\`C\r
static unsigned s, E, b, S;\r
static char trace_file[200];\r
static unsigned hit_count, miss_count, eviction_count;\r
\r
typedef struct cache_line {\r
        int valid_bit;\r
        int tag_bits;\r
        CSIM_INT stp_cnt;\r
}Cache_Line;\r
Cache_Line ucache, **cache;\r
\r
typedef struct trace_line {\r
        char op;\r
        CSIM_INT addr;\r
        int size;\r
}Trace_Line;\r
\r
typedef struct cache_address {\r
        int tag_bits;\r
        int set_index;\r
        int block_offset;\r
}Cache_Address;\r
\`\`\`\r
\r
\u8FD8\u6709\u4E00\u4E2A\u5C31\u662F\u5982\u4F55\u9009\u62E9\u727A\u7272\u9875\uFF0C\u727A\u7272\u9875PPT\u91CC\u7ED9\u4E86\u4E24\u4E2A\u95EE\u53E5\uFF1A\u961F\u5217\uFF1F\u65F6\u95F4\u6233\uFF1F\r
\r
\u8FD9\u91CC\u9009\u62E9\u4E86\u7528\u65F6\u95F4\u6233\u7684\u505A\u6CD5\uFF0C\u5F53\u7136\u6211\u7684\u5B9E\u73B0\u65B9\u6CD5\u662F\u6709\u95EE\u9898\u7684\uFF0C\u5982\u679C\u4E00\u4E2Ablock\u957F\u671F\u4E0D\u88AB\u547D\u4E2D\uFF0C\u90A3\u4E48\u65F6\u95F4\u6233\u6709\u53EF\u80FD\u53D8\u4E3A\u8D1F\u7684\uFF0C\u5F53\u7136\u5728\u6D4B\u8BD5\u6837\u4F8B\u4E2D\u6CA1\u6709\u51FA\u95EE\u9898\u5C31\u7B97\u4E86\u3002\r
\r
\u5176\u4ED6\u7684\u5DE5\u4F5C\u4E0D\u8FC7\u662F\u642C\u7816\u5427\u4E86\uFF0CGoogle\u4E00\u4E0B\u90FD\u53EF\u4EE5\u51FA\u6765\u3002\u6211\u7684\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A\r
\r
\`\`\`C\r
#include "cachelab.h"\r
#include <unistd.h>\r
#include <getopt.h>\r
#include <stdlib.h>\r
#include <stdio.h>\r
#include <malloc.h>\r
\r
#define CSIM_DEBUG 0\r
#if CSIM_DEBUG\r
#define db_cache_address 1\r
#define db_printSummary 1\r
#define db_print_cache_line 1\r
#endif\r
\r
typedef unsigned long long CSIM_INT;\r
\r
static unsigned s, E, b, S;\r
static char trace_file[200];\r
static unsigned hit_count, miss_count, eviction_count;\r
\r
typedef struct cache_line {\r
	int valid_bit;\r
	int tag_bits;\r
	CSIM_INT stp_cnt;\r
}Cache_Line;\r
Cache_Line ucache, **cache;\r
\r
typedef struct trace_line {\r
	char op;\r
	CSIM_INT addr;\r
	int size;\r
}Trace_Line;\r
\r
typedef struct cache_address {\r
	int tag_bits;\r
	int set_index;\r
	int block_offset;\r
}Cache_Address;\r
\r
static void print_help(char** argv);\r
static void optarg_check(char* optarg, char** argv);\r
static void sEb_check(char** argv);\r
static void parse_args(int argc, char** argv);\r
\r
void cache_constructor();\r
void cache_destructor();\r
\r
void parse_trace_line();\r
void parse_trace_address(CSIM_INT addr, Cache_Address* ca); \r
int cache_load(Cache_Address ca);\r
int cache_store(Cache_Address ca);\r
\r
void update_stp();\r
\r
int main(int argc, char** argv)\r
{\r
	parse_args(argc, argv);\r
\r
	cache_constructor();\r
\r
	parse_trace_line();\r
\r
	cache_destructor();\r
	\r
    printSummary(hit_count, miss_count, eviction_count);\r
\r
    return 0;\r
}\r
\r
static void print_help(char** argv) {\r
	printf("Usage: %s [-hv] -s <num> -E <num> -b <num> -t <file>\\n"\r
            "Options:\\n"\r
            "  -h         Print this help message.\\n"\r
            "  -v         Optional verbose flag.\\n"\r
            "  -s <num>   Number of set index bits.\\n"\r
            "  -E <num>   Number of lines per set.\\n"\r
            "  -b <num>   Number of block offset bits.\\n"\r
            "  -t <file>  Trace file.\\n\\n"\r
            "Examples:\\n"\r
            "  linux>  %s -s 4 -E 1 -b 4 -t traces/yi.trace\\n"\r
            "  linux>  %s -v -s 8 -E 2 -b 4 -t traces/yi.trace\\n",\r
			argv[0], argv[0], argv[0]);\r
}\r
\r
\r
static void optarg_check(char* optarg, char** argv) {\r
	if (optarg == NULL) {\r
		printf("%s: Missing required command line argument\\n", argv[0]);\r
		print_help(argv);\r
		exit(0);\r
	}\r
}\r
\r
static void sEb_check(char** argv) {\r
	if (s <= 0 || E <= 0 || b <= 0) {\r
		printf("%s: Missing required command line argument\\n", argv[0]);\r
		print_help(argv);\r
		exit(0);\r
	}\r
}\r
\r
static void parse_args(int argc, char** argv) {\r
	int opt, trace_disp = 0;\r
	while ( (opt = getopt(argc, argv, "hvs:E:b:t:")) != -1 ) {\r
		switch (opt) {\r
			case 's': optarg_check(optarg, argv); sscanf(optarg, "%u", &s); break;\r
			case 'E': optarg_check(optarg, argv); sscanf(optarg, "%u", &E); break;\r
			case 'b': optarg_check(optarg, argv); sscanf(optarg, "%u", &b); break;\r
			case 't': optarg_check(optarg, argv); sscanf(optarg, "%s", trace_file); break;\r
			case 'v': trace_disp = 1; break;\r
			case 'h':\r
			default:\r
				print_help(argv); exit(0);\r
		}\r
	}\r
	sEb_check(argv);\r
	S = 1 << s;\r
	\r
	FILE* pFile = fopen(trace_file, "r");\r
\r
	if (pFile == NULL) {\r
		printf("%s: No such file or director\\n", trace_file);\r
		exit(0);\r
	}\r
	else if (trace_disp) {\r
		Trace_Line trace;\r
		while (fscanf(pFile, " %c %llx,%d", &trace.op, &trace.addr, &trace.size) > 0) {\r
			printf("%c %llx,%d\\n", trace.op, trace.addr, trace.size);\r
		}\r
	}\r
\r
	fclose(pFile);\r
}\r
\r
void cache_constructor() {\r
	cache = (Cache_Line**)malloc(sizeof(Cache_Line*) * S);\r
	\r
	for (int i = 0; i < S; i ++ ) {\r
		cache[i] = (Cache_Line*)malloc(sizeof(Cache_Line) * E);\r
\r
		for (int j = 0; j < E; j ++ ) {\r
			cache[i][j].valid_bit = 0;\r
			cache[i][j].tag_bits = 0;\r
			cache[i][j].stp_cnt = 0;\r
		}\r
	}\r
}\r
\r
void cache_destructor() {\r
	for (int i = 0; i < S; i ++ )\r
		free(cache[i]);\r
	free(cache);\r
}\r
\r
void parse_trace_line() {\r
	FILE* pFile = fopen(trace_file, "r");\r
\r
	Trace_Line tl;\r
	Cache_Address ca;\r
	while (fscanf(pFile, " %c %llx,%d", &tl.op, &tl.addr, &tl.size) > 1) {\r
		parse_trace_address(tl.addr, &ca);\r
		#if db_cache_address\r
			printf("%c %llx\\n", tl.op, tl.addr);\r
			printf("%d %d %d\\n", ca.tag_bits, ca.set_index, ca.block_offset);\r
		#endif\r
		\r
		switch (tl.op) {\r
			case 'I':\r
				continue;\r
			case 'L':\r
				/* \u9996\u5148\u641E\u6E05\u695A\u6982\u5FF5\uFF0C\u8FD9\u4E2Aload\u662F\u4EC0\u4E48\u4E1C\u897F,store\u53C8\u662F\u4EC0\u4E48 */\r
				/* load: \u4ECE\u5185\u5B58\u4E2D\u8BFB\u53D6 */\r
				if (cache_load(ca)) {\r
					/* store: \u5185\u5B58\u4E2D\u6CA1\u6709\uFF0C\u4ECE\u78C1\u76D8\u7F13\u5B58 */\r
					cache_store(ca);\r
				}\r
				/* \u4E5F\u5C31\u662F\u8BF4\u8FD9\u513F\u7684"L"\u5F88\u7B80\u5355\uFF0C\u5C31\u662FCPU\u4ECE\u5185\u5B58\u4E2D\u8BFB\u53D6\uFF0C\u4E0D\u547D\u4E2D\u5C31\u4ECE\u78C1\u76D8\u8BFB\u5230\u5185\u5B58\uFF0C\u7136\u540E\u5728\u8BFB\u5230CPU */\r
				break;\r
			case 'S':\r
				/* \u4ECECPU\u4E2D\u5B58\u5230\u5185\u5B58\u4E2D */\r
				/* \u9996\u5148\u5224\u65AD\uFF0C\u5185\u5B58\u4E2D\u662F\u5426\u6709\u5BF9\u5E94block\uFF0C\u5982\u679C\u6709\uFF0C\u90A3\u4E48\u4ECEcpu\u5B58\u5230\u5185\u5B58\u4E2D */\r
				/* \u4F46\u662F\u7531\u4E8E\u5B58\u7684\u8FC7\u7A0B\u4E0D\u5F71\u54CDhit, miss, eviction\uFF0C\u6240\u4EE5\u8DF3\u8FC7store */\r
				if (cache_load(ca)) {\r
					/* \u5982\u679C\u5185\u5B58\u4E2D\u6CA1\u6709\u5BF9\u5E94block\uFF0C\u90A3\u4E48\u8981\u4ECE\u78C1\u76D8\u7F13\u5B58 */\r
					cache_store(ca);\r
				}\r
				/* \u8FD9\u513F\u7684\u5B58\u662F\u4ECECPU\u5B58\u5230\u5185\u5B58\uFF0C\u4F46\u662F\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u513F\u5206\u4E24\u79CD\u60C5\u51B5 */\r
				/*     1. \u4E0D\u547D\u4E2D\uFF0C\u90A3\u4E48\u8981\u5148\u4ECE\u78C1\u76D8\u8BFB\u5230\u5185\u5B58\uFF08\u548C"L"\u7684\u64CD\u4F5C\u662F\u4E00\u6837\u7684\uFF09 */\r
				/*     2. \u547D\u4E2D\uFF0C\u7B49\u4EF7\u4E8E1.\u7ED3\u675F\uFF0C\u4E0D\u9700\u8981\u4EFB\u4F55\u64CD\u4F5C */\r
				/* \u7136\u540E\uFF0C\u4ECECPU\u4E2D\u5B58\u5230\u5185\u5B58\u4E2D\uFF0C\u4F46\u662F\u95EE\u9898\u662F\u4ECECPU\u5199\u5230\u5185\u5B58\u4E0D\u6D89\u53CA\u4EFB\u4F55hit,miss,eviction */\r
				/* \u6240\u4EE5\u5C31\u5F88\u626F\u6DE1\u4E86\uFF0C\u5BFC\u81F4\u548C\u524D\u4E00\u4E2A\u64CD\u4F5C\u4E00\u6A21\u4E00\u6837 */\r
				break;\r
			case 'M':\r
				/* \u9898\u76EE\u597D\u5FC3\u7684\u544A\u8BC9\u4E86\u6211\u4EECmodify\u7B49\u4EF7\u4E8E\u5148load\uFF0C\u540Estore */\r
				if (cache_load(ca)) {\r
					cache_store(ca);\r
				}\r
				if (cache_load(ca)) {\r
					cache_store(ca);\r
				}\r
				break;\r
		}\r
		update_stp();\r
		\r
		#if db_print_cache_line\r
			printf("line %d: ", ca.set_index);\r
			for (int i = 0; i < E; i ++ )\r
				printf("%d ", cache[ca.set_index][i].valid_bit);\r
			printf("\\n");\r
		#endif\r
\r
		#if db_printSummary\r
			printSummary(hit_count, miss_count, eviction_count);\r
			printf("\\n");\r
		#endif\r
	}\r
\r
	fclose(pFile);\r
}\r
\r
void parse_trace_address(CSIM_INT addr, Cache_Address* ca) {\r
	ca->block_offset = addr >> 0 & (CSIM_INT)-1 >> (64 - b);\r
	ca->set_index = addr >> b & (CSIM_INT)-1 >> (64 - s);\r
	ca->tag_bits = addr >> (b + s) & (CSIM_INT)-1 >> (b + s);\r
}\r
\r
int cache_load(Cache_Address ca) {\r
	Cache_Line* cl = cache[ca.set_index];\r
\r
	for (int i = 0; i < E; i ++ ) {\r
		if (cl[i].valid_bit == 0) continue;\r
		if (cl[i].tag_bits != ca.tag_bits) continue;\r
\r
		cl[i].stp_cnt = 0;\r
		hit_count ++ ;\r
		return 0;\r
	}\r
\r
	miss_count ++ ;\r
	return 1;\r
}\r
\r
int cache_store(Cache_Address ca) {\r
	Cache_Line* cl = cache[ca.set_index];\r
	Cache_Line* eviction;\r
\r
	int has_blank = 0;\r
	for (int i = 0; i < E; i ++ ) {\r
		if (cl[i].valid_bit == 0) {\r
			eviction = &cl[i];\r
			has_blank = 1;\r
			break;\r
		}\r
	}\r
\r
	if (has_blank == 0) {\r
		eviction_count ++ ;\r
\r
		eviction = &cl[0];\r
		for (int i = 1; i < E; i ++ ) {\r
			if (cl[i].stp_cnt > eviction->stp_cnt) {\r
				eviction = &cl[i];\r
				continue;\r
			}\r
		}\r
	}\r
	\r
	eviction->valid_bit = 1;\r
	eviction->tag_bits = ca.tag_bits;\r
	eviction->stp_cnt = 0;\r
\r
	return 0;\r
}\r
\r
void update_stp() {\r
	for (int i = 0; i < S; i ++ )\r
		for (int j = 0; j < E; j ++ )\r
			if (cache[i][j].valid_bit == 1)\r
				cache[i][j].stp_cnt ++ ;\r
}\r
\`\`\`\r
\r
\u5199\u7684\u957F\u4E00\u70B9\u662F\u4E3A\u4E86\u6574\u4F53\u597D\u770B\u4E00\u70B9(#^ . ^#)\r
\r
### Part B\r
\r
\u8FD9\u4E2A\u95EE\u770B\u8D77\u6765\u975E\u5E38\u7B80\u5355\uFF0C\u4F46\u662F\u5B9E\u9645\u505A\u8D77\u6765\u8FD8\u662F\u975E\u5E38\u96BE\u7684\r
\r
\u5982\u679C\u7ED9\u4E09\u4E2A\u5C0F\u95EE\u9898\u6309\u7167\u96BE\u5EA6\u6392\u4E2A\u5E8F\uFF0C\u90A3\u4E48\u7ED3\u679C\u662F 64\xD764 > 32 \xD732 > 61 \xD7 67\r
\r
\u4E0D\u8FC7\u505A\u9898\u8FD8\u662F\u5F97\u6309\u7167\u987A\u5E8F\u505A\r
\r
#### 32\xD732\r
\r
\u8FD9\u91CC\u5148\u8D34\u51FA\u4E00\u4F4D\u5927\u4F6C\u7684\u5206\u6790\r
\r
https://yangtau.me/computer-system/csapp-cache.html\r
\r
\u7136\u540E\uFF0C\u5144\u5F1F\uFF0C\u770B\u6211\u56DE\u84DD\uFF1A\r
\r
\u9996\u5148\u5206\u6790\u4E00\u4E0B\u80FD\u8FBE\u5230\u7684\u6700\u597D\u60C5\u51B5\uFF0C32\u7EC4\uFF0C\u6BCF\u7EC432\u5B57\u8282\uFF0C\u80FD\u5B588\u4E2Aint\uFF0C\u90A3\u4E48\u7406\u8BBA\u4E0A\u8FDB\u884C\u5206\u5757\u6700\u5927\uFF08\u6B63\u65B9\u5F62\uFF09\u80FD\u5206\u4E2A8\xD78\u7684\u5757\r
\r
\u90A3\u4E48\u6BCF\u6B21\u8BFB\u51658\xD78\u81F3\u5C1116\u6B21\u4E0D\u547D\u4E2D\uFF088\u884CA + 8\u884CB\uFF09\uFF0C\u7136\u540E32\xD732\u53C8\u53EF\u4EE5\u5206\u51FA4\xD74\u4E2A8\xD78\u7684\u5C0F\u5757\r
\r
\u90A3\u4E48\u7406\u8BBA\u4E0A\u6700\u5C0F\u503C\u5C31\u662F16\xD716 == 256\u6B21miss\r
\r
\u90A3\u4E48\u5B9E\u64CD\u4E00\u4E0B\uFF0C\u7ED3\u679C\u5374\u5F97\u5230\u4E86300\u591A\u6B21miss\r
\r
\`\`\`C\r
#if demo0\r
	int i, j;\r
\r
	for (i = 0; i < 8; i ++ )\r
		for (j = 0; j < 8; j ++ )\r
			*(pb + j * n + i) = *(pa + i * n + j);\r
#endif\r
\`\`\`\r
\r
\u7A76\u5176\u539F\u56E0\uFF0C\u53D1\u73B032\u7EC4\u8BFB\u51658\u7EC4A\u30018\u7EC4B\uFF0C\u5E76\u4E0D\u662F\u5982\u540C\u7AE5\u8BDD\u822C\u5404\u81EA\u5360\u4E00\u884C\uFF0C\u800C\u662F\u53D1\u751F\u4E86\u51B2\u7A81\r
\r
\u90A3\u4E48\u51B2\u7A81\u7684\u539F\u56E0\u662F\u4EC0\u4E48\u5462\uFF1F\r
\r
\u8BA9\u6211\u4EEC\u60F3\u60F3\uFF0C32\xD732\uFF0C\u6BCF\u884C\u670932\u4E2Aint\uFF0C32 / 8 = 4\uFF0C\u90A3\u4E48\u77E9\u9635\u4E2D\u7684\u7B2C0\u884C\u5C06\u4F1A\u6620\u5C04\u5230cache\u4E2D\u524D4\u7EC4\uFF0C\u540C\u7406\u7B2C1\u884C\u4F1A\u6620\u5C04\u5230\u7B2C4\u7EC4\u81F3\u7B2C7\u7EC4\u3002\u3002\u3002\u4E00\u76F4\u5230\u7B2C7\u884C\u6620\u5C04\u5230\u7B2C28\u7EC4\u81F331\u7EC4\uFF08\u662F\u4E0D\u662F\u7279\u522B\u5DE7\uFF0C\u6B63\u597Dcache\u4E00\u517132\u7EC4\uFF09\r
\r
\u90A3\u4E48\u77E9\u9635A\u548C\u77E9\u9635B\u4E4B\u95F4\u5C31\u53D1\u751F\u4E86\u51B2\u7A81\uFF0C\u6BD4\u5982\u77E9\u9635A\u7684\u7B2C0\u884C\u8BFB\u5165\uFF0C\u7136\u540E\u5199\u5165\u77E9\u9635B\u7B2C0\u884C\u5C31\u628AA\u7ED9\u8986\u76D6\u4E86\uFF0C\u9700\u8981\u91CD\u65B0\u8BFB\u5165A\u7684\u7B2C0\u884C\uFF0C\u8FD9\u5C31\u9020\u6210\u4E86\u591A\u4F59\u7684miss\uFF0C\u540C\u7406\u5176\u4ED6\r
\r
\u8FD9\u65F6\u5C31\u6709\u4E00\u79CD\u975E\u5E38\u53D6\u5DE7\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u5C31\u662F\u628A\u77E9\u9635A\u7684\u7B2C0\u884C\u5B58\u5165\u5BC4\u5B58\u5668\uFF08\u8FD9\u6837\u5C31\u4E0D\u4F1A\u88AB\u77E9\u9635B\u8986\u76D6\u4E86\uFF09\uFF0C\u7136\u540E\u5C31\u975E\u5E38\u8F7B\u677E\u7684\u89E3\u51B3\u4E86\u51B2\u7A81\r
\r
\`\`\`C\r
#if demo1\r
	int i;\r
	int x0, x1, x2, x3, x4, x5, x6, x7;\r
\r
	for (i = 0; i < s; i ++ ) {\r
		x0 = *(pa + i * n + 0);\r
		x1 = *(pa + i * n + 1);\r
		x2 = *(pa + i * n + 2);\r
		x3 = *(pa + i * n + 3);\r
		x4 = *(pa + i * n + 4);\r
		x5 = *(pa + i * n + 5);\r
		x6 = *(pa + i * n + 6);\r
		x7 = *(pa + i * n + 7);\r
\r
		*(pb + 0 * n + i) = x0;\r
		*(pb + 1 * n + i) = x1;\r
		*(pb + 2 * n + i) = x2;\r
		*(pb + 3 * n + i) = x3;\r
		*(pb + 4 * n + i) = x4;\r
		*(pb + 5 * n + i) = x5;\r
		*(pb + 6 * n + i) = x6;\r
		*(pb + 7 * n + i) = x7;\r
	}\r
#endif\r
\`\`\`\r
\r
\u4F46\u662F\u8BF7\u7B49\u4E00\u4E0B\uFF0C\u7ED3\u679C\u4ECD\u7136\u663E\u793A287\u6B21miss\uFF08\u6211\u4E0D\u8BB0\u5F97\u5177\u4F53\u6570\u5B57\u4E86\uFF09\uFF0C\u8FD9\u662F\u4EC0\u4E48\u539F\u56E0\u5462\uFF1F\r
\r
\u8BF7\u4F60\u518D\u60F3\u4E00\u60F3\u521A\u624D\u7684\u95EE\u9898\uFF0C\u51B2\u7A81\u771F\u7684\u89E3\u51B3\u4E86\u5417\uFF1F\u6211\u4EEC\u53D1\u73B0\u77E9\u9635B\u88AB\u8BFB\u5165\u540E\uFF0C\u6211\u4EEC\u60F3\u8BFB\u5165\u77E9\u9635A\u5C31\u5FC5\u7136\u4F1A\u8986\u76D6\u77E9\u9635B\uFF08\u4EC5\u5B58\u5728\u5728\u5BF9\u89D2\u7EBF\u4E0A\uFF09\uFF0C\u8FD9\u9020\u6210\u4E86\u4E00\u4E9B\u591A\u7684miss\r
\r
\u867D\u7136\u7B54\u6848\u5DF2\u7ECF\u6EE1\u5206\u4E86\uFF0C\u4F46\u6211\u4EEC\u8FD8\u662F\u60F3\u518D\u51B2\u4E00\u51B2\uFF0C\u4E8E\u662F\u4E00\u79CD\u975E\u5E38\u795E\u5947\u7684\u65B9\u6CD5\u51FA\u73B0\u4E86\uFF0C\u89C1\u4E0B\u56FE\r
\r
> **\u8BF4\u660E**\r
>\r
> \u7F51\u683C\uFF1A\r
> 	\u7F51\u683C\u5BF9\u5E94\u4E00\u4E2Acache\r
> 	\u884C\u5BF9\u5E94set\uFF0C\u5373s=3\uFF0C\u51718\u7EC4\r
> 	\u5217\u5BF9\u5E94block\uFF0C\u9ED8\u8BA4E=1\uFF0Cb=5\uFF0C\u5373block\u5927\u5C0F\u4E3A32\u5B57\u8282\uFF0C\u53EF\u5B58\u50A88\u4E2Aint\uFF0C\u65458\u5217\r
> \u84DD\u8272\uFF1A\r
> 	\u77E9\u9635A\u88AB\u5B58\u50A8\u5165cache\r
> \u7EA2\u8272\uFF1A\r
> 	\u77E9\u9635B\u88AB\u5B58\u50A8\u5165cache\r
> \u9EC4\u8272\uFF1A\r
> 	\u5DF2\u7FFB\u8F6C\u7684\u5750\u6807\r
> \u5750\u6807\uFF1A\r
> 	\u7F51\u683C\u5750\u6807\u540C\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u5DE6\u4E0A\u89D2\u4E3A0,0\r
> 	\u7EFF\u8272\u6570\u7EC4\uFF08\u65E0\u8BBA\u6DF1\u6D45\uFF09\uFF0C\u5747\u663E\u793A\u7684\u662F\u77E9\u9635A\u5B58\u5165\u7684\u5750\u6807\r
> 	\u9ED8\u8BA4\u77E9\u9635B\u5982\u679C\u88AB\u5B58\u5165\uFF08\u5373\u7F51\u683C\u6807\u7EA2\uFF09\uFF0C\u5219\u5176\u5750\u6807\u4E0E\u7F51\u683C\u5750\u6807\u4E00\u81F4\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_cachelab_1.png)\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_cachelab_2.png)\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_cachelab_3.png)\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_cachelab_4.png)\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_cachelab_5.png)\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_cachelab_6.png)\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_cachelab_7.png)\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_cachelab_8.png)\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_cachelab_9.png)\r
\r
\u8FD9\u6837\u5C31OK\u4E86\r
\r
\u4EE3\u7801\u5982\u4E0B\r
\r
\`\`\`C\r
#if fastest32\r
	int i, j, tmp;\r
	int x0, x1, x2, x3, x4, x5, x6, x7;\r
\r
	for (i = 0; i < s; i ++ ) {\r
		x0 = *(pa + i * n + 0);\r
		x1 = *(pa + i * n + 1);\r
		x2 = *(pa + i * n + 2);\r
		x3 = *(pa + i * n + 3);\r
		x4 = *(pa + i * n + 4);\r
		x5 = *(pa + i * n + 5);\r
		x6 = *(pa + i * n + 6);\r
		x7 = *(pa + i * n + 7);\r
\r
		*(pb + i * n + 0) = x0;\r
		*(pb + i * n + 1) = x1;\r
		*(pb + i * n + 2) = x2;\r
		*(pb + i * n + 3) = x3;\r
		*(pb + i * n + 4) = x4;\r
		*(pb + i * n + 5) = x5;\r
		*(pb + i * n + 6) = x6;\r
		*(pb + i * n + 7) = x7;\r
\r
		for (j = 0; 2 * j < i; j ++ ) {\r
			tmp = *(pb + j * n + i - j);\r
			*(pb + j * n + i - j) = *(pb + (i - j) * n + j);\r
			*(pb + (i - j) * n + j) = tmp;\r
		}\r
	}\r
	for (i = s; i < 2 * s; i ++ ) {\r
		for (j = i - s + 1; 2 * j < i; j ++ ) {\r
			tmp = *(pb + j * n + i - j);\r
			*(pb + j * n + i - j) = *(pb + (i - j) * n + j);\r
			*(pb + (i - j) * n + j) = tmp;\r
		}\r
	}\r
#endif\r
\`\`\`\r
\r
#### 64\xD764\r
\r
\u8FD9\u4E2A\u5DF2\u7ECF\u8D85\u8FC7\u4E86\u6211\u7684\u80FD\u529B\u8303\u56F4\uFF0C\u6211\u53EA\u80FD\u52C9\u5F3A\u770B\u61C2\u522B\u4EBA\u7684\u601D\u8DEF\r
\r
#### 61\xD767\r
\r
\u8FD9\u4E2A\u53C8\u8FC7\u4E8E\u7B80\u5355\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u9762\u4E5F\u6CA1\u4EC0\u4E48\u89C4\u5F8B\uFF0C\u4E00\u4E2A\u5C0Fblock\u4E00\u4E2A\u5C0Fblock\u7684\u8BD5\u8BD5\u5C31\u884C\u4E86\r
\r
## The End\r
\r
\u75DB\u5FEB\r
\r
\u4E0B\u4E00\u7AD9\uFF1AMalloc Lab`,zE=Object.freeze(Object.defineProperty({__proto__:null,default:Vf},Symbol.toStringTag,{value:"Module"})),Yf=`\uFEFF---
title: The CSAPP Data Lab
date: 2021-06-09
tags:
  - CSAPP
---

# The CSAPP Data Lab

- insorker
- 2021/6/9

## Hello

\u8F9E\u9000\u4E86\u4E00\u4E9B\u4E8B\u60C5\uFF0C\u73B0\u5728\u6210\u4E86\u65E0\u4E1A\u6E38\u6C11\uFF0C\u4E0D\u8FC7\u7EC8\u662F\u4E8E\u95F2\u4E0B\u6765\u4E86\u3002\u4E5F\u7B97\u4E00\u4E2A\u65B0\u7684\u5F00\u59CB\uFF0C\u6709\u70B9\u81EA\u5DF1\u7684\u65F6\u95F4\u505A\u70B9\u559C\u6B22\u7684\u4E8B\u60C5\u4E86

\u6240\u4EE5\uFF0C\u4F60\u597D\uFF0CCSAPP\uFF01

## Introduction

\u7B2C\u4E00\u7AE0\u7684 Lab \u662F\u5173\u4E8E\u6574\u6570\u3001\u6D6E\u70B9\u6570\u5728\u8BA1\u7B97\u673A\u5185\u90E8\u7684\u5B58\u50A8\u4E0E\u8BA1\u7B97\u3002

\u867D\u7136\u6570\u636E\u5B58\u50A8\u662F\u4E00\u4EF6\u5F88\u57FA\u7840\u3001\u5F88\u81EA\u7136\u7684\u4E8B\u60C5\uFF0C\u5927\u90E8\u5206\u65F6\u5019\u6211\u4EEC\u751A\u81F3\u611F\u89C9\u4E0D\u5230\u5B83\u4EEC\u7684\u5B58\u5728\uFF0C\u56E0\u4E3A\u88AB\u8BA4\u4E3A\u662F\u7406\u6240\u5E94\u5F53\uFF08\u70B9\u540D\u6279\u8BC4\u5F31\u7C7B\u578B\u8BED\u8A00\uFF09\u3002\u4E0D\u8FC7\u8FD9\u4E9B\u4ECD\u7136\u5F88\u91CD\u8981\uFF0C\u6570\u5B66\u8BA1\u7B97\u7684\u9519\u8BEF\u662F\u975E\u5E38\u4E25\u91CD\u7684\uFF0C\u53EF\u80FD\u4F1A\u5E26\u6765\u707E\u96BE\u6027\u7684\u540E\u679C\uFF0C\u8FD9\u91CC\u5F15\u7528\u539F\u6587\u7684\u4F8B\u5B50\uFF1A

\u54CE\uFF0C\u6CA1\u4E3E\u4F8B\u5462\uFF0C\u60F3\u770B\u81EA\u5DF1\u4E70\u4E00\u672C\u5B9E\u4F53\u4E66\u5427~

> \u63D0\u524D\u7EA6\u5B9A\u4E00\u4E0B\uFF0C\u5927\u5199\u5B57\u6BCD\u8868\u793A\u5355\u4E2A\u6BD4\u7279\u4F4D\uFF0C\u5C0F\u5199\u5B57\u6BCD\u8868\u793A\u4E00\u4E32\u6BD4\u7279\u6570\u636E

## Problems

### 1. bitXor

\`\`\`cpp
/* 
 * bitXor - x^y using only ~ and & 
 *   Example: bitXor(4, 5) = 1
 *   Legal ops: ~ &
 *   Max ops: 14
 *   Rating: 1
 */
int bitXor(int x, int y) {
  return 2;
}
\`\`\`

> \u5F88\u9057\u61BE\uFF0C\u6211\u67E5\u4E86\u5F88\u591A\u5730\u65B9\u90FD\u6CA1\u6709\u627E\u5230\u7B26\u53F7 ^ \u7684\u6B63\u786E\u8F6C\u4E49\uFF08https://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm\uFF09\uFF0C\u6709\u4EBA\u77E5\u9053\u7684\u8BDD\u52A1\u5FC5\u7559\u8A00\u544A\u8BC9\u6211

\u9996\u5148\u7406\u89E3\u4E00\u4E0B\u5F02\u6216\u662F\u4EC0\u4E48
$$
A \u5F02\u6216 B = \\overline{A}B + \\overline{B}A
$$
\u53D6\u53CD\u548C\u4E0E\u9898\u76EE\u662F\u5141\u8BB8\u4F7F\u7528\u7684\uFF0C\u90A3\u4E48\u552F\u4E00\u7684\u96BE\u70B9\u662F\u5982\u4F55\u521B\u9020\u51FA\u6216

\u6839\u636E\u6469\u6839\u5B9A\u5F8B\u6211\u4EEC\u53EF\u4EE5\u628A & \u548C | \u76F8\u4E92\u8F6C\u6362\u5F97\u5230

\`\`\`cpp
A | B = ~((~A) & (~B))
\`\`\`

\u6240\u4EE5\uFF0C\u53EF\u5F97\u6700\u7EC8\u7ED3\u679C

\`\`\`cpp
int bitXor(int x, int y) {
  return ~(~(~x & y) & ~(~y & x));
}
\`\`\`

### 2. tmin

\`\`\`cpp
/* 
 * tmin - return minimum two's complement integer 
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 4
 *   Rating: 1
 */
int tmin(void) {
  return 2;
}
\`\`\`

\u8FD9\u9898\u5F88\u7B80\u5355\u554A\uFF0C\u4E0D\u89E3\u91CA

\`\`\`cpp
int tmin(void) {
  return 1 << 31;
}
\`\`\`

### 3. isTmax

\`\`\`cpp
/*
 * isTmax - returns 1 if x is the maximum, two's complement number,
 *     and 0 otherwise 
 *   Legal ops: ! ~ & ^ | +
 *   Max ops: 10
 *   Rating: 1
 */
int isTmax(int x) {
  return 2;
}
\`\`\`

> \u9519\u8BEF\u793A\u8303\uFF1A
>
> 1. ! (x + x + 2) \uFF1Ax = -1\u65F6\u5019\u4E0D\u884C
> 2. !(x ^ ~(x + 1))\uFF1A\u540C\u7406 x = -1 \u65F6\u5019\u4E0D\u884C

\u9664\u4E86\u9519\u8BEF\u793A\u8303\uFF0C\u7ECF\u8FC7\u6211\u7684\u6D4B\u8BD5\uFF0C\u8FD8\u5B58\u5728\u5F88\u591A\u532A\u5937\u6240\u601D\u7684\u5730\u65B9\uFF0C\u6BD4\u5982

\`\`\`cpp
int main() {
    int a;
    scanf("%d", &a);
    // 0x7FFFFFFF
    printf("%d\\n", !!(a + 1));
    printf("%d\\n", (a + 1) + (a + 1));
    printf("%d\\n", 0x7FFFFFFF);
    printf("%d\\n", a);					// <- \u5728\u8FD9\u91CC
    printf("%d\\n", (a + 1));
    printf("%d\\n", !!(a + 1) & !(a + a + 2));
    printf("%d\\n", isTmax(a));
    return 0;
}
/* \u8F93\u5165 */
0x7FFFFFFF
/* \u8F93\u51FA */
1
2
2147483647
0				// <- \u5728\u8FD9\u91CC
1
0
0
\`\`\`

\u867D\u7136\u4E0A\u9762\u7684\u95EE\u9898\u6CA1\u6709\u89E3\u51B3\uFF0C\u4E0D\u8FC7\u6700\u540E\u8FD8\u662F\u505A\u51FA\u6765\u4E86\uFF0C\u53EA\u8981\u628A -1 \u7ED9\u6392\u9664\u6389\u5C31\u53EF\u4EE5\u4E86

\`\`\`cpp
int isTmax(int x) {
  int is_negone  = !(x + 1);
  int is_tmax = !(~(x + 1 + x));
  return !is_negone & is_tmax;
}
\`\`\`

### 4. allOddBits

\`\`\`cpp
/* 
 * allOddBits - return 1 if all odd-numbered bits in word set to 1
 *   where bits are numbered from 0 (least significant) to 31 (most significant)
 *   Examples allOddBits(0xFFFFFFFD) = 0, allOddBits(0xAAAAAAAA) = 1
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 12
 *   Rating: 2
 */
int allOddBits(int x) {
  return 2;
}
\`\`\`

>  \\1. Integer constants 0 through 255 (0xFF), inclusive. You are
>
>  not allowed to use big constants such as 0xffffffff.
>  

\u9898\u76EE\u4E2D\u6709\u9650\u5236\u8BF4\u660E\uFF0C\u6240\u4EE5\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528 0xAAAAAAAA

\u3057\u304B\u3057!

\`\`\`cpp
/* \u8FD9\u6837\u603B\u4E0D\u80FD\u7B97\u6211\u4F5C\u5F0A\u5427 */
int y = 0xAA | (0xAA << 8) | (0xAA << 16) | (0xAA << 24);
\`\`\`

\u7136\u540E\u5C31\u5F88\u7B80\u5355\u4E86\uFF0C\u5148\u628A\u6240\u6709\u4E3A\u5076\u6570\u4F4D\u63A9\u76D6\u6389

\`\`\`cpp
(x & y)
\`\`\`

\u7136\u540E\u5224\u65AD\u7ED3\u679C\u662F\u5426\u4E0E 0xAAAAAAAA \u76F8\u7B49\uFF0C\u6700\u540E\u7B54\u6848\u5C31\u51FA\u6765\u4E86

\`\`\`cpp
int allOddBits(int x) {
  int y = 0xAA | (0xAA << 8) | (0xAA << 16) | (0xAA << 24);
  return !((x & y) ^ y);
}
\`\`\`

### 5. negate

\`\`\`cpp
/* 
 * negate - return -x 
 *   Example: negate(1) = -1.
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 5
 *   Rating: 2
 */
int negate(int x) {
  return 2;
}
\`\`\`

\u7B80\u5355\u9898\uFF0C\u8865\u7801\u7684\u5B9A\u4E49

\`\`\`cpp
int negate(int x) {
  return ~x + 1;
}
\`\`\`

### 6. isAsciiDigit

\`\`\`cpp
/* 
 * isAsciiDigit - return 1 if 0x30 <= x <= 0x39 (ASCII codes for characters '0' to '9')
 *   Example: isAsciiDigit(0x35) = 1.
 *            isAsciiDigit(0x3a) = 0.
 *            isAsciiDigit(0x05) = 0.
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 15
 *   Rating: 3
 */
int isAsciiDigit(int x) {
  return 2;
}
\`\`\`

\u6211\u7684\u601D\u8DEF\u53EF\u80FD\u4F1A\u6BD4\u8F83\u5947\u602A

\u9996\u5148\u68C0\u9A8C\u662F\u5426\u6EE1\u8DB3 0x30 \u7684\u90E8\u5206\u4E14\u5176\u4ED6\u9AD8\u4F4D\u4E3A 0\uFF0C\u7136\u540E\u68C0\u9A8C\u662F\u5426\u5C0F\u4E8E 0x39

\`\`\`cpp
int isAsciiDigit(int x) {
  /* is bigger than 0x30 and smaller than 0x3F */
  int is_upper = !((x & ~0x0F) ^ 0x30);
  /* is smaller than 0x39 */
  int is_lower = !((x & 0x0F) + 0x06 & 0xF0);
  return is_upper & is_lower;
}
\`\`\`

Rua~~

### 7. conditional

\`\`\`cpp
/* 
 * conditional - same as x ? y : z 
 *   Example: conditional(2,4,5) = 4
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 16
 *   Rating: 3
 */
int conditional(int x, int y, int z) {
  return 2;
}
\`\`\`

\u8FD9\u9053\u9898\u7684\u6700\u7EC8\u7B54\u6848\u53EF\u4EE5\u8BF4\u6211\u6700\u6EE1\u610F\u4E86\uFF0C\u5F88\u5BF9\u79F0\uFF0C\u5F88\u4F18\u7F8E

\u601D\u8DEF\u662F\u81EA\u7136\u800C\u7136\u5192\u51FA\u6765\u7684\uFF0C\u7075\u611F\u7206\u53D1\u4E86\u5C5E\u4E8E\u662F

> \u6700\u7EC8\u8F93\u51FA\u5F88\u81EA\u7136\u7684\u60F3\u5230\uFF1Ay \u548C z \u5E94\u8BE5\u662F\u6216\u7684\u5173\u7CFB\uFF0C\u53EA\u8981\u8BA9\u4E00\u4E2A\u53D8\u6210 0 \u5C31\u884C\u4E86
>
> \u8F93\u5165\u7684\u5904\u7406\u4E5F\u5F88\u81EA\u7136\u7684\u60F3\u5230\uFF1A\u8BA9 x = 0 \u548C x != 0 \u81EA\u7136\u7684\u533A\u5206\u5F00

\`\`\`cpp
int conditional(int x, int y, int z) {
  /* x =  0 => 0xFFFFFFFF
     x != 0 => 0x00 */
  int is_zero = ~!x + 1;
  int is_y = ~is_zero & y;
  int is_z = is_zero  & z;
  return is_y | is_z;
}
\`\`\`

### 8. isLessOrEqual

\`\`\`cpp
/* 
 * isLessOrEqual - if x <= y  then return 1, else return 0 
 *   Example: isLessOrEqual(4,5) = 1.
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 24
 *   Rating: 3
 */
int isLessOrEqual(int x, int y) {
  return 2;
}
\`\`\`

\u5F88\u7B80\u5355\u554A\uFF0C\u505A\u4E2A\u201C\u51CF\u6CD5\u201D\u5C31\u597D\u4E86

\u7B80\u5355\u4E2A\u6BDB\u554A\uFF0C\u597D\u96BE\uFF0C\u8981\u8003\u8651 Tmin \u8FD8\u8981\u8003\u8651\u7B26\u53F7\u7684\u6B63\u8D1F\u6027

\u4E0D\u8FC7\u8FD8\u662F\u505A\u51FA\u6765\u4E86\uFF0C\u563F\u563F

\`\`\`cpp
int isLessOrEqual(int x, int y) {
  int neg_x = ~x + 1;
  int neg_y = ~y + 1;
  /* if x or y is neg, turn to pos */
  int negtpos_x = x & ~(1 << 31);
  int negtpos_y = y & ~(1 << 31);
  /* pos => 1 | neg => 0 */
  int sign_x = !(x & (0x80 << 24));
  int sign_y = !(y & (0x80 << 24));
  /* if success return 1
     else return 0 */
  int pos_pos = ( sign_x &  sign_y) & !(neg_x + y & (0x80 << 24));
  int pos_neg = 0;
  int neg_pos = (!sign_x &  sign_y);
  int neg_neg = (!sign_x & !sign_y) & !(~negtpos_x + 1 + negtpos_y & (0x80 << 24));
  /* return */
  return pos_pos | pos_neg | neg_pos | neg_neg;
}
\`\`\`

\u4E0D\u8FC7\u8FD8\u662F\u6709\u95EE\u9898\uFF0C\u7B26\u53F7\u6570\u8D85\u4E86

> dlc:bits.c:248:isLessOrEqual: Warning: 37 operators exceeds max of 24

\u95EE\u9898\u4E0D\u5927\uFF0C\u6539\u4E00\u4E0B\u5F97\u5230\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u786E\u5B9E\u6539\u7684\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u5F88\u591A\u5730\u65B9\u90FD\u662F\u5197\u4F59\u7684\uFF0C\u6BD4\u5982

> \u5224\u65AD x \u7684\u7B26\u53F7\uFF1A
>
> 1. x >> 31
> 2. !(x & (1 << 31) )
>
> \u6469\u6839\u5B9A\u5F8B\uFF1A
>
> 1. a | b
> 2. !a & !b

\`\`\`cpp
int isLessOrEqual(int x, int y) {
  /* pos => 0 | neg => 1 */
  int sign_x = x >> 31;
  int sign_y = y >> 31;
  // int neg_y = ~y + 1;
  /* if x or y is neg, turn to pos */
  int negtpos_bias = ~(1 << 31);
  int negtpos_x = x & negtpos_bias;
  int negtpos_y = y & negtpos_bias;
  /* if success return 1
     else return 0 */
  int pos_pos = !(( sign_x | sign_y) | (~x + 1 + y >> 31));
  // int pos_neg = 0;
  int neg_pos = ( sign_x & !sign_y);
  int neg_neg = ( sign_x &  sign_y) & !(~negtpos_x + 1 + negtpos_y >> 31);
  /* return */
  return pos_pos | neg_pos | neg_neg;
}
\`\`\`

### 9. logicalNeg

\`\`\`cpp
/* 
 * logicalNeg - implement the ! operator, using all of 
 *              the legal operators except !
 *   Examples: logicalNeg(3) = 0, logicalNeg(0) = 1
 *   Legal ops: ~ & ^ | + << >>
 *   Max ops: 12
 *   Rating: 4 
 */
int logicalNeg(int x) {
  return 2;
}
\`\`\`

\u770B\u7B26\u53F7\u5C31\u884C\u4E86\uFF0C\u4E00\u4E2A\u6570\u7684\u53D6\u6B63\u8D1F\u540E\uFF0C\u9996\u4F4D\u5FC5\u5B9A\u662F 1 \u6216\u8005\u662F 0

\u5BF9\u4E8E\u7279\u6B8A\u60C5\u51B5 Tmin\uFF0C\u53EA\u8981\u58F0\u79F0\u6240\u6709\u8D1F\u6570\u90FD\u4E3A 0 \u5C31\u53EF\u4EE5\u4E86

\`\`\`cpp
int logicalNeg(int x) {
  return (x >> 31 | (x ^ ~x + 1) >> 31) + 1;
}
\`\`\`

### 10. howManyBits

\`\`\`cpp
/* howManyBits - return the minimum number of bits required to represent x in
 *             two's complement
 *  Examples: howManyBits(12) = 5
 *            howManyBits(298) = 10
 *            howManyBits(-5) = 4
 *            howManyBits(0)  = 1
 *            howManyBits(-1) = 1
 *            howManyBits(0x80000000) = 32
 *  Legal ops: ! ~ & ^ | + << >>
 *  Max ops: 90
 *  Rating: 4
 */
int howManyBits(int x) {
  return 0;
}
\`\`\`

\u5F88\u9057\u61BE\uFF0C\u6211\u5C3C\u739B\u9898\u76EE\u90FD\u770B\u4E0D\u61C2

\u4E0D\u8FC7\uFF0C\u6211\u770B\u522B\u4EBA\u7684\u89E3\u7B54\uFF0C\u518D\u52A0\u4E0A\u81EA\u5DF1\u7684\u731C\u6D4B\uFF0C\u52C9\u5F3A\u7ED9\u51FA\u4E86\u4E00\u4E2A\u89E3\u91CA\uFF08\u867D\u7136\u6211\u4ECD\u7136\u4E0D\u6E05\u695A\u5176\u4E2D\u7684\u903B\u8F91\uFF09

> \u9700\u8981\u7684\u6BD4\u7279\u6570
>
> 1. \u7B26\u53F7\u4F4D\uFF081\uFF09
> 2. \u6570\u503C\u4F4D\uFF0831\uFF09
>
> \u5982\u679C\u662F\u8D1F\u6570\uFF0C\u5BF9\u5176\u53D6\u53CD\u8BA1\u7B97\uFF08\u4E0D\u6D88\u8017\u6BD4\u7279\u6570\uFF09
>
> \u5982\uFF1AhowManyBits(0x80000001) => 32

\u7136\u540E\u770B\u524D16\u4F4D\u662F\u5426\u67091\uFF1F\u82E5\u6709\uFF0C\u8D77\u7801\u9700\u898116\u4F4D\uFF0C\u6545\u53BB\u6389\u540E16\u4F4D(\u53F3\u79FB16)\uFF0C\u82E5\u6CA1\u6709\uFF0C\u4E0D\u79FB\u4F4D

\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u5F62\u6210\u4E8C\u5206\u6CD5

\u6B64\u9898\u6211\u6682\u4E14\u4FDD\u7559\u610F\u89C1\uFF0C\u56E0\u4E3A\u6211\u8FD8\u662F\u6CA1\u592A\u641E\u61C2\u5B83\u5728\u8BA9\u6211\u5E72\u4EC0\u4E48

\`\`\`cpp
int howManyBits(int x) {
  int sign = x >> 31;
  /* use conditional() before */
  {
    int y = ~x, z = x;
    int is_zero = ~!sign + 1;
    int is_y = ~is_zero & y;
    int is_z = is_zero  & z;
    x =  is_y | is_z;
  }
  int b16 = !!(x >> 16) << 4;
  x = x >> b16;
  int b8  = !!(x >> 8 ) << 3;
  x = x >> b8;
  int b4  = !!(x >> 4 ) << 2;
  x = x >> b4;
  int b2  = !!(x >> 2 ) << 1;
  x = x >> b2;
  int b1  = !!(x >> 1 ) << 1;
  x = x >> b1;
  int b0 = x;
  return b16 + b8 + b4 + b2 + b1 + b0 + 1;
}
\`\`\`

### 11. floatScale2

\`\`\`cpp
/* 
 * floatScale2 - Return bit-level equivalent of expression 2*f for
 *   floating point argument f.
 *   Both the argument and result are passed as unsigned int's, but
 *   they are to be interpreted as the bit-level representation of
 *   single-precision floating point values.
 *   When argument is NaN, return argument
 *   Legal ops: Any integer/unsigned operations incl. ||, &&. also if, while
 *   Max ops: 30
 *   Rating: 4
 */
unsigned floatScale2(unsigned uf) {
  return 2;
}
\`\`\`

\u8BF4\u5B9E\u8BDD\uFF0C\u4E4D\u4E00\u770B\u4F1A\u5F88\u61F5\uFF0C\u4F46\u5176\u5B9E\u5C31\u662F\u8003\u5BDF\u4F60\u975E\u5E38\u7B80\u5355\u7684\u77E5\u8BC6\u70B9

\u6211\u521A\u5F00\u59CB\u5199\u7684\u65F6\u5019\u975E\u5E38\u7684\u4E71\uFF0C\u5404\u79CD\u60C5\u51B5\u6CA1\u8003\u8651\u5230

\u7136\u540E\u5220\u4E86\u91CD\u5199\uFF0C\u4E00\u904D\u8FC7\uFF08\u505A\u6CD5\u6CE8\u91CA\u5199\u7684\u5F88\u6E05\u695A\u4E86\uFF09

> \u4E00\u5B9A\u8981\u8BB0\u5F97\u4F7F\u7528 fshow\uFF0C\u771F\u7684\u3002\u3002\u3002\u5B83\u771F\u7684\u597D\u597D\u7528\u3002\u3002\u3002\u6211\u54ED\u6B7B\u3002\u3002\u3002

\`\`\`cpp
unsigned floatScale2(unsigned uf) {
  unsigned bias_e = 0xFF;
  unsigned bias_m = (0x7F << 16) + (0xFF << 8) + 0xFF;
  unsigned sign = uf >> 31;
  unsigned e = (uf >> 23) & bias_e;
  unsigned m = uf & bias_m;

  /* if is 0 */
  if (!e && !m) return uf;
  /* if is NaN or Max or Min */
  if (!(e ^ bias_e)) return uf;

  /* if unnormalized */
  if (!e) {
    m = m + m;
    if ((m >> 24) & 1) {
      e = e + 1;
      m = m & bias_m;
    }
  }
  /* if normalized */
  else
    e = e + 1;

  return (sign << 31) + (e << 23) + m;
}
\`\`\`

### 12. floatFloat2Int

\`\`\`cpp
/* 
 * floatFloat2Int - Return bit-level equivalent of expression (int) f
 *   for floating point argument f.
 *   Argument is passed as unsigned int, but
 *   it is to be interpreted as the bit-level representation of a
 *   single-precision floating point value.
 *   Anything out of range (including NaN and infinity) should return
 *   0x80000000u.
 *   Legal ops: Any integer/unsigned operations incl. ||, &&. also if, while
 *   Max ops: 30
 *   Rating: 4
 */
int floatFloat2Int(unsigned uf) {
  return 2;
}
\`\`\`

\u8FD9\u9898\u6211\u505A\u51FA\u6765\u4E86\uFF0C\u4F46\u8FD8\u662F\u4E0D\u592A\u6EE1\u610F

\u8981\u6CE8\u610F\u4E00\u4E0B 1 << x, (x >= 32) \u5C31\u6EA2\u51FA\u4E86\uFF0C\u4E00\u5B9A\u8981\u5C0F\u5FC3\uFF0C\u5176\u4ED6\u60C5\u51B5\u4E0B\u76F4\u63A5\u8F93\u5165\u7ED9 int \u5C31\u597D\u4E86\uFF0C\u8BA9 int \u81EA\u5DF1\u5224\u65AD

\`\`\`cpp
int floatFloat2Int(unsigned uf) {
  unsigned bias_e = 0xFF;
  unsigned bias_m = (0x7F << 16) + (0xFF << 8) + 0xFF;
  unsigned sign = uf >> 31;
  unsigned e = (uf >> 23) & bias_e;
  unsigned m = uf & bias_m;

  /* if unnormalized */
  int res = 0;
  if (!e)
    return 0;
  else {
    if (e < 127)
      return 0;
      // res = (m + (1 << 23)) / ((1 << 23) * (1 << (127 - e)));
    else if (e <= 127 + 31)
      res = (m + (1 << 23)) * (1 << (e - 127)) / (1 << 23);
    else
      res = 0x80000000;
  }

  /* add - */
  if (sign)
    res = -res;

  return res;
}
\`\`\`

### 13. floatPower2

\`\`\`cpp
/* 
 * floatPower2 - Return bit-level equivalent of the expression 2.0^x
 *   (2.0 raised to the power x) for any 32-bit integer x.
 *
 *   The unsigned value that is returned should have the identical bit
 *   representation as the single-precision floating-point number 2.0^x.
 *   If the result is too small to be represented as a denorm, return
 *   0. If too large, return +INF.
 * 
 *   Legal ops: Any integer/unsigned operations incl. ||, &&. Also if, while 
 *   Max ops: 30 
 *   Rating: 4
 */
unsigned floatPower2(int x) {
  return 2;
}
\`\`\`

\u601D\u8DEF\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u5F80\u6BD4\u7279\u4F4D\u4E0A\u7F6E\u4E00\u4E2A 1 \u5C31\u597D\u4E86\uFF0C~~\u552F\u4E00\u7684\u96BE\u70B9\u662F\u627E\u5230\u8FD9\u4E2A 1 \u7684\u4F4D\u7F6E\uFF0C\u56E0\u4E3A\u5176\u4ED6\u5168\u662F 0 \uFF08\u6709 1 \u5417\uFF09~~

\`\`\`cpp
unsigned floatPower2(int x) {
  unsigned res = 0;

  /* the minimun is 2^(-(1 - 127)) * 2^(-23) */
  if (x < -23 - 126)
    return 0;
  /* the maximum is 2^(254 - 127) */
  if (x > 127)
    return 0x7F800000;
  
  /* when unnormalized */
  if (x < -126) {
    x = -x;
    res = res | 1 << (x - 126);
  }
  /* when normalized and e is less than 127 */
  else if (x <= 0) {
    x = -x;
    res = res | (127 - x) << 23;
  }
  /* when normalized and e is more than 127 */
  else {
    res = res | (127 + x) << 23;
  }

  return res;
}
\`\`\`

## The End
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/csapp_datalab_1.png)


\u8FD9\u4E24\u5929\u867D\u7136\u4E0D\u662F\u4E00\u76F4\u5728\u505A\u9898\uFF0C\u4F46\u8FD8\u662F\u505A\u4E86\u597D\u4E45\u597D\u4E45\uFF0C\u7EC8\u4E8E\u505A\u5B8C\u4E86\uFF0C\u723D\u5230\uFF01

\u5176\u5B9E\u9898\u76EE\u5E76\u4E0D\u662F\u5F88\u96BE\uFF0C\u4E5F\u5C31\u662F\u8003\u5BDF\u4F60\u5BF9\u6570\u7684\u6BCF\u4E00\u4F4D\u7684\u7406\u89E3\u3002

\u4E0B\u4E00\u7AD9\uFF1ABomb Lab

`,$E=Object.freeze(Object.defineProperty({__proto__:null,default:Yf},Symbol.toStringTag,{value:"Module"})),Xf=`---\r
title: OSGO-Lab1-TypeChecker\r
date: 2022-12-03\r
tags:\r
  - OSGO-tutorial-2022\r
  - lab\r
---\r
\r
# \u6545\u4E8B\u80CC\u666F\r
\r
\u5F88\u4E45\u4EE5\u524D\uFF0C\u90A3\u8FD8\u662F\u6211\u7528winxp\u7684\u65F6\u5019\u6709\u6B21\u6211\u7CFB\u7EDF\u5D29\u6E83\u4E86\uFF0C\u56E0\u4E3A\u6211\u662F\u7535\u8111\u767D\u5403\uFF0C\u6211\u670B\u53CB\u7ED9\u6211\u4ECB\u7ECD\u4E86\u4E00\u4E2A\u9AD8\u624B\u6765\u5E2E\u6211\u4FEE\u7535\u8111\u3002\r
\r
\u4ED6\u770B\u4E86\u4E00\u4E0B\u7535\u8111\uFF0C\u95EE\u6211\u6709\u6CA1\u6709xp\u7684\u5B89\u88C5\u76D8\uFF0C\u6211\u8BF4\u6CA1\u6709\u3002\r
\r
\u4ED6\u60F3\u4E86\u4E00\u4E0B\uFF0C\u53EB\u6211\u628A\u4E00\u5F20\u7A7A\u7684dvd\u523B\u5F55\u76D8\u548C\u4E00\u6839\u9488\u62FF\u7ED9\u4ED6\uFF0C\u6211\u60F3\u4FEE\u7535\u8111\u8981\u523B\u5F55\u76D8\u548C\u9488\u5E72\u4EC0\u4E48\uFF0C\u4F46\u4EBA\u5BB6\u662F\u9AD8\u624B\uFF0C\u6211\u4E5F\u4E0D\u597D\u8BF4\u4EC0\u4E48\uFF0C\u5C31\u628Advd\u523B\u5F55\u76D8\u62FF\u4E00\u5F20\u6765\u7ED9\u4ED6\u4E86\u3002\r
\r
\u4ED6\u628A\u9488\u5934\u5BF9\u7740\u523B\u5F55\u76D8\u6233\uFF0C\u4ED6\u6233\u7684\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u4F46\u662F\u53EA\u6233\u6DF1\u6216\u6D45\uFF0C\u6211\u641E\u4E0D\u61C2\u8FD9\u6709\u4EC0\u4E48\u7528\uFF0C\u4F46\u4E5F\u4E0D\u6562\u95EE\uFF0C\u770B\u4E86\u534A\u4E2A\u591A\u5C0F\u65F6\uFF0C\u4ED6\u8FD8\u662F\u4E0D\u505C\u7684\u6233\u7740dvd\u523B\u5F55\u76D8\uFF0C\u6211\u6E10\u6E10\u7684\u6709\u4E9B\u56F0\uFF0C\u6211\u95EE\u4ED6\u8FD9\u4E1C\u897F\u8981\u641E\u591A\u4E45\uFF0C\u4ED6\u8BF4\u8981\u51E0\u4E2A\u5C0F\u65F6\uFF0C\u6211\u7ED9\u4ED6\u5012\u4E86\u676F\u8336\uFF0C\u5C31\u4E00\u4E2A\u4EBA\u53BB\u9694\u58C1\u7761\u89C9\u4E86\u3002\r
\r
\u9192\u6765\u7684\u65F6\u5019\uFF0C\u4E00\u770B\u5DF2\u7ECF\u8FC7\u4E864\u4E2A\u591A\u5C0F\u65F6\uFF0C\u6211\u8D77\u8EAB\u5230\u9694\u58C1\uFF0C\u770B\u89C1\u4ED6\u6B63\u5728xp\u91CC\u9762\u8C03\u8BD5\uFF0C\u8FD8\u88C5\u4E0A\u4E86office\u3001photoshop\u3001\u8FC5\u96F7\u3001\u9B54\u517D\u4E16\u754C\u7B49\u8F6F\u4EF6\u2026\u2026\u8FC7\u4E86\u4E00\u4F1A\u513F\uFF0C\u4ED6\u8BF4\uFF0C\u4F60\u8BD5\u8BD5\uFF0C\u6211\u5750\u4E0A\u6905\u5B50\u7528\u4E86\u4E00\u4E0B\uFF0C\u771F\u7684\u597D\u4E86\uFF0C\u6211\u5F53\u65F6\u4E5F\u4E0D\u61C2\u7535\u8111\uFF0C\u8C22\u8FC7\u4EBA\u5BB6\u5C31\u8D70\u4E86\u3002\u4E34\u8D70\u524D\u4ED6\u544A\u8BC9\u6211\uFF0C\u7EC3\u7EC3\u6253\u5B57\u5427\uFF0C\u7EC3\u7684\u5FEB\u4E86\uFF0C\u4F60\u4E5F\u80FD\u548C\u6211\u4E00\u6837\uFF0C\u90A3\u65F6\u5019\u518D\u6765\u8C22\u6211\u5427\u3002\u6211\u7B54\u5E94\u4E86\u4ED6\u3002\r
\r
\u540E\u6765\u6211\u6162\u6162\u5BF9\u7535\u8111\u6709\u4E86\u4E86\u89E3\uFF0C\u7EC8\u4E8E\u4E86\u89E3\uFF0C\u539F\u6765\u5F53\u65F6\u90A3\u4F4D\u9AD8\u624B\u662F\u9488\u5934\u523B\u4E86\u4E00\u4E2A\u5355\u9762\u53CC\u5C42\u7684dvd\uFF0C\u5728\u91CC\u9762\u523B\u4E0A\u4E86xp\u3001office\u3001photoshop\u3001\u9B54\u517D\u4E16\u754C\u7684\u5B89\u88C5\u7A0B\u5E8F\uFF0C\u6211\u540E\u6765\u95EE\u6211\u670B\u53CB\u90A3\u4F4D\u9AD8\u624B\u7684\u4E0B\u843D\uFF0C\u6211\u670B\u53CB\u8BF4\u524D\u51E0\u5E74\u53BB\u4E86\u7F8E\u56FD\u4E4B\u540E\uFF0C\u6773\u65E0\u97F3\u8BAF....\r
\r
\u6211\u60F3\u8981\u627E\u5230\u4ED6\uFF0C\u4E8E\u662F\u62FC\u547D\u7EC3\u4E60\u6253\u5B57\u3002\r
\r
# \u6559\u5B66\u65F6\u95F4\r
\r
## \u5E73\u53F0\r
\r
\u9650\u5236 windows \u5E73\u53F0\r
\r
> \u5F88\u53EF\u60DC\uFF0C\u6211\u5C1D\u8BD5\u4E86\u5728 linux \u4E0B\u7F16\u5199\uFF0C\u53EF\u662F\u8981\u5B9E\u73B0 windows \u4E0B getch \u51FD\u6570\u540C\u6837\u7684\u6548\u679C\u5B9E\u5728\u662F\u592A\u8FC7\u9EBB\u70E6\uFF0C\u9042\u653E\u5F03\r
\r
## \u601D\u8DEF\r
\r
1. \u751F\u6210\u4E00\u6BB5\u5B57\u7B26\u4E32\r
2. \\r\uFF0C\u56DE\u5230\u5B57\u7B26\u6700\u524D\u9762\r
3. \u8F93\u5165\u5B57\u7B26\u5E76\u5224\u65AD\u6B63\u8BEF\u3002\u6B63\u786E\uFF1A\u5149\u6807\u524D\u8FDB\u5E76\u663E\u793A\u7EFF\u8272\u5B57\u7B26\uFF0C\u9519\u8BEF\uFF0C\u5149\u6807\u4E0D\u524D\u8FDB\u5E76\u663E\u793A\u7EA2\u8272\u5B57\u7B26\r
\r
Hint 1: \u4F60\u53EF\u4EE5\u4E0D\u9009\u62E9\u751F\u6210\u968F\u673A\u5B57\u7B26\uFF0C\u800C\u662F\u4ECE\u6587\u4EF6\u8BFB\u53D6\uFF08C\u8BED\u8A00\u4E66\u4E0A\u6709\uFF09\uFF0C\u6216\u8005\u751F\u6210\u4E00\u4E9B\u8BCD\u7EC4\u3002\r
\r
Hint 3: \u4F60\u8F93\u5165\u7684\u65B0\u5B57\u7B26\u4F1A\u8986\u76D6\u539F\u6709\u7684\u5B57\u7B26\r
\r
### \u5FC5\u505A\r
\r
\u5B8C\u6210\u4EE3\u7801\u91CC\u6240\u6709 TODO \u6CE8\u91CA\u8981\u6C42\u7684\u5185\u5BB9\uFF0C\u5E76\u601D\u8003 THINK \u540E\u7684\u4EE3\u7801\u3002\r
\r
### \u62D3\u5C55\r
\r
1. \u8BB0\u5F55\u65F6\u95F4\r
2. \u8BA1\u7B97 wpm (words per minute)\r
3. \u66F4\u4EBA\u6027\u5316\u7684\u663E\u793A\r
4. ...`,HE=Object.freeze(Object.defineProperty({__proto__:null,default:Xf},Symbol.toStringTag,{value:"Module"})),Qf=`---\r
title: OSGO-INDEX\r
date: 2022-11-22\r
tags:\r
  - OSGO-tutorial-2022\r
---\r
\r
# \u76EE\u5F55\r
\r
## \u51C6\u5907\r
\r
0. [Pre-WSL2\u5B89\u88C5\u6559\u7A0B]\r
1. [Pre-Linux\u73AF\u5883\u914D\u7F6E]\r
\r
## \u756A\u5916\r
\r
0. Chrome\u6D4F\u89C8\u5668: \u6CB9\u7334/Chrome\u63D2\u4EF6\r
1. Microsoft Store: PowerToys/WSL`,GE=Object.freeze(Object.defineProperty({__proto__:null,default:Qf},Symbol.toStringTag,{value:"Module"})),Jf=`---\r
title: OSGO-Pre-Linux\u73AF\u5883\u914D\u7F6E\r
date: 2022-11-21\r
tags:\r
  - OSGO-tutorial-2022\r
  - wsl\r
---\r
\r
# \u524D\u8A00\r
\r
\u4ECE\u8FD9\u7AE0\u5F00\u59CB\uFF0C\u4F60\u4F1A\u5F00\u59CB\u63A5\u89E6\u4E00\u4E2A\u5168\u65B0\u7684\u5F00\u653E\u4E16\u754C\uFF08\u611F\u89C9\u3002\u3002\u3002\u753B\u8D28\u4E0D\u5982\u539F\u795E\uFF09\r
\r
# \u914D\u7F6E Linux \u73AF\u5883\r
\r
\u5982\u679C\u8BF4\u5728 Linux \u91CC\u9762\u7F16\u7A0B\u662F\u505A\u4E3B\u7EBF\u4EFB\u52A1\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u505A\u7684\uFF0C\u5C31\u662F\u6CE8\u518C\u8D26\u6237\u3002\r
\r
\u9996\u5148\uFF0C\u68C0\u67E5\u4E00\u4E0B\u4F60\u662F\u5426\u5B8C\u6210\u4E86\u4E0A\u4E00\u7AE0\u7684\u5185\u5BB9\uFF0C\u8BF7\u6253\u5F00\u5982\u4E0B\u754C\u9762\uFF0C\u7136\u540E\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C\r
\r
> \u5982\u679C\u4F60\u4F7F\u7528\u7684\u4E0D\u662F WSL\uFF0C\u5176\u4ED6\u865A\u62DF\u673A\u6216\u8005\u771F\u673A\u4E5F\u53EF\u4EE5\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/QQ\u622A\u56FE20221121214105.png)\r
\r
## \u6362\u6E90\r
\r
Q: \u4EC0\u4E48\u662F[\u955C\u50CF\u6E90](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%AB%99%E9%95%9C%E5%83%8F)\uFF1F\u4E3A\u4EC0\u4E48\u8981\u6362\u6E90\uFF1F\r
\r
A: \u6E90\u662F\u4E0B\u8F7D\u8F6F\u4EF6\u7684\u6E20\u9053\uFF0C\u955C\u50CF\u662F\u53EF\u4EE5\u7406\u89E3\u4E3A\u62F7\u8D1D\uFF0CA \u590D\u5236 B\uFF0CA \u5C31\u662F B \u7684\u955C\u50CF\u3002\u9ED8\u8BA4\u7684\u6E90\u4E00\u822C\u90FD\u662F\u5B98\u65B9\u6E90\uFF0C\u955C\u50CF\u6E90\u5C31\u662F\u5BF9\u5B98\u65B9\u6E90\u7684\u590D\u5236\uFF0C\u6765\u63D0\u9AD8\u7528\u6237\u5728\u67D0\u4E2A\u5730\u533A\u7684\u4E0B\u8F7D\u901F\u5EA6\u3002\u8B6C\u5982\u4E00\u4E2A\u7F8E\u56FD\u7F51\u7AD9\u7684\u4E2D\u56FD\u955C\u50CF\u53EF\u4EE5\u4F7F\u6765\u81EA\u4E2D\u56FD\u7684\u7528\u6237\u76F4\u63A5\u4ECE\u8FD9\u4E2A\u4E2D\u56FD\u7684\u955C\u50CF\u8BBF\u95EE\uFF0C\u4ECE\u800C\u52A0\u5FEB\u4E86\u901F\u5EA6\u3002\u8FD9\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u79CD\u5168\u7403\u8303\u56F4\u7684\u7F13\u5B58\u3002\r
\r
Q: \u6709\u54EA\u4E9B\u597D\u7528\u7684\u955C\u50CF\u6E90\uFF1F\r
\r
A: [\u6E05\u534E\u6E90](https://mirror.tuna.tsinghua.edu.cn/)\u3001[\u963F\u91CC\u6E90](https://developer.aliyun.com/mirror/)\u3001[\u4E2D\u79D1\u5927\u955C\u50CF\u6E90](https://mirrors.ustc.edu.cn/)\u7B49\uFF0C\u8FD9\u91CC\u4F7F\u7528\u6E05\u534E\u6E90\r
\r
\u590D\u5236\u4E00\u4EFD\u201C\u6E90\u6587\u4EF6\u201D\uFF0C\`/etc/apt/sources.list\`\r
\r
\`\`\`shell\r
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak\r
\`\`\`\r
\r
\u8FDB\u5165[\u6E05\u534E\u6E90 Ubuntu](https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/)\uFF0C\u6309\u7167\u547D\u4EE4\u66FF\u6362\u7684\u547D\u4EE4\u66FF\u6362\r
\r
\`\`\`shell\r
sudo sed -i "s@http://.*archive.ubuntu.com@https://mirrors.tuna.tsinghua.edu.cn@g" /etc/apt/sources.list\r
sudo sed -i "s@http://.*security.ubuntu.com@https://mirrors.tuna.tsinghua.edu.cn@g" /etc/apt/sources.list\r
\`\`\`\r
\r
\u67E5\u770B\u201C\u6E90\u6587\u4EF6\u201D\u5185\u5BB9\r
\r
\`\`\`shell\r
sudo cat /etc/apt/sources.list\r
\`\`\`\r
\r
\u5982\u679C\u770B\u5230\`https://mirrors.tuna.tsinghua.edu.cn/ubuntu/\`\u5B57\u773C\uFF0C\u5373\u6362\u6E90\u6210\u529F\r
\r
\u66F4\u65B0\u4E00\u4E0B\u6E90\uFF0C\u53EF\u80FD\u8981\u7B49\u4E00\u4F1A\r
\r
\`\`\`shell\r
sudo apt update\r
sudo apt upgrade\r
\`\`\`\r
\r
OK\uFF0C\u5927\u529F\u544A\u6210\r
\r
## \u5982\u4F55\u5B89\u88C5\u8F6F\u4EF6\r
\r
\u4E0D\u540C\u7684 Linux \u53D1\u884C\u7248\u4E5F\u6709\u4E0D\u540C\u7684\u5B89\u88C5\u547D\u4EE4\uFF0CUbuntu \u7684\u547D\u4EE4\u662F\`apt install\`\uFF0C[\u8FD9\u91CC](https://zhuanlan.zhihu.com/p/528353275)\u6709\u66F4\u591A\u7684\u4FE1\u606F\r
\r
\u8981\u60F3\u5B89\u88C5\u67D0\u4E00\u6B3E\u8F6F\u4EF6\uFF0C\u6700\u597D\u7684\u65B9\u6CD5\u5C31\u662F\u767B\u9646\u5B98\u7F51\u67E5\u770B\u624B\u518C\uFF08\u6BD4\u5982 README \u6587\u4EF6\uFF09\u3002\u8FD9\u91CC\u6211\u4EEC\u6765\u5B89\u88C5 fd \u4F5C\u4E3A\u793A\u4F8B\r
\r
fd \u5728 github \u4E0A\u7684\u5B98\u7F51\u662F [https://github.com/sharkdp/fd#on-ubuntu](https://github.com/sharkdp/fd#on-ubuntu)\uFF0C\u6211\u4EEC\u627E\u5230 Install On Ubuntu\r
\r
\u6309\u7167\u6307\u793A\u901A\u8FC7\u547D\u4EE4\u5B89\u88C5\u5C31\u53EF\u4EE5\u4E86\uFF0C\u5982\u679C\u51FA\u73B0\u8F93\u5BC6\u7801\u7684\u73AF\u8282\uFF0C\u8FD8\u8BB0\u5F97\u4E4B\u524D\u88C5\u7CFB\u7EDF\u7684\u65F6\u5019\u9700\u8981\u8F93\u5165\u8D26\u6237\u548C\u5BC6\u7801\u5417\uFF1F\u5982\u679C\u51FA\u73B0\u4E00\u4E2A[y/n]\u7684\u9009\u62E9\uFF0C\u8F93\u5165y\u5C31\u884C\u4E86\r
\r
\`\`\`shell\r
sudo apt install fd-find\r
\`\`\`\r
\r
\u5B89\u88C5\u597D\u4E86\u540E\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u547D\u4EE4\u600E\u4E48\u7528\u5462\uFF1F\u4E00\u79CD\u65B9\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u8F93\u5165\`man fd\`\u6765\u953B\u70BC\u4E00\u4E0B\u4F60\u7684\u82F1\u8BED\u9605\u8BFB\u3002\u53E6\u4E00\u79CD\u65B9\u6CD5\uFF0C\u5B89\u88C5 tldr\r
\r
\`\`\`shell\r
sudo apt install tldr\r
\`\`\`\r
\r
\u7136\u540E\u901A\u8FC7\u547D\u4EE4\`tldr fd\`\uFF0C\u6765\u83B7\u5F97\u4E00\u4E2A\u66F4\u7B80\u77ED\u7684\u64CD\u4F5C\u8BF4\u660E\u3002\u4F60\u4E5F\u53EF\u4EE5\u7528 tldr \u67E5\u8BE2\u4E0D\u540C\u547D\u4EE4\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u50CF\u662F\`tldr yes\`\u3002\r
\r
## vim\r
\r
\u4E0A\u6B21\u8BFE\u63D0\u5230\u4E86 vim\uFF0C\u8FD9\u662F\u4E00\u6B3E\u5728 Linux \u7CFB\u7EDF\u4E0A\u5F88\u597D\u7528\u7684\u7F16\u8F91\u5668\uFF0C\u4F46\u662F\u8FD9\u4E2A\u597D\u7528\u662F\u5EFA\u7ACB\u5728\u4F60\u5BF9\u5B83\u505A\u8FC7**\u76F8\u5F53**\u7684**\u914D\u7F6E**\u7684\u57FA\u7840\u4E0A\uFF0C\u8FD9\u9700\u8981\u5927\u91CF**\u63D2\u4EF6**\u7684\u652F\u6301\u3002\r
\r
\u4F60\u53EF\u4EE5\u5148\u901A\u8FC7\`vimtutor\`\u547D\u4EE4\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u5B66\u4E60\u3002\r
\r
\`\`\`shell\r
vimtutor\r
\`\`\`\r
\r
\u5982\u679C\u4F60\u5728\u4E86\u89E3\u4E86 vim \u7684\u7B80\u5355\u64CD\u4F5C\u540E\u60F3\u6DF1\u5165\u5B66\u4E60\uFF0C\u63A8\u8350\u4E00\u624B\u8FD9\u4E2A[\u89C6\u9891](https://missing-semester-cn.github.io/2020/editors/)\u3002\r
\r
\u5F53\u7136\uFF0Cvim \u7684**\u4F7F\u7528**\u7EDD\u5BF9\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u6709\u65E0\u6570\u79CD\u751A\u81F3\u66F4\u597D\u7528\u7684\u66FF\u4EE3 vim \u7684\u65B9\u6CD5\uFF0C\u4F46\u5B66\u4F1A vim \u7684\u64CD\u4F5C\u662F\u57FA\u7840\u800C\u91CD\u8981\u7684\u3002\r
\r
## vscode\r
\r
WSL \u4E2D\u53EF\u4EE5\u76F4\u63A5\u6253\u5F00 vscode\uFF0C\u5982\u679C\u4E0D\u613F\u610F\u6298\u817E vim\uFF0Cvscode\u540C\u6837\u4F18\u79C0\uFF0C\u800C\u4E14\u66F4\u52A0\u65B9\u4FBF\u3002\r
\r
\`\`\`shell\r
code\r
\`\`\`\r
\r
## explorer\r
\r
WSL \u7684\u6587\u4EF6\u53EF\u4EE5\u76F4\u63A5\u5728 windows \u4E2D\u6253\u5F00\uFF0C\u8F93\u5165\u4E0B\u9762\u7684\u547D\u4EE4\u53EF\u4EE5\u6253\u5F00\u5F53\u524D\u6587\u4EF6\u5939\r
\r
\`\`\`shell\r
explorer.exe .\r
\`\`\`\r
\r
\u540C\u6837\uFF0C\u6574\u4E2A windows \u7684\u6587\u4EF6\u7CFB\u7EDF\u88AB\u6302\u8F7D\u5728\u4E86 /mnt/\uFF0C\u6BD4\u5982\u4F60\u53EF\u4EE5\u5728 WSL \u4E2D\u6253\u5F00C\u76D8\r
\r
\`\`\`shell\r
cd /mnt/c/\r
ls\r
\`\`\`\r
\r
# \u5B9E\u9A8C\r
\r
\u5B8C\u6210 [Lab1-TypeChecker](http://localhost:7600/#/post/Lab1-TypeChecker)\r
\r
# \u6700\u540E\r
\r
\u540E\u9762\u7684\u8BFE\u7A0B\u4F1A\u8BE6\u7EC6\u4EA4\u7ED9\u5927\u5BB6\u5982\u4F55\u4F7F\u7528 linux \u547D\u4EE4\uFF0C\u4F5C\u4E3A\u5F53\u524D\u7684\u4EE3\u9910\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\r
\r
1. [\u8BA1\u7B97\u673A\u6559\u80B2\u4E2D\u7F3A\u5931\u7684\u4E00\u8BFE](https://missing-semester-cn.github.io/)\r
2. [\u521D\u8BC6 linux](https://101.ustclug.org/Ch01/)\r
3. [\u83DC\u9E1F\u6559\u7A0B](https://www.runoob.com/linux/linux-tutorial.html)\r
\r
\u4E09\u8005\u4EFB\u9009\u5176\u4E00\uFF0C\u4F5C\u4E3A\u81EA\u5DF1\u7684\u5165\u95E8\u4E4B\u9009\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u522B\u7684\u6559\u7A0B\uFF0C\u6BD4\u5982B\u7AD9\uFF0C\u6765\u8FDB\u884C\u5B66\u4E60\r
\r
\u4E0B\u4E00\u7AE0\u6211\u4EEC\u4F1A\u8D70\u8FDB\`gcc\`\u7684\u4E16\u754C\uFF0C\u4E86\u89E3\u4F60\u7684C\u8BED\u8A00\u7A0B\u5E8F\u662F\u5982\u4F55\u88AB\u7F16\u8BD1\u4E3A\u4E00\u4E2A\u53EF\u6267\u884C\u6587\u4EF6\u7684\uFF0C\u8BA9\u6211\u4EEC\u4E0B\u4E00\u7AE0\u518D\u89C1\u30FE(\uFFE3\u25BD\uFFE3)Bye~Bye~`,WE=Object.freeze(Object.defineProperty({__proto__:null,default:Jf},Symbol.toStringTag,{value:"Module"})),ed=`---\r
title: OSGO-Pre-WSL2\u5B89\u88C5\u6559\u7A0B\r
date: 2022-11-21\r
tags:\r
  - OSGO-tutorial-2022\r
  - wsl\r
---\r
\r
# \u524D\u8A00\r
\r
\u6587\u4E2D Microsoft \u6587\u6863\u7684\u4E2D\u6587\u7248[\u5728\u6B64](https://learn.microsoft.com/zh-cn/windows/wsl/compare-versions)\u3002\r
\r
# \u4EC0\u4E48\u662F WSL2\r
\r
Windows Subsystem for Linux\uFF08\u7B80\u79F0WSL\uFF09\u662F\u4E00\u4E2A\u5728Windows 10\\11\u4E0A\u80FD\u591F\u8FD0\u884C\u539F\u751FLinux\u4E8C\u8FDB\u5236\u53EF\u6267\u884C\u6587\u4EF6\uFF08ELF\u683C\u5F0F\uFF09\u7684\u517C\u5BB9\u5C42\uFF0C\u5373 Windows \u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7684\u4E00\u4E2A\u5B89\u88C5 Linux \u64CD\u4F5C\u7CFB\u7EDF\u7684\u865A\u62DF\u673A\r
\r
## \u4EC0\u4E48\u662F\u64CD\u4F5C\u7CFB\u7EDF\uFF08Operating System\uFF09\r
\r
\u4F60\u53EF\u4EE5\u770B\u7740\u4F60\u7684\u7535\u8111\u684C\u9762\uFF08\u4E00\u822C\u6765\u8BF4\u662F Windows 10/11\uFF09\u8BF4\uFF0C\u201C\u64CD\u4F5C\u7CFB\u7EDF\u5C31\u662F\u8FD9\u4E2A\u6837\u5B50\u201D\uFF0C\u5F53\u7136 OS\uFF08Operating System\uFF09\u8FDC\u4E0D\u6B62\u5982\u6B64\uFF0C\u4F60\u53EF\u4EE5\u524D\u5F80\u8FD9\u4E2A[PPT](http://jyywiki.cn/OS/2022/slides/1.slides#/3)\u4E86\u89E3\u66F4\u591A\uFF0C\u8FD9\u91CC\u8282\u9009\u4E86\u5176\u4E2D\u7684\u4E00\u5F20\u56FE\u7247\uFF1A\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/os-classify.jpg)\r
\r
\u7531\u56FE\u53EF\u77E5\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u662F\u4E00\u53F0\u8BA1\u7B97\u673A\u7684\u7BA1\u7406\u5458\uFF0C\u7BA1\u7406\u4E86\u6574\u4E2A\u8BA1\u7B97\u673A\u7684\u8FD0\u884C\uFF0C\u4F60\u7684\u9F20\u6807\u3001\u952E\u76D8\u3001\u663E\u793A\u5668\u7B49\u786C\u4EF6\uFF0C\u4F60\u7684 QQ\u3001\u6D4F\u89C8\u5668\u3001\u8F93\u5165\u6CD5\u3001\u6587\u4EF6\u8D44\u6E90\u7BA1\u7406\u5668\u7B49\u8F6F\u4EF6\uFF0C\u901A\u8FC7\u64CD\u4F5C\u7CFB\u7EDF\u7EDF\u7B79\u534F\u4F5C\u4E86\u8D77\u6765\u3002\r
\r
\u5927\u90E8\u5206\u4EBA\uFF0891.41%\uFF09\u7684\u7535\u8111\u662F Windows \u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5C11\u6570\u662F Mac OS\uFF086.32%\uFF09\uFF0C\u4ED6\u4EEC\u4E3B\u8981\u670D\u52A1\u4E8E\u666E\u7F57\u5927\u4F17\uFF0C\u5373\u672A\u7ECF\u8FC7\u8BA1\u7B97\u673A\u6280\u672F\u8BAD\u7EC3\u7684\u4EBA\uFF0C\u4E5F\u53EF\u4EE5\u8F7B\u677E\u4E0A\u624B\u3002\u8FD8\u6709 2.27% \u7684\u4EBA\u9009\u62E9\u4E86 Linux \u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4F60\u7684\u624B\u673A\u5B89\u5353\u7CFB\u7EDF\u3001\u5E73\u677F\u3001\u767E\u5EA6\u7684\u670D\u52A1\u5668\u7B49\u7B49\u90FD\u662F\u57FA\u4E8E Linux \u7CFB\u7EDF\u3002\r
\r
## \u4EC0\u4E48\u662F Linux\r
\r
\u73B0\u5728\u4E0B\u4E2A\u5B9A\u4E49\u8FD8\u4E3A\u65F6\u8FC7\u65E9\uFF0C\u5C31\u597D\u6BD4\u4F60\u95EE\u6211\u4EC0\u4E48\u662F\u9E2D\u5B50\uFF0C\u6211\u4F1A\u544A\u8BC9\u4F60\uFF0C\u8D70\u8D77\u6765\u50CF\u9E2D\u5B50\uFF0C\u53EB\u58F0\u50CF\u9E2D\u5B50\uFF0C\u5916\u8C8C\u50CF\u9E2D\u5B50\uFF0C\u5403\u8D77\u6765\u50CF\u9E2D\u5B50\u7684\u4E1C\u897F\u5C31\u662F\u9E2D\u5B50\uFF08\u5357\u4EAC\u76D0\u6C34\u9E2D\u503C\u5F97\u4E00\u8BD5\uFF09\u3002\u6240\u4EE5\uFF0C\u5BF9 Linux \u7684\u6BCF\u4E2A\u7279\u6027\u6709\u4E86\u4E00\u5B9A\u4E86\u89E3\u540E\uFF0C\u4F60\u81EA\u7136\u4F1A\u77E5\u9053\u4EC0\u4E48\u662F\u5B83\u3002\r
\r
\u73B0\u5728\uFF0C\u8BF7\u4F60\u628A linux \u5F53\u505A\u521A\u521A\u8BF4\u7684\u64CD\u4F5C\u7CFB\u7EDF\u8FD9\u4E2A\u5B8F\u5927\u6982\u5FF5\u3002\u5F53\u7136\uFF0C\u4E5F\u8BB8\u4F60\u73B0\u5728\u5C31\u60F3\u4E86\u89E3\u66F4\u591A\uFF0C\u8BF7\u79FB\u6B65\u8FD9\u91CC[linux\u7B80\u4ECB](https://www.runoob.com/linux/linux-intro.html)\r
\r
## \u4E3A\u4EC0\u4E48\u9009\u62E9 Linux\r
\r
\u6709\u5F88\u591A\u7406\u7531\u53EF\u4EE5\u6210\u4E3A\u6211\u4EEC\u5B66\u4E60 Linux \u7684\u52A8\u529B\uFF0C\u800C\u4E14\u4F5C\u4E3A\u4E00\u4E2A\u5B66\u751F\uFF0C\u5927\u591A\u6570\u8BFE\u7A0B\u7684[\u73AF\u5883](https://blog.csdn.net/m0_54409538/article/details/124389213)\uFF08[Deployment Environment](https://en.wikipedia.org/wiki/Deployment_environment)\uFF09\u5C31\u662F\u5728 Linux \u4E2D\uFF0C\u4F5C\u4E3A\u4E00\u4E2A\u4E13\u4E1A\u7684\u7A0B\u5E8F\u5458\uFF0C\u4F60\u7684\u672A\u6765\u53EF\u80FD\u5C31\u662F\u548C Linux \u670D\u52A1\u5668\u6253\u4EA4\u9053\uFF0C\u8FD9\u91CC\u4EC5\u5217\u51FA 3 \u6761\u6216 2 \u6761\uFF0C\u4E5F\u662F\u6211\u4EEC\u5B66\u4E60\u7684\u76EE\u6807\r
\r
1. \u719F\u6089 Command-line interface\r
2. \u4E86\u89E3 OS \u7684\u667A\u6167\r
3. \u4E86\u89E3 C \u8BED\u8A00\u7A0B\u5E8F\u662F\u5982\u4F55\u7F16\u8BD1\u7684\r
4. \u4E86\u89E3\u7A0B\u5E8F\u662F\u5982\u4F55\u8FD0\u884C\u7684\r
5. \u4E86\u89E3CPU\u3001\u5185\u5B58\u3001\u78C1\u76D8\u5230\u5E95\u662F\u4EC0\u4E48\r
6. ...\r
\r
\u76F8\u6BD4 Windows\uFF0CLinux \u4F1A\u66F4\u52A0\u7B80\u5355\uFF0C\u6613\u4E8E\u4F7F\u7528\uFF0C\u8FD9\u4E5F\u662F\u6211\u4EEC\u9009\u62E9\u4ED6\u7684\u539F\u56E0\u3002\r
\r
## \u4E0D\u540C\u7684 Linux Distributions\r
\r
Linux \u662F\u4E00\u4E2A\u4EC5\u4EC5\u662F\u4E00\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\uFF08\u8FD9\u91CC\u4E0D\u8BA8\u8BBA\u4EC0\u4E48\u662F\u5185\u6838\uFF09\uFF0C\u771F\u6B63\u4F7F\u7528\u7684\u662F\u4ED6\u7684\u53D1\u884C\u7248\u672C\uFF0C\u8FD9\u91CC\u5217\u51FA\u6700\u5E38\u7528\u7684\u4E00\u4E9B[\u7248\u672C](https://www.bilibili.com/read/cv15898480)\uFF0C\u6211\u4EEC\u8FD9\u6B21\u4F7F\u7528\u7684\u662F Ubuntu22.04\u3002\r
\r
## \u4EC0\u4E48\u662F\u865A\u62DF\u673A\r
\r
\u7B80\u5355\u6765\u8BF4\uFF0C\u4E00\u4E2A\u8BA1\u7B97\u673A\u4E00\u822C\u53EA\u80FD\u88C5\u4E00\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u6A21\u62DF\u4E00\u4E2A\u8BA1\u7B97\u673A\uFF0C\u518D\u5728\u8FD9\u4E2A\u8BA1\u7B97\u673A\u5185\u5B89\u88C5\u64CD\u4F5C\u7CFB\u7EDF\u3002\r
\r
\u6BD4\u5982\u6211\u4F7F\u7528 Windows10 \u7CFB\u7EDF\uFF0C\u5B89\u88C5\u4E86\u865A\u62DF\u673A\u8F6F\u4EF6\u865A\u62DF\u4E86\u4E00\u4E2A\u8BA1\u7B97\u673A\uFF0C\u518D\u5728\u8FD9\u4E2A\u8BA1\u7B97\u673A\u5185\u5B89\u88C5 Linux \u7CFB\u7EDF\u3002\u8FD9\u6837\u6211\u5C31\u80FD\u540C\u65F6\u4F7F\u7528\u4E24\u4E2A\u7CFB\u7EDF\u4E86\u3002\r
\r
\u8FD9\u91CC\u6709\u66F4\u591A\u4FE1\u606F\uFF1A[\u865A\u62DF\u673A-\u767E\u5EA6\u767E\u79D1](https://baike.baidu.com/item/%E8%99%9A%E6%8B%9F%E6%9C%BA/104440)\r
\r
## \u4EC0\u4E48\u662F WSL2 \uFF08Windows Subsystem for Linux\uFF09\r
\r
\u7EC8\u4E8E\u56DE\u5230\u4E86\u6B63\u9898\uFF0C\u4EC0\u4E48\u662F WSL\uFF1F\uFF08\u53EF\u662F\u4F60\u7684\u6807\u9898\u662F WSL2 \u554A\uFF09\r
\r
\u8BF7\u770B\u8FD9\u91CC\uFF0C\u8FD9\u662F[ WSL \u7684\u5B98\u65B9\u6587\u6863](https://learn.microsoft.com/en-us/windows/wsl/)\u3002\u4E5F\u5C31\u662F\u8BF4 Windows \u81EA\u5DF1\u652F\u6301\u4E86\u4E00\u4E2A\u865A\u62DF\u673A\uFF0C\u53EF\u4EE5\u5B89\u88C5 Linux \u64CD\u4F5C\u7CFB\u7EDF\u3002\r
\r
\u5173\u4E8E WSL \u548C WSL2\uFF0C\u5E76\u4E0D\u4EC5\u4EC5\u662F\u540E\u8005\u662F\u524D\u8005\u7684\u7B2C\u4E8C\u7248\u8FD9\u4E48\u7B80\u5355\uFF0C\u8FD9\u91CC\u4E0D\u7EC6\u8BF4\u4E86\uFF0C\u53EF\u4EE5\u5728\u8FD9\u4E2A[\u6587\u6863](https://learn.microsoft.com/en-us/windows/wsl/compare-versions)\u4E2D\u505A\u66F4\u591A\u7684\u4E86\u89E3\u3002\u9009\u62E9 WSL2 \u4EC5\u4EC5\u662F\u56E0\u4E3A\u6211\u5DF2\u7ECF\u88C5\u8FC7 WSL \u4E86\uFF0C\u60F3\u8BD5\u8BD52\u3002\u662F\u7684\uFF0C\u5B8C\u5168\u662F\u6211\u4E2A\u4EBA\u539F\u56E0\u3002\u3002\u3002\r
\r
# \u5B89\u88C5 WSL \u547D\u4EE4\r
\r
OK\uFF0C\u4F60\u53EF\u4EE5\u7AD9\u8D77\u6765\u6D3B\u52A8\u4E00\u4E0B\u4E86\u3002\u4F5C\u4E3A\u770B\u5B8C\u4E86\u6211\u4E00\u957F\u4E32\u5E9F\u8BDD\u7684\u5956\u8D4F\uFF0C\u63A5\u4E0B\u6765\u7684\u5185\u5BB9\u5C31\u4E0D\u591A\u8BF4\u4E86\uFF0C\u6309\u6B65\u9AA4\u4E00\u6B65\u6B65\u6765\u5C31\u884C\u4E86\u3002\u4F60\u4E5F\u53EF\u4EE5\u53C2\u7167[ WSL \u5B89\u88C5\u6587\u6863](https://learn.microsoft.com/en-us/windows/wsl/install)\u548C[ Ubuntu22.04 \u5B89\u88C5](https://www.jianshu.com/p/18eac20e45a8)\u7684\u8BF4\u660E\u8FDB\u884C\u64CD\u4F5C\u3002\r
\r
[\u4EE5\u7BA1\u7406\u5458\u6743\u9650\u6253\u5F00 PowerShell \u6216\u8005 CMD](https://3g.163.com/dy/article/H0GBUHHH0552EVSP.html)\u3002\u8F93\u5165\`wsl --install\`\u6307\u4EE4\uFF0C\u7136\u540E\u91CD\u542F\u7535\u8111\u3002\r
\r
\`\`\`shell\r
wsl --install\r
\`\`\`\r
\r
\u5728\u8FD9\u91CC\u6211\u4EEC\u9009\u62E9\u6700\u65B0\u7248\u672C WSL \u8FDB\u884C\u5B89\u88C5\uFF0C\u5B89\u88C5\u5B8C\u540E\u7EE7\u7EED\u5B89\u88C5 Linux \u53D1\u884C\u7248\u672C\u3002\r
\r
> \u5982\u679C\u4F60\u5DF2\u7ECF\u5B89\u88C5\u8FC7 WSL\uFF0C\u8BF7\u53C2\u8003[ WSL \u5B89\u88C5\u6587\u6863](https://learn.microsoft.com/en-us/windows/wsl/install)\u7684 !Note \u90E8\u5206\r
\r
\u5728 windows \u7CFB\u7EDF\u81EA\u5E26\u7684[\u5FAE\u8F6F\u5546\u5E97](https://support.microsoft.com/zh-cn/account-billing/%E5%A6%82%E4%BD%95%E6%89%93%E5%BC%80-windows-%E4%B8%8A%E7%9A%84-microsoft-store-e080b85a-7c9e-46a7-8d8b-3e9a42e32de6)\u4E2D\u641C\u7D22 ubuntu\uFF0C\u9009\u62E9\u8981\u4E0B\u8F7D\u7684\u7248\u672C\uFF0C\u8FD9\u91CC\u9009\u62E9\u4E86\u6700\u65B0\u7684 Ubuntu-22.04 LTS\u3002\r
\r
> \u5F53\u7136\u4E0D\u9009\u62E922.04\u4E5F\u884C\uFF0C20.04\u662F\u4E00\u4E2A\u66F4\u52A0\u7A33\u5B9A\u7684\u7248\u672C\u3002\u4F46\u662F\u63A8\u8350\u4F7F\u7528 Ubuntu \u4F5C\u4E3A\u4F60\u7684\u53D1\u884C\u7248\uFF0C\u63A5\u4E0B\u6765\u6559\u7A0B\u7684\u6307\u4EE4\u90FD\u57FA\u4E8E Ubuntu \u7CFB\u7EDF\u3002\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/QQ\u622A\u56FE20221121163147.png)\r
\r
\u70B9\u51FB\u83B7\u53D6\u540E\u6253\u5F00\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/QQ\u622A\u56FE20221121163212.png)\r
\r
\u6CE8\u518C\u7528\u6237\u540D\u548C\u5BC6\u7801\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/QQ\u622A\u56FE20221121163243.png)\r
\r
\u7EE7\u7EED\u5728 Powershell \u754C\u9762\u67E5\u770B wsl \u7248\u672C\uFF0C\u5E94\u8BE5\u4F1A\u663E\u793A2\r
\r
\`\`\`shell\r
wsl -l -v\r
\`\`\`\r
\r
\u7136\u540E\u5C31\u5927\u529F\u544A\u6210\u4E86\u3002\r
\r
# \u5B89\u88C5 Windows Terminal\r
\r
\u521A\u521A\u4F60\u5DF2\u7ECF\u4F53\u9A8C\u8FC7\u4E86 Powershell \u548C CMD\uFF0C\u4F60\u53EF\u80FD\u611F\u5230\u4E0D\u90A3\u4E48\u7F8E\u89C2\uFF0C\u5982\u679C\u63A5\u4E0B\u6765\u7684\u5B66\u4E60\u90FD\u4F1A\u5728\u8FD9\u4E48\u4E00\u4E2A\u84DD/\u9ED1\u6846\u6846\u91CC\uFF0C\u8BE5\u662F\u591A\u4E48\u7684\u75DB\u82E6\u3002\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u9700\u8981\u4E00\u4E2A\u66F4\u52A0\u7F8E\u89C2\u7684\u7EC8\u7AEF\u4E86\uFF0C\u5373 Windows Terminal\u3002Windows Terminal \u4E2D\u53EF\u4EE5\u76F4\u63A5\u6253\u5F00 WSL\u3002\r
\r
\u8FD9\u91CC\uFF0C\u6211\u5E0C\u671B\u4F60\u53EF\u4EE5\u81EA\u5DF1\u901A\u8FC7\u767E\u5EA6\u5B8C\u6210\u5B89\u88C5\u548C\u914D\u7F6E\uFF0C\u4F5C\u4E3A\u4E00\u4E2A\u5C0F\u5C0F\u7684\u953B\u70BC\u3002\r
\r
![](https://insorker-bucket.oss-cn-hangzhou.aliyuncs.com/img/blog/QQ\u622A\u56FE20221121164801.png)\r
\r
# \u7ED3\u675F\uFF1F\r
\r
\u5F53\u7136\u662F\u65B0\u7684\u5F00\u59CB\u5566\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u4F1A\u4E00\u8D77\u914D\u7F6E Ubuntu22.04/20.04\uFF0C\u8BA9\u6211\u4EEC\u4E0B\u4E00\u7AE0\u518D\u89C1\u30FE(\uFFE3\u25BD\uFFE3)Bye~Bye~\r
\r
> PS: \u610F\u72B9\u672A\u5C3D\u7684\u5C0F\u4F19\u4F34\uFF0C\u53EF\u4EE5\u641C\u7D22\u201CWindows Terminal\u7F8E\u5316\u201D\uFF0C\u89E3\u9501\u65B0\u4E16\u754C\r
`,KE=Object.freeze(Object.defineProperty({__proto__:null,default:ed},Symbol.toStringTag,{value:"Module"})),nd=`---\r
title: hdlbits-note\r
date: 2022-11-29\r
tags:\r
  - hdlbits\r
  - \u6570\u5B57\u7535\u8DEF\r
---\r
\r
#\r
\r
### [Alwaysblock1](https://hdlbits.01xz.net/wiki/Alwaysblock1)\r
\r
A note on wire vs. reg: The left-hand-side of an assign statement must be a net type (e.g., wire), while the left-hand-side of a procedural assignment (in an always block) must be a variable type (e.g., reg). These types (wire vs. reg) have nothing to do with what hardware is synthesized, and is just syntax left over from Verilog's use as a hardware simulation language.`,ZE=Object.freeze(Object.defineProperty({__proto__:null,default:nd},Symbol.toStringTag,{value:"Module"})),td=`---\r
title: neovim\u5B89\u88C5\r
date: 2022-11-23\r
tags:\r
  - neovim\r
---\r
\r
[/usr/bin & /usr/local/bin](https://www.jianshu.com/p/5de2286b2e97)\r
\r
[update-alternatives](https://zhuanlan.zhihu.com/p/20797436)\r
\r
[AppImage](https://github.com/AppImage/AppImageKit/wiki)\r
\r
[Neovim install](https://github.com/neovim/neovim/wiki/Installing-Neovim)`,jE=Object.freeze(Object.defineProperty({__proto__:null,default:td},Symbol.toStringTag,{value:"Module"})),rd=`---\r
title: \u4E00\u751F\u4E00\u82AF | \u9884\u5B66\u4E60\u9636\u6BB5 | PA0\r
date: 2022-11-27\r
tags:\r
  - \u4E00\u751F\u4E00\u82AF\r
---\r
\r
# \u524D\u8A00\r
\r
\u9996\u5148\u58F0\u660E\u8FD9\u5E76\u4E0D\u662F\u4EE3\u7801\u5206\u4EAB\uFF0C\u5199\u8FD9\u7BC7\u6587\u7AE0\u7684\u4E3B\u8981\u76EE\u7684\u662F\u5BF9 PA0 \u4E2D\u7684\u4E00\u4E9B\u64CD\u4F5C\u505A\u8865\u5145\uFF0C\u56E0\u4E3A\u81EA\u5DF1\u5728\u590D\u73B0\u7684\u65F6\u5019\u786E\u5B9E\u9047\u5230\u4E86\u5F88\u591A\u95EE\u9898\u3002\r
\r
# \u95EE\u9898\r
\r
## [Getting Source Code](https://ysyx.oscc.cc/docs/ics-pa/0.6.html#getting-source-code)\r
\r
\u5B8C\u6210\u6240\u6709\u6B65\u9AA4\u540E\uFF0C\u6267\u884C\`git add .\`\u4F1A\u4EA7\u751F\u5982\u4E0B\u8B66\u544A\r
\r
\`\`\`shell\r
warning: adding embedded git repository: abstract-machine\r
hint: You've added another git repository inside your current repository.\r
hint: Clones of the outer repository will not contain the contents of\r
hint: the embedded repository and will not know how to obtain it.\r
hint: If you meant to add a submodule, use:\r
hint:\r
hint:   git submodule add <url> abstract-machine\r
hint:\r
hint: If you added this path by mistake, you can remove it from the\r
hint: index with:\r
hint:\r
hint:   git rm --cached abstract-machine\r
hint:\r
hint: See "git help submodule" for more information.\r
warning: adding embedded git repository: nemu\r
\`\`\`\r
\r
\u8FD9\u662F\u56E0\u4E3A nemu \u548C abstract-machine \u662F git \u4ED3\u5E93\uFF0C\u5BFC\u81F4 git \u4ED3\u5E93\u5D4C\u5957\u3002\u5176\u5B9E\u4E0D\u7BA1\u8FD9\u4E2A\u4E5F\u65E0\u6240\u8C13\uFF0C\u4F46\u662F\u7531\u4E8E\u4EE3\u7801\u6D01\u7656\uFF0C\u6240\u4EE5\u6211\u6309\u7167 warning \u7684\u5EFA\u8BAE\uFF0C\u5728\u8C03\u7528\`/bin/bash init.sh\`\u4E4B\u524D\u4FEE\u6539 init.sh \u6587\u4EF6\uFF0C\u5E76\u8BB0\u5F97\u5728 .gitignore \u4E2D\u6DFB\u52A0 \`!.gitmodules\`\uFF0C\u8B66\u544A\u5C31\u6CA1\u6709\u4E86\u3002\r
\r
\`\`\`sh\r
# git clone -b $2 git@github.com:$1.git $3\r
git submodule add -b $2 -f git@github.com:$1.git $3\r
\`\`\`\r
\r
## [Compiling and Running NEMU](https://ysyx.oscc.cc/docs/ics-pa/0.6.html#git-usage)\r
\r
> \u6CE8\u610F\u662F\`menu\`\u800C\u4E0D\u662F\`nemu\`\u3002\r
\r
\u5173\u4E8E\u7F16\u8BD1\u62A5\u9519\u7684\u539F\u56E0\uFF0C\u8FD9\u7BC7[\u6587\u7AE0](https://blog.csdn.net/qianniuwei321/article/details/126729531)\u8BF4\u7684\u5F88\u6E05\u695A\u4E86\u3002\r
\r
\u7136\u540E\u5C31\u662F\u505A\u5230 Development Tracing \u8FD9\u4E00\u6B65\uFF0C\u6211\u8FD0\u884C\`git log\`\u7684\u65F6\u5019\u662F\u6CA1\u6709 tracer-ics2022 \u76F8\u5173\u7684 log \u8F93\u51FA\u7684\u3002\u591A\u4E8F\u4E86 lazygit\uFF0C\u4E0D\u7136\u6211\u771F\u4EE5\u4E3A\u6211\u54EA\u6B65\u505A\u9519\u4E86\u3002\r
\r
\u9996\u5148\u56DE\u5230 pa0 \u7684\u76EE\u5F55\uFF0C\u5728 lazygit \u91CC\u5F88\u5BB9\u6613\u770B\u5230\u8FD9\u91CC\u67093\u4E2A branch\uFF0C\u8FD0\u884C\`git branch\`\u4E5F\u53EF\u4EE5\u53D1\u73B0\u591A\u4E86\u4E00\u4E2A tracer-ysyx2204\u3002\u4E8E\u662F\u6211\u4EEC\u8F93\u51FA\u8FD9\u4E2A branch \u7684 log\uFF0C\u5C31\u80FD\u627E\u5230\u6587\u6863\u91CC\u7684\u8BB0\u5F55\u4E86\u3002\r
\r
\`\`\`shell\r
git log tracer-ysyx2204\r
\`\`\``,VE=Object.freeze(Object.defineProperty({__proto__:null,default:rd},Symbol.toStringTag,{value:"Module"}));const YE={class:"tag-list"},XE=["select","onClick"],QE={class:"tag-list-divider"},JE={__name:"TagList",props:{tagList:Set,tagDefault:String},emits:["tagChange"],setup(e,{emit:n}){const t=e,r=Dn(t.tagDefault);function o(s){r.value!=s&&(n("tagChange",s),r.value=s)}function i(s){return s==r.value}return(s,c)=>(ye(),Ae(Te,null,[ve("div",YE,[(ye(!0),Ae(Te,null,er(e.tagList,a=>(ye(),Ae("div",{class:"tag-item",select:i(a),onClick:l=>o(a)},He(a),9,XE))),256))]),ve("div",QE,"Total: "+He(t.tagList.size-1),1)],64))}},ev=Fn(JE,[["__scopeId","data-v-5360a710"]]);const nv={class:"YRCard"},tv={class:"post-card-data"},rv={class:"YRCardTitle"},ov={class:"YRCardMeta"},iv={__name:"PostCardBrief",props:{link:String,date:Date,title:String},setup(e){const n=e,t={year:"numeric",month:"long",day:"numeric"};return(r,o)=>{const i=Qr("router-link");return ye(),Ae("article",nv,[xe(i,{class:"YRCardLink",to:n.link},{default:$t(()=>[ve("header",tv,[ve("span",rv,He(n.title),1),ve("span",ov,He(n.date.toLocaleDateString("en-US",t)),1)])]),_:1},8,["to"])])}}},sv=Fn(iv,[["__scopeId","data-v-eafeeadc"]]),cv={class:"post-card-list"},av={__name:"Study",setup(e){const n=Object.assign({"../docs/study/6.S081/Xv6 and Unix utilities.md":Gf,"../docs/study/6.S081/page tables.md":Wf,"../docs/study/6.S081/system calls.md":Kf,"../docs/study/CSAPP/The CSAPP Attack Lab.md":Zf,"../docs/study/CSAPP/The CSAPP Bomb Lab.md":jf,"../docs/study/CSAPP/The CSAPP Cache Lab.md":Vf,"../docs/study/CSAPP/The CSAPP Data Lab.md":Yf,"../docs/study/OSGO-tutorial-2022/Lab/Lab1-TypeChecker.md":Xf,"../docs/study/OSGO-tutorial-2022/OSGO-INDEX.md":Qf,"../docs/study/OSGO-tutorial-2022/Pre-Linux\u73AF\u5883\u914D\u7F6E.md":Jf,"../docs/study/OSGO-tutorial-2022/Pre-WSL2\u5B89\u88C5\u6559\u7A0B.md":ed,"../docs/study/hdlbits/hdlbits_note.md":nd,"../docs/study/neovim\u5B89\u88C5.md":td,"../docs/study/\u4E00\u751F\u4E00\u82AF/\u4E00\u751F\u4E00\u82AF  \u9884\u5B66\u4E60\u9636\u6BB5  PA0.md":rd}),t=Dn("All");var r=new Set([t.value]),o=[];for(const i in n){let s=nr.exports(n[i]).attributes;if(s.link="/post/"+i.substring(i.lastIndexOf("/")+1,i.lastIndexOf(".")),o.push(s),typeof s.tags=="string")throw i+". Format of 'tags' should be yaml array. ";for(let c of s.tags)r.add(c)}return o.sort((i,s)=>{if(i.top==!0&&s.top!=!0)return!0;if(s.top==!0&&i.top!=!0)return!1;Date.parse(i.date)>Date.parse(s.date)}),(i,s)=>(ye(),Ae(Te,null,[xe(Hf,{title:"study",brief:"\u5982\u679C\u4F60\u770B\u61C2\u4E86\uFF0C\u8BF4\u660E\u4F60\u6CA1\u770B\u61C2\u3002"}),xe(ev,{tagList:Ye(r),tagDefault:t.value,onTagChange:s[0]||(s[0]=c=>t.value=c)},null,8,["tagList","tagDefault"]),ve("div",cv,[(ye(!0),Ae(Te,null,er(Ye(o),c=>(ye(),Ae("div",null,[t.value=="All"||c.tags.includes(t.value)?(ye(),ys(sv,{key:0,link:c.link,title:c.title,date:c.date},null,8,["link","title","date"])):xs("",!0)]))),256))])],64))}};const lv={mounted(){let e=document.createElement("script");e.innerHTML="var Module={canvas:document.getElementById('canvas'),arguments:['cart.tic']};const gameFrame=document.getElementById('game-frame');const displayStyle=window.getComputedStyle(gameFrame).display;",document.head.appendChild(e),e=document.createElement("script"),e.src="tic80.js",document.head.appendChild(e)}},uv=e=>(ps("data-v-88cf8ac6"),e=e(),hs(),e),fv={class:"game",style:{margin:"0",position:"relative",background:"#1a1c2c"}},dv={id:"game-frame",ref:"gameFrame",style:{cursor:"pointer",position:"absolute",margin:"0 auto",opacity:"1",background:"#1a1c2c",width:"100%",height:"100%"}},pv=uv(()=>ve("div",{style:{"text-align":"center",color:"white",display:"flex","justify-content":"center","align-items":"center",width:"100%",height:"100%"}},[ve("p",{style:{margin:"0"}},"- CLICK TO PLAY -")],-1)),hv=[pv],gv={ref:"canvas",style:{width:"100%",height:"100%",margin:"0 auto",display:"block","image-rendering":"pixelated"},id:"canvas",oncontextmenu:"event.preventDefault()",onmousedown:"window.focus()"};function mv(e,n,t,r,o,i){return ye(),Ae("div",fv,[ve("div",dv,hv,512),ve("canvas",gv,null,512)])}const bv=Fn(lv,[["render",mv],["__scopeId","data-v-88cf8ac6"]]),_v="modulepreload",Ev=function(e,n){return new URL(e,n).href},ba={},Me=function(n,t,r){if(!t||t.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=Ev(i,r),i in ba)return;ba[i]=!0;const s=i.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const f=o[u];if(f.href===i&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":_v,s||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),s)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n())};var od={exports:{}},ge={},Ps={exports:{}};const vv="\xC1",yv="\xE1",xv="\u0102",kv="\u0103",wv="\u223E",Av="\u223F",Cv="\u223E\u0333",Sv="\xC2",Tv="\xE2",Nv="\xB4",Rv="\u0410",Ov="\u0430",Iv="\xC6",Lv="\xE6",Mv="\u2061",Dv="\u{1D504}",Fv="\u{1D51E}",Pv="\xC0",Bv="\xE0",qv="\u2135",Uv="\u2135",zv="\u0391",$v="\u03B1",Hv="\u0100",Gv="\u0101",Wv="\u2A3F",Kv="&",Zv="&",jv="\u2A55",Vv="\u2A53",Yv="\u2227",Xv="\u2A5C",Qv="\u2A58",Jv="\u2A5A",ey="\u2220",ny="\u29A4",ty="\u2220",ry="\u29A8",oy="\u29A9",iy="\u29AA",sy="\u29AB",cy="\u29AC",ay="\u29AD",ly="\u29AE",uy="\u29AF",fy="\u2221",dy="\u221F",py="\u22BE",hy="\u299D",gy="\u2222",my="\xC5",by="\u237C",_y="\u0104",Ey="\u0105",vy="\u{1D538}",yy="\u{1D552}",xy="\u2A6F",ky="\u2248",wy="\u2A70",Ay="\u224A",Cy="\u224B",Sy="'",Ty="\u2061",Ny="\u2248",Ry="\u224A",Oy="\xC5",Iy="\xE5",Ly="\u{1D49C}",My="\u{1D4B6}",Dy="\u2254",Fy="*",Py="\u2248",By="\u224D",qy="\xC3",Uy="\xE3",zy="\xC4",$y="\xE4",Hy="\u2233",Gy="\u2A11",Wy="\u224C",Ky="\u03F6",Zy="\u2035",jy="\u223D",Vy="\u22CD",Yy="\u2216",Xy="\u2AE7",Qy="\u22BD",Jy="\u2305",ex="\u2306",nx="\u2305",tx="\u23B5",rx="\u23B6",ox="\u224C",ix="\u0411",sx="\u0431",cx="\u201E",ax="\u2235",lx="\u2235",ux="\u2235",fx="\u29B0",dx="\u03F6",px="\u212C",hx="\u212C",gx="\u0392",mx="\u03B2",bx="\u2136",_x="\u226C",Ex="\u{1D505}",vx="\u{1D51F}",yx="\u22C2",xx="\u25EF",kx="\u22C3",wx="\u2A00",Ax="\u2A01",Cx="\u2A02",Sx="\u2A06",Tx="\u2605",Nx="\u25BD",Rx="\u25B3",Ox="\u2A04",Ix="\u22C1",Lx="\u22C0",Mx="\u290D",Dx="\u29EB",Fx="\u25AA",Px="\u25B4",Bx="\u25BE",qx="\u25C2",Ux="\u25B8",zx="\u2423",$x="\u2592",Hx="\u2591",Gx="\u2593",Wx="\u2588",Kx="=\u20E5",Zx="\u2261\u20E5",jx="\u2AED",Vx="\u2310",Yx="\u{1D539}",Xx="\u{1D553}",Qx="\u22A5",Jx="\u22A5",ek="\u22C8",nk="\u29C9",tk="\u2510",rk="\u2555",ok="\u2556",ik="\u2557",sk="\u250C",ck="\u2552",ak="\u2553",lk="\u2554",uk="\u2500",fk="\u2550",dk="\u252C",pk="\u2564",hk="\u2565",gk="\u2566",mk="\u2534",bk="\u2567",_k="\u2568",Ek="\u2569",vk="\u229F",yk="\u229E",xk="\u22A0",kk="\u2518",wk="\u255B",Ak="\u255C",Ck="\u255D",Sk="\u2514",Tk="\u2558",Nk="\u2559",Rk="\u255A",Ok="\u2502",Ik="\u2551",Lk="\u253C",Mk="\u256A",Dk="\u256B",Fk="\u256C",Pk="\u2524",Bk="\u2561",qk="\u2562",Uk="\u2563",zk="\u251C",$k="\u255E",Hk="\u255F",Gk="\u2560",Wk="\u2035",Kk="\u02D8",Zk="\u02D8",jk="\xA6",Vk="\u{1D4B7}",Yk="\u212C",Xk="\u204F",Qk="\u223D",Jk="\u22CD",ew="\u29C5",nw="\\",tw="\u27C8",rw="\u2022",ow="\u2022",iw="\u224E",sw="\u2AAE",cw="\u224F",aw="\u224E",lw="\u224F",uw="\u0106",fw="\u0107",dw="\u2A44",pw="\u2A49",hw="\u2A4B",gw="\u2229",mw="\u22D2",bw="\u2A47",_w="\u2A40",Ew="\u2145",vw="\u2229\uFE00",yw="\u2041",xw="\u02C7",kw="\u212D",ww="\u2A4D",Aw="\u010C",Cw="\u010D",Sw="\xC7",Tw="\xE7",Nw="\u0108",Rw="\u0109",Ow="\u2230",Iw="\u2A4C",Lw="\u2A50",Mw="\u010A",Dw="\u010B",Fw="\xB8",Pw="\xB8",Bw="\u29B2",qw="\xA2",Uw="\xB7",zw="\xB7",$w="\u{1D520}",Hw="\u212D",Gw="\u0427",Ww="\u0447",Kw="\u2713",Zw="\u2713",jw="\u03A7",Vw="\u03C7",Yw="\u02C6",Xw="\u2257",Qw="\u21BA",Jw="\u21BB",eA="\u229B",nA="\u229A",tA="\u229D",rA="\u2299",oA="\xAE",iA="\u24C8",sA="\u2296",cA="\u2295",aA="\u2297",lA="\u25CB",uA="\u29C3",fA="\u2257",dA="\u2A10",pA="\u2AEF",hA="\u29C2",gA="\u2232",mA="\u201D",bA="\u2019",_A="\u2663",EA="\u2663",vA=":",yA="\u2237",xA="\u2A74",kA="\u2254",wA="\u2254",AA=",",CA="@",SA="\u2201",TA="\u2218",NA="\u2201",RA="\u2102",OA="\u2245",IA="\u2A6D",LA="\u2261",MA="\u222E",DA="\u222F",FA="\u222E",PA="\u{1D554}",BA="\u2102",qA="\u2210",UA="\u2210",zA="\xA9",$A="\xA9",HA="\u2117",GA="\u2233",WA="\u21B5",KA="\u2717",ZA="\u2A2F",jA="\u{1D49E}",VA="\u{1D4B8}",YA="\u2ACF",XA="\u2AD1",QA="\u2AD0",JA="\u2AD2",eC="\u22EF",nC="\u2938",tC="\u2935",rC="\u22DE",oC="\u22DF",iC="\u21B6",sC="\u293D",cC="\u2A48",aC="\u2A46",lC="\u224D",uC="\u222A",fC="\u22D3",dC="\u2A4A",pC="\u228D",hC="\u2A45",gC="\u222A\uFE00",mC="\u21B7",bC="\u293C",_C="\u22DE",EC="\u22DF",vC="\u22CE",yC="\u22CF",xC="\xA4",kC="\u21B6",wC="\u21B7",AC="\u22CE",CC="\u22CF",SC="\u2232",TC="\u2231",NC="\u232D",RC="\u2020",OC="\u2021",IC="\u2138",LC="\u2193",MC="\u21A1",DC="\u21D3",FC="\u2010",PC="\u2AE4",BC="\u22A3",qC="\u290F",UC="\u02DD",zC="\u010E",$C="\u010F",HC="\u0414",GC="\u0434",WC="\u2021",KC="\u21CA",ZC="\u2145",jC="\u2146",VC="\u2911",YC="\u2A77",XC="\xB0",QC="\u2207",JC="\u0394",e1="\u03B4",n1="\u29B1",t1="\u297F",r1="\u{1D507}",o1="\u{1D521}",i1="\u2965",s1="\u21C3",c1="\u21C2",a1="\xB4",l1="\u02D9",u1="\u02DD",f1="`",d1="\u02DC",p1="\u22C4",h1="\u22C4",g1="\u22C4",m1="\u2666",b1="\u2666",_1="\xA8",E1="\u2146",v1="\u03DD",y1="\u22F2",x1="\xF7",k1="\xF7",w1="\u22C7",A1="\u22C7",C1="\u0402",S1="\u0452",T1="\u231E",N1="\u230D",R1="$",O1="\u{1D53B}",I1="\u{1D555}",L1="\xA8",M1="\u02D9",D1="\u20DC",F1="\u2250",P1="\u2251",B1="\u2250",q1="\u2238",U1="\u2214",z1="\u22A1",$1="\u2306",H1="\u222F",G1="\xA8",W1="\u21D3",K1="\u21D0",Z1="\u21D4",j1="\u2AE4",V1="\u27F8",Y1="\u27FA",X1="\u27F9",Q1="\u21D2",J1="\u22A8",eS="\u21D1",nS="\u21D5",tS="\u2225",rS="\u2913",oS="\u2193",iS="\u2193",sS="\u21D3",cS="\u21F5",aS="\u0311",lS="\u21CA",uS="\u21C3",fS="\u21C2",dS="\u2950",pS="\u295E",hS="\u2956",gS="\u21BD",mS="\u295F",bS="\u2957",_S="\u21C1",ES="\u21A7",vS="\u22A4",yS="\u2910",xS="\u231F",kS="\u230C",wS="\u{1D49F}",AS="\u{1D4B9}",CS="\u0405",SS="\u0455",TS="\u29F6",NS="\u0110",RS="\u0111",OS="\u22F1",IS="\u25BF",LS="\u25BE",MS="\u21F5",DS="\u296F",FS="\u29A6",PS="\u040F",BS="\u045F",qS="\u27FF",US="\xC9",zS="\xE9",$S="\u2A6E",HS="\u011A",GS="\u011B",WS="\xCA",KS="\xEA",ZS="\u2256",jS="\u2255",VS="\u042D",YS="\u044D",XS="\u2A77",QS="\u0116",JS="\u0117",eT="\u2251",nT="\u2147",tT="\u2252",rT="\u{1D508}",oT="\u{1D522}",iT="\u2A9A",sT="\xC8",cT="\xE8",aT="\u2A96",lT="\u2A98",uT="\u2A99",fT="\u2208",dT="\u23E7",pT="\u2113",hT="\u2A95",gT="\u2A97",mT="\u0112",bT="\u0113",_T="\u2205",ET="\u2205",vT="\u25FB",yT="\u2205",xT="\u25AB",kT="\u2004",wT="\u2005",AT="\u2003",CT="\u014A",ST="\u014B",TT="\u2002",NT="\u0118",RT="\u0119",OT="\u{1D53C}",IT="\u{1D556}",LT="\u22D5",MT="\u29E3",DT="\u2A71",FT="\u03B5",PT="\u0395",BT="\u03B5",qT="\u03F5",UT="\u2256",zT="\u2255",$T="\u2242",HT="\u2A96",GT="\u2A95",WT="\u2A75",KT="=",ZT="\u2242",jT="\u225F",VT="\u21CC",YT="\u2261",XT="\u2A78",QT="\u29E5",JT="\u2971",eN="\u2253",nN="\u212F",tN="\u2130",rN="\u2250",oN="\u2A73",iN="\u2242",sN="\u0397",cN="\u03B7",aN="\xD0",lN="\xF0",uN="\xCB",fN="\xEB",dN="\u20AC",pN="!",hN="\u2203",gN="\u2203",mN="\u2130",bN="\u2147",_N="\u2147",EN="\u2252",vN="\u0424",yN="\u0444",xN="\u2640",kN="\uFB03",wN="\uFB00",AN="\uFB04",CN="\u{1D509}",SN="\u{1D523}",TN="\uFB01",NN="\u25FC",RN="\u25AA",ON="fj",IN="\u266D",LN="\uFB02",MN="\u25B1",DN="\u0192",FN="\u{1D53D}",PN="\u{1D557}",BN="\u2200",qN="\u2200",UN="\u22D4",zN="\u2AD9",$N="\u2131",HN="\u2A0D",GN="\xBD",WN="\u2153",KN="\xBC",ZN="\u2155",jN="\u2159",VN="\u215B",YN="\u2154",XN="\u2156",QN="\xBE",JN="\u2157",eR="\u215C",nR="\u2158",tR="\u215A",rR="\u215D",oR="\u215E",iR="\u2044",sR="\u2322",cR="\u{1D4BB}",aR="\u2131",lR="\u01F5",uR="\u0393",fR="\u03B3",dR="\u03DC",pR="\u03DD",hR="\u2A86",gR="\u011E",mR="\u011F",bR="\u0122",_R="\u011C",ER="\u011D",vR="\u0413",yR="\u0433",xR="\u0120",kR="\u0121",wR="\u2265",AR="\u2267",CR="\u2A8C",SR="\u22DB",TR="\u2265",NR="\u2267",RR="\u2A7E",OR="\u2AA9",IR="\u2A7E",LR="\u2A80",MR="\u2A82",DR="\u2A84",FR="\u22DB\uFE00",PR="\u2A94",BR="\u{1D50A}",qR="\u{1D524}",UR="\u226B",zR="\u22D9",$R="\u22D9",HR="\u2137",GR="\u0403",WR="\u0453",KR="\u2AA5",ZR="\u2277",jR="\u2A92",VR="\u2AA4",YR="\u2A8A",XR="\u2A8A",QR="\u2A88",JR="\u2269",eO="\u2A88",nO="\u2269",tO="\u22E7",rO="\u{1D53E}",oO="\u{1D558}",iO="`",sO="\u2265",cO="\u22DB",aO="\u2267",lO="\u2AA2",uO="\u2277",fO="\u2A7E",dO="\u2273",pO="\u{1D4A2}",hO="\u210A",gO="\u2273",mO="\u2A8E",bO="\u2A90",_O="\u2AA7",EO="\u2A7A",vO=">",yO=">",xO="\u226B",kO="\u22D7",wO="\u2995",AO="\u2A7C",CO="\u2A86",SO="\u2978",TO="\u22D7",NO="\u22DB",RO="\u2A8C",OO="\u2277",IO="\u2273",LO="\u2269\uFE00",MO="\u2269\uFE00",DO="\u02C7",FO="\u200A",PO="\xBD",BO="\u210B",qO="\u042A",UO="\u044A",zO="\u2948",$O="\u2194",HO="\u21D4",GO="\u21AD",WO="^",KO="\u210F",ZO="\u0124",jO="\u0125",VO="\u2665",YO="\u2665",XO="\u2026",QO="\u22B9",JO="\u{1D525}",eI="\u210C",nI="\u210B",tI="\u2925",rI="\u2926",oI="\u21FF",iI="\u223B",sI="\u21A9",cI="\u21AA",aI="\u{1D559}",lI="\u210D",uI="\u2015",fI="\u2500",dI="\u{1D4BD}",pI="\u210B",hI="\u210F",gI="\u0126",mI="\u0127",bI="\u224E",_I="\u224F",EI="\u2043",vI="\u2010",yI="\xCD",xI="\xED",kI="\u2063",wI="\xCE",AI="\xEE",CI="\u0418",SI="\u0438",TI="\u0130",NI="\u0415",RI="\u0435",OI="\xA1",II="\u21D4",LI="\u{1D526}",MI="\u2111",DI="\xCC",FI="\xEC",PI="\u2148",BI="\u2A0C",qI="\u222D",UI="\u29DC",zI="\u2129",$I="\u0132",HI="\u0133",GI="\u012A",WI="\u012B",KI="\u2111",ZI="\u2148",jI="\u2110",VI="\u2111",YI="\u0131",XI="\u2111",QI="\u22B7",JI="\u01B5",eL="\u21D2",nL="\u2105",tL="\u221E",rL="\u29DD",oL="\u0131",iL="\u22BA",sL="\u222B",cL="\u222C",aL="\u2124",lL="\u222B",uL="\u22BA",fL="\u22C2",dL="\u2A17",pL="\u2A3C",hL="\u2063",gL="\u2062",mL="\u0401",bL="\u0451",_L="\u012E",EL="\u012F",vL="\u{1D540}",yL="\u{1D55A}",xL="\u0399",kL="\u03B9",wL="\u2A3C",AL="\xBF",CL="\u{1D4BE}",SL="\u2110",TL="\u2208",NL="\u22F5",RL="\u22F9",OL="\u22F4",IL="\u22F3",LL="\u2208",ML="\u2062",DL="\u0128",FL="\u0129",PL="\u0406",BL="\u0456",qL="\xCF",UL="\xEF",zL="\u0134",$L="\u0135",HL="\u0419",GL="\u0439",WL="\u{1D50D}",KL="\u{1D527}",ZL="\u0237",jL="\u{1D541}",VL="\u{1D55B}",YL="\u{1D4A5}",XL="\u{1D4BF}",QL="\u0408",JL="\u0458",eM="\u0404",nM="\u0454",tM="\u039A",rM="\u03BA",oM="\u03F0",iM="\u0136",sM="\u0137",cM="\u041A",aM="\u043A",lM="\u{1D50E}",uM="\u{1D528}",fM="\u0138",dM="\u0425",pM="\u0445",hM="\u040C",gM="\u045C",mM="\u{1D542}",bM="\u{1D55C}",_M="\u{1D4A6}",EM="\u{1D4C0}",vM="\u21DA",yM="\u0139",xM="\u013A",kM="\u29B4",wM="\u2112",AM="\u039B",CM="\u03BB",SM="\u27E8",TM="\u27EA",NM="\u2991",RM="\u27E8",OM="\u2A85",IM="\u2112",LM="\xAB",MM="\u21E4",DM="\u291F",FM="\u2190",PM="\u219E",BM="\u21D0",qM="\u291D",UM="\u21A9",zM="\u21AB",$M="\u2939",HM="\u2973",GM="\u21A2",WM="\u2919",KM="\u291B",ZM="\u2AAB",jM="\u2AAD",VM="\u2AAD\uFE00",YM="\u290C",XM="\u290E",QM="\u2772",JM="{",eD="[",nD="\u298B",tD="\u298F",rD="\u298D",oD="\u013D",iD="\u013E",sD="\u013B",cD="\u013C",aD="\u2308",lD="{",uD="\u041B",fD="\u043B",dD="\u2936",pD="\u201C",hD="\u201E",gD="\u2967",mD="\u294B",bD="\u21B2",_D="\u2264",ED="\u2266",vD="\u27E8",yD="\u21E4",xD="\u2190",kD="\u2190",wD="\u21D0",AD="\u21C6",CD="\u21A2",SD="\u2308",TD="\u27E6",ND="\u2961",RD="\u2959",OD="\u21C3",ID="\u230A",LD="\u21BD",MD="\u21BC",DD="\u21C7",FD="\u2194",PD="\u2194",BD="\u21D4",qD="\u21C6",UD="\u21CB",zD="\u21AD",$D="\u294E",HD="\u21A4",GD="\u22A3",WD="\u295A",KD="\u22CB",ZD="\u29CF",jD="\u22B2",VD="\u22B4",YD="\u2951",XD="\u2960",QD="\u2958",JD="\u21BF",e2="\u2952",n2="\u21BC",t2="\u2A8B",r2="\u22DA",o2="\u2264",i2="\u2266",s2="\u2A7D",c2="\u2AA8",a2="\u2A7D",l2="\u2A7F",u2="\u2A81",f2="\u2A83",d2="\u22DA\uFE00",p2="\u2A93",h2="\u2A85",g2="\u22D6",m2="\u22DA",b2="\u2A8B",_2="\u22DA",E2="\u2266",v2="\u2276",y2="\u2276",x2="\u2AA1",k2="\u2272",w2="\u2A7D",A2="\u2272",C2="\u297C",S2="\u230A",T2="\u{1D50F}",N2="\u{1D529}",R2="\u2276",O2="\u2A91",I2="\u2962",L2="\u21BD",M2="\u21BC",D2="\u296A",F2="\u2584",P2="\u0409",B2="\u0459",q2="\u21C7",U2="\u226A",z2="\u22D8",$2="\u231E",H2="\u21DA",G2="\u296B",W2="\u25FA",K2="\u013F",Z2="\u0140",j2="\u23B0",V2="\u23B0",Y2="\u2A89",X2="\u2A89",Q2="\u2A87",J2="\u2268",eF="\u2A87",nF="\u2268",tF="\u22E6",rF="\u27EC",oF="\u21FD",iF="\u27E6",sF="\u27F5",cF="\u27F5",aF="\u27F8",lF="\u27F7",uF="\u27F7",fF="\u27FA",dF="\u27FC",pF="\u27F6",hF="\u27F6",gF="\u27F9",mF="\u21AB",bF="\u21AC",_F="\u2985",EF="\u{1D543}",vF="\u{1D55D}",yF="\u2A2D",xF="\u2A34",kF="\u2217",wF="_",AF="\u2199",CF="\u2198",SF="\u25CA",TF="\u25CA",NF="\u29EB",RF="(",OF="\u2993",IF="\u21C6",LF="\u231F",MF="\u21CB",DF="\u296D",FF="\u200E",PF="\u22BF",BF="\u2039",qF="\u{1D4C1}",UF="\u2112",zF="\u21B0",$F="\u21B0",HF="\u2272",GF="\u2A8D",WF="\u2A8F",KF="[",ZF="\u2018",jF="\u201A",VF="\u0141",YF="\u0142",XF="\u2AA6",QF="\u2A79",JF="<",eP="<",nP="\u226A",tP="\u22D6",rP="\u22CB",oP="\u22C9",iP="\u2976",sP="\u2A7B",cP="\u25C3",aP="\u22B4",lP="\u25C2",uP="\u2996",fP="\u294A",dP="\u2966",pP="\u2268\uFE00",hP="\u2268\uFE00",gP="\xAF",mP="\u2642",bP="\u2720",_P="\u2720",EP="\u21A6",vP="\u21A6",yP="\u21A7",xP="\u21A4",kP="\u21A5",wP="\u25AE",AP="\u2A29",CP="\u041C",SP="\u043C",TP="\u2014",NP="\u223A",RP="\u2221",OP="\u205F",IP="\u2133",LP="\u{1D510}",MP="\u{1D52A}",DP="\u2127",FP="\xB5",PP="*",BP="\u2AF0",qP="\u2223",UP="\xB7",zP="\u229F",$P="\u2212",HP="\u2238",GP="\u2A2A",WP="\u2213",KP="\u2ADB",ZP="\u2026",jP="\u2213",VP="\u22A7",YP="\u{1D544}",XP="\u{1D55E}",QP="\u2213",JP="\u{1D4C2}",eB="\u2133",nB="\u223E",tB="\u039C",rB="\u03BC",oB="\u22B8",iB="\u22B8",sB="\u2207",cB="\u0143",aB="\u0144",lB="\u2220\u20D2",uB="\u2249",fB="\u2A70\u0338",dB="\u224B\u0338",pB="\u0149",hB="\u2249",gB="\u266E",mB="\u2115",bB="\u266E",_B="\xA0",EB="\u224E\u0338",vB="\u224F\u0338",yB="\u2A43",xB="\u0147",kB="\u0148",wB="\u0145",AB="\u0146",CB="\u2247",SB="\u2A6D\u0338",TB="\u2A42",NB="\u041D",RB="\u043D",OB="\u2013",IB="\u2924",LB="\u2197",MB="\u21D7",DB="\u2197",FB="\u2260",PB="\u2250\u0338",BB="\u200B",qB="\u200B",UB="\u200B",zB="\u200B",$B="\u2262",HB="\u2928",GB="\u2242\u0338",WB="\u226B",KB="\u226A",ZB=`
`,jB="\u2204",VB="\u2204",YB="\u{1D511}",XB="\u{1D52B}",QB="\u2267\u0338",JB="\u2271",eq="\u2271",nq="\u2267\u0338",tq="\u2A7E\u0338",rq="\u2A7E\u0338",oq="\u22D9\u0338",iq="\u2275",sq="\u226B\u20D2",cq="\u226F",aq="\u226F",lq="\u226B\u0338",uq="\u21AE",fq="\u21CE",dq="\u2AF2",pq="\u220B",hq="\u22FC",gq="\u22FA",mq="\u220B",bq="\u040A",_q="\u045A",Eq="\u219A",vq="\u21CD",yq="\u2025",xq="\u2266\u0338",kq="\u2270",wq="\u219A",Aq="\u21CD",Cq="\u21AE",Sq="\u21CE",Tq="\u2270",Nq="\u2266\u0338",Rq="\u2A7D\u0338",Oq="\u2A7D\u0338",Iq="\u226E",Lq="\u22D8\u0338",Mq="\u2274",Dq="\u226A\u20D2",Fq="\u226E",Pq="\u22EA",Bq="\u22EC",qq="\u226A\u0338",Uq="\u2224",zq="\u2060",$q="\xA0",Hq="\u{1D55F}",Gq="\u2115",Wq="\u2AEC",Kq="\xAC",Zq="\u2262",jq="\u226D",Vq="\u2226",Yq="\u2209",Xq="\u2260",Qq="\u2242\u0338",Jq="\u2204",eU="\u226F",nU="\u2271",tU="\u2267\u0338",rU="\u226B\u0338",oU="\u2279",iU="\u2A7E\u0338",sU="\u2275",cU="\u224E\u0338",aU="\u224F\u0338",lU="\u2209",uU="\u22F5\u0338",fU="\u22F9\u0338",dU="\u2209",pU="\u22F7",hU="\u22F6",gU="\u29CF\u0338",mU="\u22EA",bU="\u22EC",_U="\u226E",EU="\u2270",vU="\u2278",yU="\u226A\u0338",xU="\u2A7D\u0338",kU="\u2274",wU="\u2AA2\u0338",AU="\u2AA1\u0338",CU="\u220C",SU="\u220C",TU="\u22FE",NU="\u22FD",RU="\u2280",OU="\u2AAF\u0338",IU="\u22E0",LU="\u220C",MU="\u29D0\u0338",DU="\u22EB",FU="\u22ED",PU="\u228F\u0338",BU="\u22E2",qU="\u2290\u0338",UU="\u22E3",zU="\u2282\u20D2",$U="\u2288",HU="\u2281",GU="\u2AB0\u0338",WU="\u22E1",KU="\u227F\u0338",ZU="\u2283\u20D2",jU="\u2289",VU="\u2241",YU="\u2244",XU="\u2247",QU="\u2249",JU="\u2224",e3="\u2226",n3="\u2226",t3="\u2AFD\u20E5",r3="\u2202\u0338",o3="\u2A14",i3="\u2280",s3="\u22E0",c3="\u2280",a3="\u2AAF\u0338",l3="\u2AAF\u0338",u3="\u2933\u0338",f3="\u219B",d3="\u21CF",p3="\u219D\u0338",h3="\u219B",g3="\u21CF",m3="\u22EB",b3="\u22ED",_3="\u2281",E3="\u22E1",v3="\u2AB0\u0338",y3="\u{1D4A9}",x3="\u{1D4C3}",k3="\u2224",w3="\u2226",A3="\u2241",C3="\u2244",S3="\u2244",T3="\u2224",N3="\u2226",R3="\u22E2",O3="\u22E3",I3="\u2284",L3="\u2AC5\u0338",M3="\u2288",D3="\u2282\u20D2",F3="\u2288",P3="\u2AC5\u0338",B3="\u2281",q3="\u2AB0\u0338",U3="\u2285",z3="\u2AC6\u0338",$3="\u2289",H3="\u2283\u20D2",G3="\u2289",W3="\u2AC6\u0338",K3="\u2279",Z3="\xD1",j3="\xF1",V3="\u2278",Y3="\u22EA",X3="\u22EC",Q3="\u22EB",J3="\u22ED",ez="\u039D",nz="\u03BD",tz="#",rz="\u2116",oz="\u2007",iz="\u224D\u20D2",sz="\u22AC",cz="\u22AD",az="\u22AE",lz="\u22AF",uz="\u2265\u20D2",fz=">\u20D2",dz="\u2904",pz="\u29DE",hz="\u2902",gz="\u2264\u20D2",mz="<\u20D2",bz="\u22B4\u20D2",_z="\u2903",Ez="\u22B5\u20D2",vz="\u223C\u20D2",yz="\u2923",xz="\u2196",kz="\u21D6",wz="\u2196",Az="\u2927",Cz="\xD3",Sz="\xF3",Tz="\u229B",Nz="\xD4",Rz="\xF4",Oz="\u229A",Iz="\u041E",Lz="\u043E",Mz="\u229D",Dz="\u0150",Fz="\u0151",Pz="\u2A38",Bz="\u2299",qz="\u29BC",Uz="\u0152",zz="\u0153",$z="\u29BF",Hz="\u{1D512}",Gz="\u{1D52C}",Wz="\u02DB",Kz="\xD2",Zz="\xF2",jz="\u29C1",Vz="\u29B5",Yz="\u03A9",Xz="\u222E",Qz="\u21BA",Jz="\u29BE",e$="\u29BB",n$="\u203E",t$="\u29C0",r$="\u014C",o$="\u014D",i$="\u03A9",s$="\u03C9",c$="\u039F",a$="\u03BF",l$="\u29B6",u$="\u2296",f$="\u{1D546}",d$="\u{1D560}",p$="\u29B7",h$="\u201C",g$="\u2018",m$="\u29B9",b$="\u2295",_$="\u21BB",E$="\u2A54",v$="\u2228",y$="\u2A5D",x$="\u2134",k$="\u2134",w$="\xAA",A$="\xBA",C$="\u22B6",S$="\u2A56",T$="\u2A57",N$="\u2A5B",R$="\u24C8",O$="\u{1D4AA}",I$="\u2134",L$="\xD8",M$="\xF8",D$="\u2298",F$="\xD5",P$="\xF5",B$="\u2A36",q$="\u2A37",U$="\u2297",z$="\xD6",$$="\xF6",H$="\u233D",G$="\u203E",W$="\u23DE",K$="\u23B4",Z$="\u23DC",j$="\xB6",V$="\u2225",Y$="\u2225",X$="\u2AF3",Q$="\u2AFD",J$="\u2202",eH="\u2202",nH="\u041F",tH="\u043F",rH="%",oH=".",iH="\u2030",sH="\u22A5",cH="\u2031",aH="\u{1D513}",lH="\u{1D52D}",uH="\u03A6",fH="\u03C6",dH="\u03D5",pH="\u2133",hH="\u260E",gH="\u03A0",mH="\u03C0",bH="\u22D4",_H="\u03D6",EH="\u210F",vH="\u210E",yH="\u210F",xH="\u2A23",kH="\u229E",wH="\u2A22",AH="+",CH="\u2214",SH="\u2A25",TH="\u2A72",NH="\xB1",RH="\xB1",OH="\u2A26",IH="\u2A27",LH="\xB1",MH="\u210C",DH="\u2A15",FH="\u{1D561}",PH="\u2119",BH="\xA3",qH="\u2AB7",UH="\u2ABB",zH="\u227A",$H="\u227C",HH="\u2AB7",GH="\u227A",WH="\u227C",KH="\u227A",ZH="\u2AAF",jH="\u227C",VH="\u227E",YH="\u2AAF",XH="\u2AB9",QH="\u2AB5",JH="\u22E8",e6="\u2AAF",n6="\u2AB3",t6="\u227E",r6="\u2032",o6="\u2033",i6="\u2119",s6="\u2AB9",c6="\u2AB5",a6="\u22E8",l6="\u220F",u6="\u220F",f6="\u232E",d6="\u2312",p6="\u2313",h6="\u221D",g6="\u221D",m6="\u2237",b6="\u221D",_6="\u227E",E6="\u22B0",v6="\u{1D4AB}",y6="\u{1D4C5}",x6="\u03A8",k6="\u03C8",w6="\u2008",A6="\u{1D514}",C6="\u{1D52E}",S6="\u2A0C",T6="\u{1D562}",N6="\u211A",R6="\u2057",O6="\u{1D4AC}",I6="\u{1D4C6}",L6="\u210D",M6="\u2A16",D6="?",F6="\u225F",P6='"',B6='"',q6="\u21DB",U6="\u223D\u0331",z6="\u0154",$6="\u0155",H6="\u221A",G6="\u29B3",W6="\u27E9",K6="\u27EB",Z6="\u2992",j6="\u29A5",V6="\u27E9",Y6="\xBB",X6="\u2975",Q6="\u21E5",J6="\u2920",e4="\u2933",n4="\u2192",t4="\u21A0",r4="\u21D2",o4="\u291E",i4="\u21AA",s4="\u21AC",c4="\u2945",a4="\u2974",l4="\u2916",u4="\u21A3",f4="\u219D",d4="\u291A",p4="\u291C",h4="\u2236",g4="\u211A",m4="\u290D",b4="\u290F",_4="\u2910",E4="\u2773",v4="}",y4="]",x4="\u298C",k4="\u298E",w4="\u2990",A4="\u0158",C4="\u0159",S4="\u0156",T4="\u0157",N4="\u2309",R4="}",O4="\u0420",I4="\u0440",L4="\u2937",M4="\u2969",D4="\u201D",F4="\u201D",P4="\u21B3",B4="\u211C",q4="\u211B",U4="\u211C",z4="\u211D",$4="\u211C",H4="\u25AD",G4="\xAE",W4="\xAE",K4="\u220B",Z4="\u21CB",j4="\u296F",V4="\u297D",Y4="\u230B",X4="\u{1D52F}",Q4="\u211C",J4="\u2964",eG="\u21C1",nG="\u21C0",tG="\u296C",rG="\u03A1",oG="\u03C1",iG="\u03F1",sG="\u27E9",cG="\u21E5",aG="\u2192",lG="\u2192",uG="\u21D2",fG="\u21C4",dG="\u21A3",pG="\u2309",hG="\u27E7",gG="\u295D",mG="\u2955",bG="\u21C2",_G="\u230B",EG="\u21C1",vG="\u21C0",yG="\u21C4",xG="\u21CC",kG="\u21C9",wG="\u219D",AG="\u21A6",CG="\u22A2",SG="\u295B",TG="\u22CC",NG="\u29D0",RG="\u22B3",OG="\u22B5",IG="\u294F",LG="\u295C",MG="\u2954",DG="\u21BE",FG="\u2953",PG="\u21C0",BG="\u02DA",qG="\u2253",UG="\u21C4",zG="\u21CC",$G="\u200F",HG="\u23B1",GG="\u23B1",WG="\u2AEE",KG="\u27ED",ZG="\u21FE",jG="\u27E7",VG="\u2986",YG="\u{1D563}",XG="\u211D",QG="\u2A2E",JG="\u2A35",e9="\u2970",n9=")",t9="\u2994",r9="\u2A12",o9="\u21C9",i9="\u21DB",s9="\u203A",c9="\u{1D4C7}",a9="\u211B",l9="\u21B1",u9="\u21B1",f9="]",d9="\u2019",p9="\u2019",h9="\u22CC",g9="\u22CA",m9="\u25B9",b9="\u22B5",_9="\u25B8",E9="\u29CE",v9="\u29F4",y9="\u2968",x9="\u211E",k9="\u015A",w9="\u015B",A9="\u201A",C9="\u2AB8",S9="\u0160",T9="\u0161",N9="\u2ABC",R9="\u227B",O9="\u227D",I9="\u2AB0",L9="\u2AB4",M9="\u015E",D9="\u015F",F9="\u015C",P9="\u015D",B9="\u2ABA",q9="\u2AB6",U9="\u22E9",z9="\u2A13",$9="\u227F",H9="\u0421",G9="\u0441",W9="\u22A1",K9="\u22C5",Z9="\u2A66",j9="\u2925",V9="\u2198",Y9="\u21D8",X9="\u2198",Q9="\xA7",J9=";",e5="\u2929",n5="\u2216",t5="\u2216",r5="\u2736",o5="\u{1D516}",i5="\u{1D530}",s5="\u2322",c5="\u266F",a5="\u0429",l5="\u0449",u5="\u0428",f5="\u0448",d5="\u2193",p5="\u2190",h5="\u2223",g5="\u2225",m5="\u2192",b5="\u2191",_5="\xAD",E5="\u03A3",v5="\u03C3",y5="\u03C2",x5="\u03C2",k5="\u223C",w5="\u2A6A",A5="\u2243",C5="\u2243",S5="\u2A9E",T5="\u2AA0",N5="\u2A9D",R5="\u2A9F",O5="\u2246",I5="\u2A24",L5="\u2972",M5="\u2190",D5="\u2218",F5="\u2216",P5="\u2A33",B5="\u29E4",q5="\u2223",U5="\u2323",z5="\u2AAA",$5="\u2AAC",H5="\u2AAC\uFE00",G5="\u042C",W5="\u044C",K5="\u233F",Z5="\u29C4",j5="/",V5="\u{1D54A}",Y5="\u{1D564}",X5="\u2660",Q5="\u2660",J5="\u2225",e8="\u2293",n8="\u2293\uFE00",t8="\u2294",r8="\u2294\uFE00",o8="\u221A",i8="\u228F",s8="\u2291",c8="\u228F",a8="\u2291",l8="\u2290",u8="\u2292",f8="\u2290",d8="\u2292",p8="\u25A1",h8="\u25A1",g8="\u2293",m8="\u228F",b8="\u2291",_8="\u2290",E8="\u2292",v8="\u2294",y8="\u25AA",x8="\u25A1",k8="\u25AA",w8="\u2192",A8="\u{1D4AE}",C8="\u{1D4C8}",S8="\u2216",T8="\u2323",N8="\u22C6",R8="\u22C6",O8="\u2606",I8="\u2605",L8="\u03F5",M8="\u03D5",D8="\xAF",F8="\u2282",P8="\u22D0",B8="\u2ABD",q8="\u2AC5",U8="\u2286",z8="\u2AC3",$8="\u2AC1",H8="\u2ACB",G8="\u228A",W8="\u2ABF",K8="\u2979",Z8="\u2282",j8="\u22D0",V8="\u2286",Y8="\u2AC5",X8="\u2286",Q8="\u228A",J8="\u2ACB",eW="\u2AC7",nW="\u2AD5",tW="\u2AD3",rW="\u2AB8",oW="\u227B",iW="\u227D",sW="\u227B",cW="\u2AB0",aW="\u227D",lW="\u227F",uW="\u2AB0",fW="\u2ABA",dW="\u2AB6",pW="\u22E9",hW="\u227F",gW="\u220B",mW="\u2211",bW="\u2211",_W="\u266A",EW="\xB9",vW="\xB2",yW="\xB3",xW="\u2283",kW="\u22D1",wW="\u2ABE",AW="\u2AD8",CW="\u2AC6",SW="\u2287",TW="\u2AC4",NW="\u2283",RW="\u2287",OW="\u27C9",IW="\u2AD7",LW="\u297B",MW="\u2AC2",DW="\u2ACC",FW="\u228B",PW="\u2AC0",BW="\u2283",qW="\u22D1",UW="\u2287",zW="\u2AC6",$W="\u228B",HW="\u2ACC",GW="\u2AC8",WW="\u2AD4",KW="\u2AD6",ZW="\u2926",jW="\u2199",VW="\u21D9",YW="\u2199",XW="\u292A",QW="\xDF",JW="	",eK="\u2316",nK="\u03A4",tK="\u03C4",rK="\u23B4",oK="\u0164",iK="\u0165",sK="\u0162",cK="\u0163",aK="\u0422",lK="\u0442",uK="\u20DB",fK="\u2315",dK="\u{1D517}",pK="\u{1D531}",hK="\u2234",gK="\u2234",mK="\u2234",bK="\u0398",_K="\u03B8",EK="\u03D1",vK="\u03D1",yK="\u2248",xK="\u223C",kK="\u205F\u200A",wK="\u2009",AK="\u2009",CK="\u2248",SK="\u223C",TK="\xDE",NK="\xFE",RK="\u02DC",OK="\u223C",IK="\u2243",LK="\u2245",MK="\u2248",DK="\u2A31",FK="\u22A0",PK="\xD7",BK="\u2A30",qK="\u222D",UK="\u2928",zK="\u2336",$K="\u2AF1",HK="\u22A4",GK="\u{1D54B}",WK="\u{1D565}",KK="\u2ADA",ZK="\u2929",jK="\u2034",VK="\u2122",YK="\u2122",XK="\u25B5",QK="\u25BF",JK="\u25C3",eZ="\u22B4",nZ="\u225C",tZ="\u25B9",rZ="\u22B5",oZ="\u25EC",iZ="\u225C",sZ="\u2A3A",cZ="\u20DB",aZ="\u2A39",lZ="\u29CD",uZ="\u2A3B",fZ="\u23E2",dZ="\u{1D4AF}",pZ="\u{1D4C9}",hZ="\u0426",gZ="\u0446",mZ="\u040B",bZ="\u045B",_Z="\u0166",EZ="\u0167",vZ="\u226C",yZ="\u219E",xZ="\u21A0",kZ="\xDA",wZ="\xFA",AZ="\u2191",CZ="\u219F",SZ="\u21D1",TZ="\u2949",NZ="\u040E",RZ="\u045E",OZ="\u016C",IZ="\u016D",LZ="\xDB",MZ="\xFB",DZ="\u0423",FZ="\u0443",PZ="\u21C5",BZ="\u0170",qZ="\u0171",UZ="\u296E",zZ="\u297E",$Z="\u{1D518}",HZ="\u{1D532}",GZ="\xD9",WZ="\xF9",KZ="\u2963",ZZ="\u21BF",jZ="\u21BE",VZ="\u2580",YZ="\u231C",XZ="\u231C",QZ="\u230F",JZ="\u25F8",ej="\u016A",nj="\u016B",tj="\xA8",rj="_",oj="\u23DF",ij="\u23B5",sj="\u23DD",cj="\u22C3",aj="\u228E",lj="\u0172",uj="\u0173",fj="\u{1D54C}",dj="\u{1D566}",pj="\u2912",hj="\u2191",gj="\u2191",mj="\u21D1",bj="\u21C5",_j="\u2195",Ej="\u2195",vj="\u21D5",yj="\u296E",xj="\u21BF",kj="\u21BE",wj="\u228E",Aj="\u2196",Cj="\u2197",Sj="\u03C5",Tj="\u03D2",Nj="\u03D2",Rj="\u03A5",Oj="\u03C5",Ij="\u21A5",Lj="\u22A5",Mj="\u21C8",Dj="\u231D",Fj="\u231D",Pj="\u230E",Bj="\u016E",qj="\u016F",Uj="\u25F9",zj="\u{1D4B0}",$j="\u{1D4CA}",Hj="\u22F0",Gj="\u0168",Wj="\u0169",Kj="\u25B5",Zj="\u25B4",jj="\u21C8",Vj="\xDC",Yj="\xFC",Xj="\u29A7",Qj="\u299C",Jj="\u03F5",eV="\u03F0",nV="\u2205",tV="\u03D5",rV="\u03D6",oV="\u221D",iV="\u2195",sV="\u21D5",cV="\u03F1",aV="\u03C2",lV="\u228A\uFE00",uV="\u2ACB\uFE00",fV="\u228B\uFE00",dV="\u2ACC\uFE00",pV="\u03D1",hV="\u22B2",gV="\u22B3",mV="\u2AE8",bV="\u2AEB",_V="\u2AE9",EV="\u0412",vV="\u0432",yV="\u22A2",xV="\u22A8",kV="\u22A9",wV="\u22AB",AV="\u2AE6",CV="\u22BB",SV="\u2228",TV="\u22C1",NV="\u225A",RV="\u22EE",OV="|",IV="\u2016",LV="|",MV="\u2016",DV="\u2223",FV="|",PV="\u2758",BV="\u2240",qV="\u200A",UV="\u{1D519}",zV="\u{1D533}",$V="\u22B2",HV="\u2282\u20D2",GV="\u2283\u20D2",WV="\u{1D54D}",KV="\u{1D567}",ZV="\u221D",jV="\u22B3",VV="\u{1D4B1}",YV="\u{1D4CB}",XV="\u2ACB\uFE00",QV="\u228A\uFE00",JV="\u2ACC\uFE00",eY="\u228B\uFE00",nY="\u22AA",tY="\u299A",rY="\u0174",oY="\u0175",iY="\u2A5F",sY="\u2227",cY="\u22C0",aY="\u2259",lY="\u2118",uY="\u{1D51A}",fY="\u{1D534}",dY="\u{1D54E}",pY="\u{1D568}",hY="\u2118",gY="\u2240",mY="\u2240",bY="\u{1D4B2}",_Y="\u{1D4CC}",EY="\u22C2",vY="\u25EF",yY="\u22C3",xY="\u25BD",kY="\u{1D51B}",wY="\u{1D535}",AY="\u27F7",CY="\u27FA",SY="\u039E",TY="\u03BE",NY="\u27F5",RY="\u27F8",OY="\u27FC",IY="\u22FB",LY="\u2A00",MY="\u{1D54F}",DY="\u{1D569}",FY="\u2A01",PY="\u2A02",BY="\u27F6",qY="\u27F9",UY="\u{1D4B3}",zY="\u{1D4CD}",$Y="\u2A06",HY="\u2A04",GY="\u25B3",WY="\u22C1",KY="\u22C0",ZY="\xDD",jY="\xFD",VY="\u042F",YY="\u044F",XY="\u0176",QY="\u0177",JY="\u042B",e7="\u044B",n7="\xA5",t7="\u{1D51C}",r7="\u{1D536}",o7="\u0407",i7="\u0457",s7="\u{1D550}",c7="\u{1D56A}",a7="\u{1D4B4}",l7="\u{1D4CE}",u7="\u042E",f7="\u044E",d7="\xFF",p7="\u0178",h7="\u0179",g7="\u017A",m7="\u017D",b7="\u017E",_7="\u0417",E7="\u0437",v7="\u017B",y7="\u017C",x7="\u2128",k7="\u200B",w7="\u0396",A7="\u03B6",C7="\u{1D537}",S7="\u2128",T7="\u0416",N7="\u0436",R7="\u21DD",O7="\u{1D56B}",I7="\u2124",L7="\u{1D4B5}",M7="\u{1D4CF}",D7="\u200D",F7="\u200C",P7={Aacute:vv,aacute:yv,Abreve:xv,abreve:kv,ac:wv,acd:Av,acE:Cv,Acirc:Sv,acirc:Tv,acute:Nv,Acy:Rv,acy:Ov,AElig:Iv,aelig:Lv,af:Mv,Afr:Dv,afr:Fv,Agrave:Pv,agrave:Bv,alefsym:qv,aleph:Uv,Alpha:zv,alpha:$v,Amacr:Hv,amacr:Gv,amalg:Wv,amp:Kv,AMP:Zv,andand:jv,And:Vv,and:Yv,andd:Xv,andslope:Qv,andv:Jv,ang:ey,ange:ny,angle:ty,angmsdaa:ry,angmsdab:oy,angmsdac:iy,angmsdad:sy,angmsdae:cy,angmsdaf:ay,angmsdag:ly,angmsdah:uy,angmsd:fy,angrt:dy,angrtvb:py,angrtvbd:hy,angsph:gy,angst:my,angzarr:by,Aogon:_y,aogon:Ey,Aopf:vy,aopf:yy,apacir:xy,ap:ky,apE:wy,ape:Ay,apid:Cy,apos:Sy,ApplyFunction:Ty,approx:Ny,approxeq:Ry,Aring:Oy,aring:Iy,Ascr:Ly,ascr:My,Assign:Dy,ast:Fy,asymp:Py,asympeq:By,Atilde:qy,atilde:Uy,Auml:zy,auml:$y,awconint:Hy,awint:Gy,backcong:Wy,backepsilon:Ky,backprime:Zy,backsim:jy,backsimeq:Vy,Backslash:Yy,Barv:Xy,barvee:Qy,barwed:Jy,Barwed:ex,barwedge:nx,bbrk:tx,bbrktbrk:rx,bcong:ox,Bcy:ix,bcy:sx,bdquo:cx,becaus:ax,because:lx,Because:ux,bemptyv:fx,bepsi:dx,bernou:px,Bernoullis:hx,Beta:gx,beta:mx,beth:bx,between:_x,Bfr:Ex,bfr:vx,bigcap:yx,bigcirc:xx,bigcup:kx,bigodot:wx,bigoplus:Ax,bigotimes:Cx,bigsqcup:Sx,bigstar:Tx,bigtriangledown:Nx,bigtriangleup:Rx,biguplus:Ox,bigvee:Ix,bigwedge:Lx,bkarow:Mx,blacklozenge:Dx,blacksquare:Fx,blacktriangle:Px,blacktriangledown:Bx,blacktriangleleft:qx,blacktriangleright:Ux,blank:zx,blk12:$x,blk14:Hx,blk34:Gx,block:Wx,bne:Kx,bnequiv:Zx,bNot:jx,bnot:Vx,Bopf:Yx,bopf:Xx,bot:Qx,bottom:Jx,bowtie:ek,boxbox:nk,boxdl:tk,boxdL:rk,boxDl:ok,boxDL:ik,boxdr:sk,boxdR:ck,boxDr:ak,boxDR:lk,boxh:uk,boxH:fk,boxhd:dk,boxHd:pk,boxhD:hk,boxHD:gk,boxhu:mk,boxHu:bk,boxhU:_k,boxHU:Ek,boxminus:vk,boxplus:yk,boxtimes:xk,boxul:kk,boxuL:wk,boxUl:Ak,boxUL:Ck,boxur:Sk,boxuR:Tk,boxUr:Nk,boxUR:Rk,boxv:Ok,boxV:Ik,boxvh:Lk,boxvH:Mk,boxVh:Dk,boxVH:Fk,boxvl:Pk,boxvL:Bk,boxVl:qk,boxVL:Uk,boxvr:zk,boxvR:$k,boxVr:Hk,boxVR:Gk,bprime:Wk,breve:Kk,Breve:Zk,brvbar:jk,bscr:Vk,Bscr:Yk,bsemi:Xk,bsim:Qk,bsime:Jk,bsolb:ew,bsol:nw,bsolhsub:tw,bull:rw,bullet:ow,bump:iw,bumpE:sw,bumpe:cw,Bumpeq:aw,bumpeq:lw,Cacute:uw,cacute:fw,capand:dw,capbrcup:pw,capcap:hw,cap:gw,Cap:mw,capcup:bw,capdot:_w,CapitalDifferentialD:Ew,caps:vw,caret:yw,caron:xw,Cayleys:kw,ccaps:ww,Ccaron:Aw,ccaron:Cw,Ccedil:Sw,ccedil:Tw,Ccirc:Nw,ccirc:Rw,Cconint:Ow,ccups:Iw,ccupssm:Lw,Cdot:Mw,cdot:Dw,cedil:Fw,Cedilla:Pw,cemptyv:Bw,cent:qw,centerdot:Uw,CenterDot:zw,cfr:$w,Cfr:Hw,CHcy:Gw,chcy:Ww,check:Kw,checkmark:Zw,Chi:jw,chi:Vw,circ:Yw,circeq:Xw,circlearrowleft:Qw,circlearrowright:Jw,circledast:eA,circledcirc:nA,circleddash:tA,CircleDot:rA,circledR:oA,circledS:iA,CircleMinus:sA,CirclePlus:cA,CircleTimes:aA,cir:lA,cirE:uA,cire:fA,cirfnint:dA,cirmid:pA,cirscir:hA,ClockwiseContourIntegral:gA,CloseCurlyDoubleQuote:mA,CloseCurlyQuote:bA,clubs:_A,clubsuit:EA,colon:vA,Colon:yA,Colone:xA,colone:kA,coloneq:wA,comma:AA,commat:CA,comp:SA,compfn:TA,complement:NA,complexes:RA,cong:OA,congdot:IA,Congruent:LA,conint:MA,Conint:DA,ContourIntegral:FA,copf:PA,Copf:BA,coprod:qA,Coproduct:UA,copy:zA,COPY:$A,copysr:HA,CounterClockwiseContourIntegral:GA,crarr:WA,cross:KA,Cross:ZA,Cscr:jA,cscr:VA,csub:YA,csube:XA,csup:QA,csupe:JA,ctdot:eC,cudarrl:nC,cudarrr:tC,cuepr:rC,cuesc:oC,cularr:iC,cularrp:sC,cupbrcap:cC,cupcap:aC,CupCap:lC,cup:uC,Cup:fC,cupcup:dC,cupdot:pC,cupor:hC,cups:gC,curarr:mC,curarrm:bC,curlyeqprec:_C,curlyeqsucc:EC,curlyvee:vC,curlywedge:yC,curren:xC,curvearrowleft:kC,curvearrowright:wC,cuvee:AC,cuwed:CC,cwconint:SC,cwint:TC,cylcty:NC,dagger:RC,Dagger:OC,daleth:IC,darr:LC,Darr:MC,dArr:DC,dash:FC,Dashv:PC,dashv:BC,dbkarow:qC,dblac:UC,Dcaron:zC,dcaron:$C,Dcy:HC,dcy:GC,ddagger:WC,ddarr:KC,DD:ZC,dd:jC,DDotrahd:VC,ddotseq:YC,deg:XC,Del:QC,Delta:JC,delta:e1,demptyv:n1,dfisht:t1,Dfr:r1,dfr:o1,dHar:i1,dharl:s1,dharr:c1,DiacriticalAcute:a1,DiacriticalDot:l1,DiacriticalDoubleAcute:u1,DiacriticalGrave:f1,DiacriticalTilde:d1,diam:p1,diamond:h1,Diamond:g1,diamondsuit:m1,diams:b1,die:_1,DifferentialD:E1,digamma:v1,disin:y1,div:x1,divide:k1,divideontimes:w1,divonx:A1,DJcy:C1,djcy:S1,dlcorn:T1,dlcrop:N1,dollar:R1,Dopf:O1,dopf:I1,Dot:L1,dot:M1,DotDot:D1,doteq:F1,doteqdot:P1,DotEqual:B1,dotminus:q1,dotplus:U1,dotsquare:z1,doublebarwedge:$1,DoubleContourIntegral:H1,DoubleDot:G1,DoubleDownArrow:W1,DoubleLeftArrow:K1,DoubleLeftRightArrow:Z1,DoubleLeftTee:j1,DoubleLongLeftArrow:V1,DoubleLongLeftRightArrow:Y1,DoubleLongRightArrow:X1,DoubleRightArrow:Q1,DoubleRightTee:J1,DoubleUpArrow:eS,DoubleUpDownArrow:nS,DoubleVerticalBar:tS,DownArrowBar:rS,downarrow:oS,DownArrow:iS,Downarrow:sS,DownArrowUpArrow:cS,DownBreve:aS,downdownarrows:lS,downharpoonleft:uS,downharpoonright:fS,DownLeftRightVector:dS,DownLeftTeeVector:pS,DownLeftVectorBar:hS,DownLeftVector:gS,DownRightTeeVector:mS,DownRightVectorBar:bS,DownRightVector:_S,DownTeeArrow:ES,DownTee:vS,drbkarow:yS,drcorn:xS,drcrop:kS,Dscr:wS,dscr:AS,DScy:CS,dscy:SS,dsol:TS,Dstrok:NS,dstrok:RS,dtdot:OS,dtri:IS,dtrif:LS,duarr:MS,duhar:DS,dwangle:FS,DZcy:PS,dzcy:BS,dzigrarr:qS,Eacute:US,eacute:zS,easter:$S,Ecaron:HS,ecaron:GS,Ecirc:WS,ecirc:KS,ecir:ZS,ecolon:jS,Ecy:VS,ecy:YS,eDDot:XS,Edot:QS,edot:JS,eDot:eT,ee:nT,efDot:tT,Efr:rT,efr:oT,eg:iT,Egrave:sT,egrave:cT,egs:aT,egsdot:lT,el:uT,Element:fT,elinters:dT,ell:pT,els:hT,elsdot:gT,Emacr:mT,emacr:bT,empty:_T,emptyset:ET,EmptySmallSquare:vT,emptyv:yT,EmptyVerySmallSquare:xT,emsp13:kT,emsp14:wT,emsp:AT,ENG:CT,eng:ST,ensp:TT,Eogon:NT,eogon:RT,Eopf:OT,eopf:IT,epar:LT,eparsl:MT,eplus:DT,epsi:FT,Epsilon:PT,epsilon:BT,epsiv:qT,eqcirc:UT,eqcolon:zT,eqsim:$T,eqslantgtr:HT,eqslantless:GT,Equal:WT,equals:KT,EqualTilde:ZT,equest:jT,Equilibrium:VT,equiv:YT,equivDD:XT,eqvparsl:QT,erarr:JT,erDot:eN,escr:nN,Escr:tN,esdot:rN,Esim:oN,esim:iN,Eta:sN,eta:cN,ETH:aN,eth:lN,Euml:uN,euml:fN,euro:dN,excl:pN,exist:hN,Exists:gN,expectation:mN,exponentiale:bN,ExponentialE:_N,fallingdotseq:EN,Fcy:vN,fcy:yN,female:xN,ffilig:kN,fflig:wN,ffllig:AN,Ffr:CN,ffr:SN,filig:TN,FilledSmallSquare:NN,FilledVerySmallSquare:RN,fjlig:ON,flat:IN,fllig:LN,fltns:MN,fnof:DN,Fopf:FN,fopf:PN,forall:BN,ForAll:qN,fork:UN,forkv:zN,Fouriertrf:$N,fpartint:HN,frac12:GN,frac13:WN,frac14:KN,frac15:ZN,frac16:jN,frac18:VN,frac23:YN,frac25:XN,frac34:QN,frac35:JN,frac38:eR,frac45:nR,frac56:tR,frac58:rR,frac78:oR,frasl:iR,frown:sR,fscr:cR,Fscr:aR,gacute:lR,Gamma:uR,gamma:fR,Gammad:dR,gammad:pR,gap:hR,Gbreve:gR,gbreve:mR,Gcedil:bR,Gcirc:_R,gcirc:ER,Gcy:vR,gcy:yR,Gdot:xR,gdot:kR,ge:wR,gE:AR,gEl:CR,gel:SR,geq:TR,geqq:NR,geqslant:RR,gescc:OR,ges:IR,gesdot:LR,gesdoto:MR,gesdotol:DR,gesl:FR,gesles:PR,Gfr:BR,gfr:qR,gg:UR,Gg:zR,ggg:$R,gimel:HR,GJcy:GR,gjcy:WR,gla:KR,gl:ZR,glE:jR,glj:VR,gnap:YR,gnapprox:XR,gne:QR,gnE:JR,gneq:eO,gneqq:nO,gnsim:tO,Gopf:rO,gopf:oO,grave:iO,GreaterEqual:sO,GreaterEqualLess:cO,GreaterFullEqual:aO,GreaterGreater:lO,GreaterLess:uO,GreaterSlantEqual:fO,GreaterTilde:dO,Gscr:pO,gscr:hO,gsim:gO,gsime:mO,gsiml:bO,gtcc:_O,gtcir:EO,gt:vO,GT:yO,Gt:xO,gtdot:kO,gtlPar:wO,gtquest:AO,gtrapprox:CO,gtrarr:SO,gtrdot:TO,gtreqless:NO,gtreqqless:RO,gtrless:OO,gtrsim:IO,gvertneqq:LO,gvnE:MO,Hacek:DO,hairsp:FO,half:PO,hamilt:BO,HARDcy:qO,hardcy:UO,harrcir:zO,harr:$O,hArr:HO,harrw:GO,Hat:WO,hbar:KO,Hcirc:ZO,hcirc:jO,hearts:VO,heartsuit:YO,hellip:XO,hercon:QO,hfr:JO,Hfr:eI,HilbertSpace:nI,hksearow:tI,hkswarow:rI,hoarr:oI,homtht:iI,hookleftarrow:sI,hookrightarrow:cI,hopf:aI,Hopf:lI,horbar:uI,HorizontalLine:fI,hscr:dI,Hscr:pI,hslash:hI,Hstrok:gI,hstrok:mI,HumpDownHump:bI,HumpEqual:_I,hybull:EI,hyphen:vI,Iacute:yI,iacute:xI,ic:kI,Icirc:wI,icirc:AI,Icy:CI,icy:SI,Idot:TI,IEcy:NI,iecy:RI,iexcl:OI,iff:II,ifr:LI,Ifr:MI,Igrave:DI,igrave:FI,ii:PI,iiiint:BI,iiint:qI,iinfin:UI,iiota:zI,IJlig:$I,ijlig:HI,Imacr:GI,imacr:WI,image:KI,ImaginaryI:ZI,imagline:jI,imagpart:VI,imath:YI,Im:XI,imof:QI,imped:JI,Implies:eL,incare:nL,in:"\u2208",infin:tL,infintie:rL,inodot:oL,intcal:iL,int:sL,Int:cL,integers:aL,Integral:lL,intercal:uL,Intersection:fL,intlarhk:dL,intprod:pL,InvisibleComma:hL,InvisibleTimes:gL,IOcy:mL,iocy:bL,Iogon:_L,iogon:EL,Iopf:vL,iopf:yL,Iota:xL,iota:kL,iprod:wL,iquest:AL,iscr:CL,Iscr:SL,isin:TL,isindot:NL,isinE:RL,isins:OL,isinsv:IL,isinv:LL,it:ML,Itilde:DL,itilde:FL,Iukcy:PL,iukcy:BL,Iuml:qL,iuml:UL,Jcirc:zL,jcirc:$L,Jcy:HL,jcy:GL,Jfr:WL,jfr:KL,jmath:ZL,Jopf:jL,jopf:VL,Jscr:YL,jscr:XL,Jsercy:QL,jsercy:JL,Jukcy:eM,jukcy:nM,Kappa:tM,kappa:rM,kappav:oM,Kcedil:iM,kcedil:sM,Kcy:cM,kcy:aM,Kfr:lM,kfr:uM,kgreen:fM,KHcy:dM,khcy:pM,KJcy:hM,kjcy:gM,Kopf:mM,kopf:bM,Kscr:_M,kscr:EM,lAarr:vM,Lacute:yM,lacute:xM,laemptyv:kM,lagran:wM,Lambda:AM,lambda:CM,lang:SM,Lang:TM,langd:NM,langle:RM,lap:OM,Laplacetrf:IM,laquo:LM,larrb:MM,larrbfs:DM,larr:FM,Larr:PM,lArr:BM,larrfs:qM,larrhk:UM,larrlp:zM,larrpl:$M,larrsim:HM,larrtl:GM,latail:WM,lAtail:KM,lat:ZM,late:jM,lates:VM,lbarr:YM,lBarr:XM,lbbrk:QM,lbrace:JM,lbrack:eD,lbrke:nD,lbrksld:tD,lbrkslu:rD,Lcaron:oD,lcaron:iD,Lcedil:sD,lcedil:cD,lceil:aD,lcub:lD,Lcy:uD,lcy:fD,ldca:dD,ldquo:pD,ldquor:hD,ldrdhar:gD,ldrushar:mD,ldsh:bD,le:_D,lE:ED,LeftAngleBracket:vD,LeftArrowBar:yD,leftarrow:xD,LeftArrow:kD,Leftarrow:wD,LeftArrowRightArrow:AD,leftarrowtail:CD,LeftCeiling:SD,LeftDoubleBracket:TD,LeftDownTeeVector:ND,LeftDownVectorBar:RD,LeftDownVector:OD,LeftFloor:ID,leftharpoondown:LD,leftharpoonup:MD,leftleftarrows:DD,leftrightarrow:FD,LeftRightArrow:PD,Leftrightarrow:BD,leftrightarrows:qD,leftrightharpoons:UD,leftrightsquigarrow:zD,LeftRightVector:$D,LeftTeeArrow:HD,LeftTee:GD,LeftTeeVector:WD,leftthreetimes:KD,LeftTriangleBar:ZD,LeftTriangle:jD,LeftTriangleEqual:VD,LeftUpDownVector:YD,LeftUpTeeVector:XD,LeftUpVectorBar:QD,LeftUpVector:JD,LeftVectorBar:e2,LeftVector:n2,lEg:t2,leg:r2,leq:o2,leqq:i2,leqslant:s2,lescc:c2,les:a2,lesdot:l2,lesdoto:u2,lesdotor:f2,lesg:d2,lesges:p2,lessapprox:h2,lessdot:g2,lesseqgtr:m2,lesseqqgtr:b2,LessEqualGreater:_2,LessFullEqual:E2,LessGreater:v2,lessgtr:y2,LessLess:x2,lesssim:k2,LessSlantEqual:w2,LessTilde:A2,lfisht:C2,lfloor:S2,Lfr:T2,lfr:N2,lg:R2,lgE:O2,lHar:I2,lhard:L2,lharu:M2,lharul:D2,lhblk:F2,LJcy:P2,ljcy:B2,llarr:q2,ll:U2,Ll:z2,llcorner:$2,Lleftarrow:H2,llhard:G2,lltri:W2,Lmidot:K2,lmidot:Z2,lmoustache:j2,lmoust:V2,lnap:Y2,lnapprox:X2,lne:Q2,lnE:J2,lneq:eF,lneqq:nF,lnsim:tF,loang:rF,loarr:oF,lobrk:iF,longleftarrow:sF,LongLeftArrow:cF,Longleftarrow:aF,longleftrightarrow:lF,LongLeftRightArrow:uF,Longleftrightarrow:fF,longmapsto:dF,longrightarrow:pF,LongRightArrow:hF,Longrightarrow:gF,looparrowleft:mF,looparrowright:bF,lopar:_F,Lopf:EF,lopf:vF,loplus:yF,lotimes:xF,lowast:kF,lowbar:wF,LowerLeftArrow:AF,LowerRightArrow:CF,loz:SF,lozenge:TF,lozf:NF,lpar:RF,lparlt:OF,lrarr:IF,lrcorner:LF,lrhar:MF,lrhard:DF,lrm:FF,lrtri:PF,lsaquo:BF,lscr:qF,Lscr:UF,lsh:zF,Lsh:$F,lsim:HF,lsime:GF,lsimg:WF,lsqb:KF,lsquo:ZF,lsquor:jF,Lstrok:VF,lstrok:YF,ltcc:XF,ltcir:QF,lt:JF,LT:eP,Lt:nP,ltdot:tP,lthree:rP,ltimes:oP,ltlarr:iP,ltquest:sP,ltri:cP,ltrie:aP,ltrif:lP,ltrPar:uP,lurdshar:fP,luruhar:dP,lvertneqq:pP,lvnE:hP,macr:gP,male:mP,malt:bP,maltese:_P,Map:"\u2905",map:EP,mapsto:vP,mapstodown:yP,mapstoleft:xP,mapstoup:kP,marker:wP,mcomma:AP,Mcy:CP,mcy:SP,mdash:TP,mDDot:NP,measuredangle:RP,MediumSpace:OP,Mellintrf:IP,Mfr:LP,mfr:MP,mho:DP,micro:FP,midast:PP,midcir:BP,mid:qP,middot:UP,minusb:zP,minus:$P,minusd:HP,minusdu:GP,MinusPlus:WP,mlcp:KP,mldr:ZP,mnplus:jP,models:VP,Mopf:YP,mopf:XP,mp:QP,mscr:JP,Mscr:eB,mstpos:nB,Mu:tB,mu:rB,multimap:oB,mumap:iB,nabla:sB,Nacute:cB,nacute:aB,nang:lB,nap:uB,napE:fB,napid:dB,napos:pB,napprox:hB,natural:gB,naturals:mB,natur:bB,nbsp:_B,nbump:EB,nbumpe:vB,ncap:yB,Ncaron:xB,ncaron:kB,Ncedil:wB,ncedil:AB,ncong:CB,ncongdot:SB,ncup:TB,Ncy:NB,ncy:RB,ndash:OB,nearhk:IB,nearr:LB,neArr:MB,nearrow:DB,ne:FB,nedot:PB,NegativeMediumSpace:BB,NegativeThickSpace:qB,NegativeThinSpace:UB,NegativeVeryThinSpace:zB,nequiv:$B,nesear:HB,nesim:GB,NestedGreaterGreater:WB,NestedLessLess:KB,NewLine:ZB,nexist:jB,nexists:VB,Nfr:YB,nfr:XB,ngE:QB,nge:JB,ngeq:eq,ngeqq:nq,ngeqslant:tq,nges:rq,nGg:oq,ngsim:iq,nGt:sq,ngt:cq,ngtr:aq,nGtv:lq,nharr:uq,nhArr:fq,nhpar:dq,ni:pq,nis:hq,nisd:gq,niv:mq,NJcy:bq,njcy:_q,nlarr:Eq,nlArr:vq,nldr:yq,nlE:xq,nle:kq,nleftarrow:wq,nLeftarrow:Aq,nleftrightarrow:Cq,nLeftrightarrow:Sq,nleq:Tq,nleqq:Nq,nleqslant:Rq,nles:Oq,nless:Iq,nLl:Lq,nlsim:Mq,nLt:Dq,nlt:Fq,nltri:Pq,nltrie:Bq,nLtv:qq,nmid:Uq,NoBreak:zq,NonBreakingSpace:$q,nopf:Hq,Nopf:Gq,Not:Wq,not:Kq,NotCongruent:Zq,NotCupCap:jq,NotDoubleVerticalBar:Vq,NotElement:Yq,NotEqual:Xq,NotEqualTilde:Qq,NotExists:Jq,NotGreater:eU,NotGreaterEqual:nU,NotGreaterFullEqual:tU,NotGreaterGreater:rU,NotGreaterLess:oU,NotGreaterSlantEqual:iU,NotGreaterTilde:sU,NotHumpDownHump:cU,NotHumpEqual:aU,notin:lU,notindot:uU,notinE:fU,notinva:dU,notinvb:pU,notinvc:hU,NotLeftTriangleBar:gU,NotLeftTriangle:mU,NotLeftTriangleEqual:bU,NotLess:_U,NotLessEqual:EU,NotLessGreater:vU,NotLessLess:yU,NotLessSlantEqual:xU,NotLessTilde:kU,NotNestedGreaterGreater:wU,NotNestedLessLess:AU,notni:CU,notniva:SU,notnivb:TU,notnivc:NU,NotPrecedes:RU,NotPrecedesEqual:OU,NotPrecedesSlantEqual:IU,NotReverseElement:LU,NotRightTriangleBar:MU,NotRightTriangle:DU,NotRightTriangleEqual:FU,NotSquareSubset:PU,NotSquareSubsetEqual:BU,NotSquareSuperset:qU,NotSquareSupersetEqual:UU,NotSubset:zU,NotSubsetEqual:$U,NotSucceeds:HU,NotSucceedsEqual:GU,NotSucceedsSlantEqual:WU,NotSucceedsTilde:KU,NotSuperset:ZU,NotSupersetEqual:jU,NotTilde:VU,NotTildeEqual:YU,NotTildeFullEqual:XU,NotTildeTilde:QU,NotVerticalBar:JU,nparallel:e3,npar:n3,nparsl:t3,npart:r3,npolint:o3,npr:i3,nprcue:s3,nprec:c3,npreceq:a3,npre:l3,nrarrc:u3,nrarr:f3,nrArr:d3,nrarrw:p3,nrightarrow:h3,nRightarrow:g3,nrtri:m3,nrtrie:b3,nsc:_3,nsccue:E3,nsce:v3,Nscr:y3,nscr:x3,nshortmid:k3,nshortparallel:w3,nsim:A3,nsime:C3,nsimeq:S3,nsmid:T3,nspar:N3,nsqsube:R3,nsqsupe:O3,nsub:I3,nsubE:L3,nsube:M3,nsubset:D3,nsubseteq:F3,nsubseteqq:P3,nsucc:B3,nsucceq:q3,nsup:U3,nsupE:z3,nsupe:$3,nsupset:H3,nsupseteq:G3,nsupseteqq:W3,ntgl:K3,Ntilde:Z3,ntilde:j3,ntlg:V3,ntriangleleft:Y3,ntrianglelefteq:X3,ntriangleright:Q3,ntrianglerighteq:J3,Nu:ez,nu:nz,num:tz,numero:rz,numsp:oz,nvap:iz,nvdash:sz,nvDash:cz,nVdash:az,nVDash:lz,nvge:uz,nvgt:fz,nvHarr:dz,nvinfin:pz,nvlArr:hz,nvle:gz,nvlt:mz,nvltrie:bz,nvrArr:_z,nvrtrie:Ez,nvsim:vz,nwarhk:yz,nwarr:xz,nwArr:kz,nwarrow:wz,nwnear:Az,Oacute:Cz,oacute:Sz,oast:Tz,Ocirc:Nz,ocirc:Rz,ocir:Oz,Ocy:Iz,ocy:Lz,odash:Mz,Odblac:Dz,odblac:Fz,odiv:Pz,odot:Bz,odsold:qz,OElig:Uz,oelig:zz,ofcir:$z,Ofr:Hz,ofr:Gz,ogon:Wz,Ograve:Kz,ograve:Zz,ogt:jz,ohbar:Vz,ohm:Yz,oint:Xz,olarr:Qz,olcir:Jz,olcross:e$,oline:n$,olt:t$,Omacr:r$,omacr:o$,Omega:i$,omega:s$,Omicron:c$,omicron:a$,omid:l$,ominus:u$,Oopf:f$,oopf:d$,opar:p$,OpenCurlyDoubleQuote:h$,OpenCurlyQuote:g$,operp:m$,oplus:b$,orarr:_$,Or:E$,or:v$,ord:y$,order:x$,orderof:k$,ordf:w$,ordm:A$,origof:C$,oror:S$,orslope:T$,orv:N$,oS:R$,Oscr:O$,oscr:I$,Oslash:L$,oslash:M$,osol:D$,Otilde:F$,otilde:P$,otimesas:B$,Otimes:q$,otimes:U$,Ouml:z$,ouml:$$,ovbar:H$,OverBar:G$,OverBrace:W$,OverBracket:K$,OverParenthesis:Z$,para:j$,parallel:V$,par:Y$,parsim:X$,parsl:Q$,part:J$,PartialD:eH,Pcy:nH,pcy:tH,percnt:rH,period:oH,permil:iH,perp:sH,pertenk:cH,Pfr:aH,pfr:lH,Phi:uH,phi:fH,phiv:dH,phmmat:pH,phone:hH,Pi:gH,pi:mH,pitchfork:bH,piv:_H,planck:EH,planckh:vH,plankv:yH,plusacir:xH,plusb:kH,pluscir:wH,plus:AH,plusdo:CH,plusdu:SH,pluse:TH,PlusMinus:NH,plusmn:RH,plussim:OH,plustwo:IH,pm:LH,Poincareplane:MH,pointint:DH,popf:FH,Popf:PH,pound:BH,prap:qH,Pr:UH,pr:zH,prcue:$H,precapprox:HH,prec:GH,preccurlyeq:WH,Precedes:KH,PrecedesEqual:ZH,PrecedesSlantEqual:jH,PrecedesTilde:VH,preceq:YH,precnapprox:XH,precneqq:QH,precnsim:JH,pre:e6,prE:n6,precsim:t6,prime:r6,Prime:o6,primes:i6,prnap:s6,prnE:c6,prnsim:a6,prod:l6,Product:u6,profalar:f6,profline:d6,profsurf:p6,prop:h6,Proportional:g6,Proportion:m6,propto:b6,prsim:_6,prurel:E6,Pscr:v6,pscr:y6,Psi:x6,psi:k6,puncsp:w6,Qfr:A6,qfr:C6,qint:S6,qopf:T6,Qopf:N6,qprime:R6,Qscr:O6,qscr:I6,quaternions:L6,quatint:M6,quest:D6,questeq:F6,quot:P6,QUOT:B6,rAarr:q6,race:U6,Racute:z6,racute:$6,radic:H6,raemptyv:G6,rang:W6,Rang:K6,rangd:Z6,range:j6,rangle:V6,raquo:Y6,rarrap:X6,rarrb:Q6,rarrbfs:J6,rarrc:e4,rarr:n4,Rarr:t4,rArr:r4,rarrfs:o4,rarrhk:i4,rarrlp:s4,rarrpl:c4,rarrsim:a4,Rarrtl:l4,rarrtl:u4,rarrw:f4,ratail:d4,rAtail:p4,ratio:h4,rationals:g4,rbarr:m4,rBarr:b4,RBarr:_4,rbbrk:E4,rbrace:v4,rbrack:y4,rbrke:x4,rbrksld:k4,rbrkslu:w4,Rcaron:A4,rcaron:C4,Rcedil:S4,rcedil:T4,rceil:N4,rcub:R4,Rcy:O4,rcy:I4,rdca:L4,rdldhar:M4,rdquo:D4,rdquor:F4,rdsh:P4,real:B4,realine:q4,realpart:U4,reals:z4,Re:$4,rect:H4,reg:G4,REG:W4,ReverseElement:K4,ReverseEquilibrium:Z4,ReverseUpEquilibrium:j4,rfisht:V4,rfloor:Y4,rfr:X4,Rfr:Q4,rHar:J4,rhard:eG,rharu:nG,rharul:tG,Rho:rG,rho:oG,rhov:iG,RightAngleBracket:sG,RightArrowBar:cG,rightarrow:aG,RightArrow:lG,Rightarrow:uG,RightArrowLeftArrow:fG,rightarrowtail:dG,RightCeiling:pG,RightDoubleBracket:hG,RightDownTeeVector:gG,RightDownVectorBar:mG,RightDownVector:bG,RightFloor:_G,rightharpoondown:EG,rightharpoonup:vG,rightleftarrows:yG,rightleftharpoons:xG,rightrightarrows:kG,rightsquigarrow:wG,RightTeeArrow:AG,RightTee:CG,RightTeeVector:SG,rightthreetimes:TG,RightTriangleBar:NG,RightTriangle:RG,RightTriangleEqual:OG,RightUpDownVector:IG,RightUpTeeVector:LG,RightUpVectorBar:MG,RightUpVector:DG,RightVectorBar:FG,RightVector:PG,ring:BG,risingdotseq:qG,rlarr:UG,rlhar:zG,rlm:$G,rmoustache:HG,rmoust:GG,rnmid:WG,roang:KG,roarr:ZG,robrk:jG,ropar:VG,ropf:YG,Ropf:XG,roplus:QG,rotimes:JG,RoundImplies:e9,rpar:n9,rpargt:t9,rppolint:r9,rrarr:o9,Rrightarrow:i9,rsaquo:s9,rscr:c9,Rscr:a9,rsh:l9,Rsh:u9,rsqb:f9,rsquo:d9,rsquor:p9,rthree:h9,rtimes:g9,rtri:m9,rtrie:b9,rtrif:_9,rtriltri:E9,RuleDelayed:v9,ruluhar:y9,rx:x9,Sacute:k9,sacute:w9,sbquo:A9,scap:C9,Scaron:S9,scaron:T9,Sc:N9,sc:R9,sccue:O9,sce:I9,scE:L9,Scedil:M9,scedil:D9,Scirc:F9,scirc:P9,scnap:B9,scnE:q9,scnsim:U9,scpolint:z9,scsim:$9,Scy:H9,scy:G9,sdotb:W9,sdot:K9,sdote:Z9,searhk:j9,searr:V9,seArr:Y9,searrow:X9,sect:Q9,semi:J9,seswar:e5,setminus:n5,setmn:t5,sext:r5,Sfr:o5,sfr:i5,sfrown:s5,sharp:c5,SHCHcy:a5,shchcy:l5,SHcy:u5,shcy:f5,ShortDownArrow:d5,ShortLeftArrow:p5,shortmid:h5,shortparallel:g5,ShortRightArrow:m5,ShortUpArrow:b5,shy:_5,Sigma:E5,sigma:v5,sigmaf:y5,sigmav:x5,sim:k5,simdot:w5,sime:A5,simeq:C5,simg:S5,simgE:T5,siml:N5,simlE:R5,simne:O5,simplus:I5,simrarr:L5,slarr:M5,SmallCircle:D5,smallsetminus:F5,smashp:P5,smeparsl:B5,smid:q5,smile:U5,smt:z5,smte:$5,smtes:H5,SOFTcy:G5,softcy:W5,solbar:K5,solb:Z5,sol:j5,Sopf:V5,sopf:Y5,spades:X5,spadesuit:Q5,spar:J5,sqcap:e8,sqcaps:n8,sqcup:t8,sqcups:r8,Sqrt:o8,sqsub:i8,sqsube:s8,sqsubset:c8,sqsubseteq:a8,sqsup:l8,sqsupe:u8,sqsupset:f8,sqsupseteq:d8,square:p8,Square:h8,SquareIntersection:g8,SquareSubset:m8,SquareSubsetEqual:b8,SquareSuperset:_8,SquareSupersetEqual:E8,SquareUnion:v8,squarf:y8,squ:x8,squf:k8,srarr:w8,Sscr:A8,sscr:C8,ssetmn:S8,ssmile:T8,sstarf:N8,Star:R8,star:O8,starf:I8,straightepsilon:L8,straightphi:M8,strns:D8,sub:F8,Sub:P8,subdot:B8,subE:q8,sube:U8,subedot:z8,submult:$8,subnE:H8,subne:G8,subplus:W8,subrarr:K8,subset:Z8,Subset:j8,subseteq:V8,subseteqq:Y8,SubsetEqual:X8,subsetneq:Q8,subsetneqq:J8,subsim:eW,subsub:nW,subsup:tW,succapprox:rW,succ:oW,succcurlyeq:iW,Succeeds:sW,SucceedsEqual:cW,SucceedsSlantEqual:aW,SucceedsTilde:lW,succeq:uW,succnapprox:fW,succneqq:dW,succnsim:pW,succsim:hW,SuchThat:gW,sum:mW,Sum:bW,sung:_W,sup1:EW,sup2:vW,sup3:yW,sup:xW,Sup:kW,supdot:wW,supdsub:AW,supE:CW,supe:SW,supedot:TW,Superset:NW,SupersetEqual:RW,suphsol:OW,suphsub:IW,suplarr:LW,supmult:MW,supnE:DW,supne:FW,supplus:PW,supset:BW,Supset:qW,supseteq:UW,supseteqq:zW,supsetneq:$W,supsetneqq:HW,supsim:GW,supsub:WW,supsup:KW,swarhk:ZW,swarr:jW,swArr:VW,swarrow:YW,swnwar:XW,szlig:QW,Tab:JW,target:eK,Tau:nK,tau:tK,tbrk:rK,Tcaron:oK,tcaron:iK,Tcedil:sK,tcedil:cK,Tcy:aK,tcy:lK,tdot:uK,telrec:fK,Tfr:dK,tfr:pK,there4:hK,therefore:gK,Therefore:mK,Theta:bK,theta:_K,thetasym:EK,thetav:vK,thickapprox:yK,thicksim:xK,ThickSpace:kK,ThinSpace:wK,thinsp:AK,thkap:CK,thksim:SK,THORN:TK,thorn:NK,tilde:RK,Tilde:OK,TildeEqual:IK,TildeFullEqual:LK,TildeTilde:MK,timesbar:DK,timesb:FK,times:PK,timesd:BK,tint:qK,toea:UK,topbot:zK,topcir:$K,top:HK,Topf:GK,topf:WK,topfork:KK,tosa:ZK,tprime:jK,trade:VK,TRADE:YK,triangle:XK,triangledown:QK,triangleleft:JK,trianglelefteq:eZ,triangleq:nZ,triangleright:tZ,trianglerighteq:rZ,tridot:oZ,trie:iZ,triminus:sZ,TripleDot:cZ,triplus:aZ,trisb:lZ,tritime:uZ,trpezium:fZ,Tscr:dZ,tscr:pZ,TScy:hZ,tscy:gZ,TSHcy:mZ,tshcy:bZ,Tstrok:_Z,tstrok:EZ,twixt:vZ,twoheadleftarrow:yZ,twoheadrightarrow:xZ,Uacute:kZ,uacute:wZ,uarr:AZ,Uarr:CZ,uArr:SZ,Uarrocir:TZ,Ubrcy:NZ,ubrcy:RZ,Ubreve:OZ,ubreve:IZ,Ucirc:LZ,ucirc:MZ,Ucy:DZ,ucy:FZ,udarr:PZ,Udblac:BZ,udblac:qZ,udhar:UZ,ufisht:zZ,Ufr:$Z,ufr:HZ,Ugrave:GZ,ugrave:WZ,uHar:KZ,uharl:ZZ,uharr:jZ,uhblk:VZ,ulcorn:YZ,ulcorner:XZ,ulcrop:QZ,ultri:JZ,Umacr:ej,umacr:nj,uml:tj,UnderBar:rj,UnderBrace:oj,UnderBracket:ij,UnderParenthesis:sj,Union:cj,UnionPlus:aj,Uogon:lj,uogon:uj,Uopf:fj,uopf:dj,UpArrowBar:pj,uparrow:hj,UpArrow:gj,Uparrow:mj,UpArrowDownArrow:bj,updownarrow:_j,UpDownArrow:Ej,Updownarrow:vj,UpEquilibrium:yj,upharpoonleft:xj,upharpoonright:kj,uplus:wj,UpperLeftArrow:Aj,UpperRightArrow:Cj,upsi:Sj,Upsi:Tj,upsih:Nj,Upsilon:Rj,upsilon:Oj,UpTeeArrow:Ij,UpTee:Lj,upuparrows:Mj,urcorn:Dj,urcorner:Fj,urcrop:Pj,Uring:Bj,uring:qj,urtri:Uj,Uscr:zj,uscr:$j,utdot:Hj,Utilde:Gj,utilde:Wj,utri:Kj,utrif:Zj,uuarr:jj,Uuml:Vj,uuml:Yj,uwangle:Xj,vangrt:Qj,varepsilon:Jj,varkappa:eV,varnothing:nV,varphi:tV,varpi:rV,varpropto:oV,varr:iV,vArr:sV,varrho:cV,varsigma:aV,varsubsetneq:lV,varsubsetneqq:uV,varsupsetneq:fV,varsupsetneqq:dV,vartheta:pV,vartriangleleft:hV,vartriangleright:gV,vBar:mV,Vbar:bV,vBarv:_V,Vcy:EV,vcy:vV,vdash:yV,vDash:xV,Vdash:kV,VDash:wV,Vdashl:AV,veebar:CV,vee:SV,Vee:TV,veeeq:NV,vellip:RV,verbar:OV,Verbar:IV,vert:LV,Vert:MV,VerticalBar:DV,VerticalLine:FV,VerticalSeparator:PV,VerticalTilde:BV,VeryThinSpace:qV,Vfr:UV,vfr:zV,vltri:$V,vnsub:HV,vnsup:GV,Vopf:WV,vopf:KV,vprop:ZV,vrtri:jV,Vscr:VV,vscr:YV,vsubnE:XV,vsubne:QV,vsupnE:JV,vsupne:eY,Vvdash:nY,vzigzag:tY,Wcirc:rY,wcirc:oY,wedbar:iY,wedge:sY,Wedge:cY,wedgeq:aY,weierp:lY,Wfr:uY,wfr:fY,Wopf:dY,wopf:pY,wp:hY,wr:gY,wreath:mY,Wscr:bY,wscr:_Y,xcap:EY,xcirc:vY,xcup:yY,xdtri:xY,Xfr:kY,xfr:wY,xharr:AY,xhArr:CY,Xi:SY,xi:TY,xlarr:NY,xlArr:RY,xmap:OY,xnis:IY,xodot:LY,Xopf:MY,xopf:DY,xoplus:FY,xotime:PY,xrarr:BY,xrArr:qY,Xscr:UY,xscr:zY,xsqcup:$Y,xuplus:HY,xutri:GY,xvee:WY,xwedge:KY,Yacute:ZY,yacute:jY,YAcy:VY,yacy:YY,Ycirc:XY,ycirc:QY,Ycy:JY,ycy:e7,yen:n7,Yfr:t7,yfr:r7,YIcy:o7,yicy:i7,Yopf:s7,yopf:c7,Yscr:a7,yscr:l7,YUcy:u7,yucy:f7,yuml:d7,Yuml:p7,Zacute:h7,zacute:g7,Zcaron:m7,zcaron:b7,Zcy:_7,zcy:E7,Zdot:v7,zdot:y7,zeetrf:x7,ZeroWidthSpace:k7,Zeta:w7,zeta:A7,zfr:C7,Zfr:S7,ZHcy:T7,zhcy:N7,zigrarr:R7,zopf:O7,Zopf:I7,Zscr:L7,zscr:M7,zwj:D7,zwnj:F7};(function(e){e.exports=P7})(Ps);var Bs=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Ct={},_a={};function B7(e){var n,t,r=_a[e];if(r)return r;for(r=_a[e]=[],n=0;n<128;n++)t=String.fromCharCode(n),/^[0-9a-z]$/i.test(t)?r.push(t):r.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2));for(n=0;n<e.length;n++)r[e.charCodeAt(n)]=e[n];return r}function co(e,n,t){var r,o,i,s,c,a="";for(typeof n!="string"&&(t=n,n=co.defaultChars),typeof t>"u"&&(t=!0),c=B7(n),r=0,o=e.length;r<o;r++){if(i=e.charCodeAt(r),t&&i===37&&r+2<o&&/^[0-9a-f]{2}$/i.test(e.slice(r+1,r+3))){a+=e.slice(r,r+3),r+=2;continue}if(i<128){a+=c[i];continue}if(i>=55296&&i<=57343){if(i>=55296&&i<=56319&&r+1<o&&(s=e.charCodeAt(r+1),s>=56320&&s<=57343)){a+=encodeURIComponent(e[r]+e[r+1]),r++;continue}a+="%EF%BF%BD";continue}a+=encodeURIComponent(e[r])}return a}co.defaultChars=";/?:@&=+$,-_.!~*'()#";co.componentChars="-_.!~*'()";var q7=co,Ea={};function U7(e){var n,t,r=Ea[e];if(r)return r;for(r=Ea[e]=[],n=0;n<128;n++)t=String.fromCharCode(n),r.push(t);for(n=0;n<e.length;n++)t=e.charCodeAt(n),r[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return r}function ao(e,n){var t;return typeof n!="string"&&(n=ao.defaultChars),t=U7(n),e.replace(/(%[a-f0-9]{2})+/gi,function(r){var o,i,s,c,a,l,u,f="";for(o=0,i=r.length;o<i;o+=3){if(s=parseInt(r.slice(o+1,o+3),16),s<128){f+=t[s];continue}if((s&224)===192&&o+3<i&&(c=parseInt(r.slice(o+4,o+6),16),(c&192)===128)){u=s<<6&1984|c&63,u<128?f+="\uFFFD\uFFFD":f+=String.fromCharCode(u),o+=3;continue}if((s&240)===224&&o+6<i&&(c=parseInt(r.slice(o+4,o+6),16),a=parseInt(r.slice(o+7,o+9),16),(c&192)===128&&(a&192)===128)){u=s<<12&61440|c<<6&4032|a&63,u<2048||u>=55296&&u<=57343?f+="\uFFFD\uFFFD\uFFFD":f+=String.fromCharCode(u),o+=6;continue}if((s&248)===240&&o+9<i&&(c=parseInt(r.slice(o+4,o+6),16),a=parseInt(r.slice(o+7,o+9),16),l=parseInt(r.slice(o+10,o+12),16),(c&192)===128&&(a&192)===128&&(l&192)===128)){u=s<<18&1835008|c<<12&258048|a<<6&4032|l&63,u<65536||u>1114111?f+="\uFFFD\uFFFD\uFFFD\uFFFD":(u-=65536,f+=String.fromCharCode(55296+(u>>10),56320+(u&1023))),o+=9;continue}f+="\uFFFD"}return f})}ao.defaultChars=";/?:@&=+$,#";ao.componentChars="";var z7=ao,$7=function(n){var t="";return t+=n.protocol||"",t+=n.slashes?"//":"",t+=n.auth?n.auth+"@":"",n.hostname&&n.hostname.indexOf(":")!==-1?t+="["+n.hostname+"]":t+=n.hostname||"",t+=n.port?":"+n.port:"",t+=n.pathname||"",t+=n.search||"",t+=n.hash||"",t};function Br(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var H7=/^([a-z0-9.+-]+:)/i,G7=/:[0-9]*$/,W7=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,K7=["<",">",'"',"`"," ","\r",`
`,"	"],Z7=["{","}","|","\\","^","`"].concat(K7),j7=["'"].concat(Z7),va=["%","/","?",";","#"].concat(j7),ya=["/","?","#"],V7=255,xa=/^[+a-z0-9A-Z_-]{0,63}$/,Y7=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,ka={javascript:!0,"javascript:":!0},wa={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function X7(e,n){if(e&&e instanceof Br)return e;var t=new Br;return t.parse(e,n),t}Br.prototype.parse=function(e,n){var t,r,o,i,s,c=e;if(c=c.trim(),!n&&e.split("#").length===1){var a=W7.exec(c);if(a)return this.pathname=a[1],a[2]&&(this.search=a[2]),this}var l=H7.exec(c);if(l&&(l=l[0],o=l.toLowerCase(),this.protocol=l,c=c.substr(l.length)),(n||l||c.match(/^\/\/[^@\/]+@[^@\/]+/))&&(s=c.substr(0,2)==="//",s&&!(l&&ka[l])&&(c=c.substr(2),this.slashes=!0)),!ka[l]&&(s||l&&!wa[l])){var u=-1;for(t=0;t<ya.length;t++)i=c.indexOf(ya[t]),i!==-1&&(u===-1||i<u)&&(u=i);var f,d;for(u===-1?d=c.lastIndexOf("@"):d=c.lastIndexOf("@",u),d!==-1&&(f=c.slice(0,d),c=c.slice(d+1),this.auth=f),u=-1,t=0;t<va.length;t++)i=c.indexOf(va[t]),i!==-1&&(u===-1||i<u)&&(u=i);u===-1&&(u=c.length),c[u-1]===":"&&u--;var p=c.slice(0,u);c=c.slice(u),this.parseHost(p),this.hostname=this.hostname||"";var g=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!g){var m=this.hostname.split(/\./);for(t=0,r=m.length;t<r;t++){var E=m[t];if(!!E&&!E.match(xa)){for(var _="",v=0,y=E.length;v<y;v++)E.charCodeAt(v)>127?_+="x":_+=E[v];if(!_.match(xa)){var C=m.slice(0,t),P=m.slice(t+1),N=E.match(Y7);N&&(C.push(N[1]),P.unshift(N[2])),P.length&&(c=P.join(".")+c),this.hostname=C.join(".");break}}}}this.hostname.length>V7&&(this.hostname=""),g&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var G=c.indexOf("#");G!==-1&&(this.hash=c.substr(G),c=c.slice(0,G));var R=c.indexOf("?");return R!==-1&&(this.search=c.substr(R),c=c.slice(0,R)),c&&(this.pathname=c),wa[o]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Br.prototype.parseHost=function(e){var n=G7.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};var Q7=X7;Ct.encode=q7;Ct.decode=z7;Ct.format=$7;Ct.parse=Q7;var qn={},Ro,Aa;function id(){return Aa||(Aa=1,Ro=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/),Ro}var Oo,Ca;function sd(){return Ca||(Ca=1,Oo=/[\0-\x1F\x7F-\x9F]/),Oo}var Io,Sa;function J7(){return Sa||(Sa=1,Io=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/),Io}var Lo,Ta;function cd(){return Ta||(Ta=1,Lo=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/),Lo}var Na;function eX(){return Na||(Na=1,qn.Any=id(),qn.Cc=sd(),qn.Cf=J7(),qn.P=Bs,qn.Z=cd()),qn}(function(e){function n(I){return Object.prototype.toString.call(I)}function t(I){return n(I)==="[object String]"}var r=Object.prototype.hasOwnProperty;function o(I,re){return r.call(I,re)}function i(I){var re=Array.prototype.slice.call(arguments,1);return re.forEach(function(x){if(!!x){if(typeof x!="object")throw new TypeError(x+"must be object");Object.keys(x).forEach(function(B){I[B]=x[B]})}}),I}function s(I,re,x){return[].concat(I.slice(0,re),x,I.slice(re+1))}function c(I){return!(I>=55296&&I<=57343||I>=64976&&I<=65007||(I&65535)===65535||(I&65535)===65534||I>=0&&I<=8||I===11||I>=14&&I<=31||I>=127&&I<=159||I>1114111)}function a(I){if(I>65535){I-=65536;var re=55296+(I>>10),x=56320+(I&1023);return String.fromCharCode(re,x)}return String.fromCharCode(I)}var l=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,u=/&([a-z#][a-z0-9]{1,31});/gi,f=new RegExp(l.source+"|"+u.source,"gi"),d=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,p=Ps.exports;function g(I,re){var x=0;return o(p,re)?p[re]:re.charCodeAt(0)===35&&d.test(re)&&(x=re[1].toLowerCase()==="x"?parseInt(re.slice(2),16):parseInt(re.slice(1),10),c(x))?a(x):I}function m(I){return I.indexOf("\\")<0?I:I.replace(l,"$1")}function E(I){return I.indexOf("\\")<0&&I.indexOf("&")<0?I:I.replace(f,function(re,x,B){return x||g(re,B)})}var _=/[&<>"]/,v=/[&<>"]/g,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function C(I){return y[I]}function P(I){return _.test(I)?I.replace(v,C):I}var N=/[.?*+^$[\]\\(){}|-]/g;function G(I){return I.replace(N,"\\$&")}function R(I){switch(I){case 9:case 32:return!0}return!1}function Y(I){if(I>=8192&&I<=8202)return!0;switch(I){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var z=Bs;function j(I){return z.test(I)}function ae(I){switch(I){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function ue(I){return I=I.trim().replace(/\s+/g," "),"\u1E9E".toLowerCase()==="\u1E7E"&&(I=I.replace(/ẞ/g,"\xDF")),I.toLowerCase().toUpperCase()}e.lib={},e.lib.mdurl=Ct,e.lib.ucmicro=eX(),e.assign=i,e.isString=t,e.has=o,e.unescapeMd=m,e.unescapeAll=E,e.isValidEntityCode=c,e.fromCodePoint=a,e.escapeHtml=P,e.arrayReplaceAt=s,e.isSpace=R,e.isWhiteSpace=Y,e.isMdAsciiPunct=ae,e.isPunctChar=j,e.escapeRE=G,e.normalizeReference=ue})(ge);var lo={},nX=function(n,t,r){var o,i,s,c,a=-1,l=n.posMax,u=n.pos;for(n.pos=t+1,o=1;n.pos<l;){if(s=n.src.charCodeAt(n.pos),s===93&&(o--,o===0)){i=!0;break}if(c=n.pos,n.md.inline.skipToken(n),s===91){if(c===n.pos-1)o++;else if(r)return n.pos=u,-1}}return i&&(a=n.pos),n.pos=u,a},Ra=ge.unescapeAll,tX=function(n,t,r){var o,i,s=0,c=t,a={ok:!1,pos:0,lines:0,str:""};if(n.charCodeAt(t)===60){for(t++;t<r;){if(o=n.charCodeAt(t),o===10||o===60)return a;if(o===62)return a.pos=t+1,a.str=Ra(n.slice(c+1,t)),a.ok=!0,a;if(o===92&&t+1<r){t+=2;continue}t++}return a}for(i=0;t<r&&(o=n.charCodeAt(t),!(o===32||o<32||o===127));){if(o===92&&t+1<r){if(n.charCodeAt(t+1)===32)break;t+=2;continue}if(o===40&&(i++,i>32))return a;if(o===41){if(i===0)break;i--}t++}return c===t||i!==0||(a.str=Ra(n.slice(c,t)),a.lines=s,a.pos=t,a.ok=!0),a},rX=ge.unescapeAll,oX=function(n,t,r){var o,i,s=0,c=t,a={ok:!1,pos:0,lines:0,str:""};if(t>=r||(i=n.charCodeAt(t),i!==34&&i!==39&&i!==40))return a;for(t++,i===40&&(i=41);t<r;){if(o=n.charCodeAt(t),o===i)return a.pos=t+1,a.lines=s,a.str=rX(n.slice(c+1,t)),a.ok=!0,a;if(o===40&&i===41)return a;o===10?s++:o===92&&t+1<r&&(t++,n.charCodeAt(t)===10&&s++),t++}return a};lo.parseLinkLabel=nX;lo.parseLinkDestination=tX;lo.parseLinkTitle=oX;var iX=ge.assign,sX=ge.unescapeAll,Jn=ge.escapeHtml,bn={};bn.code_inline=function(e,n,t,r,o){var i=e[n];return"<code"+o.renderAttrs(i)+">"+Jn(e[n].content)+"</code>"};bn.code_block=function(e,n,t,r,o){var i=e[n];return"<pre"+o.renderAttrs(i)+"><code>"+Jn(e[n].content)+`</code></pre>
`};bn.fence=function(e,n,t,r,o){var i=e[n],s=i.info?sX(i.info).trim():"",c="",a="",l,u,f,d,p;return s&&(f=s.split(/(\s+)/g),c=f[0],a=f.slice(2).join("")),t.highlight?l=t.highlight(i.content,c,a)||Jn(i.content):l=Jn(i.content),l.indexOf("<pre")===0?l+`
`:s?(u=i.attrIndex("class"),d=i.attrs?i.attrs.slice():[],u<0?d.push(["class",t.langPrefix+c]):(d[u]=d[u].slice(),d[u][1]+=" "+t.langPrefix+c),p={attrs:d},"<pre><code"+o.renderAttrs(p)+">"+l+`</code></pre>
`):"<pre><code"+o.renderAttrs(i)+">"+l+`</code></pre>
`};bn.image=function(e,n,t,r,o){var i=e[n];return i.attrs[i.attrIndex("alt")][1]=o.renderInlineAsText(i.children,t,r),o.renderToken(e,n,t)};bn.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};bn.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};bn.text=function(e,n){return Jn(e[n].content)};bn.html_block=function(e,n){return e[n].content};bn.html_inline=function(e,n){return e[n].content};function St(){this.rules=iX({},bn)}St.prototype.renderAttrs=function(n){var t,r,o;if(!n.attrs)return"";for(o="",t=0,r=n.attrs.length;t<r;t++)o+=" "+Jn(n.attrs[t][0])+'="'+Jn(n.attrs[t][1])+'"';return o};St.prototype.renderToken=function(n,t,r){var o,i="",s=!1,c=n[t];return c.hidden?"":(c.block&&c.nesting!==-1&&t&&n[t-1].hidden&&(i+=`
`),i+=(c.nesting===-1?"</":"<")+c.tag,i+=this.renderAttrs(c),c.nesting===0&&r.xhtmlOut&&(i+=" /"),c.block&&(s=!0,c.nesting===1&&t+1<n.length&&(o=n[t+1],(o.type==="inline"||o.hidden||o.nesting===-1&&o.tag===c.tag)&&(s=!1))),i+=s?`>
`:">",i)};St.prototype.renderInline=function(e,n,t){for(var r,o="",i=this.rules,s=0,c=e.length;s<c;s++)r=e[s].type,typeof i[r]<"u"?o+=i[r](e,s,n,t,this):o+=this.renderToken(e,s,n);return o};St.prototype.renderInlineAsText=function(e,n,t){for(var r="",o=0,i=e.length;o<i;o++)e[o].type==="text"?r+=e[o].content:e[o].type==="image"?r+=this.renderInlineAsText(e[o].children,n,t):e[o].type==="softbreak"&&(r+=`
`);return r};St.prototype.render=function(e,n,t){var r,o,i,s="",c=this.rules;for(r=0,o=e.length;r<o;r++)i=e[r].type,i==="inline"?s+=this.renderInline(e[r].children,n,t):typeof c[i]<"u"?s+=c[e[r].type](e,r,n,t,this):s+=this.renderToken(e,r,n,t);return s};var cX=St;function cn(){this.__rules__=[],this.__cache__=null}cn.prototype.__find__=function(e){for(var n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};cn.prototype.__compile__=function(){var e=this,n=[""];e.__rules__.forEach(function(t){!t.enabled||t.alt.forEach(function(r){n.indexOf(r)<0&&n.push(r)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){!r.enabled||t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn)})})};cn.prototype.at=function(e,n,t){var r=this.__find__(e),o=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=n,this.__rules__[r].alt=o.alt||[],this.__cache__=null};cn.prototype.before=function(e,n,t,r){var o=this.__find__(e),i=r||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};cn.prototype.after=function(e,n,t,r){var o=this.__find__(e),i=r||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o+1,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};cn.prototype.push=function(e,n,t){var r=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};cn.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(r){var o=this.__find__(r);if(o<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!0,t.push(r)},this),this.__cache__=null,t};cn.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};cn.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(r){var o=this.__find__(r);if(o<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!1,t.push(r)},this),this.__cache__=null,t};cn.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};var qs=cn,aX=/\r\n?|\n/g,lX=/\0/g,uX=function(n){var t;t=n.src.replace(aX,`
`),t=t.replace(lX,"\uFFFD"),n.src=t},fX=function(n){var t;n.inlineMode?(t=new n.Token("inline","",0),t.content=n.src,t.map=[0,1],t.children=[],n.tokens.push(t)):n.md.block.parse(n.src,n.md,n.env,n.tokens)},dX=function(n){var t=n.tokens,r,o,i;for(o=0,i=t.length;o<i;o++)r=t[o],r.type==="inline"&&n.md.inline.parse(r.content,n.md,n.env,r.children)},pX=ge.arrayReplaceAt;function hX(e){return/^<a[>\s]/i.test(e)}function gX(e){return/^<\/a\s*>/i.test(e)}var mX=function(n){var t,r,o,i,s,c,a,l,u,f,d,p,g,m,E,_,v=n.tokens,y;if(!!n.md.options.linkify){for(r=0,o=v.length;r<o;r++)if(!(v[r].type!=="inline"||!n.md.linkify.pretest(v[r].content)))for(i=v[r].children,g=0,t=i.length-1;t>=0;t--){if(c=i[t],c.type==="link_close"){for(t--;i[t].level!==c.level&&i[t].type!=="link_open";)t--;continue}if(c.type==="html_inline"&&(hX(c.content)&&g>0&&g--,gX(c.content)&&g++),!(g>0)&&c.type==="text"&&n.md.linkify.test(c.content)){for(u=c.content,y=n.md.linkify.match(u),a=[],p=c.level,d=0,y.length>0&&y[0].index===0&&t>0&&i[t-1].type==="text_special"&&(y=y.slice(1)),l=0;l<y.length;l++)m=y[l].url,E=n.md.normalizeLink(m),n.md.validateLink(E)&&(_=y[l].text,y[l].schema?y[l].schema==="mailto:"&&!/^mailto:/i.test(_)?_=n.md.normalizeLinkText("mailto:"+_).replace(/^mailto:/,""):_=n.md.normalizeLinkText(_):_=n.md.normalizeLinkText("http://"+_).replace(/^http:\/\//,""),f=y[l].index,f>d&&(s=new n.Token("text","",0),s.content=u.slice(d,f),s.level=p,a.push(s)),s=new n.Token("link_open","a",1),s.attrs=[["href",E]],s.level=p++,s.markup="linkify",s.info="auto",a.push(s),s=new n.Token("text","",0),s.content=_,s.level=p,a.push(s),s=new n.Token("link_close","a",-1),s.level=--p,s.markup="linkify",s.info="auto",a.push(s),d=y[l].lastIndex);d<u.length&&(s=new n.Token("text","",0),s.content=u.slice(d),s.level=p,a.push(s)),v[r].children=i=pX(i,t,a)}}}},ad=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,bX=/\((c|tm|r)\)/i,_X=/\((c|tm|r)\)/ig,EX={c:"\xA9",r:"\xAE",tm:"\u2122"};function vX(e,n){return EX[n.toLowerCase()]}function yX(e){var n,t,r=0;for(n=e.length-1;n>=0;n--)t=e[n],t.type==="text"&&!r&&(t.content=t.content.replace(_X,vX)),t.type==="link_open"&&t.info==="auto"&&r--,t.type==="link_close"&&t.info==="auto"&&r++}function xX(e){var n,t,r=0;for(n=e.length-1;n>=0;n--)t=e[n],t.type==="text"&&!r&&ad.test(t.content)&&(t.content=t.content.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1\u2014").replace(/(^|\s)--(?=\s|$)/mg,"$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1\u2013")),t.type==="link_open"&&t.info==="auto"&&r--,t.type==="link_close"&&t.info==="auto"&&r++}var kX=function(n){var t;if(!!n.md.options.typographer)for(t=n.tokens.length-1;t>=0;t--)n.tokens[t].type==="inline"&&(bX.test(n.tokens[t].content)&&yX(n.tokens[t].children),ad.test(n.tokens[t].content)&&xX(n.tokens[t].children))},Oa=ge.isWhiteSpace,Ia=ge.isPunctChar,La=ge.isMdAsciiPunct,wX=/['"]/,Ma=/['"]/g,Da="\u2019";function mr(e,n,t){return e.slice(0,n)+t+e.slice(n+1)}function AX(e,n){var t,r,o,i,s,c,a,l,u,f,d,p,g,m,E,_,v,y,C,P,N;for(C=[],t=0;t<e.length;t++){for(r=e[t],a=e[t].level,v=C.length-1;v>=0&&!(C[v].level<=a);v--);if(C.length=v+1,r.type!=="text")continue;o=r.content,s=0,c=o.length;e:for(;s<c&&(Ma.lastIndex=s,i=Ma.exec(o),!!i);){if(E=_=!0,s=i.index+1,y=i[0]==="'",u=32,i.index-1>=0)u=o.charCodeAt(i.index-1);else for(v=t-1;v>=0&&!(e[v].type==="softbreak"||e[v].type==="hardbreak");v--)if(!!e[v].content){u=e[v].content.charCodeAt(e[v].content.length-1);break}if(f=32,s<c)f=o.charCodeAt(s);else for(v=t+1;v<e.length&&!(e[v].type==="softbreak"||e[v].type==="hardbreak");v++)if(!!e[v].content){f=e[v].content.charCodeAt(0);break}if(d=La(u)||Ia(String.fromCharCode(u)),p=La(f)||Ia(String.fromCharCode(f)),g=Oa(u),m=Oa(f),m?E=!1:p&&(g||d||(E=!1)),g?_=!1:d&&(m||p||(_=!1)),f===34&&i[0]==='"'&&u>=48&&u<=57&&(_=E=!1),E&&_&&(E=d,_=p),!E&&!_){y&&(r.content=mr(r.content,i.index,Da));continue}if(_){for(v=C.length-1;v>=0&&(l=C[v],!(C[v].level<a));v--)if(l.single===y&&C[v].level===a){l=C[v],y?(P=n.md.options.quotes[2],N=n.md.options.quotes[3]):(P=n.md.options.quotes[0],N=n.md.options.quotes[1]),r.content=mr(r.content,i.index,N),e[l.token].content=mr(e[l.token].content,l.pos,P),s+=N.length-1,l.token===t&&(s+=P.length-1),o=r.content,c=o.length,C.length=v;continue e}}E?C.push({token:t,pos:i.index,single:y,level:a}):_&&y&&(r.content=mr(r.content,i.index,Da))}}}var CX=function(n){var t;if(!!n.md.options.typographer)for(t=n.tokens.length-1;t>=0;t--)n.tokens[t].type!=="inline"||!wX.test(n.tokens[t].content)||AX(n.tokens[t].children,n)},SX=function(n){var t,r,o,i,s,c,a=n.tokens;for(t=0,r=a.length;t<r;t++)if(a[t].type==="inline"){for(o=a[t].children,s=o.length,i=0;i<s;i++)o[i].type==="text_special"&&(o[i].type="text");for(i=c=0;i<s;i++)o[i].type==="text"&&i+1<s&&o[i+1].type==="text"?o[i+1].content=o[i].content+o[i+1].content:(i!==c&&(o[c]=o[i]),c++);i!==c&&(o.length=c)}};function Tt(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Tt.prototype.attrIndex=function(n){var t,r,o;if(!this.attrs)return-1;for(t=this.attrs,r=0,o=t.length;r<o;r++)if(t[r][0]===n)return r;return-1};Tt.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};Tt.prototype.attrSet=function(n,t){var r=this.attrIndex(n),o=[n,t];r<0?this.attrPush(o):this.attrs[r]=o};Tt.prototype.attrGet=function(n){var t=this.attrIndex(n),r=null;return t>=0&&(r=this.attrs[t][1]),r};Tt.prototype.attrJoin=function(n,t){var r=this.attrIndex(n);r<0?this.attrPush([n,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};var Us=Tt,TX=Us;function ld(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}ld.prototype.Token=TX;var NX=ld,RX=qs,Mo=[["normalize",uX],["block",fX],["inline",dX],["linkify",mX],["replacements",kX],["smartquotes",CX],["text_join",SX]];function zs(){this.ruler=new RX;for(var e=0;e<Mo.length;e++)this.ruler.push(Mo[e][0],Mo[e][1])}zs.prototype.process=function(e){var n,t,r;for(r=this.ruler.getRules(""),n=0,t=r.length;n<t;n++)r[n](e)};zs.prototype.State=NX;var OX=zs,Do=ge.isSpace;function Fo(e,n){var t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];return e.src.slice(t,r)}function Fa(e){var n=[],t=0,r=e.length,o,i=!1,s=0,c="";for(o=e.charCodeAt(t);t<r;)o===124&&(i?(c+=e.substring(s,t-1),s=t):(n.push(c+e.substring(s,t)),c="",s=t+1)),i=o===92,t++,o=e.charCodeAt(t);return n.push(c+e.substring(s)),n}var IX=function(n,t,r,o){var i,s,c,a,l,u,f,d,p,g,m,E,_,v,y,C,P,N;if(t+2>r||(u=t+1,n.sCount[u]<n.blkIndent)||n.sCount[u]-n.blkIndent>=4||(c=n.bMarks[u]+n.tShift[u],c>=n.eMarks[u])||(P=n.src.charCodeAt(c++),P!==124&&P!==45&&P!==58)||c>=n.eMarks[u]||(N=n.src.charCodeAt(c++),N!==124&&N!==45&&N!==58&&!Do(N))||P===45&&Do(N))return!1;for(;c<n.eMarks[u];){if(i=n.src.charCodeAt(c),i!==124&&i!==45&&i!==58&&!Do(i))return!1;c++}for(s=Fo(n,t+1),f=s.split("|"),g=[],a=0;a<f.length;a++){if(m=f[a].trim(),!m){if(a===0||a===f.length-1)continue;return!1}if(!/^:?-+:?$/.test(m))return!1;m.charCodeAt(m.length-1)===58?g.push(m.charCodeAt(0)===58?"center":"right"):m.charCodeAt(0)===58?g.push("left"):g.push("")}if(s=Fo(n,t).trim(),s.indexOf("|")===-1||n.sCount[t]-n.blkIndent>=4||(f=Fa(s),f.length&&f[0]===""&&f.shift(),f.length&&f[f.length-1]===""&&f.pop(),d=f.length,d===0||d!==g.length))return!1;if(o)return!0;for(v=n.parentType,n.parentType="table",C=n.md.block.ruler.getRules("blockquote"),p=n.push("table_open","table",1),p.map=E=[t,0],p=n.push("thead_open","thead",1),p.map=[t,t+1],p=n.push("tr_open","tr",1),p.map=[t,t+1],a=0;a<f.length;a++)p=n.push("th_open","th",1),g[a]&&(p.attrs=[["style","text-align:"+g[a]]]),p=n.push("inline","",0),p.content=f[a].trim(),p.children=[],p=n.push("th_close","th",-1);for(p=n.push("tr_close","tr",-1),p=n.push("thead_close","thead",-1),u=t+2;u<r&&!(n.sCount[u]<n.blkIndent);u++){for(y=!1,a=0,l=C.length;a<l;a++)if(C[a](n,u,r,!0)){y=!0;break}if(y||(s=Fo(n,u).trim(),!s)||n.sCount[u]-n.blkIndent>=4)break;for(f=Fa(s),f.length&&f[0]===""&&f.shift(),f.length&&f[f.length-1]===""&&f.pop(),u===t+2&&(p=n.push("tbody_open","tbody",1),p.map=_=[t+2,0]),p=n.push("tr_open","tr",1),p.map=[u,u+1],a=0;a<d;a++)p=n.push("td_open","td",1),g[a]&&(p.attrs=[["style","text-align:"+g[a]]]),p=n.push("inline","",0),p.content=f[a]?f[a].trim():"",p.children=[],p=n.push("td_close","td",-1);p=n.push("tr_close","tr",-1)}return _&&(p=n.push("tbody_close","tbody",-1),_[1]=u),p=n.push("table_close","table",-1),E[1]=u,n.parentType=v,n.line=u,!0},LX=function(n,t,r){var o,i,s;if(n.sCount[t]-n.blkIndent<4)return!1;for(i=o=t+1;o<r;){if(n.isEmpty(o)){o++;continue}if(n.sCount[o]-n.blkIndent>=4){o++,i=o;continue}break}return n.line=i,s=n.push("code_block","code",0),s.content=n.getLines(t,i,4+n.blkIndent,!1)+`
`,s.map=[t,n.line],!0},MX=function(n,t,r,o){var i,s,c,a,l,u,f,d=!1,p=n.bMarks[t]+n.tShift[t],g=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||p+3>g||(i=n.src.charCodeAt(p),i!==126&&i!==96)||(l=p,p=n.skipChars(p,i),s=p-l,s<3)||(f=n.src.slice(l,p),c=n.src.slice(p,g),i===96&&c.indexOf(String.fromCharCode(i))>=0))return!1;if(o)return!0;for(a=t;a++,!(a>=r||(p=l=n.bMarks[a]+n.tShift[a],g=n.eMarks[a],p<g&&n.sCount[a]<n.blkIndent));)if(n.src.charCodeAt(p)===i&&!(n.sCount[a]-n.blkIndent>=4)&&(p=n.skipChars(p,i),!(p-l<s)&&(p=n.skipSpaces(p),!(p<g)))){d=!0;break}return s=n.sCount[t],n.line=a+(d?1:0),u=n.push("fence","code",0),u.info=c,u.content=n.getLines(t+1,a,s,!0),u.markup=f,u.map=[t,n.line],!0},Pa=ge.isSpace,DX=function(n,t,r,o){var i,s,c,a,l,u,f,d,p,g,m,E,_,v,y,C,P,N,G,R,Y=n.lineMax,z=n.bMarks[t]+n.tShift[t],j=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||n.src.charCodeAt(z++)!==62)return!1;if(o)return!0;for(a=p=n.sCount[t]+1,n.src.charCodeAt(z)===32?(z++,a++,p++,i=!1,C=!0):n.src.charCodeAt(z)===9?(C=!0,(n.bsCount[t]+p)%4===3?(z++,a++,p++,i=!1):i=!0):C=!1,g=[n.bMarks[t]],n.bMarks[t]=z;z<j&&(s=n.src.charCodeAt(z),Pa(s));){s===9?p+=4-(p+n.bsCount[t]+(i?1:0))%4:p++;z++}for(m=[n.bsCount[t]],n.bsCount[t]=n.sCount[t]+1+(C?1:0),u=z>=j,v=[n.sCount[t]],n.sCount[t]=p-a,y=[n.tShift[t]],n.tShift[t]=z-n.bMarks[t],N=n.md.block.ruler.getRules("blockquote"),_=n.parentType,n.parentType="blockquote",d=t+1;d<r&&(R=n.sCount[d]<n.blkIndent,z=n.bMarks[d]+n.tShift[d],j=n.eMarks[d],!(z>=j));d++){if(n.src.charCodeAt(z++)===62&&!R){for(a=p=n.sCount[d]+1,n.src.charCodeAt(z)===32?(z++,a++,p++,i=!1,C=!0):n.src.charCodeAt(z)===9?(C=!0,(n.bsCount[d]+p)%4===3?(z++,a++,p++,i=!1):i=!0):C=!1,g.push(n.bMarks[d]),n.bMarks[d]=z;z<j&&(s=n.src.charCodeAt(z),Pa(s));){s===9?p+=4-(p+n.bsCount[d]+(i?1:0))%4:p++;z++}u=z>=j,m.push(n.bsCount[d]),n.bsCount[d]=n.sCount[d]+1+(C?1:0),v.push(n.sCount[d]),n.sCount[d]=p-a,y.push(n.tShift[d]),n.tShift[d]=z-n.bMarks[d];continue}if(u)break;for(P=!1,c=0,l=N.length;c<l;c++)if(N[c](n,d,r,!0)){P=!0;break}if(P){n.lineMax=d,n.blkIndent!==0&&(g.push(n.bMarks[d]),m.push(n.bsCount[d]),y.push(n.tShift[d]),v.push(n.sCount[d]),n.sCount[d]-=n.blkIndent);break}g.push(n.bMarks[d]),m.push(n.bsCount[d]),y.push(n.tShift[d]),v.push(n.sCount[d]),n.sCount[d]=-1}for(E=n.blkIndent,n.blkIndent=0,G=n.push("blockquote_open","blockquote",1),G.markup=">",G.map=f=[t,0],n.md.block.tokenize(n,t,d),G=n.push("blockquote_close","blockquote",-1),G.markup=">",n.lineMax=Y,n.parentType=_,f[1]=n.line,c=0;c<y.length;c++)n.bMarks[c+t]=g[c],n.tShift[c+t]=y[c],n.sCount[c+t]=v[c],n.bsCount[c+t]=m[c];return n.blkIndent=E,!0},FX=ge.isSpace,PX=function(n,t,r,o){var i,s,c,a,l=n.bMarks[t]+n.tShift[t],u=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||(i=n.src.charCodeAt(l++),i!==42&&i!==45&&i!==95))return!1;for(s=1;l<u;){if(c=n.src.charCodeAt(l++),c!==i&&!FX(c))return!1;c===i&&s++}return s<3?!1:(o||(n.line=t+1,a=n.push("hr","hr",0),a.map=[t,n.line],a.markup=Array(s+1).join(String.fromCharCode(i))),!0)},ud=ge.isSpace;function Ba(e,n){var t,r,o,i;return r=e.bMarks[n]+e.tShift[n],o=e.eMarks[n],t=e.src.charCodeAt(r++),t!==42&&t!==45&&t!==43||r<o&&(i=e.src.charCodeAt(r),!ud(i))?-1:r}function qa(e,n){var t,r=e.bMarks[n]+e.tShift[n],o=r,i=e.eMarks[n];if(o+1>=i||(t=e.src.charCodeAt(o++),t<48||t>57))return-1;for(;;){if(o>=i)return-1;if(t=e.src.charCodeAt(o++),t>=48&&t<=57){if(o-r>=10)return-1;continue}if(t===41||t===46)break;return-1}return o<i&&(t=e.src.charCodeAt(o),!ud(t))?-1:o}function BX(e,n){var t,r,o=e.level+2;for(t=n+2,r=e.tokens.length-2;t<r;t++)e.tokens[t].level===o&&e.tokens[t].type==="paragraph_open"&&(e.tokens[t+2].hidden=!0,e.tokens[t].hidden=!0,t+=2)}var qX=function(n,t,r,o){var i,s,c,a,l,u,f,d,p,g,m,E,_,v,y,C,P,N,G,R,Y,z,j,ae,ue,I,re,x,B=!1,$=!0;if(n.sCount[t]-n.blkIndent>=4||n.listIndent>=0&&n.sCount[t]-n.listIndent>=4&&n.sCount[t]<n.blkIndent)return!1;if(o&&n.parentType==="paragraph"&&n.sCount[t]>=n.blkIndent&&(B=!0),(j=qa(n,t))>=0){if(f=!0,ue=n.bMarks[t]+n.tShift[t],_=Number(n.src.slice(ue,j-1)),B&&_!==1)return!1}else if((j=Ba(n,t))>=0)f=!1;else return!1;if(B&&n.skipSpaces(j)>=n.eMarks[t])return!1;if(E=n.src.charCodeAt(j-1),o)return!0;for(m=n.tokens.length,f?(x=n.push("ordered_list_open","ol",1),_!==1&&(x.attrs=[["start",_]])):x=n.push("bullet_list_open","ul",1),x.map=g=[t,0],x.markup=String.fromCharCode(E),y=t,ae=!1,re=n.md.block.ruler.getRules("list"),N=n.parentType,n.parentType="list";y<r;){for(z=j,v=n.eMarks[y],u=C=n.sCount[y]+j-(n.bMarks[t]+n.tShift[t]);z<v;){if(i=n.src.charCodeAt(z),i===9)C+=4-(C+n.bsCount[y])%4;else if(i===32)C++;else break;z++}if(s=z,s>=v?l=1:l=C-u,l>4&&(l=1),a=u+l,x=n.push("list_item_open","li",1),x.markup=String.fromCharCode(E),x.map=d=[t,0],f&&(x.info=n.src.slice(ue,j-1)),Y=n.tight,R=n.tShift[t],G=n.sCount[t],P=n.listIndent,n.listIndent=n.blkIndent,n.blkIndent=a,n.tight=!0,n.tShift[t]=s-n.bMarks[t],n.sCount[t]=C,s>=v&&n.isEmpty(t+1)?n.line=Math.min(n.line+2,r):n.md.block.tokenize(n,t,r,!0),(!n.tight||ae)&&($=!1),ae=n.line-t>1&&n.isEmpty(n.line-1),n.blkIndent=n.listIndent,n.listIndent=P,n.tShift[t]=R,n.sCount[t]=G,n.tight=Y,x=n.push("list_item_close","li",-1),x.markup=String.fromCharCode(E),y=t=n.line,d[1]=y,s=n.bMarks[t],y>=r||n.sCount[y]<n.blkIndent||n.sCount[t]-n.blkIndent>=4)break;for(I=!1,c=0,p=re.length;c<p;c++)if(re[c](n,y,r,!0)){I=!0;break}if(I)break;if(f){if(j=qa(n,y),j<0)break;ue=n.bMarks[y]+n.tShift[y]}else if(j=Ba(n,y),j<0)break;if(E!==n.src.charCodeAt(j-1))break}return f?x=n.push("ordered_list_close","ol",-1):x=n.push("bullet_list_close","ul",-1),x.markup=String.fromCharCode(E),g[1]=y,n.line=y,n.parentType=N,$&&BX(n,m),!0},UX=ge.normalizeReference,br=ge.isSpace,zX=function(n,t,r,o){var i,s,c,a,l,u,f,d,p,g,m,E,_,v,y,C,P=0,N=n.bMarks[t]+n.tShift[t],G=n.eMarks[t],R=t+1;if(n.sCount[t]-n.blkIndent>=4||n.src.charCodeAt(N)!==91)return!1;for(;++N<G;)if(n.src.charCodeAt(N)===93&&n.src.charCodeAt(N-1)!==92){if(N+1===G||n.src.charCodeAt(N+1)!==58)return!1;break}for(a=n.lineMax,y=n.md.block.ruler.getRules("reference"),g=n.parentType,n.parentType="reference";R<a&&!n.isEmpty(R);R++)if(!(n.sCount[R]-n.blkIndent>3)&&!(n.sCount[R]<0)){for(v=!1,u=0,f=y.length;u<f;u++)if(y[u](n,R,a,!0)){v=!0;break}if(v)break}for(_=n.getLines(t,R,n.blkIndent,!1).trim(),G=_.length,N=1;N<G;N++){if(i=_.charCodeAt(N),i===91)return!1;if(i===93){p=N;break}else i===10?P++:i===92&&(N++,N<G&&_.charCodeAt(N)===10&&P++)}if(p<0||_.charCodeAt(p+1)!==58)return!1;for(N=p+2;N<G;N++)if(i=_.charCodeAt(N),i===10)P++;else if(!br(i))break;if(m=n.md.helpers.parseLinkDestination(_,N,G),!m.ok||(l=n.md.normalizeLink(m.str),!n.md.validateLink(l)))return!1;for(N=m.pos,P+=m.lines,s=N,c=P,E=N;N<G;N++)if(i=_.charCodeAt(N),i===10)P++;else if(!br(i))break;for(m=n.md.helpers.parseLinkTitle(_,N,G),N<G&&E!==N&&m.ok?(C=m.str,N=m.pos,P+=m.lines):(C="",N=s,P=c);N<G&&(i=_.charCodeAt(N),!!br(i));)N++;if(N<G&&_.charCodeAt(N)!==10&&C)for(C="",N=s,P=c;N<G&&(i=_.charCodeAt(N),!!br(i));)N++;return N<G&&_.charCodeAt(N)!==10||(d=UX(_.slice(1,p)),!d)?!1:(o||(typeof n.env.references>"u"&&(n.env.references={}),typeof n.env.references[d]>"u"&&(n.env.references[d]={title:C,href:l}),n.parentType=g,n.line=t+P+1),!0)},$X=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],uo={},HX="[a-zA-Z_:][a-zA-Z0-9:._-]*",GX="[^\"'=<>`\\x00-\\x20]+",WX="'[^']*'",KX='"[^"]*"',ZX="(?:"+GX+"|"+WX+"|"+KX+")",jX="(?:\\s+"+HX+"(?:\\s*=\\s*"+ZX+")?)",fd="<[A-Za-z][A-Za-z0-9\\-]*"+jX+"*\\s*\\/?>",dd="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",VX="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",YX="<[?][\\s\\S]*?[?]>",XX="<![A-Z]+\\s+[^>]*>",QX="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",JX=new RegExp("^(?:"+fd+"|"+dd+"|"+VX+"|"+YX+"|"+XX+"|"+QX+")"),eQ=new RegExp("^(?:"+fd+"|"+dd+")");uo.HTML_TAG_RE=JX;uo.HTML_OPEN_CLOSE_TAG_RE=eQ;var nQ=$X,tQ=uo.HTML_OPEN_CLOSE_TAG_RE,ot=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+nQ.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(tQ.source+"\\s*$"),/^$/,!1]],rQ=function(n,t,r,o){var i,s,c,a,l=n.bMarks[t]+n.tShift[t],u=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||!n.md.options.html||n.src.charCodeAt(l)!==60)return!1;for(a=n.src.slice(l,u),i=0;i<ot.length&&!ot[i][0].test(a);i++);if(i===ot.length)return!1;if(o)return ot[i][2];if(s=t+1,!ot[i][1].test(a)){for(;s<r&&!(n.sCount[s]<n.blkIndent);s++)if(l=n.bMarks[s]+n.tShift[s],u=n.eMarks[s],a=n.src.slice(l,u),ot[i][1].test(a)){a.length!==0&&s++;break}}return n.line=s,c=n.push("html_block","",0),c.map=[t,s],c.content=n.getLines(t,s,n.blkIndent,!0),!0},Ua=ge.isSpace,oQ=function(n,t,r,o){var i,s,c,a,l=n.bMarks[t]+n.tShift[t],u=n.eMarks[t];if(n.sCount[t]-n.blkIndent>=4||(i=n.src.charCodeAt(l),i!==35||l>=u))return!1;for(s=1,i=n.src.charCodeAt(++l);i===35&&l<u&&s<=6;)s++,i=n.src.charCodeAt(++l);return s>6||l<u&&!Ua(i)?!1:(o||(u=n.skipSpacesBack(u,l),c=n.skipCharsBack(u,35,l),c>l&&Ua(n.src.charCodeAt(c-1))&&(u=c),n.line=t+1,a=n.push("heading_open","h"+String(s),1),a.markup="########".slice(0,s),a.map=[t,n.line],a=n.push("inline","",0),a.content=n.src.slice(l,u).trim(),a.map=[t,n.line],a.children=[],a=n.push("heading_close","h"+String(s),-1),a.markup="########".slice(0,s)),!0)},iQ=function(n,t,r){var o,i,s,c,a,l,u,f,d,p=t+1,g,m=n.md.block.ruler.getRules("paragraph");if(n.sCount[t]-n.blkIndent>=4)return!1;for(g=n.parentType,n.parentType="paragraph";p<r&&!n.isEmpty(p);p++)if(!(n.sCount[p]-n.blkIndent>3)){if(n.sCount[p]>=n.blkIndent&&(l=n.bMarks[p]+n.tShift[p],u=n.eMarks[p],l<u&&(d=n.src.charCodeAt(l),(d===45||d===61)&&(l=n.skipChars(l,d),l=n.skipSpaces(l),l>=u)))){f=d===61?1:2;break}if(!(n.sCount[p]<0)){for(i=!1,s=0,c=m.length;s<c;s++)if(m[s](n,p,r,!0)){i=!0;break}if(i)break}}return f?(o=n.getLines(t,p,n.blkIndent,!1).trim(),n.line=p+1,a=n.push("heading_open","h"+String(f),1),a.markup=String.fromCharCode(d),a.map=[t,n.line],a=n.push("inline","",0),a.content=o,a.map=[t,n.line-1],a.children=[],a=n.push("heading_close","h"+String(f),-1),a.markup=String.fromCharCode(d),n.parentType=g,!0):!1},sQ=function(n,t){var r,o,i,s,c,a,l=t+1,u=n.md.block.ruler.getRules("paragraph"),f=n.lineMax;for(a=n.parentType,n.parentType="paragraph";l<f&&!n.isEmpty(l);l++)if(!(n.sCount[l]-n.blkIndent>3)&&!(n.sCount[l]<0)){for(o=!1,i=0,s=u.length;i<s;i++)if(u[i](n,l,f,!0)){o=!0;break}if(o)break}return r=n.getLines(t,l,n.blkIndent,!1).trim(),n.line=l,c=n.push("paragraph_open","p",1),c.map=[t,n.line],c=n.push("inline","",0),c.content=r,c.map=[t,n.line],c.children=[],c=n.push("paragraph_close","p",-1),n.parentType=a,!0},pd=Us,fo=ge.isSpace;function _n(e,n,t,r){var o,i,s,c,a,l,u,f;for(this.src=e,this.md=n,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",i=this.src,f=!1,s=c=l=u=0,a=i.length;c<a;c++){if(o=i.charCodeAt(c),!f)if(fo(o)){l++,o===9?u+=4-u%4:u++;continue}else f=!0;(o===10||c===a-1)&&(o!==10&&c++,this.bMarks.push(s),this.eMarks.push(c),this.tShift.push(l),this.sCount.push(u),this.bsCount.push(0),f=!1,l=0,u=0,s=c+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}_n.prototype.push=function(e,n,t){var r=new pd(e,n,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};_n.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};_n.prototype.skipEmptyLines=function(n){for(var t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};_n.prototype.skipSpaces=function(n){for(var t,r=this.src.length;n<r&&(t=this.src.charCodeAt(n),!!fo(t));n++);return n};_n.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!fo(this.src.charCodeAt(--n)))return n+1;return n};_n.prototype.skipChars=function(n,t){for(var r=this.src.length;n<r&&this.src.charCodeAt(n)===t;n++);return n};_n.prototype.skipCharsBack=function(n,t,r){if(n<=r)return n;for(;n>r;)if(t!==this.src.charCodeAt(--n))return n+1;return n};_n.prototype.getLines=function(n,t,r,o){var i,s,c,a,l,u,f,d=n;if(n>=t)return"";for(u=new Array(t-n),i=0;d<t;d++,i++){for(s=0,f=a=this.bMarks[d],d+1<t||o?l=this.eMarks[d]+1:l=this.eMarks[d];a<l&&s<r;){if(c=this.src.charCodeAt(a),fo(c))c===9?s+=4-(s+this.bsCount[d])%4:s++;else if(a-f<this.tShift[d])s++;else break;a++}s>r?u[i]=new Array(s-r+1).join(" ")+this.src.slice(a,l):u[i]=this.src.slice(a,l)}return u.join("")};_n.prototype.Token=pd;var cQ=_n,aQ=qs,_r=[["table",IX,["paragraph","reference"]],["code",LX],["fence",MX,["paragraph","reference","blockquote","list"]],["blockquote",DX,["paragraph","reference","blockquote","list"]],["hr",PX,["paragraph","reference","blockquote","list"]],["list",qX,["paragraph","reference","blockquote"]],["reference",zX],["html_block",rQ,["paragraph","reference","blockquote"]],["heading",oQ,["paragraph","reference","blockquote"]],["lheading",iQ],["paragraph",sQ]];function po(){this.ruler=new aQ;for(var e=0;e<_r.length;e++)this.ruler.push(_r[e][0],_r[e][1],{alt:(_r[e][2]||[]).slice()})}po.prototype.tokenize=function(e,n,t){for(var r,o,i=this.ruler.getRules(""),s=i.length,c=n,a=!1,l=e.md.options.maxNesting;c<t&&(e.line=c=e.skipEmptyLines(c),!(c>=t||e.sCount[c]<e.blkIndent));){if(e.level>=l){e.line=t;break}for(o=0;o<s&&(r=i[o](e,c,t,!1),!r);o++);e.tight=!a,e.isEmpty(e.line-1)&&(a=!0),c=e.line,c<t&&e.isEmpty(c)&&(a=!0,c++,e.line=c)}};po.prototype.parse=function(e,n,t,r){var o;!e||(o=new this.State(e,n,t,r),this.tokenize(o,o.line,o.lineMax))};po.prototype.State=cQ;var lQ=po;function uQ(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}var fQ=function(n,t){for(var r=n.pos;r<n.posMax&&!uQ(n.src.charCodeAt(r));)r++;return r===n.pos?!1:(t||(n.pending+=n.src.slice(n.pos,r)),n.pos=r,!0)},dQ=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i,pQ=function(n,t){var r,o,i,s,c,a,l,u;return!n.md.options.linkify||n.linkLevel>0||(r=n.pos,o=n.posMax,r+3>o)||n.src.charCodeAt(r)!==58||n.src.charCodeAt(r+1)!==47||n.src.charCodeAt(r+2)!==47||(i=n.pending.match(dQ),!i)||(s=i[1],c=n.md.linkify.matchAtStart(n.src.slice(r-s.length)),!c)||(a=c.url,a=a.replace(/\*+$/,""),l=n.md.normalizeLink(a),!n.md.validateLink(l))?!1:(t||(n.pending=n.pending.slice(0,-s.length),u=n.push("link_open","a",1),u.attrs=[["href",l]],u.markup="linkify",u.info="auto",u=n.push("text","",0),u.content=n.md.normalizeLinkText(a),u=n.push("link_close","a",-1),u.markup="linkify",u.info="auto"),n.pos+=a.length-s.length,!0)},hQ=ge.isSpace,gQ=function(n,t){var r,o,i,s=n.pos;if(n.src.charCodeAt(s)!==10)return!1;if(r=n.pending.length-1,o=n.posMax,!t)if(r>=0&&n.pending.charCodeAt(r)===32)if(r>=1&&n.pending.charCodeAt(r-1)===32){for(i=r-1;i>=1&&n.pending.charCodeAt(i-1)===32;)i--;n.pending=n.pending.slice(0,i),n.push("hardbreak","br",0)}else n.pending=n.pending.slice(0,-1),n.push("softbreak","br",0);else n.push("softbreak","br",0);for(s++;s<o&&hQ(n.src.charCodeAt(s));)s++;return n.pos=s,!0},mQ=ge.isSpace,$s=[];for(var za=0;za<256;za++)$s.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){$s[e.charCodeAt(0)]=1});var bQ=function(n,t){var r,o,i,s,c,a=n.pos,l=n.posMax;if(n.src.charCodeAt(a)!==92||(a++,a>=l))return!1;if(r=n.src.charCodeAt(a),r===10){for(t||n.push("hardbreak","br",0),a++;a<l&&(r=n.src.charCodeAt(a),!!mQ(r));)a++;return n.pos=a,!0}return s=n.src[a],r>=55296&&r<=56319&&a+1<l&&(o=n.src.charCodeAt(a+1),o>=56320&&o<=57343&&(s+=n.src[a+1],a++)),i="\\"+s,t||(c=n.push("text_special","",0),r<256&&$s[r]!==0?c.content=s:c.content=i,c.markup=i,c.info="escape"),n.pos=a+1,!0},_Q=function(n,t){var r,o,i,s,c,a,l,u,f=n.pos,d=n.src.charCodeAt(f);if(d!==96)return!1;for(r=f,f++,o=n.posMax;f<o&&n.src.charCodeAt(f)===96;)f++;if(i=n.src.slice(r,f),l=i.length,n.backticksScanned&&(n.backticks[l]||0)<=r)return t||(n.pending+=i),n.pos+=l,!0;for(c=a=f;(c=n.src.indexOf("`",a))!==-1;){for(a=c+1;a<o&&n.src.charCodeAt(a)===96;)a++;if(u=a-c,u===l)return t||(s=n.push("code_inline","code",0),s.markup=i,s.content=n.src.slice(f,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),n.pos=a,!0;n.backticks[u]=c}return n.backticksScanned=!0,t||(n.pending+=i),n.pos+=l,!0},ho={};ho.tokenize=function(n,t){var r,o,i,s,c,a=n.pos,l=n.src.charCodeAt(a);if(t||l!==126||(o=n.scanDelims(n.pos,!0),s=o.length,c=String.fromCharCode(l),s<2))return!1;for(s%2&&(i=n.push("text","",0),i.content=c,s--),r=0;r<s;r+=2)i=n.push("text","",0),i.content=c+c,n.delimiters.push({marker:l,length:0,token:n.tokens.length-1,end:-1,open:o.can_open,close:o.can_close});return n.pos+=o.length,!0};function $a(e,n){var t,r,o,i,s,c=[],a=n.length;for(t=0;t<a;t++)o=n[t],o.marker===126&&o.end!==-1&&(i=n[o.end],s=e.tokens[o.token],s.type="s_open",s.tag="s",s.nesting=1,s.markup="~~",s.content="",s=e.tokens[i.token],s.type="s_close",s.tag="s",s.nesting=-1,s.markup="~~",s.content="",e.tokens[i.token-1].type==="text"&&e.tokens[i.token-1].content==="~"&&c.push(i.token-1));for(;c.length;){for(t=c.pop(),r=t+1;r<e.tokens.length&&e.tokens[r].type==="s_close";)r++;r--,t!==r&&(s=e.tokens[r],e.tokens[r]=e.tokens[t],e.tokens[t]=s)}}ho.postProcess=function(n){var t,r=n.tokens_meta,o=n.tokens_meta.length;for($a(n,n.delimiters),t=0;t<o;t++)r[t]&&r[t].delimiters&&$a(n,r[t].delimiters)};var go={};go.tokenize=function(n,t){var r,o,i,s=n.pos,c=n.src.charCodeAt(s);if(t||c!==95&&c!==42)return!1;for(o=n.scanDelims(n.pos,c===42),r=0;r<o.length;r++)i=n.push("text","",0),i.content=String.fromCharCode(c),n.delimiters.push({marker:c,length:o.length,token:n.tokens.length-1,end:-1,open:o.can_open,close:o.can_close});return n.pos+=o.length,!0};function Ha(e,n){var t,r,o,i,s,c,a=n.length;for(t=a-1;t>=0;t--)r=n[t],!(r.marker!==95&&r.marker!==42)&&r.end!==-1&&(o=n[r.end],c=t>0&&n[t-1].end===r.end+1&&n[t-1].marker===r.marker&&n[t-1].token===r.token-1&&n[r.end+1].token===o.token+1,s=String.fromCharCode(r.marker),i=e.tokens[r.token],i.type=c?"strong_open":"em_open",i.tag=c?"strong":"em",i.nesting=1,i.markup=c?s+s:s,i.content="",i=e.tokens[o.token],i.type=c?"strong_close":"em_close",i.tag=c?"strong":"em",i.nesting=-1,i.markup=c?s+s:s,i.content="",c&&(e.tokens[n[t-1].token].content="",e.tokens[n[r.end+1].token].content="",t--))}go.postProcess=function(n){var t,r=n.tokens_meta,o=n.tokens_meta.length;for(Ha(n,n.delimiters),t=0;t<o;t++)r[t]&&r[t].delimiters&&Ha(n,r[t].delimiters)};var EQ=ge.normalizeReference,Po=ge.isSpace,vQ=function(n,t){var r,o,i,s,c,a,l,u,f,d="",p="",g=n.pos,m=n.posMax,E=n.pos,_=!0;if(n.src.charCodeAt(n.pos)!==91||(c=n.pos+1,s=n.md.helpers.parseLinkLabel(n,n.pos,!0),s<0))return!1;if(a=s+1,a<m&&n.src.charCodeAt(a)===40){for(_=!1,a++;a<m&&(o=n.src.charCodeAt(a),!(!Po(o)&&o!==10));a++);if(a>=m)return!1;if(E=a,l=n.md.helpers.parseLinkDestination(n.src,a,n.posMax),l.ok){for(d=n.md.normalizeLink(l.str),n.md.validateLink(d)?a=l.pos:d="",E=a;a<m&&(o=n.src.charCodeAt(a),!(!Po(o)&&o!==10));a++);if(l=n.md.helpers.parseLinkTitle(n.src,a,n.posMax),a<m&&E!==a&&l.ok)for(p=l.str,a=l.pos;a<m&&(o=n.src.charCodeAt(a),!(!Po(o)&&o!==10));a++);}(a>=m||n.src.charCodeAt(a)!==41)&&(_=!0),a++}if(_){if(typeof n.env.references>"u")return!1;if(a<m&&n.src.charCodeAt(a)===91?(E=a+1,a=n.md.helpers.parseLinkLabel(n,a),a>=0?i=n.src.slice(E,a++):a=s+1):a=s+1,i||(i=n.src.slice(c,s)),u=n.env.references[EQ(i)],!u)return n.pos=g,!1;d=u.href,p=u.title}return t||(n.pos=c,n.posMax=s,f=n.push("link_open","a",1),f.attrs=r=[["href",d]],p&&r.push(["title",p]),n.linkLevel++,n.md.inline.tokenize(n),n.linkLevel--,f=n.push("link_close","a",-1)),n.pos=a,n.posMax=m,!0},yQ=ge.normalizeReference,Bo=ge.isSpace,xQ=function(n,t){var r,o,i,s,c,a,l,u,f,d,p,g,m,E="",_=n.pos,v=n.posMax;if(n.src.charCodeAt(n.pos)!==33||n.src.charCodeAt(n.pos+1)!==91||(a=n.pos+2,c=n.md.helpers.parseLinkLabel(n,n.pos+1,!1),c<0))return!1;if(l=c+1,l<v&&n.src.charCodeAt(l)===40){for(l++;l<v&&(o=n.src.charCodeAt(l),!(!Bo(o)&&o!==10));l++);if(l>=v)return!1;for(m=l,f=n.md.helpers.parseLinkDestination(n.src,l,n.posMax),f.ok&&(E=n.md.normalizeLink(f.str),n.md.validateLink(E)?l=f.pos:E=""),m=l;l<v&&(o=n.src.charCodeAt(l),!(!Bo(o)&&o!==10));l++);if(f=n.md.helpers.parseLinkTitle(n.src,l,n.posMax),l<v&&m!==l&&f.ok)for(d=f.str,l=f.pos;l<v&&(o=n.src.charCodeAt(l),!(!Bo(o)&&o!==10));l++);else d="";if(l>=v||n.src.charCodeAt(l)!==41)return n.pos=_,!1;l++}else{if(typeof n.env.references>"u")return!1;if(l<v&&n.src.charCodeAt(l)===91?(m=l+1,l=n.md.helpers.parseLinkLabel(n,l),l>=0?s=n.src.slice(m,l++):l=c+1):l=c+1,s||(s=n.src.slice(a,c)),u=n.env.references[yQ(s)],!u)return n.pos=_,!1;E=u.href,d=u.title}return t||(i=n.src.slice(a,c),n.md.inline.parse(i,n.md,n.env,g=[]),p=n.push("image","img",0),p.attrs=r=[["src",E],["alt",""]],p.children=g,p.content=i,d&&r.push(["title",d])),n.pos=l,n.posMax=v,!0},kQ=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,wQ=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,AQ=function(n,t){var r,o,i,s,c,a,l=n.pos;if(n.src.charCodeAt(l)!==60)return!1;for(c=n.pos,a=n.posMax;;){if(++l>=a||(s=n.src.charCodeAt(l),s===60))return!1;if(s===62)break}return r=n.src.slice(c+1,l),wQ.test(r)?(o=n.md.normalizeLink(r),n.md.validateLink(o)?(t||(i=n.push("link_open","a",1),i.attrs=[["href",o]],i.markup="autolink",i.info="auto",i=n.push("text","",0),i.content=n.md.normalizeLinkText(r),i=n.push("link_close","a",-1),i.markup="autolink",i.info="auto"),n.pos+=r.length+2,!0):!1):kQ.test(r)?(o=n.md.normalizeLink("mailto:"+r),n.md.validateLink(o)?(t||(i=n.push("link_open","a",1),i.attrs=[["href",o]],i.markup="autolink",i.info="auto",i=n.push("text","",0),i.content=n.md.normalizeLinkText(r),i=n.push("link_close","a",-1),i.markup="autolink",i.info="auto"),n.pos+=r.length+2,!0):!1):!1},CQ=uo.HTML_TAG_RE;function SQ(e){return/^<a[>\s]/i.test(e)}function TQ(e){return/^<\/a\s*>/i.test(e)}function NQ(e){var n=e|32;return n>=97&&n<=122}var RQ=function(n,t){var r,o,i,s,c=n.pos;return!n.md.options.html||(i=n.posMax,n.src.charCodeAt(c)!==60||c+2>=i)||(r=n.src.charCodeAt(c+1),r!==33&&r!==63&&r!==47&&!NQ(r))||(o=n.src.slice(c).match(CQ),!o)?!1:(t||(s=n.push("html_inline","",0),s.content=n.src.slice(c,c+o[0].length),SQ(s.content)&&n.linkLevel++,TQ(s.content)&&n.linkLevel--),n.pos+=o[0].length,!0)},Ga=Ps.exports,OQ=ge.has,IQ=ge.isValidEntityCode,Wa=ge.fromCodePoint,LQ=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,MQ=/^&([a-z][a-z0-9]{1,31});/i,DQ=function(n,t){var r,o,i,s,c=n.pos,a=n.posMax;if(n.src.charCodeAt(c)!==38||c+1>=a)return!1;if(r=n.src.charCodeAt(c+1),r===35){if(i=n.src.slice(c).match(LQ),i)return t||(o=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),s=n.push("text_special","",0),s.content=IQ(o)?Wa(o):Wa(65533),s.markup=i[0],s.info="entity"),n.pos+=i[0].length,!0}else if(i=n.src.slice(c).match(MQ),i&&OQ(Ga,i[1]))return t||(s=n.push("text_special","",0),s.content=Ga[i[1]],s.markup=i[0],s.info="entity"),n.pos+=i[0].length,!0;return!1};function Ka(e,n){var t,r,o,i,s,c,a,l,u={},f=n.length;if(!!f){var d=0,p=-2,g=[];for(t=0;t<f;t++)if(o=n[t],g.push(0),(n[d].marker!==o.marker||p!==o.token-1)&&(d=t),p=o.token,o.length=o.length||0,!!o.close){for(u.hasOwnProperty(o.marker)||(u[o.marker]=[-1,-1,-1,-1,-1,-1]),s=u[o.marker][(o.open?3:0)+o.length%3],r=d-g[d]-1,c=r;r>s;r-=g[r]+1)if(i=n[r],i.marker===o.marker&&i.open&&i.end<0&&(a=!1,(i.close||o.open)&&(i.length+o.length)%3===0&&(i.length%3!==0||o.length%3!==0)&&(a=!0),!a)){l=r>0&&!n[r-1].open?g[r-1]+1:0,g[t]=t-r+l,g[r]=l,o.open=!1,i.end=t,i.close=!1,c=-1,p=-2;break}c!==-1&&(u[o.marker][(o.open?3:0)+(o.length||0)%3]=c)}}}var FQ=function(n){var t,r=n.tokens_meta,o=n.tokens_meta.length;for(Ka(n,n.delimiters),t=0;t<o;t++)r[t]&&r[t].delimiters&&Ka(n,r[t].delimiters)},PQ=function(n){var t,r,o=0,i=n.tokens,s=n.tokens.length;for(t=r=0;t<s;t++)i[t].nesting<0&&o--,i[t].level=o,i[t].nesting>0&&o++,i[t].type==="text"&&t+1<s&&i[t+1].type==="text"?i[t+1].content=i[t].content+i[t+1].content:(t!==r&&(i[r]=i[t]),r++);t!==r&&(i.length=r)},Hs=Us,Za=ge.isWhiteSpace,ja=ge.isPunctChar,Va=ge.isMdAsciiPunct;function cr(e,n,t,r){this.src=e,this.env=t,this.md=n,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}cr.prototype.pushPending=function(){var e=new Hs("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};cr.prototype.push=function(e,n,t){this.pending&&this.pushPending();var r=new Hs(e,n,t),o=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],o={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(o),r};cr.prototype.scanDelims=function(e,n){var t=e,r,o,i,s,c,a,l,u,f,d=!0,p=!0,g=this.posMax,m=this.src.charCodeAt(e);for(r=e>0?this.src.charCodeAt(e-1):32;t<g&&this.src.charCodeAt(t)===m;)t++;return i=t-e,o=t<g?this.src.charCodeAt(t):32,l=Va(r)||ja(String.fromCharCode(r)),f=Va(o)||ja(String.fromCharCode(o)),a=Za(r),u=Za(o),u?d=!1:f&&(a||l||(d=!1)),a?p=!1:l&&(u||f||(p=!1)),n?(s=d,c=p):(s=d&&(!p||l),c=p&&(!d||f)),{can_open:s,can_close:c,length:i}};cr.prototype.Token=Hs;var BQ=cr,Ya=qs,qo=[["text",fQ],["linkify",pQ],["newline",gQ],["escape",bQ],["backticks",_Q],["strikethrough",ho.tokenize],["emphasis",go.tokenize],["link",vQ],["image",xQ],["autolink",AQ],["html_inline",RQ],["entity",DQ]],Uo=[["balance_pairs",FQ],["strikethrough",ho.postProcess],["emphasis",go.postProcess],["fragments_join",PQ]];function ar(){var e;for(this.ruler=new Ya,e=0;e<qo.length;e++)this.ruler.push(qo[e][0],qo[e][1]);for(this.ruler2=new Ya,e=0;e<Uo.length;e++)this.ruler2.push(Uo[e][0],Uo[e][1])}ar.prototype.skipToken=function(e){var n,t,r=e.pos,o=this.ruler.getRules(""),i=o.length,s=e.md.options.maxNesting,c=e.cache;if(typeof c[r]<"u"){e.pos=c[r];return}if(e.level<s)for(t=0;t<i&&(e.level++,n=o[t](e,!0),e.level--,!n);t++);else e.pos=e.posMax;n||e.pos++,c[r]=e.pos};ar.prototype.tokenize=function(e){for(var n,t,r=this.ruler.getRules(""),o=r.length,i=e.posMax,s=e.md.options.maxNesting;e.pos<i;){if(e.level<s)for(t=0;t<o&&(n=r[t](e,!1),!n);t++);if(n){if(e.pos>=i)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};ar.prototype.parse=function(e,n,t,r){var o,i,s,c=new this.State(e,n,t,r);for(this.tokenize(c),i=this.ruler2.getRules(""),s=i.length,o=0;o<s;o++)i[o](c)};ar.prototype.State=BQ;var qQ=ar,zo,Xa;function UQ(){return Xa||(Xa=1,zo=function(e){var n={};e=e||{},n.src_Any=id().source,n.src_Cc=sd().source,n.src_Z=cd().source,n.src_P=Bs.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");var t="[><\uFF5C]";return n.src_pseudo_letter="(?:(?!"+t+"|"+n.src_ZPCc+")"+n.src_Any+")",n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth="(?:(?:(?!"+n.src_ZCc+"|[@/\\[\\]()]).)+@)?",n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator="(?=$|"+t+"|"+n.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+n.src_ZPCc+"))",n.src_path="(?:[/?#](?:(?!"+n.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+n.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+n.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+n.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+n.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+n.src_ZCc+"|[']).)+\\'|\\'(?="+n.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+n.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+n.src_ZCc+"|$)|;(?!"+n.src_ZCc+"|$)|\\!+(?!"+n.src_ZCc+"|[!]|$)|\\?(?!"+n.src_ZCc+"|[?]|$))+|\\/)?",n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+"|"+n.src_pseudo_letter+"{1,63})",n.src_domain="(?:"+n.src_xn+"|(?:"+n.src_pseudo_letter+")|(?:"+n.src_pseudo_letter+"(?:-|"+n.src_pseudo_letter+"){0,61}"+n.src_pseudo_letter+"))",n.src_host="(?:(?:(?:(?:"+n.src_domain+")\\.)*"+n.src_domain+"))",n.tpl_host_fuzzy="(?:"+n.src_ip4+"|(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%)))",n.tpl_host_no_ip_fuzzy="(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%))",n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+n.src_ZPCc+"|>|$))",n.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+n.src_ZCc+")("+n.src_email_name+"@"+n.tpl_host_fuzzy_strict+")",n.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+n.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+n.tpl_host_port_fuzzy_strict+n.src_path+")",n.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+n.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+n.tpl_host_port_no_ip_fuzzy_strict+n.src_path+")",n}),zo}function Vi(e){var n=Array.prototype.slice.call(arguments,1);return n.forEach(function(t){!t||Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function mo(e){return Object.prototype.toString.call(e)}function zQ(e){return mo(e)==="[object String]"}function $Q(e){return mo(e)==="[object Object]"}function HQ(e){return mo(e)==="[object RegExp]"}function Qa(e){return mo(e)==="[object Function]"}function GQ(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var hd={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function WQ(e){return Object.keys(e||{}).reduce(function(n,t){return n||hd.hasOwnProperty(t)},!1)}var KQ={"http:":{validate:function(e,n,t){var r=e.slice(n);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){var r=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){var r=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},ZQ="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",jQ="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function VQ(e){e.__index__=-1,e.__text_cache__=""}function YQ(e){return function(n,t){var r=n.slice(t);return e.test(r)?r.match(e)[0].length:0}}function Ja(){return function(e,n){n.normalize(e)}}function qr(e){var n=e.re=UQ()(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(ZQ),t.push(n.src_xn),n.src_tlds=t.join("|");function r(c){return c.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(r(n.tpl_email_fuzzy),"i"),n.link_fuzzy=RegExp(r(n.tpl_link_fuzzy),"i"),n.link_no_ip_fuzzy=RegExp(r(n.tpl_link_no_ip_fuzzy),"i"),n.host_fuzzy_test=RegExp(r(n.tpl_host_fuzzy_test),"i");var o=[];e.__compiled__={};function i(c,a){throw new Error('(LinkifyIt) Invalid schema "'+c+'": '+a)}Object.keys(e.__schemas__).forEach(function(c){var a=e.__schemas__[c];if(a!==null){var l={validate:null,link:null};if(e.__compiled__[c]=l,$Q(a)){HQ(a.validate)?l.validate=YQ(a.validate):Qa(a.validate)?l.validate=a.validate:i(c,a),Qa(a.normalize)?l.normalize=a.normalize:a.normalize?i(c,a):l.normalize=Ja();return}if(zQ(a)){o.push(c);return}i(c,a)}}),o.forEach(function(c){!e.__compiled__[e.__schemas__[c]]||(e.__compiled__[c].validate=e.__compiled__[e.__schemas__[c]].validate,e.__compiled__[c].normalize=e.__compiled__[e.__schemas__[c]].normalize)}),e.__compiled__[""]={validate:null,normalize:Ja()};var s=Object.keys(e.__compiled__).filter(function(c){return c.length>0&&e.__compiled__[c]}).map(GQ).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+n.src_ZPCc+"))("+s+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+n.src_ZPCc+"))("+s+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),VQ(e)}function XQ(e,n){var t=e.__index__,r=e.__last_index__,o=e.__text_cache__.slice(t,r);this.schema=e.__schema__.toLowerCase(),this.index=t+n,this.lastIndex=r+n,this.raw=o,this.text=o,this.url=o}function Yi(e,n){var t=new XQ(e,n);return e.__compiled__[t.schema].normalize(t,e),t}function Ke(e,n){if(!(this instanceof Ke))return new Ke(e,n);n||WQ(e)&&(n=e,e={}),this.__opts__=Vi({},hd,n),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Vi({},KQ,e),this.__compiled__={},this.__tlds__=jQ,this.__tlds_replaced__=!1,this.re={},qr(this)}Ke.prototype.add=function(n,t){return this.__schemas__[n]=t,qr(this),this};Ke.prototype.set=function(n){return this.__opts__=Vi(this.__opts__,n),this};Ke.prototype.test=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return!1;var t,r,o,i,s,c,a,l,u;if(this.re.schema_test.test(n)){for(a=this.re.schema_search,a.lastIndex=0;(t=a.exec(n))!==null;)if(i=this.testSchemaAt(n,t[2],a.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=n.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(r=n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(s=r.index+r[1].length,(this.__index__<0||s<this.__index__)&&(this.__schema__="",this.__index__=s,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(u=n.indexOf("@"),u>=0&&(o=n.match(this.re.email_fuzzy))!==null&&(s=o.index+o[1].length,c=o.index+o[0].length,(this.__index__<0||s<this.__index__||s===this.__index__&&c>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=s,this.__last_index__=c))),this.__index__>=0};Ke.prototype.pretest=function(n){return this.re.pretest.test(n)};Ke.prototype.testSchemaAt=function(n,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,r,this):0};Ke.prototype.match=function(n){var t=0,r=[];this.__index__>=0&&this.__text_cache__===n&&(r.push(Yi(this,t)),t=this.__last_index__);for(var o=t?n.slice(t):n;this.test(o);)r.push(Yi(this,t)),o=o.slice(this.__last_index__),t+=this.__last_index__;return r.length?r:null};Ke.prototype.matchAtStart=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return null;var t=this.re.schema_at_start.exec(n);if(!t)return null;var r=this.testSchemaAt(n,t[2],t[0].length);return r?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+r,Yi(this,0)):null};Ke.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(r,o,i){return r!==i[o-1]}).reverse(),qr(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,qr(this),this)};Ke.prototype.normalize=function(n){n.schema||(n.url="http://"+n.url),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url="mailto:"+n.url)};Ke.prototype.onCompile=function(){};var QQ=Ke;const gt=2147483647,pn=36,Gs=1,jt=26,JQ=38,eJ=700,gd=72,md=128,bd="-",nJ=/^xn--/,tJ=/[^\0-\x7E]/,rJ=/[\x2E\u3002\uFF0E\uFF61]/g,oJ={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},$o=pn-Gs,hn=Math.floor,Ho=String.fromCharCode;function Gn(e){throw new RangeError(oJ[e])}function iJ(e,n){const t=[];let r=e.length;for(;r--;)t[r]=n(e[r]);return t}function _d(e,n){const t=e.split("@");let r="";t.length>1&&(r=t[0]+"@",e=t[1]),e=e.replace(rJ,".");const o=e.split("."),i=iJ(o,n).join(".");return r+i}function Ws(e){const n=[];let t=0;const r=e.length;for(;t<r;){const o=e.charCodeAt(t++);if(o>=55296&&o<=56319&&t<r){const i=e.charCodeAt(t++);(i&64512)==56320?n.push(((o&1023)<<10)+(i&1023)+65536):(n.push(o),t--)}else n.push(o)}return n}const Ed=e=>String.fromCodePoint(...e),sJ=function(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:pn},el=function(e,n){return e+22+75*(e<26)-((n!=0)<<5)},vd=function(e,n,t){let r=0;for(e=t?hn(e/eJ):e>>1,e+=hn(e/n);e>$o*jt>>1;r+=pn)e=hn(e/$o);return hn(r+($o+1)*e/(e+JQ))},Ks=function(e){const n=[],t=e.length;let r=0,o=md,i=gd,s=e.lastIndexOf(bd);s<0&&(s=0);for(let c=0;c<s;++c)e.charCodeAt(c)>=128&&Gn("not-basic"),n.push(e.charCodeAt(c));for(let c=s>0?s+1:0;c<t;){let a=r;for(let u=1,f=pn;;f+=pn){c>=t&&Gn("invalid-input");const d=sJ(e.charCodeAt(c++));(d>=pn||d>hn((gt-r)/u))&&Gn("overflow"),r+=d*u;const p=f<=i?Gs:f>=i+jt?jt:f-i;if(d<p)break;const g=pn-p;u>hn(gt/g)&&Gn("overflow"),u*=g}const l=n.length+1;i=vd(r-a,l,a==0),hn(r/l)>gt-o&&Gn("overflow"),o+=hn(r/l),r%=l,n.splice(r++,0,o)}return String.fromCodePoint(...n)},Zs=function(e){const n=[];e=Ws(e);let t=e.length,r=md,o=0,i=gd;for(const a of e)a<128&&n.push(Ho(a));let s=n.length,c=s;for(s&&n.push(bd);c<t;){let a=gt;for(const u of e)u>=r&&u<a&&(a=u);const l=c+1;a-r>hn((gt-o)/l)&&Gn("overflow"),o+=(a-r)*l,r=a;for(const u of e)if(u<r&&++o>gt&&Gn("overflow"),u==r){let f=o;for(let d=pn;;d+=pn){const p=d<=i?Gs:d>=i+jt?jt:d-i;if(f<p)break;const g=f-p,m=pn-p;n.push(Ho(el(p+g%m,0))),f=hn(g/m)}n.push(Ho(el(f,0))),i=vd(o,l,c==s),o=0,++c}++o,++r}return n.join("")},yd=function(e){return _d(e,function(n){return nJ.test(n)?Ks(n.slice(4).toLowerCase()):n})},xd=function(e){return _d(e,function(n){return tJ.test(n)?"xn--"+Zs(n):n})},cJ={version:"2.1.0",ucs2:{decode:Ws,encode:Ed},decode:Ks,encode:Zs,toASCII:xd,toUnicode:yd},aJ=Object.freeze(Object.defineProperty({__proto__:null,ucs2decode:Ws,ucs2encode:Ed,decode:Ks,encode:Zs,toASCII:xd,toUnicode:yd,default:cJ},Symbol.toStringTag,{value:"Module"})),lJ=_b(aJ);var uJ={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},fJ={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},dJ={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Ft=ge,pJ=lo,hJ=cX,gJ=OX,mJ=lQ,bJ=qQ,_J=QQ,Zn=Ct,kd=lJ,EJ={default:uJ,zero:fJ,commonmark:dJ},vJ=/^(vbscript|javascript|file|data):/,yJ=/^data:image\/(gif|png|jpeg|webp);/;function xJ(e){var n=e.trim().toLowerCase();return vJ.test(n)?!!yJ.test(n):!0}var wd=["http:","https:","mailto:"];function kJ(e){var n=Zn.parse(e,!0);if(n.hostname&&(!n.protocol||wd.indexOf(n.protocol)>=0))try{n.hostname=kd.toASCII(n.hostname)}catch{}return Zn.encode(Zn.format(n))}function wJ(e){var n=Zn.parse(e,!0);if(n.hostname&&(!n.protocol||wd.indexOf(n.protocol)>=0))try{n.hostname=kd.toUnicode(n.hostname)}catch{}return Zn.decode(Zn.format(n),Zn.decode.defaultChars+"%")}function Qe(e,n){if(!(this instanceof Qe))return new Qe(e,n);n||Ft.isString(e)||(n=e||{},e="default"),this.inline=new bJ,this.block=new mJ,this.core=new gJ,this.renderer=new hJ,this.linkify=new _J,this.validateLink=xJ,this.normalizeLink=kJ,this.normalizeLinkText=wJ,this.utils=Ft,this.helpers=Ft.assign({},pJ),this.options={},this.configure(e),n&&this.set(n)}Qe.prototype.set=function(e){return Ft.assign(this.options,e),this};Qe.prototype.configure=function(e){var n=this,t;if(Ft.isString(e)&&(t=e,e=EJ[t],!e))throw new Error('Wrong `markdown-it` preset "'+t+'", check name');if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(r){e.components[r].rules&&n[r].ruler.enableOnly(e.components[r].rules),e.components[r].rules2&&n[r].ruler2.enableOnly(e.components[r].rules2)}),this};Qe.prototype.enable=function(e,n){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){t=t.concat(this[o].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));var r=e.filter(function(o){return t.indexOf(o)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};Qe.prototype.disable=function(e,n){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){t=t.concat(this[o].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));var r=e.filter(function(o){return t.indexOf(o)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};Qe.prototype.use=function(e){var n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};Qe.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");var t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};Qe.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};Qe.prototype.parseInline=function(e,n){var t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};Qe.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};var AJ=Qe;(function(e){e.exports=AJ})(od);const CJ=bb(od.exports);var js={exports:{}};function Vs(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n];typeof t=="object"&&!Object.isFrozen(t)&&Vs(t)}),e}js.exports=Vs;js.exports.default=Vs;class nl{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ad(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Tn(e,...n){const t=Object.create(null);for(const r in e)t[r]=e[r];return n.forEach(function(r){for(const o in r)t[o]=r[o]}),t}const SJ="</span>",tl=e=>!!e.scope||e.sublanguage&&e.language,TJ=(e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((r,o)=>`${r}${"_".repeat(o+1)}`)].join(" ")}return`${n}${e}`};class NJ{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Ad(n)}openNode(n){if(!tl(n))return;let t="";n.sublanguage?t=`language-${n.language}`:t=TJ(n.scope,{prefix:this.classPrefix}),this.span(t)}closeNode(n){!tl(n)||(this.buffer+=SJ)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const rl=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class Ys{constructor(){this.rootNode=rl(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=rl({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(r=>this._walk(n,r)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&(!n.children||(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{Ys._collapse(t)})))}}class RJ extends Ys{constructor(n){super(),this.options=n}addKeyword(n,t){n!==""&&(this.openNode(t),this.addText(n),this.closeNode())}addText(n){n!==""&&this.add(n)}addSublanguage(n,t){const r=n.root;r.sublanguage=!0,r.language=t,this.add(r)}toHTML(){return new NJ(this,this.options).value()}finalize(){return!0}}function Vt(e){return e?typeof e=="string"?e:e.source:null}function Cd(e){return et("(?=",e,")")}function OJ(e){return et("(?:",e,")*")}function IJ(e){return et("(?:",e,")?")}function et(...e){return e.map(t=>Vt(t)).join("")}function LJ(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function Xs(...e){return"("+(LJ(e).capture?"":"?:")+e.map(r=>Vt(r)).join("|")+")"}function Sd(e){return new RegExp(e.toString()+"|").exec("").length-1}function MJ(e,n){const t=e&&e.exec(n);return t&&t.index===0}const DJ=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Qs(e,{joinWith:n}){let t=0;return e.map(r=>{t+=1;const o=t;let i=Vt(r),s="";for(;i.length>0;){const c=DJ.exec(i);if(!c){s+=i;break}s+=i.substring(0,c.index),i=i.substring(c.index+c[0].length),c[0][0]==="\\"&&c[1]?s+="\\"+String(Number(c[1])+o):(s+=c[0],c[0]==="("&&t++)}return s}).map(r=>`(${r})`).join(n)}const FJ=/\b\B/,Td="[a-zA-Z]\\w*",Js="[a-zA-Z_]\\w*",Nd="\\b\\d+(\\.\\d+)?",Rd="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Od="\\b(0b[01]+)",PJ="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",BJ=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=et(n,/.*\b/,e.binary,/\b.*/)),Tn({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,r)=>{t.index!==0&&r.ignoreMatch()}},e)},Yt={begin:"\\\\[\\s\\S]",relevance:0},qJ={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Yt]},UJ={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Yt]},zJ={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},bo=function(e,n,t={}){const r=Tn({scope:"comment",begin:e,end:n,contains:[]},t);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=Xs("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:et(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},$J=bo("//","$"),HJ=bo("/\\*","\\*/"),GJ=bo("#","$"),WJ={scope:"number",begin:Nd,relevance:0},KJ={scope:"number",begin:Rd,relevance:0},ZJ={scope:"number",begin:Od,relevance:0},jJ={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Yt,{begin:/\[/,end:/\]/,relevance:0,contains:[Yt]}]}]},VJ={scope:"title",begin:Td,relevance:0},YJ={scope:"title",begin:Js,relevance:0},XJ={begin:"\\.\\s*"+Js,relevance:0},QJ=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var Er=Object.freeze({__proto__:null,MATCH_NOTHING_RE:FJ,IDENT_RE:Td,UNDERSCORE_IDENT_RE:Js,NUMBER_RE:Nd,C_NUMBER_RE:Rd,BINARY_NUMBER_RE:Od,RE_STARTERS_RE:PJ,SHEBANG:BJ,BACKSLASH_ESCAPE:Yt,APOS_STRING_MODE:qJ,QUOTE_STRING_MODE:UJ,PHRASAL_WORDS_MODE:zJ,COMMENT:bo,C_LINE_COMMENT_MODE:$J,C_BLOCK_COMMENT_MODE:HJ,HASH_COMMENT_MODE:GJ,NUMBER_MODE:WJ,C_NUMBER_MODE:KJ,BINARY_NUMBER_MODE:ZJ,REGEXP_MODE:jJ,TITLE_MODE:VJ,UNDERSCORE_TITLE_MODE:YJ,METHOD_GUARD:XJ,END_SAME_AS_BEGIN:QJ});function JJ(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function eee(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function nee(e,n){!n||!e.beginKeywords||(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=JJ,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function tee(e,n){!Array.isArray(e.illegal)||(e.illegal=Xs(...e.illegal))}function ree(e,n){if(!!e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function oee(e,n){e.relevance===void 0&&(e.relevance=1)}const iee=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(r=>{delete e[r]}),e.keywords=t.keywords,e.begin=et(t.beforeMatch,Cd(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},see=["of","and","for","in","not","or","if","then","parent","list","value"],cee="keyword";function Id(e,n,t=cee){const r=Object.create(null);return typeof e=="string"?o(t,e.split(" ")):Array.isArray(e)?o(t,e):Object.keys(e).forEach(function(i){Object.assign(r,Id(e[i],n,i))}),r;function o(i,s){n&&(s=s.map(c=>c.toLowerCase())),s.forEach(function(c){const a=c.split("|");r[a[0]]=[i,aee(a[0],a[1])]})}}function aee(e,n){return n?Number(n):lee(e)?0:1}function lee(e){return see.includes(e.toLowerCase())}const ol={},Xn=e=>{console.error(e)},il=(e,...n)=>{console.log(`WARN: ${e}`,...n)},it=(e,n)=>{ol[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),ol[`${e}/${n}`]=!0)},Ur=new Error;function Ld(e,n,{key:t}){let r=0;const o=e[t],i={},s={};for(let c=1;c<=n.length;c++)s[c+r]=o[c],i[c+r]=!0,r+=Sd(n[c-1]);e[t]=s,e[t]._emit=i,e[t]._multi=!0}function uee(e){if(!!Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Xn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ur;if(typeof e.beginScope!="object"||e.beginScope===null)throw Xn("beginScope must be object"),Ur;Ld(e,e.begin,{key:"beginScope"}),e.begin=Qs(e.begin,{joinWith:""})}}function fee(e){if(!!Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Xn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ur;if(typeof e.endScope!="object"||e.endScope===null)throw Xn("endScope must be object"),Ur;Ld(e,e.end,{key:"endScope"}),e.end=Qs(e.end,{joinWith:""})}}function dee(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function pee(e){dee(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),uee(e),fee(e)}function hee(e){function n(s,c){return new RegExp(Vt(s),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(c?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(c,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,c]),this.matchAt+=Sd(c)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const c=this.regexes.map(a=>a[1]);this.matcherRe=n(Qs(c,{joinWith:"|"}),!0),this.lastIndex=0}exec(c){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(c);if(!a)return null;const l=a.findIndex((f,d)=>d>0&&f!==void 0),u=this.matchIndexes[l];return a.splice(0,l),Object.assign(a,u)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(c){if(this.multiRegexes[c])return this.multiRegexes[c];const a=new t;return this.rules.slice(c).forEach(([l,u])=>a.addRule(l,u)),a.compile(),this.multiRegexes[c]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(c,a){this.rules.push([c,a]),a.type==="begin"&&this.count++}exec(c){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let l=a.exec(c);if(this.resumingScanAtSamePosition()&&!(l&&l.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,l=u.exec(c)}return l&&(this.regexIndex+=l.position+1,this.regexIndex===this.count&&this.considerAll()),l}}function o(s){const c=new r;return s.contains.forEach(a=>c.addRule(a.begin,{rule:a,type:"begin"})),s.terminatorEnd&&c.addRule(s.terminatorEnd,{type:"end"}),s.illegal&&c.addRule(s.illegal,{type:"illegal"}),c}function i(s,c){const a=s;if(s.isCompiled)return a;[eee,ree,pee,iee].forEach(u=>u(s,c)),e.compilerExtensions.forEach(u=>u(s,c)),s.__beforeBegin=null,[nee,tee,oee].forEach(u=>u(s,c)),s.isCompiled=!0;let l=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),l=s.keywords.$pattern,delete s.keywords.$pattern),l=l||/\w+/,s.keywords&&(s.keywords=Id(s.keywords,e.case_insensitive)),a.keywordPatternRe=n(l,!0),c&&(s.begin||(s.begin=/\B|\b/),a.beginRe=n(a.begin),!s.end&&!s.endsWithParent&&(s.end=/\B|\b/),s.end&&(a.endRe=n(a.end)),a.terminatorEnd=Vt(a.end)||"",s.endsWithParent&&c.terminatorEnd&&(a.terminatorEnd+=(s.end?"|":"")+c.terminatorEnd)),s.illegal&&(a.illegalRe=n(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(u){return gee(u==="self"?s:u)})),s.contains.forEach(function(u){i(u,a)}),s.starts&&i(s.starts,c),a.matcher=o(a),a}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=Tn(e.classNameAliases||{}),i(e)}function Md(e){return e?e.endsWithParent||Md(e.starts):!1}function gee(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return Tn(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:Md(e)?Tn(e,{starts:e.starts?Tn(e.starts):null}):Object.isFrozen(e)?Tn(e):e}var mee="11.6.0";class bee extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const Go=Ad,sl=Tn,cl=Symbol("nomatch"),_ee=7,Eee=function(e){const n=Object.create(null),t=Object.create(null),r=[];let o=!0;const i="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let c={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:RJ};function a(x){return c.noHighlightRe.test(x)}function l(x){let B=x.className+" ";B+=x.parentNode?x.parentNode.className:"";const $=c.languageDetectRe.exec(B);if($){const oe=Y($[1]);return oe||(il(i.replace("{}",$[1])),il("Falling back to no-highlight mode for this block.",x)),oe?$[1]:"no-highlight"}return B.split(/\s+/).find(oe=>a(oe)||Y(oe))}function u(x,B,$){let oe="",fe="";typeof B=="object"?(oe=x,$=B.ignoreIllegals,fe=B.language):(it("10.7.0","highlight(lang, code, ...args) has been deprecated."),it("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),fe=x,oe=B),$===void 0&&($=!0);const pe={code:oe,language:fe};I("before:highlight",pe);const me=pe.result?pe.result:f(pe.language,pe.code,$);return me.code=pe.code,I("after:highlight",me),me}function f(x,B,$,oe){const fe=Object.create(null);function pe(T,q){return T.keywords[q]}function me(){if(!w.keywords){L.addText(M);return}let T=0;w.keywordPatternRe.lastIndex=0;let q=w.keywordPatternRe.exec(M),Z="";for(;q;){Z+=M.substring(T,q.index);const X=k.case_insensitive?q[0].toLowerCase():q[0],ce=pe(w,X);if(ce){const[Ce,an]=ce;if(L.addText(Z),Z="",fe[X]=(fe[X]||0)+1,fe[X]<=_ee&&(D+=an),Ce.startsWith("_"))Z+=q[0];else{const nt=k.classNameAliases[Ce]||Ce;L.addKeyword(q[0],nt)}}else Z+=q[0];T=w.keywordPatternRe.lastIndex,q=w.keywordPatternRe.exec(M)}Z+=M.substring(T),L.addText(Z)}function Le(){if(M==="")return;let T=null;if(typeof w.subLanguage=="string"){if(!n[w.subLanguage]){L.addText(M);return}T=f(w.subLanguage,M,!0,H[w.subLanguage]),H[w.subLanguage]=T._top}else T=p(M,w.subLanguage.length?w.subLanguage:null);w.relevance>0&&(D+=T.relevance),L.addSublanguage(T._emitter,T.language)}function be(){w.subLanguage!=null?Le():me(),M=""}function A(T,q){let Z=1;const X=q.length-1;for(;Z<=X;){if(!T._emit[Z]){Z++;continue}const ce=k.classNameAliases[T[Z]]||T[Z],Ce=q[Z];ce?L.addKeyword(Ce,ce):(M=Ce,me(),M=""),Z++}}function U(T,q){return T.scope&&typeof T.scope=="string"&&L.openNode(k.classNameAliases[T.scope]||T.scope),T.beginScope&&(T.beginScope._wrap?(L.addKeyword(M,k.classNameAliases[T.beginScope._wrap]||T.beginScope._wrap),M=""):T.beginScope._multi&&(A(T.beginScope,q),M="")),w=Object.create(T,{parent:{value:w}}),w}function F(T,q,Z){let X=MJ(T.endRe,Z);if(X){if(T["on:end"]){const ce=new nl(T);T["on:end"](q,ce),ce.isMatchIgnored&&(X=!1)}if(X){for(;T.endsParent&&T.parent;)T=T.parent;return T}}if(T.endsWithParent)return F(T.parent,q,Z)}function W(T){return w.matcher.regexIndex===0?(M+=T[0],1):(Q=!0,0)}function ne(T){const q=T[0],Z=T.rule,X=new nl(Z),ce=[Z.__beforeBegin,Z["on:begin"]];for(const Ce of ce)if(!!Ce&&(Ce(T,X),X.isMatchIgnored))return W(q);return Z.skip?M+=q:(Z.excludeBegin&&(M+=q),be(),!Z.returnBegin&&!Z.excludeBegin&&(M=q)),U(Z,T),Z.returnBegin?0:q.length}function le(T){const q=T[0],Z=B.substring(T.index),X=F(w,T,Z);if(!X)return cl;const ce=w;w.endScope&&w.endScope._wrap?(be(),L.addKeyword(q,w.endScope._wrap)):w.endScope&&w.endScope._multi?(be(),A(w.endScope,T)):ce.skip?M+=q:(ce.returnEnd||ce.excludeEnd||(M+=q),be(),ce.excludeEnd&&(M=q));do w.scope&&L.closeNode(),!w.skip&&!w.subLanguage&&(D+=w.relevance),w=w.parent;while(w!==X.parent);return X.starts&&U(X.starts,T),ce.returnEnd?0:q.length}function ee(){const T=[];for(let q=w;q!==k;q=q.parent)q.scope&&T.unshift(q.scope);T.forEach(q=>L.openNode(q))}let h={};function b(T,q){const Z=q&&q[0];if(M+=T,Z==null)return be(),0;if(h.type==="begin"&&q.type==="end"&&h.index===q.index&&Z===""){if(M+=B.slice(q.index,q.index+1),!o){const X=new Error(`0 width match regex (${x})`);throw X.languageName=x,X.badRule=h.rule,X}return 1}if(h=q,q.type==="begin")return ne(q);if(q.type==="illegal"&&!$){const X=new Error('Illegal lexeme "'+Z+'" for mode "'+(w.scope||"<unnamed>")+'"');throw X.mode=w,X}else if(q.type==="end"){const X=le(q);if(X!==cl)return X}if(q.type==="illegal"&&Z==="")return 1;if(V>1e5&&V>q.index*3)throw new Error("potential infinite loop, way more iterations than matches");return M+=Z,Z.length}const k=Y(x);if(!k)throw Xn(i.replace("{}",x)),new Error('Unknown language: "'+x+'"');const S=hee(k);let O="",w=oe||S;const H={},L=new c.__emitter(c);ee();let M="",D=0,K=0,V=0,Q=!1;try{for(w.matcher.considerAll();;){V++,Q?Q=!1:w.matcher.considerAll(),w.matcher.lastIndex=K;const T=w.matcher.exec(B);if(!T)break;const q=B.substring(K,T.index),Z=b(q,T);K=T.index+Z}return b(B.substring(K)),L.closeAllNodes(),L.finalize(),O=L.toHTML(),{language:x,value:O,relevance:D,illegal:!1,_emitter:L,_top:w}}catch(T){if(T.message&&T.message.includes("Illegal"))return{language:x,value:Go(B),illegal:!0,relevance:0,_illegalBy:{message:T.message,index:K,context:B.slice(K-100,K+100),mode:T.mode,resultSoFar:O},_emitter:L};if(o)return{language:x,value:Go(B),illegal:!1,relevance:0,errorRaised:T,_emitter:L,_top:w};throw T}}function d(x){const B={value:Go(x),illegal:!1,relevance:0,_top:s,_emitter:new c.__emitter(c)};return B._emitter.addText(x),B}function p(x,B){B=B||c.languages||Object.keys(n);const $=d(x),oe=B.filter(Y).filter(j).map(be=>f(be,x,!1));oe.unshift($);const fe=oe.sort((be,A)=>{if(be.relevance!==A.relevance)return A.relevance-be.relevance;if(be.language&&A.language){if(Y(be.language).supersetOf===A.language)return 1;if(Y(A.language).supersetOf===be.language)return-1}return 0}),[pe,me]=fe,Le=pe;return Le.secondBest=me,Le}function g(x,B,$){const oe=B&&t[B]||$;x.classList.add("hljs"),x.classList.add(`language-${oe}`)}function m(x){let B=null;const $=l(x);if(a($))return;if(I("before:highlightElement",{el:x,language:$}),x.children.length>0&&(c.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(x)),c.throwUnescapedHTML))throw new bee("One of your code blocks includes unescaped HTML.",x.innerHTML);B=x;const oe=B.textContent,fe=$?u(oe,{language:$,ignoreIllegals:!0}):p(oe);x.innerHTML=fe.value,g(x,$,fe.language),x.result={language:fe.language,re:fe.relevance,relevance:fe.relevance},fe.secondBest&&(x.secondBest={language:fe.secondBest.language,relevance:fe.secondBest.relevance}),I("after:highlightElement",{el:x,result:fe,text:oe})}function E(x){c=sl(c,x)}const _=()=>{C(),it("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function v(){C(),it("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let y=!1;function C(){if(document.readyState==="loading"){y=!0;return}document.querySelectorAll(c.cssSelector).forEach(m)}function P(){y&&C()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",P,!1);function N(x,B){let $=null;try{$=B(e)}catch(oe){if(Xn("Language definition for '{}' could not be registered.".replace("{}",x)),o)Xn(oe);else throw oe;$=s}$.name||($.name=x),n[x]=$,$.rawDefinition=B.bind(null,e),$.aliases&&z($.aliases,{languageName:x})}function G(x){delete n[x];for(const B of Object.keys(t))t[B]===x&&delete t[B]}function R(){return Object.keys(n)}function Y(x){return x=(x||"").toLowerCase(),n[x]||n[t[x]]}function z(x,{languageName:B}){typeof x=="string"&&(x=[x]),x.forEach($=>{t[$.toLowerCase()]=B})}function j(x){const B=Y(x);return B&&!B.disableAutodetect}function ae(x){x["before:highlightBlock"]&&!x["before:highlightElement"]&&(x["before:highlightElement"]=B=>{x["before:highlightBlock"](Object.assign({block:B.el},B))}),x["after:highlightBlock"]&&!x["after:highlightElement"]&&(x["after:highlightElement"]=B=>{x["after:highlightBlock"](Object.assign({block:B.el},B))})}function ue(x){ae(x),r.push(x)}function I(x,B){const $=x;r.forEach(function(oe){oe[$]&&oe[$](B)})}function re(x){return it("10.7.0","highlightBlock will be removed entirely in v12.0"),it("10.7.0","Please use highlightElement now."),m(x)}Object.assign(e,{highlight:u,highlightAuto:p,highlightAll:C,highlightElement:m,highlightBlock:re,configure:E,initHighlighting:_,initHighlightingOnLoad:v,registerLanguage:N,unregisterLanguage:G,listLanguages:R,getLanguage:Y,registerAliases:z,autoDetection:j,inherit:sl,addPlugin:ue}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=mee,e.regex={concat:et,lookahead:Cd,either:Xs,optional:IJ,anyNumberOfTimes:OJ};for(const x in Er)typeof Er[x]=="object"&&js.exports(Er[x]);return Object.assign(e,Er),e};var Xt=Eee({}),vee=Xt;Xt.HighlightJS=Xt;Xt.default=Xt;var Wo,al;function yee(){if(al)return Wo;al=1;function e(n){const t=n.regex,r=t.concat(/[\p{L}_]/u,t.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),o=/[\p{L}0-9._:-]+/u,i={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},c=n.inherit(s,{begin:/\(/,end:/\)/}),a=n.inherit(n.APOS_STRING_MODE,{className:"string"}),l=n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),u={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:o,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,l,a,c,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,c,l,a]}]}]},n.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},i,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[u],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[u],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t.concat(/</,t.lookahead(t.concat(r,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:u}]},{className:"tag",begin:t.concat(/<\//,t.lookahead(t.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}return Wo=e,Wo}var Ko,ll;function xee(){if(ll)return Ko;ll=1;function e(n){const t=n.regex,r={},o={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[r]}]};Object.assign(r,{className:"variable",variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},o]});const i={className:"subst",begin:/\$\(/,end:/\)/,contains:[n.BACKSLASH_ESCAPE]},s={begin:/<<-?\s*(?=\w+)/,starts:{contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},c={className:"string",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,r,i]};i.contains.push(c);const a={className:"",begin:/\\"/},l={className:"string",begin:/'/,end:/'/},u={begin:/\$\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},n.NUMBER_MODE,r]},f=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],d=n.SHEBANG({binary:`(${f.join("|")})`,relevance:10}),p={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[n.inherit(n.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},g=["if","then","else","elif","fi","for","while","in","do","done","case","esac","function"],m=["true","false"],E={match:/(\/[a-z._-]+)+/},_=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],v=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias"],y=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],C=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:g,literal:m,built_in:[..._,...v,"set","shopt",...y,...C]},contains:[d,n.SHEBANG(),p,u,n.HASH_COMMENT_MODE,s,E,c,a,l,r]}}return Ko=e,Ko}var Zo,ul;function kee(){if(ul)return Zo;ul=1;function e(n){const t=n.regex,r=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),o="decltype\\(auto\\)",i="[a-zA-Z_]\\w*::",s="<[^<>]+>",c="("+o+"|"+t.optional(i)+"[a-zA-Z_]\\w*"+t.optional(s)+")",a={className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{match:/\batomic_[a-z]{3,6}\b/}]},l="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",u={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+l+"|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},f={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},d={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(u,{className:"string"}),{className:"string",begin:/<.*?>/},r,n.C_BLOCK_COMMENT_MODE]},p={className:"title",begin:t.optional(i)+n.IDENT_RE,relevance:0},g=t.optional(i)+n.IDENT_RE+"\\s*\\(",_={keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],literal:"true false NULL",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"},v=[d,a,r,n.C_BLOCK_COMMENT_MODE,f,u],y={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:_,contains:v.concat([{begin:/\(/,end:/\)/,keywords:_,contains:v.concat(["self"]),relevance:0}]),relevance:0},C={begin:"("+c+"[\\*&\\s]+)+"+g,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:_,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:o,keywords:_,relevance:0},{begin:g,returnBegin:!0,contains:[n.inherit(p,{className:"title.function"})],relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:_,relevance:0,contains:[r,n.C_BLOCK_COMMENT_MODE,u,f,a,{begin:/\(/,end:/\)/,keywords:_,relevance:0,contains:["self",r,n.C_BLOCK_COMMENT_MODE,u,f,a]}]},a,r,n.C_BLOCK_COMMENT_MODE,d]};return{name:"C",aliases:["h"],keywords:_,disableAutodetect:!0,illegal:"</",contains:[].concat(y,C,v,[d,{begin:n.IDENT_RE+"::",keywords:_},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},n.TITLE_MODE]}]),exports:{preprocessor:d,strings:u,keywords:_}}}return Zo=e,Zo}var jo,fl;function wee(){if(fl)return jo;fl=1;function e(n){const t=n.regex,r=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),o="decltype\\(auto\\)",i="[a-zA-Z_]\\w*::",s="<[^<>]+>",c="(?!struct)("+o+"|"+t.optional(i)+"[a-zA-Z_]\\w*"+t.optional(s)+")",a={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},l="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",u={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+l+"|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},f={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},d={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(u,{className:"string"}),{className:"string",begin:/<.*?>/},r,n.C_BLOCK_COMMENT_MODE]},p={className:"title",begin:t.optional(i)+n.IDENT_RE,relevance:0},g=t.optional(i)+n.IDENT_RE+"\\s*\\(",m=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],E=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],_=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],v=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],P={type:E,keyword:m,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:_},N={className:"function.dispatch",relevance:0,keywords:{_hint:v},begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,n.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))},G=[N,d,a,r,n.C_BLOCK_COMMENT_MODE,f,u],R={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:P,contains:G.concat([{begin:/\(/,end:/\)/,keywords:P,contains:G.concat(["self"]),relevance:0}]),relevance:0},Y={className:"function",begin:"("+c+"[\\*&\\s]+)+"+g,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:P,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:o,keywords:P,relevance:0},{begin:g,returnBegin:!0,contains:[p],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[u,f]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:P,relevance:0,contains:[r,n.C_BLOCK_COMMENT_MODE,u,f,a,{begin:/\(/,end:/\)/,keywords:P,relevance:0,contains:["self",r,n.C_BLOCK_COMMENT_MODE,u,f,a]}]},a,r,n.C_BLOCK_COMMENT_MODE,d]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:P,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(R,Y,N,G,[d,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:P,contains:["self",a]},{begin:n.IDENT_RE+"::",keywords:P},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}return jo=e,jo}var Vo,dl;function Aee(){if(dl)return Vo;dl=1;function e(n){const t=["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],r=["public","private","protected","static","internal","protected","abstract","async","extern","override","unsafe","virtual","new","sealed","partial"],o=["default","false","null","true"],i=["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","scoped","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"],s=["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"],c={keyword:i.concat(s),built_in:t,literal:o},a=n.inherit(n.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),l={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},u={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},f=n.inherit(u,{illegal:/\n/}),d={className:"subst",begin:/\{/,end:/\}/,keywords:c},p=n.inherit(d,{illegal:/\n/}),g={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},n.BACKSLASH_ESCAPE,p]},m={className:"string",begin:/\$@"/,end:'"',contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},d]},E=n.inherit(m,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},p]});d.contains=[m,g,u,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,l,n.C_BLOCK_COMMENT_MODE],p.contains=[E,g,f,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,l,n.inherit(n.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];const _={variants:[m,g,u,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},v={begin:"<",end:">",contains:[{beginKeywords:"in out"},a]},y=n.IDENT_RE+"(<"+n.IDENT_RE+"(\\s*,\\s*"+n.IDENT_RE+")*>)?(\\[\\])?",C={begin:"@"+n.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],keywords:c,illegal:/::/,contains:[n.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{keyword:"if else elif endif define undef warning error line region endregion pragma checksum"}},_,l,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"},a,v,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,v,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+y+"\\s+)+"+n.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:c,contains:[{beginKeywords:r.join(" "),relevance:0},{begin:n.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,contains:[n.TITLE_MODE,v],relevance:0},{match:/\(\)/},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,relevance:0,contains:[_,l,n.C_BLOCK_COMMENT_MODE]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},C]}}return Vo=e,Vo}var Yo,pl;function Cee(){if(pl)return Yo;pl=1;const e=c=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:c.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[c.APOS_STRING_MODE,c.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:c.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),n=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],t=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],o=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],i=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function s(c){const a=c.regex,l=e(c),u={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},f="and or not only",d=/@-?\w[\w]*(-\w+)*/,p="[a-zA-Z-][a-zA-Z0-9_-]*",g=[c.APOS_STRING_MODE,c.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[l.BLOCK_COMMENT,u,l.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+p,relevance:0},l.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+r.join("|")+")"},{begin:":(:)?("+o.join("|")+")"}]},l.CSS_VARIABLE,{className:"attribute",begin:"\\b("+i.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[l.BLOCK_COMMENT,l.HEXCOLOR,l.IMPORTANT,l.CSS_NUMBER_MODE,...g,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...g,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},l.FUNCTION_DISPATCH]},{begin:a.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:d},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:f,attribute:t.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...g,l.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+n.join("|")+")\\b"}]}}return Yo=s,Yo}var Xo,hl;function See(){if(hl)return Xo;hl=1;function e(n){const t=n.regex,r={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},o={begin:"^[-\\*]{3,}",end:"$"},i={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},s={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},c={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},a=/[A-Za-z][A-Za-z0-9+.-]*/,l={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:t.concat(/\[.+?\]\(/,a,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},u={className:"strong",contains:[],variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},f={className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{begin:/_(?!_)/,end:/_/,relevance:0}]},d=n.inherit(u,{contains:[]}),p=n.inherit(f,{contains:[]});u.contains.push(p),f.contains.push(d);let g=[r,l];return[u,f,d,p].forEach(_=>{_.contains=_.contains.concat(g)}),g=g.concat(u,f),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:g},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:g}]}]},r,s,u,f,{className:"quote",begin:"^>\\s+",contains:g,end:"$"},i,o,l,c]}}return Xo=e,Xo}var Qo,gl;function Tee(){if(gl)return Qo;gl=1;function e(n){const t=n.regex;return{name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,match:t.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)},{className:"comment",variants:[{begin:t.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,end:/$/}]}}return Qo=e,Qo}var Jo,ml;function Nee(){if(ml)return Jo;ml=1;function e(n){const t=n.regex,r="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",o=t.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),i=t.concat(o,/(::\w+)*/),s={"variable.constant":["__FILE__","__LINE__"],"variable.language":["self","super"],keyword:["alias","and","attr_accessor","attr_reader","attr_writer","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","include","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield"],built_in:["proc","lambda"],literal:["true","false","nil"]},c={className:"doctag",begin:"@[A-Za-z]+"},a={begin:"#<",end:">"},l=[n.COMMENT("#","$",{contains:[c]}),n.COMMENT("^=begin","^=end",{contains:[c],relevance:10}),n.COMMENT("^__END__",n.MATCH_NOTHING_RE)],u={className:"subst",begin:/#\{/,end:/\}/,keywords:s},f={className:"string",contains:[n.BACKSLASH_ESCAPE,u],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:t.concat(/<<[-~]?'?/,t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[n.BACKSLASH_ESCAPE,u]})]}]},d="[1-9](_?[0-9])*|0",p="[0-9](_?[0-9])*",g={className:"number",relevance:0,variants:[{begin:`\\b(${d})(\\.(${p}))?([eE][+-]?(${p})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},m={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:s}]},C=[f,{variants:[{match:[/class\s+/,i,/\s+<\s+/,i]},{match:[/class\s+/,i]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:s},{relevance:0,match:[i,/\.new[ (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{match:[/def/,/\s+/,r],scope:{1:"keyword",3:"title.function"},contains:[m]},{begin:n.IDENT_RE+"::"},{className:"symbol",begin:n.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[f,{begin:r}],relevance:0},g,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:s},{begin:"("+n.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[n.BACKSLASH_ESCAPE,u],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(a,l),relevance:0}].concat(a,l);u.contains=C,m.contains=C;const P="[>?]>",N="[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]",G="(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>",R=[{begin:/^\s*=>/,starts:{end:"$",contains:C}},{className:"meta.prompt",begin:"^("+P+"|"+N+"|"+G+")(?=[ ])",starts:{end:"$",keywords:s,contains:C}}];return l.unshift(a),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:s,illegal:/\/\*/,contains:[n.SHEBANG({binary:"ruby"})].concat(R).concat(l).concat(C)}}return Jo=e,Jo}var ei,bl;function Ree(){if(bl)return ei;bl=1;function e(n){const s={keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],literal:["true","false","iota","nil"],built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]};return{name:"Go",aliases:["golang"],keywords:s,illegal:"</",contains:[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"string",variants:[n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:n.C_NUMBER_RE+"[i]",relevance:1},n.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[n.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:s,illegal:/["']/}]}]}}return ei=e,ei}var ni,_l;function Oee(){if(_l)return ni;_l=1;function e(n){const t=n.regex,r=/[_A-Za-z][_0-9A-Za-z]*/;return{name:"GraphQL",aliases:["gql"],case_insensitive:!0,disableAutodetect:!1,keywords:{keyword:["query","mutation","subscription","type","input","schema","directive","interface","union","scalar","fragment","enum","on"],literal:["true","false","null"]},contains:[n.HASH_COMMENT_MODE,n.QUOTE_STRING_MODE,n.NUMBER_MODE,{scope:"punctuation",match:/[.]{3}/,relevance:0},{scope:"punctuation",begin:/[\!\(\)\:\=\[\]\{\|\}]{1}/,relevance:0},{scope:"variable",begin:/\$/,end:/\W/,excludeEnd:!0,relevance:0},{scope:"meta",match:/@\w+/,excludeEnd:!0},{scope:"symbol",begin:t.concat(r,t.lookahead(/\s*:/)),relevance:0}],illegal:[/[;<']/,/BEGIN/]}}return ni=e,ni}var ti,El;function Iee(){if(El)return ti;El=1;function e(n){const t=n.regex,r={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:n.NUMBER_RE}]},o=n.COMMENT();o.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const i={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},s={className:"literal",begin:/\bon|off|true|false|yes|no\b/},c={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},a={begin:/\[/,end:/\]/,contains:[o,s,i,c,r,"self"],relevance:0},l=/[A-Za-z0-9_-]+/,u=/"(\\"|[^"])*"/,f=/'[^']*'/,d=t.either(l,u,f),p=t.concat(d,"(\\s*\\.\\s*",d,")*",t.lookahead(/\s*=\s*[^#\s]/));return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[o,{className:"section",begin:/\[+/,end:/\]+/},{begin:p,className:"attr",starts:{end:/$/,contains:[o,a,s,i,c,r]}}]}}return ti=e,ti}var ri,vl;function Lee(){if(vl)return ri;vl=1;var e="[0-9](_*[0-9])*",n=`\\.(${e})`,t="[0-9a-fA-F](_*[0-9a-fA-F])*",r={className:"number",variants:[{begin:`(\\b(${e})((${n})|\\.)?|(${n}))[eE][+-]?(${e})[fFdD]?\\b`},{begin:`\\b(${e})((${n})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${n})[fFdD]?\\b`},{begin:`\\b(${e})[fFdD]\\b`},{begin:`\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?(${e})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${t})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function o(s,c,a){return a===-1?"":s.replace(c,l=>o(s,c,a-1))}function i(s){const c=s.regex,a="[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*",l=a+o("(?:<"+a+"~~~(?:\\s*,\\s*"+a+"~~~)*>)?",/~~~/g,2),g={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},m={className:"meta",begin:"@"+a,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},E={className:"params",begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:[s.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:g,illegal:/<\/|#/,contains:[s.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},s.C_LINE_COMMENT_MODE,s.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[s.BACKSLASH_ESCAPE]},s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,a],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[c.concat(/(?!else)/,a),/\s+/,a,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,a],className:{1:"keyword",3:"title.class"},contains:[E,s.C_LINE_COMMENT_MODE,s.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+l+"\\s+)",s.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:g,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:[m,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,r,s.C_BLOCK_COMMENT_MODE]},s.C_LINE_COMMENT_MODE,s.C_BLOCK_COMMENT_MODE]},r,m]}}return ri=i,ri}var oi,yl;function Mee(){if(yl)return oi;yl=1;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],t=["true","false","null","undefined","NaN","Infinity"],r=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],o=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],i=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],s=["arguments","this","super","console","window","document","localStorage","module","global"],c=[].concat(i,r,o);function a(l){const u=l.regex,f=(U,{after:F})=>{const W="</"+U[0].slice(1);return U.input.indexOf(W,F)!==-1},d=e,p={begin:"<>",end:"</>"},g=/<[A-Za-z0-9\\._:-]+\s*\/>/,m={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(U,F)=>{const W=U[0].length+U.index,ne=U.input[W];if(ne==="<"||ne===","){F.ignoreMatch();return}ne===">"&&(f(U,{after:W})||F.ignoreMatch());let le;if((le=U.input.substring(W).match(/^\s+extends\s+/))&&le.index===0){F.ignoreMatch();return}}},E={$pattern:e,keyword:n,literal:t,built_in:c,"variable.language":s},_="[0-9](_?[0-9])*",v=`\\.(${_})`,y="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",C={className:"number",variants:[{begin:`(\\b(${y})((${v})|\\.)?|(${v}))[eE][+-]?(${_})\\b`},{begin:`\\b(${y})\\b((${v})\\b|\\.)?|(${v})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},P={className:"subst",begin:"\\$\\{",end:"\\}",keywords:E,contains:[]},N={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,P],subLanguage:"xml"}},G={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,P],subLanguage:"css"}},R={className:"string",begin:"`",end:"`",contains:[l.BACKSLASH_ESCAPE,P]},z={className:"comment",variants:[l.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),l.C_BLOCK_COMMENT_MODE,l.C_LINE_COMMENT_MODE]},j=[l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,N,G,R,C];P.contains=j.concat({begin:/\{/,end:/\}/,keywords:E,contains:["self"].concat(j)});const ae=[].concat(z,P.contains),ue=ae.concat([{begin:/\(/,end:/\)/,keywords:E,contains:["self"].concat(ae)}]),I={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:E,contains:ue},re={variants:[{match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,u.concat(d,"(",u.concat(/\./,d),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},x={relevance:0,match:u.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...r,...o]}},B={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},$={variants:[{match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[I],illegal:/%/},oe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function fe(U){return u.concat("(?!",U.join("|"),")")}const pe={match:u.concat(/\b/,fe([...i,"super"]),d,u.lookahead(/\(/)),className:"title.function",relevance:0},me={begin:u.concat(/\./,u.lookahead(u.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Le={match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},I]},be="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+l.UNDERSCORE_IDENT_RE+")\\s*=>",A={match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,u.lookahead(be)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[I]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:E,exports:{PARAMS_CONTAINS:ue,CLASS_REFERENCE:x},illegal:/#(?![$_A-z])/,contains:[l.SHEBANG({label:"shebang",binary:"node",relevance:5}),B,l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,N,G,R,z,C,x,{className:"attr",begin:d+u.lookahead(":"),relevance:0},A,{begin:"("+l.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[z,l.REGEXP_MODE,{className:"function",begin:be,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:l.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:E,contains:ue}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:p.begin,end:p.end},{match:g},{begin:m.begin,"on:begin":m.isTrulyOpeningTag,end:m.end}],subLanguage:"xml",contains:[{begin:m.begin,end:m.end,skip:!0,contains:["self"]}]}]},$,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+l.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[I,l.inherit(l.TITLE_MODE,{begin:d,className:"title.function"})]},{match:/\.\.\./,relevance:0},me,{match:"\\$"+d,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[I]},pe,oe,re,Le,{match:/\$[(.]/}]}}return oi=a,oi}var ii,xl;function Dee(){if(xl)return ii;xl=1;function e(n){const t={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},r={match:/[{}[\],:]/,className:"punctuation",relevance:0},o=["true","false","null"],i={scope:"literal",beginKeywords:o.join(" ")};return{name:"JSON",keywords:{literal:o},contains:[t,r,n.QUOTE_STRING_MODE,i,n.C_NUMBER_MODE,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}return ii=e,ii}var si,kl;function Fee(){if(kl)return si;kl=1;var e="[0-9](_*[0-9])*",n=`\\.(${e})`,t="[0-9a-fA-F](_*[0-9a-fA-F])*",r={className:"number",variants:[{begin:`(\\b(${e})((${n})|\\.)?|(${n}))[eE][+-]?(${e})[fFdD]?\\b`},{begin:`\\b(${e})((${n})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${n})[fFdD]?\\b`},{begin:`\\b(${e})[fFdD]\\b`},{begin:`\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?(${e})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${t})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function o(i){const s={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},c={className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},a={className:"symbol",begin:i.UNDERSCORE_IDENT_RE+"@"},l={className:"subst",begin:/\$\{/,end:/\}/,contains:[i.C_NUMBER_MODE]},u={className:"variable",begin:"\\$"+i.UNDERSCORE_IDENT_RE},f={className:"string",variants:[{begin:'"""',end:'"""(?=[^"])',contains:[u,l]},{begin:"'",end:"'",illegal:/\n/,contains:[i.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[i.BACKSLASH_ESCAPE,u,l]}]};l.contains.push(f);const d={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+i.UNDERSCORE_IDENT_RE+")?"},p={className:"meta",begin:"@"+i.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[i.inherit(f,{className:"string"}),"self"]}]},g=r,m=i.COMMENT("/\\*","\\*/",{contains:[i.C_BLOCK_COMMENT_MODE]}),E={variants:[{className:"type",begin:i.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]},_=E;return _.variants[1].contains=[E],E.variants[1].contains=[_],{name:"Kotlin",aliases:["kt","kts"],keywords:s,contains:[i.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),i.C_LINE_COMMENT_MODE,m,c,a,d,p,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:s,relevance:5,contains:[{begin:i.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[i.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:s,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[E,i.C_LINE_COMMENT_MODE,m],relevance:0},i.C_LINE_COMMENT_MODE,m,d,p,f,i.C_NUMBER_MODE]},m]},{begin:[/class|interface|trait/,/\s+/,i.UNDERSCORE_IDENT_RE],beginScope:{3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},i.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,excludeBegin:!0,returnEnd:!0},d,p]},f,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:`
`},g]}}return si=o,si}var ci,wl;function Pee(){if(wl)return ci;wl=1;const e=a=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:a.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:a.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),n=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],t=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],o=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],i=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse(),s=r.concat(o);function c(a){const l=e(a),u=s,f="and or not only",d="[\\w-]+",p="("+d+"|@\\{"+d+"\\})",g=[],m=[],E=function(j){return{className:"string",begin:"~?"+j+".*?"+j}},_=function(j,ae,ue){return{className:j,begin:ae,relevance:ue}},v={$pattern:/[a-z-]+/,keyword:f,attribute:t.join(" ")},y={begin:"\\(",end:"\\)",contains:m,keywords:v,relevance:0};m.push(a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,E("'"),E('"'),l.CSS_NUMBER_MODE,{begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",excludeEnd:!0}},l.HEXCOLOR,y,_("variable","@@?"+d,10),_("variable","@\\{"+d+"\\}"),_("built_in","~?`[^`]*?`"),{className:"attribute",begin:d+"\\s*:",end:":",returnBegin:!0,excludeEnd:!0},l.IMPORTANT,{beginKeywords:"and not"},l.FUNCTION_DISPATCH);const C=m.concat({begin:/\{/,end:/\}/,contains:g}),P={beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"}].concat(m)},N={begin:p+"\\s*:",returnBegin:!0,end:/[;}]/,relevance:0,contains:[{begin:/-(webkit|moz|ms|o)-/},l.CSS_VARIABLE,{className:"attribute",begin:"\\b("+i.join("|")+")\\b",end:/(?=:)/,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:m}}]},G={className:"keyword",begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{end:"[;{}]",keywords:v,returnEnd:!0,contains:m,relevance:0}},R={className:"variable",variants:[{begin:"@"+d+"\\s*:",relevance:15},{begin:"@"+d}],starts:{end:"[;}]",returnEnd:!0,contains:C}},Y={variants:[{begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:p,end:/\{/}],returnBegin:!0,returnEnd:!0,illegal:`[<='$"]`,relevance:0,contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,P,_("keyword","all\\b"),_("variable","@\\{"+d+"\\}"),{begin:"\\b("+n.join("|")+")\\b",className:"selector-tag"},l.CSS_NUMBER_MODE,_("selector-tag",p,0),_("selector-id","#"+p),_("selector-class","\\."+p,0),_("selector-tag","&",0),l.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",begin:":("+r.join("|")+")"},{className:"selector-pseudo",begin:":(:)?("+o.join("|")+")"},{begin:/\(/,end:/\)/,relevance:0,contains:C},{begin:"!important"},l.FUNCTION_DISPATCH]},z={begin:d+`:(:)?(${u.join("|")})`,returnBegin:!0,contains:[Y]};return g.push(a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,G,R,z,N,Y,P,l.FUNCTION_DISPATCH),{name:"Less",case_insensitive:!0,illegal:`[=>'/<($"]`,contains:g}}return ci=c,ci}var ai,Al;function Bee(){if(Al)return ai;Al=1;function e(n){const t="\\[=*\\[",r="\\]=*\\]",o={begin:t,end:r,contains:["self"]},i=[n.COMMENT("--(?!"+t+")","$"),n.COMMENT("--"+t,r,{contains:[o],relevance:10})];return{name:"Lua",keywords:{$pattern:n.UNDERSCORE_IDENT_RE,literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"},contains:i.concat([{className:"function",beginKeywords:"function",end:"\\)",contains:[n.inherit(n.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",begin:"\\(",endsWithParent:!0,contains:i}].concat(i)},n.C_NUMBER_MODE,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,{className:"string",begin:t,end:r,contains:[o],relevance:5}])}}return ai=e,ai}var li,Cl;function qee(){if(Cl)return li;Cl=1;function e(n){const t={className:"variable",variants:[{begin:"\\$\\("+n.UNDERSCORE_IDENT_RE+"\\)",contains:[n.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},r={className:"string",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,t]},o={className:"variable",begin:/\$\([\w-]+\s/,end:/\)/,keywords:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},contains:[t]},i={begin:"^"+n.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},s={className:"meta",begin:/^\.PHONY:/,end:/$/,keywords:{$pattern:/[\.\w]+/,keyword:".PHONY"}},c={className:"section",begin:/^[^\s]+:/,end:/$/,contains:[t]};return{name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"},contains:[n.HASH_COMMENT_MODE,t,r,o,i,s,c]}}return li=e,li}var ui,Sl;function Uee(){if(Sl)return ui;Sl=1;function e(n){const t=n.regex,r=["abs","accept","alarm","and","atan2","bind","binmode","bless","break","caller","chdir","chmod","chomp","chop","chown","chr","chroot","close","closedir","connect","continue","cos","crypt","dbmclose","dbmopen","defined","delete","die","do","dump","each","else","elsif","endgrent","endhostent","endnetent","endprotoent","endpwent","endservent","eof","eval","exec","exists","exit","exp","fcntl","fileno","flock","for","foreach","fork","format","formline","getc","getgrent","getgrgid","getgrnam","gethostbyaddr","gethostbyname","gethostent","getlogin","getnetbyaddr","getnetbyname","getnetent","getpeername","getpgrp","getpriority","getprotobyname","getprotobynumber","getprotoent","getpwent","getpwnam","getpwuid","getservbyname","getservbyport","getservent","getsockname","getsockopt","given","glob","gmtime","goto","grep","gt","hex","if","index","int","ioctl","join","keys","kill","last","lc","lcfirst","length","link","listen","local","localtime","log","lstat","lt","ma","map","mkdir","msgctl","msgget","msgrcv","msgsnd","my","ne","next","no","not","oct","open","opendir","or","ord","our","pack","package","pipe","pop","pos","print","printf","prototype","push","q|0","qq","quotemeta","qw","qx","rand","read","readdir","readline","readlink","readpipe","recv","redo","ref","rename","require","reset","return","reverse","rewinddir","rindex","rmdir","say","scalar","seek","seekdir","select","semctl","semget","semop","send","setgrent","sethostent","setnetent","setpgrp","setpriority","setprotoent","setpwent","setservent","setsockopt","shift","shmctl","shmget","shmread","shmwrite","shutdown","sin","sleep","socket","socketpair","sort","splice","split","sprintf","sqrt","srand","stat","state","study","sub","substr","symlink","syscall","sysopen","sysread","sysseek","system","syswrite","tell","telldir","tie","tied","time","times","tr","truncate","uc","ucfirst","umask","undef","unless","unlink","unpack","unshift","untie","until","use","utime","values","vec","wait","waitpid","wantarray","warn","when","while","write","x|0","xor","y|0"],o=/[dualxmsipngr]{0,12}/,i={$pattern:/[\w.]+/,keyword:r.join(" ")},s={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:i},c={begin:/->\{/,end:/\}/},a={variants:[{begin:/\$\d/},{begin:t.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")},{begin:/[$%@][^\s\w{]/,relevance:0}]},l=[n.BACKSLASH_ESCAPE,s,a],u=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],f=(g,m,E="\\1")=>{const _=E==="\\1"?E:t.concat(E,m);return t.concat(t.concat("(?:",g,")"),m,/(?:\\.|[^\\\/])*?/,_,/(?:\\.|[^\\\/])*?/,E,o)},d=(g,m,E)=>t.concat(t.concat("(?:",g,")"),m,/(?:\\.|[^\\\/])*?/,E,o),p=[a,n.HASH_COMMENT_MODE,n.COMMENT(/^=\w/,/=cut/,{endsWithParent:!0}),c,{className:"string",contains:l,variants:[{begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",contains:[n.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{begin:"-?\\w+\\s*=>",relevance:0}]},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\/\\/|"+n.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[n.HASH_COMMENT_MODE,{className:"regexp",variants:[{begin:f("s|tr|y",t.either(...u,{capture:!0}))},{begin:f("s|tr|y","\\(","\\)")},{begin:f("s|tr|y","\\[","\\]")},{begin:f("s|tr|y","\\{","\\}")}],relevance:2},{className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{begin:d("(?:m|qr)?",/\//,/\//)},{begin:d("m|qr",t.either(...u,{capture:!0}),/\1/)},{begin:d("m|qr",/\(/,/\)/)},{begin:d("m|qr",/\[/,/\]/)},{begin:d("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub",end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[n.TITLE_MODE]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]}];return s.contains=p,c.contains=p,{name:"Perl",aliases:["pl","pm"],keywords:i,contains:p}}return ui=e,ui}var fi,Tl;function zee(){if(Tl)return fi;Tl=1;function e(n){const t={className:"built_in",begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},r=/[a-zA-Z@][a-zA-Z0-9_]*/,a={"variable.language":["this","super"],$pattern:r,keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]},l={$pattern:r,keyword:["@interface","@class","@protocol","@implementation"]};return{name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:a,illegal:"</",contains:[t,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,n.C_NUMBER_MODE,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,{className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"class",begin:"("+l.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:l,contains:[n.UNDERSCORE_TITLE_MODE]},{begin:"\\."+n.UNDERSCORE_IDENT_RE,relevance:0}]}}return fi=e,fi}var di,Nl;function $ee(){if(Nl)return di;Nl=1;function e(n){const t=n.regex,r=/(?![A-Za-z0-9])(?![$])/,o=t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,r),i=t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,r),s={scope:"variable",match:"\\$+"+o},c={scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},a={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},l=n.inherit(n.APOS_STRING_MODE,{illegal:null}),u=n.inherit(n.QUOTE_STRING_MODE,{illegal:null,contains:n.QUOTE_STRING_MODE.contains.concat(a)}),f=n.END_SAME_AS_BEGIN({begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,contains:n.QUOTE_STRING_MODE.contains.concat(a)}),d=`[ 	
]`,p={scope:"string",variants:[u,l,f]},g={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},m=["false","null","true"],E=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],_=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],y={keyword:E,literal:(ue=>{const I=[];return ue.forEach(re=>{I.push(re),re.toLowerCase()===re?I.push(re.toUpperCase()):I.push(re.toLowerCase())}),I})(m),built_in:_},C=ue=>ue.map(I=>I.replace(/\|\d+$/,"")),P={variants:[{match:[/new/,t.concat(d,"+"),t.concat("(?!",C(_).join("\\b|"),"\\b)"),i],scope:{1:"keyword",4:"title.class"}}]},N=t.concat(o,"\\b(?!\\()"),G={variants:[{match:[t.concat(/::/,t.lookahead(/(?!class\b)/)),N],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[i,t.concat(/::/,t.lookahead(/(?!class\b)/)),N],scope:{1:"title.class",3:"variable.constant"}},{match:[i,t.concat("::",t.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[i,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},R={scope:"attr",match:t.concat(o,t.lookahead(":"),t.lookahead(/(?!::)/))},Y={relevance:0,begin:/\(/,end:/\)/,keywords:y,contains:[R,s,G,n.C_BLOCK_COMMENT_MODE,p,g,P]},z={relevance:0,match:[/\b/,t.concat("(?!fn\\b|function\\b|",C(E).join("\\b|"),"|",C(_).join("\\b|"),"\\b)"),o,t.concat(d,"*"),t.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[Y]};Y.contains.push(z);const j=[R,G,n.C_BLOCK_COMMENT_MODE,p,g,P],ae={begin:t.concat(/#\[\s*/,i),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:m,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:m,keyword:["new","array"]},contains:["self",...j]},...j,{scope:"meta",match:i}]};return{case_insensitive:!1,keywords:y,contains:[ae,n.HASH_COMMENT_MODE,n.COMMENT("//","$"),n.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:n.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},c,{scope:"variable.language",match:/\$this\b/},s,z,G,{match:[/const/,/\s/,o],scope:{1:"keyword",3:"variable.constant"}},P,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},n.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:y,contains:["self",s,G,n.C_BLOCK_COMMENT_MODE,p,g]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},n.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[n.inherit(n.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},n.UNDERSCORE_TITLE_MODE]},p,g]}}return di=e,di}var pi,Rl;function Hee(){if(Rl)return pi;Rl=1;function e(n){return{name:"PHP template",subLanguage:"xml",contains:[{begin:/<\?(php|=)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},n.inherit(n.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),n.inherit(n.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]}]}}return pi=e,pi}var hi,Ol;function Gee(){if(Ol)return hi;Ol=1;function e(n){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}return hi=e,hi}var gi,Il;function Wee(){if(Il)return gi;Il=1;function e(n){const t=n.regex,r=/[\p{XID_Start}_]\p{XID_Continue}*/u,o=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],a={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:o,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},l={className:"meta",begin:/^(>>>|\.\.\.) /},u={className:"subst",begin:/\{/,end:/\}/,keywords:a,illegal:/#/},f={begin:/\{\{/,relevance:0},d={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,l,f,u]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,l,f,u]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,f,u]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,f,u]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},p="[0-9](_?[0-9])*",g=`(\\b(${p}))?\\.(${p})|\\b(${p})\\.`,m=`\\b|${o.join("|")}`,E={className:"number",relevance:0,variants:[{begin:`(\\b(${p})|(${g}))[eE][+-]?(${p})[jJ]?(?=${m})`},{begin:`(${g})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${m})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${m})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${m})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${m})`},{begin:`\\b(${p})[jJ](?=${m})`}]},_={className:"comment",begin:t.lookahead(/# type:/),end:/$/,keywords:a,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},v={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:["self",l,E,d,n.HASH_COMMENT_MODE]}]};return u.contains=[d,E,l],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:a,illegal:/(<\/|->|\?)|=>/,contains:[l,E,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},d,_,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,r],scope:{1:"keyword",3:"title.function"},contains:[v]},{variants:[{match:[/\bclass/,/\s+/,r,/\s*/,/\(\s*/,r,/\s*\)/]},{match:[/\bclass/,/\s+/,r]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[E,v,d]}]}}return gi=e,gi}var mi,Ll;function Kee(){if(Ll)return mi;Ll=1;function e(n){return{aliases:["pycon"],contains:[{className:"meta.prompt",starts:{end:/ |$/,starts:{end:"$",subLanguage:"python"}},variants:[{begin:/^>>>(?=[ ]|$)/},{begin:/^\.\.\.(?=[ ]|$)/}]}]}}return mi=e,mi}var bi,Ml;function Zee(){if(Ml)return bi;Ml=1;function e(n){const t=n.regex,r=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,o=t.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),i=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,s=t.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/);return{name:"R",keywords:{$pattern:r,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},contains:[n.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,starts:{end:t.lookahead(t.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{scope:"variable",variants:[{match:r},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]}),n.HASH_COMMENT_MODE,{scope:"string",contains:[n.BACKSLASH_ESCAPE],variants:[n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{1:"operator",2:"number"},match:[i,o]},{scope:{1:"operator",2:"number"},match:[/%[^%]*%/,o]},{scope:{1:"punctuation",2:"number"},match:[s,o]},{scope:{2:"number"},match:[/[^a-zA-Z0-9._]|^/,o]}]},{scope:{3:"operator"},match:[r,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:i},{match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:s},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}}return bi=e,bi}var _i,Dl;function jee(){if(Dl)return _i;Dl=1;function e(n){const t=n.regex,r={className:"title.function.invoke",relevance:0,begin:t.concat(/\b/,/(?!let\b)/,n.IDENT_RE,t.lookahead(/\s*\(/))},o="([ui](8|16|32|64|128|size)|f(32|64))?",i=["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],s=["true","false","Some","None","Ok","Err"],c=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],a=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:n.IDENT_RE+"!?",type:a,keyword:i,literal:s,built_in:c},illegal:"</",contains:[n.C_LINE_COMMENT_MODE,n.COMMENT("/\\*","\\*/",{contains:["self"]}),n.inherit(n.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{begin:"\\b0b([01_]+)"+o},{begin:"\\b0o([0-7_]+)"+o},{begin:"\\b0x([A-Fa-f0-9_]+)"+o},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+o}],relevance:0},{begin:[/fn/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,n.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:n.IDENT_RE+"::",keywords:{keyword:"Self",built_in:c,type:a}},{className:"punctuation",begin:"->"},r]}}return _i=e,_i}var Ei,Fl;function Vee(){if(Fl)return Ei;Fl=1;const e=c=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:c.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[c.APOS_STRING_MODE,c.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:c.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),n=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],t=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],o=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],i=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function s(c){const a=e(c),l=o,u=r,f="@[a-z-]+",d="and or not only",g={className:"variable",begin:"(\\$"+"[a-zA-Z-][a-zA-Z0-9_-]*"+")\\b",relevance:0};return{name:"SCSS",case_insensitive:!0,illegal:"[=/|']",contains:[c.C_LINE_COMMENT_MODE,c.C_BLOCK_COMMENT_MODE,a.CSS_NUMBER_MODE,{className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},a.ATTRIBUTE_SELECTOR_MODE,{className:"selector-tag",begin:"\\b("+n.join("|")+")\\b",relevance:0},{className:"selector-pseudo",begin:":("+u.join("|")+")"},{className:"selector-pseudo",begin:":(:)?("+l.join("|")+")"},g,{begin:/\(/,end:/\)/,contains:[a.CSS_NUMBER_MODE]},a.CSS_VARIABLE,{className:"attribute",begin:"\\b("+i.join("|")+")\\b"},{begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{begin:/:/,end:/[;}{]/,relevance:0,contains:[a.BLOCK_COMMENT,g,a.HEXCOLOR,a.CSS_NUMBER_MODE,c.QUOTE_STRING_MODE,c.APOS_STRING_MODE,a.IMPORTANT,a.FUNCTION_DISPATCH]},{begin:"@(page|font-face)",keywords:{$pattern:f,keyword:"@page @font-face"}},{begin:"@",end:"[{;]",returnBegin:!0,keywords:{$pattern:/[a-z-]+/,keyword:d,attribute:t.join(" ")},contains:[{begin:f,className:"keyword"},{begin:/[a-z-]+(?=:)/,className:"attribute"},g,c.QUOTE_STRING_MODE,c.APOS_STRING_MODE,a.HEXCOLOR,a.CSS_NUMBER_MODE]},a.FUNCTION_DISPATCH]}}return Ei=s,Ei}var vi,Pl;function Yee(){if(Pl)return vi;Pl=1;function e(n){return{name:"Shell Session",aliases:["console","shellsession"],contains:[{className:"meta.prompt",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}return vi=e,vi}var yi,Bl;function Xee(){if(Bl)return yi;Bl=1;function e(n){const t=n.regex,r=n.COMMENT("--","$"),o={className:"string",variants:[{begin:/'/,end:/'/,contains:[{begin:/''/}]}]},i={begin:/"/,end:/"/,contains:[{begin:/""/}]},s=["true","false","unknown"],c=["double precision","large object","with timezone","without timezone"],a=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],l=["add","asc","collation","desc","final","first","last","view"],u=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year"],f=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],d=["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"],p=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],g=f,m=[...u,...l].filter(C=>!f.includes(C)),E={className:"variable",begin:/@[a-z0-9]+/},_={className:"operator",begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0},v={begin:t.concat(/\b/,t.either(...g),/\s*\(/),relevance:0,keywords:{built_in:g}};function y(C,{exceptions:P,when:N}={}){const G=N;return P=P||[],C.map(R=>R.match(/\|\d+$/)||P.includes(R)?R:G(R)?`${R}|0`:R)}return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,keyword:y(m,{when:C=>C.length<3}),literal:s,type:a,built_in:d},contains:[{begin:t.either(...p),relevance:0,keywords:{$pattern:/[\w\.]+/,keyword:m.concat(p),literal:s,type:a}},{className:"type",begin:t.either(...c)},v,E,o,i,n.C_NUMBER_MODE,n.C_BLOCK_COMMENT_MODE,r,_]}}return yi=e,yi}var xi,ql;function Qee(){if(ql)return xi;ql=1;function e(R){return R?typeof R=="string"?R:R.source:null}function n(R){return t("(?=",R,")")}function t(...R){return R.map(z=>e(z)).join("")}function r(R){const Y=R[R.length-1];return typeof Y=="object"&&Y.constructor===Object?(R.splice(R.length-1,1),Y):{}}function o(...R){return"("+(r(R).capture?"":"?:")+R.map(j=>e(j)).join("|")+")"}const i=R=>t(/\b/,R,/\w$/.test(R)?/\b/:/\B/),s=["Protocol","Type"].map(i),c=["init","self"].map(i),a=["Any","Self"],l=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","distributed","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],u=["false","nil","true"],f=["assignment","associativity","higherThan","left","lowerThan","none","right"],d=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],p=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],g=o(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),m=o(g,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),E=t(g,m,"*"),_=o(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),v=o(_,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),y=t(_,v,"*"),C=t(/[A-Z]/,v,"*"),P=["autoclosure",t(/convention\(/,o("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",t(/objc\(/,y,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","testable","UIApplicationMain","unknown","usableFromInline"],N=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function G(R){const Y={match:/\s+/,relevance:0},z=R.COMMENT("/\\*","\\*/",{contains:["self"]}),j=[R.C_LINE_COMMENT_MODE,z],ae={match:[/\./,o(...s,...c)],className:{2:"keyword"}},ue={match:t(/\./,o(...l)),relevance:0},I=l.filter(_e=>typeof _e=="string").concat(["_|0"]),re=l.filter(_e=>typeof _e!="string").concat(a).map(i),x={variants:[{className:"keyword",match:o(...re,...c)}]},B={$pattern:o(/\b\w+/,/#\w+/),keyword:I.concat(d),literal:u},$=[ae,ue,x],oe={match:t(/\./,o(...p)),relevance:0},fe={className:"built_in",match:t(/\b/,o(...p),/(?=\()/)},pe=[oe,fe],me={match:/->/,relevance:0},Le={className:"operator",relevance:0,variants:[{match:E},{match:`\\.(\\.|${m})+`}]},be=[me,Le],A="([0-9]_*)+",U="([0-9a-fA-F]_*)+",F={className:"number",relevance:0,variants:[{match:`\\b(${A})(\\.(${A}))?([eE][+-]?(${A}))?\\b`},{match:`\\b0x(${U})(\\.(${U}))?([pP][+-]?(${A}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},W=(_e="")=>({className:"subst",variants:[{match:t(/\\/,_e,/[0\\tnr"']/)},{match:t(/\\/,_e,/u\{[0-9a-fA-F]{1,8}\}/)}]}),ne=(_e="")=>({className:"subst",match:t(/\\/,_e,/[\t ]*(?:[\r\n]|\r\n)/)}),le=(_e="")=>({className:"subst",label:"interpol",begin:t(/\\/,_e,/\(/),end:/\)/}),ee=(_e="")=>({begin:t(_e,/"""/),end:t(/"""/,_e),contains:[W(_e),ne(_e),le(_e)]}),h=(_e="")=>({begin:t(_e,/"/),end:t(/"/,_e),contains:[W(_e),le(_e)]}),b={className:"string",variants:[ee(),ee("#"),ee("##"),ee("###"),h(),h("#"),h("##"),h("###")]},k={match:t(/`/,y,/`/)},S={className:"variable",match:/\$\d+/},O={className:"variable",match:`\\$${v}+`},w=[k,S,O],H={match:/(@|#(un)?)available/,className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:N,contains:[...be,F,b]}]}},L={className:"keyword",match:t(/@/,o(...P))},M={className:"meta",match:t(/@/,y)},D=[H,L,M],K={match:n(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:t(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,v,"+")},{className:"type",match:C,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:t(/\s+&\s+/,n(C)),relevance:0}]},V={begin:/</,end:/>/,keywords:B,contains:[...j,...$,...D,me,K]};K.contains.push(V);const Q={match:t(y,/\s*:/),keywords:"_|0",relevance:0},T={begin:/\(/,end:/\)/,relevance:0,keywords:B,contains:["self",Q,...j,...$,...pe,...be,F,b,...w,...D,K]},q={begin:/</,end:/>/,contains:[...j,K]},Z={begin:o(n(t(y,/\s*:/)),n(t(y,/\s+/,y,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:y}]},X={begin:/\(/,end:/\)/,keywords:B,contains:[Z,...j,...$,...be,F,b,...D,K,T],endsParent:!0,illegal:/["']/},ce={match:[/func/,/\s+/,o(k.match,y,E)],className:{1:"keyword",3:"title.function"},contains:[q,X,Y],illegal:[/\[/,/%/]},Ce={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[q,X,Y],illegal:/\[|%/},an={match:[/operator/,/\s+/,E],className:{1:"keyword",3:"title"}},nt={begin:[/precedencegroup/,/\s+/,C],className:{1:"keyword",3:"title"},contains:[K],keywords:[...f,...u],end:/}/};for(const _e of b.variants){const Nt=_e.contains.find(Ze=>Ze.label==="interpol");Nt.keywords=B;const Fe=[...$,...pe,...be,F,b,...w];Nt.contains=[...Fe,{begin:/\(/,end:/\)/,contains:["self",...Fe]}]}return{name:"Swift",keywords:B,contains:[...j,ce,Ce,{beginKeywords:"struct protocol class extension enum actor",end:"\\{",excludeEnd:!0,keywords:B,contains:[R.inherit(R.TITLE_MODE,{className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...$]},an,nt,{beginKeywords:"import",end:/$/,contains:[...j],relevance:0},...$,...pe,...be,F,b,...w,...D,K,T]}}return xi=G,xi}var ki,Ul;function Jee(){if(Ul)return ki;Ul=1;function e(n){const t="true false yes no null",r="[\\w#;/?:@&=+$,.~*'()[\\]]+",o={className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ 	]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ 	]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ 	]|$)"}]},i={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},s={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[n.BACKSLASH_ESCAPE,i]},c=n.inherit(s,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),a="[0-9]{4}(-[0-9][0-9]){0,2}",l="([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",u="(\\.[0-9]*)?",f="([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",d={className:"number",begin:"\\b"+a+l+u+f+"\\b"},p={end:",",endsWithParent:!0,excludeEnd:!0,keywords:t,relevance:0},g={begin:/\{/,end:/\}/,contains:[p],illegal:"\\n",relevance:0},m={begin:"\\[",end:"\\]",contains:[p],illegal:"\\n",relevance:0},E=[o,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+r},{className:"type",begin:"!<"+r+">"},{className:"type",begin:"!"+r},{className:"type",begin:"!!"+r},{className:"meta",begin:"&"+n.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+n.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},n.HASH_COMMENT_MODE,{beginKeywords:t,keywords:{literal:t}},d,{className:"number",begin:n.C_NUMBER_RE+"\\b",relevance:0},g,m,s],_=[...E];return _.pop(),_.push(c),p.contains=_,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:E}}return ki=e,ki}var wi,zl;function ene(){if(zl)return wi;zl=1;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],t=["true","false","null","undefined","NaN","Infinity"],r=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],o=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],i=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],s=["arguments","this","super","console","window","document","localStorage","module","global"],c=[].concat(i,r,o);function a(u){const f=u.regex,d=(F,{after:W})=>{const ne="</"+F[0].slice(1);return F.input.indexOf(ne,W)!==-1},p=e,g={begin:"<>",end:"</>"},m=/<[A-Za-z0-9\\._:-]+\s*\/>/,E={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(F,W)=>{const ne=F[0].length+F.index,le=F.input[ne];if(le==="<"||le===","){W.ignoreMatch();return}le===">"&&(d(F,{after:ne})||W.ignoreMatch());let ee;if((ee=F.input.substring(ne).match(/^\s+extends\s+/))&&ee.index===0){W.ignoreMatch();return}}},_={$pattern:e,keyword:n,literal:t,built_in:c,"variable.language":s},v="[0-9](_?[0-9])*",y=`\\.(${v})`,C="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",P={className:"number",variants:[{begin:`(\\b(${C})((${y})|\\.)?|(${y}))[eE][+-]?(${v})\\b`},{begin:`\\b(${C})\\b((${y})\\b|\\.)?|(${y})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},N={className:"subst",begin:"\\$\\{",end:"\\}",keywords:_,contains:[]},G={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,N],subLanguage:"xml"}},R={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,N],subLanguage:"css"}},Y={className:"string",begin:"`",end:"`",contains:[u.BACKSLASH_ESCAPE,N]},j={className:"comment",variants:[u.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:p+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),u.C_BLOCK_COMMENT_MODE,u.C_LINE_COMMENT_MODE]},ae=[u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,G,R,Y,P];N.contains=ae.concat({begin:/\{/,end:/\}/,keywords:_,contains:["self"].concat(ae)});const ue=[].concat(j,N.contains),I=ue.concat([{begin:/\(/,end:/\)/,keywords:_,contains:["self"].concat(ue)}]),re={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:_,contains:I},x={variants:[{match:[/class/,/\s+/,p,/\s+/,/extends/,/\s+/,f.concat(p,"(",f.concat(/\./,p),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,p],scope:{1:"keyword",3:"title.class"}}]},B={relevance:0,match:f.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...r,...o]}},$={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},oe={variants:[{match:[/function/,/\s+/,p,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[re],illegal:/%/},fe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function pe(F){return f.concat("(?!",F.join("|"),")")}const me={match:f.concat(/\b/,pe([...i,"super"]),p,f.lookahead(/\(/)),className:"title.function",relevance:0},Le={begin:f.concat(/\./,f.lookahead(f.concat(p,/(?![0-9A-Za-z$_(])/))),end:p,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},be={match:[/get|set/,/\s+/,p,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},re]},A="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+u.UNDERSCORE_IDENT_RE+")\\s*=>",U={match:[/const|var|let/,/\s+/,p,/\s*/,/=\s*/,/(async\s*)?/,f.lookahead(A)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[re]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:_,exports:{PARAMS_CONTAINS:I,CLASS_REFERENCE:B},illegal:/#(?![$_A-z])/,contains:[u.SHEBANG({label:"shebang",binary:"node",relevance:5}),$,u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,G,R,Y,j,P,B,{className:"attr",begin:p+f.lookahead(":"),relevance:0},U,{begin:"("+u.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[j,u.REGEXP_MODE,{className:"function",begin:A,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:u.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:_,contains:I}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:g.begin,end:g.end},{match:m},{begin:E.begin,"on:begin":E.isTrulyOpeningTag,end:E.end}],subLanguage:"xml",contains:[{begin:E.begin,end:E.end,skip:!0,contains:["self"]}]}]},oe,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+u.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[re,u.inherit(u.TITLE_MODE,{begin:p,className:"title.function"})]},{match:/\.\.\./,relevance:0},Le,{match:"\\$"+p,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[re]},me,fe,x,be,{match:/\$[(.]/}]}}function l(u){const f=a(u),d=e,p=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],g={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[f.exports.CLASS_REFERENCE]},m={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:p},contains:[f.exports.CLASS_REFERENCE]},E={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},_=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],v={$pattern:e,keyword:n.concat(_),literal:t,built_in:c.concat(p),"variable.language":s},y={className:"meta",begin:"@"+d},C=(N,G,R)=>{const Y=N.contains.findIndex(z=>z.label===G);if(Y===-1)throw new Error("can not find mode to replace");N.contains.splice(Y,1,R)};Object.assign(f.keywords,v),f.exports.PARAMS_CONTAINS.push(y),f.contains=f.contains.concat([y,g,m]),C(f,"shebang",u.SHEBANG()),C(f,"use_strict",E);const P=f.contains.find(N=>N.label==="func.def");return P.relevance=0,Object.assign(f,{name:"TypeScript",aliases:["ts","tsx"]}),f}return wi=l,wi}var Ai,$l;function nne(){if($l)return Ai;$l=1;function e(n){const t=n.regex,r={className:"string",begin:/"(""|[^/n])"C\b/},o={className:"string",begin:/"/,end:/"/,illegal:/\n/,contains:[{begin:/""/}]},i=/\d{1,2}\/\d{1,2}\/\d{4}/,s=/\d{4}-\d{1,2}-\d{1,2}/,c=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,a=/\d{1,2}(:\d{1,2}){1,2}/,l={className:"literal",variants:[{begin:t.concat(/# */,t.either(s,i),/ *#/)},{begin:t.concat(/# */,a,/ *#/)},{begin:t.concat(/# */,c,/ *#/)},{begin:t.concat(/# */,t.either(s,i),/ +/,t.either(c,a),/ *#/)}]},u={className:"number",relevance:0,variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/},{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},f={className:"label",begin:/^\w+:/},d=n.COMMENT(/'''/,/$/,{contains:[{className:"doctag",begin:/<\/?/,end:/>/}]}),p=n.COMMENT(null,/$/,{variants:[{begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]});return{name:"Visual Basic .NET",aliases:["vb"],case_insensitive:!0,classNameAliases:{label:"symbol"},keywords:{keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",literal:"true false nothing"},illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[r,o,l,u,f,d,p,{className:"meta",begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,end:/$/,keywords:{keyword:"const disable else elseif enable end externalsource if region then"},contains:[p]}]}}return Ai=e,Ai}var Ci,Hl;function tne(){if(Hl)return Ci;Hl=1;function e(n){n.regex;const t=n.COMMENT(/\(;/,/;\)/);t.contains.push("self");const r=n.COMMENT(/;;/,/$/),o=["anyfunc","block","br","br_if","br_table","call","call_indirect","data","drop","elem","else","end","export","func","global.get","global.set","local.get","local.set","local.tee","get_global","get_local","global","if","import","local","loop","memory","memory.grow","memory.size","module","mut","nop","offset","param","result","return","select","set_global","set_local","start","table","tee_local","then","type","unreachable"],i={begin:[/(?:func|call|call_indirect)/,/\s+/,/\$[^\s)]+/],className:{1:"keyword",3:"title.function"}},s={className:"variable",begin:/\$[\w_]+/},c={match:/(\((?!;)|\))+/,className:"punctuation",relevance:0},a={className:"number",relevance:0,match:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/},l={match:/(i32|i64|f32|f64)(?!\.)/,className:"type"},u={className:"keyword",match:/\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/};return{name:"WebAssembly",keywords:{$pattern:/[\w.]+/,keyword:o},contains:[r,t,{match:[/(?:offset|align)/,/\s*/,/=/],className:{1:"keyword",3:"operator"}},s,c,i,n.QUOTE_STRING_MODE,l,u,a]}}return Ci=e,Ci}var se=vee;se.registerLanguage("xml",yee());se.registerLanguage("bash",xee());se.registerLanguage("c",kee());se.registerLanguage("cpp",wee());se.registerLanguage("csharp",Aee());se.registerLanguage("css",Cee());se.registerLanguage("markdown",See());se.registerLanguage("diff",Tee());se.registerLanguage("ruby",Nee());se.registerLanguage("go",Ree());se.registerLanguage("graphql",Oee());se.registerLanguage("ini",Iee());se.registerLanguage("java",Lee());se.registerLanguage("javascript",Mee());se.registerLanguage("json",Dee());se.registerLanguage("kotlin",Fee());se.registerLanguage("less",Pee());se.registerLanguage("lua",Bee());se.registerLanguage("makefile",qee());se.registerLanguage("perl",Uee());se.registerLanguage("objectivec",zee());se.registerLanguage("php",$ee());se.registerLanguage("php-template",Hee());se.registerLanguage("plaintext",Gee());se.registerLanguage("python",Wee());se.registerLanguage("python-repl",Kee());se.registerLanguage("r",Zee());se.registerLanguage("rust",jee());se.registerLanguage("scss",Vee());se.registerLanguage("shell",Yee());se.registerLanguage("sql",Xee());se.registerLanguage("swift",Qee());se.registerLanguage("yaml",Jee());se.registerLanguage("typescript",ene());se.registerLanguage("vbnet",nne());se.registerLanguage("wasm",tne());se.HighlightJS=se;se.default=se;var rne=se;const Gl=rne,one={class:"YRTitleHeader"},ine={class:"YRTitleName"},sne={class:"YRTitleBrief"},cne={__name:"PostTitle",props:{title:String,brief:String,date:Date},setup(e){const n=e,t={weekday:"long",year:"numeric",month:"long",day:"numeric"};return(r,o)=>(ye(),Ae("div",one,[ve("h1",ine,He(n.title),1),ve("p",sne,He(n.date.toLocaleDateString("en-US",t)),1)]))}};function ane(){if(!window.MathJax){const e=document.createElement("script");e.src="https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.0/es5/tex-chtml.js",e.async=!0,document.head.appendChild(e)}}function lne(){ane(),window.MathJax={tex:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]]},options:{skipHtmlTags:["noscript","style","textarea","pre","code"]},svg:{fontCache:"global"}}}const une=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],fne=ms({__name:"Giscus",props:{id:null,host:null,repo:null,repoId:null,category:null,categoryId:null,mapping:null,term:null,theme:null,strict:null,reactionsEnabled:null,emitMetadata:null,inputPosition:null,lang:null,loading:null},setup(e){const n=Dn(!1);return bs(()=>{n.value=!0,Me(()=>import("./giscus.cb57b339.47751607.js"),[],import.meta.url)}),(t,r)=>n.value?(ye(),Ae("giscus-widget",{key:0,id:e.id,host:e.host,repo:e.repo,repoid:e.repoId,category:e.category,categoryid:e.categoryId,mapping:e.mapping,term:e.term,strict:e.strict,reactionsenabled:e.reactionsEnabled,emitmetadata:e.emitMetadata,inputposition:e.inputPosition,theme:e.theme,lang:e.lang,loading:e.loading},null,8,une)):xs("",!0)}});const dne={key:0,class:"markdown"},pne=["innerHTML"],hne={__name:"Post",setup(e){const n=Object.assign({"../docs/note/\u4E2A\u4EBA\u7AD9\uFF01By yori-vue.md":()=>Me(()=>Promise.resolve().then(()=>gb),void 0,import.meta.url).then(i=>i.default),"../docs/note/\u63D0\u95EE\u7684\u827A\u672F.md":()=>Me(()=>Promise.resolve().then(()=>mb),void 0,import.meta.url).then(i=>i.default),"../docs/study/6.S081/Xv6 and Unix utilities.md":()=>Me(()=>Promise.resolve().then(()=>FE),void 0,import.meta.url).then(i=>i.default),"../docs/study/6.S081/page tables.md":()=>Me(()=>Promise.resolve().then(()=>PE),void 0,import.meta.url).then(i=>i.default),"../docs/study/6.S081/system calls.md":()=>Me(()=>Promise.resolve().then(()=>BE),void 0,import.meta.url).then(i=>i.default),"../docs/study/CSAPP/The CSAPP Attack Lab.md":()=>Me(()=>Promise.resolve().then(()=>qE),void 0,import.meta.url).then(i=>i.default),"../docs/study/CSAPP/The CSAPP Bomb Lab.md":()=>Me(()=>Promise.resolve().then(()=>UE),void 0,import.meta.url).then(i=>i.default),"../docs/study/CSAPP/The CSAPP Cache Lab.md":()=>Me(()=>Promise.resolve().then(()=>zE),void 0,import.meta.url).then(i=>i.default),"../docs/study/CSAPP/The CSAPP Data Lab.md":()=>Me(()=>Promise.resolve().then(()=>$E),void 0,import.meta.url).then(i=>i.default),"../docs/study/OSGO-tutorial-2022/Lab/Lab1-TypeChecker.md":()=>Me(()=>Promise.resolve().then(()=>HE),void 0,import.meta.url).then(i=>i.default),"../docs/study/OSGO-tutorial-2022/OSGO-INDEX.md":()=>Me(()=>Promise.resolve().then(()=>GE),void 0,import.meta.url).then(i=>i.default),"../docs/study/OSGO-tutorial-2022/Pre-Linux\u73AF\u5883\u914D\u7F6E.md":()=>Me(()=>Promise.resolve().then(()=>WE),void 0,import.meta.url).then(i=>i.default),"../docs/study/OSGO-tutorial-2022/Pre-WSL2\u5B89\u88C5\u6559\u7A0B.md":()=>Me(()=>Promise.resolve().then(()=>KE),void 0,import.meta.url).then(i=>i.default),"../docs/study/hdlbits/hdlbits_note.md":()=>Me(()=>Promise.resolve().then(()=>ZE),void 0,import.meta.url).then(i=>i.default),"../docs/study/neovim\u5B89\u88C5.md":()=>Me(()=>Promise.resolve().then(()=>jE),void 0,import.meta.url).then(i=>i.default),"../docs/study/\u4E00\u751F\u4E00\u82AF/\u4E00\u751F\u4E00\u82AF  \u9884\u5B66\u4E60\u9636\u6BB5  PA0.md":()=>Me(()=>Promise.resolve().then(()=>VE),void 0,import.meta.url).then(i=>i.default)}),t=lm(),r=new CJ({highlight:function(i,s){if(s&&Gl.getLanguage(s))try{return Gl.highlight(i,{language:s}).value}catch{}return""}}),o=Dn({});for(const i in n)if(i.substring(i.lastIndexOf("/")+1,i.lastIndexOf("."))==t.params.name){n[i]().then(c=>{const a=nr.exports(c);o.value={title:a.attributes.title,date:a.attributes.date,body:r.render(a.body)}});break}return lne(),(i,s)=>(ye(),Ae(Te,null,[o.value!={}?(ye(),Ae("div",dne,[xe(cne,{title:o.value.title,date:o.value.date},null,8,["title","date"]),ve("article",{class:"markdown-body",innerHTML:o.value.body},null,8,pne)])):xs("",!0),xe(Ye(fne),{repo:"insorker/insorker.github.io","repo-id":"MDEwOlJlcG9zaXRvcnkzMDI5NTUyMjU=",category:"Announcements","category-id":"DIC_kwDOEg662c4CSpKy",mapping:"url",strict:"0","reactions-enabled":"1","emit-metadata":"0","input-position":"top",theme:"preferred_color_scheme",lang:"zh-CN",loading:"lazy",crossorigin:"anonymous"})],64))}},gne=Fn(hne,[["__scopeId","data-v-997828cb"]]);const mne=[{path:"/",component:Qc},{path:"/home",component:Qc},{path:"/note/",component:DE},{path:"/study/",component:av},{path:"/post/:name",component:gne},{path:"/tic80",component:bv}],bne=cm({history:kg(),routes:mne}),_ne=Km(),ec=rg(cb);ec.use(bne);ec.use(_ne);ec.mount("#app");
