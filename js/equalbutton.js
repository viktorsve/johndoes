export function equalFunction() {
  $(".print").click(function() {
    checkNumbers(this);
  });

  let calcScreen = $(".screen")[0];

  function checkNumbers(input) {
    if (input.innerHTML == "=") {
      try {
        calcScreen.innerHTML = eval(calcScreen.innerHTML);
      } catch (error) {
        calcScreen.innerHTML = "Error";
      }
    } else if (calcScreen.innerHTML == "0" || calcScreen.innerHTML == "Error") {
      calcScreen.innerHTML = input.innerHTML;
    } else {
      calcScreen.innerHTML += input.innerHTML;
    }
  }
}