const timeBox = document.getElementById('time');
const stopBtn = document.querySelector('img:nth-child(1)');
const playBtn = document.querySelector('img:nth-child(2)');
const resetBtn = document.querySelector('img:nth-child(3)');

let sec = 0;
let min = 0;
let hour = 0;
let play;

playBtn.addEventListener('click', function () {
    play = setInterval(function () {
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hour++;
            min = 0;
        }

        let h=hour<10?'0'+hour:hour;
        let m=min<10?'0'+min:min;
        let s=sec<10?'0'+sec:sec;

        timeBox.innerHTML = `${h}:${m}:${s}`;
    }, 1000
    )
})

stopBtn.addEventListener('click', function () {
    clearInterval(play);
})

resetBtn.addEventListener('click', function () {
    sec = 0;
    min = 0;
    hour = 0;

    let h=hour<10?'0'+hour:hour;
    let m=min<10?'0'+min:min;
    let s=sec<10?'0'+sec:sec;
    clearInterval(play);
    timeBox.innerHTML = `${h}:${m}:${s}`;
})