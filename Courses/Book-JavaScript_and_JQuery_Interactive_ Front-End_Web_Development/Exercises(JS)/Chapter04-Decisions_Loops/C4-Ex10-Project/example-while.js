var i = 1;
var msg = '';

while ( i < 11) {
  msg += i + ' x 3 = ' + (i * 3) + '<br />';
  i++;
}

document.getElementById('blackboard').innerHTML = msg;