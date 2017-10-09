console.log("main js is connected");

let car1 = document.getElementById('car')
let car2 = document.getElementById('car2')
let button = document.getElementById("theButton");

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
  if(c1 + 450 === 1200){
    alert("car1is the Winner!!!");
    window.removeEventListener("keyup", go);
  }
  else if(c2 +450 === 1200){
    alert("car2 is the Winner!!!");
    window.removeEventListener("keyup", go);
  }
}


// function restart(){
//   if(c1 == 1200 || c2 == 1200){
// c1 =0 && c2 = 0
//   }}
