const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x:50,y:20},
        {x:15,y:45},
        {x:60,y:85},
        {x:95,y:105},
        {x:175,y:125},
        {x:150,y:174},
        {x:0,y:200},
        {x:-125,y:225},
        {x:-175,y:275},
        {x:45,y:300}
    ]
}

const ttween = new TimelineLite();

ttween.add(
    TweenLite.to('.caravan', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const cntrl1 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    triggerElement: '.caravParent',
    duration: 900,
    triggerHook: 0.5
})
.setPin('.caravParent')
.setTween(ttween)
.addIndicators()
.addTo(cntrl1)