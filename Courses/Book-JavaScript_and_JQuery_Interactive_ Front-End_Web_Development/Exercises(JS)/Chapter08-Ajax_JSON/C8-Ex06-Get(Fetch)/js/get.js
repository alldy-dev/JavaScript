const select = document.getElementById('user');
const button = document.getElementById('load');
const message = document.getElementById('message');
const list = document.getElementById('posts');

async function loadPost() {
  message.textContent = 'Loading...';
  try {
    // URLSearchParams -> é uma classe do navegador, ela pega os parâmetros dentro dela e monta de uma forma organizada na URL para que quando a request chegar no servidor, ele o entenda.(ex.: userId=2&_limit=5)
    //{ userId: select.value, _limit: 5} -> é o objeto, que tem key e value. Quem construiu colocou as keys userId e limit pois leu a API(cardápio) ofical do servidor
    // ({ userId: select.value, _limit: 5 }) -> quando o objeto é colocado dentro dos parênteses, ele é entregue como argumento para a classe URLSearchParams
    // new URLSearchParams({ userId: select.value, limit: 5 }); -> ao usar o new vc está instânciado a classe URLSearchParams() e tornando ela um objeto
    // params -> é onde se armazena o objeto que acabamos de criar
    const params = new URLSearchParams({ userId: select.value, _limit: 8});
    
    //aqui ele vai fazer a requisição através da url e seus parâmetros com o params, tempo limite de resposta 5 segundos
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?${params}` ,
        { signal: AbortSignal.timeout(5000) }
    );
    
    // checa e vê se o servidor respondeu algo fora da faixa de código 200 a 299, pois essa faixa é quando a resposta é retornada com sucesso. Lembrando que esta requisição http responde que o servidor existe e já entrega o que o cliente pediu
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    
    // quando o response pegar a resposta do servidor e armazena, ele tem o json em formato de string, é necessário tranformar a string em formato de objeto com o .json()
    const posts = await response.json();
    
    //no post tem os dados que tem formato [{}], onde o [] é um array(lista) e {} é um objeto/item
    // posts.map -> o .map entra no posts e faz um loop dentro dele nos itens {}, cada loop que o .map faz é armazendo na variável post. Ou seja, se tive 10 itens, vai ter 10 itens dentro da array post
    const items = posts.map(post => {
      const li = document.createElement('li');
      li.textContent = `${post.id}. ${post.title}`;
      return li;
    });

    list.replaceChildren(...items);
    message.textContent = `${posts.length} posts loaded for user ${select.value}.`;

  } catch {
    list.replaceChildren();
    message.textContent = 'Could not load the posts.';
  }
}

button.addEventListener('click', loadPost);