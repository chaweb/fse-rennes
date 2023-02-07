import{L as h,N as g,J as w,a4 as y,D as C,R as D,af as v,ag as _,h as r}from"./app.config.c0143e06.js";import{u as S}from"./composables.121a5299.js";import q from"./ContentRenderer.f3474cf5.js";import{_ as x}from"./ContentQuery.362272f3.js";import"./ContentRendererMarkdown.a9e00b0f.js";import"./index.a6ef77ff.js";import"./entry.f0227850.js";import"./cookie.a7e1395d.js";import"./query.c3f7607a.js";import"./utils.389ae8cb.js";const a=(p,e=y())=>{const s=h(p),u=g();w(()=>h(p),(t=s)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const f=n.title||(t==null?void 0:t.title);f&&(n.title=f),u.public.content.host;const m=(n==null?void 0:n.description)||(t==null?void 0:t.description);m&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:m}),n!=null&&n.image||(t==null||t.image),C(()=>S(n))},{immediate:!0})},T=D({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(p){const e=v(),{tag:s,excerpt:u,path:c,query:t,head:n}=p,f={...t||{},path:c||(t==null?void 0:t.path)||_(y().path),find:"one"},m=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(x,f,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:d})=>{var l;return n&&a(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:d,excerpt:u,...this.$attrs})}:({data:i})=>(n&&a(i),r(q,{value:i,excerpt:u,tag:s,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):m("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{T as default};