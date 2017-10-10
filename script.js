console.log("main js is connected");

let car1 = document.getElementById('car')
let car2 = document.getElementById('car2')
let bg = document.querySelector(".container");
let finish = document.querySelector(".finishLine");
let winr = document.querySelector(".player1");
let winr2 = document.querySelector(".player2");
let wheel1 = document.querySelector("#wheel1");
let wheel2 = document.querySelector("#wheel2");
let wheel3 = document.querySelector("#wheel3");
let starB = document.querySelector(".starB");
let replayB = document.querySelector(".replayB");

let c1 =0;
let c2 =0;

// sets keycodes for each player and had to transform numbers into pixels
// by using transform: translate into px
function go(race) {
  let key = race.keyCode;
    //car 1
    if(key == 83) {
        car1.style.transform = `translateX(${c1}px)`;
      c1+= 10;
    }
    //car 2
    if(key == 74) {
     car2.style.transform = `translateX(${c2}px)`;
      c2+= 10;
    }
    if(key == 87) {
     car1.style.transform = `translateY(${c1}px)`;
      c1+= 10;
    }
       if(key == 88) {
     car1.style.transform = `translateY(${c1}px)`;
      c1-= 10;
    }
     if(key == 85) {
     car2.style.transform = `translateY(${c2}px)`;
      c2+= 10;
    }
       if(key == 77) {
     car2.style.transform = `translateY(${c2}px)`;
      c2-=10;
    }
   winner();
}

window.addEventListener('keyup', go);
// this specifies when the winner reaches a certain amonut of pixels it will display the image.


function winner(){

  if(c1 + 500 === 1400){
    bg.style.animationPlayState = "paused";
   wheel1.style.animationPlayState = "paused";
   wheel2.style.animationPlayState = "paused";
   wheel3.style.animationPlayState = "paused";
   wheel4.style.animationPlayState = "paused";
   winr.style.display = "block";
   playAudio()
   window.removeEventListener("keyup", go);

  }

  else if(c2 +500 === 1400){
   bg.style.animationPlayState = "paused";
   wheel1.style.animationPlayState = "paused";
   wheel2.style.animationPlayState = "paused";
   wheel3.style.animationPlayState = "paused";
   wheel4.style.animationPlayState = "paused";
   winr2.style.display = "block";
  playAudio()
  window.removeEventListener("keyup", go);

  }

}

function pauseAudio(){
let audio = document.getElementById("audio")
audio.pause();
}
function playAudio(){
  let end = document.getElementById("endsound")
  end.play()
}

function startGame(){
location.reload()

}
function start(){
bg.style.animationPlayState = "running";
wheel1.style.animationPlayState = "running";
wheel2.style.animationPlayState = "running";
wheel3.style.animationPlayState = "running";
wheel4.style.animationPlayState = "running";

}
