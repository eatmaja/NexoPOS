import{i as p}from"./npm~is-plain-object-01248184.js";import{u as m}from"./npm~unset-value-cf896816.js";var s=p,A=m,h=function o(r,t){if(typeof r>"u")return{};if(Array.isArray(r)){for(var i=0;i<r.length;i++)r[i]=o(r[i],t);return r}if(!s(r)||(typeof t=="string"&&(t=[t]),!Array.isArray(t)))return r;for(var n=0;n<t.length;n++)A(r,t[n]);for(var f in r)r.hasOwnProperty(f)&&(r[f]=o(r[f],t));return r};export{h as o};
