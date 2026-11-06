const mensagem = document.getElementById('mensagem');

function pegarPosicao() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

async function mostrar() {
    if (!('geolocation' in navigator)) {
        mensagem.textContent = 'Este navegador não tem geolocalização.';
        return
    }
    try {
        const posicao = await pegarPosicao();
        const { latitude, longitude} = posicao.coords;
        mensagem.textContent = `Latitude ${latitude.toFixed(4)}, longitude ${longitude.toFixed(4)}`
    } catch(erro) {
        const textos = {1: 'Você negou a permissão.', 2: 'Posição indisponível.', 3: 'Tempo esgotado.'};
        mensagem.textContent = textos[erro.code] ?? 'Erro desconhecido';
    }
}

document.getElementById('botao').addEventListener('click', mostrar);