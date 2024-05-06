let playButton = document.querySelector('#play');
let pauseButton = document.querySelector('#pause');
let video = document.querySelector('#video');

playButton.addEventListener('click', function () {
video.play()
});

pauseButton.addEventListener('click', function () {
    video.pause()
})