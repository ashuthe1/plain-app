import{_ as g}from"./agilter.vuevuetypescriptsetuptruelang-20614048.js";import{_ as k}from"./ucketilter.vuevuetypescriptsetuptruelang-ef523cf6.js";import{d as y,p as C,q as w,ap as B,x as b,o as A,c as $,f as s,y as a,j as e,e as o,g as d,w as z,z as D,B as I}from"./inde-e40fd5ce.js";import{g as u,M}from"./splitpanes.es-aeea8e83.js";import"./inde-a986ec4f.js";import"./ditalueodal.vuevuetypescriptsetuptruelang-41de1b05.js";import"./odal.vuevuetypescriptsetuptruelang-c1337498.js";import"./vee-validate.esm-30412532.js";import"./eleteonfirm.vuevuetypescriptsetuptruelang-f10cca05.js";const N={class:"page-container container-fluid"},O={class:"sidebar"},S={class:"nav-title"},q={class:"nav"},x=["onClick"],R={class:"main"},U={name:"AudiosRoot",inheritAttrs:!1,customOptions:{}},K=y({...U,setup(V){var r,_;const n=C(),p=w(),i=B(n.query),c=((r=i.find(t=>t.name==="tag"))==null?void 0:r.value)??"",l=((_=i.find(t=>t.name==="bucket_id"))==null?void 0:_.value)??"";function m(){I(p,"/audios")}return(t,j)=>{const f=k,h=g,v=b("router-view");return A(),$("div",N,[s(e(M),null,{default:a(()=>[s(e(u),{size:"20"},{default:a(()=>[o("div",O,[o("h2",S,d(t.$t("page_title.audios")),1),o("ul",q,[o("li",{onClick:z(m,["prevent"]),class:D({active:e(n).path==="/audios"&&!e(c)&&!e(l)})},d(t.$t("all")),11,x)]),s(f,{"bucket-type":"AUDIO",selected:e(l)},null,8,["selected"]),s(h,{"tag-type":"AUDIO",selected:e(c)},null,8,["selected"])])]),_:1}),s(e(u),null,{default:a(()=>[o("div",R,[s(v)])]),_:1})]),_:1})])}}});export{K as default};