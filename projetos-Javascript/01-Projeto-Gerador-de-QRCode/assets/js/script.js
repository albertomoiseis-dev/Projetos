// Obter referências aos elementos HTML necessários
const inputText = document.getElementById('input-text');
const generateBtn = document.getElementById('generate-btn');
const qrCodeContainer = document.getElementById('qr-code-container');

// Adicionar um evento de clique ao botão de geração
generateBtn.addEventListener('click', () => {
  // Obter o texto digitado pelo usuário
  const text = inputText.value.trim();

  // Verificar se o texto está vazio
  if (text === '') {
    alert('Por favor, digite um texto ou URL válido.');
    return;
  }

  // Gerar o QR Code
  generateQRCode(text);
});

// Função para gerar o QR Code
function generateQRCode(text) {
  // Limpar o container do QR Code
  qrCodeContainer.innerHTML = '';

  // Criar uma instância do QRCode usando a biblioteca qrcode.js
  const qrcode = new QRCode(qrCodeContainer, {
    text: text,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
}

// Carregar a biblioteca qrcode.js
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
script.onload = () => {
  console.log('Biblioteca qrcode.js carregada com sucesso!');
};
document.body.appendChild(script);