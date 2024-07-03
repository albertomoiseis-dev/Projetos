const inputTextArea = document.getElementById("input-textarea");
const characCount = document.getElementById("char-count");
const wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", updateCounts);

function updateCounts() {
  const text = inputTextArea.value.trim();

  // Contagem de caracteres
  characCount.textContent = text.length;

  // Contagem de palavras
  const words = text.split(/\s+/).filter(item => item !== '');
  wordCount.textContent = words.length;
}
