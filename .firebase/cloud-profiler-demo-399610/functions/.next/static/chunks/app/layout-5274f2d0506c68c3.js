(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9502:function(e,n,r){Promise.resolve().then(r.bind(r,5218)),Promise.resolve().then(r.bind(r,902)),Promise.resolve().then(r.bind(r,4829)),Promise.resolve().then(r.t.bind(r,5326,23)),Promise.resolve().then(r.t.bind(r,3054,23)),Promise.resolve().then(r.bind(r,1733)),Promise.resolve().then(r.bind(r,2183))},1733:function(e,n,r){"use strict";r.d(n,{default:function(){return I}});var o=r(7437),t=r(2265),i=r(6389),s=r(7999),l=r(9806),a=r(335),c=r(511),d=r(6258),u=r(9504),p=r(2197),h=r(5462),x=r(6548),m=r(1655),f=r(5870),b=r(9438),g=r(3043),j=r(2183),v=r(5186);let Z=async()=>{let e=new v.hJ,n=await (0,v.rh)(g.I8,e);return n.user,n},w=()=>g.I8.signOut(),y=["Product","Pricing","Blog"],k=["Profile","Account","Dashboard","Logout"];var I=(0,t.memo)(function(){let[e,n]=t.useState(null),[r,g]=t.useState(null),{currentUser:v,userLoggedIn:I}=(0,j.a)(),P=()=>{n(null)},C=e=>{e.target.querySelector("p");let n=e.target.textContent;"Profile"==n?window.location.href="/Profile":"Logout"==n?w():"Account"==n?window.location.href="/Account":"Dashboard"==n&&(window.location.href="/Dashboard"),g(null)};return(0,o.jsx)(i.Z,{position:"static",children:(0,o.jsx)(p.Z,{maxWidth:"xl",children:(0,o.jsxs)(l.Z,{disableGutters:!0,children:[(0,o.jsx)(b.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),(0,o.jsx)(c.Z,{variant:"h6",noWrap:!0,component:"a",href:"#app-bar-with-responsive-menu",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"TINY URL"}),(0,o.jsxs)(s.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[(0,o.jsx)(a.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e=>{n(e.currentTarget)},color:"inherit",children:(0,o.jsx)(u.Z,{})}),(0,o.jsx)(d.Z,{id:"menu-appbar",anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:!!e,onClose:P,sx:{display:{xs:"block",md:"none"}},children:y.map(e=>(0,o.jsx)(f.Z,{onClick:P,children:(0,o.jsx)(c.Z,{textAlign:"center",children:e})},e))})]}),(0,o.jsx)(b.Z,{sx:{display:{xs:"flex",md:"none"},mr:1}}),(0,o.jsx)(c.Z,{variant:"h5",noWrap:!0,component:"a",href:"#app-bar-with-responsive-menu",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"TINY URL"}),(0,o.jsx)(s.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:y.map(e=>(0,o.jsx)(x.Z,{onClick:P,href:e,sx:{my:2,color:"white",display:"block"},children:e},e))}),I?(0,o.jsxs)(s.Z,{sx:{flexGrow:0},children:[(0,o.jsx)(m.Z,{title:"Open settings",children:(0,o.jsx)(a.Z,{onClick:e=>{g(e.currentTarget)},sx:{p:0},children:(0,o.jsx)(h.Z,{alt:"Remy Sharp",src:v.photoURL})})}),(0,o.jsx)(d.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!r,onClose:C,children:k.map(e=>(0,o.jsx)(f.Z,{onClick:C,children:(0,o.jsx)(c.Z,{textAlign:"center",children:e})},e))})]}):(0,o.jsx)(s.Z,{sx:{flexGrow:0,display:{xs:"none",md:"flex"}},children:(0,o.jsx)(x.Z,{onClick:()=>{Z().catch(e=>{console.log("error")})},sx:{my:2,color:"white",display:"block"},children:"Login"},"Login")})]})})})})},2183:function(e,n,r){"use strict";r.d(n,{AuthProvider:function(){return c},a:function(){return a}});var o=r(7437),t=r(2265),i=r(3043),s=r(5186);let l=t.createContext();function a(){return(0,t.useContext)(l)}function c(e){let{children:n}=e,[r,a]=(0,t.useState)(null),[c,d]=(0,t.useState)(!1),[u,p]=(0,t.useState)(!1),[h,x]=(0,t.useState)(!1),[m,f]=(0,t.useState)(!0);async function b(e){e?(a({...e}),p(e.providerData.some(e=>"password"===e.providerId)),x(e.providerData.some(e=>e.providerId===s.hJ.PROVIDER_ID)),d(!0)):(a(null),d(!1)),f(!1)}return(0,t.useEffect)(()=>(0,s.Aj)(i.I8,b),[]),(0,o.jsx)(l.Provider,{value:{userLoggedIn:c,isEmailUser:u,isGoogleUser:h,currentUser:r,setCurrentUser:a},children:!m&&n})}},3043:function(e,n,r){"use strict";r.d(n,{I8:function(){return c},db:function(){return a},tO:function(){return d}});var o=r(5236),t=r(5186),i=r(9842),s=r(9854);let l=(0,o.ZF)({apiKey:"AIzaSyDXef3y3j0J63NdHhxdn1mo-EneEal3DQE",authDomain:"task-manager-memo.firebaseapp.com",databaseURL:"https://cloud-profiler-demo-399610-default-rtdb.firebaseio.com",projectId:"cloud-profiler-demo-399610",storageBucket:"cloud-profiler-demo-399610.appspot.com",messagingSenderId:"572657056042",appId:"1:572657056042:web:90557b7f626ab37492c653",measurementId:"G-CQKQD1781T"}),a=(0,i.ad)(l),c=(0,t.v0)(l),d=(0,s.cF)(l,"gs://cloud-profiler-demo-399610.appspot.com")},3054:function(){}},function(e){e.O(0,[370,358,452,231,489,141,595,149,971,23,744],function(){return e(e.s=9502)}),_N_E=e.O()}]);