function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function f(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},p;
if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var ca={u:!0},r={};try{r.__proto__=ca;q=r.u;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=p;
function u(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(t)t(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}var v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ea(a,b){if(b){var c=v;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
ea("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);c=Math.max(0,Math.min(c|0,this.length));for(var d=b.length;0<d&&0<c;)if(this[--c]!=b[--d])return!1;return 0>=d}});
var fa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};ea("Object.assign",function(a){return a||fa});function ha(a){return a?function(b){return b.raw[0].split(/\s+/).map(function(c){var d=a[c];d||console.error("Key %s is not present in the CSS map.",c);return d}).filter(Boolean).join(" ")}:function(b){return b}};var w=preact,x=w.h,y=w.Component,ia=w.render;function ja(a,b){var c=document.getElementById(a);if(!c)return console.warn("Parent element for component %s with id %s not found",b,a),{};var d=c.parentElement;return d?{parent:d,c:c}:(console.warn("Parent of element for component %s with id %s not found",b,a),{})};function ka(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(null,c.responseText)};c.onerror=function(d){return b(d)};c.open("GET",a,!0);c.send()}function la(a){var b=document.createElement("link");b.rel="stylesheet";b.href="css/Adonais.css";b.onload=function(c){return a(null,c)};b.onerror=function(c){return a(c)};document.head.appendChild(b)}
function ma(a){var b=["js/menu.json","snapsvg/dist/snap.svg-min.js","js/svg-anim.js"],c=!1,d=[],e=0;b.forEach(function(h,k){function g(m){c||(c=m,a(m))}function l(m){c||(e++,d[k]=m,e==b.length&&a(null,d))}if(h.endsWith(".json"))ka(h,function(m,ra){m?g(m):l(ra)});else{var n=document.createElement("script");n.src=h;n.onload=l;n.onerror=g;(document.head||document.body).appendChild(n)}})};var z=["LetterA"];z.raw=z.slice();var A=["Noise"];A.raw=A.slice();var B=["Copy"];B.raw=B.slice();var C=["Letter"];C.raw=C.slice();var D=["S Image"];D.raw=D.slice();var E=["Letter"];E.raw=E.slice();var F=["N Image"];F.raw=F.slice();var G=["Letter"];G.raw=G.slice();var H=["O Image"];H.raw=H.slice();var I=["Letter"];I.raw=I.slice();var J=["D Image"];J.raw=J.slice();var K=["Letter"];K.raw=K.slice();var L=["A2 Image"];L.raw=L.slice();var M=["Letter"];M.raw=M.slice();var N=["I Image"];N.raw=N.slice();
var O=["Letter"];O.raw=O.slice();var P=["A Image"];P.raw=P.slice();var Q=["Image"];Q.raw=Q.slice();var R=["Image"];R.raw=R.slice();function S(){return y.call(this)||this}u(S,y);S.load=function(a){la(function(){a()})};
S.prototype.render=function(a){var b=a.B.v("styles/Adonais.css");return x("div",{className:"Adonais "+a.a},x("img",{className:b(R),src:"img/adonais/back.jpg",style:"position:relative; opacity:0;"}),x("img",{className:b(Q),src:"img/adonais/back.jpg"}),x(T,{top:112,file:"img/adonais/a2.png",left:219,a:b(P),b:b,href:"#art-deco"},x("strong",{className:b(O)},"A"),"rt Deco creates products for the modern web using back-end Node.JS and front-end JavaScript, taking advantage of the best available methods."),
x(T,{top:208,file:"img/adonais/I.png",left:175,a:b(N),b:b,href:"#implementation"},"We ",x("strong",{className:b(M)},"I"),"mplement software products using the latest language features and spend time on writing code rather than setting up tools and installing 3rd party dependencies."),x(T,{top:207,file:"img/adonais/A3.png",left:73,a:b(L),b:b,href:"#automated-testing"},"Employed ",x("strong",{className:b(K)},"A"),"utomated Testing on unit and integration levels ensures that software is bug-free and that any future changes to the codebase won't break the existing version."),
x(T,{top:123,file:"img/adonais/D.png",left:15,a:b(J),b:b,href:"#documentation"},"Full-coverage ",x("strong",{className:b(I)},"D"),"ocumentation allows for long-term maintenance by us and other teams and is full of examples and their outputs that also act as a quality assurance mechanism."),x(T,{top:28,file:"img/adonais/O.png",left:67,a:b(H),b:b,href:"#optimisation"},"The ",x("strong",{className:b(G)},"O"),"ptimisation of CSS stylesheets and JavaScript code, both for the server and client-side, means that transmitted bundles will load faster and improve user experience."),
x(T,{top:25,file:"img/adonais/N.png",left:169,a:b(F),b:b,href:"#npm-packages"},"Having contributed over 150 ",x("strong",{className:b(E)},"N"),"PM packages, we have derived the methodology for managing dependencies that facilitate code reuse and organises workload into logical chunks."),x(T,{top:120,file:"img/adonais/S.png",left:125,a:b(D),b:b,href:"#software"},x("strong",{className:b(C)},"S"),"oftware Engineering is a craft that involves implementation, testing, documentation, building and maintenance. With our holistic approach, we are able to deliver best quality software."))};
function na(a){var b=a.b,c=a.children,d=a.top;a=a.left;return x("span",{className:b(B),style:{"z-index":2,position:"absolute",top:d+15,left:a+15}},x("span",{className:b(A)},c))}function T(a){var b=a.file,c=a.b,d=a.top,e=a.left,h=a.children,k=a.a;a=a.href;var g={top:d,left:e};return x("a",{className:c(z),href:a,style:g},x(na,{b:c,top:d,left:e},h),x("img",{className:k,src:b,style:g}))};function U(){var a=y.call(this)||this;a.c=null;a.m=null;a.l=null;a.j=0;a.i=0;return a}u(U,y);U.prototype.componentWillUnmount=function(){this.l&&window.removeEventListener("scroll",this.l)};
function oa(a){var b=a.m.getBoundingClientRect(),c=b.height,d=b.width;b=b.top-window.innerHeight;var e=-(-window.innerHeight-c);a.c.style["min-height"]=c+e*Math.abs(a.j)+"px";c=e*Math.abs(a.i);a.c.style["min-width"]=d+c+"px";d=b*a.j;b*=a.i;0>a.i&&(b-=c);d="translate3d("+(b.toFixed()+"px, ")+(d.toFixed()+"px, 0)");a.c.style.transform=d;a.c.style.webkitTransform=d}
U.prototype.componentDidMount=function(){var a=this;this.j=parseFloat(this.props.j||.5);this.i=parseFloat(this.props.i||0);this.m=this.c.nextElementSibling;this.l=function(){oa(a)};window.addEventListener("scroll",this.l);oa(this)};U.load=function(a,b){a(null,{a:b.className,style:b.getAttribute("style")})};U.prototype.render=function(a){var b=this,c=a["background-image"];return x("div",{className:a.a,style:a.style,ref:function(d){(b.c=d)&&(d.style["background-image"]="url("+c+")")}})};
v.Object.defineProperties(U,{browserProps:{configurable:!0,enumerable:!0,get:function(){return["background-image"]}}});function V(){return y.apply(this,arguments)||this}u(V,y);V.load=function(a){ma(function(b,c){if(b)return a(b);try{var d=f(c).next().value;a(null,{json:JSON.parse(d)})}catch(e){a(e)}})};
V.prototype.render=function(a){var b=(new window.SVGAnim(a.json,1226,818)).s.node;b.style["max-width"]="100%";setTimeout(function(){var c=b.querySelector('svg > g > g[token="3"]'),d=b.querySelector('svg > g > g[token="2"]'),e=b.querySelector('svg > g > g[token="1"]');W(b.querySelector('svg > g > g[token="4"]'),"about");W(c,"node");W(d,"packages");W(e,"contact")},100);return x("div",{ref:function(c){c.appendChild(b)},id:"menu",style:"width:100%;"})};
function W(a,b){a.onclick=function(){window.location="#"+b}};var X=document.getElementsByClassName("Noises");if(X.length){var pa=new IntersectionObserver(function(a){a.forEach(function(b){var c=b.target;b.isIntersecting&&pa.unobserve(c);c.style.background="url(img/noise/giphy-2.gif)"})},{rootMargin:"75px"}),Y;if(X instanceof Array)Y=X;else{for(var qa=f(X),sa,ta=[];!(sa=qa.next()).done;)ta.push(sa.value);Y=ta}Y.concat().forEach(function(a){return pa.observe(a)})};function Z(){var a=this.parentNode,b=arguments.length;if(a)for(b||a.removeChild(this);b--;){var c=arguments[b];"object"!==typeof c?c=this.ownerDocument.createTextNode(c):c.parentNode&&c.parentNode.removeChild(c);b?a.insertBefore(c,this.previousSibling):a.replaceChild(c,this)}}Element.prototype.replaceWith||(Element.prototype.replaceWith=Z);CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=Z);DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=Z);"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(a,b){if(null==a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1;d<arguments.length;d++){var e=arguments[d];if(null!=e)for(var h in e)Object.prototype.hasOwnProperty.call(e,h)&&(c[h]=e[h])}return c},writable:!0,configurable:!0});var ua={"styles/Adonais.css":{Letter:"a",LetterA:"b",Image:"c",A:"d",I:"e",A2:"f",D:"g",O:"h",N:"i",S:"j",Copy:"k",Noise:"l"}},va={adonais:S,parallax1:U,menu:V},wa=function(a){var b=a=void 0===a?{}:a,c=Object.assign({},b);a=void 0===b.rootMargin?"76px":b.rootMargin;var d=void 0===b.log?!0:b.log;b=(delete c.rootMargin,delete c.log,c);var e=new IntersectionObserver(function(h){h.forEach(function(k){var g=k.target;if(k.isIntersecting&&g.render){d&&console.warn("Rendering component %s into the element %s ",
g.render.o.key,g.render.o.id);try{g.render()}catch(l){if(!l.cancelRender)throw l;}e.unobserve(g)}})},Object.assign({},{rootMargin:a},b));return e}();
[{key:"adonais",id:"c9848",props:{a:"position-relative mb-3 align-top"}},{key:"parallax1",id:"c74268",props:{"background-image":"/img/seamless.jpg","z-index":"-1",j:"0",i:"-0.5"}},{key:"parallax1",id:"c80",props:{"background-image":"/img/code2.gif",j:"0.5","background-repeat":"repeat-y","z-index":"-1"}},{key:"menu",id:"menu"},{key:"parallax1",id:"c75046",props:{"background-image":"/img/bakst2.jpg"}}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,e=void 0===a.children?[]:a.children;
a=ja(c,b);var h=a.parent,k=a.c,g=va[b];d.B={F:function(){},v:function(l){return ha(ua[l])},C:function(){}};k.render=function(){g.load?g.load(function(l,n){n&&Object.assign(d,n);l||ia(x(g,d,e),h,k)},k):ia(x(g,d,e),h,k)};k.render.o={key:b,id:c};wa.observe(k)});

//# sourceMappingURL=main.js.map