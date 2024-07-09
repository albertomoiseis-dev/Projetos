/*
push(): Adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array.

let arr = [1, 2, 3];
arr.push(4); // arr agora é [1, 2, 3, 4]

pop(): Remove o último elemento de um array e o retorna.

let arr = [1, 2, 3];
arr.pop(); // retorna 3, arr agora é [1, 2]

shift(): Remove o primeiro elemento de um array e o retorna, movendo os outros elementos para um índice anterior.

let arr = [1, 2, 3];
arr.shift(); // retorna 1, arr agora é [2, 3]

unshift(): Adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array.

let arr = [1, 2, 3];
arr.unshift(0); // arr agora é [0, 1, 2, 3]

concat(): Retorna um novo array que é a concatenação de dois ou mais arrays.

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2); // arr3 é [1, 2, 3, 4]

slice(): Retorna uma cópia superficial de uma porção de um array em um novo array.

let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 3); // slicedArr é [2, 3]

splice(): Adiciona, remove ou substitui elementos no array, retornando os elementos removidos, se houver.

let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // remove o terceiro elemento, arr agora é [1, 2, 4, 5]

forEach(): Executa uma função para cada elemento do array.

let arr = [1, 2, 3];
arr.forEach(element => console.log(element)); // imprime 1, 2, 3

map(): Cria um novo array com os resultados da chamada de uma função para cada elemento do array.

let arr = [1, 2, 3];
let mappedArr = arr.map(element => element * 2); // mappedArr é [2, 4, 6]

filter(): Cria um novo array com todos os elementos que passam em um teste (fornecido como uma função).

let arr = [1, 2, 3, 4, 5];
let filteredArr = arr.filter(element => element > 2); // filteredArr é [3, 4, 5]

reduce(): Aplica uma função contra um acumulador e cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.
let arr = [1, 2, 3, 4];
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sum é 10
reduceRight(): Aplica uma função contra um acumulador e cada elemento do array (da direita para a esquerda) para reduzi-lo a um único valor.

let arr = [1, 2, 3, 4];
let sum = arr.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0); // sum é 10

some(): Testa se ao menos um dos elementos no array passa em um teste (fornecido como função).

let arr = [1, 2, 3, 4];
let hasEvenNumber = arr.some(element => element % 2 === 0); // hasEvenNumber é true

every(): Testa se todos os elementos no array passam em um teste (fornecido como função).

let arr = [1, 2, 3, 4];
let allEvenNumbers = arr.every(element => element % 2 === 0); // allEvenNumbers é false

find(): Retorna o primeiro elemento no array que satisfaz a função de teste fornecida.

let arr = [1, 2, 3, 4];
let foundElement = arr.find(element => element > 2); // foundElement é 3

findIndex(): Retorna o índice do primeiro elemento no array que satisfaz a função de teste fornecida.

let arr = [1, 2, 3, 4];
let foundIndex = arr.findIndex(element => element > 2); // foundIndex é 2

includes(): Verifica se um array contém um determinado elemento.

let arr = [1, 2, 3, 4];
let includesTwo = arr.includes(2); // includesTwo é true

indexOf(): Retorna o primeiro índice em que um dado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.

let arr = [1, 2, 3, 4];
let indexOfTwo = arr.indexOf(2); // indexOfTwo é 1

lastIndexOf(): Retorna o último índice em que um dado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.

let arr = [1, 2, 3, 4, 2];
let lastIndexOfTwo = arr.lastIndexOf(2); // lastIndexOfTwo é 4

join(): Junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

let arr = [1, 2, 3, 4];
let joinedArr = arr.join('-'); // joinedArr é "1-2-3-4"

reverse(): Inverte a ordem dos elementos no array.
let arr = [1, 2, 3, 4];
arr.reverse(); // arr agora é [4, 3, 2, 1]

sort(): Ordena os elementos do array e retorna o array.

let arr = [4, 2, 3, 1];
arr.sort(); // arr agora é [1, 2, 3, 4]

flat(): Cria um novo array com todos os elementos sub-array concatenados de forma recursiva até a profundidade especificada.

let arr = [1, 2, [3, 4]];
let flattenedArr = arr.flat(); // flattenedArr é [1, 2, 3, 4]

flatMap(): Primeiro mapeia cada elemento usando uma função de mapeamento, em seguida, aplaina o resultado em um novo array.

let arr = [1, 2, 3, 4];
let flatMappedArr = arr.flatMap(x => [x * 2]); // flatMappedArr é [2, 4, 6, 8]




*/