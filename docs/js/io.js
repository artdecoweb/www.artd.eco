(function(){(function(){function q(a){this.time=a.time;this.target=a.target;this.rootBounds=a.rootBounds;this.boundingClientRect=a.boundingClientRect;this.intersectionRect=a.intersectionRect||n();this.isIntersecting=!!a.intersectionRect;a=this.boundingClientRect;a=a.width*a.height;var b=this.intersectionRect;b=b.width*b.height;this.intersectionRatio=a?Number((b/a).toFixed(4)):this.isIntersecting?1:0}function e(a,b){b=b||{};if("function"!=typeof a)throw Error("callback must be a function");if(b.root&&1!=b.root.nodeType)throw Error("root must be an Element");
this.b=w(this.b.bind(this),this.B);this.C=a;this.f=[];this.a=[];this.g=this.j(b.rootMargin);this.thresholds=this.I(b.threshold);this.root=b.root||null;this.rootMargin=this.g.map(function(c){return c.value+c.h}).join(" ")}function w(a,b){var c=null;return function(){c||(c=setTimeout(function(){a();c=null},b))}}function r(a,b,c,d){"function"==typeof a.removeEventListener?a.removeEventListener(b,c,d||!1):"function"==typeof a.v&&a.v("on"+b,c)}function l(a){try{var b=a.getBoundingClientRect()}catch(c){}if(!b)return n();
b.width&&b.height||(b={top:b.top,right:b.right,bottom:b.bottom,left:b.left,width:b.right-b.left,height:b.bottom-b.top});return b}function n(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function t(a,b){for(;b;){if(b==a)return!0;b=p(b)}return!1}function p(a){return(a=a.parentNode)&&11==a.nodeType&&a.host?a.host:a&&a.assignedSlot?a.assignedSlot.parentNode:a}if("object"===typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in
window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}});else{var g=window.document,u=[];e.prototype.B=100;e.prototype.disconnect=function(){this.f=[];this.o();this.u()};e.prototype.A=function(){var a=this.a.slice();this.a=[];return a};e.prototype.I=function(a){a=a||[0];Array.isArray(a)||(a=[a]);return a.sort().filter(function(b,c,d){if("number"!=typeof b||isNaN(b)||0>b||1<b)throw Error("threshold must be a number between 0 and 1 inclusively");
return b!==d[c-1]})};e.prototype.j=function(a){a=(a||"0px").split(/\s+/).map(function(b){b=/^(-?\d*\.?\d+)(px|%)$/.exec(b);if(!b)throw Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(b[1]),h:b[2]}});a[1]=a[1]||a[0];a[2]=a[2]||a[0];a[3]=a[3]||a[1];return a};e.prototype.o=function(){this.J&&(this.J=!1,clearInterval(this.i),this.i=null,r(window,"resize",this.b,!0),r(g,"scroll",this.b,!0),this.c&&(this.c.disconnect(),this.c=null))};e.prototype.b=function(){var a=this.m(),
b=a?this.G():n();this.f.forEach(function(c){var d=c.element,f=l(d),h=this.l(d),k=c.w,m=a&&h&&this.D(d,b);c=c.w=new q({time:window.performance&&performance.now&&performance.now(),target:d,boundingClientRect:f,rootBounds:b,intersectionRect:m});k?a&&h?this.H(k,c)&&this.a.push(c):k&&k.isIntersecting&&this.a.push(c):this.a.push(c)},this);this.a.length&&this.C(this.A(),this)};e.prototype.D=function(a,b){if("none"!=window.getComputedStyle(a).display){var c=l(a);a=p(a);for(var d=!1;!d;){var f=null,h=1==a.nodeType?
window.getComputedStyle(a):{};if("none"==h.display)return;a==this.root||a==g?(d=!0,f=b):a!=g.body&&a!=g.documentElement&&"visible"!=h.overflow&&(f=l(a));if(f){h=Math.max(f.top,c.top);var k=Math.min(f.bottom,c.bottom),m=Math.max(f.left,c.left);c=Math.min(f.right,c.right);f=c-m;var v=k-h;c=0<=f&&0<=v&&{top:h,bottom:k,left:m,right:c,width:f,height:v};if(!c)break}a=p(a)}return c}};e.prototype.G=function(){if(this.root)var a=l(this.root);else{a=g.documentElement;var b=g.body;a={top:0,left:0,right:a.clientWidth||
b.clientWidth,width:a.clientWidth||b.clientWidth,bottom:a.clientHeight||b.clientHeight,height:a.clientHeight||b.clientHeight}}return this.F(a)};e.prototype.F=function(a){var b=this.g.map(function(c,d){return"px"==c.h?c.value:c.value*(d%2?a.width:a.height)/100});b={top:a.top-b[0],right:a.right+b[1],bottom:a.bottom+b[2],left:a.left-b[3]};b.width=b.right-b.left;b.height=b.bottom-b.top;return b};e.prototype.H=function(a,b){a=a&&a.isIntersecting?a.intersectionRatio||0:-1;b=b.isIntersecting?b.intersectionRatio||
0:-1;if(a!==b)for(var c=0;c<this.thresholds.length;c++){var d=this.thresholds[c];if(d==a||d==b||d<a!==d<b)return!0}};e.prototype.m=function(){return!this.root||t(g,this.root)};e.prototype.l=function(a){return t(this.root||g,a)};e.prototype.u=function(){var a=u.indexOf(this);-1!=a&&u.splice(a,1)};window.IntersectionObserver=e;window.IntersectionObserverEntry=q}})();}).call(this);

//# sourceMappingURL=io.js.map