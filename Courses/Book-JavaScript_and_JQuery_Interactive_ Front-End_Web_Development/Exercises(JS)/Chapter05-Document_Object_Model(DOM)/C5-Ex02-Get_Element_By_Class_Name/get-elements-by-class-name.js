var elements = document.getElementsByClassName('hot');
console.log(elements);
console.log(elements.length);

if (elements.length > 2) {
  var el = elements[2]
  el.className = 'cool'
}