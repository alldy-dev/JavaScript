// 1. Pegamos a lista de compras (o <ul>) pelo id
const listaDeCompras = document.getElementById('shoppingList');

// 2. Criamos uma função que roda quando alguém clica na lista
function itemConcluido(evento) {
  // 3. Descobrimos qual elemento foi clicado
  const elementoClicado = evento.target;
  console.log(elementoClicado)

  // 4. Procuramos o link (<a>) mais próximo do que foi clicado
  //quando a gente clica em algum elemento que tá dentro do <ul id=shoppingList>, o target pegou o <li> que cliquei, por exemplo <li class="complete"><a href="itemDone.php?id=1"><em>fresh</em> figs</a></li> , ao usar o .closest('a') ele vai pegar a <a> mais próximo, só que ele funciona na ordem inverve(de baixo pra cima), então ao invés de ele ir do node do li até o text node, ele vai do text node em direção ao elemento li, mas nesse meio do caminho ele encontra o <a> e para. E guarda na const link
  const link = elementoClicado.closest('a');
  console.log(link)
  
  // 5. Se não clicou em um link, paramos por aqui
  if (!link) {
    return;
  }
  // 6. Impedimos o link de levar para outra página
  evento.preventDefault();
  // 7. Achamos o item da lista (<li>) que contém o link
  //Ele sai da tag <a> pois note que tem o link. e vai até o primeiro <li> que encontrar, e guarda o elemento <li> na constante itemDaLista
  const itemDaLista = link.closest('li');
  // 8. Removemos esse item da tela
  //Agora que já temos o <li> que queriamos guardado na const itemDaLista, basta excluir ele
  itemDaLista.remove();
}
// 9.Ele adicionou o event name click, então o js fica atento que quando eu clicar onde tem id=shoppingList , ele vai acionar e disparar uma função chamada itemConcluído

listaDeCompras.addEventListener('click', itemConcluido);
