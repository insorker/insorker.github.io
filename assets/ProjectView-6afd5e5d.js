import{d as a,o as s,a as t,g as c,q as d,u as l,_ as n,k as u,b as h,F as m,l as v,p as f,f as g,i as k}from"./app-72e54d95.js";import{u as y}from"./theme-218cf78a.js";import{A as j}from"./AvatarHeader-264dfb30.js";const x=["href"],w=["src"],C=a({__name:"GhCard",props:{repo:{type:String,required:!0}},setup(e){const{themeState:o}=y();return(r,_)=>(s(),t("a",{href:`https://github.com/${r.repo}`},[c("img",{src:`https://gh-card.dev/repos/${r.repo}.svg`,class:d({"img-dark":l(o)})},null,10,w)],8,x))}});const P=n(C,[["__scopeId","data-v-8ce297d4"],["__file","/mnt/d/Project/_blog/yori-vue/src/components/common/GhCard.vue"]]),V=`insorker/insorker.github.io
insorker/yori-vue
insorker/.dotfiles
insorker/FallingMagic
xdshell/xdsh
insorker/WD-40`,b=e=>(f("data-v-881aec58"),e=e(),g(),e),I={class:"project yr-flex-col yr-gap-2"},S=b(()=>c("div",{class:"list__spacer"},null,-1)),$={class:"project__content"},B=a({__name:"ProjectView",setup(e){const o=u(V.split(`
`));return(r,_)=>(s(),t("div",I,[S,h(j,{title:"project"}),c("div",$,[(s(!0),t(m,null,v(o.value,(i,p)=>(s(),k(P,{key:p,repo:i},null,8,["repo"]))),128))])]))}});const A=n(B,[["__scopeId","data-v-881aec58"],["__file","/mnt/d/Project/_blog/yori-vue/src/views/ProjectView.vue"]]);export{A as default};
