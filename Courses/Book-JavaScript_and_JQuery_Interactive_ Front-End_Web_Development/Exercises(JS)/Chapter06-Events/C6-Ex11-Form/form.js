// 1. Pegamos os elementos da página
const formulario = document.getElementById('formSignup');
const selectPlano = document.getElementById('package');
const dicaPlano = document.getElementById('packageHint');
const checkboxTermos = document.getElementById('terms');
const dicaTermos = document.getElementById('termsHint');

// 2. Mostra uma dica quando o usuário escolhe um plano
function mostrarDicaPlano(evento) {
  const plano = evento.target.value;

  if (plano === 'monthly') {
    dicaPlano.textContent = 'Economize $10 se pagar 1 ano de uma vez!';
  } else {
    dicaPlano.textContent = 'Boa escolha!';
  }
}

// 3. Confere se o usuário aceitou os termos antes de enviar
function verificarTermos(evento) {
  if (!checkboxTermos.checked) {
    dicaTermos.textContent = 'Você precisa concordar com os termos.';
    evento.preventDefault(); // impede o envio do formulário
  } else {
    dicaTermos.textContent = ''; // limpa o erro, se houver
  }
}

// 4. Ligamos os eventos às funções
formulario.addEventListener('submit', verificarTermos, false);
selectPlano.addEventListener('change', mostrarDicaPlano, false);