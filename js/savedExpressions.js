let savedArray = [];

export function saveExpression() {

  let calcScreen = $('.screen')[0];
  if (calcScreen.innerHTML != "Error" || calcScreen.innerHTML != "Infinity") {
    if (savedArray.length == 50) {
      savedArray.pop();
      savedArray.unshift(calcScreen.innerHTML);
      $('ol').prepend("<li>" + 'Svar: ' + savedArray[0] + "</li>");
      $('ol li:nth-child(50)').remove();
    } else {
      savedArray.unshift(calcScreen.innerHTML);
      $('ol').prepend("<li>" + 'Svar: ' + savedArray[0] + "</li>");
    }
  }
  console.log(savedArray);
}
