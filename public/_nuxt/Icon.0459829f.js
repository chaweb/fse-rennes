import{Q as k,W as A,G as N,R as o,I as B,at as b,M as e,a7 as r,ap as z,au as m,a8 as g,av as D,aw as q,ax as C}from"./app.config.aff3c8d5.js";import{u as E,a as F}from"./entry.f43d8080.js";import{u as G}from"./config.61e60b93.js";import{I as H,l as M}from"./Icon.vue.ea8d9b88.js";const Q=["width","height"],R=k({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(v){var y;let c,_;const i=v,S=A(),a=G();(y=a==null?void 0:a.nuxtIcon)!=null&&y.aliases;const h=E("icons",()=>({})),p=N(!1),n=o(()=>{var t;return(((t=a==null?void 0:a.nuxtIcon)==null?void 0:t.aliases)||{})[i.name]||i.name}),f=o(()=>{var t;return(t=h.value)==null?void 0:t[n.value]}),l=o(()=>S.vueApp.component(n.value)),s=o(()=>{var d,I,w;if(!i.size&&typeof((d=a.nuxtIcon)==null?void 0:d.size)=="boolean"&&!((I=a.nuxtIcon)!=null&&I.size))return;const t=i.size||((w=a.nuxtIcon)==null?void 0:w.size)||"1em";return String(Number(t))===t?`${t}px`:t}),u=o(()=>{var t;return((t=a==null?void 0:a.nuxtIcon)==null?void 0:t.class)??"icon"});async function x(){var t;l.value||(t=h.value)!=null&&t[n.value]||(p.value=!0,h.value[n.value]=await M(n.value).catch(()=>{}),p.value=!1)}return B(()=>n.value,x),!l.value&&([c,_]=b(()=>x()),c=await c,_()),(t,d)=>e(p)?(r(),z("span",{key:0,class:m(e(u)),width:e(s),height:e(s)},null,10,Q)):e(f)?(r(),g(e(H),{key:1,icon:e(f),class:m(e(u)),width:e(s),height:e(s)},null,8,["icon","class","width","height"])):e(l)?(r(),g(D(e(l)),{key:2,class:m(e(u)),width:e(s),height:e(s)},null,8,["class","width","height"])):(r(),z("span",{key:3,class:m(e(u)),style:C({fontSize:e(s),lineHeight:e(s),width:e(s),height:e(s)})},q(v.name),7))}}),K=F(R,[["__scopeId","data-v-e660a7a7"]]);export{K as default};
