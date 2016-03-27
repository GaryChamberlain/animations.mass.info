ProStyle.Stories.story = {
    canvas: {
        padding: 5,
        init: {
			color: "#AAA",
			font: "Architects Daughter, cursive;",
			bg: {color:"#000", img:"url(images/bg.jpg)", layout: "stretch"}
		}
    },
    frame: {
        aspectRatio: 4/3
    },
	controllers: [
		{controllerType: "auto", stepAdvance: true},
		{controllerType: "resize"},
		{controllerType: "track"}
	],
	pages: [
		{
			item: {	
				text: "Happy Easter!",
				init: {  font: 16, style: "bold" },
				charsInit: {
					color: "transparent",
					pos: {y:5},
					opacity: 0,
					textShadow: [[0, 0, 5, "rgba(75,185,245,0.6)"], [0, 0, 8, "rgba(75,185,245,0.6)"]]
				},
				charScripts: [
					{action: {
						anim: {duration: 0.8, stagger: 0.02},
						y: 0,
						opacity: 50
					}},
					
					{action: {
						delay: 1.2,
						animation: {duration: 0.5, stagger: 0.04},
						opacity: 70,
						scale: [100, 700],
						textShadow: [0, 0, 5, "rgba(75,185,245,1)"]
					}},
					
					{action: {
						delay: 1.7,
						anim: {duration: 1, stagger: 0.04, ease: "strong curve"},
						opacity: 70,
						scale: 100,
						textShadow: [0,0,0,"transparent"],
						color: "#FFF"
					}},
					
					{action: {delay: 2, anim: {dur: 1.5, stagger: 0.02}, pos:{y:0}, opacity: 0}}
				]
			}
		},
		{
			init: {font: 9},
			items: [
				{
					text: ["Lavenders","pinks","and","pastels","everywhere","sun shining","and","blue skies"],
					stackedLines: true,
					init: {font: 8, pos:[-2,0]},
					action: {
						delay: 30,
						anim: 2.5,
						rot: -270,
						scale:400,
						opacity: 0,
						pos: [-10,-5]
					},
					lineInit: { 
						pos: [15,-5],
						transformOrigin:{
							x: -15,
							y: 0,
							expand:true
						}, /* expand makes it relative to the page or layer, not item */
						opacity: 0,
						scale: 0
					},
					lineScripts: [
						{action: {
							anim: { duration:1, stagger:3},
							opacity:100,
							scale:120
						}},
						{action: {
							delay: 1,
							anim: {duration:30, stagger:3, ease: "linear"},
							rot:450,
							scale:20
						}}
					]
				},
				{
					text: "Happy Easter",
					init: {font: 10, color: "#FBFF0F", position: {z: -150}, opacity: 0, scale: 0,textShadow: [[0,0,2,"black"],[0,0,2,"black"],[0,0,2,"black"]]},
					scripts: [ { actions: [
						{delay: 30, animation: {duration: 4, ease: "elastic"}, position:{z: 2}, opacity:false, scale:false},
						{delay: 1, animation:{duration:3, ease:"back in"}, rotation:180, position:70, opacity: 0}] }]
				},
				{   itemType: "image",
					src: "images/egg-sm.png",
					height: 85,
					init: {
						pos: {z: -50},
						opacity: 0,
						scale: 20
					},
					actions: [
						{
							delay: 20,
							anim: 15,
							scale: false,
							rot: -90,
							opacity: 30
						},
						{
							anim: {duration: 3, ease: "back in"},
							rot: 90,
							pos: 100,
							opacity: 0
						}
					]
				},
				{
					text: [
						"Easter is a time for family, tradition,",
						"and celebrating new beginnings."
					],
					init: {  font: {size: 8, lineHeight:250}, opacity: 0 },
					scripts: [{actions: [
						{delay:40, animation:0.8, opacity: 100},
						{delay:6, animation:{duration:4,ease:"bounce"}, font:{lineHeight:110}, position:[0,35]}]}]
				},
				{	itemType: "image",
					src: "images/Bunny.png",
					height: 80,
					init: {opacity:0, position:[0,-15], scale: 30,corners:50, shadow:[1,1,2,"black"]},
					scripts: [{actions: [{delay:46, animation:10, position:[0,-10], opacity: false, scale: 70,corners: 5 }] }]
				}
			]
		},
		{
			items: [
				{	itemType: "image",
					src: "clipart/white1p.png", height: 120, width: 200,
					scripts: [ { actions: [ {delay: 18, animation:2, opacity: 0}]}]
				},
				{	itemType: "image",
					src: "clipart/houses.png",
					height: 100,
					init: {position: [-100, -29], scale: 30},
					scripts:[ 
						{actions:[{animation: {duration: 19, ease: "linear"}, scale: 30, position: [0, -29]}]},
						{actions:[{delay: 18, animation:2, opacity:0}]}]
				},
				{	itemType: "image",
					src: "clipart/car.png",
					height: 100,
					init: {anchor:20, scale:40, position:[100, 0, 2], opacity:0},
					scripts: [
						{actions:[{delay:0, animation:1, opacity:100}]},
						{actions:[{delay:0, animation:7, position: [70, 0, 2]}]},
						{actions:[{delay:8, animation:{duration:12, ease:"weak curve in"}, position: [-200, 0, 2]}]}]
				},
				{	itemType: "image",
					src: "clipart/car-egg.png",
					height: 100,
					init: {anchor:20, scale:40, position:[120, 0, 2], opacity:0},
					scripts: [
						{actions:[{delay:0, animation:1, opacity:100}]},
						{actions:[{delay:0, animation:7, position: [90, 0, 2]}]},
						{actions:[{delay:8, animation:{duration:12, ease:"weak curve in"}, position: [-180, 0, 2]}]}]
				},
				{
					setup: { text: "Happy Easter from my family to yours!"},
					init: {color: "#FFF", font: 7, width: 100, position: [0,35], textAlign: "center", textShadow: [0, 0, 5, "rgba(75,185,245,1)"]},
					charsInit: { position: [0,20], opacity: 0},
					charsScripts: [ { actions: [{delay: 5, animation: {duration:3, stagger:0.05, ease: "elastic"}, opacity: false, position: false}] },
									{actions:[{delay: 16, animation:2, opacity:0}]}]
				}
			]
		},
		{
			items: [
				{
					itemType: "image",
					src: "images/Alina.png",
					height: 100,
					init: {
						pos: 25
					}
				},
				{
					itemType: "image",
					src: "images/egg.png",
					height: 50,
					init:{
						pos: [-17,-17],
						opacity: 0,
						rot: {x:-180},
						corners: true,
						transformOrigin: [0, -50],
						shadow: [1,1,2,"black"]
					},
					scripts: [
						{ action: {
							delay: 1,
							anim: {duration: 4, ease: "elastic"},
							rot:{x:0},
							opacity:100
						}}
					]
				},
				
				{
				setup: {text: "Your friendly neighborhood realtor."},
				init: {color: "#FFF", font: 7, width: 100, position: [0,30], opacity:0, scale:50, textAlign: "center"},
				scripts: [{ actions: [{delay: 2, animation: {duration: 2}, opacity:100, scale:100}]},
						  { actions: [{delay: 7, animation: {duration: 1},position: [-5,26], opacity:95, scale:65}]}]
				},
				{
				setup: {text: "When you're ready, I'm here to help."},
				init: {color: "#FFF", font: 7, width: 100, position: [0,33], opacity:0, scale:50, textAlign: "center"},
				scripts: [{ actions: [{delay: 7, animation: {duration: 2}, opacity:100, scale:100}]}]
				}
			]
		},
	]
};