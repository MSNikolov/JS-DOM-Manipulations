function stopwatch() {
    let timer;

    let timeMS = document.getElementById("time");

    let time = timeMS.textContent;

    let minsAndSecs = time.split(":");

    let minutes = Number(minsAndSecs[0]);

    let seconds = Number(minsAndSecs[1]);

    let startBtn = document.getElementById("startBtn");

    let stopBtn = document.getElementById("stopBtn");

    startBtn.addEventListener("click", (e) => {

        timeMS.textContent = "00:00"

        seconds = 0;

        minutes = 0;

        stopBtn.disabled = false;

        startBtn.disabled = true;

        timer = setInterval(incr, 1000);
    })

    stopBtn.addEventListener("click", (e) => {
        startBtn.disabled = false;

        stopBtn.disabled = true;

        clearInterval(timer);
    })

    function incr() {

        seconds++;

        if (seconds == 60){
            seconds = 0;
            minutes ++;
        }

        let secondsString;

        if (seconds < 10){
            secondsString = `0${seconds}`
        }

        else{
            secondsString = seconds;
        }

        let minutesString;

        if (minutes < 10){
            minutesString = `0${minutes}`
        }

        else{
            minutesString = minutes;
        }

        timeMS.textContent = `${minutesString}:${secondsString}`;


    }
}