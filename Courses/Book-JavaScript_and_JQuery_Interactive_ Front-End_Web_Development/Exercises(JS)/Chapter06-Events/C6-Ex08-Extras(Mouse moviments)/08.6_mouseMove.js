//Vai ser comum para todos: dblclick, mousedown, mouseup, mouseover, mouseout, mousemove
const caixa = document.getElementById('caixa');
const mensagem = document.getElementById('mensagem')
//Aqui encerra o comum para todos


caixa.addEventListener('mousemove', function (evento) {
  mensagem.textContent = `Posição: x = ${evento.offsetX}, y = ${evento.offsetY}`;
},
false
);

