(()=>{"use strict";var e,r,t,n,o,a,i,l={722:(e,r,t)=>{function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const o=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,t;return r=e,(t=[{key:"render",value:function(e){var r=document.createElement("h1");r.innerHTML="I am learning Webpack, it's awesome!!! ".concat(e),r.classList.add("heading"),document.querySelector("body").appendChild(r)}}])&&n(r.prototype,t),e}();var a=t(686),i=t(420);var l,u=t(486),c=t.n(u);(new o).render(c().upperFirst("image component")),(l=document.createElement("img")).width=300,l.alt=i,l.src=a,l.classList.add("add-img"),document.querySelector("body").appendChild(l),console.log("productio mode"),t.e(474).then(t.t.bind(t,474,23)).then((function(e){(new(0,e.default)).render()}))},420:e=>{e.exports="image alt text"},686:(e,r,t)=>{e.exports=t.p+"d3904855f2c4070961c4.jpg"},359:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof HelloWorldApp)return e();t.l("http://localhost:9001/remoteEntry.js",(t=>{if("undefined"!=typeof HelloWorldApp)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"HelloWorldApp")})).then((()=>HelloWorldApp))}},u={};function c(e){var r=u[e];if(void 0!==r)return r.exports;var t=u[e]={id:e,loaded:!1,exports:{}};return l[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=l,e=[],c.O=(r,t,n,o)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,n,o]=e[u],i=!0,l=0;l<t.length;l++)(!1&o||a>=o)&&Object.keys(c.O).every((e=>c.O[e](t[l])))?t.splice(l--,1):(i=!1,o<a&&(a=o));i&&(e.splice(u--,1),r=n())}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,n,o]},c.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return c.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var a={};r=r||[null,t({}),t([]),t(t)];for(var i=2&n&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,c.d(o,a),o},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((r,t)=>(c.f[t](e,r),r)),[])),c.u=e=>e+".ff760b613b4f27499c6b.js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n={},o="webpack-tutorial:",c.l=(e,r,t,a)=>{if(n[e])n[e].push(r);else{var i,l;if(void 0!==t)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+t){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",o+t),i.src=e),n[e]=[r];var f=(r,t)=>{i.onerror=i.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a={474:[474]},i={474:["default","./btn",359]},c.f.remotes=(e,r)=>{c.o(a,e)&&a[e].forEach((e=>{var t=c.R;t||(t=[]);var n=i[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),l[e]=()=>{throw r},n.p=0},a=(e,t,a,i,l,u)=>{try{var c=e(t,a);if(!c||!c.then)return l(c,i,u);var s=c.then((e=>l(e,i)),o);if(!u)return s;r.push(n.p=s)}catch(e){o(e)}},u=(e,r,o)=>a(r.get,n[1],t,0,s,o),s=r=>{n.p=1,l[e]=e=>{e.exports=r()}};a(c,n[2],0,0,((e,r,t)=>e?a(c.I,n[0],0,e,u,t):o()),1)}}))},(()=>{c.S={};var e={},r={};c.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];c.o(c.S,t)||(c.S[t]={}),c.S[t];var a=[];switch(t){case"default":(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var o=c(359);if(!o)return;var i=e=>e&&e.init&&e.init(c.S[t],n);if(o.then)return a.push(o.then(i,r));var l=i(o);l&&l.then&&a.push(l.catch(r))}catch(e){r(e)}})()}return a.length?e[t]=Promise.all(a).then((()=>e[t]=1)):e[t]=1}}})(),c.p="/static/",(()=>{var e={179:0};c.f.j=(r,t)=>{var n=c.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(474!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=c.p+c.u(r),i=new Error;c.l(a,(t=>{if(c.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0},c.O.j=r=>0===e[r];var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;for(n in i)c.o(i,n)&&(c.m[n]=i[n]);if(l)var s=l(c);for(r&&r(t);u<a.length;u++)o=a[u],c.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0;return c.O(s)},t=self.webpackChunkwebpack_tutorial=self.webpackChunkwebpack_tutorial||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var s=c.O(void 0,[486],(()=>c(722)));s=c.O(s)})();