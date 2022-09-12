// Ahmed Samy Zaghloul
// Html5-Lab 1-P1

let video = document.getElementById("video1");
let playPauseBtn = document.getElementById("playPauseBtn");
let slider = document.getElementById("slider");
let currTime = document.getElementById("currentTime");
let totalTime = document.getElementById("totalTime");
let muteBtn = document.getElementById("muteBtn");
let volSlider = document.getElementById("volSlider");
let fullScrBtn = document.getElementById("fullScrBtn");
let stopBtn = document.getElementById("stopBtn");
let subFiveBtn = document.getElementById("subFiveBtn");
let plusFiveBtn = document.getElementById("plusFiveBtn");
let getBeginBtn = document.getElementById("getBeginBtn");
let getEndBtn = document.getElementById("getEndBtn");
let speedSlider = document.getElementById("speedSlider");


// console.log(video);

function playPause(){
    if(video.paused){
        video.play();
        playPauseBtn.innerHTML = "Pause";
    }else{
        video.pause();
        playPauseBtn.innerHTML = "Play";
    }
}

function changeTime(){
    let x = video.duration * (slider.value/100);
    video.currentTime = x;
}

function updateTime(){
    let currentMins = Math.floor(video.currentTime / 60);
    let currentSecs = Math.floor(video.currentTime - currentMins * 60);
    // let durationMins = Math.floor(video.duration / 60);
    // let durationSecs = Math.flo(video.duration - durationMins * 60);
    // if(currentMins < 10 ){currentMins = "0" + currentMins;}
    // if(currentSecs < 10 ){currentSecs = "0" + currentSecs;}
    
    // if(durationMins < 10 ){ durationMins = "0" + durationMins;}
    // if(durationSecs < 10 ){ durationSecs = "0" + durationSecs;}

    currTime.innerHTML = currentMins + ":" + currentSecs;
    totalTime.innerHTML = durationMins + ":" + durationSecs;
    
}

video.ontimeupdate = function(){
    slider.value = video.currentTime;
    updateTime();
}



function soundMute(){
    if(video.muted){
        video.muted = false;
        muteBtn.innerHTML = "Mute";
        video.volume = 100 / 100;
    }else{
        video.muted = true;
        muteBtn.innerHTML = "Unmute";
    }
}

function setVolume(){
    video.volume = volSlider.value / 100;
}

function openFull(){
    if(video.requestFullscreen){
        video.requestFullscreen();
    }
}

function stopvid() {
    video.pause();
    video.currentTime = 0;
    playPauseBtn.innerHTML = "Play";
}

function subFive(){
    video.currentTime = video.currentTime - 5;
}

function plusFive(){
    video.currentTime = video.currentTime + 5;
}
function getBegin(){
    video.currentTime = 0;
}

function getEnd(){
    video.currentTime = 75;
}

function setspeed(){
    video.playbackRate = speedSlider.value
}


playPauseBtn.addEventListener("click",playPause)
slider.addEventListener("change",changeTime)
// video.addEventListener("timeupdate",updateTime)
muteBtn.addEventListener("click", soundMute)
volSlider.addEventListener("change",setVolume)
fullScrBtn.addEventListener("click",openFull)
stopBtn.addEventListener('click', stopvid);
subFiveBtn.addEventListener('click', subFive);
plusFiveBtn.addEventListener('click', plusFive);
getBeginBtn.addEventListener('click', getBegin);
getEndBtn.addEventListener('click', getEnd);
speedSlider.addEventListener("change",setspeed)