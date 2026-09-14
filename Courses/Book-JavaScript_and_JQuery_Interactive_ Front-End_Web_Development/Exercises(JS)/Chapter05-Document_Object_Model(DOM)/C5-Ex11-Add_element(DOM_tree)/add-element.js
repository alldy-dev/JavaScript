var newEl = document.createElement('li');

var newText = document.createTextNode('quinoa');

newEl.appendChild(newText);

console.log(newEl);

var position = document.getElementsByTagName('ul')[0];

position.appendChild(newEl);

/* Pra facilitar a visualização
<ul id="todo">
  <li id="one" class="hot"><em>fresh</em> figs</li>
  <li id="two" class="hot">pine nuts</li>
  <li id="three" class="hot">honey</li>
  <li id="four">balsamic vinegar</li></ul>
*/