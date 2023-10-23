// let btnPlayImg = document.querySelector('.btn_image');
const audioPlayer = document.querySelector('.audio_player');
let imageSrc = document.querySelector('.MB_image');
let BtnPlay = document.querySelector('.circled');
let triangleBtnPlay = document.querySelector('.triangle__button');

BtnPlay.onclick = function ToggleAudio() {
    if(audioPlayer.paused) {
        audioPlayer.play();
        audioPlayer.volume = 0.4;
        // btnPlayImg.src = "images/img/pause-button.png";
        imageSrc.src = "images/gif/Tom.gif";
        triangleBtnPlay.classList.add('pause');
    } else {
        audioPlayer.pause();
        // btnPlayImg.src = "images/img/play-button.png";
        imageSrc.src = "images/svg/mainblock_image.svg";
        triangleBtnPlay.classList.remove('pause');
    }
};