(()=>{var e,r,t,n,o,a,u,i,l,f,s,d,p,h,c,v,m={497:(e,r,t)=>{Promise.all([t.e(914),t.e(747)]).then(t.bind(t,394))}},g={};function b(e){var r=g[e];if(void 0!==r)return r.exports;var t=g[e]={id:e,exports:{}};return m[e](t,t.exports,b),t.exports}b.m=m,b.c=g,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>e+".js",b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="mfa:",b.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var u,i;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){u=s;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,b.nc&&u.setAttribute("nonce",b.nc),u.setAttribute("data-webpack",r+o),u.src=t),e[t]=[n];var d=(r,n)=>{u.onerror=u.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),i&&document.head.appendChild(u)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{b.S={};var e={},r={};b.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];b.o(b.S,t)||(b.S[t]={});var a=b.S[t],u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:"mfa">u.from))&&(o[r]={get:t,from:"mfa",eager:!!n})},i=[];return"default"===t&&(u("react-dom","18.2.0",(()=>Promise.all([b.e(961),b.e(914)]).then((()=>()=>b(961))))),u("react","18.2.0",(()=>b.e(540).then((()=>()=>b(159)))))),e[t]=i.length?Promise.all(i).then((()=>e[t]=1)):1}}})(),b.p="http://localhost:3008/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var u=r[n],i=(typeof u)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=u)return o<u;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(i=e[a]))[0]?"-":(n>0?".":"")+(n=2,i);return t}var u=[];for(a=1;a<e.length;a++){var i=e[a];u.push(0===i?"not("+l()+")":1===i?"("+l()+" || "+l()+")":2===i?u.pop()+" "+u.pop():o(i))}return l();function l(){return u.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var u=0,i=1,l=!0;;i++,u++){var f,s,d=i<e.length?(typeof e[i])[0]:"";if(u>=r.length||"o"==(s=(typeof(f=r[u]))[0]))return!l||("u"==d?i>n&&!o:""==d!=o);if("u"==s){if(!l||"u"!=d)return!1}else if(l)if(d==s)if(i<=n){if(f!=e[i])return!1}else{if(o?f>e[i]:f<e[i])return!1;f!=e[i]&&(l=!1)}else if("s"!=d&&"n"!=d){if(o||i<=n)return!1;l=!1,i--}else{if(i<=n||s<d!=o)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,i--)}}var p=[],h=p.pop.bind(p);for(u=1;u<e.length;u++){var c=e[u];p.push(1==c?h()|h():2==c?h()&h():c?a(c,r):!h())}return!!h()},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},i=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",l=(e,r,t,n)=>{var o=u(e,t);return a(n,o)||f(i(e,t,o,n)),s(e[t][o])},f=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},s=e=>(e.loaded=1,e.get()),d=(e=>function(r,t,n,o){var a=b.I(r);return a&&a.then?a.then(e.bind(e,r,b.S[r],t,n,o)):e(0,b.S[r],t,n,o)})(((e,r,t,n,o)=>r&&b.o(r,t)?l(r,0,t,n):o())),p={},h={914:()=>d("default","react",[1,18,2,0],(()=>b.e(540).then((()=>()=>b(159))))),672:()=>d("default","react-dom",[1,18,2,0],(()=>b.e(961).then((()=>()=>b(961)))))},c={747:[672],914:[914]},v={},b.f.consumes=(e,r)=>{b.o(c,e)&&c[e].forEach((e=>{if(b.o(p,e))return r.push(p[e]);if(!v[e]){var t=r=>{p[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}};v[e]=!0;var n=r=>{delete p[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var o=h[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))},(()=>{var e={792:0};b.f.j=(r,t)=>{var n=b.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(914!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=b.p+b.u(r),u=new Error;b.l(a,(t=>{if(b.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,u,i]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in u)b.o(u,n)&&(b.m[n]=u[n]);i&&i(b)}for(r&&r(t);l<a.length;l++)o=a[l],b.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkmfa=self.webpackChunkmfa||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),b.nc=void 0,b(497)})();