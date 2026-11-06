const campoCEP = document.getElementById('cep');
const campoRua = document.getElementById('rua');
const campoBairro = document.getElementById('bairro');
const campoCidade = document.getElementById('cidade');
const campoEstado = document.getElementById('estado');
const aviso = document.getElementById('aviso');

async function buscarCEP(cep) {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    if (!resposta.ok) {
        console.log(resposta.status)
        throw new Error(`Pedido recusado: ${resposta.status}`);
    } else {
        console.log(resposta.status);
    }
    return await resposta.json();
}

function preencher(dados) {
    campoRua.value = dados.logradouro;
    campoBairro.value = dados.bairro;
    campoCidade.value = dados.localidade;
    campoEstado.value = dados.uf;
}

function limpar() {
    campoRua.value = campoBairro.value = campoCidade.value = campoEstado.value = '';
}
