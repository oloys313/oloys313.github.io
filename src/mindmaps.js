$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.animation.b',
        reverse: true
    })
    .addIndicators()
    .setPin('.animation.b')
    .setClassToggle('.mindmap.a','show')
    .addTo(controller);
})