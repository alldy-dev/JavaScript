// 1. Definição da função assíncrona
async function carregarEventos() {


  try {
  
  
  
    // 2. Requisição HTTP via Fetch API
    const response = await fetch('data/data.json');

  
  
  
    // 3. Validação do status da resposta
    if (!response.ok) {
  
  
      throw new Error(`Erro ao carregar dados: ${response.status}`);
    }

    // 4. Conversão do JSON em Objeto JS
    const dados = await response.json();

  
    // 5. Construção do HTML dinâmico
    const htmlEventos = dados.events.map(evento => `
      <div class="event">
        <img src="${evento.map}" alt="${evento.location}" />
        <p><b>${evento.location}</b><br>${evento.date}</p>
      </div>
    `).join('');

    // 6. Inserção do HTML no elemento da página
    document.getElementById('content').innerHTML = htmlEventos;

  } catch (erro) {
  
    // 7. Tratamento e captura de erros
    console.error('Ocorreu um erro:', erro);
  }
}

// 8. Chamada para executar a função
carregarEventos();
