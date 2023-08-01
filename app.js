var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var positionX =0;
var step =10;
document.addEventListener ("keydown" , function (event) {
  

  //for players original positions functions 
function change(){
 player1.src ="images/iori_act_rest.gif";
 player1.style.width = "240px";

}
function change2(){
  player2.src = "images/orchi_rest (1).gif"
  player2.style.width = "200px"
}

function timeUp(){
  player1.src ="images/iori-act_timeup.gif"
  player1.style.width = "380px"
  player2.src = "images/mizuchi-timeUp(1).gif";
  player2.style.width = "180px";

}




//functions Define for player1
function moveRight(){
  player1.src = "images/iori-act-walk.gif";
  player1.style.width = "260px"
   positionX += step;
  player1.style.paddingLeft= positionX + "px";
  setTimeout(change, 1000);
 }


function moveLeft(){
  player1.src= "images/iori-act-walkback.gif";
  player1.style.width = "270px"
 positionX -= step;
  player1.style.paddingLeft= positionX + "px";
  setTimeout(change,1000);
 }

 function jump(){
  player1.src = "images/iori_act_up.gif";//Keyup change img
  player1.style.width = "300px"
 setTimeout(change, 1500);
 }
 function down(){
  player1.src = "images/iori_act_down.gif"; //Keydown  change img
 player1.style.width ="220px"
  setTimeout(change, 300);
 }

function punch(){
  player1.src= "images/iori_act_1.gif"
  player1.style.width = "400px"
  setTimeout(change, 750);
}

function power(){
  player1.src="images/iori-act_power.gif";
  player1.style.width = "750px";
  
  setTimeout(change, 2100);
   
}



//for player1 Conditions
if(event.key === "ArrowUp" ){
  jump();
}
else if(event.key === "ArrowDown" ){
  down();
}
else if(event.key === "ArrowRight" && positionX < 730 ){
  moveRight();
  
}
else if(event.key === "ArrowLeft" ){
  moveLeft();
}
else if(event.key === "0" ){
  punch();
}

else if(event.key === "Enter" ){
  power();
}
console.log(positionX)

//end player 1




//functions Define for player2
function moveRight_p2(){
  positionX -= step;
    player2.style.paddingRight= positionX +"px";
  }
 
 
 function moveLeft_p2(){
   positionX += step;
   player2.style.paddingRight= positionX +"px";
  }
 
  function jump_p2(){
   player2.src = "images/orchi_jumpkick (1).gif";//Keyup change img
   player2.style.width = "380px";
   setTimeout(change2 , 900)
  }
  function down_p2(){
   player2.src = "images/orchi-down (1).gif"; //Keydown  change img
  player2.style.width ="220px";
  setTimeout(change2 , 700)
  }
 
 function punch_p2(){
   player2.src="images/orchi-punch (1).gif";
   player2.style.width = "600px";
   setTimeout(change2 , 1150)
 }
 
 function power_p2(){
   player2.src="images/orchi-power (1).gif";
   player2.style.width = "500px";
   setTimeout(change2 , 650)
  
 }






 //for player2 Conditions
if(event.key === "w" ){
  jump_p2();
}
else if(event.key === "s" ){
  down_p2();
}
else if(event.key === "d" ){
  moveRight_p2();
  
}
else if(event.key === "a" && positionX < 730){
  moveLeft_p2();
}
else if(event.key === "q" ){
  punch_p2();
}

else if(event.key === " " ){
  power_p2();
}

console.log(event.key)


}
)

//Timer 
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  var interval = setInterval(function () {
    minutes = Math.floor(timer / 60);
    seconds = timer % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
       clearInterval(interval)
      
    }
 
  }, 1000);
  console.log(timer)
}

// Usage
var display = document.getElementById("timer");
startTimer(90, display);
console.log(display)


function showAlert(message) {
  
  // Get the alert container and message elements
  var alertContainer = document.getElementById("alertContainer");
  var alertMessage = document.getElementById("alertMessage");

  // Set the message text
  alertMessage.textContent = message;

  // Show the alert container
  alertContainer.style.visibility = "visible";
}

function closeAlert() {
  // Get the alert container
  var alertContainer = document.getElementById("alertContainer");

  // Hide the alert container
  alertContainer.style.visibility = "hidden";
}














// // Create a new image element
// // var img = document.createElement('img');

// // // Set the source, alt, and width attributes
// // img.src = 'images/iori_act_up.gif';
// // img.alt = 'Alternative text';
// // img.width = 300;
// // img.height = 200;

// // // Append the image element to the body of the HTML document
// // document.body.appendChild(img);


// }
//  Get a reference to the image element


