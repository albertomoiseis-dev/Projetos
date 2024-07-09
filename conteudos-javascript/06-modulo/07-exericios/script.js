/*

Exercício 1: Adicionar elemento ao final do array Enunciado: Declare um array frutas com os valores["maçã", "banana"].Use o método push para adicionar "laranja" ao final do array.
let frutas = ["maçã", "banana"];
frutas.push("laranja");
console.log(frutas); // ["maçã", "banana", "laranja"]


Exercício 2: Remover o último elemento do array Enunciado: Declare um array frutas com os valores["maçã", "banana", "laranja"].Use o método pop para remover o último elemento do array.
let frutas = ["maçã", "banana", "laranja"];
frutas.pop();
console.log(frutas); // ["maçã", "banana"]


Exercício 3: Adicionar elemento ao início do array Enunciado: Declare um array frutas com os valores["maçã", "banana"].Use o método unshift para adicionar "morango" ao início do array.
let frutas = ["maçã", "banana"];
frutas.unshift("morango");
console.log(frutas); // ["morango", "maçã", "banana"]


Exercício 4: Remover o primeiro elemento do array Enunciado: Declare um array frutas com os valores["maçã", "banana", "laranja"].Use o método shift para remover o primeiro elemento do array.
let frutas = ["maçã", "banana", "laranja"];
frutas.shift();
console.log(frutas); // ["banana", "laranja"]


Exercício 5: Encontrar o índice de um elemento Enunciado: Declare um array frutas com os valores["maçã", "banana", "laranja"].Use o método indexOf para encontrar o índice do elemento "banana".
let frutas = ["maçã", "banana", "laranja"];
let indice = frutas.indexOf("banana");
console.log(indice); // 1


Exercício 6: Verificar se um elemento está no array Enunciado: Declare um array frutas com os valores["maçã", "banana", "laranja"].Use o método includes para verificar se o elemento "laranja" está no array.
let frutas = ["maçã", "banana", "laranja"];
let contemLaranja = frutas.includes("laranja");
console.log(contemLaranja); // true


Exercício 7: Concatenar dois arrays Enunciado: Declare dois arrays frutas1 e frutas2 com os valores["maçã", "banana"] e["laranja", "morango"], respectivamente.Use o método concat para concatenar os dois arrays.
let frutas1 = ["maçã", "banana"];
let frutas2 = ["laranja", "morango"];
let todasFrutas = frutas1.concat(frutas2);
console.log(todasFrutas); // ["maçã", "banana", "laranja", "morango"]


Exercício 8: Juntar elementos do array em uma string Enunciado: Declare um array frutas com os valores["maçã", "banana", "laranja"].Use o método join para juntar todos os elementos em uma string, separados por vírgula.
let frutas = ["maçã", "banana", "laranja"];
let stringFrutas = frutas.join(", ");
console.log(stringFrutas); // "maçã, banana, laranja"

Exercício 9: Reverter a ordem dos elementos Enunciado: Declare um array frutas com os valores["maçã", "banana", "laranja"].Use o método reverse para reverter a ordem dos elementos no array.
let frutas = ["maçã", "banana", "laranja"];
frutas.reverse();
console.log(frutas); // ["laranja", "banana", "maçã"]


Exercício 10: Ordenar os elementos em ordem alfabética Enunciado: Declare um array frutas com os valores["maçã", "banana", "laranja"].Use o método sort para ordenar os elementos em ordem alfabética.
let frutas = ["maçã", "banana", "laranja"];
frutas.sort();
console.log(frutas); // ["banana", "laranja", "maçã"]


Exercício 11: Filtrar elementos com base em uma condição Enunciado: Declare um array numeros com os valores[1, 2, 3, 4, 5].Use o método filter para criar um novo array contendo apenas os números maiores que 2.
let numeros = [1, 2, 3, 4, 5];
let numerosMaioresQueDois = numeros.filter(numero => numero > 2);
console.log(numerosMaioresQueDois); // [3, 4, 5]


Exercício 12: Transformar elementos do array Enunciado: Declare um array numeros com os valores[1, 2, 3, 4, 5].Use o método map para criar um novo array contendo os valores dobrados.
let numeros = [1, 2, 3, 4, 5];
let numerosDobrados = numeros.map(numero => numero * 2);
console.log(numerosDobrados); // [2, 4, 6, 8, 10]


Exercício 13: Reduzir um array a um único valor Enunciado: Declare um array numeros com os valores[1, 2, 3, 4, 5].Use o método reduce para calcular a soma de todos os números no array.
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma); // 15


Exercício 14: Encontrar o primeiro elemento que satisfaça a condição Enunciado: Declare um array numeros com os valores[1, 2, 3, 4, 5].Use o método find para encontrar o primeiro número maior que 3.
let numeros = [1, 2, 3, 4, 5];
let primeiroMaiorQueTres = numeros.find(numero => numero > 3);
console.log(primeiroMaiorQueTres); // 4


Exercício 15: Verificar se todos os elementos satisfazem a condição Enunciado: Declare um array numeros com os valores[1, 2, 3, 4, 5].Use o método every para verificar se todos os números são menores que 10.
let numeros = [1, 2, 3, 4, 5];
let todosMenoresQueDez = numeros.every(numero => numero < 10);
console.log(todosMenoresQueDez); // true

Exercício 16: Verificar se pelo menos um elemento satisfaz a condição Enunciado: Declare um array numeros com os valores[1, 2, 3, 4, 5].Use o método some para verificar se pelo menos um número é maior que 4.
let numeros = [1, 2, 3, 4, 5];
let algumMaiorQueQuatro = numeros.some(numero => numero > 4);
console.log(algumMaiorQueQuatro); // true


Exercício 17: Fatiar um array Enunciado: Declare um array numeros com os valores[1, 2, 3, 4, 5].Use o método slice para criar um novo array contendo os elementos do índice 1 ao 3(não inclusive).
let numeros = [1, 2, 3, 4, 5];
let fatiado = numeros.slice(1, 3);
console.log(fatiado); // [2, 3]


Exercício 18: Remover e adicionar elementos em um array Enunciado: Declare um array numeros com os valores[1, 2, 3, 4, 5].Use o método splice para remover 2 elementos a partir do índice 1 e adicionar os números 6 e 7 no lugar.
let numeros = [1, 2, 3, 4, 5];
numeros.splice(1, 2, 6, 7);
console.log(numeros); // [1, 6, 7, 4, 5]


Exercício 19: Localizar a última ocorrência de um elemento Enunciado: Declare um array numeros com os valores[1, 2, 3, 4, 2, 5].Use o método lastIndexOf para encontrar a última ocorrência do número 2.
let numeros = [1, 2, 3, 4, 2, 5];
let ultimaOcorrencia = numeros.lastIndexOf(2);
console.log(ultimaOcorrencia); // 4

Exercício 20: Iterar sobre os elementos do array Enunciado: Declare um array numeros com os valores[1, 2, 3, 4, 5].Use o método forEach para iterar sobre o array e imprimir cada número multiplicado por 2.
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => console.log(numero * 2));
// 2, 4, 6, 8, 10


Objetos
Exercício 21: Criar um objeto Enunciado: Declare um objeto pessoa com as propriedades nome, idade e cidade.
let pessoa = {
  nome: "Alberto",
  idade: 26,
  cidade: "São Paulo"
};
console.log(pessoa); // { nome: "Alberto", idade: 26, cidade: "São Paulo" }


Exercício 22: Acessar propriedades de um objeto Enunciado: Declare um objeto carro com as propriedades marca, modelo e ano.Acesse e imprima os valores dessas propriedades.
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};
console.log(carro.marca);  // "Toyota"
console.log(carro.modelo); // "Corolla"
console.log(carro.ano);    // 2020



Exercício 23: Modificar uma propriedade de um objeto Enunciado: Declare um objeto pessoa com as propriedades nome, idade e cidade.Modifique a propriedade idade para 27.
let pessoa = {
  nome: "Alberto",
  idade: 26,
  cidade: "São Paulo"
};
pessoa.idade = 27;
console.log(pessoa.idade); // 27



Exercício 24: Adicionar uma nova propriedade a um objeto Enunciado: Declare um objeto carro com as propriedades marca e modelo.Adicione a propriedade ano com o valor 2021.
let carro = {
  marca: "Toyota",
  modelo: "Corolla"
};
carro.ano = 2021;
console.log(carro); // { marca: "Toyota", modelo: "Corolla", ano: 2021 }



Exercício 25: Remover uma propriedade de um objeto Enunciado: Declare um objeto pessoa com as propriedades nome, idade e cidade.Remova a propriedade cidade.
let pessoa = {
  nome: "Alberto",
  idade: 26,
  cidade: "São Paulo"
};
delete pessoa.cidade;
console.log(pessoa); // { nome: "Alberto", idade: 26 }



Exercício 26: Iterar sobre as propriedades de um objeto Enunciado: Declare um objeto carro com as propriedades marca, modelo e ano.Use um loop for in para iterar sobre as propriedades e imprimir o nome da propriedade e seu valor.
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};
for (let propriedade in carro) {
  console.log(`${propriedade}: ${carro[propriedade]}`);
}
// marca: Toyota
// modelo: Corolla
// ano: 2020
Todos os tipos de funções


Exercício 27: Função simples Enunciado: Declare uma função chamada saudar que aceite um argumento nome e imprima "Olá, [nome]!".
function saudar(nome) {
  console.log(`Olá, ${nome}!`);
}

saudar("Alberto"); // Olá, Alberto!

Exercício 28: Função que retorna um valor Enunciado: Declare uma função chamada somar que aceite dois argumentos a e b e retorne a soma deles.
function somar(a, b) {
  return a + b;
}
let resultado = somar(3, 4);
console.log(resultado); // 7


Exercício 29: Função anônima Enunciado: Declare uma função anônima que aceite um argumento mensagem e imprima a mensagem.Atribua essa função a uma variável chamada imprimirMensagem.
let imprimirMensagem = function (mensagem) {
  console.log(mensagem);
};
imprimirMensagem("Olá, mundo!"); // Olá, mundo!


Exercício 30: Função de seta Enunciado: Declare uma função de seta chamada multiplicar que aceite dois argumentos a e b e retorne o produto deles.
let multiplicar = (a, b) => a * b;
let resultado = multiplicar(3, 4);
console.log(resultado); // 12

Exercício 31: Função de seta com corpo Enunciado: Declare uma função de seta chamada dividir que aceite dois argumentos a e b, calcule a divisão de a por b e retorne o resultado.
let dividir = (a, b) => {
  return a / b;
};
let resultado = dividir(8, 2);
console.log(resultado); // 4


Exercício 32: Função como argumento Enunciado: Declare uma função chamada executar que aceite dois argumentos: uma função func e um valor valor.A função deve chamar func com valor como argumento.
function executar(func, valor) {
  func(valor);
}
executar(console.log, "Olá, mundo!"); // Olá, mundo!


Exercício 33: Função retornando outra função Enunciado: Declare uma função chamada criarSaudacao que aceite um argumento saudacao.A função deve retornar uma nova função que aceite um argumento nome e imprima "[saudacao], [nome]!".
function criarSaudacao(saudacao) {
  return function (nome) {
    console.log(`${saudacao}, ${nome}!`);
  };
}
let saudacaoFormal = criarSaudacao("Bom dia");
saudacaoFormal("Alberto"); // Bom dia, Alberto!


Exercício 34: Função com parâmetros padrão Enunciado: Declare uma função chamada incrementar que aceite dois argumentos numero e valor.O valor padrão para valor deve ser 1. A função deve retornar numero + valor.
function incrementar(numero, valor = 1) {
  return numero + valor;
}
let resultado = incrementar(5);
console.log(resultado); // 6
resultado = incrementar(5, 3);
console.log(resultado); // 8


Exercício 35: Função com rest parameters Enunciado: Declare uma função chamada somarTudo que aceite qualquer número de argumentos e retorne a soma de todos eles.
function somarTudo(...numeros) {
  return numeros.reduce((soma, numero) => soma + numero, 0);
}

let resultado = somarTudo(1, 2, 3, 4, 5);
console.log(resultado); // 15
Objetos com funções


Exercício 36: Método em objeto Enunciado: Declare um objeto pessoa com as propriedades nome e idade.Adicione um método saudar que imprima "Olá, [nome]!".
let pessoa = {
  nome: "Alberto",
  idade: 26,
  saudar: function () {
    console.log(`Olá, ${this.nome}!`);
  }
};
pessoa.saudar(); // Olá, Alberto!


Exercício 37: Método usando função de seta Enunciado: Declare um objeto carro com as propriedades marca e modelo.Adicione um método descricao que retorne uma string "Marca: [marca], Modelo: [modelo]".
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  descricao: function () {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
  }
};
console.log(carro.descricao()); // Marca: Toyota, Modelo: Corolla


Exercício 38: Método usando this Enunciado: Declare um objeto conta com as propriedades saldo e depositar.O método depositar deve aceitar um argumento valor e adicionar esse valor ao saldo.
let conta = {
  saldo: 1000,
  depositar: function (valor) {
    this.saldo += valor;
  }
};
conta.depositar(500);
console.log(conta.saldo); // 1500


Exercício 39: Objeto com função que usa outro método Enunciado: Declare um objeto calculadora com os métodos somar, subtrair e calcular.O método calcular deve aceitar dois números e uma string representando a operação("+" ou "-"), e deve chamar o método correspondente.
let calculadora = {
  somar: function (a, b) {
    return a + b;
  },
  subtrair: function (a, b) {
    return a - b;
  },
  calcular: function (a, b, operacao) {
    if (operacao === "+") {
      return this.somar(a, b);
    } else if (operacao === "-") {
      return this.subtrair(a, b);
    }
  }
};
console.log(calculadora.calcular(5, 3, "+")); // 8
console.log(calculadora.calcular(5, 3, "-")); // 2


Exercício 40: Método com função interna Enunciado: Declare um objeto pessoa com as propriedades nome e amigos(um array de nomes).Adicione um método saudarAmigos que use o método forEach para saudar cada amigo com "Olá, [amigo]!".
let pessoa = {
  nome: "Alberto",
  amigos: ["Bruno", "Carlos", "Daniel"],
  saudarAmigos: function () {
    this.amigos.forEach(amigo => {
      console.log(`Olá, ${amigo}!`);
    });
  }
};
pessoa.saudarAmigos();
// Olá, Bruno!
// Olá, Carlos!
// Olá, Daniel!
*/
