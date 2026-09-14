var itemTwo = document.getElementById('two');

var elText = itemTwo.firstChild.nodeValue;
console.log(elText);

elText = elText.replace('pine nuts', 'kale');

itemTwo.firstChild.nodeValue = elText;