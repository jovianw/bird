let bird = document.getElementById('bird');
let bird_landed = document.getElementById('bird_landed');
var timeout;

function onMouseMove(e) {
    bird.style.display = "block";
    bird_landed.style.display = "none";
    bird.style.left = e.pageX + 'px';
    bird.style.top = e.pageY + 'px';
    bird_landed.style.left = e.pageX + 'px';
    bird_landed.style.top = e.pageY + 'px';
    clearTimeout(timeout);
    timeout = setTimeout(landable, 1000);
}

function landable() {
    bird_landed.style.display = "block";
    bird.style.display = "none";
}

document.addEventListener('mousemove', onMouseMove);
