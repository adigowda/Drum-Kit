for (var i = 0; i < document.querySelectorAll(".drum").length ; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {

    var m = this.innerHTML;
    

    checkIt(m);
 
    addAni(m);
  })
    
    document.addEventListener("keypress",function(event){

      checkIt(event.key);

      addAni(event.key);
    
  })
}

function checkIt(letter)
{
  switch(letter)
  {
    case "w": var x = new Audio("sounds/tom-1.mp3");
                 x.play();break;
    case "a": var x = new Audio("sounds/tom-2.mp3");
                  x.play();break;
   case "s": var x = new Audio("sounds/tom-3.mp3");
                   x.play();break;
  case "d": var x = new Audio("sounds/tom-4.mp3");
  x.play();break;
  case "j": var x = new Audio("sounds/crash.mp3");
  x.play();break;
  case "k":var x = new Audio("sounds/kick-bass.mp3");
  x.play();break;
  case "l":var x = new Audio("sounds/snare.mp3");
  x.play();break;
  default:alert("No");break;
  }
}

function addAni(theButton)
{
  document.querySelector("."+theButton).classList.add("animationForButton");

  
    myVar = setInterval(rem, 100);
  
function rem()
{


  document.querySelector("."+theButton).classList.remove("animationForButton");
}

}


