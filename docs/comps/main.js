function m(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function n(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:m(a)}}function q(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var r="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},t;
if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var u;a:{var v={o:!0},w={};try{w.__proto__=v;u=w.o;break a}catch(a){}u=!1}t=u?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var x=t,y="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,z="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function A(a,b){if(b){var c=y;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&z(c,a,{configurable:!0,writable:!0,value:b})}}
A("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);c=Math.max(0,Math.min(c|0,this.length));for(var d=b.length;0<d&&0<c;)if(this[--c]!=b[--d])return!1;return 0>=d}});
var B="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};A("Object.assign",function(a){return a||B});function C(a){return a?function(b){return b.raw[0].split(/\s+/).map(function(c){var d=a[c];d||console.error("Key %s is not present in the CSS map.",c);return d}).filter(Boolean).join(" ")}:function(b){return b}};var D=preact,E=D.h,F=D.Component,aa=D.render;function ba(a,b){var c=document.getElementById(a);if(!c)return console.warn("Parent element for component %s with id %s not found",b,a),{};var d=c.parentElement;return d?{parent:d,a:c}:(console.warn("Parent of element for component %s with id %s not found",b,a),{})};function G(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(null,c.responseText)};c.onerror=function(d){return b(d)};c.open("GET",a,!0);c.send()}function H(a,b){var c=document.createElement("link");c.rel="stylesheet";c.href=a;c.onload=function(d){return b(null,d)};c.onerror=function(d){return b(d)};document.head.appendChild(c)}
function ca(a){var b=["js/menu.json","snapsvg/dist/snap.svg-min.js","js/svg-anim.js"],c=!1,d=[],e=0;b.forEach(function(f,h){function g(k){c||(c=k,a(k))}function l(k){c||(e++,d[h]=k,e==b.length&&a(null,d))}if(f.endsWith(".json"))G(f,function(k,da){k?g(k):l(da)});else{var p=document.createElement("script");p.src=f;p.onload=l;p.onerror=g;(document.head||document.body).appendChild(p)}})};function I(a){this.a=a;this.i=this.j=null;this.b=this.c=0}function J(a){var b=a.j.getBoundingClientRect(),c=b.height,d=b.width;b=b.top-window.innerHeight;var e=-(-window.innerHeight-c);a.a.style["min-height"]=c+e*Math.abs(a.c)+"px";c=e*Math.abs(a.b);a.a.style["min-width"]=d+c+"px";d=b*a.c;b*=a.b;0>a.b&&(b-=c);d="translate3d("+(b.toFixed()+"px, ")+(d.toFixed()+"px, 0)");a.a.style.transform=d;a.a.style.webkitTransform=d}
I.load=function(a,b,c){c=c["background-image"];var d=document.createElement("img");d.src=c;d.onload=function(){a(null,{u:b.className,style:b.getAttribute("style")})};d.onerror=function(){a(Error("Image could not be loaded."))};H("/css/Parallax.css",function(){})};
I.prototype.render=function(a){var b=this,c=a["background-image"],d=void 0===a.b?0:a.b;this.c=parseFloat((void 0===a.c?.5:a.c)||.5);this.b=parseFloat(d||0);this.j=this.a.nextElementSibling;this.i=function(){J(b)};window.addEventListener("scroll",this.i);this.a.style["background-image"]="url("+c+")";this.a.className+=" RunFadeIn";J(this)};y.Object.defineProperties(I,{browserProps:{configurable:!0,enumerable:!0,get:function(){return["background-image"]}},plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function K(){}K.load=function(a){a(null);H("/css/Logo.css",function(){})};K.prototype.render=function(){};y.Object.defineProperties(K,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function L(a,b){this.a=a;this.parent=b}L.load=function(a){var b=!1,c;H("css/Adonais.css",function(){b=!0;c&&b&&a(null,{l:c})});G("/parts/adonais.html",function(d,e){var f=document.createElement("iframe");f.style.opacity=0;document.body.appendChild(f);f.contentWindow.document.open();f.contentWindow.document.write(e);f.contentWindow.document.close();f.onload=function(){(c=f.contentWindow.document.body.firstElementChild)&&b&&a(null,{l:c});document.body.removeChild(f)}})};
L.prototype.render=function(a){var b=this,c=n(a.l.children);a=c.next().value;c=q(c);this.a.firstElementChild.src=a.src;this.a.className+=" RunFadeIn";c.forEach(function(d){b.a.appendChild(d)})};y.Object.defineProperties(L,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function M(){return F.apply(this,arguments)||this}M.prototype=r(F.prototype);M.prototype.constructor=M;if(x)x(M,F);else for(var N in F)if("prototype"!=N)if(Object.defineProperties){var O=Object.getOwnPropertyDescriptor(F,N);O&&Object.defineProperty(M,N,O)}else M[N]=F[N];M.load=function(a){ca(function(b,c){if(b)return a(b);try{var d=n(c).next().value;a(null,{json:JSON.parse(d)})}catch(e){a(e)}})};
M.prototype.render=function(a){var b=(new window.SVGAnim(a.json,1226,818)).s.node;setTimeout(function(){var c=b.querySelector('svg > g > g[token="3"]'),d=b.querySelector('svg > g > g[token="2"]'),e=b.querySelector('svg > g > g[token="1"]');P(b.querySelector('svg > g > g[token="4"]'),"about");P(c,"node");P(d,"packages");P(e,"contact")},100);return E("div",{ref:function(c){c.appendChild(b)},id:"menu",style:"width:100%;"})};function P(a,b){a.onclick=function(){window.location="#"+b}};var Q=document.getElementsByClassName("Noises");if(Q.length){var R=new IntersectionObserver(function(a){a.forEach(function(b){var c=b.target;b.isIntersecting&&(R.unobserve(c),c.style.background="url(img/noise/giphy-2.gif)")})},{rootMargin:"75px"});(Q instanceof Array?Q:q(n(Q))).concat().forEach(function(a){return R.observe(a)})};function S(){var a=this.parentNode,b=arguments.length;if(a)for(b||a.removeChild(this);b--;){var c=arguments[b];"object"!==typeof c?c=this.ownerDocument.createTextNode(c):c.parentNode&&c.parentNode.removeChild(c);b?a.insertBefore(c,this.previousSibling):a.replaceChild(c,this)}}Element.prototype.replaceWith||(Element.prototype.replaceWith=S);CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=S);DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=S);var T=document.getElementById("bottom"),U=T.previousElementSibling,V=U.style.height,W=parseInt(V,10),X=!1,Y=null,Z=0;document.onmousewheel=function(a){X&&(Z+=a.wheelDelta,U.style.height=Math.min(W+-Z/50,W+50)+"px",U.style.transition="",window.clearInterval(Y),window.clearInterval(null),Y=window.setTimeout(function(){Z=0;U.style.height=V;U.style.transition="height .5s"},150))};(new IntersectionObserver(function(a){a.forEach(function(b){X=b=b.isIntersecting;b||(U.style.height=V,Z=0)})})).observe(T);"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(a,b){if(null==a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1;d<arguments.length;d++){var e=arguments[d];if(null!=e)for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(c[f]=e[f])}return c},writable:!0,configurable:!0});var ea={"styles/Adonais.css":{Letter:"a",LetterA:"b",Image:"c",A:"d",I:"e",A2:"f",D:"g",O:"h",N:"i",S:"j",Copy:"k",Noise:"l"}},fa={parallax:I,logo:K,adonais:L,menu:M},ha=function(a){var b=a=void 0===a?{}:a,c=Object.assign({},b);a=void 0===b.rootMargin?"76px":b.rootMargin;var d=void 0===b.log?!0:b.log;b=(delete c.rootMargin,delete c.log,c);var e=new IntersectionObserver(function(f){f.forEach(function(h){var g=h.target;if(h.isIntersecting&&g.render){d&&console.warn("Rendering component %s into the element %s ",
g.render.m.key,g.render.m.id);try{g.render()}catch(l){if(!l.cancelRender)throw l;}e.unobserve(g)}})},Object.assign({},{rootMargin:a},b));return e}();
[{key:"parallax",id:"c57253",props:{"background-image":"/img/bakst2.jpg"}},{key:"parallax",id:"c74268",props:{"background-image":"/img/code2.gif",c:"0.5","background-repeat":"repeat-y","z-index":"-1"}},{key:"logo",id:"c75046"},{key:"adonais",id:"c80",props:{u:"position-relative mb-3 align-top"}},{key:"parallax",id:"c9848",props:{"background-image":"/img/seamless.jpg","z-index":"-1",c:"0",b:"-0.5"}},{key:"menu",id:"menu"}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,e=void 0===
a.children?[]:a.children;a=ba(c,b);var f=a.parent,h=a.a,g=fa[b];d.F={C:function(){},v:function(l){return C(ea[l])},B:function(){}};h.render=function(){function l(){g.plain?(new g(h,f)).render(Object.assign({},d,{children:e})):aa(E(g,d,e),f,h)}g.load?g.load(function(p,k){k&&Object.assign(d,k);p||l()},h,d):l()};h.render.m={key:b,id:c};ha.observe(h)});

//# sourceMappingURL=main.js.map