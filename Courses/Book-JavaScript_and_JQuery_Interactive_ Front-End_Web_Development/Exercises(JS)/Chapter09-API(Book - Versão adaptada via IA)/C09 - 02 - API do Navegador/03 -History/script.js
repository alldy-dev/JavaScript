const area = document.getElementById('conteudo');

async function carregar(url) {
    const resposta = await fetch(url);
    const texto = await resposta.text();
    const pagina = new DOMParser().parseFromString(texto, 'text/html');
    area.innerHTML = pagina.getElementById('conteudo').innerHTML;
}

document.querySelector('nav').addEventListener('click', async (evento) => {
    const link = evento.target.closest('a');
    if (!link) return;
    evento.preventDefault(); // não deixa o navegador trocar de página
    await carregar(link.href); // troca só o conteúdo
    history.pushState({ url: link.href }, '', link.href); // muda o endereço
});

// Botão "voltar" do navegador
window.addEventListener('popstate', (evento) => {
    let endereco;

    if (evento.state !== null) {
        endereco = evento.state.url;   // o endereço que o pushState guardou
    } else {
        endereco = location.href;      // o endereço atual da barra
    }

    carregar(endereco);
});