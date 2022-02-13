const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x:0, y:-10},
        {x:100, y:-20},
        {x:300, y:10},
        {x:500, y:100},
        {x:750, y:-100},
        {x:350, y:-50},
        {x:600, y:100},
        {x:800, y:0},
        {x:window.innerWidth, y:-250}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.treasureMap', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation.b',
    duration: 1000,
    triggerHook: 0,

})
.setTween(tween)
.setPin('.animation.b')
.addTo(controller);