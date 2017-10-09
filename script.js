console.log("main js is connected");

let car1 = document.getElementById('car')
let car2 = document.getElementById('car2')
let bg = document.querySelector(".container");
let finish = document.querySelector(".finishLine");
let winr = document.querySelector(".player1");
let winr2 = document.querySelector(".player2");

let c1 =0;
let c2 =0;

// sets keycodes for each player and had to transform numbers into pixels
// by using transform: translate into px
function go(race) {
  let key = race.keyCode;
    //car 1
    if(key == 88) {
        car1.style.transform = `translateX(${c1}px)`;
      c1+= 10;
    }
    //car 2
    if(key == 90) {
     car2.style.transform = `translateX(${c2}px)`;
      c2+= 10;
    }
   winner();
}

window.addEventListener('keyup', go);
// this specifies when the winner reaches a certain amonut of pixels it will display the image.


function winner(){
  if(c1 && c2 +500 === 1180){
    finish.style.display ="block";
  }
  if(c1 + 500 === 1200){
   winr.style.display = "block";
   playAudio()
   window.removeEventListener("keyup", go);
   // bg.style.animation = "none";
  }

  else if(c2 +500 === 1200){

winr2.style.display = "block";
playAudio()
 window.removeEventListener("keyup", go);
// bg.style.animation = "none";

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

