let container = document.getElementById('container');
let bird = document.getElementById('bird');
let grass = document.getElementById('grass1');
let par = document.getElementById('par_container');
var landed_timeout;
var par_timeout;
var flying = false;

function kill(e) {
    flying = false;
    // bird.src = "images/dead.png";
    container.style.transition = 'transform 2s, top 2s';
    container.style.transform = 'rotate(180deg)';
    container.style.top = "100vh";
    document.removeEventListener('mousemove', onMouseMove);
    container.removeEventListener('click', kill);
    setTimeout(revive, 2000);
}

function revive() {
    container.style.transition = 'top 1s, left 1s';
    container.style.transform = 'rotate(0deg)'
    container.style.transform = 'translate(-50%, -50%)';
    bird.src = "images/landing.gif";
    flying = false;
    setUp();
}

function onMouseMove(e) {
    if (!flying) bird.src = "images/flying.gif";
    flying = true;
    container.style.left = e.pageX + 'px';
    container.style.top = e.pageY + 'px';
    clearTimeout(par_timeout);
    par.style.opacity = 0;
    clearTimeout(landed_timeout);
    landed_timeout = setTimeout(landed, 1000);
}

function landed() {
    if (flying) {
        flying = false;
        bird.src = "images/landing.gif";
    }
}

function setUp() {
    par_timeout = setTimeout(function() {par.style.opacity = 100;}, 2500);
    container.addEventListener('click', kill)
    document.addEventListener('mousemove', onMouseMove);
}

window.onload = setUp;
