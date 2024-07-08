// As questões estão comentadas é só tirar e testar :)

/*Operações básicas em variáveis
Exercício 1: Soma de variáveis Enunciado: Declare duas variáveis x e y com os valores 8 e 12, respectivamente. Calcule a soma de x e y.

let x = 8;
let y = 12;
let soma = x + y;
console.log(soma); // 20

Exercício 2: Subtração de variáveis Enunciado: Declare duas variáveis a e b com os valores 15 e 5, respectivamente. Calcule a subtração de a por b.

let a = 15;
let b = 5;
let subtracao = a - b;
console.log(subtracao); // 10

Exercício 3: Multiplicação de variáveis Enunciado: Declare duas variáveis m e n com os valores 7 e 3, respectivamente. Calcule a multiplicação de m por n.

let m = 7;
let n = 3;
let multiplicacao = m * n;
console.log(multiplicacao); // 21

Exercício 4: Divisão de variáveis Enunciado: Declare duas variáveis c e d com os valores 20 e 4, respectivamente. Calcule a divisão de c por d.

let c = 20;
let d = 4;
let divisao = c / d;
console.log(divisao); // 5
Operações em variáveis, String e Template String
Exercício 5: Concatenação de strings Enunciado: Declare duas variáveis primeiroNome e ultimoNome com os valores "Alberto" e "Moiseis", respectivamente. Concatene as duas strings com um espaço entre elas.

let primeiroNome = "Alberto";
let ultimoNome = "Moiseis";
let nomeCompleto = primeiroNome + " " + ultimoNome;
console.log(nomeCompleto); // Alberto Moiseis

Exercício 6: Template literals Enunciado: Declare uma variável nome com o valor "Alberto" e uma variável idade com o valor 26. Use template literals para criar uma string que diga "Meu nome é Alberto e eu tenho 26 anos."

let nome = "Alberto";
let idade = 26;
let frase = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(frase); // Meu nome é Alberto e eu tenho 26 anos.

Condicional If / else
Exercício 7: Verificação de maioridade Enunciado: Declare uma variável idade com o valor 18. Use uma estrutura if/else para verificar se a idade é maior ou igual a 18.
let idade = 18;
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
// Maior de idade
Exercício 8: Verificação de número positivo Enunciado: Declare uma variável numero com um valor. Use uma estrutura if/else para verificar se o número é positivo, negativo ou zero.
let numero = 10;
if (numero > 0) {
  console.log("Positivo");
} else if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}
// Positivo
Condicional == e ===
Exercício 9: Comparação de valores Enunciado: Declare duas variáveis a e b com os valores 5 e "5", respectivamente. Use uma estrutura if/else para comparar a e b com == e ===.
let a = 5;
let b = "5";

if (a == b) {
  console.log("a é igual a b (==)");
} else {
  console.log("a não é igual a b (==)");
}

if (a === b) {
  console.log("a é igual a b (===)");
} else {
  console.log("a não é igual a b (===)");
}
// a é igual a b (==)
// a não é igual a b (===)

Multi-condicionais (&& e ||)
Exercício 10: Verificação de múltiplas condições Enunciado: Declare uma variável idade com o valor 20 e uma variável temCNH com o valor true. Use uma estrutura if/else para verificar se a idade é maior ou igual a 18 e se a pessoa tem CNH.

let idade = 20;
let temCNH = true;
if (idade >= 18 && temCNH) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}
// Pode dirigir
Exercício 11: Verificação de uma das condições Enunciado: Declare uma variável saldo com o valor 500 e uma variável temCredito com o valor false. Use uma estrutura if/else para verificar se o saldo é maior que 0 ou se a pessoa tem crédito.
let saldo = 500;
let temCredito = false;

if (saldo > 0 || temCredito) {
  console.log("Pode realizar a compra");
} else {
  console.log("Não pode realizar a compra");
}
// Pode realizar a compra
Condicional Dupla (if else)
Exercício 12: Verificação de nota Enunciado: Declare uma variável nota com o valor 7. Use uma estrutura if/else if/else para verificar se a nota é maior ou igual a 7 (aprovado), maior ou igual a 5 e menor que 7 (recuperação) ou menor que 5 (reprovado).

let nota = 7;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
// Aprovado

Desmistificando o IF
Exercício 13: Verificação de string não vazia Enunciado: Declare uma variável texto com um valor não vazio. Use uma estrutura if para verificar se a string não é vazia.
let texto = "Olá";
if (texto) {
  console.log("A string não está vazia");
} else {
  console.log("A string está vazia");
}
// A string não está vazia

Exercício 14: Verificação de valor verdadeiro Enunciado: Declare uma variável verdadeiro com o valor true. Use uma estrutura if para verificar se a variável é verdadeira.
let verdadeiro = true;
if (verdadeiro) {
  console.log("A variável é verdadeira");
} else {
  console.log("A variável é falsa");
}
// A variável é verdadeira

Condicional Ternário
Exercício 15: Verificação de par ou ímpar Enunciado: Declare uma variável numero com um valor. Use um operador ternário para verificar se o número é par ou ímpar.
let numero = 4;
let resultado = (numero % 2 === 0) ? "Par" : "Ímpar";
console.log(resultado); // Par

Exercício 16: Verificação de maioridade Enunciado: Declare uma variável idade com um valor. Use um operador ternário para verificar se a pessoa é maior de idade.
let idade = 20;
let status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(status); // Maior de idade
Exercícios extras
Exercício 17: Verificação de nota com ternário Enunciado: Declare uma variável nota com um valor. Use um operador ternário para verificar se a nota é maior ou igual a 7 (aprovado) ou menor que 7 (reprovado).
let nota = 8;
let resultado = (nota >= 7) ? "Aprovado" : "Reprovado";
console.log(resultado); // Aprovado
Exercício 18: Comparação de strings Enunciado: Declare duas variáveis str1 e str2 com valores "hello" e "world", respectivamente. Use uma estrutura if/else para verificar se as strings são iguais.
let str1 = "hello";
let str2 = "world";
if (str1 === str2) {
  console.log("As strings são iguais");
} else {
  console.log("As strings são diferentes");
}
// As strings são diferentes
Exercício 19: Verificação de maior número Enunciado: Declare duas variáveis num1 e num2 com valores 10 e 20, respectivamente. Use uma estrutura if/else para verificar qual número é maior.
let num1 = 10;
let num2 = 20;
if (num1 > num2) {
  console.log("num1 é maior que num2");
} else if (num1 < num2) {
  console.log("num2 é maior que num1");
} else {
  console.log("num1 e num2 são iguais");
}
// num2 é maior que num1
Exercício 20: Verificação de booleano Enunciado: Declare uma variável estaChovendo com o valor false. Use um operador ternário para verificar se está chovendo.
let estaChovendo = false;
let mensagem = estaChovendo ? "Leve um guarda-chuva" : "Não precisa de guarda-chuva";
console.log(mensagem); // Não precisa de guarda-chuva

*/