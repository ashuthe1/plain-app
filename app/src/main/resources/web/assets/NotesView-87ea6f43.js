import{u as ve,_ as fe,a as ge,b as ke}from"./list-3ca62a45.js";import{o as l,e as a,f as t,d as be,a as $e,r as f,u as ye,B as Te,D as Ce,p as qe,C as we,E as Ve,G as Ae,a2 as Se,I as g,H as De,J as Me,K as Be,x as d,h as s,F as C,L as k,w as r,j as S,t as i,y as Ie,A as K,M as Ne,N as Qe,O as Ue,k as O,aW as Re,aX as Ze,n as W,Q as X,R as He,z as Le,U as Y,V as ze,Y as Ee,Z as Fe,W as Ge,X as je,aY as x,$ as Ke,a1 as Oe}from"./index-d84b2961.js";import{_ as We}from"./Breadcrumb-94ff4433.js";import{u as Xe,a as Ye}from"./tags-0f33eb85.js";import"./vee-validate.esm-4c3e0ef1.js";const xe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Je=t("path",{fill:"currentColor",d:"M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM7 6v13h10V6H7Zm2 10q0 .425.288.713T10 17q.425 0 .713-.288T11 16V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v7Zm4 0q0 .425.288.713T14 17q.425 0 .713-.288T15 16V9q0-.425-.288-.713T14 8q-.425 0-.713.288T13 9v7ZM7 6v13V6Z"},null,-1),Pe=[Je];function et(J,q){return l(),a("svg",xe,Pe)}const tt={name:"material-symbols-delete-outline-rounded",render:et},st={class:"v-toolbar"},ot=["onClick"],nt=t("md-ripple",null,null,-1),lt=t("md-ripple",null,null,-1),at=["onClick"],it={class:"filters"},ct=["label"],dt={class:"form-label"},rt=["label","selected","onClick"],ut={class:"buttons"},_t=["onClick"],pt={class:"table-responsive"},ht={class:"table"},mt=["checked","indeterminate"],vt=t("th",null,null,-1),ft=["onClick"],gt=["checked"],kt={style:{"min-width":"200px"}},bt=["onClick"],$t={class:"nowrap"},yt={class:"action-btns"},Tt=["onClick"],Ct=t("md-ripple",null,null,-1),qt=["onClick"],wt=t("md-ripple",null,null,-1),Vt={class:"nowrap"},At={class:"nowrap"},St={key:0},Dt={colspan:"6"},Mt={class:"no-data-placeholder"},b=50,Zt=be({__name:"NotesView",setup(J){var E,F;const q=$e(),u=f([]),D=f(),{t:M}=ye(),c=Te({text:"",tags:[]}),_=Ce.NOTE,B=qe().query,$=f(parseInt(((E=B.page)==null?void 0:E.toString())??"1")),p=f(we(((F=B.q)==null?void 0:F.toString())??"")),w=f(""),{tags:y}=Xe(_,p,c,async e=>{e.push({name:"trash",op:"",value:"false"}),w.value=Qe(e),await Ue(),ne()}),{addToTags:P}=Ye(_,u,y),{allChecked:I,realAllChecked:N,selectRealAll:ee,allCheckedAlertVisible:te,clearSelection:V,toggleAllChecked:Q,toggleItemChecked:U,toggleRow:se,total:m,checked:R}=ve(u),{loading:oe,load:ne,refetch:A}=Ve({handle:(e,n)=>{n?O(M(n),"error"):e&&(u.value=e.notes.map(v=>({...v,checked:!1})),m.value=e.noteCount)},document:Re,variables:()=>({offset:($.value-1)*b,limit:b,query:w.value}),appApi:!0});function le(e){Ee(Fe,{type:_,tags:y.value,item:{key:e.id,title:"",size:0},selected:y.value.filter(n=>e.tags.some(v=>v.id===n.id))})}Ae($,e=>{W(q,`/notes?page=${e}&q=${X(p.value)}`)});const{mutate:Z,onDone:ae}=Se({document:Ze,appApi:!0});function ie(){const e=u.value.filter(n=>n.checked);if(e.length===0){O(M("select_first"),"error");return}Z({query:`ids:${e.map(n=>n.id).join(",")}`})}ae(()=>{V(),A(),u.value.some(e=>e.tags.length)&&g.emit("refetch_tags",_)});function ce(e){c.tags.includes(e)?Ge(c.tags,n=>n.id===e.id):c.tags.push(e)}function de(){p.value=je(c),H(),D.value.dismiss()}function H(){W(q,`/notes?q=${X(p.value)}`)}const L=e=>{e.type===_&&(V(),A())},z=e=>{e.type===_&&A()};De(()=>{g.on("item_tags_updated",z),g.on("items_tags_updated",L)}),Me(()=>{g.off("item_tags_updated",z),g.off("items_tags_updated",L)});function re(e){x.push(`/notes/${e.id}`)}function ue(){x.push("/notes/create")}return(e,n)=>{const v=We,G=tt,j=Ke,_e=fe,pe=ge,he=Oe,me=ke,T=Be("tooltip");return l(),a(C,null,[t("div",st,[d(v,{current:()=>`${e.$t("page_title.notes")} (${s(m)})`},null,8,["current"]),s(R)?(l(),a(C,{key:0},[k((l(),a("button",{class:"icon-button",onClick:r(ie,["stop"])},[nt,d(G)],8,ot)),[[T,e.$t("move_to_trash")]]),k((l(),a("button",{class:"icon-button",onClick:n[0]||(n[0]=r(o=>s(P)(s(N),w.value),["stop"]))},[lt,d(j)])),[[T,e.$t("add_to_tags")]])],64)):S("",!0),t("md-outlined-button",{onClick:r(ue,["prevent"])},i(e.$t("create")),9,at),d(_e,{ref_key:"searchInputRef",ref:D,modelValue:p.value,"onUpdate:modelValue":n[2]||(n[2]=o=>p.value=o),search:H},{filters:Ie(()=>[t("div",it,[k(t("md-outlined-text-field",{label:e.$t("keywords"),"onUpdate:modelValue":n[1]||(n[1]=o=>c.text=o),"keyup.enter":"applyAndDoSearch"},null,8,ct),[[He,c.text]]),t("label",dt,i(e.$t("tags")),1),t("md-chip-set",null,[(l(!0),a(C,null,K(s(y),o=>(l(),a("md-filter-chip",{key:o.id,label:o.name,selected:c.tags.includes(o),onClick:h=>ce(o)},null,8,rt))),128))]),t("div",ut,[t("md-filled-button",{onClick:r(de,["stop"])},i(e.$t("search")),9,_t)])])]),_:1},8,["modelValue"])]),d(pe,{limit:b,total:s(m),"all-checked-alert-visible":s(te),"real-all-checked":s(N),"select-real-all":s(ee),"clear-selection":s(V)},null,8,["total","all-checked-alert-visible","real-all-checked","select-real-all","clear-selection"]),t("div",pt,[t("table",ht,[t("thead",null,[t("tr",null,[t("th",null,[t("md-checkbox",{"touch-target":"wrapper",onChange:n[3]||(n[3]=(...o)=>s(Q)&&s(Q)(...o)),checked:s(I),indeterminate:!s(I)&&s(R)},null,40,mt)]),t("th",null,i(e.$t("title")),1),vt,t("th",null,i(e.$t("tags")),1),t("th",null,i(e.$t("updated_at")),1),t("th",null,i(e.$t("created_at")),1)])]),t("tbody",null,[(l(!0),a(C,null,K(u.value,o=>(l(),a("tr",{key:o.id,class:Le({selected:o.checked}),onClick:r(h=>s(se)(o),["stop"])},[t("td",null,[t("md-checkbox",{"touch-target":"wrapper",onChange:n[4]||(n[4]=(...h)=>s(U)&&s(U)(...h)),checked:o.checked},null,40,gt)]),t("td",kt,[t("a",{style:{"text-overflow":"clip"},href:"#",onClick:r(h=>re(o),["stop","prevent"])},i(o.title.split(`
`)[0].trimStart()||e.$t("meta_no_title")),9,bt)]),t("td",$t,[t("div",yt,[k((l(),a("button",{class:"icon-button",onClick:r(h=>s(Z)({query:`ids:${o.id}`}),["stop"])},[Ct,d(G)],8,Tt)),[[T,e.$t("move_to_trash")]]),k((l(),a("button",{class:"icon-button",onClick:r(h=>le(o),["stop"])},[wt,d(j)],8,qt)),[[T,e.$t("add_to_tags")]])])]),t("td",null,[d(he,{tags:o.tags,type:s(_)},null,8,["tags","type"])]),t("td",Vt,i(s(Y)(o.updatedAt)),1),t("td",At,i(s(Y)(o.createdAt)),1)],10,ft))),128))]),u.value.length?S("",!0):(l(),a("tfoot",St,[t("tr",null,[t("td",Dt,[t("div",Mt,i(e.$t(s(ze)(s(oe)))),1)])])]))])]),s(m)>b?(l(),Ne(me,{key:0,modelValue:$.value,"onUpdate:modelValue":n[5]||(n[5]=o=>$.value=o),total:s(m),limit:b},null,8,["modelValue","total"])):S("",!0)],64)}}});export{Zt as default};