// Seleciona todos os botões da calculadora
const botoes = document.querySelectorAll('.btn');

// Seleciona o display da calculadora
const display = document.getElementById('exibirDisplay');

// Variáveis para armazenar os valores e a operação atual
let valorAtual = '0';
let valorAnterior = null;
let operacaoAtual = null;

// Função para atualizar o display da calculadora
function atualizarDisplay() {
  display.value = valorAtual;
}

// Função para limpar o display da calculadora
function limparDisplay() {
  valorAtual = '0';
  valorAnterior = null;
  operacaoAtual = null;
  atualizarDisplay();
}

// Função para remover o último dígito do display
function deletarUltimoDigito() {
  valorAtual = valorAtual.slice(0, -1);
  if (valorAtual === '') {
    valorAtual = '0';
  }
  atualizarDisplay();
}

// Função para adicionar um dígito ao display
function adicionarDigito(digito) {
  if (valorAtual === '0') {
    valorAtual = digito;
  } else {
    valorAtual += digito;
  }
  atualizarDisplay();
}

// Função para realizar uma operação aritmética
function realizarOperacao(operacao) {
  if (operacaoAtual !== null) {
    // Realiza a operação atual
    switch (operacaoAtual) {
      case '+':
        valorAtual = (parseFloat(valorAnterior) + parseFloat(valorAtual)).toString();
        break;
      case '-':
        valorAtual = (parseFloat(valorAnterior) - parseFloat(valorAtual)).toString();
        break;
      case '*':
        valorAtual = (parseFloat(valorAnterior) * parseFloat(valorAtual)).toString();
        break;
      case '/':
        valorAtual = (parseFloat(valorAnterior) / parseFloat(valorAtual)).toString();
        break;
    }
    atualizarDisplay();
  }

  // Armazena o valor atual como o valor anterior e a nova operação
  valorAnterior = valorAtual;
  operacaoAtual = operacao;
  valorAtual = '0';
}

// Função para calcular o resultado final
function calcularResultado() {
  if (operacaoAtual !== null) {
    realizarOperacao(operacaoAtual);
    operacaoAtual = null;
    valorAnterior = null;
  }
}

// Adiciona os event listeners aos botões da calculadora
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const acao = botao.id;

    switch (acao) {
      case 'limpar':
        limparDisplay();
        break;
      case 'deletar':
        deletarUltimoDigito();
        break;
      case 'dividir':
      case 'multiplicar':
      case 'subtrair':
      case 'adicionar':
        realizarOperacao(acao);
        break;
      case 'igual':
        calcularResultado();
        break;
      case 'decimal':
        if (!valorAtual.includes('.')) {
          adicionarDigito('.');
        }
        break;
      default:
        adicionarDigito(acao);
        break;
    }
  });
});