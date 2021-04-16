const startMin = 60;
let time = startMin * 60;

const countDownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);


function updateCountdown() {
    const minute = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.innerHTML = `${minute}: ${seconds}`
    time--;
}