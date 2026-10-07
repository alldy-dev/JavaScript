function checkUsername() {
  const username = el.value;
  if (username.length < 5) {
    elMsg.className = 'warning';
    elMsg.textContent = 'Not long enough, yet...';
  } else {
    elMsg.textContent = '';
  }
}

function tipUsername() {
  elMsg.className = 'tip';
  elMsg.innerHTML = 'Username must be at least 5 chracters';
}

const el = document.getElementById('username');
const elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);