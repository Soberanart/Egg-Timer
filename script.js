function minimizeWindow() {
    document.querySelector('.minimize-window').style.display = 'none';
}

function closeWindow() {
    document.querySelector('.close-window').style.display = 'none';

let tempo = parseInt(localStorage.getItem('tempo'));
const display = document.getElementById('contador');

const intervalo = setInterval(() => {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  display.textContent = 
    String(minutos).padStart(2, '0') + ':' + 
    String(segundos).padStart(2, '0');

  if (tempo <= 0) {
    clearInterval(intervalo);
    location.href = 'index7.html';
  }

  tempo--;
}, 1000);