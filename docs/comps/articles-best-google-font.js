function X(a){this.i=a}X.load=function(a,b,c){b=void 0===c.G?"default":c.G;(c=c.lang)||a(Error("The language was not specified."));var d=c.split(",").map(function(e){return"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.9/languages/"+e+".min.js"});P(["/js/highlight.pack.js"],function(e){if(e)return a(e);P(d,a)});b&&M("/highlight.js/styles/"+b+".css",function(){})};X.prototype.j=function(){hljs.highlightBlock(this.i.querySelector("code"))};
t.Object.defineProperties(X,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Y(a){this.i=a;this.c=null}Y.load=function(a,b,c){b=c.J;c=[c.path,b?"/snapsvg/dist/snap.svg.js":"/snapsvg/dist/snap.svg-min.js"].concat(r(b?[]:["/@artdeco/snapsvg-animator/svg-anim.min.js"]));P(c,function(d,e){if(d)return a(d);try{var g=p(e).next().value;a(null,{json:JSON.parse(g)})}catch(f){a(f)}})};Y.prototype.unrender=function(){this.c.stop()};
Y.prototype.j=function(a){var b=a.json,c=a.width,d=a.height;a=a.align;if(this.c)this.c.play();else{var e=this.i.querySelector("img");this.c=new window.SVGAnim(b,c,d);b=this.c.s.node;b.style.position="absolute";b.style.top=0;"right"==a?b.style.right=0:"center"==a?(b.style.right=0,b.style.left=0,b.style.margin="0 auto"):b.style.left=0;b.style.maxWidth="100%";b.style.maxHeight="100%";b.removeAttribute("height");this.i.appendChild(b);setTimeout(function(){e.style.opacity=0},100)}};
t.Object.defineProperties(Y,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Z(a){this.i=a}Z.prototype.j=function(){var a=this.i.querySelector("div"),b=this.i.querySelector("p");b.addEventListener("mousemove",function(c){var d=a.getBoundingClientRect();b.style.background="linear-gradient("+180*Math.atan((d.height-(c.pageY-window.scrollY-d.top))/(c.pageX-d.left))/Math.PI+"deg, transparent, #e3d6ce)"})};t.Object.defineProperties(Z,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});var ha={};x();var ia={highlightjs:X,parallax:C,animation:Y,tip:Z},ja=A();
[{key:"highlightjs",id:"c84504",a:{lang:"xml,javascript,css"}},{key:"parallax",id:"c73472",a:{"background-image":"/img/tile.jpg"}},{key:"animation",id:"c31227",a:{path:"best-google-font/animate/advanced-google-font.json",width:"505",height:"299"}},{key:"highlightjs",id:"c57253",a:{lang:"xml,javascript"}},{key:"highlightjs",id:"c45018",a:{lang:"xml,javascript"}},{key:"highlightjs",id:"c65987",a:{lang:"xml,javascript"}},{key:"animation",id:"c35245",a:{path:"best-google-font/animate/agf.json",width:"550",
height:"400",align:"center"}},{key:"parallax",id:"c53386",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"parallax",id:"c19251",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"parallax",id:"c52573",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"highlightjs",id:"c70819",a:{lang:"javascript"}},{key:"highlightjs",id:"c70368",a:{lang:"javascript"}},{key:"parallax",id:"c73311",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},
{key:"parallax",id:"c31604",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"highlightjs",id:"c66833",a:{lang:"xml,javascript"}},{key:"highlightjs",id:"c25081",a:{lang:"javascript"}},{key:"highlightjs",id:"c27532",a:{lang:"xml,javascript"}},{key:"highlightjs",id:"c72096",a:{lang:"xml"}},{key:"highlightjs",id:"c52507",a:{lang:"javascript"}},{key:"highlightjs",id:"c56385",a:{lang:"xml,css"}},{key:"parallax",id:"c53862",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},
{key:"parallax",id:"c18666",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"highlightjs",id:"c16379",a:{lang:"javascript"}},{key:"parallax",id:"c11465",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"parallax",id:"c73305",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"highlightjs",id:"c59284",a:{lang:"xml,javascript"}},{key:"parallax",id:"c57883",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"parallax",id:"c61157",
a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"parallax",id:"c26861",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"parallax",id:"c23546",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"parallax",id:"c66812",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"parallax",id:"c18601",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"parallax",id:"c84520",a:{"background-image":"/img/letters/background.png",
b:"-0.5"}},{key:"highlightjs",id:"c74268",a:{lang:"xml"}},{key:"highlightjs",id:"c73556",a:{lang:"javascript"}},{key:"highlightjs",id:"c88891",a:{lang:"xml,javascript"}},{key:"parallax",id:"c83759",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"highlightjs",id:"c75046",a:{lang:"css"}},{key:"highlightjs",id:"c78401",a:{lang:"xml,javascript"}},{key:"highlightjs",id:"c82499",a:{lang:"xml,css"}},{key:"highlightjs",id:"c80",a:{lang:"css"}},{key:"animation",id:"c83476",a:{path:"best-google-font/animate/async-google-font.json",
width:"505",height:"299",align:"right"}},{key:"highlightjs",id:"c82466",a:{lang:"xml"}},{key:"highlightjs",id:"c84852",a:{lang:"xml"}},{key:"parallax",id:"c85787",a:{"background-image":"/img/letters/background.png",b:"-0.5"}},{key:"highlightjs",id:"c86907",a:{lang:"shell"}},{key:"highlightjs",id:"c95958",a:{lang:"css"}},{key:"highlightjs",id:"c97934",a:{lang:"javascript"}},{key:"tip",id:"c9848"}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.a?{}:a.a,e=void 0===a.children?[]:a.children;a=z(c,
b);var g=a.parent,f=a.i,h=ia[b],k={key:b,id:c,plain:!0},l;d.F={C:function(){},v:function(m){return y(ha[m])},B:function(){}};f.j=function(){return l=B(k,h,l,f,g,d,e)};f.j.u=k;ja.observe(f)});

//# sourceMappingURL=articles-best-google-font.js.map