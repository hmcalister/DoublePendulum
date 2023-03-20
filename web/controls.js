const PLAY_EMOJI = "▶️";
const PAUSE_EMOJI = "⏸️";

var animationInterval;

var isPausedButton = document.getElementById("isPausedButton");
var isPaused = true;

function setPaused() {
    isPausedButton.innerHTML = PLAY_EMOJI;
    clearInterval(animationInterval);
}

function setUnpaused() {
    isPausedButton.innerHTML = PAUSE_EMOJI;
    animationInterval = setInterval(draw, 10);
}

function togglePaused() {
    isPaused = !isPaused;
    if (isPaused) {
        setPaused()
    } else {
        setUnpaused()
    }
}

