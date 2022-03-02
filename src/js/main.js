document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

    let timeline = new TimelineMax();
    timeline
    .from('.sect_1_1', 4, {
        y: 100,
        x: -360,
        ease: Back.out
    }, '-=4')
    .from('.sect_1_2', 4, {
        y: 100,
        x: -250,
        ease: Back.out
    }, '-=4')
    .from('.sect_1_3', 4, {
        y: 100,
        x: -350,
        ease: Back.out
    }, '-=4')
    .from('.sect_1_4', 4, {
        y: 120,
        x: -50,
        ease: Back.out
    }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%',
        triggerHook: 0.3,
        offset: '300'
    })
    .setTween(timeline)
    .setPin(".first-section")
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#parallax1"})
                        .setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
                        //.addIndicators()
                        .addTo(controller2);

                        function pathPrepare ($el) {
                            var lineLength = $el[0].getTotalLength();
                            $el.css("stroke-dasharray", lineLength);
                            $el.css("stroke-dashoffset", lineLength);
                        }
                    
                        var $word = $("path#word");
                        var $dot = $("path#dot");
                    
                        // prepare SVG
                        pathPrepare($word);
                        //pathPrepare($dot);
                    
                        // init controller
                        var controller3 = new ScrollMagic.Controller();
                    
                        // build tween
                        var tween = new TimelineMax()
                            .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
                            .add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
                            .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing
                    
                        // build scene
                        var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
                                        .setTween(tween)
                                        .setPin("#trigger1")
                                        //.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller3);
	
	var cntrl2 = new ScrollMagic.Controller();
    
    new ScrollMagic.Scene({
							triggerElement: ".outer",
							triggerHook: 0.9, // show, when scrolled 10% into view
							duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
							offset: 50 // move trigger to center of element
						})
						.setClassToggle(".inner", "visible") // add class to reveal
						.addIndicators() // add indicators (requires plugin)
						.addTo(cntrl2);
})
