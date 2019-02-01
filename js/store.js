// jshint esversion: 6

function storeExpressions() {
  $('.store').click(function() {
    //lagra a och skriv ut a
      $('.a').one('click', function() {
        let a = $('.screen').html();
        $('.a').click(function() {
          $('.screen').append(a);
        });
        $('.clear').click(function(){
          a = '';
        });
      });
    //lagra b och skriv ut b
      $('.b').one('click', function() {
        let b = $('.screen').html();
        $('.b').click(function() {
          $('.screen').append(b);
        });
        $('.clear').click(function(){
          b = '';
        });
      });
    //lagra c och skriv ut c
      $('.c').one('click', function() {
        let c = $('.screen').html();
        $('.c').click(function() {
          $('.screen').append(c);
        });
        $('.clear').click(function(){
          c = '';
        });
      });
    //lagra d och skriv ut d
      $('.d').one('click', function() {
        let d = $('.screen').html();
        $('.d').click(function() {
          $('.screen').append(d);
        });
        $('.clear').click(function(){
          d = '';
        });
      });
    //lagra e och skriv ut e
      $('.e').one('click', function() {
        let e = $('.screen').html();
        $('.e').click(function() {
          $('.screen').append(e);
        });
        $('.clear').click(function(){
          e = '';
        });
      });
  });

}

export { storeExpressions };
