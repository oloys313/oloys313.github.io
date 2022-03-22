const titleFlightPath = {
    curviness: 0.2,
    autoRotate: false,
    values: [
        { x: 100, y: -30 },
        { x: 175, y: -90 },
        { x: 225, y: -290 },
        { x: 275, y: -window.innerHeight },
    ]
}

const titleTween = new TimelineLite();

titleTween.add(
    TweenLite.to('#boldName', 1, {
        bezier: titleFlightPath,
        ease: Power1.easeInOut
    })
)

const titleController = new ScrollMagic.Controller();

const titleScene = new ScrollMagic.Scene({
    triggerElement: '#wrapper',
    duration: 1050,
    triggerHook: 0
})
    .setTween(titleTween)
    // .setPin('#wrapper')
    // .addIndicators()
    .addTo(titleController);
    

const homeImageFlightPath = {
    curviness: 0.2,
    autoRotate: false,
    values: [
        { x: -50, y: -30 },
        { x: -175, y: -90 },
        { x: -225, y: -290 },
        { x: -275, y: -window.innerHeight },
    ]
}

const homeImageTween = new TimelineLite();

homeImageTween.add(
    TweenLite.to('#gameDevStrtImg', 1, {
        bezier: homeImageFlightPath,
        ease: Power1.easeInOut
    })
)

const homeImageController = new ScrollMagic.Controller();

const homeImageScene = new ScrollMagic.Scene({
    triggerElement: '#wrapper',
    duration: 950,
    triggerHook: 0
})
    .setTween(homeImageTween)
    .setPin('#wrapper')
    // .addIndicators()
    .addTo(homeImageController)