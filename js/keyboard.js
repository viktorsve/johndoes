export function myEvent(){
  document.addEventListener('keypress', keyHandler, false);
  document.addEventListener('keydown', keyHandlerTwo, false);

  function keyHandler(event) {
    if(event.keyCode == 49) {
      $(".screen").append("1");
    } else if (event.keyCode == 50) {
      $(".screen").append("2");
    } else if (event.keyCode == 51) {
      $(".screen").append("3");
    } else if (event.keyCode == 52) {
      $(".screen").append("4");
    } else if (event.keyCode == 53) {
      $(".screen").append("5");
    } else if (event.keyCode == 54) {
      $(".screen").append("6");
    } else if (event.keyCode == 55) {
      $(".screen").append("7");
    } else if (event.keyCode == 56) {
      $(".screen").append("8");
    } else if (event.keyCode == 57) {
      $(".screen").append("9");
    } else if (event.keyCode == 48) {
      $(".screen").append("0");
    } else if (event.keyCode == 45) {
      $(".screen").append("-");
    } else if (event.keyCode == 43) {
      $(".screen").append("+");
    } else if (event.keyCode == 47) {
      $(".screen").append("/");
    } else if (event.keyCode == 40) {
      $(".screen").append("(");
    } else if (event.keyCode == 41) {
      $(".screen").append(")");
    } else if(event.keyCode == 46) {
      $(".screen").append(".");
    } else if(event.keyCode == 42) {
      $(".screen").append("*");
    } else if(event.keyCode == 8) {
      $(".screen").html("");
    } else if(event.keyCode == 61) {
      var i = $(".screen")[0];
      i.innerHTML = eval(i.innerHTML);
    }
  };

  function keyHandlerTwo(event) {
    if(event.keyCode == 8) {
      $(".screen").html("");
    }
  };
};
