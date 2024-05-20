"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{1572:function(e,t,r){r.d(t,{ZP:function(){return _}});class i{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let n={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},o=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},a=async(e,t,r={})=>{let o=await fetch(n.origin+e,{method:"POST",headers:r,body:t}),a=await o.text(),l=new i(o.status,a);if(o.ok)return l;throw l},l=(e,t,r)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!=typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},s=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},u=e=>e.webdriver||!e.languages||0===e.languages.length,c=()=>new i(451,"Unavailable For Headless Browser"),d=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},f=e=>!e.list?.length||!e.watchVariable,p=(e,t)=>e instanceof FormData?e.get(t):e[t],m=(e,t)=>{if(f(e))return!1;d(e.list,e.watchVariable);let r=p(t,e.watchVariable);return"string"==typeof r&&e.list.includes(r)},g=()=>new i(403,"Forbidden"),h=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"},b=async(e,t,r)=>{let i=Number(await r.get(e)||0);return t-Date.now()+i},y=async(e,t,r)=>{if(!t.throttle||!r)return!1;h(t.throttle,t.id);let i=t.id||e;return await b(i,t.throttle,r)>0||(await r.set(i,Date.now().toString()),!1)},v=()=>new i(429,"Too Many Requests"),w=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},j=e=>"string"==typeof e?document.querySelector(e):e;var _={init:(e,t="https://api.emailjs.com")=>{if(!e)return;let r=o(e);n.publicKey=r.publicKey,n.blockHeadless=r.blockHeadless,n.storageProvider=r.storageProvider,n.blockList=r.blockList,n.limitRate=r.limitRate,n.origin=r.origin||t},send:async(e,t,r,i)=>{let d=o(i),f=d.publicKey||n.publicKey,p=d.blockHeadless||n.blockHeadless,h=n.storageProvider||d.storageProvider,b={...n.blockList,...d.blockList},w={...n.limitRate,...d.limitRate};return p&&u(navigator)?Promise.reject(c()):(l(f,e,t),s(r),r&&m(b,r))?Promise.reject(g()):await y(location.pathname,w,h)?Promise.reject(v()):a("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:f,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},sendForm:async(e,t,r,i)=>{let s=o(i),d=s.publicKey||n.publicKey,f=s.blockHeadless||n.blockHeadless,p=n.storageProvider||s.storageProvider,h={...n.blockList,...s.blockList},b={...n.limitRate,...s.limitRate};if(f&&u(navigator))return Promise.reject(c());let _=j(r);l(d,e,t),w(_);let P=new FormData(_);return m(h,P)?Promise.reject(g()):await y(location.pathname,b,p)?Promise.reject(v()):(P.append("lib_version","4.3.3"),P.append("service_id",e),P.append("template_id",t),P.append("user_id",d),a("/api/v1.0/email/send-form",P))},EmailJSResponseStatus:i}},6648:function(e,t,r){r.d(t,{default:function(){return n.a}});var i=r(5601),n=r.n(i)},8173:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let i=r(9920),n=r(1452),o=r(7437),a=n._(r(2265)),l=i._(r(4887)),s=i._(r(8321)),u=r(497),c=r(7103),d=r(3938);r(2301);let f=r(291),p=i._(r(1241)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,i,n,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){let[t,r]=a.version.split(".",2),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:l,width:s,decoding:u,className:c,style:d,fetchPriority:f,placeholder:p,loading:m,unoptimized:b,fill:y,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:_,sizesInput:P,onLoad:O,onError:S,...x}=e;return(0,o.jsx)("img",{...x,...h(f),loading:m,width:s,height:l,decoding:u,"data-nimg":y?"fill":"1",className:c,style:d,sizes:n,srcSet:i,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,p,v,w,j,b,P))},[r,p,v,w,j,S,b,P,t]),onLoad:e=>{g(e.currentTarget,p,v,w,j,b,P)},onError:e=>{_(!0),"empty"!==p&&j(!0),S&&S(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,i),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),i=(0,a.useContext)(d.ImageConfigContext),n=(0,a.useMemo)(()=>{let e=m||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:s}=e,g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let[v,w]=(0,a.useState)(!1),[j,_]=(0,a.useState)(!1),{props:P,meta:O}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:v,showAltText:j});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...P,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:_,sizesInput:e.sizes,ref:t}),O.priority?(0,o.jsx)(y,{isAppRouter:!r,imgAttributes:P}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return i}});let i=r(9920)._(r(2265)).default.createContext({})},687:function(e,t){function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||r&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},497:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(2301);let i=r(1564),n=r(7103);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,u,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:b,height:y,fill:v=!1,style:w,overrideSrc:j,onLoad:_,onLoadingComplete:P,placeholder:O="empty",blurDataURL:S,fetchPriority:x,layout:C,objectFit:k,objectPosition:E,lazyBoundary:I,lazyRoot:z,...M}=e,{imgConf:R,showAltText:D,blurComplete:A,defaultLoader:T}=t,L=R||n.imageConfigDefault;if("allSizes"in L)l=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);l={...L,allSizes:e,deviceSizes:t}}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let N=M.loader||T;delete M.loader,delete M.srcSet;let F="__next_img_default"in N;if(F){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:r,...i}=t;return e(i)}}if(C){"fill"===C&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!d&&(d=t)}let H="",V=a(b),U=a(y);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,S=S||e.blurDataURL,H=e.src,!v){if(V||U){if(V&&!U){let t=V/e.width;U=Math.round(e.height*t)}else if(!V&&U){let t=U/e.height;V=Math.round(e.width*t)}}else V=e.width,U=e.height}}let B=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:H)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,B=!1),l.unoptimized&&(f=!0),F&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(x="high");let G=a(h),q=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:E}:{},D?{}:{color:"transparent"},w),K=A||"empty"===O?null:"blur"===O?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:V,heightInt:U,blurWidth:s,blurHeight:u,blurDataURL:S||"",objectFit:q.objectFit})+'")':'url("'+O+'")',W=K?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},J=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,a),c=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,i)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:s[c]})}}({config:l,src:c,unoptimized:f,width:V,quality:G,sizes:d,loader:N});return{props:{...M,loading:B?"lazy":m,fetchPriority:x,width:V,height:U,decoding:"async",className:g,style:{...q,...W},sizes:J.sizes,srcSet:J.srcSet,src:j||J.src},meta:{unoptimized:f,priority:p,placeholder:O,fill:v}}}},8321:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return d}});let i=r(9920),n=r(1452),o=r(7437),a=n._(r(2265)),l=i._(r(5960)),s=r(2901),u=r(6590),c=r(687);function d(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2301);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(d(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,i={};return n=>{let o=!0,a=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){a=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?o=!1:t.add(n.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=n.props[t],r=i[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),i[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,r=(0,a.useContext)(s.AmpStateContext),i=(0,a.useContext)(u.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:m,headManager:i,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}=e,l=i?40*i:t,s=n?40*n:r,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3938:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let i=r(9920)._(r(2265)),n=r(7103),o=i.default.createContext(n.imageConfigDefault)},7103:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5601:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return l}});let i=r(9920),n=r(497),o=r(8173),a=i._(r(1241));function l(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},1241:function(e,t){function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},291:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let i=r(9920)._(r(2265)).default.createContext(null)},5960:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let i=r(2265),n="undefined"==typeof window,o=n?()=>{}:i.useLayoutEffect,a=n?()=>{}:i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let n=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}if(n){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},1810:function(e,t,r){r.d(t,{w_:function(){return c}});var i=r(2265),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(n),a=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var i,n;i=t,n=r[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return t=>i.createElement(d,l({attr:u({},e.attr)},t),function e(t){return t&&t.map((t,r)=>i.createElement(t.tag,u({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:n,size:o,title:s}=e,c=function(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;r[i]=e[i]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,a),d=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&i.createElement("title",null,s),e.children)};return void 0!==o?i.createElement(o.Consumer,null,e=>t(e)):t(n)}}}]);