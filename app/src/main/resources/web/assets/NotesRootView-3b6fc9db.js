import{_ as v}from"./TagFilter.vuevuetypescriptsetuptruelang-1e2870e7.js";import{d as C,p as g,a as k,q as w,v as N,e as y,x as s,y as n,h as e,o as z,f as t,t as i,w as r,z as _,n as p}from"./index-00b69167.js";import{g as d,M as $}from"./splitpanes.es-00f01d1b.js";import"./EditValueModal-b7c304b9.js";import"./vee-validate.esm-da197860.js";const B={class:"page-container"},M={class:"sidebar"},S={class:"nav-title"},T={class:"nav"},V=["onClick"],q=["onClick"],E={class:"main"},A=C({__name:"NotesRootView",setup(R){const o=g(),c=k(),l=w(o.query);function m(){p(c,"/notes/trash")}function u(){p(c,"/notes")}return(a,b)=>{const h=v,f=N("router-view");return z(),y("div",B,[s(e($),null,{default:n(()=>[s(e(d),{size:"20","min-size":"10"},{default:n(()=>[t("div",M,[t("h2",S,i(a.$t("page_title.notes")),1),t("ul",T,[t("li",{onClick:r(u,["prevent"]),class:_({active:e(o).path==="/notes"&&!e(l)})},i(a.$t("all")),11,V),t("li",{onClick:r(m,["prevent"]),class:_({active:e(o).path==="/notes/trash"})},i(a.$t("trash")),11,q)]),s(h,{type:"NOTE",selected:e(l)},null,8,["selected"])])]),_:1}),s(e(d),null,{default:n(()=>[t("div",E,[s(f)])]),_:1})]),_:1})])}}});export{A as default};