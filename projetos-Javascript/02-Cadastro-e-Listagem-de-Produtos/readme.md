# Cadastro e Listagem de Produtos

## Descrição do Projeto

O objetivo deste projeto é criar uma aplicação web simples para cadastro e listagem de produtos. A aplicação permite que os usuários insiram informações sobre produtos e visualizem uma listagem ordenada dos produtos cadastrados. Este projeto é ideal para entender os conceitos básicos de HTML, CSS e JavaScript, além de boas práticas de programação.

## Funcionalidades

### Cadastro de Produtos

- Formulário com campos para:
  - Nome do produto (campo de texto)
  - Descrição do produto (campo de texto)
  - Valor do produto (campo numérico)
  - Disponibilidade para venda (opções: sim/não)
- Validação básica para garantir que todos os campos sejam preenchidos corretamente.

### Listagem de Produtos

- Tabela exibindo o nome e o valor dos produtos cadastrados.
- Ordenação automática dos produtos pelo valor, do menor para o maior.
- Atualização dinâmica da listagem ao cadastrar um novo produto.

### Navegação Entre Formulário e Listagem

- Alternância entre o formulário de cadastro e a listagem de produtos.
- Botão na listagem para cadastrar um novo produto, retornando ao formulário.

## Estrutura do Projeto

- **HTML**: Define a estrutura da página, incluindo o formulário de cadastro e a tabela de listagem de produtos.
- **CSS**: Estiliza o formulário e a tabela, garantindo uma interface amigável e responsiva.
- **JavaScript**: Gerencia a lógica de interação com o usuário, manipulação do DOM e armazenamento dos produtos.

## Boas Práticas

- **Separation of Concerns**: Separação clara entre estrutura (HTML), estilo (CSS) e comportamento (JavaScript).
- **Comentários no Código**: Comentários explicativos em português para facilitar o entendimento do código.
- **Validação**: Validação básica dos campos de formulário para garantir dados consistentes.
- **Ordenação**: Ordenação automática dos produtos por valor na listagem.
- **Modularidade**: Funções bem definidas para manipulação do DOM e lógica de exibição.

## Como Usar

### Cadastro de Produto

1. Preencha os campos do formulário com as informações do produto.
2. Clique no botão "Cadastrar Produto" para adicionar o produto à listagem.

### Visualização da Listagem

- Após cadastrar um produto, a listagem será exibida automaticamente.
- A listagem mostra os produtos ordenados pelo valor, do menor para o maior.

### Adicionar Novo Produto

- Na listagem de produtos, clique no botão "Cadastrar Novo Produto" para retornar ao formulário de cadastro.

## Explicação do Projeto com Comentários

### HTML

- `index.html` define a estrutura da página com um formulário para cadastro de produtos e uma tabela para listagem dos produtos cadastrados.
- Dois contêineres (`form-container` e `list-container`) são usados para alternar entre o formulário e a listagem.

### CSS

- `styles.css` estiliza o formulário e a tabela de listagem de produtos.
- Classes `.hidden` são usadas para mostrar ou esconder elementos.

### JavaScript

- `script.js` contém a lógica para manipular o DOM e gerenciar os dados dos produtos.
- Quando o formulário é enviado, um novo produto é adicionado ao array `products`.
- A função `updateProductList` atualiza a tabela de listagem, ordenando os produtos por preço.
- As funções `showFormContainer` e `showListContainer` alternam a exibição entre o formulário e a listagem de produtos.
- O código foi comentado em português para facilitar a compreensão e seguir boas práticas de programação.
