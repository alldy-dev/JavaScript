//Vai ser comum para todos: dblclick, mousedown, mouseup, mouseover, mouseout, mousemove
const caixa = document.getElementById('caixa');
const mensagem = document.getElementById('mensagem')
//Aqui encerra o comum para todos


caixa.addEventListener('mouseout', function () {
  mensagem.textContent = 'Mouse saiu da caixa';
  mensagem.style.background = 'lightblue';
},
false
);

