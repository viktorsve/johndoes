import {
  saveExpression
<<<<<<< HEAD
} from "./savedExpressions.js";
=======
} from './savedExpressions.js'
>>>>>>> master

export function equalFunction() {
  let calcScreen = $(".screen")[0];
  $(".print").click(function() {
<<<<<<< HEAD
    const newInput = checkNumbers(this.innerHTML, calcScreen.innerHTML);
    calcScreen.innerHTML = newInput;
=======
    checkNumbers(this);
>>>>>>> master
    if ($(this).hasClass("equal")) {
      saveExpression();
    }
  });
}

export function checkNumbers(inputString, calcScreenString) {
  if (inputString == "=") {
    if (calcScreenString.includes("^")) {
      calcScreenString = calcScreenString.replace("^", "**");
    }
    try {
      return eval(calcScreenString);
    } catch (error) {
      return "Error";
    }
  } else if (inputString == "√") {
    try {
      if (isNaN(Math.sqrt(calcScreenString))) throw "Error";
      return Math.sqrt(calcScreenString);
    } catch (error) {
      return "Error";
    }
  } else if (calcScreenString == "0" || calcScreenString == "Error") {
    return inputString;
  } else {
    return calcScreenString + inputString;
  }
}
