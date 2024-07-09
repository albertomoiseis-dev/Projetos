/*

Introdução ao Document Object Model (DOM)
Questão 1: O que é o Document Object Model (DOM)?

Resposta:
O DOM é uma interface de programação para documentos HTML e XML. Ele representa a página de forma que os programas possam alterar a estrutura do documento, estilo e conteúdo. O DOM representa o documento como uma árvore de nós. Os nós podem ser elementos, atributos, textos, entre outros.

Comentário:
Entender o DOM é fundamental para manipular o HTML dinamicamente usando JavaScript. Ele permite que você acesse e altere os elementos e conteúdos do documento.
------------------------------------------



Métodos como getElementById
Questão 2: Como você seleciona um elemento HTML com o id "minhaDiv" usando JavaScript?

Resposta:
Você pode usar o método getElementById:

var elemento = document.getElementById("minhaDiv");
Comentário:
O método getElementById é uma maneira rápida e eficiente de acessar um único elemento com um ID específico.
------------------------------------------


Métodos como querySelector
Questão 3: Qual é a diferença entre getElementById e querySelector?

Resposta:
getElementById seleciona um elemento pelo seu ID e retorna um único elemento. querySelector, por outro lado, pode selecionar elementos usando qualquer seletor CSS (ID, classe, tag, etc.) e também retorna o primeiro elemento que corresponde ao seletor.

Comentário:
querySelector é mais flexível, mas getElementById pode ser mais rápido quando você precisa de um elemento específico com um ID único.
------------------------------------------



Adicionando eventos de clique
Questão 4: Como você adiciona um evento de clique a um botão com o ID "meuBotao" que exibe um alerta ao ser clicado?

Resposta:
Você pode adicionar um evento de clique usando addEventListener:

var botao = document.getElementById("meuBotao");
botao.addEventListener("click", function() {
    alert("Botão clicado!");
});
Comentário:
Adicionar eventos de forma dinâmica permite que você mantenha o JavaScript separado do HTML e torna o código mais organizado.
------------------------------------------



Alterando o texto de elementos
Questão 5: Como você altera o texto de um parágrafo com o ID "meuParagrafo" para "Novo texto"?

Resposta:
Você pode usar a propriedade innerText:
var paragrafo = document.getElementById("meuParagrafo");
paragrafo.innerText = "Novo texto";
Comentário:
innerText altera o conteúdo de texto de um elemento, enquanto innerHTML pode alterar o HTML interno do elemento.
------------------------------------------



Alterando o HTML interno de elementos
Questão 6: Como você adiciona um novo parágrafo dentro de um div com o ID "minhaDiv" usando innerHTML?

Resposta:
Você pode usar a propriedade innerHTML:

var div = document.getElementById("minhaDiv");
div.innerHTML = "<p>Novo parágrafo</p>";
Comentário:
innerHTML permite que você insira HTML diretamente no elemento, o que é útil para adicionar múltiplos elementos ou estruturas complexas.
------------------------------------------



Criando e adicionando novos elementos
Questão 7: Como você cria um novo elemento <p> e o adiciona a um div com o ID "minhaDiv"?

Resposta:
Você pode usar os métodos createElement e appendChild:

var novoParagrafo = document.createElement("p");
novoParagrafo.innerText = "Parágrafo criado dinamicamente";
var div = document.getElementById("minhaDiv");
div.appendChild(novoParagrafo);
Comentário:
Criar e adicionar novos elementos dinamicamente é uma parte essencial da manipulação do DOM.
------------------------------------------



Alterando atributos de elementos
Questão 8: Como você altera o atributo src de uma imagem com o ID "minhaImagem"?

Resposta:
Você pode usar a propriedade setAttribute:

var imagem = document.getElementById("minhaImagem");
imagem.setAttribute("src", "novoCaminho.jpg");
Comentário:
Alterar atributos de elementos permite que você modifique a aparência e o comportamento dos elementos HTML.
------------------------------------------



Alterando estilos CSS via JavaScript
Questão 9: Como você altera a cor de fundo de um div com o ID "minhaDiv" para azul?

Resposta:
Você pode usar a propriedade style:

var div = document.getElementById("minhaDiv");
div.style.backgroundColor = "blue";
Comentário:
Alterar estilos via JavaScript permite que você aplique dinamicamente estilos CSS a elementos HTML.
------------------------------------------



Adicionando e removendo classes
Questão 10: Como você adiciona uma classe "ativo" a um elemento com o ID "meuElemento"?

Resposta:
Você pode usar a propriedade classList:

var elemento = document.getElementById("meuElemento");
elemento.classList.add("ativo");
Comentário:
Usar classList para manipular classes é uma forma eficaz de aplicar estilos CSS sem alterar diretamente os estilos.
------------------------------------------



Capturando eventos de teclado
Questão 11: Como você captura um evento de pressionamento de tecla em um campo de texto com o ID "meuInput"?

Resposta:
Você pode usar o evento keydown:

var input = document.getElementById("meuInput");
input.addEventListener("keydown", function(event) {
    console.log("Tecla pressionada: " + event.key);
});
Comentário:
Capturar eventos de teclado é útil para implementar funcionalidades como validação de formulário em tempo real.
------------------------------------------



Eventos keyup e keypress
Questão 12: Qual é a diferença entre os eventos keyup e keypress?

Resposta:
keypress é disparado quando uma tecla é pressionada e solta, enquanto keyup é disparado apenas quando a tecla é solta.

Comentário:
Entender a diferença entre esses eventos é importante para escolher o evento correto para a funcionalidade desejada.
------------------------------------------



Criar uma lista de tarefas utilizando DOM e eventos
Questão 13: Como você cria uma lista de tarefas que permite adicionar e remover tarefas usando JavaScript?

Resposta:

html
Copiar código
<!DOCTYPE html>
<html>
<head>
    <title>Lista de Tarefas</title>
</head>
<body>
    <h1>Lista de Tarefas</h1>
    <input type="text" id="novaTarefa" placeholder="Nova tarefa">
    <button id="adicionarTarefa">Adicionar</button>
    <ul id="listaDeTarefas"></ul>

    <script>
        var botaoAdicionar = document.getElementById("adicionarTarefa");
        var inputNovaTarefa = document.getElementById("novaTarefa");
        var listaDeTarefas = document.getElementById("listaDeTarefas");

        botaoAdicionar.addEventListener("click", function() {
            var tarefaTexto = inputNovaTarefa.value;
            if (tarefaTexto !== "") {
                var li = document.createElement("li");
                li.innerText = tarefaTexto;

                var botaoRemover = document.createElement("button");
                botaoRemover.innerText = "Remover";
                botaoRemover.addEventListener("click", function() {
                    listaDeTarefas.removeChild(li);
                });

                li.appendChild(botaoRemover);
                listaDeTarefas.appendChild(li);
                inputNovaTarefa.value = "";
            }
        });
    </script>
</body>
</html>
*/