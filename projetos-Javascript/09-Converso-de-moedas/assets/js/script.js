document.addEventListener('DOMContentLoaded', () => {
  const inputValor = document.getElementById('amount');
  const selectMoedaOrigem = document.getElementById('fromCurrency');
  const selectMoedaDestino = document.getElementById('toCurrency');
  const resultadoDiv = document.getElementById('result');
  const botaoConverter = document.getElementById('convertButton');

  const chaveAPI = 'SUA_API_KEY_AQUI'; // Substitua pela sua chave de API
  const urlAPI = `https://api.exchangerate-api.com/v4/latest/`;

  // Função para preencher as opções de moedas
  function preencherOpcoesMoeda(data) {
      const moedas = Object.keys(data.rates);
      moedas.forEach(moeda => {
          const opcao = document.createElement('option');
          opcao.value = moeda;
          opcao.textContent = moeda;
          selectMoedaOrigem.appendChild(opcao.cloneNode(true));
          selectMoedaDestino.appendChild(opcao.cloneNode(true));
      });
  }

  // Função para buscar as taxas de câmbio
  async function buscarTaxasCambio() {
      try {
          const resposta = await fetch(urlAPI + 'USD'); // Base inicial em USD
          const data = await resposta.json();
          preencherOpcoesMoeda(data);
      } catch (error) {
          resultadoDiv.textContent = 'Erro ao carregar as taxas de câmbio. Tente novamente mais tarde.';
      }
  }

  // Função para converter moeda
  async function converterMoeda() {
      const valor = parseFloat(inputValor.value);
      const moedaOrigem = selectMoedaOrigem.value;
      const moedaDestino = selectMoedaDestino.value;

      if (isNaN(valor) || valor <= 0) {
          resultadoDiv.textContent = 'Por favor, insira um valor válido.';
          return;
      }

      try {
          const resposta = await fetch(urlAPI + moedaOrigem);
          const data = await resposta.json();
          const taxa = data.rates[moedaDestino];
          const valorConvertido = (valor * taxa).toFixed(2);
          resultadoDiv.textContent = `${valor} ${moedaOrigem} = ${valorConvertido} ${moedaDestino}`;
      } catch (error) {
          resultadoDiv.textContent = 'Erro ao realizar a conversão. Tente novamente mais tarde.';
      }
  }

  // Adiciona o evento de clique ao botão de conversão
  botaoConverter.addEventListener('click', converterMoeda);

  // Carrega as taxas de câmbio ao iniciar a aplicação
  buscarTaxasCambio();
});
