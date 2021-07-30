const $video = document.getElementById('video');
const $play = document.getElementById('play');
const $pause = document.getElementById('pause');
const $backward = document.getElementById('backward');
const $forward = document.getElementById('forward');
const $progress = document.getElementById('progress');

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click',handleBackward)
$forward.addEventListener('click',handleForward)
$video.addEventListener('loadedmetadata',handleVideo);
$video.addEventListener('timeupdate',handleTimeUpdate);
$progress.addEventListener('input',handleInput);
function handlePlay(){
  $video.play();
  $play.hidden=true;
  $pause.hidden=false;
  console.log('play')
}
function handlePause(){
  $video.pause();
  $play.hidden=false;
  $pause.hidden=true;
  console.log('pause')
}

function handleBackward(){
    $video.currentTime-=10;
}
function handleForward(){
    $video.currentTime+=10;
}
function handleVideo(){    
    $progress.max=$video.duration;
}
function handleTimeUpdate(){
    $progress.value=$video.currentTime;
}
function handleInput(){
    $video.currentTime=$progress.value
}

