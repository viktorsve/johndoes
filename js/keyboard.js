// user stories 9 - keyboard

var a = console.log("test");

function myEvent(){
  document.addEventListener('keydown', keyHandler, false);
  function keyHandler(e) {
    if(e.keyCode == 49) {
      document.querySelector(".screen").append("1");
    } else if (e.keyCode == 50) {
      document.querySelector(".screen").append("2");
    } else if (e.keyCode == 51) {
      document.querySelector(".screen").append("3");
    } else if (e.keyCode == 52) {
      document.querySelector(".screen").append("4");
    } else if (e.keyCode == 53) {
      document.querySelector(".screen").append("5");
    } else if (e.keyCode == 54) {
      document.querySelector(".screen").append("6");
    } else if (e.keyCode == 55) {
      document.querySelector(".screen").append("7");
    } else if (e.keyCode == 56) {
      document.querySelector(".screen").append("8");
    } else if (e.keyCode == 57) {
      document.querySelector(".screen").append("9");
    } else if (e.keyCode == 48) {
      document.querySelector(".screen").append("0");
    }
  }
};


export {myEvent};
