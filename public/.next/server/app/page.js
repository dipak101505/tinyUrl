(()=>{var e={};e.id=931,e.ids=[931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},50852:e=>{"use strict";e.exports=require("async_hooks")},14300:e=>{"use strict";e.exports=require("buffer")},96206:e=>{"use strict";e.exports=require("console")},6113:e=>{"use strict";e.exports=require("crypto")},67643:e=>{"use strict";e.exports=require("diagnostics_channel")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},41808:e=>{"use strict";e.exports=require("net")},15673:e=>{"use strict";e.exports=require("node:events")},84492:e=>{"use strict";e.exports=require("node:stream")},47261:e=>{"use strict";e.exports=require("node:util")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},77282:e=>{"use strict";e.exports=require("process")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},35356:e=>{"use strict";e.exports=require("stream/web")},71576:e=>{"use strict";e.exports=require("string_decoder")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},29830:e=>{"use strict";e.exports=require("util/types")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},29480:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>f,tree:()=>u});var i=r(50482),n=r(69108),s=r(62563),o=r.n(s),a=r(68300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,38735)),"C:\\Users\\dipak\\Desktop\\New folder\\manager\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,65509)),"C:\\Users\\dipak\\Desktop\\New folder\\manager\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\dipak\\Desktop\\New folder\\manager\\src\\app\\page.js"],c="/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},51067:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,31900,23))},31900:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let i=r(39694),n=r(17824),s=r(95344),o=n._(r(3729)),a=i._(r(81202)),l=i._(r(1758)),u=r(83855),d=r(73053),c=r(74187);r(70837);let p=r(66150),f=i._(r(74931)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,i,n,s){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){let[t,r]=o.version.split(".",2),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let v=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:a,width:l,decoding:u,className:d,style:c,fetchPriority:p,placeholder:f,loading:m,unoptimized:v,fill:b,onLoadRef:x,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:_,onLoad:j,onError:S,...P}=e;return(0,s.jsx)("img",{...P,...h(p),loading:m,width:l,height:a,decoding:u,"data-nimg":b?"fill":"1",className:d,style:c,sizes:n,srcSet:i,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,f,x,y,w,v))},[r,f,x,y,w,S,v,t]),onLoad:e=>{g(e.currentTarget,f,x,y,w,v)},onError:e=>{_(!0),"empty"!==f&&w(!0),S&&S(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,i),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let x=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(p.RouterContext),i=(0,o.useContext)(c.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=m||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:a,onLoadingComplete:l}=e,g=(0,o.useRef)(a);(0,o.useEffect)(()=>{g.current=a},[a]);let h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let[x,y]=(0,o.useState)(!1),[w,_]=(0,o.useState)(!1),{props:j,meta:S}=(0,u.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:x,showAltText:w});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{...j,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:_,ref:t}),S.priority?(0,s.jsx)(b,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7637:(e,t,r)=>{"use strict";e.exports=r(16372).vendored.contexts.AmpContext},32158:(e,t,r)=>{"use strict";e.exports=r(16372).vendored.contexts.HeadManagerContext},74187:(e,t,r)=>{"use strict";e.exports=r(16372).vendored.contexts.ImageConfigContext},66150:(e,t,r)=>{"use strict";e.exports=r(16372).vendored.contexts.RouterContext},13126:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||r&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},83855:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(70837);let i=r(86358),n=r(73053);function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,u,{src:d,sizes:c,unoptimized:p=!1,priority:f=!1,loading:m,className:g,quality:h,width:v,height:b,fill:x=!1,style:y,onLoad:w,onLoadingComplete:_,placeholder:j="empty",blurDataURL:S,fetchPriority:P,layout:C,objectFit:O,objectPosition:z,lazyBoundary:M,lazyRoot:q,...E}=e,{imgConf:k,showAltText:I,blurComplete:A,defaultLoader:R}=t,D=k||n.imageConfigDefault;if("allSizes"in D)a=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);a={...D,allSizes:e,deviceSizes:t}}let G=E.loader||R;delete E.loader,delete E.srcSet;let N="__next_img_default"in G;if(N){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:r,...i}=t;return e(i)}}if(C){"fill"===C&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!c&&(c=t)}let U="",L=o(v),B=o(b);if("object"==typeof(r=d)&&(s(r)||void 0!==r.src)){let e=s(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,S=S||e.blurDataURL,U=e.src,!x){if(L||B){if(L&&!B){let t=L/e.width;B=Math.round(e.height*t)}else if(!L&&B){let t=B/e.height;L=Math.round(e.width*t)}}else L=e.width,B=e.height}}let F=!f&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(p=!0,F=!1),a.unoptimized&&(p=!0),N&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(p=!0),f&&(P="high");let T=o(h),W=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:z}:{},I?{}:{color:"transparent"},y),V=A||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:L,heightInt:B,blurWidth:l,blurHeight:u,blurDataURL:S||"",objectFit:W.objectFit})+'")':'url("'+j+'")',H=V?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},J=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:s,sizes:o,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,o),d=l.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:s,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:a({config:t,src:r,quality:s,width:l[d]})}}({config:a,src:d,unoptimized:p,width:L,quality:T,sizes:c,loader:G});return{props:{...E,loading:F?"lazy":m,fetchPriority:P,width:L,height:B,decoding:"async",className:g,style:{...W,...H},sizes:J.sizes,srcSet:J.srcSet,src:J.src},meta:{unoptimized:p,priority:f,placeholder:j,fill:x}}}},1758:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return g}});let i=r(39694),n=r(17824),s=r(95344),o=n._(r(3729)),a=i._(r(27984)),l=r(7637),u=r(32158),d=r(13126);function c(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(70837);let f=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,i={};return n=>{let s=!0,o=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){o=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?s=!1:t.add(n.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?s=!1:r.add(t);else{let e=n.props[t],r=i[t]||new Set;("name"!==t||!o)&&r.has(e)?s=!1:(r.add(e),i[t]=r)}}}}return s}}()).reverse().map((e,t)=>{let i=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,r=(0,o.useContext)(l.AmpStateContext),i=(0,o.useContext)(u.HeadManagerContext);return(0,s.jsx)(a.default,{reduceComponentsToState:m,headManager:i,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},86358:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:s,objectFit:o}=e,a=i?40*i:t,l=n?40*n:r,u=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},73053:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},74931:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},27984:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let i=r(3729),n=()=>{},s=()=>{};function o(e){var t;let{headManager:r,reduceComponentsToState:o}=e;function a(){if(r&&r.mountedInstances){let t=i.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(o(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),n(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),n(()=>(r&&(r._pendingUpdate=a),()=>{r&&(r._pendingUpdate=a)})),s(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},96987:(e,t,r)=>{"use strict";let{createProxy:i}=r(86843);e.exports=i("C:\\Users\\dipak\\Desktop\\New folder\\manager\\node_modules\\next\\dist\\client\\image-component.js")},34470:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(46031);let i=r(76184),n=r(64180);function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,u,{src:d,sizes:c,unoptimized:p=!1,priority:f=!1,loading:m,className:g,quality:h,width:v,height:b,fill:x=!1,style:y,onLoad:w,onLoadingComplete:_,placeholder:j="empty",blurDataURL:S,fetchPriority:P,layout:C,objectFit:O,objectPosition:z,lazyBoundary:M,lazyRoot:q,...E}=e,{imgConf:k,showAltText:I,blurComplete:A,defaultLoader:R}=t,D=k||n.imageConfigDefault;if("allSizes"in D)a=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);a={...D,allSizes:e,deviceSizes:t}}let G=E.loader||R;delete E.loader,delete E.srcSet;let N="__next_img_default"in G;if(N){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:r,...i}=t;return e(i)}}if(C){"fill"===C&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!c&&(c=t)}let U="",L=o(v),B=o(b);if("object"==typeof(r=d)&&(s(r)||void 0!==r.src)){let e=s(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,S=S||e.blurDataURL,U=e.src,!x){if(L||B){if(L&&!B){let t=L/e.width;B=Math.round(e.height*t)}else if(!L&&B){let t=B/e.height;L=Math.round(e.width*t)}}else L=e.width,B=e.height}}let F=!f&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(p=!0,F=!1),a.unoptimized&&(p=!0),N&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(p=!0),f&&(P="high");let T=o(h),W=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:z}:{},I?{}:{color:"transparent"},y),V=A||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:L,heightInt:B,blurWidth:l,blurHeight:u,blurDataURL:S||"",objectFit:W.objectFit})+'")':'url("'+j+'")',H=V?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},J=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:s,sizes:o,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,o),d=l.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:s,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:a({config:t,src:r,quality:s,width:l[d]})}}({config:a,src:d,unoptimized:p,width:L,quality:T,sizes:c,loader:G});return{props:{...E,loading:F?"lazy":m,fetchPriority:P,width:L,height:B,decoding:"async",className:g,style:{...W,...H},sizes:J.sizes,srcSet:J.srcSet,src:J.src},meta:{unoptimized:p,priority:f,placeholder:j,fill:x}}}},76184:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:s,objectFit:o}=e,a=i?40*i:t,l=n?40*n:r,u=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},64180:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},37751:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return a},default:function(){return l}});let i=r(46783),n=r(34470),s=r(96987),o=i._(r(94534)),a=e=>{let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=s.Image},94534:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},46031:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},38735:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var i=r(25036);function n(){return i.jsx("div",{children:"Home"})}r(37751)},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var i=r(70337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[638,150,337,856],()=>r(29480));module.exports=i})();