export function myEvent(){
  document.addEventListener('keydown', keyHandler, false);
  function keyHandler(e) {
    if(e.keyCode == 49) {
      $(".screen").append(1);
    } else if (e.keyCode == 50) {
      $(".screen").append(2);
    } else if (e.keyCode == 51) {
      $(".screen").append(3);
    } else if (e.keyCode == 52) {
      $(".screen").append(4);
    } else if (e.keyCode == 53) {
      $(".screen").append(5);
    } else if (e.keyCode == 54) {
      $(".screen").append(6);
    } else if (e.keyCode == 55) {
      $(".screen").append(7);
    } else if (e.keyCode == 56) {
      $(".screen").append(8);
    } else if (e.keyCode == 57) {
      $(".screen").append(9);
    } else if (e.keyCode == 48) {
      $(".screen").append(0);
    } else if (event.shiftKey && e.keyCode == 48) {
      $(".screen").append("=");
    }
  }
};
