var firstItem = document.getElementById('one');

var itemContent = firstItem.innerHTML;
console.log(itemContent);

firstItem.innerHTML = '<a href="http://example.org">' + itemContent + '</a>';
