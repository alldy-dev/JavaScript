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

campoCEP.addEventListener('focusout', async () => {
    const cep = campoCEP.value.replace(/\D/g, '');
    limpar();
    aviso.textContent = '';

    //Etapa 8: CEP incomplento
    if (cep.length !== 8) {
        aviso.textContent = 'CEP inválido: digite 8 números.';
        return;
    }

    //Etapa 8: travar o campo
    campoCEP.disabled = true;
    aviso.textContent = 'Buscando...';

    //Etapa 8: sem internet
    try {
        const dados = await buscarCEP(cep);

        // Etapa 8: CEP que não existe
        if (dados.erro) {
            aviso.textContent = 'CEP não encontrado. Confira os números.';
            return;
        }
        
        preencher(dados);
        aviso.textContent = '';      // apaga o "Buscando..." quando deu certo
    } catch(erro) {
        aviso.textContent = 'Não consegui consultar agora, tente novamente.';
    } finally {
        campoCEP.disabled = false;
    }

});

//cep de base: 01001-000