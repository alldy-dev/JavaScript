// 1. Pegamos os elementos da página (ids e classes do HTML do autor)
const lista = document.getElementById('list');

const botaoAdicionar = document.querySelector('a.add');

const contador = document.getElementById('counter');

// 2. Função que adiciona um novo item na lista
function adicionarItem(evento) {
  evento.preventDefault(); // impede o link de ir para "/additem"

  const novoItem = document.createElement('li');
  novoItem.textContent = 'New list item';
  lista.appendChild(novoItem);
}

// 3. Função que conta os itens e atualiza o contador
function atualizarContador() {
  const total = lista.querySelectorAll('li').length;
  contador.textContent = total;
}

// 4. Observador: quando os filhos da lista mudarem, atualiza o contador
const observador = new MutationObserver(atualizarContador);
observador.observe(lista, { childList: true });

// 5. Clique no botão adiciona um item
botaoAdicionar.addEventListener('click', adicionarItem, false);