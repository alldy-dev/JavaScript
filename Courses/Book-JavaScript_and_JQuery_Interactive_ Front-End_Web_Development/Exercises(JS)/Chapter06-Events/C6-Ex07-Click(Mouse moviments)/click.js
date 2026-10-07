const msg = `
    <div class = "header">
      <a id = "close" href="#"> close X</a>
    </div>
    <div>
      <h2>System Maintance</2>
      Our servers are being updated between 3 and 4 a.m.
      During this time, there may be minor disruptions to service.</div>
`

const elNote = document.createElement('div');
elNote.id = 'note';
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dismissNote() {
    document.body.removeChild(elNote);
}
const elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);