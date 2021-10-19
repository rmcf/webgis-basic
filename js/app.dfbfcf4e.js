(()=>{var e={2318:(e,t,r)=>{"use strict";r(5363),r(71);var o=r(8880),a=r(2277),n=r(3673);function i(e,t,r,o,a,i){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}const s=(0,n.aZ)({name:"App"});s.render=i;const l=s;var c=r(2935),p=r(7083),u=r(9582);const d=[{path:"/",component:()=>Promise.all([r.e(736),r.e(141)]).then(r.bind(r,8141)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(617)]).then(r.bind(r,9617))},{path:"/map",component:()=>Promise.all([r.e(736),r.e(985)]).then(r.bind(r,8985))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],f=d,h=(0,p.BC)((function(){const e=u.r5,t=(0,u.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("/webgis-basic/")});return t}));async function m(e,t){const o="function"===typeof c["default"]?await(0,c["default"])({}):c["default"],{storeKey:n}=await Promise.resolve().then(r.bind(r,2935)),i="function"===typeof h?await h({store:o}):h;o.$router=i;const s=e(l);return s.use(a.Z,t),{app:s,store:o,storeKey:n,router:i}}const g={config:{}},b="/webgis-basic/",v=/\/\//,y=e=>(b+e).replace(v,"/");async function w({app:e,router:t,store:r,storeKey:o},a){let n=!1;const i=e=>{n=!0;const r=Object(e)===e?y(t.resolve(e).fullPath):e;window.location.href=r},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<a.length;c++)try{await a[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:b})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.use(r,o),e.mount("#q-app"))}m(o.ri,g).then((e=>Promise.all([Promise.resolve().then(r.bind(r,4112)),Promise.resolve().then(r.bind(r,5474))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));w(e,r)}))))},5474:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,api:()=>i});var o=r(7083),a=r(52),n=r.n(a);const i=n().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=i}))},4112:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,i18n:()=>s});var o=r(7083),a=r(5948);const n={failed:"Action failed",success:"Action was successful"},i={"en-US":n},s=(0,a.o)({locale:"en-US",messages:i}),l=(0,o.xr)((({app:e})=>{e.use(s)}))},2935:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var o={};r.r(o),r.d(o,{SET_LAYERS_SELECTED_RASTER:()=>c,SET_LAYERS_SELECTED_VECTOR:()=>l});var a=r(7083),n=r(3617);function i(){return{layersSelectedVector:[],layerSelectedRaster:null,layersAll:[{id:"countries",title:"Countries of the World",description:"List of all countries of the World from public source",attributions:"",url:"https://openlayers.org/en/latest/examples/data/geojson/countries.geojson",type:"vector",format:"geojson",projection:"EPSG:4326"},{id:"osm",title:"Open Street Map",description:"Collaborative project to create a free editable geographic database of the world",attributions:"",url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",type:"raster",format:"png",projection:"EPSG:4326"},{id:"wikimedia",title:"Wikimedia maps",description:"A general colour map wikimedia maps",attributions:"",url:"https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png",type:"raster",format:"png",projection:"EPSG:4326"},{id:"cartodb",title:"CartoDB Light",description:"Good for sticking color star ratings over the top of.",attributions:"",url:"https://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",type:"raster",format:"png",projection:"EPSG:4326"},{id:"argistopomap",title:"ArcGIS World Topo Map",description:"ArcGIS REST tile services are supported by ol/source/XYZ",attributions:"",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",type:"raster",format:"png",projection:"EPSG:4326"}]}}var s=r(139);function l(e,t){e.layersSelectedVector=t}function c(e,t){e.layerSelectedRaster=t}var p=r(8828);const u={namespaced:!0,state:i,getters:s,mutations:o,actions:p},d=(0,a.h)((function(){const e=(0,n.MT)({modules:{layers:u},strict:!1});return e}))},8828:()=>{},139:()=>{}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.m=e,(()=>{var e=[];r.O=(t,o,a,n)=>{if(!o){var i=1/0;for(p=0;p<e.length;p++){for(var[o,a,n]=e[p],s=!0,l=0;l<o.length;l++)(!1&n||i>=n)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(p--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[o,a,n]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{141:"856118c8",193:"52e124ca",617:"6efb67e3",985:"95ae282e"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{141:"1d903f21",143:"31d6cfe0",736:"6ad1e94c",985:"bb83782a"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="webgis-spa:";r.l=(o,a,n,i)=>{if(e[o])e[o].push(a);else{var s,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var u=c[p];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+n){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+n),s.src=o),e[o]=[a];var d=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p="/webgis-basic/"})(),(()=>{var e=(e,t,r,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var n=n=>{if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=n,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var a=r[o],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],n=a.getAttribute("data-href");if(n===e||n===t)return a}},o=o=>new Promise(((a,n)=>{var i=r.miniCssF(o),s=r.p+i;if(t(i,s))return a();e(o,s,a,n)})),a={143:0};r.f.miniCss=(e,t)=>{var r={141:1,985:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var n=new Promise(((r,o)=>a=e[t]=[r,o]));o.push(a[2]=n);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,a[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var a,n,[i,s,l]=o,c=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var p=l(r)}for(t&&t(o);c<i.length;c++)n=i[c],r.o(e,n)&&e[n]&&e[n][0](),e[i[c]]=0;return r.O(p)},o=self["webpackChunkwebgis_spa"]=self["webpackChunkwebgis_spa"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(2318)));o=r.O(o)})();