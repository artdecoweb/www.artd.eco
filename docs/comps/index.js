function n(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}function p(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):{next:n(a)}}function q(a){for(var c,b=[];!(c=a.next()).done;)b.push(c.value);return b}
var r="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,u="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)};function v(a,c){if(c){var b=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in b||(b[e]={});b=b[e]}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&u(b,a,{configurable:!0,writable:!0,value:c})}}
var w="function"==typeof Object.assign?Object.assign:function(a,c){for(var b=1;b<arguments.length;b++){var d=arguments[b];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};v("Object.assign",function(a){return a||w});
v("String.prototype.endsWith",function(a){return a?a:function(c,b){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===b&&(b=this.length);b=Math.max(0,Math.min(b|0,this.length));for(var d=c.length;0<d&&0<b;)if(this[--b]!=c[--d])return!1;return 0>=d}});function x(a){function c(b){return b.raw[0].split(/\s+/).map(function(d){var e=a[d];return e?e:(console.error("Key %s is not present in the CSS map.",d),d)}).join(" ")}if(!a)return function(b){return b};Object.keys(a).forEach(function(b){c["$"+b]=a[b]});return c};function y(a,c){var b=document.getElementById(a);if(!b)return console.warn("Parent element for component %s with id %s not found",c,a),{};var d=b.parentElement;return d?{parent:d,b:b}:(console.warn("Parent of element for component %s with id %s not found",c,a),{})}function z(a,c,b,d,e,h,g){function f(){b.c(Object.assign({},h,{children:g}));a.instance=b}b||(b=new c(d,e));c.load?c.load(function(l,k){k&&Object.assign(h,k);l?console.warn(l):f()},d,h):f();return b};function A(a,c){this.loaded=this.a=null;this.m=[a];this.j=[c]}A.prototype.error=function(a){this.a=a;this.j.forEach(function(c){c(a)})};A.prototype.load=function(a){this.loaded=a;this.m.forEach(function(c){c(a)})};function B(a,c,b){var d=document.createElement("script");d.src=a;d.onload=c;d.onerror=b;(document.head||document.body).appendChild(d)}function C(a,c,b){var d=document.createElement("link");d.rel="stylesheet";d.href=a;d.onload=c;d.onerror=b;(document.head||document.body).appendChild(d)};function D(a,c){var b=new XMLHttpRequest;b.onreadystatechange=function(){4==b.readyState&&200==b.status&&c(null,b.responseText)};b.onerror=function(d){return c(d)};b.open("GET",a,!0);b.send()}function E(a,c){var b=F(a,C,G[a],function(d){return c(null,d)},function(d){return c(d)},a.nocache);b&&(G[a]=b)}
function F(a,c,b,d,e,h){if(h)c(a,d,e);else if(b&&b.loaded)d(b.loaded);else if(b&&b.a)e(b.a);else if(b)b.m.push(d),b.j.push(e);else{var g=new A(d,e);c(a,function(f){g.load(f)},function(f){g.error(f)});return g}}
function I(a){var c=["js/menu.json","snapsvg/dist/snap.svg-min.js","@artdeco/snapsvg-animator/svg-anim.min.js"],b=!1,d=[],e=0;c.forEach(function(h,g){function f(k){b||(b=k,a(k))}function l(k){b||(e++,d[g]=k,e==c.length&&a(null,d))}h.endsWith(".json")?D(h,function(k,m){k?f(k):l(m)}):J(h,l,f)})}var K={},G={};function J(a,c,b){(c=F(a,B,K[a],c,b,a.nocache))&&(K[a]=c)};function L(a,c){this.b=a;this.parent=c}L.load=function(a){E("css/Adonais.css",function(){a(null)})};L.prototype.c=function(){var a=this,c=document.createElement("div");c.innerHTML=this.parent.querySelector("noscript").innerText;var b=p(c.firstElementChild.children);c=b.next().value;b=q(b);this.b.firstElementChild.src=c.src;this.b.className+=" RunFadeIn";b.forEach(function(d){a.b.appendChild(d)})};r.Object.defineProperties(L,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function M(){}M.load=function(a){a(null);E("/css/Logo.css",function(){})};M.prototype.c=function(){};r.Object.defineProperties(M,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function N(a){this.b=a;this.a=null}N.load=function(a){I(function(c,b){if(c)return a(c);try{var d=p(b).next().value;a(null,{json:JSON.parse(d)})}catch(e){a(e)}})};N.prototype.unrender=function(){this.a.stop()};
N.prototype.c=function(a){a=a.json;if(this.a)return this.a.play();this.b.removeChild(this.b.querySelector("noscript"));var c=this.b.querySelector("img");this.a=new window.SVGAnim(a,1226,818);var b=this.a.s.node;b.style.position="absolute";b.style.top=0;b.style.right=0;b.removeAttribute("height");this.b.appendChild(b);setTimeout(function(){c.style.opacity=0;O(b,'svg > g > g[token="4"]',"about");O(b,'svg > g > g[token="3"]',"node");O(b,'svg > g > g[token="2"]',"packages");O(b,'svg > g > g[token="1"]',
"contact")},100)};r.Object.defineProperties(N,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function O(a,c,b,d){d=void 0===d?0:d;if(!(10<d)){var e=a.querySelector(c);e?e.onclick=function(){window.location="#"+b}:setTimeout(function(){return O(a,c,b,d+1)},100)}};function P(a,c){this.b=a;this.j=null;this.l=this.i=0;this.m=!0;this.a=this.b.nextElementSibling;a=this.a.nextElementSibling;"NOSCRIPT"!=a.tagName?console.warn("Could not remove noscript element."):c.removeChild(a)}P.prototype.unrender=function(){this.j&&window.removeEventListener("scroll",this.j)};
function Q(a){var c=a.b.getBoundingClientRect(),b=c.height,d=c.width,e=c.top-window.innerHeight,h=-(-window.innerHeight-b);c=h*Math.abs(a.i);a.a.style["min-height"]=b+c+"px";b=h*Math.abs(a.l);a.a.style["min-width"]=d+b+"px";d=e*a.i;e*=a.l;0>a.l&&(e-=b);0>a.i&&(d-=c);c="translate3d("+(e.toFixed()+"px, ")+(d.toFixed()+"px, 0)");a.a.style.transform=c;a.a.style.webkitTransform=c}
P.load=function(a,c,b){var d=document.createElement("img");d.src=b["background-image"];d.onload=function(){a(null,{B:c.className,style:c.getAttribute("style")})};d.onerror=function(){a(Error("Image could not be loaded."))}};
P.prototype.c=function(a){var c=this,b=a["background-image"],d=void 0===a.i?.5:a.i;a=void 0===a.l?0:a.l;this.m&&(this.a.className+=" RunFadeIn",this.m=!1);this.i=parseFloat(d);this.l=parseFloat(a);this.j=function(){Q(c)};window.addEventListener("scroll",this.j);this.a.style["background-image"]="url("+b+")";Q(this)};r.Object.defineProperties(P,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});var R=document.querySelectorAll("[data-background-img]");if(R.length){var S=new IntersectionObserver(function(a){a.forEach(function(c){var b=c.target;c.isIntersecting&&(S.unobserve(b),c=b.getAttribute("data-background-img"),b.removeAttribute("data-background-img"),b.style.background="url("+c+")")})},{rootMargin:"75px"});(R instanceof Array?R:q(p(R))).concat().forEach(function(a){return S.observe(a)})};var T={"styles/Adonais.css":{Letter:"a",LetterA:"b",Image:"c",A:"d",I:"e",A2:"f",D:"g",O:"h",N:"i",S:"j",Copy:"k",Noise:"l"},"styles/Logo.css":{}};
(function(){var a=document.getElementById("bottom"),c=a.previousElementSibling,b=c.style.height,d=parseInt(b,10),e=!1,h=null,g=0;document.onmousewheel=function(f){e&&(g+=f.wheelDelta,c.style.height=Math.min(d+-g/50,d+50)+"px",c.style.transition="",window.clearInterval(h),window.clearInterval(null),h=window.setTimeout(function(){g=0;c.style.height=b;c.style.transition="height .5s"},150))};(new IntersectionObserver(function(f){f.forEach(function(l){e=l=l.isIntersecting;l||(c.style.height=b,g=0)})})).observe(a)})();
var U={adonais:L,logo:M,menu:N,parallax:P},W=function(a){var c=a=void 0===a?{}:a,b=Object.assign({},c);a=void 0===c.rootMargin?"76px":c.rootMargin;var d=void 0===c.log?!0:c.log;c=(delete b.rootMargin,delete b.log,b);var e=new IntersectionObserver(function(h){h.forEach(function(g){var f=g.target,l=f.c.u,k=l.key,m=l.id,t=l.plain;if(g.isIntersecting){d&&console.warn("\ud83c\udfd7 Rendering%s component %s into the element %s",t?"":" Preact",k,m,f);try{var H=f.c();H&&!H.unrender&&e.unobserve(f)}catch(V){d&&
console.warn(V)}}else l.instance&&(d&&console.warn("\ud83d\udca8 Unrendering%s component %s from the element %s",t?"":" Preact",k,m,f),l.instance.unrender())})},Object.assign({},{rootMargin:a},c));return e}();
[{key:"logo",id:"Logo"},{key:"menu",id:"ce4db"},{key:"parallax",id:"c7c22",o:{"background-image":"/pages/index/img/seamless.jpg",i:"0",l:"-0.5"}},{key:"parallax",id:"c6b51",o:{"background-image":"/img/bakst2.jpg"}},{key:"adonais",id:"c57d0"},{key:"parallax",id:"c8cec",o:{"background-image":"/pages/index/img/code2.gif",i:"0.5"}}].forEach(function(a){var c=a.key,b=a.id,d=void 0===a.o?{}:a.o,e=void 0===a.children?[]:a.children,h=U[c];d.C={v:function(g){return x(T[g])}};b.split(",").forEach(function(g){var f=
y(g,c),l=f.parent,k=f.b,m={key:c,id:g,plain:!0},t;k.c=function(){return t=z(m,h,t,k,l,d,e)};k.c.u=m;W.observe(k)})});

//# sourceMappingURL=index.js.map