var removeEl = document.getElementsByTagName('li')[3];
console.log(removeEl);

var containerEl = removeEl.parentNode;
console.log(containerEl);

containerEl.removeChild(removeEl);