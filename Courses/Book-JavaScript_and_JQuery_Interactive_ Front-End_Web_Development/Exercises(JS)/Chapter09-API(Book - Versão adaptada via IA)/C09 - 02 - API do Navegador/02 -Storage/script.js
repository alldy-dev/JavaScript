const botao = document.getElementById('trocar');
function aplicar(tema) {
    document.body.dataset.tema = tema;
}

// Ao abrir a página, lê o que ficou guardado (ou usa 'claro')
let temaGuardado = localStorage.getItem('tema');

if (temaGuardado === null) {
    temaGuardado = 'claro';
}

aplicar(temaGuardado);

botao.addEventListener('click', () => {
    let novo;

    if (document.body.dataset.tema === 'escuro') {
        novo = 'claro';
    } else {
        novo = 'escuro';
    }

    aplicar(novo);
    localStorage.setItem('tema', novo); // guarda a escolha
});