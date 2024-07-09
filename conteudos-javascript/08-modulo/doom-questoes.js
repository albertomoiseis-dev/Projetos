/* 


Operações básicas em variáveis
Exercício 1: Atribuição de Variáveis Enunciado: Declare uma variável a com o valor 10 e uma variável b com o valor 20. Troque os valores de a e b.
let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;
console.log(a); // 20
console.log(b); // 10



Exercício 2: Soma de Variáveis Enunciado: Declare duas variáveis a e b com valores 5 e 8, respectivamente. Calcule a soma dessas variáveis e armazene o resultado em uma variável soma.
let a = 5;
let b = 8;
let soma = a + b;
console.log(soma); // 13



Exercício 3: Subtração de Variáveis Enunciado: Declare duas variáveis a e b com valores 15 e 5, respectivamente. Calcule a subtração dessas variáveis e armazene o resultado em uma variável diferenca.
let a = 15;
let b = 5;
let diferenca = a - b;
console.log(diferenca); // 10



Exercício 4: Multiplicação de Variáveis Enunciado: Declare duas variáveis a e b com valores 4 e 7, respectivamente. Calcule a multiplicação dessas variáveis e armazene o resultado em uma variável produto.
let a = 4;
let b = 7;
let produto = a * b;
console.log(produto); // 28



Exercício 5: Divisão de Variáveis Enunciado: Declare duas variáveis a e b com valores 20 e 4, respectivamente. Calcule a divisão dessas variáveis e armazene o resultado em uma variável quociente.
let a = 20;
let b = 4;
let quociente = a / b;
console.log(quociente); // 5
Switch


Exercício 6: Dia da Semana Enunciado: Declare uma variável dia com um valor de 1 a 7 representando os dias da semana (1 para domingo, 2 para segunda-feira, etc.). Use uma estrutura switch para imprimir o nome do dia da semana correspondente.
let dia = 3;
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}


While
Exercício 7: Contagem Regressiva Enunciado: Use um loop while para contar de 10 até 1 e imprimir cada número.
let contador = 10;
while (contador > 0) {
  console.log(contador);
  contador--;
}


Exercício 8: Soma de Números Enunciado: Use um loop while para somar todos os números de 1 a 10 e imprimir o resultado.

let contador = 1;
let soma = 0;
while (contador <= 10) {
  soma += contador;
  contador++;
}
console.log(soma); // 55

Do While


Exercício 9: Número Aleatório Enunciado: Use um loop do while para gerar e imprimir números aleatórios entre 1 e 10 até que o número 5 seja gerado.
Resolução:
javascript
Copiar código
let numero;
do {
  numero = Math.floor(Math.random() * 10) + 1;
  console.log(numero);
} while (numero !== 5);


For
Exercício 10: Números Pares Enunciado: Use um loop for para imprimir todos os números pares de 1 a 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

Exercício 11: Fatorial Enunciado: Use um loop for para calcular o fatorial de um número n (por exemplo, 5!) e imprimir o resultado.
let n = 5;
let fatorial = 1;
for (let i = 1; i <= n; i++) {
  fatorial *= i;
}
console.log(fatorial); // 120


For of
Exercício 12: Iterar Sobre Array Enunciado: Use um loop for of para iterar sobre um array de números e imprimir cada número.

let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  console.log(numero);
}


For in
Exercício 13: Iterar Sobre Objeto Enunciado: Use um loop for in para iterar sobre as propriedades de um objeto pessoa e imprimir cada propriedade e seu valor.
let pessoa = {
  nome: "Alberto",
  idade: 26,
  cidade: "São Paulo"
};
for (let propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}


Percorrendo Array
Exercício 14: Somar Elementos do Array Enunciado: Declare um array de números. Use um loop for para somar todos os elementos do array e imprimir o resultado.
let numeros = [1, 2, 3, 4, 5];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log(soma); // 15



Exercício 15: Média dos Elementos do Array Enunciado: Declare um array de números. Use um loop for para calcular a média dos elementos do array e imprimir o resultado.
let numeros = [1, 2, 3, 4, 5];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
let media = soma / numeros.length;
console.log(media); // 3


Percorrendo Objetos
Exercício 16: Valores das Propriedades Enunciado: Declare um objeto pessoa com propriedades nome, idade e cidade. Use um loop for in para imprimir apenas os valores das propriedades.
let pessoa = {
  nome: "Alberto",
  idade: 26,
  cidade: "São Paulo"
};

for (let propriedade in pessoa) {
  console.log(pessoa[propriedade]);
}


Exercício 17: Chaves das Propriedades Enunciado: Declare um objeto carro com propriedades marca, modelo e ano. Use um loop for in para imprimir apenas as chaves das propriedades.
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};
for (let propriedade in carro) {
  console.log(propriedade);
}


Outros Exercícios
Exercício 18: Múltiplos de 3 Enunciado: Use um loop for para imprimir todos os múltiplos de 3 de 1 a 30.
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


Exercício 19: Números Ímpares Enunciado: Use um loop while para imprimir todos os números ímpares de 1 a 20.
let i = 1;
while (i <= 20) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}



Exercício 20: Tabuada de Multiplicação Enunciado: Use um loop for para imprimir a tabuada de multiplicação do número 5.
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}


Exercício 21: Números Divisíveis por 4 Enunciado: Use um loop do while para imprimir todos os números de 1 a 50 que são divisíveis por 4.
let i = 1;
do {
  if (i % 4 === 0) {
    console.log(i);
  }
  i++;
} while (i <= 50);


Exercício 22: Produto dos Elementos do Array Enunciado: Declare um array de números. Use um loop for of para calcular o produto de todos os elementos do array e imprimir o resultado.
let numeros = [1, 2, 3, 4, 5];
let produto = 1;
for (let numero of numeros) {
  produto *= numero;
}
console.log(produto); // 120


Exercício 23: Propriedades e Valores do Objeto Enunciado: Declare um objeto pessoa com propriedades nome, idade e cidade. Use um loop for in para imprimir cada chave e valor das propriedades.
let pessoa = {
  nome: "Alberto",
  idade: 26,
  cidade: "São Paulo"
};

for (let propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}



Exercício 24: Verificar Paridade Enunciado: Declare uma variável numero com um valor qualquer. Use uma estrutura switch para verificar se o número é par ou ímpar e imprimir o resultado.
let numero = 4;
switch (numero % 2) {
  case 0:
    console.log("Par");
    break;
  case 1:
    console.log("Ímpar");
    break;
  default:
    console.log("Número inválido");
}


Exercício 25: Fatorial com While Enunciado: Use um loop while para calcular o fatorial de um número n (por exemplo, 5!) e imprimir o resultado.
let n = 5;
let fatorial = 1;
let i = 1;
while (i <= n) {
  fatorial *= i;
  i++;
}
console.log(fatorial); // 120


Exercício 26: Quadrados dos Números Enunciado: Use um loop for para imprimir o quadrado dos números de 1 a 10.
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}


Exercício 27: Divisores de um Número Enunciado: Declare uma variável numero com um valor qualquer. Use um loop for para encontrar e imprimir todos os divisores desse número.
let numero = 12;
for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log(i);
  }
}


Exercício 28: Média dos Elementos do Array Enunciado: Declare um array de números. Use um loop for para calcular a média dos elementos do array e imprimir o resultado.
let numeros = [1, 2, 3, 4, 5];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
let media = soma / numeros.length;
console.log(media); // 3



Exercício 29: Contar Caracteres em String Enunciado: Declare uma string. Use um loop for para contar quantas vezes um caractere específico aparece na string e imprimir o resultado.
let texto = "hello world";
let caractere = "o";
let contador = 0;
for (let i = 0; i < texto.length; i++) {
  if (texto[i] === caractere) {
    contador++;
  }
}
console.log(contador); // 2


Exercício 30: Números Pares em Array Enunciado: Declare um array de números. Use um loop for of para encontrar e imprimir todos os números pares no array.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let numero of numeros) {
  if (numero % 2 === 0) {
    console.log(numero);
  }
}
Exercício 31: Verificar Elemento em Array Enunciado: Declare um array de strings. Use um loop for of para verificar se uma string específica está presente no array e imprimir uma mensagem apropriada.
let frutas = ["maçã", "banana", "laranja", "uva"];
let frutaProcurada = "laranja";
let encontrada = false;
for (let fruta of frutas) {
  if (fruta === frutaProcurada) {
    encontrada = true;
    break;
  }
}
console.log(encontrada ? "Fruta encontrada" : "Fruta não encontrada");


Exercício 32: Soma dos Números Pares Enunciado: Use um loop while para somar todos os números pares de 1 a 100 e imprimir o resultado.
let soma = 0;
let i = 1;
while (i <= 100) {
  if (i % 2 === 0) {
    soma += i;
  }
  i++;
}
console.log(soma); // 2550


Exercício 33: Contar Números Positivos em Array Enunciado: Declare um array de números. Use um loop for para contar quantos números positivos existem no array e imprimir o resultado.
let numeros = [-2, 3, 5, -1, -4, 8, 10];
let contador = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) {
    contador++;
  }
}
console.log(contador); // 4


Exercício 34: Número de Dígitos de um Número Enunciado: Declare uma variável numero com um valor qualquer. Use um loop while para contar o número de dígitos desse número e imprimir o resultado.
let numero = 12345;
let contador = 0;
while (numero !== 0) {
  numero = Math.floor(numero / 10);
  contador++;
}
console.log(contador); // 5


Exercício 35: Verificar Palíndromo Enunciado: Declare uma string. Use um loop for para verificar se a string é um palíndromo (lê-se da mesma forma de trás para frente) e imprimir uma mensagem apropriada.
let palavra = "arara";
let palindromo = true;
for (let i = 0; i < palavra.length / 2; i++) {
  if (palavra[i] !== palavra[palavra.length - 1 - i]) {
    palindromo = false;
    break;
  }
}
console.log(palindromo ? "É um palíndromo" : "Não é um palíndromo");


Exercício 36: Converter Array para String Enunciado: Declare um array de strings. Use um loop for para concatenar todos os elementos do array em uma única string, separada por espaços, e imprimir o resultado.
let palavras = ["Olá", "mundo", "JavaScript", "é", "legal"];
let frase = "";
for (let i = 0; i < palavras.length; i++) {
  frase += palavras[i] + " ";
}
console.log(frase.trim()); // "Olá mundo JavaScript é legal"


Exercício 37: Encontrar Elemento Máximo no Array Enunciado: Declare um array de números. Use um loop for para encontrar e imprimir o maior elemento no array.
let numeros = [10, 5, 8, 3, 7, 9];
let maximo = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maximo) {
    maximo = numeros[i];
  }
}
console.log(maximo); // 10


Exercício 38: Inverter String Enunciado: Declare uma string. Use um loop for para inverter a string e imprimir o resultado.
let texto = "JavaScript";
let invertido = "";
for (let i = texto.length - 1; i >= 0; i--) {
  invertido += texto[i];
}
console.log(invertido); // "tpircSavaJ"


Exercício 39: Remover Elemento de Array Enunciado: Declare um array de números. Use um loop for para remover todas as ocorrências de um número específico do array e imprimir o resultado.
let numeros = [1, 2, 3, 4, 3, 5, 3];
let numeroParaRemover = 3;
let novoArray = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] !== numeroParaRemover) {
    novoArray.push(numeros[i]);
  }
}
console.log(novoArray); // [1, 2, 4, 5]


Exercício 40: Contar Vogais em String Enunciado: Declare uma string. Use um loop for para contar quantas vogais existem na string e imprimir o resultado.
let texto = "JavaScript é divertido";
let vogais = "aeiouAEIOU";
let contador = 0;
for (let i = 0; i < texto.length; i++) {
  if (vogais.includes(texto[i])) {
    contador++;
  }
}
console.log(contador); // 7
*/