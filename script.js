// Tenta pegar o elemento do timer
const timerElement = document.getElementById("timer");

if (timerElement) {
  // Pega o tempo da URL
  const urlParams = new URLSearchParams(window.location.search);
  let tempo = parseInt(urlParams.get("tempo"), 10);

  // Se for inválido, exibe erro
  if (isNaN(tempo)) {
    timerElement.textContent = "Tempo inválido!";
  } else {
    // Inicia com o tempo formatado
    atualizarDisplay(tempo);

    // Começa a contagem regressiva
    const intervalo = setInterval(() => {
      tempo--;
      atualizarDisplay(tempo);

      //Se eu desistir e quiser que acabe assim
      if (tempo <= 0) {
        clearInterval(intervalo);
        window.location.href = "index7.html";
      }
    }, 1000);
  }
  //

  // Função para atualizar o timer formatado
  function atualizarDisplay(segundos) {
    const min = String(Math.floor(segundos / 60)).padStart(2, '0');
    const sec = String(segundos % 60).padStart(2, '0');
    timerElement.textContent = `${min}:${sec}`;
  }
}
