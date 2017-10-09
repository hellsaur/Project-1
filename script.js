console.log("main js is connected");

let car1 = document.getElementById('car')
let car2 = document.getElementById('car2')

let c1 =0;
let c2 =0;


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

function winner(){
  if(c1 + 500 === 1200){
   document.querySelector('player1')style.display.block;
    window.removeEventListener("keyup", go);
  }
  else if(c2 +500 === 1200){
    alert("player 2 is the Winner!!!");
    window.removeEventListener("keyup", go);
  }
}



//  window.onload = function() {
// let landing = document.querySelector('landing')
//     landing.setAttribute('onclick','this.style.display="none";');
// }


