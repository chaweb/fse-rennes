import{Q as vt,h as N}from"./app.config.aff3c8d5.js";const kt=Object.freeze({left:0,top:0,width:16,height:16}),Ct=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),X=Object.freeze({...kt,...Ct});Object.freeze({...X,body:"",hidden:!1});({...kt});const jt=Object.freeze({width:null,height:null}),Tt=Object.freeze({...jt,...Ct});function Gt(t,o){const n={...t};for(const r in o){const e=o[r],i=typeof e;r in jt?(e===null||e&&(i==="string"||i==="number"))&&(n[r]=e):i===typeof n[r]&&(n[r]=r==="rotate"?e%4:e)}return n}const Kt=/[\s,]+/;function Wt(t,o){o.split(Kt).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Jt(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:r(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/e,i%1===0?r(i):0)}}return o}const Xt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Yt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function rt(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const r=t.split(Xt);if(r===null||!r.length)return t;const e=[];let i=r.shift(),s=Yt.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?e.push(i):e.push(Math.ceil(c*o*n)/n)}else e.push(i);if(i=r.shift(),i===void 0)return e.join("");s=!s}}const Zt=t=>t==="unset"||t==="undefined"||t==="none";function te(t,o){const n={...X,...t},r={...Tt,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(w=>{const d=[],f=w.hFlip,x=w.vFlip;let y=w.rotate;f?x?y+=2:(d.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),d.push("scale(-1 1)"),e.top=e.left=0):x&&(d.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),d.push("scale(1 -1)"),e.top=e.left=0);let m;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:m=e.height/2+e.top,d.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:d.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:m=e.width/2+e.left,d.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}y%2===1&&(e.left!==e.top&&(m=e.left,e.left=e.top,e.top=m),e.width!==e.height&&(m=e.width,e.width=e.height,e.height=m)),d.length&&(i='<g transform="'+d.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=e.width,a=e.height;let u,h;s===null?(h=c===null?"1em":c==="auto"?a:c,u=rt(h,l/a)):(u=s==="auto"?l:s,h=c===null?rt(u,a/l):c==="auto"?a:c);const p={},b=(w,d)=>{Zt(d)||(p[w]=d.toString())};return b("width",u),b("height",h),p.viewBox=e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:p,body:i}}const ee=/\sid="(\S+)"/g,ne="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let oe=0;function re(t,o=ne){const n=[];let r;for(;r=ee.exec(t);)n.push(r[1]);if(!n.length)return t;const e="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof o=="function"?o(i):o+(oe++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+e+"$3")}),t=t.replace(new RegExp(e,"g"),""),t}function ie(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in o)n+=" "+r+'="'+o[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function se(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ce(t){return'url("data:image/svg+xml,'+se(t)+'")'}const it={...Tt,inline:!1},le={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},ae={display:"inline-block"},B={backgroundColor:"currentColor"},$t={backgroundColor:"transparent"},st={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ct={webkitMask:B,mask:B,background:$t};for(const t in ct){const o=ct[t];for(const n in st)o[t+n]=st[n]}const O={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";O[t+"-flip"]=o,O[t.slice(0,1)+"-flip"]=o,O[t+"Flip"]=o});function lt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const fe=(t,o)=>{const n=Gt(it,o),r={...le},e=o.mode||"svg",i={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let d in o){const f=o[d];if(f!==void 0)switch(d){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[d]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&Wt(n,f);break;case"color":i.color=f;break;case"rotate":typeof f=="string"?n[d]=Jt(f):typeof f=="number"&&(n[d]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete r["aria-hidden"];break;default:{const x=O[d];x?(f===!0||f==="true"||f===1)&&(n[x]=!0):it[d]===void 0&&(r[d]=f)}}}const l=te(t,n),a=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),e==="svg"){r.style={...i,...c},Object.assign(r,a);let d=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),r.innerHTML=re(l.body,f?()=>f+"ID"+d++:"iconifyVue"),N("svg",r)}const{body:u,width:h,height:p}=t,b=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),w=ie(u,{...a,width:h+"",height:p+""});return r.style={...i,"--svg":ce(w),width:lt(a.width),height:lt(a.height),...ae,...b?B:$t,...c},N("span",r)},ue=Object.create(null),fn=vt({inheritAttrs:!1,render(){const t=this.$attrs,o=t.icon,n=typeof o=="string"?ue[o]:typeof o=="object"?o:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:fe({...X,...n},t)}}),j=/^[a-z0-9]+(-[a-z0-9]+)*$/,F=(t,o,n,r="")=>{const e=t.split(":");if(t.slice(0,1)==="@"){if(e.length<2||e.length>3)return null;r=e.shift().slice(1)}if(e.length>3||!e.length)return null;if(e.length>1){const c=e.pop(),l=e.pop(),a={provider:e.length>0?e[0]:r,prefix:l,name:c};return o&&!L(a)?null:a}const i=e[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return o&&!L(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return o&&!L(c,n)?null:c}return null},L=(t,o)=>t?!!((t.provider===""||t.provider.match(j))&&(o&&t.prefix===""||t.prefix.match(j))&&t.name.match(j)):!1,Ft=Object.freeze({left:0,top:0,width:16,height:16}),D=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),P=Object.freeze({...Ft,...D}),U=Object.freeze({...P,body:"",hidden:!1});function de(t,o){const n={};!t.hFlip!=!o.hFlip&&(n.hFlip=!0),!t.vFlip!=!o.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(o.rotate||0))%4;return r&&(n.rotate=r),n}function at(t,o){const n=de(t,o);for(const r in U)r in D?r in t&&!(r in n)&&(n[r]=D[r]):r in o?n[r]=o[r]:r in t&&(n[r]=t[r]);return n}function he(t,o){const n=t.icons,r=t.aliases||Object.create(null),e=Object.create(null);function i(s){if(n[s])return e[s]=[];if(!(s in e)){e[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(e[s]=[c].concat(l))}return e[s]}return(o||Object.keys(n).concat(Object.keys(r))).forEach(i),e}function pe(t,o,n){const r=t.icons,e=t.aliases||Object.create(null);let i={};function s(c){i=at(r[c]||e[c],i)}return s(o),n.forEach(s),at(t,i)}function Pt(t,o){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(e=>{o(e,null),n.push(e)});const r=he(t);for(const e in r){const i=r[e];i&&(o(e,pe(t,e,i)),n.push(e))}return n}const ge={provider:"",aliases:{},not_found:{},...Ft};function H(t,o){for(const n in o)if(n in t&&typeof t[n]!=typeof o[n])return!1;return!0}function Mt(t){if(typeof t!="object"||t===null)return null;const o=t;if(typeof o.prefix!="string"||!t.icons||typeof t.icons!="object"||!H(t,ge))return null;const n=o.icons;for(const e in n){const i=n[e];if(!e.match(j)||typeof i.body!="string"||!H(i,U))return null}const r=o.aliases||Object.create(null);for(const e in r){const i=r[e],s=i.parent;if(!e.match(j)||typeof s!="string"||!n[s]&&!r[s]||!H(i,U))return null}return o}const ft=Object.create(null);function me(t,o){return{provider:t,prefix:o,icons:Object.create(null),missing:new Set}}function v(t,o){const n=ft[t]||(ft[t]=Object.create(null));return n[o]||(n[o]=me(t,o))}function Y(t,o){return Mt(o)?Pt(o,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function ye(t,o,n){try{if(typeof n.body=="string")return t.icons[o]={...n},!0}catch{}return!1}let T=!1;function Et(t){return typeof t=="boolean"&&(T=t),T}function Ot(t){const o=typeof t=="string"?F(t,!0,T):t;if(o){const n=v(o.provider,o.prefix),r=o.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function we(t,o){const n=F(t,!0,T);if(!n)return!1;const r=v(n.provider,n.prefix);return ye(r,n.name,o)}function be(t,o){if(typeof t!="object")return!1;if(typeof o!="string"&&(o=t.provider||""),T&&!o&&!t.prefix){let e=!1;return Mt(t)&&(t.prefix="",Pt(t,(i,s)=>{s&&we(i,s)&&(e=!0)})),e}const n=t.prefix;if(!L({provider:o,prefix:n,name:"a"}))return!1;const r=v(o,n);return!!Y(r,t)}const Lt=Object.freeze({width:null,height:null}),At=Object.freeze({...Lt,...D}),xe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Se=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ut(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const r=t.split(xe);if(r===null||!r.length)return t;const e=[];let i=r.shift(),s=Se.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?e.push(i):e.push(Math.ceil(c*o*n)/n)}else e.push(i);if(i=r.shift(),i===void 0)return e.join("");s=!s}}const Ie=t=>t==="unset"||t==="undefined"||t==="none";function ve(t,o){const n={...P,...t},r={...At,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(w=>{const d=[],f=w.hFlip,x=w.vFlip;let y=w.rotate;f?x?y+=2:(d.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),d.push("scale(-1 1)"),e.top=e.left=0):x&&(d.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),d.push("scale(1 -1)"),e.top=e.left=0);let m;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:m=e.height/2+e.top,d.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:d.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:m=e.width/2+e.left,d.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}y%2===1&&(e.left!==e.top&&(m=e.left,e.left=e.top,e.top=m),e.width!==e.height&&(m=e.width,e.width=e.height,e.height=m)),d.length&&(i='<g transform="'+d.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=e.width,a=e.height;let u,h;s===null?(h=c===null?"1em":c==="auto"?a:c,u=ut(h,l/a)):(u=s==="auto"?l:s,h=c===null?ut(u,a/l):c==="auto"?a:c);const p={},b=(w,d)=>{Ie(d)||(p[w]=d.toString())};return b("width",u),b("height",h),p.viewBox=e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:p,body:i}}const ke=/\sid="(\S+)"/g,Ce="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let je=0;function Te(t,o=Ce){const n=[];let r;for(;r=ke.exec(t);)n.push(r[1]);if(!n.length)return t;const e="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof o=="function"?o(i):o+(je++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+e+"$3")}),t=t.replace(new RegExp(e,"g"),""),t}const Q=Object.create(null);function $e(t,o){Q[t]=o}function q(t){return Q[t]||Q[""]}function Z(t){let o;if(typeof t.resources=="string")o=[t.resources];else if(o=t.resources,!(o instanceof Array)||!o.length)return null;return{resources:o,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const tt=Object.create(null),C=["https://api.simplesvg.com","https://api.unisvg.com"],A=[];for(;C.length>0;)C.length===1||Math.random()>.5?A.push(C.shift()):A.push(C.pop());tt[""]=Z({resources:["https://api.iconify.design"].concat(A)});function Fe(t,o){const n=Z(o);return n===null?!1:(tt[t]=n,!0)}function et(t){return tt[t]}const Pe=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let dt=Pe();function Me(t,o){const n=et(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let e=0;n.resources.forEach(s=>{e=Math.max(e,s.length)});const i=o+".json?icons=";r=n.maxURL-e-n.path.length-i.length}return r}function Ee(t){return t===404}const Oe=(t,o,n)=>{const r=[],e=Me(t,o),i="icons";let s={type:i,provider:t,prefix:o,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=e&&a>0&&(r.push(s),s={type:i,provider:t,prefix:o,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function Le(t){if(typeof t=="string"){const o=et(t);if(o)return o.path}return"/"}const Ae=(t,o,n)=>{if(!dt){n("abort",424);return}let r=Le(o.provider);switch(o.type){case"icons":{const i=o.prefix,c=o.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=o.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let e=503;dt(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(Ee(s)?"abort":"next",s)});return}return e=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",e)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",e)})},_e={prepare:Oe,send:Ae};function Ne(t){const o={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((e,i)=>e.provider!==i.provider?e.provider.localeCompare(i.provider):e.prefix!==i.prefix?e.prefix.localeCompare(i.prefix):e.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(e=>{if(r.name===e.name&&r.prefix===e.prefix&&r.provider===e.provider)return;r=e;const i=e.provider,s=e.prefix,c=e.name,l=n[i]||(n[i]=Object.create(null)),a=l[s]||(l[s]=v(i,s));let u;c in a.icons?u=o.loaded:s===""||a.missing.has(c)?u=o.missing:u=o.pending;const h={provider:i,prefix:s,name:c};u.push(h)}),o}function _t(t,o){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(e=>e.id!==o))})}function De(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const o=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!o.length)return;let n=!1;const r=t.provider,e=t.prefix;o.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==e)return!0;const a=l.name;if(t.icons[a])s.loaded.push({provider:r,prefix:e,name:a});else if(t.missing.has(a))s.missing.push({provider:r,prefix:e,name:a});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||_t([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let Re=0;function ze(t,o,n){const r=Re++,e=_t.bind(null,n,r);if(!o.pending.length)return e;const i={id:r,icons:o,callback:t,abort:e};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),e}function He(t,o=!0,n=!1){const r=[];return t.forEach(e=>{const i=typeof e=="string"?F(e,o,n):e;i&&r.push(i)}),r}var Ve={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Be(t,o,n,r){const e=t.resources.length,i=t.random?Math.floor(Math.random()*e):t.index;let s;if(t.random){let g=t.resources.slice(0);for(s=[];g.length>1;){const S=Math.floor(Math.random()*g.length);s.push(g[S]),g=g.slice(0,S).concat(g.slice(S+1))}s=s.concat(g)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const c=Date.now();let l="pending",a=0,u,h=null,p=[],b=[];typeof r=="function"&&b.push(r);function w(){h&&(clearTimeout(h),h=null)}function d(){l==="pending"&&(l="aborted"),w(),p.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),p=[]}function f(g,S){S&&(b=[]),typeof g=="function"&&b.push(g)}function x(){return{startTime:c,payload:o,status:l,queriesSent:a,queriesPending:p.length,subscribe:f,abort:d}}function y(){l="failed",b.forEach(g=>{g(void 0,u)})}function m(){p.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),p=[]}function qt(g,S,k){const M=S!=="success";switch(p=p.filter(I=>I!==g),l){case"pending":break;case"failed":if(M||!t.dataAfterTimeout)return;break;default:return}if(S==="abort"){u=k,y();return}if(M){u=k,p.length||(s.length?z():y());return}if(w(),m(),!t.random){const I=t.resources.indexOf(g.resource);I!==-1&&I!==t.index&&(t.index=I)}l="completed",b.forEach(I=>{I(k)})}function z(){if(l!=="pending")return;w();const g=s.shift();if(g===void 0){if(p.length){h=setTimeout(()=>{w(),l==="pending"&&(m(),y())},t.timeout);return}y();return}const S={status:"pending",resource:g,callback:(k,M)=>{qt(S,k,M)}};p.push(S),a++,h=setTimeout(z,t.rotate),n(g,o,S.callback)}return setTimeout(z),x}function Nt(t){const o={...Ve,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function e(c,l,a){const u=Be(o,c,l,(h,p)=>{r(),a&&a(h,p)});return n.push(u),u}function i(c){return n.find(l=>c(l))||null}return{query:e,find:i,setIndex:c=>{o.index=c},getIndex:()=>o.index,cleanup:r}}function ht(){}const V=Object.create(null);function Ue(t){if(!V[t]){const o=et(t);if(!o)return;const n=Nt(o),r={config:o,redundancy:n};V[t]=r}return V[t]}function Qe(t,o,n){let r,e;if(typeof t=="string"){const i=q(t);if(!i)return n(void 0,424),ht;e=i.send;const s=Ue(t);s&&(r=s.redundancy)}else{const i=Z(t);if(i){r=Nt(i);const s=t.resources?t.resources[0]:"",c=q(s);c&&(e=c.send)}}return!r||!e?(n(void 0,424),ht):r.query(o,e,n)().abort}const pt="iconify2",$="iconify",Dt=$+"-count",gt=$+"-version",Rt=36e5,qe=168;function G(t,o){try{return t.getItem(o)}catch{}}function nt(t,o,n){try{return t.setItem(o,n),!0}catch{}}function mt(t,o){try{t.removeItem(o)}catch{}}function K(t,o){return nt(t,Dt,o.toString())}function W(t){return parseInt(G(t,Dt))||0}const R={local:!0,session:!0},zt={local:new Set,session:new Set};let ot=!1;function Ge(t){ot=t}let E=typeof window>"u"?{}:window;function Ht(t){const o=t+"Storage";try{if(E&&E[o]&&typeof E[o].length=="number")return E[o]}catch{}R[t]=!1}function Vt(t,o){const n=Ht(t);if(!n)return;const r=G(n,gt);if(r!==pt){if(r){const c=W(n);for(let l=0;l<c;l++)mt(n,$+l.toString())}nt(n,gt,pt),K(n,0);return}const e=Math.floor(Date.now()/Rt)-qe,i=c=>{const l=$+c.toString(),a=G(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>e&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&o(u,c))return!0}catch{}mt(n,l)}};let s=W(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,K(n,s)):zt[t].add(c))}function Bt(){if(!ot){Ge(!0);for(const t in R)Vt(t,o=>{const n=o.data,r=o.provider,e=n.prefix,i=v(r,e);if(!Y(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function Ke(t,o){const n=t.lastModifiedCached;if(n&&n>=o)return n===o;if(t.lastModifiedCached=o,n)for(const r in R)Vt(r,e=>{const i=e.data;return e.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===o});return!0}function We(t,o){ot||Bt();function n(r){let e;if(!R[r]||!(e=Ht(r)))return;const i=zt[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=W(e),!K(e,s+1))return;const c={cached:Math.floor(Date.now()/Rt),provider:t.provider,data:o};return nt(e,$+s.toString(),JSON.stringify(c))}o.lastModified&&!Ke(t,o.lastModified)||Object.keys(o.icons).length&&(o.not_found&&(o=Object.assign({},o),delete o.not_found),n("local")||n("session"))}function yt(){}function Je(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,De(t)}))}function Xe(t,o){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(o).sort():t.iconsToLoad=o,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,e=t.iconsToLoad;delete t.iconsToLoad;let i;if(!e||!(i=q(n)))return;i.prepare(n,r,e).forEach(c=>{Qe(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{t.missing.add(a)});else try{const a=Y(t,l);if(!a.length)return;const u=t.pendingIcons;u&&a.forEach(h=>{u.delete(h)}),We(t,l)}catch(a){console.error(a)}Je(t)})})}))}const Ut=(t,o)=>{const n=He(t,!0,Et()),r=Ne(n);if(!r.pending.length){let l=!0;return o&&setTimeout(()=>{l&&o(r.loaded,r.missing,r.pending,yt)}),()=>{l=!1}}const e=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===s)return;s=a,c=u,i.push(v(a,u));const h=e[a]||(e[a]=Object.create(null));h[u]||(h[u]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:u,name:h}=l,p=v(a,u),b=p.pendingIcons||(p.pendingIcons=new Set);b.has(h)||(b.add(h),e[a][u].push(h))}),i.forEach(l=>{const{provider:a,prefix:u}=l;e[a][u].length&&Xe(l,e[a][u])}),o?ze(o,r,i):yt},un=t=>new Promise((o,n)=>{const r=typeof t=="string"?F(t,!0):t;if(!r){n(t);return}Ut([r||t],e=>{if(e.length&&r){const i=Ot(r);if(i){o({...P,...i});return}}n(t)})});function Ye(t,o){const n={...t};for(const r in o){const e=o[r],i=typeof e;r in Lt?(e===null||e&&(i==="string"||i==="number"))&&(n[r]=e):i===typeof n[r]&&(n[r]=r==="rotate"?e%4:e)}return n}const Ze=/[\s,]+/;function tn(t,o){o.split(Ze).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function en(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:r(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/e,i%1===0?r(i):0)}}return o}function nn(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in o)n+=" "+r+'="'+o[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function on(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function rn(t){return'url("data:image/svg+xml,'+on(t)+'")'}const wt={...At,inline:!1},sn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},cn={display:"inline-block"},J={backgroundColor:"currentColor"},Qt={backgroundColor:"transparent"},bt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},xt={webkitMask:J,mask:J,background:Qt};for(const t in xt){const o=xt[t];for(const n in bt)o[t+n]=bt[n]}const _={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";_[t+"-flip"]=o,_[t.slice(0,1)+"-flip"]=o,_[t+"Flip"]=o});function St(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const It=(t,o)=>{const n=Ye(wt,o),r={...sn},e=o.mode||"svg",i={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let d in o){const f=o[d];if(f!==void 0)switch(d){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[d]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&tn(n,f);break;case"color":i.color=f;break;case"rotate":typeof f=="string"?n[d]=en(f):typeof f=="number"&&(n[d]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete r["aria-hidden"];break;default:{const x=_[d];x?(f===!0||f==="true"||f===1)&&(n[x]=!0):wt[d]===void 0&&(r[d]=f)}}}const l=ve(t,n),a=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),e==="svg"){r.style={...i,...c},Object.assign(r,a);let d=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),r.innerHTML=Te(l.body,f?()=>f+"ID"+d++:"iconifyVue"),N("svg",r)}const{body:u,width:h,height:p}=t,b=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),w=nn(u,{...a,width:h+"",height:p+""});return r.style={...i,"--svg":rn(w),width:St(a.width),height:St(a.height),...cn,...b?J:Qt,...c},N("span",r)};Et(!0);$e("",_e);if(typeof document<"u"&&typeof window<"u"){Bt();const t=window;if(t.IconifyPreload!==void 0){const o=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof o=="object"&&o!==null&&(o instanceof Array?o:[o]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!be(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const o=t.IconifyProviders;if(typeof o=="object"&&o!==null)for(let n in o){const r="IconifyProviders["+n+"] is invalid.";try{const e=o[n];if(typeof e!="object"||!e||e.resources===void 0)continue;Fe(n,e)||console.error(r)}catch{console.error(r)}}}}const ln={...P,body:""};vt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,o){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=F(t,!1,!0))===null)return this.abortLoading(),null;const r=Ot(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:Ut([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,o&&o(t));const e=["iconify"];return n.prefix!==""&&e.push("iconify--"+n.prefix),n.provider!==""&&e.push("iconify--"+n.provider),{data:r,classes:e}}},render(){this.counter;const t=this.$attrs,o=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!o)return It(ln,t);let n=t;return o.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+o.classes.join(" ")}),It({...P,...o.data},n)}});export{fn as I,un as l};
