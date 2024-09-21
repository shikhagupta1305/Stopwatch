let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let hours = document.querySelector(".hour"); 
let mins = document.querySelector(".min");
let secs = document.querySelector(".sec");

let hour = 0;
let min = 0;
let sec = 0;
let interval;

start.addEventListener("click", () => {
    start.classList.add("active");
    stop.classList.remove("active");

    interval = setInterval(function () {
        if (sec < 59) {
            sec += 1;
            secs.innerHTML = sec < 10 ? "0" + sec : sec;
        } else {
            sec = 0;
            secs.innerHTML = "00";
            if (min < 59) {
                min += 1;
                mins.innerHTML = min < 10 ? "0" + min + ":" : min + ":";
            } else {
                min = 0;
                mins.innerHTML = "00:";
                hour += 1;
                hours.innerHTML = hour < 10 ? "0" + hour + ":" : hour + ":";
            }
        }
    }, 1000);
    start.style.pointerEvents = "none"; 
    stop.style.pointerEvents = "auto";
});

stop.addEventListener("click", () => {
    stop.classList.add("active");
    start.classList.remove("active");

    clearInterval(interval);
    start.style.pointerEvents = "auto"; 
    stop.style.pointerEvents = "none";
});

reset.addEventListener("click", () => {
    reset.classList.add("active");
    stop.classList.remove("active");
    start.classList.remove("active");

    clearInterval(interval);
    hour = 0; 
    min = 0; 
    sec = 0;

    hours.innerHTML = "00:";
    mins.innerHTML = "00:";
    secs.innerHTML = "00";

    start.style.pointerEvents = "auto";
    stop.style.pointerEvents = "none";
});