//jshint esversion: 6


function removeLastChar() {
  $('.undo').click(function(){
    $('.screen').text(function(i, t){
      return t.slice(0, -1);
    });
  });
  $('.clear').click(function(){
    $('.screen').html('');
  });
}

export { removeLastChar };
