// Selecionando elementos do DOM
const form = document.querySelector("form"); // Seleciona o formulário
const result = document.getElementById("result"); // Seleciona a div onde serão exibidos os resultados
const shortLink = document.getElementById("short-link"); // Seleciona o elemento onde o link encurtado será exibido
const longLink = document.getElementById("long-link"); // Seleciona o elemento onde o link original será exibido
const copyButton = document.getElementById("copy"); // Seleciona o botão de cópia

// Evento de envio do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Obtém a URL digitada pelo usuário
  const url = document.getElementById("url").value;
  const token = "275e7736a85610c398f88cc7765b8e82def73d32"; // Token de autenticação da API do Bitly
  const apiUrl = `https://api-ssl.bitly.com/v4/shorten`; // URL da API de encurtamento do Bitly

  // Verifica se a URL não está vazia
  if (!url) {
    alert("Por favor, insira um link válido.");
    return;
  }

  // Faz uma requisição POST para a API do Bitly para encurtar a URL
  fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`, // Envia o token de autenticação no cabeçalho
      "Content-Type": "application/json", // Especifica o tipo de conteúdo JSON
    },
    body: JSON.stringify({ long_url: url }), // Envia a URL original no corpo da requisição
  })
    .then((response) => response.json()) // Converte a resposta para JSON
    .then((data) => {
      // Quando a resposta JSON é recebida com sucesso
      longLink.innerHTML = url; // Exibe a URL original no elemento longLink
      // Cria um link encurtado formatado e o exibe no elemento shortLink
      shortLink.innerHTML = `<a href="${data.link}" target="_blank" style="text-decoration: none; color: #0236b9;">${data.link}</a>`;
    })
    .catch((error) => console.error(error)); // Trata qualquer erro ocorrido durante a requisição
});

// Evento de clique no botão de cópia
copyButton.addEventListener("click", () => {
  const range = document.createRange(); // Cria um objeto Range para selecionar o conteúdo
  range.selectNode(shortLink); // Seleciona o conteúdo do elemento shortLink
  window.getSelection().removeAllRanges(); // Remove todas as seleções existentes
  window.getSelection().addRange(range); // Adiciona a nova seleção ao Range criado
  document.execCommand("copy"); // Executa o comando de cópia

  // Feedback visual ao usuário indicando que o link foi copiado com sucesso
  copyButton.innerHTML = "Copiado!";
  copyButton.classList.add("success"); // Adiciona uma classe para estilização de sucesso

  // Após um segundo, restaura o texto e remove a classe de sucesso
  setTimeout(() => {
    copyButton.innerHTML = "Copiar";
    copyButton.classList.remove("success");
  }, 1000);
});
