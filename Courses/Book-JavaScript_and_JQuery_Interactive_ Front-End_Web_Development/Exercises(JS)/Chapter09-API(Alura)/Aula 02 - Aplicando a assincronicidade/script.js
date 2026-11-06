var consultaCEP = fetch('https://viacep.com.br/ws/0100100/json/')   // etapa 1: busca os dados, está em formato json, e trás pro .js
  .then(resposta => resposta.json())               // etapa 2: transforma de formato json para objeto
  .then(r => console.log(r))
  .catch(erro => console.log(erro));                      // etapa 3: mostra o conteúdo
console.log(consultaCEP);

