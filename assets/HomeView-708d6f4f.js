import{d as h,c as n,a as c,t as r,o as s,_ as p,p as g,b as y,e,r as b,f as k,w,g as m,F as x,h as S,i}from"./app-e592db3c.js";import{T as I}from"./TheFooter-71a4805d.js";const L=["href"],H=["icon"],$={key:1,class:"link__font"},N=h({__name:"SocialLink",props:{url:{type:String,required:!0},icon:{type:String,required:!1},font:{type:String,required:!1}},setup(o){return(t,a)=>(s(),n("a",{class:"link yr-flex-row yr-gap-0",href:t.url,target:"_blank",rel:"noopener"},[t.icon?(s(),n("span",{key:0,class:"link__icon",icon:t.icon},null,8,H)):c("v-if",!0),t.font?(s(),n("span",$,r(t.font),1)):c("v-if",!0)],8,L))}});const v=p(N,[["__scopeId","data-v-23173ef1"],["__file","/mnt/e/_yori_blog/yori-vue/src/components/common/SocialLink.vue"]]),V="/background.png";const B={},C=o=>(g("data-v-4449c130"),o=o(),y(),o),F={class:"wrapper"},q=C(()=>e("img",{src:V},null,-1)),z=[q];function j(o,t){return s(),n("div",F,z)}const A=p(B,[["render",j],["__scopeId","data-v-4449c130"],["__file","/mnt/e/_yori_blog/yori-vue/src/components/home/HomeImage.vue"]]),M=o=>(g("data-v-60e276ab"),o=o(),y(),o),P={class:"nav__title"},R=M(()=>e("svg",{class:"nav__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[c("! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),e("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"})],-1)),T=h({__name:"HomeNav",props:{name:{type:String,required:!0},path:{type:String,required:!0}},setup(o){return(t,a)=>{const l=b("RouterLink");return s(),k(l,{to:t.path,class:"nav"},{default:w(()=>[e("div",P,r(t.name),1),R]),_:1},8,["to"])}}});const d=p(T,[["__scopeId","data-v-60e276ab"],["__file","/mnt/e/_yori_blog/yori-vue/src/components/home/HomeNav.vue"]]),D="insorker.site",E=["Hi, this is insorker, a student who likes programming.","Besides, I like video games, go, origami, pixel art, harmonica, whistle... Just for enjoyment and not professional. Maybe we can play together.","Want to know more about me? Follow the links right below."],_={name:D,brief:E,"social-link":{github:"https://github.com/insorker",bilibili:"https://space.bilibili.com/434618849"}},J={class:"home"},W={class:"home__pane yr-flex-col yr-gap-0"},G={class:"yr-flex-col yr-gap-1"},K={class:"home__pane-title"},O={class:"home__pane-brief yr-flex-col yr-gap-3"},Q={class:"home__pane-link"},U={class:"yr-flex-col yr-gap-4"},X={class:"home__image"},Y=h({__name:"HomeView",setup(o){const t=m(_.name),a=m([]);for(let u in _.brief)a.value.push({id:u,text:_.brief[u]});const l=m(_["social-link"]);return(u,Z)=>(s(),n("div",J,[e("div",W,[e("div",G,[e("h1",K,[e("span",null,r(t.value),1)]),e("ul",O,[(s(!0),n(x,null,S(a.value,f=>(s(),n("li",{key:f.id},r(f.text),1))),128)),e("li",null,[e("ul",Q,[e("li",null,[i(v,{icon:"github",font:"github",url:l.value.github},null,8,["url"])]),e("li",null,[i(v,{icon:"bilibili",font:"bilibili",url:l.value.bilibili},null,8,["url"])]),c(' <li><SocialLink icon="zhihu" url="https://www.zhihu.com/people/zhu-xing-da-15"></SocialLink></li> ')])])]),e("ul",U,[e("li",null,[i(d,{name:"Project",path:"project"})]),e("li",null,[i(d,{name:"Note",path:"note"})]),e("li",null,[i(d,{name:"About",path:"about"})])])]),i(I)]),e("div",X,[i(A)])]))}});const te=p(Y,[["__scopeId","data-v-b4e148ca"],["__file","/mnt/e/_yori_blog/yori-vue/src/views/HomeView.vue"]]);export{te as default};
