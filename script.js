console.log("main js is connected");

let car1 = document.getElementById('car');
let car2 = document.getElementById('car2');
let bg = document.querySelector(".container");
let finish = document.querySelector(".finishLine");
let winr = document.querySelector(".player1");
let winr2 = document.querySelector(".player2");
let wheel1 = document.querySelector("#wheel1");
let wheel2 = document.querySelector("#wheel2");
let wheel3 = document.querySelector("#wheel3");
let wheel5 = document.querySelector("#wheel5");
let wheel6 = document.querySelector("#wheel6");
let starB = document.querySelector(".starB");
let replayB = document.querySelector(".replayB");
let landingB = document.querySelector('.landingB');
let object = document.querySelector('#object');
objectX = object.offsetLeft;
objectY = object.offsetTop;
objectH = object.offsetHeight ;
objectW = object.offsetWidth ;
car1X = car1.offsetLeft ;
car1Y = car1.offsetTop;
car1H = car1.offsetHeight;
car1W = car1.offsetWidth ;
car2Y = car2.offsetTop;
car2H = car2.offsetHeight;
car2W = car2.offsetWidth;
car2X = car2.offsetLeft ;
let c1 =0;
let c2 =0;

// sets keycodes for each player and had to transform numbers into pixels
// by using transform: translate into px
function go(race) {
  let key = race.keyCode;
    //car 1
    if(key == 83) {
     car1.style.left = (car1X+=10) + "px";
    }
    //car 2
    if(key == 74) {
    car2.style.left = (car2X+=10) + "px";
    }
    if(key == 87) {
     car1.style.top = (car1X+=10) + "px";
    }
       if(key == 88) {
     car1.style.top = (car1X-=10) + "px";
    }
     if(key == 85) {
     car2.style.top= (car1X+=10) + "px";
    }
       if(key == 77) {
     car2.style.top = (car1X-=10) + "px";
    }
  collision();
   winner();
}



// this specifies when the winner reaches a certain amonut of pixels it will display the image.
let deleted = false;
function collision (){
if(deleted == false){

  if ((car1X + car1W) > objectX && car1X< (objectX+objectW) && (car1Y + car1H) > objectY && car1Y < (objectY+objectH)){
     car1.style.left = (car1X=0) + "px";
    deleted = true;
    alert("player 1 crashed")
    object.style.display = "none";
  }
  if ((car2X + car2W) > objectX && car2X< (objectX+objectW) && (car2Y + car2H) > objectY && car2Y < (objectY+objectH)){
    car2.style.left = (car2X=0) + "px";
  alert("player 2 crashed")
   deleted = true;
    object.style.display = "none";
  }

}

 window.requestAnimationFrame(collision);

}

 function car3(){

    if(objectX ===  -500){
      clearInterval();

    } else {
      object.style.left = (objectX  -= 1) + "px";

    }

 }


function winner(){

  if(car1X + 500 === 1400){
    bg.style.animationPlayState = "paused";
   wheel1.style.animationPlayState = "paused";
   wheel2.style.animationPlayState = "paused";
   wheel3.style.animationPlayState = "paused";
   wheel4.style.animationPlayState = "paused";
   winr.style.display = "block";
   playAudio()
   window.removeEventListener("keyup", go);

  }

  else if(car2X +500 === 1400){
   bg.style.animationPlayState = "paused";
   wheel1.style.animationPlayState = "paused";
   wheel2.style.animationPlayState = "paused";
   wheel3.style.animationPlayState = "paused";
   wheel4.style.animationPlayState = "paused";
   winr2.style.display = "block";
  playAudio()
  window.removeEventListener("keyup", go);
  console.log("car2 end")
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
// glitches when i use event listener on this button.
// replayB.addEventListener('click', startGame());

function start(){
bg.style.animationPlayState = "running";
wheel1.style.animationPlayState = "running";
wheel2.style.animationPlayState = "running";
wheel3.style.animationPlayState = "running";
wheel4.style.animationPlayState = "running";
wheel5.style.animationPlayState = "running";
wheel6.style.animationPlayState = "running";
window.addEventListener('keyup', go);

let ob = setInterval(car3,3)

}

