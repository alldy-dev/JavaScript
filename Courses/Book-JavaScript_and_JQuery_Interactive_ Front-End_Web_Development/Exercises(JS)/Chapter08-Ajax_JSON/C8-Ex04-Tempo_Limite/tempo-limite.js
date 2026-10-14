// guarda o endereço (só o texto) do arquivo .json; quem busca o arquivo é o fetch
const URL_EVENTOS = 'data.json';

// declara a função (só declara, não executa aqui); tem async porque usa await dentro
async function carregarEventos() {
  // pega o elemento da página onde as mensagens vão aparecer
  const conteudo = document.getElementById('content');

  try {
    // faz UM pedido (não fica tentando); espera a resposta por até 5 segundos
    // se passar disso, o pedido é cancelado e vai para o catch com TimeoutError
    const resposta = await fetch(URL_EVENTOS, {
      signal: AbortSignal.timeout(5000)
    });

    // ok é true para status de 200 a 299; o ! inverte
    // então o if entra quando o status está FORA dessa faixa (ex.: 404, 500)
    if (!resposta.ok) {
      // cria o erro e interrompe o código; é o throw que manda para o catch
      throw new Error(`Erro ${resposta.status}`);
    }

    // lê o texto da resposta e transforma em objeto JavaScript
    // await porque a leitura também leva um tempinho
    const dados = await resposta.json();

    // dados.events é a lista; .length conta os itens dela (3 eventos)
    // textContent coloca o texto na página
    conteudo.textContent = `Foram carregados ${dados.events.length} eventos.`;
  } catch (erro) {
    // erro.name diz que tipo de erro aconteceu
    if (erro.name === 'TimeoutError') {
      // passou dos 5 segundos sem resposta
      conteudo.textContent = 'O servidor demorou demais.';
    } else {
      // qualquer outro erro: status ruim, internet fora, bloqueio de CORS, JSON inválido
      conteudo.textContent = 'Não foi possível carregar.';
    }
  }
}

// aqui a função é executada de verdade
carregarEventos();