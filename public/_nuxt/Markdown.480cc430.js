import s from"./ContentSlot.d21015c2.js";import{Q as o,ah as m,R as p,j as u}from"./app.config.aff3c8d5.js";import"./utils.dbdae723.js";import"./cookie.97dab6c2.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:a}=m(),r=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};
