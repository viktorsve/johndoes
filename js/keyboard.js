// user stories 9 - keyboard

var a = console.log("test");

function myEvent(){
  document.addEventListener('keydown', keyHandler, false);
  function keyHandler(e) {
    if(e.keyCode == 39) {
      console.log("höger piltangent");
    } else if (e.keyCode == 37) {
      console.log("vänster piltangent");
    }
  }
};


export {myEvent};
