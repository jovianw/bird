let container = document.getElementById('container');
let bird_flying1 = document.getElementById('bird_flying1');
let bird_flying2 = document.getElementById('bird_flying2');
let bird_flying3 = document.getElementById('bird_flying3');
let bird_landed = document.getElementById('bird_landed');
let grass1 = document.getElementById('grass1');
let grass2 = document.getElementById('grass2');
let grass3 = document.getElementById('grass3');
let par = document.getElementById('par_container');
var landed_timeout;
var flap_timeout;
var par_timeout;
var flap_time = 200;
var flying = false;

container.addEventListener('click', kill)
function kill(e) {
    flying = false;
    bird_flying2.style.display = "block";
    bird_flying1.style.display = "none";
    bird_flying3.style.display = "none";
    bird_landed.style.display = "none";
    document.removeEventListener('mousemove', onMouseMove);
    container.removeEventListener('click', kill);
    setTimeout(killing, flap_time);
}

function killing() {
    flying = false;
    bird_flying2.style.display = "block";
    bird_flying1.style.display = "none";
    bird_flying3.style.display = "none";
    bird_landed.style.display = "none";
    bird_flying2.style.WebkitTransitionDuration='1s';
    bird_flying2.style.transform = 'rotate(180deg)';
    container.style.transition = "top 2s";
    container.style.top = "100vh";
    setTimeout(function() {container.remove();}, 800);
}


function flap_one() {
    clearTimeout(flap_timeout);
    flap_timeout = setTimeout(flap_two, flap_time);
    if (flying) {
        bird_flying1.style.display = "block";
        bird_flying2.style.display = "none";
        bird_flying3.style.display = "none";
        bird_landed.style.display = "none";
    }
    grass1.style.display = "block";
    grass2.style.display = "none";
    grass3.style.display = "none";
}

function flap_two() {
    clearTimeout(flap_timeout);
    flap_timeout = setTimeout(flap_three, flap_time);
    if (flying) {
        bird_flying2.style.display = "block";
        bird_flying1.style.display = "none";
        bird_flying3.style.display = "none";
        bird_landed.style.display = "none";
    }
    grass2.style.display = "block";
    grass1.style.display = "none";
    grass3.style.display = "none";
}

function flap_three() {
    clearTimeout(flap_timeout);
    flap_timeout = setTimeout(flap_one, flap_time);
    if (flying) {
        bird_flying3.style.display = "block";
        bird_flying1.style.display = "none";
        bird_flying2.style.display = "none";
        bird_landed.style.display = "none";
    }
    grass3.style.display = "block";
    grass1.style.display = "none";
    grass2.style.display = "none";
}

function onMouseMove(e) {
    flying = true;
    container.style.left = e.pageX + 'px';
    container.style.top = e.pageY + 'px';
    clearTimeout(landed_timeout);
    landed_timeout = setTimeout(landed, 1000);
}

function landed() {
    if (flying) {
        flying = false;
        bird_landed.style.display = "block";
        bird_flying1.style.display = "none";
        bird_flying2.style.display = "none";
        bird_flying3.style.display = "none";
    }
}

function setUp() {
    par_timeout = setTimeout(function() {par.style.opacity = 100;}, 2500);
    flap_one();
}

window.onload = setUp;
document.addEventListener('mousemove', onMouseMove);
