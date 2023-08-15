const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');

const boom = () => {
    let audio = new Audio("boom.wav");
    audio.play()
}
box1.addEventListener('click', boom);

const clap = () => {
    let audio = new Audio("clap.wav");
    audio.play()
}
box2.addEventListener('click', clap);

