function Z(a){this.b=a}Z.prototype.render=function(){var a=this.b.querySelector("div"),b=this.b.querySelector("p");b.addEventListener("mousemove",function(c){var d=a.getBoundingClientRect();b.style.background="linear-gradient("+180*Math.atan((d.height-(c.pageY-window.scrollY-d.top))/(c.pageX-d.left))/Math.PI+"deg, transparent, #e3d6ce)"})};u.Object.defineProperties(Z,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});console.log("We're not hiring. Please close the console.");var oa={};y();var pa={animation:T,"back-to":U,highlightjs:V,parallax:I,"social-buttons":W,tip:Z},qa=B();
[{key:"back-to",id:"cccdc",props:{name:"fig-75046"}},{key:"highlightjs",id:"c6ce5,c6ce51,c6ce52,c6ce53,c6ce54",props:{lang:"xml,javascript"}},{key:"back-to",id:"c6965",props:{name:"fig-74268"}},{key:"parallax",id:"c647b",props:{"background-image":"img/tile.jpg"}},{key:"back-to",id:"ce513",props:{name:"fig-9848"}},{key:"highlightjs",id:"c16f7,c16f71",props:{lang:"xml"}},{key:"back-to",id:"c632c",props:{name:"fig-57253"}},{key:"tip",id:"c716e"},{key:"social-buttons",id:"cd871",props:{url:"https://www.artd.eco/articles/how-to-load-google-fonts-asynchronously.html",
size:"24",c:"true"}},{key:"animation",id:"c65b9",props:{path:"best-google-font/animate/agf.json",width:"550",height:"400",align:"center"}},{key:"back-to",id:"c5040",props:{name:"fig-82466"}},{key:"animation",id:"cde7b",props:{path:"best-google-font/animate/aligator.json",width:"74",height:"36"}},{key:"back-to",id:"c8e80",props:{name:"fig-80"}},{key:"back-to",id:"c7de0",props:{name:"fig-65987"}},{key:"social-buttons",id:"cfc84",props:{url:"https://www.artd.eco/articles/how-to-load-google-fonts-asynchronously.html",
size:"36",c:"true"}},{key:"highlightjs",id:"c1d47,c1d471",props:{lang:"css"}},{key:"back-to",id:"c458c",props:{name:"fig-45018"}},{key:"parallax",id:"c709f,c709f1,c709f2,c709f3,c709f4,c709f5,c709f6,c709f7",props:{"background-image":"/img/letters/background.png",j:"-0.5"}}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,e=void 0===a.children?[]:a.children,f=pa[b],h=f.plain||/^\s*class\s+/.test(f.toString())&&!G.isPrototypeOf(f);d.v={o:function(g){return z(oa[g])}};c.split(",").forEach(function(g){var k=
A(g,b),l=k.parent,m=k.b,n={key:b,id:g,plain:h},p;m.render=function(){return p=E(n,f,p,m,l,d,e)};m.render.c=n;qa.observe(m)})});

//# sourceMappingURL=best-google-font.js.map