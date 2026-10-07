const campoMensagem = document.getElementById('message');
const ultimaTecla = document.getElementById('lastKey');

campoMensagem.addEventListener('keydown', function (evento) {
  ultimaTecla.textContent = `keydown: ${evento.key}`;
});