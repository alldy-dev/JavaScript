const california = document.getElementById('ca')
const texas = document.getElementById('tx')
const newYork = document.getElementById('ny')
const sessao = document.getElementById('sessions')
const detalhes = document.getElementById('details')

// uso async porque vou usar await dentro da função (para esperar o fetch buscar os dados do servidor)
// o objetivo é fazer o Ajax: atualizar só uma parte da página
async function botaoEstados(evento) {
  try {
    //Segura o comportamente padrão do <a> ao clicar, ou seja, ele não vai mais pra outra página, fica onde está
    evento.preventDefault();

    //Fazendo a a requisição pro endereço e pegando as informações no .json, ele vem no formato de string
    const resposta = await fetch('data/example.json');
    
    //verificando se hoube algum erro
    if (!resposta.ok) {
      throw new Error(`Erro ao carregar dados: ${resposta.status}`)
    }

    //vai converter a string em objeto para que o JS entenda
    /*
            "CA": [
            {
                "time": "9:00",
                "title": "Intro to 3D Modeling"
            },
            {
                "time": "10:00",
                "title": "Circuit Hacking"
            }
          ]
    */
    const dados = await resposta.json();

    
    //dados.CA : ao colocar .CA ele entra em dados e filtra pela key que tem CA
    //dados.CA.map : vai fazer loop nos itens(objetos) de CA, ou seja, loop nos {}
    //o loop do map vai se repetir 7x, então neste momento faça somente o <li>, o <ul> não precisa entrar aqui

    const htmlConteudo = dados.CA.map( pegandoItens => `
      <li>
        <span class="time">${pegandoItens.time}</span> <a href="descriptions.html#${pegandoItens.title.replaceAll(' ', '-')}">${pegandoItens.title}</a>
      </li>
      `
    ).join('');

    sessao.innerHTML = `
                        <ul> 
                          ${htmlConteudo}
                        </ul>
                        `;

  } catch {
    //a criar

  }
}

async function botaoSessao(outroEvento) {
  try {
  //vai impedir o evento padrão, que seria abrir uma nova página
  outroEvento.preventDefault();

  // mostra o elemento que cliquei isso é só pra eu checar pra mim mesmo, ex: <a href="descriptions.html#Intro-to-3D-Modeling">Intro to 3D Modeling</a>
  console.log(outroEvento.target);
  
  //pro html funciona um pouco diferente do json, p fetch pegar o arquivo html e traz pro js, mas ele vem dentro de um envelope. Então neste passo ele tá envelopado ainda
  const resposta = await fetch('descriptions.html')
  if (!resposta.ok) {
    throw new Error(`Erro ao carregar dados: ${resposta.status}`)
  }
  //ao usar o .text() estou desenvelopando o que veio do html
  const texto = await resposta.text();

  //tradutor : seria o tradutir que contratei, mas ainda não começou a trabalhar.
  //DOMParser() : é uma classe do navegador
  //new DOMParser() : é esta classe se tornando um objeto no js
  const tradutor = new DOMParser();

  //tradutor. : chamei o tradutor, pois agora ele vai começar a trabalhar
  //tradutor.parseFromString() : informo pro tradutor que ele vai ter que traduzir algo. Ao informar (texto, 'text/html') digo pra ele que ele vai pegar o conteúdo que tem na variável texto e vai transformar isso em html pro js entender
  const pagina = tradutor.parseFromString(texto, 'text/html');
  
  /*
  .target é uma propriedade do navegador, ele serve pra identificar o elemento em que estamos clicando.
  
  vou clicar em <a href=​"descriptions.html#Intro-to-3D-Modeling">​Intro to 3D Modeling​</a>​ pra gente usar como exemplo nos comentário daqui pra baixo

  //if (outroEvento.target.tagName !== 'A') : verifica se o que cliquei NÃO é uma tag <a> dentro de <div id="sessions"> se não for um <a>, o return encerra a função e nada acontece
  */
  if (outroEvento.target.tagName !== 'A') {
    return
  }
  //Pegao valor do atributo, que é "descriptions.html#Intro-to-3D-Modeling"
  const valor_atributo = outroEvento.target.getAttribute('href');

  /*
  .split('#') -> vai dividir o descriptions.html#Intro-to-3D-Modeling em lista no caso ficaria dividido em dois pedaços assim 'descriptions.html', 'Intro-to-3D-Modeling']
  
  [1] -> ao escolher o 1, você está escolhendo o segundo item da lista, que é o Intro-to-3D-Modeling , que no caso é o id que queremos  
  */
  const id_href = valor_atributo.split('#')[1]

  //aqui ele entrou em todo o html que tá na variável pagina, e pegou somento o que tem o que tem id = id_ref, que no caso é <div id="Intro-to-3D-Modeling"> no exemplo dos comentários
  const caixa = pagina.getElementById(id_href);


  /*
  caixa é o <div id="Intro-to-3D-Modeling">

  caixa.innerHTML é o que tem dentro do caixa, que é

    <h3>Intro to 3D Modeling</h3>
          <p>Come learn how to create 3D models of parts you can then make on our bus! You'll get to know the same 3D modeling software that is used worldwide in professional settings like engineering, product design, and more. Develop and test ideas in a fun and informative session hosted by Bella Stone, professional roboticist.</p>




o detalhes é <div id="details"></div> , que não tem conteúdo nenhum dentro, ao colocar  detalhes.innerHTML = caixa.innerHTML
ele pega o conteúdo de caixa, que é:

<h3>Intro to 3D Modeling</h3>
          <p>
          Come learn how to create 3D models of parts you can then make on our bus! You'll get to know the same 3D modeling software that is used worldwide in professional settings like engineering, product design, and more. Develop and test ideas in a fun and informative session hosted by Bella Stone, professional roboticist.
          </p>


e insere no detalhes, e como se ficasse assim

<h3>Intro to 3D Modeling</h3>
          <p>Come learn how to create 3D models of parts you can then make on our bus! You'll get to know the same 3D modeling software that is used worldwide in professional settings like engineering, product design, and more. Develop and test ideas in a fun and informative session hosted by Bella Stone, professional roboticist.</p>

  */
  detalhes.innerHTML = caixa.innerHTML;


  } catch {
    //a criar
  }
}

//vai chamar a função pra criar o conteúdo da 2a coluna
california.addEventListener('click', botaoEstados, false)
texas.addEventListener('click', botaoEstados, false)
newYork.addEventListener('click', botaoEstados, false)

//vai chamar a função pra criar o conteúdo da 3a coluna
sessao.addEventListener('click', botaoSessao, false)