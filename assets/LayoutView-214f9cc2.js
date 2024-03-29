import{d as l,r as v,o,c as _,h as n,w as m,a,t as u,j as H,b,g as h,k as L,n as S,p as f,e as w,l as R,v as V,m as p,q as C,K as T,s as M,x as B,F as y,f as g}from"./app-1dc2d299.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{u as N,s as x}from"./theme-0812ffeb.js";import{T as z}from"./TheFooter-02d83914.js";const j={class:"logo yr-flex-row-4"},A={class:"brief"},F=l({__name:"HeaderLogo",props:{title:{},brief:{},to:{}},setup(s){return(e,r)=>{const t=v("RouterLink");return o(),_("div",j,[n(t,{to:e.to},{default:m(()=>[H(u(e.title),1)]),_:1},8,["to"]),a("div",A,u("~"+e.brief),1)])}}});const D=i(F,[["__scopeId","data-v-5573df8a"]]),K=l({__name:"HeaderNav",props:{name:{},path:{}},setup(s){return(e,r)=>{const t=v("RouterLink");return o(),b(t,{class:"nav",to:e.path},{default:m(()=>[H(u(e.name),1)]),_:1},8,["to"])}}});const $=i(K,[["__scopeId","data-v-2916aac7"]]),I=s=>(f("data-v-8179ffe6"),s=s(),w(),s),P={class:"dropdown"},q=I(()=>a("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"32",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},[a("path",{d:"M4 6h24v2H4zm0 18h24v2H4zm0-12h24v2H4zm0 6h24v2H4z"})],-1)),E=[q],U={class:"dropdown__list"},Y=I(()=>a("div",{class:"dropdown__mask"},null,-1)),G=l({__name:"HeaderMenu",setup(s){const e=h(!0);return(r,t)=>(o(),_("div",P,[a("div",{class:"dropdown__button",onClick:t[0]||(t[0]=d=>e.value=!e.value)},E),a("div",{class:S(["dropdown__content",{dropdown__unfold:!e.value}]),onClick:t[1]||(t[1]=d=>e.value=!0)},[a("div",U,[L(r.$slots,"default",{},void 0,!0)]),Y],2)]))}});const J=i(G,[["__scopeId","data-v-8179ffe6"]]),O=s=>(f("data-v-e3a7d5e3"),s=s(),w(),s),Q={class:"switch"},W=O(()=>a("label",{for:"yr-id-switch-theme",class:"switch__button"},null,-1)),X=l({__name:" HeaderSwitch",setup(s){const{themeState:e}=N();return(r,t)=>(o(),_("div",Q,[(o(),b(T,null,[R(a("input",{class:"switch__checkbox",type:"checkbox",id:"yr-id-switch-theme","onUpdate:modelValue":t[0]||(t[0]=d=>C(e)?e.value=d:null),onChange:t[1]||(t[1]=(...d)=>p(x)&&p(x)(...d))},null,544),[[V,p(e)]])],1024)),W]))}});const k=i(X,[["__scopeId","data-v-e3a7d5e3"]]),Z={class:"header yr-h3"},ee={class:"nav-left"},te={class:"nav-right"},se={class:"nav-right-row yr-flex-row-0"},ae={class:"yr-flex-col-0"},oe=l({__name:"TheHeader",setup(s){const e=M(),r=h(e.path);B(()=>e.path,d=>{r.value=d});const t=h([{id:1,name:"Projects",path:"/projects"},{id:2,name:"Posts",path:"/posts"},{id:3,name:"About",path:"/about"}]);return(d,ie)=>(o(),_("header",Z,[a("nav",ee,[n(D,{title:"Insorker",brief:r.value,to:"/"},null,8,["brief"])]),a("nav",te,[a("ul",se,[(o(!0),_(y,null,g(t.value,c=>(o(),_("li",{key:c.id},[n($,{name:c.name,path:c.path},null,8,["name","path"])]))),128)),a("li",null,[n(k)])]),n(J,{class:"nav-right-col"},{default:m(()=>[a("ul",ae,[(o(!0),_(y,null,g(t.value,c=>(o(),_("li",{key:c.id},[n($,{name:c.name,path:c.path},null,8,["name","path"])]))),128)),a("li",null,[n(k)])])]),_:1})])]))}});const ne=i(oe,[["__scopeId","data-v-f11972a1"]]),_e=s=>(f("data-v-6a3ad82a"),s=s(),w(),s),re={class:"page yr-flex-col-0"},de={class:"container"},ce=_e(()=>a("div",{class:"spacer"},null,-1)),le=l({__name:"LayoutView",setup(s){return(e,r)=>{const t=v("RouterView");return o(),_("div",re,[n(ne,{class:"header"}),a("main",de,[n(t)]),ce,n(z)])}}});const me=i(le,[["__scopeId","data-v-6a3ad82a"]]);export{me as default};
