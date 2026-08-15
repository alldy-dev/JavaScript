var randomNum = window.Math.floor((window.Math.random() * 10) + 100);

var el = document.getElementById('info');
el.innerHTML = '<h2>random number </h2><p>' + randomNum + '</p>';