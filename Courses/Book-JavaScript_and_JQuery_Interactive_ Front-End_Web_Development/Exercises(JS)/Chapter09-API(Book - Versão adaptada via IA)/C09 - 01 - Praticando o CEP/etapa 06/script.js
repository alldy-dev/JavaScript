async function buscarCEP(cep) {
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!resposta.ok) {
            throw new Error(`Pedido recusado: ${resposta.status}`);
        }
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.log('Não consegui buscar o CEP:', erro);
    } finally {
        console.log('Terminei a busca.');
    }
}
async function testar() {
    const dados = await buscarCEP('123');
    console.log(dados);
}
testar();