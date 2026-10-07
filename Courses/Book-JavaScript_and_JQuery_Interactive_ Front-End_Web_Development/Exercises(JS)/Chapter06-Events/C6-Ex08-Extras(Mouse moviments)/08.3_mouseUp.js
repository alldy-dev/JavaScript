//Vai ser comum para todos: dblclick, mousedown, mouseup, mouseover, mouseout, mousemove
const caixa = document.getElementById('caixa');
const mensagem = document.getElementById('mensagem')
//Aqui encerra o comum para todos


caixa.addEventListener('mouseup', function () {
  mensagem.textContent = 'Botão do mouse solto';
  mensagem.style.background = 'lightgreen';
},
false
);

