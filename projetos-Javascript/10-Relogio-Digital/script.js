// Função para obter a hora atual no formato desejado (12 ou 24 horas)
function getTimeString(hours24) {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  if (!hours24) {
    const period = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes}:${seconds} ${period}`;
  } else {
    return `${hours}:${minutes}:${seconds}`;
  }
}

// Função para atualizar o relógio a cada segundo
function updateClock() {
  const clock = document.querySelector('.clock');
  const toggleFormatBtn = document.getElementById('toggleFormat');
  let hours24 = true; // Inicialmente, formato de 24 horas

  function tick() {
    const timeString = getTimeString(hours24);
    clock.textContent = timeString;
  }

  // Atualizar a cada segundo
  tick();
  setInterval(tick, 1000);

  // Alternar entre 12 e 24 horas
  toggleFormatBtn.addEventListener('click', function () {
    hours24 = !hours24;
    const timeString = getTimeString(hours24);
    clock.textContent = timeString;
  });
}

// Iniciar o relógio ao carregar a página
updateClock();
