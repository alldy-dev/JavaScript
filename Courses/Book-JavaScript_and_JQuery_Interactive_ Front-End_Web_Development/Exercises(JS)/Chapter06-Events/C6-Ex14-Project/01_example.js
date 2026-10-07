//Solution I
 
//Part I - for keyup
const textBox = window.document.getElementById('noteInput');
const h2Note = window.document.getElementById('noteName')
//Part II - for click
const clickRecordStop = window.document.querySelector('[data-state]');

function writeLabel() {
 const textChanging = textBox.value; 
 h2Note.textContent = textChanging
}

//Part I - for keyup
textBox.addEventListener('keyup', writeLabel, false);

//Part II - for click
clickRecordStop.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o link de recarregar a página
    
    if (clickRecordStop.dataset.state ==='record') {
        clickRecordStop.dataset.state = 'stop';
    } else {
        clickRecordStop.dataset.state = 'record';
    }
})
