import{k as c}from"./app-72e54d95.js";const t=c(!1),s=c("light");function i(){var e;try{const a=document.getElementsByTagName("html")[0],l=(e=window.matchMedia)!=null&&e.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light";a.classList.contains("light")?(t.value=!1,s.value="light"):a.classList.contains("dark")?(t.value=!0,s.value="dark"):(a.classList.add(l),t.value=l=="dark",s.value=l)}catch{console.log("theme error")}return{themeState:t,themeYori:s}}function o(){try{const e=document.getElementsByTagName("html")[0];e.classList.contains("light")?(e.classList.remove("light"),e.classList.add("dark"),t.value=!0,s.value="dark"):(e.classList.remove("dark"),e.classList.add("light"),t.value=!1,s.value="light")}catch{console.log("theme error")}}export{o as s,i as u};
