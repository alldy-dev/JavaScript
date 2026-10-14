const resultado = document.getElementById('resultado');
const campoSpan_Status = document.querySelector('#status span');

async function carregar() {
  try {
    //este site é voltado pra estudar api
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const codigoDeResposta = resposta.status;

    if (codigoDeResposta === 200) {
        campoSpan_Status.textContent = `✅ ${codigoDeResposta}, deu bom`
    } else {
      campoSpan_Status.textContent = `❌ ${codigoDeResposta}, deu alguma cacá!`
    }
    //o ok é uma propriedade que checa se o código de retorno tá na faixa de 200, se não tiver vai dizer que deu erro e vai pro catch
    if (!resposta.ok) {
      throw new Error(`Erro ${resposta.status}`);
    }

    //.json() transforma o contéudo que o resposta pegou em objeto no js
    const dados = await resposta.json();
    //seleciona a key name, e armazena o value dela em resultado.textContent
    resultado.textContent = dados.name;
  } catch (erro) {
    resultado.textContent = 'Não foi possível carregar.';
    console.error('Falhou:', erro);
  }
}

carregar();