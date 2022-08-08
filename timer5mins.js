const startingMinutes1=5;
let time1 = startingMinutes1*60

const countdownEl1= document.getElementById("countdown2");

function button2(){
    setInterval(updateCounter1,1000);
}

function updateCounter1(){
    const minutes1= Math.floor(time1/60);
    let seconds1 = time1%60;

    seconds1=seconds1 < 10 ? '0' + seconds1:seconds1;

    countdownEl1.innerHTML=`${minutes1}:${seconds1}`;
    time1--;
}

