const ENDERECO = 'https://jsonplaceholder.typicode.com/users';
const lista = document.getElementById('lista');

async function carregarUsuarios() {
  try {
    // 1. fetch com tempo limite de 5 segundos
    //fetch(ENDERECO é o primeiro argumento, ele vai até a o ENDEREÇO e pega as informações(em string) e coloca dentro da variável response
    //{ signal: AbortSignal.timeout(5000)}); -> é o segundo argumento, ele espera 5 segundos, se demorar mais que isso ele força um erro e vai pro catch
    const response = await fetch(ENDERECO, {
        signal: AbortSignal.timeout(5000)
    });
    // 2. confira resposta.ok
    if (!response.ok) {
        throw new Error(`Erro ${response.status}`);
    }


    // 3. converta a resposta com json()
    const dados = await response.json();
    console.log(dados)
    // 4. com map, crie uma div para cada usuário,
    // com o nome em <b> e o e-mail em <p>
    // (use createElement e textContent)
    const cartoes = dados.map ( informacao => {
        const divNova = document.createElement('div');
        const nomeBold = document.createElement('b');
        const emailParagrafo = document.createElement('p');

        nomeBold.textContent = informacao.name;
        emailParagrafo.textContent = informacao.email;

        divNova.append(nomeBold, emailParagrafo);
        return divNova;
    });
    
    
    // 5. coloque os cartões em #lista (replaceChildren)
    lista.replaceChildren(...cartoes);
  } catch (erro) {
    // 6. mostre uma mensagem de erro em #lista
    console.error(erro);
    lista.textContent = 'Não foi possível carregar os usuários.';
  }
  }


carregarUsuarios();