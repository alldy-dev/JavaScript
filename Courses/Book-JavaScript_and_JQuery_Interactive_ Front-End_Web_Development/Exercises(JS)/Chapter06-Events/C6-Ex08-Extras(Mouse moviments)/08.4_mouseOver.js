//Vai ser comum para todos: dblclick, mousedown, mouseup, mouseover, mouseout, mousemove
const caixa = document.getElementById('caixa');
const mensagem = document.getElementById('mensagem')
//Aqui encerra o comum para todos


caixa.addEventListener('mouseover', function () {
  mensagem.textContent = 'O mouse entrou na caixa';
  mensagem.style.background = 'lightgreen';
},
false
);

