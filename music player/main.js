let playBtn = document.querySelector('.main-button') 
let music = document.querySelector('audio')
let image = document.querySelector('#cover')
let prev = document.querySelector('.bi-skip-start-circle')
let next = document.querySelector('.bi-skip-end-circle')
let title = document.getElementById('title')
let artist = document.getElementById('artist')
let background = document.querySelector('#background')
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
let playListIcon = document.querySelector('.bi-music-note-list')
let plaList = document.querySelector('.play-list')
let IsThisLove = document.querySelector('.IsThisLove')
let WhithHoutMe = document.querySelector('.WhithHoutMe')
let stan = document.querySelector('.stan')
let Mockingbird = document.querySelector('.Mockingbird')
let iconRepeat = document.querySelector('.bi-repeat')




const musicList = [
    {
        name : 'Is This Love',
        artist : 'Eminem',
        src : "music/07 Is This Love ( 09).mp3",
        img : "img/Screenshot 2023-09-01 223312.png",
    } ,
    {
        name : 'Without Me',
        artist : 'Eminem',
        src : "music/Eminem - Without Me (320).mp3",
        img : "img/Screenshot 2023-09-03 115737.png",
    } ,
    {
        name : 'Stan',
        artist : 'Eminem',
        src : "music/Eminem-Stan-(Ft-Dido)-192.mp3",
        img : "img/Screenshot 2023-09-01 223323.png",
    } ,
    {
        name : 'Mockingbird',
        artist : 'Eminem',
        src : "music/mockingbird.mp3",
        img : "img/Screenshot 2023-09-01 223337.png",
    } 
];





isPlaying = false;


function playMusic() {
  isPlaying = true;
  playBtn.classList.replace('bi-play-circle-fill' , 'bi-pause-circle-fill');
  image.classList.add('anima');
  music.play();
}


function pauseMusic() {
    isPlaying = false;
    playBtn.classList.replace("bi-pause-circle-fill" , "bi-play-circle-fill");
    image.classList.remove('anima');
    music.pause();
}


playBtn.addEventListener('click' , function() {
    if (isPlaying){
        pauseMusic()
    } else {
        playMusic()
    }
})


function musicFun(song) {
    title.innerHTML = song.name
    artist.innerHTML = song.artist
    music.setAttribute('src' , song.src )  
    changeCover(song.img)
}


function changeCover(img){
    image.classList.remove("active")

    setTimeout(() => {
        image.src = img
        image.classList.add("active")
    } , 100)
    background.src = img
}


let indexMusic = 0;


 function PrevHandler() {
    indexMusic-- ;
    if (indexMusic < 0){
    indexMusic = musicList.length ;
    } 
    musicFun(musicList[indexMusic]);
    playMusic();
 }


 function nextHandler(){
    indexMusic++ 
    if (indexMusic > musicList.length - 1){
        indexMusic = 0;
    } 
    musicFun(musicList[indexMusic]);
    playMusic();
    
}




 function updateProgressBar(e) {
    if (isPlaying) {
      const duration = e.srcElement.duration;
      const currentTime = e.srcElement.currentTime;
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = progressPercent + "%";
      const durationMinutes = Math.floor(duration / 60);
      let durationSeconds = Math.floor(duration % 60);
      if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
      }
      if (durationSeconds) {
        durationEl.textContent = durationMinutes + ":" + durationSeconds;
      }
      const currentMinutes = Math.floor(currentTime / 60);
      let currentSeconds = Math.floor(currentTime % 60);
      if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
      }
      currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
    }
  }
  

  function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = music.duration;
    music.currentTime = (clickX / width) * duration;
  }



  playListIcon.addEventListener('click' , function(){
    plaList.style.top = '0'
  })



IsThisLove.addEventListener('click' , function(){
    musicFun(musicList[0]);
    indexMusic = 0
    playMusic();
    plaList.style.top = '550px'
})

stan.addEventListener('click' , function(){
    musicFun(musicList[2]);
    indexMusic = 2
    playMusic();
    plaList.style.top = '550px'
})

Mockingbird.addEventListener('click' , function(){
    musicFun(musicList[3]);
    indexMusic = 3
    playMusic();
    plaList.style.top = '550px'
})

WhithHoutMe.addEventListener('click' , function(){
    musicFun(musicList[1]);
    indexMusic = 1
    playMusic();
    plaList.style.top = '550px'
})






// iconRepeat.addEventListener('click' , function (){

//     isRepeating = false

//     function noRepeat(){
//         isRepeating = false
//      iconRepeat.classList.replace("bi-repeat-1" , 'bi-repeat')
//      }
 
//    function repeat1(){
//     isRepeating = true
//      iconRepeat.classList.replace('bi-repeat' , 'bi-repeat-1')
//      musicFun(musicList[indexMusic]);
//      playMusic();
//     }
  
 
//     if(isRepeating){
//      noRepeat()
//     } else {
//      repeat1()
//      }


//     music.addEventListener("ended", repeat1)

// });






prev.addEventListener('click' , PrevHandler)
next.addEventListener('click' , nextHandler)
music.addEventListener("ended", nextHandler);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);