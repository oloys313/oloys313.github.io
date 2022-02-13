$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.mindmap.a',
        reverse: true
    })
    .setPin('.animation.b')
    .setClassToggle('.mindmap.a','show')
    .addTo(controller);
})