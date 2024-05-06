// -> controls
const controlBtn = document.querySelector('#controls');
const controlText = controlBtn.querySelector('p');

// -> track container
const track01 = document.querySelector('#track_01');
const track02 = document.querySelector('#track_02');
const audio01 = track01.querySelector('audio');
const audio02 = track02.querySelector('audio');

// -> constants
const lowestSongNumber = 1;
const highestSongNumber = 24;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let audio_is_playing = false;
controlBtn.addEventListener('click', function () {
    if (!audio_is_playing) {
        audio_is_playing = true;
        let songId01 = randomNumber(lowestSongNumber, highestSongNumber);
        let songId02 = randomNumber(lowestSongNumber, highestSongNumber);
        audio01.src = `sound/${songId01}.mp3`;
        audio02.src = `sound/${songId02}.mp3`;
        audio01.play();
        audio02.play();
        controlText.innerText = 'Stop';

    } else {
        audio_is_playing = false;
        controlText.innerText = 'Play';
        audio01.pause();
        audio02.pause();
    }
});

document.addEventListener('mousemove', function (e) {
    const browserWindowWidth = window.innerWidth;
    if (audio_is_playing) {
        const mousePositionX = e.clientX;
        if (browserWindowWidth / 2 >= mousePositionX) {
            audio01.volume = 1;
            const volumeAudio2 = (mousePositionX / (browserWindowWidth / 2));
            audio02.volume = volumeAudio2;
        } else {
            audio02.volume = 1
            const volumeAudio1 = ((mousePositionX - (browserWindowWidth/2)) / (browserWindowWidth - (browserWindowWidth / 2))) * ((0 - 1)) + 1;
            audio01.volume = volumeAudio1;
        }
    }
})
