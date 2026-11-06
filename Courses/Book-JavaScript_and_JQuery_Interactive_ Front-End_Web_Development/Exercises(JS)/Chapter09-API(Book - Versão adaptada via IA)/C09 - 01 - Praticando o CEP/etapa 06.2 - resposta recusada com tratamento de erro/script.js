async function buscarCEP(cep) {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!resposta.ok) {
        throw new Error(`Pedido recusado: ${resposta.status}`);
    }
    return await resposta.json();
}
async function testar() {
    try {
        const dados = await buscarCEP('123');
        console.log(dados);
    } catch (erro) {
        console.log('Não consegui buscar o CEP:', erro);
    } finally {
        console.log('Terminei a busca.');
    }
}
testar();