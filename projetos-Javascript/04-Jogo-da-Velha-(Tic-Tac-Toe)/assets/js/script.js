// Seleciona todas as células do jogo
const celulas = document.querySelectorAll('.cell');
// Seleciona o elemento de texto que exibe o status do jogo
const textoStatus = document.querySelector('.status p');
// Seleciona o botão de reinício do jogo
const botaoReiniciar = document.querySelector('.restart-btn');

// Variável que armazena o jogador atual (X ou O)
let jogadorAtual = 'X';
// Variável que indica se o jogo está ativo
let jogoAtivo = true;
// Vetor que armazena o estado atual do jogo (vazio, X ou O)
let estadoJogo = ['', '', '', '', '', '', '', '', ''];

// Função que é chamada quando uma célula é clicada
function jogadaRealizada(celulaSelecionada, indiceCelula) {
  // Atualiza o estado do jogo com a jogada do jogador atual
  estadoJogo[indiceCelula] = jogadorAtual;
  // Adiciona a classe correspondente ao jogador atual na célula clicada
  celulaSelecionada.classList.add(jogadorAtual.toLowerCase());
}

// Função que alterna o jogador atual
function alternarJogador() {
  jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
  textoStatus.textContent = `Vez do jogador ${jogadorAtual}`;
}

// Função que verifica se houve um vencedor ou empate
function validarResultado() {
  let vencedor = false;
  // Condições de vitória
  const condicoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Verifica se há um vencedor
  for (let i = 0; i < condicoesVitoria.length; i++) {
    const [a, b, c] = condicoesVitoria[i];
    if (estadoJogo[a] && estadoJogo[a] === estadoJogo[b] && estadoJogo[a] === estadoJogo[c]) {
      vencedor = true;
      break;
    }
  }

  // Se houver um vencedor, exibe o resultado
  if (vencedor) {
    textoStatus.textContent = `O jogador ${jogadorAtual} venceu!`;
    jogoAtivo = false;
    return;
  }

  // Verifica se houve empate
  if (!estadoJogo.includes('')) {
    textoStatus.textContent = "Empate!";
    jogoAtivo = false;
    return;
  }

  // Alterna o jogador atual
  alternarJogador();
}

// Função que é chamada quando uma célula é clicada
function cliqueCelula(evento) {
  const celulaSelecionada = evento.target;
  const indiceCelula = [...celulas].indexOf(celulaSelecionada);

  // Verifica se a célula já foi preenchida ou se o jogo não está ativo
  if (estadoJogo[indiceCelula] !== '' || !jogoAtivo) {
    return;
  }

  // Realiza a jogada e verifica o resultado
  jogadaRealizada(celulaSelecionada, indiceCelula);
  validarResultado();
}

// Função que reinicia o jogo
function reiniciarJogo() {
  jogoAtivo = true;
  jogadorAtual = 'X';
  estadoJogo = ['', '', '', '', '', '', '', '', ''];
  textoStatus.textContent = `Vez do jogador ${jogadorAtual}`;
  celulas.forEach(celula => {
    celula.classList.remove('x', 'o');
  });
}

// Adiciona os event listeners para as células e o botão de reinício
celulas.forEach(celula => celula.addEventListener('click', cliqueCelula));
botaoReiniciar.addEventListener('click', reiniciarJogo);