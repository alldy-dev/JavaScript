
//função criada por ser um AJAX que atua por trás dos bastidores e não atualiza a página inteira, mas sim somente uma parte da página(neste caso será o <section id="content">) deve ser informado o async pois vamos usar o await
async function carregarEventos() {
  //async deve andar junto com o await, eles se completam
  //fetch() é o método que vai buscar um arquivo (xml, html ou json) em um determinado local, neste caso é dentro do meu próprio computador, pois estou estudando. Mas na vida real normalmente é um endereço web
  // await pausa a execução APENAS dentro desta função até o fetch() retornar a resposta, sem travar nem congelar a página para o usuário
  const resposta = await fetch('data.json')

  //Verifica se a resposta recebeu o http 200 ou não
  if (!resposta.ok) {
    throw new Error(`Erro ao carregar dados: ${resposta.status}`);
  }

//resposta é a variável é onde está armazendo os dados que o fetch pegou em data.json, mas ele ainda é uma string
//.json() transforma a string que tem na variável respota em OBJETO
//tudo isso fica armazenado em dados
const dados = await resposta.json()

//dados é onde tá a informação no js que ele pegou no .json, lembrando que já tá como objeto
//events é a propriedade que ensina o dados onde a array(lista) começa, que é no [ , e termina no ]
//map é o loop que vai percorrer os itens
//itens são objetos que ficam dentro do array, eles ficam dentro do {}
// => é a função anônima
// vaiBuscar é o parâmetro/variável da função anônima
/*
vaiBuscar é o parâmetro que pega cada item e leva pro map armazenar em um array temporário. Ex: vaiBuscar pega 
{
      "location": "San Francisco, CA",
      "date": "May 1",
      "map": "img/map-ca.png"
    }
leva esse item pro map e ele armazena em um array temporário
vaiBuscar vai novamente no arquivo, mas agora no segundo item
{
      "location": "Austin, TX",
      "date": "May 15",
      "map": "img/map-tx.png"
    }
leva esse segundo item pro map e ele armazena em um array temporário
e assim por diante
*/
// os ${vaiBuscar.map}, ${vaiBuscar.location}, e ${vaiBuscar.date} pegam a informação que tem no value da propriedade
// Como os dados do JSON foram transformados pelo .map() em um Array no .js, usar o método .join('') serve para tirar as vírgulas da lista e juntar tudo num texto só, deixando o HTML limpo e organizado ao ir para a árvore DOM!
const htmlEventos = dados.events.map( vaiBuscar => `
  <div class="event">
    <img src="${vaiBuscar.map}" alt="${vaiBuscar.location}" />
    <p><b>${vaiBuscar.location}</b> <br> ${vaiBuscar.date}</p>
  </div>
  `).join('');

  document.getElementById('content').innerHTML = htmlEventos;
  
  }

  carregarEventos();