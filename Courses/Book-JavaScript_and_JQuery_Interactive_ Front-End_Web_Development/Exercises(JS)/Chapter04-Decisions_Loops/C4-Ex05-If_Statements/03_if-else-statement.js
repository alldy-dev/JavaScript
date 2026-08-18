var pass = 50;
var score = 75;
var msg;

if (score >= pass) {
  msg = 'Congratulations, you passed!';
} else {
  msg = 'have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;