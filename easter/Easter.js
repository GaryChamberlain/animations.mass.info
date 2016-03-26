openStory({
    canvas: {
        setup: { padding: 5 },
        init: { color:"#AAA", font: "'Handlee', cursive", background: ["#000", "url(images/bg.jpg)", "no-repeat", "0 0", "100% 100%"]}
    },
    frame: {
        setup: { aspectRatio: 4/3}
    },
    flows: [
        {
            type: "simpleFlow",
            pages: [
				{
					items: [
						{	type: "textItem",
                            setup: { text: "Happy Easter!" },
                            init: {  font: 16, style: "bold" },
                            charsInit: { color: "transparent", y: 1, opacity: 0, textShadow: [[0, 0, 5, "rgba(75,185,245,0.6)"], [0, 0, 8, "rgba(75,185,245,0.6)"]]},
                            charScripts: [
                                {actions: [{animation: {duration: 0.8, stagger: 0.02}, y: 0, opacity: 50}]},
                                {actions: [{delay: 1.2, animation: {duration: 0.5, stagger: 0.04}, opacity: 70, scale: [100, 700], textShadow: [0, 0, 5, "rgba(75,185,245,1)"]}]},
                                {actions: [{delay: 1.7, animation: {duration: 1, stagger: 0.04, ease: "strong curve"},opacity: 70, scale: 100, textShadow: [0,0,0,"transparent"], color: "#FFF"}]},
								{actions: [{delay: 5, animation: {duration: 0.5, stagger: 0.02}, y: 0, opacity: 0}]}
                            ]
                        }
					]
				},
				{
					init: {font: 9},
					items: [
                        {
                            type: "textItem",
                            setup: { stackedLines: true, text: ["'Lavenders'","'pinks'","'and'","'pastels'","'everywhere'","'sun shining'","'and'","'blue skies'"]},
                            init: {font: 8, position:[-2,0]},
                            scripts: [
                                {actions: [{delay: 30, animation: 2.5, rotation:-270, scale:400, opacity:0, position:[-10,-5]}]}
                            ],
                            lineInit: { position:[15,-5], transformOrigin:[-15,0], opacity:0, scale:0 },
                            lineScripts: [
                                {actions: [{animation: { duration:1, stagger:3}, opacity:100, scale:120}]},
                                {actions: [{delay: 1, animation:{duration:30, stagger:3, ease: "linear"}, rotation:450, scale:50}]}
                            ]
                        },
						{   type: "textItem",
							setup: {text: "'Happy Easter'"},
							init: {font: 10, color: "#FBFF0F", position: {z: -150}, opacity: 0, scale: 0,textShadow: [[0,0,2,"black"],[0,0,2,"black"],[0,0,2,"black"]]},
                            scripts: [ { actions: [
                                {delay: 30, animation: {duration: 4, ease: "elastic"}, position:{z: 2}, opacity:false, scale:false},
                                {delay: 1, animation:{duration:3, ease:"backup in"}, rotation:180, position:70, opacity: 0}] }]
						},
						{   type: "imageItem",
							setup: {src: "images/egg-sm.png"},
							init: {position: {z: -50}, opacity: 0, scale: 20},
							scripts: [ { actions: [
                                {delay:20, animation:15, scale:false, rotation:-90, opacity:30},
                                {animation:{duration:3, ease:"backup in"}, rotation:90, position:100, opacity: 0}] }]
						},
                        {   type: "textItem",
                            setup: { text: "'Easter is a time for family,<br> tradition and celebrating new beginnings.'" },
                            init: {  font: {size: 8, lineHeight:250}, align: 3, opacity: 0 },
                            scripts: [{actions: [
                                {delay:40, animation:0.8, opacity: 100},
                                {delay:6, animation:{duration:4,ease:"bounce"}, font:{lineHeight:110}, position:[0,35]}]}]
                        },
						{	type: "imageItem",
							setup: {src: "images/Bunny.png"},
							init: {opacity:0, position:[0,-15], scale: 30,corners:[10,50,50,50], shadow:[1,1,2,"black"]},
							scripts: [{actions: [{delay:46, animation:10, position:[0,-10], opacity: false, scale: 70,corners: 5 }] }]
						}
					]
				},
				{
					items: [
						{	type: "imageItem",
							setup: {src: "clipart/white1p.png", height: 105, width: 1000},
							scripts: [ { actions: [ {delay: 18, animation:2, opacity: 0}]}]
						},
						{	type: "imageItem",
							setup: {src: "clipart/houses.png"},
							init: {position: [-100, -29], scale: 30},
							scripts:[ 
							    {actions:[{animation: {duration: 19, ease: "linear"}, scale: 30, position: [0, -29]}]},
								{actions:[{delay: 18, animation:2, opacity:0}]}]
						},
						{	type: "imageItem",
							setup: {src: "clipart/car.png"},
							init: {anchor:20, scale:40, position:[100, 0, 2], opacity:0},
							scripts: [
                                {actions:[{delay:0, animation:1, opacity:100}]},
								{actions:[{delay:0, animation:7, position: [70, 0, 2]}]},
								{actions:[{delay:8, animation:{duration:12, ease:"weak curve in"}, position: [-200, 0, 2]}]}]
						},
						{	type: "imageItem",
							setup: {src: "clipart/car-egg.png"},
							init: {anchor:20, scale:40, position:[120, 0, 2], opacity:0},
							scripts: [
                                {actions:[{delay:0, animation:1, opacity:100}]},
								{actions:[{delay:0, animation:7, position: [90, 0, 2]}]},
								{actions:[{delay:8, animation:{duration:12, ease:"weak curve in"}, position: [-180, 0, 2]}]}]
						},
						{ type: "textItem",
                            setup: { text: "Happy Easter from my family to yours!"},
                            init: {font: 7, width: 100, position: [0,35], textAlign: "center", textShadow: [0, 0, 5, "rgba(75,185,245,1)"]},
                            charsInit: { position: [0,20], opacity: 0},
                            charsScripts: [ { actions: [{delay: 5, animation: {duration:3, stagger:0.05, ease: "elastic"}, opacity: false, position: false}] },
											{actions:[{delay: 16, animation:2, opacity:0}]}]
                        }
					]
				},
				{
					items: [
						{
						type: "imageItem",
						setup: {src: "images/Alina.png"},
						init: {position: 32}
						},
						{
						type: "imageItem",
						setup:{src: "images/egg.png"},
						init:{position:[-17,17], opacity:0, rotation:{x:-180}, scale:47, corners: true, transformOrigin:[0, -50], shadow:[1,1,2,"black"]},
						scripts: [{ actions: [{delay: 1, animation: {duration: 4, ease: "elastic"}, rotation:{x:0}, opacity:100}]},
								  { actions: [{delay: 25, opacity:0 }]}]
						},
						
						{
						type: "textItem",
						setup: {text: "'Your friendly neighborhood realtor.'"},
						init: {font: 7, width: 100, position: [0,30], opacity:0, scale:50, textAlign: "center"},
						scripts: [{ actions: [{delay: 2, animation: {duration: 2}, opacity:100, scale:100}]},
								  { actions: [{delay: 7, animation: {duration: 1},position: [-5,26], opacity:95, scale:65}]}]
						},
						{
						type: "textItem",
						setup: {text: "'When you're ready, I'm here to help.'"},
						init: {font: 7, width: 100, position: [0,33], opacity:0, scale:50, textAlign: "center"},
						scripts: [{ actions: [{delay: 7, animation: {duration: 2}, opacity:100, scale:100}]}]
						}
					]
				},
            ]
        }
    ]

});