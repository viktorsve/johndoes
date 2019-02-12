let savedArray = [];

export function saveExpression() {
  //Grabs the Screen element in which to put the answers.
  let calcScreen = $('.screen')[0];
  let a = calcScreen.innerHTML;
  //Checks if the answer includes either Error or Infinity in which cause it doesnt push it.
  if (a != "Error" && a != "Infinity" && a != "function Error() { [native code] }" && a != "undefined" && a != "NaN") {
    //Checks if array length is 50, in that case pops the last index and unshifts new index
    if (savedArray.length == 50) {
      savedArray.pop();
      savedArray.unshift(calcScreen.innerHTML);
      //Removes item 50 in the list created by previous code. (51 fråga Andreas varför/hur)
      $('ol li:nth-child(50)').remove();
      //Adds the expression from calculator to a list and saves it in html.
      $('ol').prepend("<li>" + 'Svar: ' + savedArray[0] + "</li>");
    } else {
      //If array.length is not 50 this just adds last expression first in the array.
      savedArray.unshift(calcScreen.innerHTML);
      //Adds the expression from calculator to a list and saves it in html.
      $('ol').prepend("<li>" + 'Svar: ' + savedArray[0] + "</li>");
    }
  }
}

//TEST FUNKTIONEN FÖR SAVEDEXPRESSIONS
export function saveExpressionTest(input) {
  if (input != "Error" && input != "Infinity" && input != "function Error() { [native code] }" && input != "undefined") {
    if (savedArray.length == 50) {
      savedArray.pop();
      savedArray.unshift(input);
      return savedArray;
    } else {
      savedArray.unshift(input);
      return savedArray;
    }
    return null;
  }
}
