function m(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function n(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:m(a)}}function p(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var q="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,t="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a},u="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function v(a,b){if(b){var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&u(c,a,{configurable:!0,writable:!0,value:b})}}v("Object.assign",function(a){return a||t});
v("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);c=Math.max(0,Math.min(c|0,this.length));for(var d=b.length;0<d&&0<c;)if(this[--c]!=b[--d])return!1;return 0>=d}});function w(){var a=document.getElementById("bottom"),b=a.previousElementSibling,c=b.style.height,d=parseInt(c,10),e=!1,g=null,f=0;document.onmousewheel=function(h){e&&(f+=h.wheelDelta,b.style.height=Math.min(d+-f/50,d+50)+"px",b.style.transition="",window.clearInterval(g),window.clearInterval(null),g=window.setTimeout(function(){f=0;b.style.height=c;b.style.transition="height .5s"},150))};(new IntersectionObserver(function(h){h.forEach(function(k){e=k=k.isIntersecting;k||(b.style.height=c,f=0)})})).observe(a)}
;function x(a){return a?function(b){return b.raw[0].split(/\s+/).map(function(c){var d=a[c];d||console.error("Key %s is not present in the CSS map.",c);return d}).filter(Boolean).join(" ")}:function(b){return b}};var y=preact,z=y.h,A=y.Component,B=y.render;function C(a,b){var c=document.getElementById(a);if(!c)return console.warn("Parent element for component %s with id %s not found",b,a),{};var d=c.parentElement;return d?{parent:d,a:c}:(console.warn("Parent of element for component %s with id %s not found",b,a),{})}
function D(){var a=void 0===a?{}:a;var b=Object.assign({},a),c=void 0===a.rootMargin?"76px":a.rootMargin,d=void 0===a.log?!0:a.log;a=(delete b.rootMargin,delete b.log,b);var e=new IntersectionObserver(function(g){g.forEach(function(f){var h=f.target;f.isIntersecting&&(d&&console.warn("Rendering component %s into the element %s ",h.render.i.key,h.render.i.id),e.unobserve(h),h.render())})},Object.assign({},{rootMargin:c},a));return e}
function E(a,b,c,d,e){function g(){a.plain||/^\\s*class\\s+/.test(a.toString())&&!A.isPrototypeOf(a)?(new a(b,c)).render(Object.assign({},d,{children:e})):B(z(a,d,e),c,b)}a.load?a.load(function(f,h){h&&Object.assign(d,h);f||g()},b,d):g()};function F(a,b){var c=document.createElement("link");c.rel="stylesheet";c.href=a;c.onload=function(d){return b(null,d)};c.onerror=function(d){return b(d)};document.head.appendChild(c)};function G(a,b){this.a=a;this.j=this.o=null;this.c=this.b=0;b.removeChild(b.querySelector("noscript"))}function H(a){var b=a.o.getBoundingClientRect(),c=b.height,d=b.width,e=b.top-window.innerHeight,g=-(-window.innerHeight-c);b=g*Math.abs(a.b);a.a.style["min-height"]=c+b+"px";c=g*Math.abs(a.c);a.a.style["min-width"]=d+c+"px";d=e*a.b;e*=a.c;0>a.c&&(e-=c);0>a.b&&(d-=b);b="translate3d("+(e.toFixed()+"px, ")+(d.toFixed()+"px, 0)");a.a.style.transform=b;a.a.style.webkitTransform=b}
G.load=function(a,b,c){c=c["background-image"];var d=document.createElement("img");d.src=c;d.onload=function(){a(null,{B:b.className,style:b.getAttribute("style")})};d.onerror=function(){a(Error("Image could not be loaded."))};F("/css/Parallax.css",function(){})};
G.prototype.render=function(a){var b=this,c=a["background-image"],d=void 0===a.c?0:a.c;this.b=parseFloat((void 0===a.b?.5:a.b)||.5);this.c=parseFloat(d||0);this.o=this.a.nextElementSibling;this.j=function(){H(b)};window.addEventListener("scroll",this.j);this.a.style["background-image"]="url("+c+")";this.a.className+=" RunFadeIn";H(this)};q.Object.defineProperties(G,{browserProps:{configurable:!0,enumerable:!0,get:function(){return["background-image"]}},plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});var I=document.querySelectorAll("[data-background-img]");if(I.length){var J=new IntersectionObserver(function(a){a.forEach(function(b){var c=b.target;b.isIntersecting&&(J.unobserve(c),b=c.getAttribute("data-background-img"),c.removeAttribute("data-background-img"),c.style.background="url("+b+")")})},{rootMargin:"75px"});(I instanceof Array?I:p(n(I))).concat().forEach(function(a){return J.observe(a)})};

//# sourceMappingURL=common.js.map