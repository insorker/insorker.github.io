import{A as c}from"./AvatarHeader-554c6799.js";import{L as m}from"./ListView-fed50c95.js";import{d as l,i as e,c as r,h as p,a as n,F as u,e as d,b as i,k as f,r as k,o as s,w as v,t as y}from"./app-6170d0c3.js";import{b as S}from"./MetaPosts-5697ce02.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const w={key:0,class:"series yr-flex-col-16"},x={class:"container"},V=l({__name:"SeriesView",setup(h){const t=f(),{metaSeries:a}=S();return(L,B)=>{const _=k("RouterLink");return e(t).params.name==""||!(e(t).params.name in e(a))?(s(),r("div",w,[p(c,{title:"series"}),n("div",x,[(s(!0),r(u,null,d(e(a),(g,o)=>(s(),i(_,{key:o,to:"series/"+o},{default:v(()=>[n("div",null,y(o),1)]),_:2},1032,["to"]))),128))])])):(s(),i(m,{key:1,title:"series : "+e(t).params.name,metaPostsTable:e(a)[e(t).params.name]},null,8,["title","metaPostsTable"]))}}});const P=b(V,[["__scopeId","data-v-b9374141"]]);export{P as default};
