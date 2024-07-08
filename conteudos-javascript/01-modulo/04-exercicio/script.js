/*
  Declarando variáveis
  Enunciado: Declare uma variável chamada nome e atribua a ela o valor "Alberto".
*/

let nome = "Alberto";
console.log(nome); // Alberto

/*
  Exercício 2: Redefinindo variáveis
  Enunciado: Declare uma variável chamada idade e atribua a ela o valor 25. Em seguida, redefina o valor dessa variável para 26.
*/

var idade = 25;
idade = 26;
console.log(idade); // 26

/* 
  Variáveis constantes
  Enunciado: Declare uma constante chamada PI e atribua a ela o valor 3.14. Tente mudar o valor da constante para 3.1415 e observe o que acontece.
*/

const PI = 3.14;
try {
  PI = 3.1415; // Isso vai gerar um erro
} catch (e) {
  console.log(e); // TypeError: Assignment to constant variable.
}

/*
  Exercício 4: Tipos de variáveis
  Enunciado: Declare uma variável numero com valor 10, uma variável texto com valor "Olá" e uma variável verdadeiro com valor true.
*/
let numero = 10;
let texto = "Olá";
let verdadeiro = true;
console.log(numero);      // 10
console.log(texto);       // Olá
console.log(verdadeiro);  // true

/* 
  Exercício 5: Tipo de uma variável
  Enunciado: Use a função typeof para verificar o tipo das variáveis numero, texto e verdadeiro declaradas anteriormente.
*/

console.log(typeof numero);      // number
console.log(typeof texto);       // string
console.log(typeof verdadeiro);  // boolean

/*Exercício 6: Variáveis não inicializadas
Enunciado: Declare uma variável indefinida sem atribuir um valor a ela.Verifique o tipo dessa variável.
*/

let indefinida;
console.log(indefinida);        // undefined
console.log(typeof indefinida); // undefined

/*
  Exercício 7: Conversão de tipos
  Enunciado: Converta a variável numero em uma string e a variável texto em um número.
*/

let numeroStr = String(numero);
let textoNum = Number(texto);
console.log(numeroStr);        // "10"
console.log(typeof numeroStr); // string
console.log(textoNum);         // NaN
console.log(typeof textoNum);  // number

/*
Exercício 8: Variáveis nulas
Enunciado: Declare uma variável nula e atribua a ela o valor null.Verifique o tipo dessa variável.
*/

let nula = null;
console.log(nula);        // null
console.log(typeof nula); // object (peculiaridade do JavaScript)

/*
Exercício 9: Operações com variáveis
Enunciado: Declare duas variáveis, a com valor 5 e b com valor 10. Calcule a soma, subtração, multiplicação e divisão de a e b.
*/

let a = 5;
let b = 10;
console.log(a + b); // 15
console.log(a - b); // -5
console.log(a * b); // 50
console.log(a / b); // 0.5

/*
Exercício 10: Template literals
Enunciado: Declare uma variável nome com o valor "Alberto" e uma variável idade com o valor 26. Use template literals para criar uma string que diga "Meu nome é Alberto e eu tenho 26 anos."
*/

let nomeCompleto = "Alberto Moiseis";
let idade = 26;
let frase = `Meu nome é ${nomeCompleto} e eu tenho ${idade} anos.`;
console.log(frase); // Meu nome é Alberto e eu tenho 26 anos.

