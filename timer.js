const startingMinutes=25;
let time = startingMinutes*60

const countdownEl= document.getElementById("countdown");

function button(){
    setInterval(updateCounter,1000);
}

function updateCounter(){
    const minutes= Math.floor(time/60);
    let seconds = time%60;

    seconds=seconds < 10 ? '0' + seconds:seconds;

    countdownEl.innerHTML=`${minutes}:${seconds}`;
    time--;
}