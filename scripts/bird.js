let container = document.getElementById('container');
let bird_flying1 = document.getElementById('bird_flying1');
let bird_flying2 = document.getElementById('bird_flying2');
let bird_landed = document.getElementById('bird_landed');
var landed_timeout;
var flap_timeout;
var flap_time = 200;
var flying = true;

function flap_one() {
    clearTimeout(flap_timeout);
    flap_timeout = setTimeout(flap_two, flap_time);
    if (flying) {
        bird_flying1.style.display = "block";
        bird_flying2.style.display = "none";
        bird_flying3.style.display = "none";
    }
}

function flap_two() {
    clearTimeout(flap_timeout);
    flap_timeout = setTimeout(flap_three, flap_time);
    if (flying) {
        bird_flying2.style.display = "block";
        bird_flying1.style.display = "none";
        bird_flying3.style.display = "none";
    }
}

function flap_three() {
    clearTimeout(flap_timeout);
    flap_timeout = setTimeout(flap_one, flap_time);
    if (flying) {
        bird_flying3.style.display = "block";
        bird_flying1.style.display = "none";
        bird_flying2.style.display = "none";
    }
}

function onMouseMove(e) {
    flying = true;
    bird_landed.style.display = "none";
    container.style.left = e.pageX + 'px';
    container.style.top = e.pageY + 'px';
    clearTimeout(landed_timeout);
    landed_timeout = setTimeout(landed, 1000);
}

function landed() {
    flying = false;
    bird_landed.style.display = "block";
    bird_flying1.style.display = "none";
    bird_flying2.style.display = "none";
    bird_flying3.style.display = "none";
}

window.onload = flap_one;
document.addEventListener('mousemove', onMouseMove);
