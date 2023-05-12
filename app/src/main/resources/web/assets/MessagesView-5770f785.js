import{u as Z,_ as ee,a as te}from"./list-347696d3.js";import{_ as se}from"./FieldId-439f3700.js";import{_ as oe}from"./Multiselect-63456c80.js";import{_ as ae}from"./Dropdown.vuevuetypescriptsetuptruelang-24c50f04.js";import{_ as ne}from"./Breadcrumb-7c24ea6b.js";import{d as le,p as ce,s as ue,a as re,r as p,u as ie,A as de,n as pe,B as me,C as _e,D as ge,t as he,E as fe,G as ve,H as ye,I as be,o as c,c as d,b as e,e as m,v as ke,f as a,J as T,K as $e,L as Ve,g as n,w as R,M as x,N as we,F as C,y as I,x as Se,O as Te,P as Ce,k as K,Q as qe,z as b,R as k}from"./index-400f4a7b.js";import{n as De}from"./list-6498ebd9.js";import{u as Me,a as Be,b as Ue}from"./tags-f1a271ba.js";import{b as Ae,a as Fe}from"./search-e9047456.js";import"./VModal.vuevuetypescriptsetuptruelang-610de861.js";import"./vee-validate.esm-5d9cc34a.js";import"./baseIndexOf-70b929c6.js";const Qe={class:"v-toolbar"},Re={class:"right-actions"},xe={class:"row mb-3"},Ie={class:"col-md-3 col-form-label"},Ke={class:"col-md-9"},Le=["onKeyup"],Ne={class:"row mb-3"},ze={class:"col-md-3 col-form-label"},Ee={class:"col-md-9"},Ge={class:"actions"},Pe=["onClick"],He={class:"table"},Je=e("th",null,"ID",-1),Oe=["onClick"],je=["onUpdate:modelValue"],We={class:"nowrap"},Xe={class:"badge"},Ye=["title"],Ze={key:0},et={colspan:"7"},tt={class:"no-data-placeholder"},gt=le({__name:"MessagesView",setup(st){var F,Q;const _=ce(),{app:L}=ue(re()),u=p([]),{t:$}=ie(),r=de({text:"",tags:[]}),g="SMS",q=pe(),D=q.query,h=p(parseInt(((F=D.page)==null?void 0:F.toString())??"1")),f=50,v=p(0),l=p(me(((Q=D.q)==null?void 0:Q.toString())??"")),M=p(""),{tags:V}=Me(g,l,r,async s=>{i&&s.push({name:"type",op:"",value:J[i].toString()}),M.value=Ae(s),await _e(),P()}),{addToTags:N}=Be(g,u,V),{removeFromTags:z}=Ue(g,u,V),E=[{text:$("add_to_tags"),click:N},{text:$("remove_from_tags"),click:z}],{selectAll:w,toggleSelect:B}=Z(u),{loading:G,load:P,refetch:H}=ge({handle:(s,o)=>{o?he($(o),"error"):s&&(u.value=s.messages.map(S=>({...S,checked:!1})),v.value=s.messageCount)},document:fe,variables:()=>({offset:(h.value-1)*f,limit:f,query:M.value}),appApi:!0}),i=q.params.type,J={inbox:1,sent:2,drafts:3,outbox:4};ve(h,s=>{i?b(_,`/messages/${i}?page=${s}&q=${k(l.value)}`):b(_,`/messages?page=${s}&q=${k(l.value)}`)});function U(){l.value=Fe(r),A()}function A(){i?b(_,`/messages/${i}?q=${k(l.value)}`):b(_,`/messages?q=${k(l.value)}`)}return ye(()=>{be.on("refetch_by_tag_type",s=>{s===g&&H()})}),(s,o)=>{const S=ne,O=ae,j=oe,W=ee,X=se,Y=te;return c(),d(C,null,[e("div",Qe,[m(S,{current:()=>`${s.$t("page_title.messages")} (${v.value})`},null,8,["current"]),e("div",Re,[m(O,{title:s.$t("actions"),items:E},null,8,["title"]),m(W,{modelValue:l.value,"onUpdate:modelValue":o[2]||(o[2]=t=>l.value=t),search:A},{filters:ke(()=>[e("div",xe,[e("label",Ie,a(s.$t("keywords")),1),e("div",Ke,[T(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>r.text=t),class:"form-control",onKeyup:Ve(U,["enter"])},null,40,Le),[[$e,r.text]])])]),e("div",Ne,[e("label",ze,a(s.$t("tags")),1),e("div",Ee,[m(j,{modelValue:r.tags,"onUpdate:modelValue":o[1]||(o[1]=t=>r.tags=t),label:"name","track-by":"id",options:n(V)},null,8,["modelValue","options"])])]),e("div",Ge,[e("button",{type:"button",class:"btn",onClick:R(U,["stop"])},a(s.$t("search")),9,Pe)])]),_:1},8,["modelValue"])])]),e("table",He,[e("thead",null,[e("tr",null,[e("th",null,[T(e("input",{class:"form-check-input",type:"checkbox",onChange:o[3]||(o[3]=(...t)=>n(B)&&n(B)(...t)),"onUpdate:modelValue":o[4]||(o[4]=t=>we(w)?w.value=t:null)},null,544),[[x,n(w)]])]),Je,e("th",null,a(s.$t("content")),1),e("th",null,a(s.$t("sms_address")),1),e("th",null,a(s.$t("type")),1),e("th",null,a(s.$t("tags")),1),e("th",null,a(s.$t("time")),1)])]),e("tbody",null,[(c(!0),d(C,null,I(u.value,t=>(c(),d("tr",{key:t.id,class:Se({checked:t.checked}),onClick:R(y=>t.checked=!t.checked,["stop"])},[e("td",null,[T(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":y=>t.checked=y},null,8,je),[[x,t.checked]])]),e("td",null,[m(X,{id:t.id,raw:t},null,8,["id","raw"])]),e("td",null,a(t.body),1),e("td",null,a(t.address),1),e("td",We,a(s.$t(`message_type.${t.type}`)),1),e("td",null,[(c(!0),d(C,null,I(t.tags,y=>(c(),d("span",Xe,a(y.name),1))),256))]),e("td",{title:n(Te)(t.date),class:"nowrap"},a(n(Ce)(t.date)),9,Ye)],10,Oe))),128))]),u.value.length?K("",!0):(c(),d("tfoot",Ze,[e("tr",null,[e("td",et,[e("div",tt,a(s.$t(n(De)(n(G),n(L).permissions,"READ_SMS"))),1)])])]))]),v.value>f?(c(),qe(Y,{key:0,modelValue:h.value,"onUpdate:modelValue":o[5]||(o[5]=t=>h.value=t),total:v.value,limit:f},null,8,["modelValue","total"])):K("",!0)],64)}}});export{gt as default};