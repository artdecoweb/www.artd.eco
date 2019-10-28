(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



// stage content:
(lib.parchmentsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 16
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#643D16").ss(0.2).p("ApoAFIiEgCAKEgDIBpAA");
	this.shape.setTransform(84.8,106.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A6712D").ss(0.2).p("AtgnkICqgVAsKIPICrAAAJBIFIC1ACAKpoOIC4AX");
	this.shape_1.setTransform(86.6,53.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DDAA59","#CB8E42","#F0B768","#FDE29B"],[0,0.11,0.365,0.769],-6.6,1.5,11.4,-0.3).s().p("Ah+neICpgXIBUPrIipAAg");
	this.shape_2.setTransform(12.9,54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DDAA59","#CB8E42","#F0B768","#FDE29B"],[0,0.11,0.365,0.769],-8.4,0,8.8,1.8).s().p("AiOH7IBmv1IC3AWIhoPfg");
	this.shape_3.setTransform(158.7,52.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#643D16").s().p("Ar9IVIgIgEIgFgCIAAgEIgBgPICrAAIABAPIirAAICrAAIAAABQgJABgKAFQgEACgDADgAJzIOQgGgEgLgCIghgFIACgBIgCgBIC1ADIAAACIACABIgFAAQgLAAgFABQgFADgCADgAJBIBIABgOIC2AAIgCARgAJBIBgAtgnoICqgVIiqAVIAGgCQAVgHAIgJIBSgKQAHAEAGACQAIACAWAAIAKgBIABANIiqAYgAKooDIABgPQAVACAOgCIATgEIBnANQAMAKAPAFIi4gYIC4AYIgBAOgANhn6g");
	this.shape_4.setTransform(86.6,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 17
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD386").s().p("AJdHGQADgEgDgFQAEgCABgEQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABAAQACgDAAgDQAAgDgDgCIgFgBIgBACIgCAAIgDAAIAFAFQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgGgCIgXAAIAAAAIgBAAIABgHIAAgBIABgSQAUkLAZkGQAQihAYieIABABQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBABAAIABAAIgBgDIAAgBIABgBIAEAAIAUABIAAACIABABIAEAAIgBACIAAABIADAAIABAAIACgCIAAgBIABgBIgBADQgBADgDAAIAAAAQAQAegJAzQgGAhgCAhQgQEKgcEHQgMBngOBlQgDAUgKAAIgDgBgApfGqQgNgPgCgbIgLiHQgWkIgakKQgDgbgHgbQgShCAOgaIALgUQAAAAAAABQAAAAABAAQAAABAAAAQABABAAAAIAEAAIAEAAIgBgBIgBgBIADAAIAaABIAAAAIAAABQADASABAcQADBHAKA/QAKA/ATC4QARCzAREFIACAHIgVAAQgqAAAVgEgApdGoIgCACIAFgBIAAgBIgBAAg");
	this.shape_5.setTransform(85.3,54.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD386").s().p("AJdHKQADgFgDgFQAEgCABgDQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgBQACgCAAgDQAAgDgDgCIgFgBIgBACIgCgBIgDAAIAFAGQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgFgCIABAEQABAFgBACIgCAAIgPABIgGgBIgBAAIAAAAIgCAAIABgPIAAgCIAAgCIAAgBIABgSQAUkKAZkGQAQiiAYidIABAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBABAAIABAAIgBgDIAAgBIACABIAXAAIAAABIABACIAEAAIgBACIAAABIADAAIABgBIACgCIAAAAIABgBIgBACQgBAEgDAAIAAAAQAQAdgJA0QgGAhgCAgQgQEKgcEHQgMBogOBlQgDATgKAAIgDAAgApjGuIAAACQgGgBAGgBgApgGtIABAAQgNgPgCgaIgLiHQgWkJgakJQgDgbgHgcQgShBAOgaIALgVQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAIAEABIABAAIAAgEIABgMIABgBIAQAAIAFABIAEAAIACAPIABAEIABABQACARABAYQADBHAKA/QAKA/ATC5QARCyAREGIABADgApdGsIgCABIAFgBIAAgBIgBAAg");
	this.shape_6.setTransform(85.3,54.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD386").s().p("AJdHFQADgFgDgFIAEgCIACAAIADgCIABgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgCAAIgBgDIABgBQACgCAAgDQAAgDgDgCIgFgBIgBACIgCgBIgDAAIAAABIgJAAIgKgBIgGAAIAAgBIAAAAIABgTQAUkKAZkGQAQiiAYidIABAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAABgBIABAAIAAAAIAaAAIABAAIACAAIgBACIAAABIADAAIABgBIACgCIAAAAIABgBIgBACQgBAEgDAAIAAAAQAQAegJAzQgGAhgCAgQgQEKgcEHQgMBogOBlQgDATgKAAIgDAAgApjGpIAAADQgGgBAGgCgApaGqQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAIADgBIAAgBIgBAAIgCABIgBABQgEgCgEgFQgGgIgCgaIgLiHQgWkJgakJQgDgbgHgcQgShBAOgaIAKgTIACAAIABABIAEABIABAAIAAgCIAPAAIABAAIANABIABAEIABABQACARABAYQADBHAKA/QAKA/ATC5QARCyAREGIAAAFIgRAAIgSgBg");
	this.shape_7.setTransform(85.3,54.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFD386").s().p("AJdHFQADgFgDgFIAEgCIACAAIADgCIABgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgCAAIgBgDIABgBQACgCAAgDQAAgDgDgCIgFgBIgBACIgCgBIgDAAIAAABQAKAJgTAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQgEABgIAAIAAgLIAAAAIABgTQAUkKAZkGQAQiiAYidIABAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAABgBIABAAIAAAAIAaAAIABAAIACAAIgBACIAAABIADAAIABgBIACgCIAAAAIABgBIgBACQgBAEgDAAIAAAAQAQAegJAzQgGAhgCAgQgQEKgcEHQgMBogOBlQgDATgKAAIgDAAgApaGsQgDgCAAgCIADgBIAAgBIgBAAIgCABIgBABQgEgCgEgFQgGgIgCgaIgLiHQgWkJgakJQgDgbgHgcQgShBAOgaIAKgTIACAAIABABIAEABIABAAIADgGIAcAAIAAAKQACARABAYQADBHAKA/QAKA/ATC5QARCyAREGIABAGIgVABIgPgBgApjGpIAAADQgGgBAGgCg");
	this.shape_8.setTransform(85.3,54.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD386").s().p("AJdHFQADgFgDgFIAEgCIACAAIADgCIABgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgCAAIgBgDIABgBQACgCAAgDQAAgDgDgCIgFgBIgBACIgCgBIgDAAIAAABQAKAJgTAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQgEABgIAAIAAgLIAAAAIABgTQAUkKAZkGQAQiiAYidIABAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAABgBIABAAIAAAAIAaAAIABAAIACAAIgBACIAAABIADAAIABgBIACgCIAAAAIABgBIgBACQgBAEgDAAIAAAAQAQAegJAzQgGAhgCAgQgQEKgcEHQgMBogOBlQgDATgKAAIgDAAgApjGpIAAADQgGgBAGgCgApPGmIAAAAIgIABIgDgBIgBAAIgDABIgBAAQgDgCgEgEQgGgIgCgaIgLiHQgWkJgakJQgDgbgHgcQgShBAOgaIAKgTIACAAIABABIAEABIABAAIABgCIAaAAIAEAAIAAAGQACARABAYQADBHAKA/QAKA/ATC5QARCyAREGIABABIgCAAIgIABg");
	this.shape_9.setTransform(85.3,54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).wait(2));

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFEAC6").ss(6).p("AAAm3IAANv");
	this.shape_10.setTransform(83.1,52.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFEAC6").ss(6).p("AAAm2IAANt");
	this.shape_11.setTransform(83.1,54.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFEAC6").ss(6).p("AAAm0IAANp");
	this.shape_12.setTransform(83.1,54.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFEAC6").ss(6).p("AAAm0IAANq");
	this.shape_13.setTransform(83.1,53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_13}]},2).wait(2));

	// Layer 15
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FFDEA1","#FFEAC6"],[0,1],-27.3,6.5,7.8,3).s().p("AlCmrIJ0gTQAaG5gOG6IpBAKg");
	this.shape_14.setTransform(50.9,53);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFDEA1","#FFEAC6"],[0,0.596],30.3,2.7,-33.2,-1.4).s().p("AlZG2QAOm6gam5ILLAKIhVNyg");
	this.shape_15.setTransform(117.4,52.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFDEA1","#FFEAC6"],[0,1],-26.1,6,9,2.5).s().p("Aj5G2IhUt2IKPARQATG2gNG6g");
	this.shape_16.setTransform(49.7,53.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FFDEA1","#FFEAC6"],[0,0.596],29.6,1.6,-33.9,-2.5).s().p("AliG8QANm6gTm2ILRgJIhTN7g");
	this.shape_17.setTransform(118,54);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FFDEA1","#FFEAC6"],[0,1],-26.5,5.3,8.6,1.7).s().p("AkEGxIhGtpIKQADQALG2gKG3g");
	this.shape_18.setTransform(50.1,54.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FFDEA1","#FFEAC6"],[0,0.596],29.5,1.6,-34,-2.6).s().p("AlimzILFgGIhVNkIpvAPQAKm3gLm2g");
	this.shape_19.setTransform(118.2,54.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FFDEA1","#FFEAC6"],[0,1],-26.7,5.8,8.4,2.3).s().p("Aj7G4IhKtvIKGAAQAKG3gKG4g");
	this.shape_20.setTransform(50.4,53.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFDEA1","#FFEAC6"],[0,0.596],29.5,2,-34,-2.2).s().p("AlkG4QALm4gLm3ILIAAIhXNvg");
	this.shape_21.setTransform(118.2,53.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFDEA1","#FFEAC6"],[0,1],-27,6,8.1,2.4).s().p("Aj+G1IhFtmIKFgFQAGG1gLG4g");
	this.shape_22.setTransform(50.7,53.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FFDEA1","#FFEAC6"],[0,0.596],29.2,1.9,-34.3,-2.3).s().p("AloG0QALm4gGm0ILMAAIhdNxg");
	this.shape_23.setTransform(118.5,53.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_23},{t:this.shape_22}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86.1,53.4,175,108.5);
// library properties:
lib.properties = {
	width: 174,
	height: 108,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;