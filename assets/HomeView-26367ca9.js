import{d as vt,c as J,w as Ae,h as Ce,o as M,a as B,b as G,u as Oe,e as Se,f as S,g as Pe,r as Ee,i as Ie,j as Ne,t as Wt,p as Te,k as ze,l as rt,F as hn,m as yn}from"./app-ccc73758.js";import{_ as zt}from"./_plugin-vue_export-helper-c27b6911.js";import{T as Le}from"./TheFooter-65f0193b.js";function kn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?kn(Object(e),!0).forEach(function(a){A(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):kn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Et(t){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Et(t)}function Me(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function wn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Fe(t,n,e){return n&&wn(t.prototype,n),e&&wn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function A(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function rn(t,n){return je(t)||$e(t,n)||Gn(t,n)||He()}function pt(t){return Re(t)||De(t)||Gn(t)||Ye()}function Re(t){if(Array.isArray(t))return Vt(t)}function je(t){if(Array.isArray(t))return t}function De(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $e(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Gn(t,n){if(t){if(typeof t=="string")return Vt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Vt(t,n)}}function Vt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Ye(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xn=function(){},on={},Xn={},Kn=null,qn={mark:xn,measure:xn};try{typeof window<"u"&&(on=window),typeof document<"u"&&(Xn=document),typeof MutationObserver<"u"&&(Kn=MutationObserver),typeof performance<"u"&&(qn=performance)}catch{}var Be=on.navigator||{},_n=Be.userAgent,An=_n===void 0?"":_n,U=on,k=Xn,Cn=Kn,ht=qn;U.document;var $=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",Zn=~An.indexOf("MSIE")||~An.indexOf("Trident/"),yt,kt,wt,xt,_t,R="___FONT_AWESOME___",Gt=16,Jn="fa",Qn="svg-inline--fa",q="data-fa-i2svg",Xt="data-fa-pseudo-element",Ue="data-fa-pseudo-element-pending",sn="data-prefix",fn="data-icon",On="fontawesome-i2svg",We="async",Ve=["HTML","HEAD","STYLE","SCRIPT"],te=function(){try{return!0}catch{return!1}}(),y="classic",w="sharp",ln=[y,w];function gt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[y]}})}var lt=gt((yt={},A(yt,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),A(yt,w,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),yt)),ct=gt((kt={},A(kt,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),A(kt,w,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),kt)),ut=gt((wt={},A(wt,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),A(wt,w,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),wt)),Ge=gt((xt={},A(xt,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),A(xt,w,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),xt)),Xe=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ne="fa-layers-text",Ke=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,qe=gt((_t={},A(_t,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),A(_t,w,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),_t)),ee=[1,2,3,4,5,6,7,8,9,10],Ze=ee.concat([11,12,13,14,15,16,17,18,19,20]),Je=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],X={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mt=new Set;Object.keys(ct[y]).map(mt.add.bind(mt));Object.keys(ct[w]).map(mt.add.bind(mt));var Qe=[].concat(ln,pt(mt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",X.GROUP,X.SWAP_OPACITY,X.PRIMARY,X.SECONDARY]).concat(ee.map(function(t){return"".concat(t,"x")})).concat(Ze.map(function(t){return"w-".concat(t)})),st=U.FontAwesomeConfig||{};function ta(t){var n=k.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function na(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(k&&typeof k.querySelector=="function"){var ea=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ea.forEach(function(t){var n=rn(t,2),e=n[0],a=n[1],r=na(ta(e));r!=null&&(st[a]=r)})}var ae={styleDefault:"solid",familyDefault:"classic",cssPrefix:Jn,replacementClass:Qn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);var et=u(u({},ae),st);et.autoReplaceSvg||(et.observeMutations=!1);var m={};Object.keys(ae).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(e){et[t]=e,ft.forEach(function(a){return a(m)})},get:function(){return et[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){et.cssPrefix=n,ft.forEach(function(e){return e(m)})},get:function(){return et.cssPrefix}});U.FontAwesomeConfig=m;var ft=[];function aa(t){return ft.push(t),function(){ft.splice(ft.indexOf(t),1)}}var H=Gt,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ra(t){if(!(!t||!$)){var n=k.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=k.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return k.head.insertBefore(n,a),t}}var ia="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dt(){for(var t=12,n="";t-- >0;)n+=ia[Math.random()*62|0];return n}function at(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function cn(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function re(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oa(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(re(t[e]),'" ')},"").trim()}function Lt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function un(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function sa(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function fa(t){var n=t.transform,e=t.width,a=e===void 0?Gt:e,r=t.height,i=r===void 0?Gt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Zn?f+="translate(".concat(n.x/H-a/2,"em, ").concat(n.y/H-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/H,"em), calc(-50% + ").concat(n.y/H,"em)) "):f+="translate(".concat(n.x/H,"em, ").concat(n.y/H,"em) "),f+="scale(".concat(n.size/H*(n.flipX?-1:1),", ").concat(n.size/H*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var la=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ie(){var t=Jn,n=Qn,e=m.cssPrefix,a=m.replacementClass,r=la;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Sn=!1;function Dt(){m.autoAddCss&&!Sn&&(ra(ie()),Sn=!0)}var ca={mixout:function(){return{dom:{css:ie,insertCss:Dt}}},hooks:function(){return{beforeDOMElementCreation:function(){Dt()},beforeI2svg:function(){Dt()}}}},j=U||{};j[R]||(j[R]={});j[R].styles||(j[R].styles={});j[R].hooks||(j[R].hooks={});j[R].shims||(j[R].shims=[]);var T=j[R],oe=[],ua=function t(){k.removeEventListener("DOMContentLoaded",t),It=1,oe.map(function(n){return n()})},It=!1;$&&(It=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),It||k.addEventListener("DOMContentLoaded",ua));function ma(t){$&&(It?setTimeout(t,0):oe.push(t))}function bt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?re(t):"<".concat(n," ").concat(oa(a),">").concat(i.map(bt).join(""),"</").concat(n,">")}function Pn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var da=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},$t=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?da(e,r):e,f,c,l;for(a===void 0?(f=1,l=n[i[0]]):(f=0,l=a);f<o;f++)c=i[f],l=s(l,n[c],c,n);return l};function va(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Kt(t){var n=va(t);return n.length===1?n[0].toString(16):null}function pa(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function En(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function qt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=En(n);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,En(n)):T.styles[t]=u(u({},T.styles[t]||{}),i),t==="fas"&&qt("fa",n)}var At,Ct,Ot,Q=T.styles,ga=T.shims,ba=(At={},A(At,y,Object.values(ut[y])),A(At,w,Object.values(ut[w])),At),mn=null,se={},fe={},le={},ce={},ue={},ha=(Ct={},A(Ct,y,Object.keys(lt[y])),A(Ct,w,Object.keys(lt[w])),Ct);function ya(t){return~Qe.indexOf(t)}function ka(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!ya(r)?r:null}var me=function(){var n=function(i){return $t(Q,function(o,s,f){return o[f]=$t(s,i,{}),o},{})};se=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),fe=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ue=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in Q||m.autoFetchSvg,a=$t(ga,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});le=a.names,ce=a.unicodes,mn=Mt(m.styleDefault,{family:m.familyDefault})};aa(function(t){mn=Mt(t.styleDefault,{family:m.familyDefault})});me();function dn(t,n){return(se[t]||{})[n]}function wa(t,n){return(fe[t]||{})[n]}function K(t,n){return(ue[t]||{})[n]}function de(t){return le[t]||{prefix:null,iconName:null}}function xa(t){var n=ce[t],e=dn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function W(){return mn}var vn=function(){return{prefix:null,iconName:null,rest:[]}};function Mt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?y:e,r=lt[a][t],i=ct[a][t]||ct[a][r],o=t in T.styles?t:null;return i||o||null}var In=(Ot={},A(Ot,y,Object.keys(ut[y])),A(Ot,w,Object.keys(ut[w])),Ot);function Ft(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},A(n,y,"".concat(m.cssPrefix,"-").concat(y)),A(n,w,"".concat(m.cssPrefix,"-").concat(w)),n),o=null,s=y;(t.includes(i[y])||t.some(function(c){return In[y].includes(c)}))&&(s=y),(t.includes(i[w])||t.some(function(c){return In[w].includes(c)}))&&(s=w);var f=t.reduce(function(c,l){var d=ka(m.cssPrefix,l);if(Q[l]?(l=ba[s].includes(l)?Ge[s][l]:l,o=l,c.prefix=l):ha[s].indexOf(l)>-1?(o=l,c.prefix=Mt(l,{family:s})):d?c.iconName=d:l!==m.replacementClass&&l!==i[y]&&l!==i[w]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var g=o==="fa"?de(c.iconName):{},b=K(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||b||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!Q.far&&Q.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},vn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===w&&(Q.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=K(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=W()||"fas"),f}var _a=function(){function t(){Me(this,t),this.definitions={}}return Fe(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),o[s]),qt(s,o[s]);var f=ut[y][s];f&&qt(f,o[s]),me()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(e[s][d]=c)}),e[s][f]=c}),e}}]),t}(),Nn=[],tt={},nt={},Aa=Object.keys(nt);function Ca(t,n){var e=n.mixoutsTo;return Nn=t,tt={},Object.keys(nt).forEach(function(a){Aa.indexOf(a)===-1&&delete nt[a]}),Nn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Et(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){tt[o]||(tt[o]=[]),tt[o].push(i[o])})}a.provides&&a.provides(nt)}),e}function Zt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=tt[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function Z(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=tt[t]||[];r.forEach(function(i){i.apply(null,e)})}function D(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return nt[t]?nt[t].apply(null,n):void 0}function Jt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||W();if(n)return n=K(e,n)||n,Pn(ve.definitions,e,n)||Pn(T.styles,e,n)}var ve=new _a,Oa=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,Z("noAuto")},Sa={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(Z("beforeI2svg",n),D("pseudoElements2svg",n),D("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ma(function(){Ea({autoReplaceSvgRoot:e}),Z("watch",n)})}},Pa={icon:function(n){if(n===null)return null;if(Et(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:K(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Mt(n[0]);return{prefix:a,iconName:K(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(Xe))){var r=Ft(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=W();return{prefix:i,iconName:K(i,n)||n}}}},I={noAuto:Oa,config:m,dom:Sa,parse:Pa,library:ve,findIconDefinition:Jt,toHtml:bt},Ea=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?k:e;(Object.keys(T.styles).length>0||m.autoFetchSvg)&&$&&m.autoReplaceSvg&&I.dom.i2svg({node:a})};function Rt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return bt(a)})}}),Object.defineProperty(t,"node",{get:function(){if($){var a=k.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ia(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(un(o)&&e.found&&!a.found){var s=e.width,f=e.height,c={x:s/f/2,y:.5};r.style=Lt(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Na(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function pn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,d=t.extra,g=t.watchable,b=g===void 0?!1:g,C=a.found?a:e,O=C.width,P=C.height,v=r==="fak",p=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(Y){return d.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(d.classes).join(" "),h={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(P)})},x=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(O/P*16*.0625,"em")}:{};b&&(h.attributes[q]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||dt())},children:[f]}),delete h.attributes.title);var _=u(u({},h),{},{prefix:r,iconName:i,main:e,mask:a,maskId:c,transform:o,symbol:s,styles:u(u({},x),d.styles)}),z=a.found&&e.found?D("generateAbstractMask",_)||{children:[],attributes:{}}:D("generateAbstractIcon",_)||{children:[],attributes:{}},N=z.children,jt=z.attributes;return _.children=N,_.attributes=jt,s?Na(_):Ia(_)}function Tn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[q]="");var l=u({},o.styles);un(r)&&(l.transform=fa({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var d=Lt(l);d.length>0&&(c.style=d);var g=[];return g.push({tag:"span",attributes:c,children:[n]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Ta(t){var n=t.content,e=t.title,a=t.extra,r=u(u(u({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Lt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Yt=T.styles;function Qt(t){var n=t[0],e=t[1],a=t.slice(4),r=rn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(X.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(X.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(X.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var za={found:!1,width:512,height:512};function La(t,n){!te&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function tn(t,n){var e=n;return n==="fa"&&m.styleDefault!==null&&(n=W()),new Promise(function(a,r){if(D("missingIconAbstract"),e==="fa"){var i=de(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Yt[n]&&Yt[n][t]){var o=Yt[n][t];return a(Qt(o))}La(t,n),a(u(u({},za),{},{icon:m.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}var zn=function(){},nn=m.measurePerformance&&ht&&ht.mark&&ht.measure?ht:{mark:zn,measure:zn},ot='FA "6.5.1"',Ma=function(n){return nn.mark("".concat(ot," ").concat(n," begins")),function(){return pe(n)}},pe=function(n){nn.mark("".concat(ot," ").concat(n," ends")),nn.measure("".concat(ot," ").concat(n),"".concat(ot," ").concat(n," begins"),"".concat(ot," ").concat(n," ends"))},gn={begin:Ma,end:pe},St=function(){};function Ln(t){var n=t.getAttribute?t.getAttribute(q):null;return typeof n=="string"}function Fa(t){var n=t.getAttribute?t.getAttribute(sn):null,e=t.getAttribute?t.getAttribute(fn):null;return n&&e}function Ra(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function ja(){if(m.autoReplaceSvg===!0)return Pt.replace;var t=Pt[m.autoReplaceSvg];return t||Pt.replace}function Da(t){return k.createElementNS("http://www.w3.org/2000/svg",t)}function $a(t){return k.createElement(t)}function ge(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Da:$a:e;if(typeof t=="string")return k.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(ge(o,{ceFn:a}))}),r}function Ya(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Pt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(ge(r),e)}),e.getAttribute(q)===null&&m.keepOriginalSource){var a=k.createComment(Ya(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~cn(e).indexOf(m.replacementClass))return Pt.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return bt(s)}).join(`
`);e.setAttribute(q,""),e.innerHTML=o}};function Mn(t){t()}function be(t,n){var e=typeof n=="function"?n:St;if(t.length===0)e();else{var a=Mn;m.mutateApproach===We&&(a=U.requestAnimationFrame||Mn),a(function(){var r=ja(),i=gn.begin("mutate");t.map(r),i(),e()})}}var bn=!1;function he(){bn=!0}function en(){bn=!1}var Nt=null;function Fn(t){if(Cn&&m.observeMutations){var n=t.treeCallback,e=n===void 0?St:n,a=t.nodeCallback,r=a===void 0?St:a,i=t.pseudoElementsCallback,o=i===void 0?St:i,s=t.observeMutationsRoot,f=s===void 0?k:s;Nt=new Cn(function(c){if(!bn){var l=W();at(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ln(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Ln(d.target)&&~Je.indexOf(d.attributeName))if(d.attributeName==="class"&&Fa(d.target)){var g=Ft(cn(d.target)),b=g.prefix,C=g.iconName;d.target.setAttribute(sn,b||l),C&&d.target.setAttribute(fn,C)}else Ra(d.target)&&r(d.target)})}}),$&&Nt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ha(){Nt&&Nt.disconnect()}function Ba(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Ua(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Ft(cn(t));return r.prefix||(r.prefix=W()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=wa(r.prefix,t.innerText)||dn(r.prefix,Kt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Wa(t){var n=at(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(e?n["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||dt()):(n["aria-hidden"]="true",n.focusable="false")),n}function Va(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ua(t),a=e.iconName,r=e.prefix,i=e.rest,o=Wa(t),s=Zt("parseNodeAttributes",{},t),f=n.styleParser?Ba(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ga=T.styles;function ye(t){var n=m.autoReplaceSvg==="nest"?Rn(t,{styleParser:!1}):Rn(t);return~n.extra.classes.indexOf(ne)?D("generateLayersText",t,n):D("generateSvgReplacementMutation",t,n)}var V=new Set;ln.map(function(t){V.add("fa-".concat(t))});Object.keys(lt[y]).map(V.add.bind(V));Object.keys(lt[w]).map(V.add.bind(V));V=pt(V);function jn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();var e=k.documentElement.classList,a=function(d){return e.add("".concat(On,"-").concat(d))},r=function(d){return e.remove("".concat(On,"-").concat(d))},i=m.autoFetchSvg?V:ln.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Ga));i.includes("fa")||i.push("fa");var o=[".".concat(ne,":not([").concat(q,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=at(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=gn.begin("onTree"),c=s.reduce(function(l,d){try{var g=ye(d);g&&l.push(g)}catch(b){te||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,d){Promise.all(c).then(function(g){be(g,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(g){f(),d(g)})})}function Xa(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ye(t).then(function(e){e&&be([e],n)})}function Ka(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Jt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Jt(r||{})),t(a,u(u({},e),{},{mask:r}))}}var qa=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?L:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,c=e.maskId,l=c===void 0?null:c,d=e.title,g=d===void 0?null:d,b=e.titleId,C=b===void 0?null:b,O=e.classes,P=O===void 0?[]:O,v=e.attributes,p=v===void 0?{}:v,h=e.styles,x=h===void 0?{}:h;if(n){var _=n.prefix,z=n.iconName,N=n.icon;return Rt(u({type:"icon"},n),function(){return Z("beforeDOMElementCreation",{iconDefinition:n,params:e}),m.autoA11y&&(g?p["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(C||dt()):(p["aria-hidden"]="true",p.focusable="false")),pn({icons:{main:Qt(N),mask:f?Qt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:z,transform:u(u({},L),r),symbol:o,title:g,maskId:l,titleId:C,extra:{attributes:p,styles:x,classes:P}})})}},Za={mixout:function(){return{icon:Ka(qa)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=jn,e.nodeCallback=Xa,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?k:a,i=e.callback,o=i===void 0?function(){}:i;return jn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,d=a.maskId,g=a.extra;return new Promise(function(b,C){Promise.all([tn(r,s),l.iconName?tn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var P=rn(O,2),v=P[0],p=P[1];b([e,pn({icons:{main:v,mask:p},prefix:s,iconName:r,transform:f,symbol:c,maskId:d,title:i,titleId:o,extra:g,watchable:!0})])}).catch(C)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Lt(s);f.length>0&&(r.style=f);var c;return un(o)&&(c=D("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Ja={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Rt({type:"layer"},function(){Z("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(pt(i)).join(" ")},children:o}]})}}}},Qa={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,c=f===void 0?{}:f,l=a.styles,d=l===void 0?{}:l;return Rt({type:"counter",content:e},function(){return Z("beforeDOMElementCreation",{content:e,params:a}),Ta({content:e.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(pt(s))}})})}}}},tr={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,s=o===void 0?null:o,f=a.classes,c=f===void 0?[]:f,l=a.attributes,d=l===void 0?{}:l,g=a.styles,b=g===void 0?{}:g;return Rt({type:"text",content:e},function(){return Z("beforeDOMElementCreation",{content:e,params:a}),Tn({content:e,transform:u(u({},L),i),title:s,extra:{attributes:d,styles:b,classes:["".concat(m.cssPrefix,"-layers-text")].concat(pt(c))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Zn){var c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/c,f=l.height/c}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Tn({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},nr=new RegExp('"',"ug"),Dn=[1105920,1112319];function er(t){var n=t.replace(nr,""),e=pa(n,0),a=e>=Dn[0]&&e<=Dn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Kt(r?n[0]:n),isSecondary:a||r}}function $n(t,n){var e="".concat(Ue).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=at(t.children),o=i.filter(function(N){return N.getAttribute(Xt)===n})[0],s=U.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Ke),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),g=~["Sharp"].indexOf(f[2])?w:y,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ct[g][f[2].toLowerCase()]:qe[g][c],C=er(d),O=C.value,P=C.isSecondary,v=f[0].startsWith("FontAwesome"),p=dn(b,O),h=p;if(v){var x=xa(O);x.iconName&&x.prefix&&(p=x.iconName,b=x.prefix)}if(p&&!P&&(!o||o.getAttribute(sn)!==b||o.getAttribute(fn)!==h)){t.setAttribute(e,h),o&&t.removeChild(o);var _=Va(),z=_.extra;z.attributes[Xt]=n,tn(p,b).then(function(N){var jt=pn(u(u({},_),{},{icons:{main:N,mask:vn()},prefix:b,iconName:h,extra:z,watchable:!0})),Y=k.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=jt.map(function(_e){return bt(_e)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function ar(t){return Promise.all([$n(t,"::before"),$n(t,"::after")])}function rr(t){return t.parentNode!==document.head&&!~Ve.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Xt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Yn(t){if($)return new Promise(function(n,e){var a=at(t.querySelectorAll("*")).filter(rr).map(ar),r=gn.begin("searchPseudoElements");he(),Promise.all(a).then(function(){r(),en(),n()}).catch(function(){r(),en(),e()})})}var ir={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Yn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?k:a;m.searchPseudoElements&&Yn(r)}}},Hn=!1,or={mixout:function(){return{dom:{unwatch:function(){he(),Hn=!0}}}},hooks:function(){return{bootstrap:function(){Fn(Zt("mutationObserverCallbacks",{}))},noAuto:function(){Ha()},watch:function(e){var a=e.observeMutationsRoot;Hn?en():Fn(Zt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Bn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},sr={mixout:function(){return{parse:{transform:function(e){return Bn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Bn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(c," ").concat(l)},g={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:d,path:g};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),b.path)}]}]}}}},Ht={x:0,y:0,width:"100%",height:"100%"};function Un(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function fr(t){return t.tag==="g"?t.children:[t]}var lr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Ft(r.split(" ").map(function(o){return o.trim()})):vn();return i.prefix||(i.prefix=W()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,c=i.width,l=i.icon,d=o.width,g=o.icon,b=sa({transform:f,containerWidth:d,iconWidth:c}),C={tag:"rect",attributes:u(u({},Ht),{},{fill:"white"})},O=l.children?{children:l.children.map(Un)}:{},P={tag:"g",attributes:u({},b.inner),children:[Un(u({tag:l.tag,attributes:u(u({},l.attributes),b.path)},O))]},v={tag:"g",attributes:u({},b.outer),children:[P]},p="mask-".concat(s||dt()),h="clip-".concat(s||dt()),x={tag:"mask",attributes:u(u({},Ht),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,v]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:fr(g)},x]};return a.push(_,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},Ht)}),{children:a,attributes:r}}}},cr={provides:function(n){var e=!1;U.matchMedia&&(e=U.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ur={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},mr=[ca,Za,Ja,Qa,tr,ir,or,sr,lr,cr,ur];Ca(mr,{mixoutsTo:I});I.noAuto;I.config;var dr=I.library;I.dom;var an=I.parse;I.findIconDefinition;I.toHtml;var vr=I.icon;I.layer;I.text;I.counter;function Wn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function F(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Wn(Object(e),!0).forEach(function(a){E(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Wn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Tt(t){"@babel/helpers - typeof";return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Tt(t)}function E(t,n,e){return n=hr(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function pr(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function gr(t,n){if(t==null)return{};var e=pr(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}function br(t,n){if(typeof t!="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var a=e.call(t,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function hr(t){var n=br(t,"string");return typeof n=="symbol"?n:String(n)}var yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ke={exports:{}};(function(t){(function(n){var e=function(v,p,h){if(!c(p)||d(p)||g(p)||b(p)||f(p))return p;var x,_=0,z=0;if(l(p))for(x=[],z=p.length;_<z;_++)x.push(e(v,p[_],h));else{x={};for(var N in p)Object.prototype.hasOwnProperty.call(p,N)&&(x[v(N,h)]=e(v,p[N],h))}return x},a=function(v,p){p=p||{};var h=p.separator||"_",x=p.split||/(?=[A-Z])/;return v.split(x).join(h)},r=function(v){return C(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(p,h){return h?h.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var p=r(v);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(v,p){return a(v,p).toLowerCase()},s=Object.prototype.toString,f=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},l=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},g=function(v){return s.call(v)=="[object RegExp]"},b=function(v){return s.call(v)=="[object Boolean]"},C=function(v){return v=v-0,v===v},O=function(v,p){var h=p&&"process"in p?p.process:p;return typeof h!="function"?v:function(x,_){return h(x,v,_)}},P={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,p){return e(O(r,p),v)},decamelizeKeys:function(v,p){return e(O(o,p),v,p)},pascalizeKeys:function(v,p){return e(O(i,p),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=P:n.humps=P})(yr)})(ke);var kr=ke.exports,wr=["class","style"];function xr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=kr.camelize(e.slice(0,a)),i=e.slice(a+1).trim();return n[r]=i,n},{})}function _r(t){return t.split(/\s+/).reduce(function(n,e){return n[e]=!0,n},{})}function we(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return we(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var l=t.attributes[c];switch(c){case"class":f.class=_r(l);break;case"style":f.style=xr(l);break;default:f.attrs[c]=l}return f},{attrs:{},class:{},style:{}});e.class;var i=e.style,o=i===void 0?{}:i,s=gr(e,wr);return Ce(t.tag,F(F(F({},n),{},{class:r.class,style:F(F({},r.style),o)},r.attrs),s),a)}var xe=!1;try{xe=!0}catch{}function Ar(){if(!xe&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Bt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?E({},t,n):{}}function Cr(t){var n,e=(n={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},E(n,"fa-".concat(t.size),t.size!==null),E(n,"fa-rotate-".concat(t.rotation),t.rotation!==null),E(n,"fa-pull-".concat(t.pull),t.pull!==null),E(n,"fa-swap-opacity",t.swapOpacity),E(n,"fa-bounce",t.bounce),E(n,"fa-shake",t.shake),E(n,"fa-beat",t.beat),E(n,"fa-fade",t.fade),E(n,"fa-beat-fade",t.beatFade),E(n,"fa-flash",t.flash),E(n,"fa-spin-pulse",t.spinPulse),E(n,"fa-spin-reverse",t.spinReverse),n);return Object.keys(e).map(function(a){return e[a]?a:null}).filter(function(a){return a})}function Vn(t){if(t&&Tt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(an.icon)return an.icon(t);if(t===null)return null;if(Tt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Or=vt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,e){var a=e.attrs,r=J(function(){return Vn(n.icon)}),i=J(function(){return Bt("classes",Cr(n))}),o=J(function(){return Bt("transform",typeof n.transform=="string"?an.transform(n.transform):n.transform)}),s=J(function(){return Bt("mask",Vn(n.mask))}),f=J(function(){return vr(r.value,F(F(F(F({},i.value),o.value),s.value),{},{symbol:n.symbol,title:n.title,titleId:n.titleId,maskId:n.maskId}))});Ae(f,function(l){if(!l)return Ar("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=J(function(){return f.value?we(f.value.abstract[0],{},a):null});return function(){return c.value}}}),Sr={prefix:"fab",iconName:"bilibili",icon:[512,512,[],"e3d9","M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92.02C65.57 463.2 43.81 454.2 26.74 436.8C9.682 419.4 .7667 396.5 0 368.2V169.8C.7667 143.8 9.682 122.2 26.74 104.1C43.81 87.75 65.57 78.77 92.02 78H121.4L96.05 52.19C90.3 46.46 87.42 39.19 87.42 30.4C87.42 21.6 90.3 14.34 96.05 8.603C101.8 2.868 109.1 0 117.9 0C126.7 0 134 2.868 139.8 8.603L213.1 78H301.1L375.6 8.603C381.7 2.868 389.2 0 398 0C406.8 0 414.1 2.868 419.9 8.603C425.6 14.34 428.5 21.6 428.5 30.4C428.5 39.19 425.6 46.46 419.9 52.19L394.6 78L423.9 78C450.3 78.77 471.9 87.75 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.05C86.46 140.9 78.6 144.2 72.47 150.3C66.33 156.4 63.07 164.2 62.69 173.8V368.2C62.69 377.4 65.95 385.2 72.47 391.7C78.99 398.2 86.85 401.5 96.05 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z"]},Pr={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Er={prefix:"fab",iconName:"zhihu",icon:[640,512,[],"f63f","M170.54 148.13v217.54l23.43.01 7.71 26.37 42.01-26.37h49.53V148.13H170.54zm97.75 193.93h-27.94l-27.9 17.51-5.08-17.47-11.9-.04V171.75h72.82v170.31zm-118.46-94.39H97.5c1.74-27.1 2.2-51.59 2.2-73.46h51.16s1.97-22.56-8.58-22.31h-88.5c3.49-13.12 7.87-26.66 13.12-40.67 0 0-24.07 0-32.27 21.57-3.39 8.9-13.21 43.14-30.7 78.12 5.89-.64 25.37-1.18 36.84-22.21 2.11-5.89 2.51-6.66 5.14-14.53h28.87c0 10.5-1.2 66.88-1.68 73.44H20.83c-11.74 0-15.56 23.62-15.56 23.62h65.58C66.45 321.1 42.83 363.12 0 396.34c20.49 5.85 40.91-.93 51-9.9 0 0 22.98-20.9 35.59-69.25l53.96 64.94s7.91-26.89-1.24-39.99c-7.58-8.92-28.06-33.06-36.79-41.81L87.9 311.95c4.36-13.98 6.99-27.55 7.87-40.67h61.65s-.09-23.62-7.59-23.62v.01zm412.02-1.6c20.83-25.64 44.98-58.57 44.98-58.57s-18.65-14.8-27.38-4.06c-6 8.15-36.83 48.2-36.83 48.2l19.23 14.43zm-150.09-59.09c-9.01-8.25-25.91 2.13-25.91 2.13s39.52 55.04 41.12 57.45l19.46-13.73s-25.67-37.61-34.66-45.86h-.01zM640 258.35c-19.78 0-130.91.93-131.06.93v-101c4.81 0 12.42-.4 22.85-1.2 40.88-2.41 70.13-4 87.77-4.81 0 0 12.22-27.19-.59-33.44-3.07-1.18-23.17 4.58-23.17 4.58s-165.22 16.49-232.36 18.05c1.6 8.82 7.62 17.08 15.78 19.55 13.31 3.48 22.69 1.7 49.15.89 24.83-1.6 43.68-2.43 56.51-2.43v99.81H351.41s2.82 22.31 25.51 22.85h107.94v70.92c0 13.97-11.19 21.99-24.48 21.12-14.08.11-26.08-1.15-41.69-1.81 1.99 3.97 6.33 14.39 19.31 21.84 9.88 4.81 16.17 6.57 26.02 6.57 29.56 0 45.67-17.28 44.89-45.31v-73.32h122.36c9.68 0 8.7-23.78 8.7-23.78l.03-.01z"]};const Ir=["href"],Nr={key:0},Tr=vt({__name:"SocialLink",props:{url:{},icon:{}},setup(t){return dr.add(Pr,Sr,Er),(n,e)=>(M(),B("a",{class:"link yr-flex-row yr-gap-0",href:n.url,target:"_blank",rel:"noopener"},[n.icon?(M(),B("span",Nr,[G(Oe(Or),{icon:["fab",n.icon]},null,8,["icon"])])):Se("",!0)],8,Ir))}});const zr=zt(Tr,[["__scopeId","data-v-70a0aaf3"]]),Lr={class:"wrapper"},Mr=["src"],Fr=vt({__name:"HomeImage",props:{url:{},offset:{}},setup(t){return Pe(n=>({"7e9190bc":n.offset})),(n,e)=>(M(),B("div",Lr,[S("img",{src:n.url},null,8,Mr)]))}});const Rr=zt(Fr,[["__scopeId","data-v-41f2213d"]]),jr=t=>(Te("data-v-51b8711f"),t=t(),ze(),t),Dr={class:"nav__title"},$r=jr(()=>S("svg",{class:"nav__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[S("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"})],-1)),Yr=vt({__name:"HomeNav",props:{name:{},path:{}},setup(t){return(n,e)=>{const a=Ee("RouterLink");return M(),Ie(a,{to:n.path,class:"nav"},{default:Ne(()=>[S("div",Dr,Wt(n.name),1),$r]),_:1},8,["to"])}}});const Ut=zt(Yr,[["__scopeId","data-v-51b8711f"]]),Hr="insorker.site",Br=["Hi, this is insorker, a student who likes programming.","Besides, I like video games, go, origami, pixel art, harmonica, whistle... Just for enjoyment and not professional. Maybe we can play together.","Want to know more about me? Follow the links right below."],it={title:Hr,brief:Br,"social-link":{github:"https://github.com/insorker",bilibili:"https://space.bilibili.com/434618849",zhihu:"https://www.zhihu.com/people/zhu-xing-da-15"},"image-url":"https://image.insorker.site/2024/03/e09ce3282909613727cc46fc5a3e1896.png","image-offset":"-70%"},Ur={class:"main-container yr-flex-col yr-gap-0"},Wr={class:"yr-flex-col yr-gap-1"},Vr={class:"title"},Gr={class:"brief yr-flex-col yr-gap-3"},Xr={class:"social-link"},Kr={class:"yr-flex-col yr-gap-4"},qr={class:"sidebar-container"},Zr=vt({__name:"HomeView",setup(t){const n=rt(it.title),e=rt(it.brief),a=rt(it["social-link"]),r=rt(it["image-url"]),i=rt(it["image-offset"]);return(o,s)=>(M(),B("main",null,[S("div",Ur,[S("div",Wr,[S("h1",Vr,[S("span",null,Wt(n.value),1)]),S("ul",Gr,[(M(!0),B(hn,null,yn(e.value,(f,c)=>(M(),B("li",{key:c},Wt(f),1))),128)),S("li",null,[S("ul",Xr,[(M(!0),B(hn,null,yn(a.value,(f,c,l)=>(M(),B("li",{key:l},[G(zr,{icon:c,url:f},null,8,["icon","url"])]))),128))])])]),S("ul",Kr,[S("li",null,[G(Ut,{name:"Project",path:"project"})]),S("li",null,[G(Ut,{name:"Note",path:"note"})]),S("li",null,[G(Ut,{name:"About",path:"about"})])])]),G(Le)]),S("div",qr,[G(Rr,{url:r.value,offset:i.value},null,8,["url","offset"])])]))}});const ni=zt(Zr,[["__scopeId","data-v-33ff2dad"]]);export{ni as default};
