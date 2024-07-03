// script.js

// Array para armazenar os produtos cadastrados
let products = [];

// Função para atualizar a listagem de produtos
function updateProductList() {
  // Ordenar os produtos por valor
  products.sort((a, b) => a.price - b.price);

  // Obter a referência do corpo da tabela
  const productTableBody = document.getElementById('product-table').getElementsByTagName('tbody')[0];

  // Limpar o conteúdo atual da tabela
  productTableBody.innerHTML = '';

  // Adicionar cada produto à tabela
  products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.name}</td>
      <td>R$ ${product.price.toFixed(2)}</td>
    `;
    productTableBody.appendChild(row);
  });
}

// Função para mostrar o contêiner do formulário de cadastro
function showFormContainer() {
  document.getElementById('form-container').classList.remove('hidden');
  document.getElementById('list-container').classList.add('hidden');
}

// Função para mostrar o contêiner da listagem de produtos
function showListContainer() {
  document.getElementById('list-container').classList.remove('hidden');
  document.getElementById('form-container').classList.add('hidden');
}

// Adicionar evento de envio do formulário
document.getElementById('product-form').addEventListener('submit', event => {
  event.preventDefault(); // Evitar o envio padrão do formulário

  // Obter os valores dos campos do formulário
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const price = parseFloat(document.getElementById('price').value);
  const available = document.getElementById('available').value === 'true';

  // Criar um novo objeto de produto
  const newProduct = {
    name,
    description,
    price,
    available
  };

  // Adicionar o novo produto ao array de produtos
  products.push(newProduct);

  // Atualizar a listagem de produtos
  updateProductList();

  // Limpar os campos do formulário
  document.getElementById('name').value = '';
  document.getElementById('description').value = '';
  document.getElementById('price').value = '';
  document.getElementById('available').value = '';

  // Mostrar a listagem de produtos
  showListContainer();
});

// Adicionar evento de clique no botão "Cadastrar Novo Produto"
document.getElementById('new-product-btn').addEventListener('click', showFormContainer);