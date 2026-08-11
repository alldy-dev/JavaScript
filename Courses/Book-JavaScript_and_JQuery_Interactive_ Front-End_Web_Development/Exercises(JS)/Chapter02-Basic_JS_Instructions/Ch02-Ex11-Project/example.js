var frase1 = "Montage";
frase2 = "House";
custom = frase1 + ' ' + frase2

totalTiles = 14;
subtotal = 70;
var shipping = 7;
grandtotal = 77;

var linha1 = document.getElementById('userSign')
linha1.textContent = custom

linha2 = document.getElementById('tiles');
linha2.textContent = totalTiles

linha3 = document.getElementById('subTotal')
linha3.textContent = '$ ' + subtotal

var linha4 = document.getElementById('shipping')
linha4.textContent = '$ ' + grandtotal

var linha5 = document.getElementById('grandTotal')
linha5.textContent = '$ ' + grandtotal