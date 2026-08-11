var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;

// Write total into the element with id of cost
var el = window.document.getElementById('cost');
el.textContent = '$' + total;