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
        triggerHook: 0,
        reverse: true
    })
    .setClassToggle('.quoteText','show')
    .addTo(ccontroller);
})