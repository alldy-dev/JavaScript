var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = window.document.getElementById('cost');
el.textContent = '$' + total;
