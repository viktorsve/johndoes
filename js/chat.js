function chatFunction() {
  document.addEventListener("keypress", keyPressFunc, false);
  document.addEventListener("keydown", keyPressFuncTwo, false);

  function keyPressFuncTwo(event) {
    if (event.keyCode == 8) {
      b = [];
    }
    if (event.keyCode == 32) {
      $('.screen').append(' ');
    }
  }

  let b = [];

  function keyPressFunc(event) {
    let a = event.keyCode;

    switch (a) {
      case 97:
        $(".screen").append("a");
        b.push('a');
        break;
      case 98:
        $(".screen").append("b");
        b.push('b');
        break;
      case 99:
        $(".screen").append("c");
        b.push('c');
        break;
      case 100:
        $(".screen").append("d");
        b.push('d');
        break;
      case 101:
        $(".screen").append("e");
        b.push('e');
        break;
      case 102:
        $(".screen").append("f");
        b.push('f');
        break;
      case 103:
        $(".screen").append("g");
        b.push('g');
        break;
      case 104:
        $(".screen").append("h");
        b.push('h');
        break;
      case 105:
        $(".screen").append("i");
        b.push('i');
        break;
      case 106:
        $(".screen").append("j");
        b.push('j');
        break;
      case 107:
        $(".screen").append("k");
        b.push('k');
        break;
      case 108:
        $(".screen").append("l");
        b.push('l');
        break;
      case 109:
        $(".screen").append("m");
        b.push('m');
        break;
      case 110:
        $(".screen").append("n");
        b.push('n');
        break;
      case 111:
        $(".screen").append("o");
        b.push('o');
        break;
      case 112:
        $(".screen").append("p");
        b.push('p');
        break;
      case 113:
        $(".screen").append("q");
        b.push('q');
        break;
      case 114:
        $(".screen").append("r");
        b.push('r');
        break;
      case 115:
        $(".screen").append("s");
        b.push('s');
        break;
      case 116:
        $(".screen").append("t");
        b.push('t');
        break;
      case 117:
        $(".screen").append("u");
        b.push('u');
        break;
      case 118:
        $(".screen").append("v");
        b.push('v');
        break;
      case 119:
        $(".screen").append("w");
        b.push('w');
        break;
      case 120:
        $(".screen").append("x");
        b.push('x');
        break;
      case 121:
        $(".screen").append("y");
        b.push('y');
        break;
      case 122:
        $(".screen").append("z");
        b.push('z');
        break;

    }
    var x = b.join('');
      if (x == 'hello' && event.keyCode == 13) {
        $('.screen').html('Heloo you. How are you?');
      } if (x == "iamgood" && event.keyCode == 13) {
        $('.screen').html('Nice, me good too!');
      } if (event.keyCode == 13 && x != 'hello' && event.keyCode == 13 && x != 'iamgood') {
       $('.screen').html('I do not understandddd.');
      }
  }
}



console.log('sasa');

chatFunction();
