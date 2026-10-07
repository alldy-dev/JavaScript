const campoMensagem = document.getElementById('message');
const contadorRestante = document.getElementById('charactersLeft');
const ultimaTecla = document.getElementById('lastKey');

const LIMITE = 180;


function contarCaracteres() {
  const restante = LIMITE - campoMensagem.value.length;
  contadorRestante.textContent = restante;
}


function mostrarUltimaTecla(evento) {

  ultimaTecla.textContent = `Last key in ASCII code: ${evento.keyCode}`; 
}


campoMensagem.addEventListener('input', contarCaracteres, false);
campoMensagem.addEventListener('keydown', mostrarUltimaTecla, false);

