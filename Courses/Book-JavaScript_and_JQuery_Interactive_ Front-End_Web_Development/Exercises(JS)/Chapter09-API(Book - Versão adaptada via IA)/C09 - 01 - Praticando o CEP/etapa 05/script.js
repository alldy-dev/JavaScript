async function buscarCEP(cep) {
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const resposta = await fetch(url);
        const dados = await resposta.json();
        console.log(dados);

    //menssagemDoErro: é o parâmetro criado pelo dev, que js mostra o que ocorreu, pode ser qualquer outro nome    
    } catch(menssagemDoErro) {
        console.log(`Não consegui buscar o CEP: ${cep}. Este foi o erro: `, menssagemDoErro);
    } finally {
        console.log('Terminei a busca.');
    }
}

buscarCEP('01001000');