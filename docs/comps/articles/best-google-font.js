function Y(a){this.a=a}Y.prototype.render=function(){var a=this.a.querySelector("div"),b=this.a.querySelector("p");b.addEventListener("mousemove",function(c){var d=a.getBoundingClientRect();b.style.background="linear-gradient("+180*Math.atan((d.height-(c.pageY-window.scrollY-d.top))/(c.pageX-d.left))/Math.PI+"deg, white, #e3d6ce)"})};u.Object.defineProperties(Y,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});console.log("We're not hiring. Please close the console.");var wa={};y();var xa={animation:T,"back-to":U,highlightjs:X,parallax:H,"social-buttons":V,tip:Y},ya=B();
[{key:"back-to",id:"cccdc",props:{name:"fig-75046"}},{key:"highlightjs",id:"c6ce5,c6ce51,c6ce52,c6ce53,c6ce54",props:{lang:"xml,javascript"}},{key:"back-to",id:"c6965",props:{name:"fig-74268"}},{key:"back-to",id:"ce513",props:{name:"fig-9848"}},{key:"highlightjs",id:"c16f7,c16f71",props:{lang:"xml"}},{key:"back-to",id:"c632c",props:{name:"fig-57253"}},{key:"tip",id:"c716e"},{key:"social-buttons",id:"cd871",props:{url:"https://www.artd.eco/articles/how-to-load-google-fonts-asynchronously.html",size:24,
c:!0}},{key:"animation",id:"c65b9",props:{path:"best-google-font/animate/agf.json",width:550,height:400,align:"center"}},{key:"back-to",id:"c5040",props:{name:"fig-82466"}},{key:"animation",id:"cde7b",props:{path:"best-google-font/animate/aligator.json",width:74,height:36}},{key:"back-to",id:"c8e80",props:{name:"fig-80"}},{key:"back-to",id:"c7de0",props:{name:"fig-65987"}},{key:"social-buttons",id:"cfc84",props:{url:"https://www.artd.eco/articles/how-to-load-google-fonts-asynchronously.html",size:36,
c:!0}},{key:"highlightjs",id:"c1d47,c1d471",props:{lang:"css"}},{key:"parallax",id:"c8757",props:{"background-image":"../articles/img/tile.jpg"}},{key:"back-to",id:"c458c",props:{name:"fig-45018"}},{key:"parallax",id:"c69e3,c69e31,c69e32,c69e33,c69e34,c69e35,c69e36,c69e37",props:{"background-image":"img/letters/background.png",j:"-0.5"}}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,f=void 0===a.children?[]:a.children,e=xa[b],k=e.plain||/^\s*class\s+/.test(e.toString())&&!F.isPrototypeOf(e);
d.l={i:"/",A:function(g){return z(wa[g])}};c.split(",").forEach(function(g){var m=A(g,b),l=m.parent,h=m.a;if(h){var n={key:b,id:g,plain:k},p;h.render=function(){return p=E(n,e,p,h,l,d,f)};h.render.c=n;ya.observe(h)}})});

//# sourceMappingURL=best-google-font.js.map