export function chatFunction() {
  document.addEventListener("keypress", keyPressFunc, false);
  document.addEventListener("keydown", keyPressFuncTwo, false);

  function keyPressFuncTwo(event) {
    if (event.keyCode == 32) {
      $('.screen').append(' ');
    }
  }

  function keyPressFunc(event) {
    let a = event.keyCode;

    switch (a) {
      case 97:
        $(".screen").append("a");
        break;
      case 98:
        $(".screen").append("b");
        break;
      case 99:
        $(".screen").append("c");
        break;
      case 100:
        $(".screen").append("d");
        break;
      case 101:
        $(".screen").append("e");
        break;
      case 102:
        $(".screen").append("f");
        break;
      case 103:
        $(".screen").append("g");
        break;
      case 104:
        $(".screen").append("h");
        break;
      case 105:
        $(".screen").append("i");
        break;
      case 106:
        $(".screen").append("j");
        break;
      case 107:
        $(".screen").append("k");
        break;
      case 108:
        $(".screen").append("l");
        break;
      case 109:
        $(".screen").append("m");
        break;
      case 110:
        $(".screen").append("n");
        break;
      case 111:
        $(".screen").append("o");
        break;
      case 112:
        $(".screen").append("p");
        break;
      case 113:
        $(".screen").append("q");
        break;
      case 114:
        $(".screen").append("r");
        break;
      case 115:
        $(".screen").append("s");
        break;
      case 116:
        $(".screen").append("t");
        break;
      case 117:
        $(".screen").append("u");
        break;
      case 118:
        $(".screen").append("v");
        break;
      case 119:
        $(".screen").append("w");
        break;
      case 120:
        $(".screen").append("x");
        break;
      case 121:
        $(".screen").append("y");
        break;
      case 122:
        $(".screen").append("z");
        break;
    }

    if (event.keyCode == 13) {
      let getScreenInput = $('.screen').html();
      let chatAnswer = chatAnswerFunc(getScreenInput);
      $('.screen').html(chatAnswer);
    }

  }
}

function chatAnswerFunc(input) {
  if (input === 'hello') {
    return "Hello. How are you?";
  } else if (input === 'i am good') {
    return 'Nice!';
  } else {
    return 'I do not understand.';
  }
}

export { chatAnswerFunc };
