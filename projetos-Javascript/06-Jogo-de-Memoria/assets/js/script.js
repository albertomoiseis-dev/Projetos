document.addEventListener('DOMContentLoaded', () => {
  const tabuleiro = document.querySelector('.tabuleiro-jogo');
  const simbolos = ['🍎', '🍌', '🍇', '🍓', '🍒', '🍑', '🍐', '🍋'];
  let cartasViradas = [];
  let paresCombinados = 0;

  // Embaralhar as cartas
  const embaralharCartas = () => {
    const cartasEmbaralhadas = [...simbolos, ...simbolos]
      .sort(() => Math.random() - 0.5);
    return cartasEmbaralhadas;
  };

  // Criar as cartas
  const criarCartas = () => {
    const cartasEmbaralhadas = embaralharCartas();
    cartasEmbaralhadas.forEach((simbolo) => {
      const carta = document.createElement('div');
      carta.classList.add('carta');
      carta.innerHTML = `
        <div class="frente">${simbolo}</div>
        <div class="verso">?</div>
      `;
      carta.addEventListener('click', virarCarta);
      tabuleiro.appendChild(carta);
    });
  };

  // Virar a carta
  const virarCarta = (evento) => {
    const carta = evento.target.closest('.carta');
    if (carta && !carta.classList.contains('virada')) {
      carta.classList.add('virada');
      cartasViradas.push(carta);

      if (cartasViradas.length === 2) {
        verificarCombinacao();
      }
    }
  };

  // Verificar combinação
  const verificarCombinacao = () => {
    const [carta1, carta2] = cartasViradas;
    const simbolo1 = carta1.querySelector('.frente').textContent;
    const simbolo2 = carta2.querySelector('.frente').textContent;

    if (simbolo1 === simbolo2) {
      carta1.removeEventListener('click', virarCarta);
      carta2.removeEventListener('click', virarCarta);
      paresCombinados++;
    } else {
      setTimeout(() => {
        carta1.classList.remove('virada');
        carta2.classList.remove('virada');
      }, 1000);
    }

    cartasViradas = [];

    if (paresCombinados === simbolos.length) {
      alert('Parabéns! Você venceu o jogo!');
    }
  };

  criarCartas();
});
