(()=>{var e={};e.id=821,e.ids=[821],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},83122:e=>{"use strict";e.exports=require("undici")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},31728:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,originalPathname:()=>d,pages:()=>p,routeModule:()=>x,tree:()=>u}),r(32363),r(32550),r(35866);var s=r(23191),i=r(88716),a=r(37922),o=r.n(a),n=r(95231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let u=["",{children:["[hash]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,32363)),"C:\\Users\\dipak\\Desktop\\New folder\\TinyUrl\\src\\app\\[hash]\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,32550)),"C:\\Users\\dipak\\Desktop\\New folder\\TinyUrl\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\Users\\dipak\\Desktop\\New folder\\TinyUrl\\src\\app\\[hash]\\page.jsx"],d="/[hash]/page",c={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/[hash]/page",pathname:"/[hash]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},85374:(e,t,r)=>{Promise.resolve().then(r.bind(r,78059))},78059:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(10326),i=r(24821),a=r(77833),o=r(33959);let n=({params:e})=>{console.log(e.hash);let t=(0,i.JU)(a.db,"urlMapping",e.hash);return(0,i.QT)(t).then(e=>e.exists?((0,i.r7)(t,{count:e.data().count+1}),window.open(e.data().url),s.jsx("div",{children:"redirect"})):(console.log("No such document!"),s.jsx(o.default,{}))).catch(e=>(console.error("Error getting document:",e),s.jsx(o.default,{}))),s.jsx(o.default,{})}},33959:(e,t,r)=>{"use strict";r.d(t,{default:()=>g});var s=r(10326),i=r(17577),a=r(6420),o=r(30274),n=r(32969),l=r(28444),u=r(52386),p=r(71497),d=r(42265),c=r(27589),x=r(24821),h=r(77833);function g(){let[e,t]=(0,i.useState)(""),[r,g]=(0,i.useState)(""),m=()=>!0;return(0,s.jsxs)(a.Z,{sx:{width:450,height:250,borderRadius:1,marginLeft:10,marginTop:10,bgcolor:"#f3f6f4"},children:[(0,s.jsxs)(o.Z,{sx:{marginLeft:2,marginTop:1},children:[s.jsx(l.Z,{color:"primary",sx:{marginRight:1}}),"Shorten a long URL"]}),s.jsx(n.Z,{id:"outlined-size-small",label:"Enter long link here",size:"small",sx:{width:418,marginLeft:2,marginTop:1},value:e,onChange:e=>{t(e.target.value)}}),(0,s.jsxs)(o.Z,{sx:{marginLeft:2,marginTop:1},children:[s.jsx(u.Z,{color:"primary",sx:{marginRight:1}}),"Customize your link"]}),(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[s.jsx(p.Z,{disablePortal:!0,id:"combo-box-demo",options:[{label:"https://tiny-url.web.app",year:1994}],sx:{width:250,marginLeft:0,marginTop:1},renderInput:e=>s.jsx(n.Z,{...e,label:"Choose Domain",size:"small"})}),s.jsx(n.Z,{id:"outlined-size-small",label:"Enter alias",size:"small",sx:{width:150,marginLeft:2,marginTop:1},value:r,onChange:e=>{g(e.target.value)}})]}),s.jsx(d.Z,{sx:{width:420,marginTop:3,marginLeft:2},variant:"contained",onClick:()=>{if(m)try{(0,x.pl)((0,x.JU)(h.db,"urlMapping",""!=r?r:(0,c.Z)(e).toString(16)),{url:e,count:0}),console.log("https://tiny-url.web.app/"+(""!=r?r:(0,c.Z)(e).toString(16)))}catch(e){console.error("Error adding document: ",e)}},children:"Shorten Url"})]})}},32363:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>a,default:()=>n});var s=r(68570);let i=(0,s.createProxy)(String.raw`C:\Users\dipak\Desktop\New folder\TinyUrl\src\app\[hash]\page.jsx`),{__esModule:a,$$typeof:o}=i;i.default;let n=(0,s.createProxy)(String.raw`C:\Users\dipak\Desktop\New folder\TinyUrl\src\app\[hash]\page.jsx#default`)},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(66621);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,128,621,483,68],()=>r(31728));module.exports=s})();