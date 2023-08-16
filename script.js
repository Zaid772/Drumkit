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
        audio.play();
}
box1.addEventListener('click', boom);
document.addEventListener('keydown', function(event) {
    if(event.key == 'a'){
        boom();
    }
});
const clap = () => {
    let audio = new Audio("clap.wav");
    audio.play();
}
box2.addEventListener('click', clap);

const hihat = () => {
    let audio = new Audio("hihat.wav");
    audio.play()
}
box3.addEventListener('click', hihat);

const kick = () => {
    let audio = new Audio("kick.wav");
    audio.play()
}
box4.addEventListener('click', kick);

const openhat = () => {
    let audio = new Audio("openhat.wav");
    audio.play()
}
box5.addEventListener('click', openhat);

const ride = () => {
    let audio = new Audio("ride.wav");
    audio.play()
}
box6.addEventListener('click', ride);

const snare = () => {
    let audio = new Audio("snare.wav");
    audio.play()
}
box7.addEventListener('click', snare);

const tink = () => {
    let audio = new Audio("tink.wav");
    audio.play()
}
box8.addEventListener('click', tink);

const tom = () => {
    let audio = new Audio("tom.wav");
    audio.play()
}
box9.addEventListener('click', tom);


