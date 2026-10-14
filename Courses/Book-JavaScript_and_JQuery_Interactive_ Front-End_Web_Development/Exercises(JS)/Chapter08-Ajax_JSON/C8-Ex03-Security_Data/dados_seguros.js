const conteudo = document.getElementById('content');

async function carregarEventos() {
  try {
    const resposta = await fetch('data.json');

    if (!resposta.ok) {
      throw new Error(`Erro ${resposta.status}`);
    }

    const dados = await resposta.json();

    const eventos = dados.events.map((evento) => {
      const div = document.createElement('div');
      div.className = 'event';

      const img = document.createElement('img');
      img.src = evento.map;
      img.alt = evento.location;

      const negrito = document.createElement('b');
      negrito.textContent = evento.location;

      const p = document.createElement('p');
      p.append(negrito, document.createElement('br'), evento.date);

      div.append(img, p);
      return div;
    });

    conteudo.replaceChildren(...eventos);
  } catch (erro) {
    conteudo.textContent = 'Não foi possível carregar os eventos.';
    console.error('Falhou:', erro);
  }
}

carregarEventos();