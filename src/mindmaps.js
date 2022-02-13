$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.mindmap.a',
        reverse: true
    })
    .setClassToggle('.mindmap.a','show')
    .addTo(controller);

    var ccontroller = new ScrollMagic.Controller();

    var oourScene = new ScrollMagic.Scene({
        triggerElement: '.animation',
        /*duration: 1100,
        offset: 200,*/
        triggerHook: 0.5,
        reverse: true
    })
    .setClassToggle('.quoteText','show')
    .addTo(ccontroller);
})