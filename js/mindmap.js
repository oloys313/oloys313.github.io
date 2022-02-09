window.onload = function() {
    document.getElementById("toHide1").style.display = 'none'; 
    document.getElementById("toHide2").style.display = 'none'; 
    document.getElementById("toHide3").style.display = 'none'; 
}

const enlTop = 90;

function enlargeImg1() {
    var box = document.getElementById("toHide1");
    var img = document.getElementById("img1");
    img.style.transform = "scale(1.5)";
    img.style.zIndex = "2001";
    img.style.left = 32.5+"%";
    img.style.top = enlTop+"px";
    img.style.height = 350+"px";
    img.style.width = 500+"px"; 
    img.style.transition = "all 0.25s ease";
    img.style.backgroundColor = "#c5c5c5";

    box.style.display = 'block';
}
function resetImg1() {
    var box = document.getElementById("toHide1");
    var img = document.getElementById("img1");
    img.style.transform = "scale(1)";
    img.style.zIndex = "0";
    img.style.left = 50;
    img.style.top = 90+"px";
    img.style.height = 275+"px";
    img.style.width = 450+"px";    
    img.style.transition = "all 0.25s ease";
    img.style.backgroundColor = "#a3a3a3";

    box.style.display = 'none';
}
var reset1 = function() {
    resetImg1();
    event.stopPropagation();
}

function enlargeImg2() {
    var box = document.getElementById("toHide2");
    var img = document.getElementById("img2");
    img.style.transform = "scale(1.5)";
    img.style.zIndex = "200";
    img.style.left = 32.5+"%";
    img.style.top = enlTop+"px";
    img.style.height = 350+"px";
    img.style.width = 500+"px"; 
    img.style.transition = "all 0.25s ease";
    img.style.backgroundColor = "#c5c5c5";

    box.style.display = 'block';
}
function resetImg2() {
    var box = document.getElementById("toHide2");
    var img = document.getElementById("img2");
    img.style.transform = "scale(1)";
    img.style.zIndex = "0";  
    img.style.left = 510;
    img.style.top = 100+"px";
    img.style.height = 275+"px";
    img.style.width = 525+"px";  
    img.style.transition = "all 0.25s ease";
    img.style.backgroundColor = "#a3a3a3";

    box.style.display = 'none';
}
var reset2 = function() {
    resetImg2();
    event.stopPropagation();
}

function enlargeImg3() {
    var box = document.getElementById("toHide3");
    var img = document.getElementById("img3");
    img.style.transform = "scale(1.5)";
    img.style.zIndex = "200";
    img.style.left = 32.5+"%";
    img.style.top = enlTop+"px";
    img.style.height = 350+"px";
    img.style.width = 500+"px"; 
    img.style.transition = "all 0.25s ease";
    img.style.backgroundColor = "#c5c5c5";

    box.style.display = 'block';
}
function resetImg3() {
    var box = document.getElementById("toHide3");
    var img = document.getElementById("img3");
    img.style.transform = "scale(1)";
    img.style.zIndex = "0";  
    img.style.left = 1045;
    img.style.top = 110+"px";
    img.style.height = 275+"px";
    img.style.width = 400+"px";  
    img.style.transition = "all 0.25s ease";
    img.style.backgroundColor = "#a3a3a3";

    box.style.display = 'none';
}
var reset3 = function() {
    resetImg3();
    event.stopPropagation();
}


function home() {
    document.getElementsByClassName("mindmap").style.display = "none";
    document.getElementsByClassName("home").style.display = "block";
}

function mindmap() {
    document.getElementsByClassName("mindmap").style.display = "block";
    document.getElementsByClassName("home").style.display = "none";
}