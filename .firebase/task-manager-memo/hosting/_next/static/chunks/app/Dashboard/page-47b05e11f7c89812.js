(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{3780:function(e,t,n){Promise.resolve().then(n.bind(n,6177))},6177:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var a=n(7437),r=n(8121),i=n(3653),o=n(2265),s=n(1316),d=n(304),l=n(8836),c=n(470),u=n(4485),h=n(5195),p=n(7002),x=n(3340),f=n(5996),g=n(8738),j=n(6516),m=n(3206),v=n(9835),b=n(2486),Z=n(1364),y=n(3738),S=n(4736),C=n(9866),k=n(9398),w=n(6965),I=n(5671),E=n(7401),A=n(4905);let D=()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),_=(0,l.ZP)(e=>{let{expand:t,...n}=e;return(0,a.jsx)(m.Z,{...n})})(e=>{let{theme:t,expand:n}=e;return{transform:n?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}});function J(e){var t,n,d,l,c;let[u,J]=o.useState(!1),[O,P]=o.useState((null===(t=e.card)||void 0===t?void 0:t.body)||""),[U,N]=o.useState((null===(n=e.card)||void 0===n?void 0:n.title)||""),[B,H]=o.useState((null===(d=e.card)||void 0===d?void 0:d.description)||""),[K,L]=o.useState((null===(l=e.card)||void 0===l?void 0:l.image)||""),Q=null===(c=e.card)||void 0===c?void 0:c.id,{currentUser:R,userLoggedIn:F}=(0,s.useAuth)(),[M,T]=o.useState(!1),[V,W]=o.useState(!1),[q,z]=o.useState(!1),[G,X]=o.useState(D());async function Y(){if(Q){let e=(0,r.JU)(i.db,"recepie",Q);await (0,r.oe)(e),console.log("Entry deleted successfully!")}window.location.href="/Dashboard"}async function $(){let e={body:O,title:U,description:B,image:K,uid:R.uid},t=Q?(0,r.JU)(i.db,"recepie",Q):(0,r.JU)((0,r.hJ)(i.db,"recepie"));await (0,r.pl)(t,e),console.log("Entry saved successfully!"),ee()}console.log(O,U,B,K);let ee=()=>{T(!1),z(!1),W(!1)};return console.log(G),(0,a.jsxs)(h.Z,{sx:{maxWidth:345},children:[(0,a.jsx)(p.Z,{action:(0,a.jsx)(m.Z,{"aria-label":"settings",children:(0,a.jsx)(w.Z,{})}),title:V?(0,a.jsx)(E.u,{value:U||"",onChange:e=>{N(e.target.value)},style:{width:"100%"}}):(0,a.jsx)("div",{onClick:()=>{W(!0)},children:U||"Title goes here"}),subheader:"Add Date || Sub header"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(x.Z,{component:"img",height:"194",onClick:()=>document.getElementById(G).click(),image:K||"https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png",alt:"Add Image"}),(0,a.jsx)(I.Z,{onImageClick:e=>{console.log(e),(0,A.Jt)((0,A.iH)(i.tO,e)).then(e=>{L(e)})},generateUniqueId:G})]}),(0,a.jsx)(f.Z,{children:M?(0,a.jsx)(E.u,{value:O||"",onChange:e=>{P(e.target.value)},style:{width:"100%"}}):(0,a.jsx)("div",{onClick:()=>{T(!0)},children:(0,a.jsx)(v.Z,{variant:"body2",color:"text.secondary",children:O||"Body goes here"})})}),(0,a.jsxs)(g.Z,{disableSpacing:!0,children:[(0,a.jsx)(m.Z,{"aria-label":"add to favorites",children:(0,a.jsx)(b.Z,{})}),(0,a.jsx)(m.Z,{"aria-label":"share",children:(0,a.jsx)(Z.Z,{})}),(0,a.jsx)(m.Z,{"aria-label":"save",children:(0,a.jsx)("div",{onClick:$,children:(0,a.jsx)(S.Z,{})})}),(0,a.jsx)(m.Z,{"aria-label":"cancel",children:(0,a.jsx)("div",{onClick:ee,children:(0,a.jsx)(y.Z,{})})}),(0,a.jsx)(m.Z,{"aria-label":"delete",children:(0,a.jsx)("div",{onClick:Y,children:(0,a.jsx)(C.Z,{})})}),(0,a.jsx)(_,{expand:u,onClick:()=>{J(!u)},"aria-expanded":u,"aria-label":"show more",children:(0,a.jsx)(k.Z,{})})]}),(0,a.jsx)(j.Z,{in:u,timeout:"auto",unmountOnExit:!0,children:(0,a.jsx)(f.Z,{children:q?(0,a.jsx)(E.u,{value:B||"",onChange:e=>{H(e.target.value)},style:{width:"100%"}}):(0,a.jsx)("div",{onClick:()=>{z(!0)},children:(0,a.jsx)(v.Z,{paragraph:!0,children:B||"description goes here"})})})})]})}async function O(e){let t=(0,r.IO)((0,r.hJ)(i.db,"recepie"),(0,r.ar)("uid","==",e));return console.log(t),(await (0,r.PL)(t)).docs.map(e=>({id:e.id,...e.data()}))}(0,l.ZP)(c.Z)(e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff",...t.typography.body2,padding:t.spacing(.5),textAlign:"center",color:t.palette.text.secondary}});var P=()=>{let[e,t]=o.useState([]),{currentUser:n,userLoggedIn:r}=(0,s.useAuth)();if(!r){window.location.href="/";return}return o.useEffect(()=>{(async()=>{try{let e=await O(n.uid);t(e)}catch(e){console.error("Error fetching cards:",e)}})()},[]),(0,a.jsx)(d.Z,{sx:{width:"100%",maxWidth:"xl",padding:"10px"},children:(0,a.jsxs)(u.ZP,{columns:4,spacing:2,children:[(0,a.jsx)(J,{}),e.map(e=>(0,a.jsx)(J,{card:e}))]})})}},5671:function(e,t,n){"use strict";var a=n(7437);n(2265);var r=n(3653),i=n(4905);t.Z=e=>{let{onImageClick:t,generateUniqueId:n}=e;return console.log(n),(0,a.jsx)("div",{children:(0,a.jsx)("input",{id:n,type:"file",onChange:e=>{let n=e.target.files[0];if(!n)return;let a=(0,i.iH)(r.tO,"/uploads/".concat(n.name));t("/uploads/".concat(n.name));try{(0,i.KV)(a,n).then(e=>{console.log("Uploaded a blob or file!")}),console.log("Upload successful!")}catch(e){console.error("Upload failed:",e)}},hidden:!0})})}},1316:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthContext:function(){return s},AuthProvider:function(){return l},useAuth:function(){return d}});var a=n(7437),r=n(2265),i=n(3653),o=n(2730);let s=r.createContext();function d(){return(0,r.useContext)(s)}function l(e){let{children:t}=e,[n,d]=(0,r.useState)(null),[l,c]=(0,r.useState)(!1),[u,h]=(0,r.useState)(!1),[p,x]=(0,r.useState)(!1),[f,g]=(0,r.useState)(!0);async function j(e){e?(d({...e}),h(e.providerData.some(e=>"password"===e.providerId)),x(e.providerData.some(e=>e.providerId===o.hJ.PROVIDER_ID)),c(!0)):(d(null),c(!1)),g(!1)}return(0,r.useEffect)(()=>(0,o.Aj)(i.I8,j),[]),(0,a.jsx)(s.Provider,{value:{userLoggedIn:l,isEmailUser:u,isGoogleUser:p,currentUser:n,setCurrentUser:d},children:!f&&t})}},3653:function(e,t,n){"use strict";n.d(t,{I8:function(){return l},db:function(){return d},tO:function(){return c}});var a=n(6142),r=n(2730),i=n(8121),o=n(4905);let s=(0,a.ZF)({apiKey:"AIzaSyDXef3y3j0J63NdHhxdn1mo-EneEal3DQE",authDomain:"task-manager-memo.firebaseapp.com",databaseURL:"https://cloud-profiler-demo-399610-default-rtdb.firebaseio.com",projectId:"cloud-profiler-demo-399610",storageBucket:"cloud-profiler-demo-399610.appspot.com",messagingSenderId:"572657056042",appId:"1:572657056042:web:90557b7f626ab37492c653",measurementId:"G-CQKQD1781T"}),d=(0,i.ad)(s),l=(0,r.v0)(s),c=(0,o.cF)(s,"gs://cloud-profiler-demo-399610.appspot.com")}},function(e){e.O(0,[358,452,719,276,246,818,971,69,744],function(){return e(e.s=3780)}),_N_E=e.O()}]);