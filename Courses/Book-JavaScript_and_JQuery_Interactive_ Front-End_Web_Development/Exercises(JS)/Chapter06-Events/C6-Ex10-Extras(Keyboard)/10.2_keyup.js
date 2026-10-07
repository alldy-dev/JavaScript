const campoMensagem = document.getElementById('message');
const ultimaTecla = document.getElementById('lastKey');

campoMensagem.addEventListener('keyup', function (evento) {
  ultimaTecla.textContent = `keyup: ${evento.key}`;
});