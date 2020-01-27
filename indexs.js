
function whichKey() {
  document.addEventListener("keypress", function (event) {
    var xx = event;
    console.log(xx);
    return xx;
  })
}
var m = whichKey();

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("keypress", function () {
    switch (m) {
      case "w": var x = new Audio("sounds/tom-1.mp3");
        x.play(); break;
      case "a": var x = new Audio("sounds/tom-2.mp3");
        x.play(); break;
      case "s": var x = new Audio("sounds/tom-3.mp3");
        x.play(); break;
      case "d": var x = new Audio("sounds/tom-4.mp3");
        x.play(); break;
      case "j": var x = new Audio("sounds/crash.mp3");
        x.play(); break;
      case "k": var x = new Audio("sounds/kick-bass.mp3");
        x.play(); break;
      case "l": var x = new Audio("sounds/snare.mp3");
        x.play(); break;


    }
  })
}