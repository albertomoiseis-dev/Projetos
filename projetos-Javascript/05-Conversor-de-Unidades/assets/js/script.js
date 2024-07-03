// Funções de conversão
const conversionFunctions = {
  length: {
    meter: (value) => value,
    kilometer: (value) => value / 1000,
    centimeter: (value) => value * 100,
    inch: (value) => value * 0.0254,
    foot: (value) => value * 0.3048
  },
  weight: {
    gram: (value) => value,
    kilogram: (value) => value / 1000,
    ounce: (value) => value * 0.035274,
    pound: (value) => value * 0.45359237
  },
  temperature: {
    celsius: (value) => value,
    fahrenheit: (value) => (value * 9 / 5) + 32,
    kelvin: (value) => value + 273.15
  },
  volume: {
    liter: (value) => value,
    milliliter: (value) => value * 1000,
    gallon: (value) => value * 0.264172,
    fluidOunce: (value) => value * 33.814
  }
};

// Função de conversão
function convertUnits() {
  const inputValue = parseFloat(document.getElementById('input-value').value);
  const inputUnit = document.getElementById('input-unit').value;
  const outputUnit = document.getElementById('output-unit').value;

  if (isNaN(inputValue) || inputValue === 0) {
    document.getElementById('result').textContent = 'Valor inválido';
    return;
  }

  const conversionFunction = conversionFunctions[inputUnit]?.[outputUnit];
  if (typeof conversionFunction === 'function') {
    const result = conversionFunction(inputValue);
    document.getElementById('result').textContent = result.toFixed(2);
  } else {
    document.getElementById('result').textContent = 'Unidades incompatíveis';
  }
}

// Adicionar evento de clique ao botão de conversão
document.getElementById('convert-btn').addEventListener('click', convertUnits);
