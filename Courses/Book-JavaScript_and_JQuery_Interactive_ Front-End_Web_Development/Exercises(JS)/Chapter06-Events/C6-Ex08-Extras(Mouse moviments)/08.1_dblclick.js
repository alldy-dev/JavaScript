//Vai ser comum para todos: dblclick, mousedown, mouseup, mouseover, mouseout, mousemove
const caixa = document.getElementById('caixa');
const mensagem = document.getElementById('mensagem')
//Aqui encerra o comum para todos


caixa.addEventListener('dblclick', function () {
    mensagem.textContent = 'Você deu um duplo clique';
    mensagem.classList.add('mudandoCor');
    //caixa.setAttribute = 'mudandoCor'
},
false
);

