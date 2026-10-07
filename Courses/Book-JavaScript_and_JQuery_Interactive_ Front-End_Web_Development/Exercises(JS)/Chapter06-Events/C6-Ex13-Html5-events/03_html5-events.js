function setup() {
    const textInput = document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMContentLoaded' , setup, false);


window.addEventListener('beforeunload', function(event) {
//Por segurança pra funcionar em todos os navegadores, no chrome funciona sem essa linha
  event.preventDefault(); 
// Ativa o popup padrão do navegador, deixe o texto vazio mesmo, pois o chrome preenche uma frase automática, se vc colocar texto abaixo de nada vai adiantar
  event.returnValue = ''; 
}, false);