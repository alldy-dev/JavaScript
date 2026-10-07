// 1. Seleção dos elementos do DOM
const noteInput = document.getElementById('noteInput');
const noteName = document.getElementById('noteName');
const buttonsDiv = document.getElementById('buttons');

// 2. Função responsável por atualizar o título enquanto o usuário digita
function writeLabel(e) {
  noteName.textContent = noteInput.value;
}

// 3. Função responsável por controlar a gravação / pausa
function recorder(e) {
  e.preventDefault(); // Impede o comportamento padrão do link <a>

  // Captura o elemento exato que foi clicado (Event Delegation)
  const target = e.target;


  // Verifica o atributo data-state para alternar
  switch (target.dataset.state) {
    case 'record':
      target.dataset.state = 'stop';
      break;
    case 'stop':
      target.dataset.state = 'record';
      break;
    default:
      break;
  }
}

// 4. Registrando os ouvintes de eventos
// - Evento de digitação no input
noteInput.addEventListener('keyup', writeLabel, false);

// - Evento de clique delegado na div pai #buttons
buttonsDiv.addEventListener('click', recorder, false);