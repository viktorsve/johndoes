export function myEvent(){
  document.addEventListener('keydown', keyHandler, false);

  function keyHandler(event) {
    if(event.keyCode == 49) {
      $(".screen").append(1);
    } else if (event.keyCode == 50) {
      $(".screen").append(2);
    } else if (event.keyCode == 51) {
      $(".screen").append(3);
    } else if (event.keyCode == 52) {
      $(".screen").append(4);
    } else if (event.keyCode == 53) {
      $(".screen").append(5);
    } else if (event.keyCode == 54) {
      $(".screen").append(6);
    } else if (event.keyCode == 55) {
      $(".screen").append(7);
    } else if (event.keyCode == 56) {
      $(".screen").append(8);
    } else if (event.keyCode == 57) {
      $(".screen").append(9);
    } else if (event.keyCode == 48) {
      $(".screen").append(0);
    } else if (event.keyCode == 189) {
      $(".screen").append("-");
    } else if (event.keyCode == 187) {
      $(".screen").append("+");
    } else if (event.keyCode == 61) {
      $(".screen").append("=");
    }
  }
};
