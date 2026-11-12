//Documentação de base: https://viacep.com.br/

const uf = document.getElementById('uf');
const cidade = document.getElementById('cidade');
const rua = document.getElementById('rua');
const botao = document.querySelector('button');
const aviso = document.getElementById('aviso');
const resultados = document.getElementById('resultados');
const ultima = document.getElementById('ultima');
const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
    'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
    'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

function checarCampos() {
    //if inteligente três campos campos
    if (uf.value === '' && cidade.value === '' && rua.value === '') {
        aviso.innerHTML = `
            <ul>
                <li>Preencha o campo UF</li>
                <li>Preencha o campo Cidade</li>
                <li>Preencha o campo Rua</li>
            </ul>
        `
        return false;
    }

    //if inteligente dois campos
    if (uf.value === '' && cidade.value === '') {
        aviso.innerHTML = `
            <ul>
                <li>Preencha o campo UF</li>
                <li>Preencha o campo Cidade</li>
            </ul>
        `
        return false;
    } else if (uf.value === '' && rua.value === '') {
        aviso.innerHTML = `
            <ul>
                <li>Preencha o campo UF</li>
                <li>Preencha o campo Rua</li>
            </ul>
        `
        return false;
    } else if (cidade.value === '' && rua.value === '') {
        aviso.innerHTML = `
            <ul>
                <li>Preencha o campo Cidade</li>
                <li>Preencha o campo Rua</li>
            </ul>
        `
        return false;
    } else if ((cidade.value !== '' && rua.value !== '') && (cidade.value.length < 3 && rua.value.length < 3)) {
        aviso.innerHTML = `
            <ul>
                <li>Campo Cidade é necessário ter mais de dois caracteres</li>
                <li>Campo Rua é necessário ter mais de dois caracteres</li>
            </ul>
        `
        return false;
    }

    //if inteligente para UF, cidade e rua
    //UF
    if (uf.value === '') {
        aviso.textContent = "Preencha o campo UF";
        return false;
    } else if (!estados.includes(uf.value.toUpperCase())) {
        aviso.textContent = 'UF inválida. Exemplo: PA';
        return false;
        //Cidade
    } else if (cidade.value === '') {
        aviso.textContent = "Preencha o campo Cidade";
        return false;
    } else if (cidade.value.length < 3) {
        aviso.textContent = "Campo Cidade é necessário ter mais de dois caracteres";
        return false;
        //Rua
    } else if (rua.value === '') {
        aviso.textContent = "Preencha o campo Rua";
        return false;
    } else if (rua.value.length < 3) {
        aviso.textContent = "Campo Rua é necessário ter mais de dois caracteres";
        return false;
    }
    //Se todos os campos estiverem preenchido retornar true pra função procurarCEP()
    return true;
}


//Função pra checar o código do status da resposta
function qualStatus(status) {
    if (status >= 200 && status <= 299) {
        console.log(`✅Código: ${status}✅. Deu certo`);
    } else if (status >= 300 && status <= 399) {
        console.log(`🔁Código: ${status}🔁. Redirecionamento`);
    } else if (status >= 400 && status <= 499) {
        console.log(`❌Código: ${status}❌. Erro no pedido (do lado de quem pediu)`);
    } else if (status >= 500 && status <= 599) {
        console.log(`🚫Código: ${status}🚫. Erro no servidor`);
    } else {
        console.log(`⚠️Código: ${status}⚠️. Status desconhecido`);
    }
}


//função para pegar o resultado
async function procurarCEP(evento) {
    evento.preventDefault();
    //limpar
    aviso.textContent = ""
    resultados.innerHTML = ""

    //Checa se o checarCampos() retornou verdadeiro ou falso
    if (!checarCampos()) {
        return false;
    }

    const url = `https://viacep.com.br/ws/${uf.value}/${encodeURIComponent(cidade.value)}/${encodeURIComponent(rua.value)}/json/`;

    try {
        const resposta = await fetch(url);

        //Checar o staus de resposta
        qualStatus(resposta.status);
        if (!resposta.ok) {
            aviso.textContent = `Código: ${resposta.status}. Não foi possível consultar. Confira os dados digitados ou tente novamente mais tarde.`;
            return;
        }

        //Abrindo o pacote, momento em que transforma de String para lista objeto
        const dados = await resposta.json();
        console.log(dados);

        if (dados.length === 0) {
            aviso.textContent = "Nenhum endereço encontrado";
        } else {
            const htmlDoLoop = dados.map(loop =>
                `
            <li>${loop.logradouro} - ${loop.bairro} - (${loop.cep})</li>
            `
            ).join('');
            resultados.innerHTML = htmlDoLoop;

            localStorage.setItem('uf', uf.value);
            localStorage.setItem('cidade', cidade.value);
            localStorage.setItem('rua', rua.value);

            pegarNoLocalStorage();
        }
    } catch (erro) {
        console.log(erro);
        aviso.textContent = "Não consegui consultar agora, tente novamente.";
    }
}

function pegarNoLocalStorage() {
    const cofre_Uf = localStorage.getItem('uf');
    const cofre_Cidade = localStorage.getItem('cidade');
    const cofre_Rua = localStorage.getItem('rua');

    if (cofre_Uf !== null && cofre_Cidade !== null && cofre_Rua !== null) {
        ultima.innerHTML = `
    <p>${cofre_Uf}</p>
    <p>${cofre_Cidade}</p>
    <p>${cofre_Rua}</p>
`
    } else {
        ultima.innerHTML = ""
    }
}

botao.addEventListener('click', procurarCEP);
pegarNoLocalStorage();



