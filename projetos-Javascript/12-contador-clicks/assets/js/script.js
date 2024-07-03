const contagem = document.querySelector(".contagem");
const botoes = document.querySelector("#botoes");

botoes.addEventListener("click", contador);

let valor = 0;

function contador(e) {
  const btn = e.target.id;

  switch (btn) {
    case "aumentar":
      valor++;
      break;
    case "diminuir":
      if (valor > 0) {
        valor--;
      } else {
        alert("A contagem não pode ser menor do que zero!");
      }
      break;
    case "resetar":
      valor = 0;
      break;
    default:
      break;
  }

  contagem.textContent = valor;
}
