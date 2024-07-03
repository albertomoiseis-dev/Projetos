// Seleciona o container de imagens e todas as imagens
const containerImagens = document.querySelector('.container-imagens');
const imagens = document.querySelectorAll('.container-imagens img');

// Seleciona os botões anterior e próximo
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');

// Inicializa o índice da imagem atual
let indiceAtual = 0;

// Função para ir para uma imagem específica
function irParaImagem(indice) {
  imagens.forEach((imagem, index) => {
    if (index === indice) {
      imagem.classList.add('ativa');
    } else {
      imagem.classList.remove('ativa');
    }
  });
  indiceAtual = indice;
}

// Adiciona evento de clique ao botão anterior
btnAnterior.addEventListener('click', () => {
  if (indiceAtual > 0) {
    irParaImagem(indiceAtual - 1);
  }
});

// Adiciona evento de clique ao botão próximo
btnProximo.addEventListener('click', () => {
  if (indiceAtual < imagens.length - 1) {
    irParaImagem(indiceAtual + 1);
  }
});

// Inicializa o ID do intervalo do slideshow
let idIntervalo;

// Função para iniciar o slideshow automático
function iniciarSlideshow() {
  idIntervalo = setInterval(() => {
    if (indiceAtual < imagens.length - 1) {
      irParaImagem(indiceAtual + 1);
    } else {
      irParaImagem(0);
    }
  }, 5000);
}

// Inicia o slideshow automático
iniciarSlideshow();

// Adiciona evento de mouse enter para pausar o slideshow
containerImagens.addEventListener('mouseenter', () => {
  clearInterval(idIntervalo);
});

// Adiciona evento de mouse leave para retomar o slideshow
containerImagens.addEventListener('mouseleave', () => {
  iniciarSlideshow();
});
