//Parte I
//primeiro elemento criado
var priEl = document.createElement('li');
var priTexto = document.createTextNode('cream');
priEl.appendChild(priTexto);

//segundo elemento criado
var segEl = document.createElement('li');
var segTexto = document.createTextNode('último da lista');
segEl.appendChild(segTexto);

//primero elemento UL selecionado
var pri_Ul = document.querySelector('ul');

pri_Ul.insertBefore(priEl, pri_Ul.firstChild); //inserido como o primeiro filho do ul
pri_Ul.appendChild(segEl) //inserido como último filho do ul


//Parte II
for  (i = 0; i < pri_Ul.children.length; i++) {
    console.log(pri_Ul.children[i].textContent);
}

for  (i = 0; i < pri_Ul.children.length; i++) {
    pri_Ul.children[i].setAttribute('class', 'cool');
}

//Parte III
//III.1 - pegar o conteúdo do primeiro h2
var h2 = document.querySelectorAll('h2')[0];
console.log(h2);

var h2_texto = h2.innerHTML
console.log(h2_texto);


//III.2 - Contar todos os li da página
var qtd_Todos_Li = document.querySelectorAll('li').length;
console.log(qtd_Todos_Li);

//III.3 e III.4- Adicionar a qtd total de li no h2
h2.innerHTML = h2_texto + "<span>" + qtd_Todos_Li + "</span>"
