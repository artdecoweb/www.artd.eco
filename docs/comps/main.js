function f(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function n(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:f(a)}}function q(a){if(!(a instanceof Array)){a=n(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},r;
if("function"==typeof Object.setPrototypeOf)r=Object.setPrototypeOf;else{var t;a:{var ba={i:!0},u={};try{u.__proto__=ba;t=u.i;break a}catch(a){}t=!1}r=t?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var v=r;
function w(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(v)v(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},da="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ea(a,b){if(b){var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
ea("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);c=Math.max(0,Math.min(c|0,this.length));for(var d=b.length;0<d&&0<c;)if(this[--c]!=b[--d])return!1;return 0>=d}});function fa(a){return a?function(b){return b.raw[0].split(/\s+/).map(function(c){var d=a[c];d||console.error("Key %s is not present in the CSS map.",c);return d}).filter(Boolean).join(" ")}:function(b){return b}};var x=preact,y=x.h,z=x.Component,ha=x.render;function ia(a,b){var c=document.getElementById(a);if(!c)return console.warn("Parent element for component %s with id %s not found",b,a),{};var d=c.parentElement;return d?{parent:d,l:c}:(console.warn("Parent of element for component %s with id %s not found",b,a),{})};var A=["Letter"];A.raw=A.slice();var B=["S Image"];B.raw=B.slice();var C=["Letter"];C.raw=C.slice();var D=["N Image"];D.raw=D.slice();var E=["Letter"];E.raw=E.slice();var F=["O Image"];F.raw=F.slice();var G=["Letter"];G.raw=G.slice();var H=["D Image"];H.raw=H.slice();var I=["Letter"];I.raw=I.slice();var J=["A2 Image"];J.raw=J.slice();var K=["Letter"];K.raw=K.slice();var L=["I Image"];L.raw=L.slice();var M=["Letter"];M.raw=M.slice();var N=["A Image"];N.raw=N.slice();var O=["Noise"];O.raw=O.slice();
var P=["Copy"];P.raw=P.slice();var Q=["Image"];Q.raw=Q.slice();var R=["Image"];R.raw=R.slice();function S(){var a=z.call(this)||this;a.state={hint:null};return a}w(S,z);S.prototype.getChildContext=function(){var a=this;return{hint:this.state.hint,o:function(b){a.setState({hint:b})},m:function(b){a.setState({x:b.x,y:b.y})}}};
S.prototype.render=function(a){var b=a.u.j("styles/Adonais.css","Adonais");return y("div",{className:"Adonais "+a.a},y("img",{className:b(R),src:"img/adonais/back.jpg",style:"position:relative; opacity:0;"}),y("img",{className:b(Q),src:"img/adonais/back.jpg"}),this.state.hint&&y("span",{className:b(P),style:{"z-index":2,position:"absolute",top:this.state.y+15,left:this.state.x+15}},y("span",{className:b(O)},this.state.hint)),y(T,{top:112,file:"img/adonais/a2.png",left:219,a:b(N),href:"#art-deco"},
y("strong",{className:b(M)},"A"),"rt Deco creates products for the modern web using back-end Node.JS and front-end JavaScript, taking advantage of the best available methods."),y(T,{top:208,file:"img/adonais/I.png",left:175,a:b(L),href:"#implementation"},"We ",y("strong",{className:b(K)},"I"),"mplement software products using the latest language features and spend time on writing code rather than setting up tools and installing 3rd party dependencies."),y(T,{top:207,file:"img/adonais/A3.png",left:73,
a:b(J),href:"#automated-testing"},"Employed ",y("strong",{className:b(I)},"A"),"utomated Testing on unit and integration levels ensures that software is bug-free and that any future changes to the codebase won't break the existing version."),y(T,{top:123,file:"img/adonais/D.png",left:15,a:b(H),href:"#documentation"},"Full-coverage ",y("strong",{className:b(G)},"D"),"ocumentation allows for long-term maintenance by us and other teams and is full of examples and their outputs that also act as a quality assurance mechanism."),
y(T,{top:28,file:"img/adonais/O.png",left:67,a:b(F),href:"#optimisation"},"The ",y("strong",{className:b(E)},"O"),"ptimisation of CSS stylesheets and JavaScript code, both for the server and client-side, means that transmitted bundles will load faster and improve user experience."),y(T,{top:25,file:"img/adonais/N.png",left:169,a:b(D),href:"#npm-packages"},"Having contributed over 150 ",y("strong",{className:b(C)},"N"),"PM packages, we have derived the methodology for managing dependencies that facilitate code reuse and organises workload into logical chunks."),
y(T,{top:120,file:"img/adonais/S.png",left:125,a:b(B),href:"#software"},y("strong",{className:b(A)},"S"),"oftware Engineering is a craft that involves implementation, testing, documentation, building and maintenance. With our holistic approach, we are able to deliver best quality software."))};
function T(a,b){var c=a.children,d=b.o,e=b.m,h=b.hint;return y("a",{href:a.href},y("img",{className:a.a,src:a.file,style:{top:a.top+"px",left:a.left+"px"},onMouseOver:function(){d(c)},onMouseOut:function(){d(null)},onMouseMove:function(k){if(h){var g=k.currentTarget;e({x:parseInt(g.style.left,10)+k.offsetX,y:parseInt(g.style.top,10)+k.offsetY})}}}))};function ja(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==this.readyState&&200==this.status&&b(null,this.responseText)};c.onerror=function(d){return b(d)};c.open("GET",a,!0);c.send()}
function ka(a){var b=["js/menu.json","snapsvg/dist/snap.svg-min.js","js/svg-anim.js"],c=!1,d=[],e=0;b.forEach(function(h,k){function g(l){c||(c=l,a(l))}function m(l){c||(e++,d[k]=l,e==b.length&&a(null,d))}if(h.endsWith(".json"))ja(h,function(l,la){l?g(l):m(la)});else{var p=document.createElement("script");p.src=h;p.onload=m;p.onerror=g;(document.head||document.body).appendChild(p)}})};function U(){var a=z.call(this)||this;a.state={json:null};return a}w(U,z);U.prototype.componentWillMount=function(){var a=this;ka(function(b,c){c&&(b=n(c).next().value,a.setState({json:JSON.parse(b)}))})};function ma(){var a=Error("loading...");a.cancelRender=!0;throw a;}
U.prototype.render=function(){var a=document.getElementById("menu");this.state.json||ma();var b=(new window.SVGAnim(this.state.json,1226,818)).s.node;b.style["max-width"]="100%";setTimeout(function(){var c=b.querySelector('svg > g > g[token="3"]'),d=b.querySelector('svg > g > g[token="2"]'),e=b.querySelector('svg > g > g[token="1"]');V(b.querySelector('svg > g > g[token="4"]'),"about");V(c,"node");V(d,"packages");V(e,"contact");a.querySelector("img").replaceWith(b)},100);return null};
function V(a,b){a.onclick=function(){window.location="#"+b}};var W=document.getElementsByClassName("Noises");if(W.length){var X=new IntersectionObserver(function(a){a.forEach(function(b){var c=b.target;b.isIntersecting&&X.unobserve(c);c.style.background="url(img/noise/giphy-2.gif)"})},{rootMargin:"75px"});q(W).concat().forEach(function(a){return X.observe(a)})};var Y={},na=new IntersectionObserver(function(a){a.forEach(function(b){var c=b.target;if(b.isIntersecting){if(b=c.getAttribute("data-src"))c.style["background-image"]=b,c.removeAttribute("data-src");if(!Y[c.b]){var d=c.getAttribute("y");null===d&&(d=2);d=parseFloat(d);var e=c.getAttribute("x");null===e&&(e=0);e=parseFloat(e);var h=c.getAttribute("oy");null===h&&(h=0);h=parseFloat(h);b=function(){var k=c.getBoundingClientRect().top-window.innerHeight,g=0,m=0;if(d){g=k/d;var p=c.getAttribute("min-y"),
l=g;p&&(l=Math.max(p,g));g=l}e&&(k*=e,m=-k,c.style["min-width"]=(10*Math.abs(k)).toFixed(0)+"px");c.style["min-height"]=3*c.parentNode.clientHeight+"px";g+=h;c.style.transform="translate3d("+(m.toFixed(0)+"px, ")+(g.toFixed(0)+"px, 0)")};window.addEventListener("scroll",b);Y[c.b]=b}}else c.b in Y&&(window.removeEventListener("scroll",Y[c.b]),delete Y[c.b])})});window.addEventListener("resize",function(){});var oa=0;
function Z(){q(document.querySelectorAll(".Parallax")).concat().forEach(function(a){a.style["background-image"]&&(a.b=oa++,a.setAttribute("data-src",a.style["background-image"]),a.style["background-image"]=null,na.observe(a))})}window.IO=function(){Z()};Z();"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(a,b){if(null==a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1;d<arguments.length;d++){var e=arguments[d];if(null!=e)for(var h in e)Object.prototype.hasOwnProperty.call(e,h)&&(c[h]=e[h])}return c},writable:!0,configurable:!0});var pa={"styles/Adonais.css":{Letter:"a",Image:"b",A:"c",I:"d",A2:"e",D:"f",O:"g",N:"h",S:"i",Copy:"j",Noise:"k"},"styles/Parallax.css":{}},qa={adonais:S,menu:U},ra=function(a){var b=a=void 0===a?{}:a,c=Object.assign({},b);a=void 0===b.rootMargin?"76px":b.rootMargin;var d=void 0===b.log?!0:b.log;b=(delete c.rootMargin,delete c.log,c);var e=new IntersectionObserver(function(h){h.forEach(function(k){var g=k.target;if(k.isIntersecting&&g.render){d&&console.warn("Rendering component %s into the element %s ",
g.render.c.key,g.render.c.id);try{g.render()}catch(m){if(!m.cancelRender)throw m;}e.unobserve(g)}})},Object.assign({},{rootMargin:a},b));return e}();
[{key:"adonais",id:"c9848",props:{a:"position-relative mb-3 align-top"}},{key:"menu",id:"menu"}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,e=void 0===a.children?[]:a.children;a=ia(c,b);var h=a.parent,k=a.l,g=qa[b];d.u={B:function(){},j:function(m){return fa(pa[m])},v:function(){}};k.render=function(){ha(y(g,d,e),h,k)};k.render.c={key:b,id:c};ra.observe(k)});

//# sourceMappingURL=main.js.map