// $('.timer').click(function() {
//   $('.timertext h3').html('HEJ');
// });
export function timerFunction(){
  var seconds = 0, minutes = 0, hours = 0,
      t;

  function add() {
      seconds++;
      if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
              minutes = 0;
              hours++;
          }
      }
      $('.timertext h3').text((hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds));
      timer();
  }
  function timer() {
      t = setTimeout(add, 1000);
  }

  $('.timerstart').click(function() {
    if (seconds == 0) {
      timer();
    }
  });

  $('.timerstop').click(function() {
    clearTimeout(t);
  });

  $('.timerstop').dblclick(function() {
    $('.timertext h3').text('00:00:00');
    seconds = 0; minutes = 0; hours = 0;
  });
};
