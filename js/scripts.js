console.log("Hi! Welcome to my portfolio site.")

var escapedText2 = 'He said: "Yes!", that\'s for sure';

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.classame = 'navtoggle';
  }
}