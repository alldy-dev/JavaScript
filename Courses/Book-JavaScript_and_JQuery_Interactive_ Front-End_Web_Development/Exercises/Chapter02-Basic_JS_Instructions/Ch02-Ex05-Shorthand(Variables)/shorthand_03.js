var price = 5, quantity = 14;
var total = price * quantity;


// Write total into the element with id of cost
var el = window.document.getElementById('cost');
el.textContent = '$' + total;