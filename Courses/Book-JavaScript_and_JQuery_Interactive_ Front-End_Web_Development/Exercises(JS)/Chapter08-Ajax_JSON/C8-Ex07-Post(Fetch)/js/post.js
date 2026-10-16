const form = document.getElementById('new-post');
const message = document.getElementById('message');
const reply = document.getElementById('reply');

//Quando clicar no button vai disparar a função anônima
form.addEventListener('submit', async (event) => {
  //Por padrão o submit envia dados a algum servidor, mas ao usar o .preventDefault() ele bloqueia esta ação
  event.preventDefault(); 

  //form : é a variável que fizemos no início deste código
  //FormData():  é uma classe do navegador, dentro do () é seu argumento. ele percorre tudo que tem dentro de <form id="new-post">, e pega somente os que tem com atributos name e seus content.
  //new FormData(form): o new está instânciando o FormData(form), ou seja, está fazendo ele se tornar um objeto
  //.fromEntries : ele organiza os atributos name e seus contents. O que era atributo name passa a ser key e o que era content passar a ser value desta key. E estes pares key: value ficam dentro de chaves {} caractareizando um objeto. Exemplo: name="title" + digitei "Estudando fetch"  ------->  title: "Estudando fetch" --------> Resultado: { title: "Estudando fetch", body: "Funciona!" }
  //Object: é um objeto do js, e o fromEntries é um método dele

  // const data = Object.fromEntries(new FormData(form)); : então o que ele fez aqui foi organizar, deixar tudo bonitinho pra quando for enviar pro servidor entender no formato json
  const data = Object.fromEntries(new FormData(form)); 


  message.textContent = 'Sending...';
  
  
  try {
    // https://jsonplaceholder.typicode.com/post : é o endereço do servidor, /post é um local específico dentro do servidor que serve para receber as requisições
    //method: 'POST' :  por padrão é get, mas por se tratar de uma requisição post ele colocou method: 'POST'
    //headers: { 'Content-Type': 'application/json' } : isso serve pra informar ao servidor que os dados que tá sendo levado pra ele é do formato json
    // body: JSON.stringify(data) ele transforma o de objeto de js para formato em texto pro json
    // signal: AbortSignal.timeout(5000) espesa por 5s a resposta do servidor, se não dá erro
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(5000)
    });
    
    //Se a resposta não estiver na faixa de 200 a 299 é pq houve algum erro, então abaixo ele faz essa checagem
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    
    //.json() vai pegar a string em formato json e tranformá-la em objeto do js
    const created = await response.json();
    
    message.textContent = `Created! The server gave it the id ${created.id}.`;
    
    // created -> objeto com o post que o servidor devolveu (já com o id novo).
    // JSON.stringify(created, null, 2) : transforma esse objeto em texto JSON com indentação
    //   null : não quero filtrar nada (pode ignorar por enquanto)
    //   2 : indente com 2 espaços, para o texto ficar organizado
    // reply.textContent = ... -> coloca esse texto dentro do <pre id="reply"> do HTML, e é assim que a resposta aparece na tela.
    reply.textContent = JSON.stringify(created, null, 2);
    
    //não está mais escondido, então aparece
    reply.hidden = false;
    
    //mpa o formulário: apaga o que foi digitado em todos os campos e deixa tudo vazio de novo. Depois que o post foi enviado com sucesso, as caixas de título e de texto ficam em branco, prontas para um novo envio. É como o formulário começou quando a página abriu.
    form.reset();
  
  } catch (error) {
    message.textContent = 'Sending failed. Try again.';
    reply.hidden = true;
  }
});

