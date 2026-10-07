//Vai ser comum para todos: dblclick, mousedown, mouseup, mouseover, mouseout, mousemove
const caixa = document.getElementById('caixa');
const mensagem = document.getElementById('mensagem')
//Aqui encerra o comum para todos


caixa.addEventListener('mousedown', function () {
  mensagem.textContent = 'Botão do mouse pressionado';
  mensagem.style.background = 'orange';
},
false
);

