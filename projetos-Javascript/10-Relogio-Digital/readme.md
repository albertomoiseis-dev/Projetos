# Projeto: Relógio Digital

Este projeto visa criar um relógio digital interativo e responsivo que exibe a hora atual em tempo real. A implementação será dividida em três partes principais: HTML, CSS e JavaScript.

## HTML

O HTML será utilizado para estruturar o display do relógio. Isso inclui a criação de elementos como `<div>` para conter os componentes do relógio, como horas, minutos e segundos, além de um botão para alternar entre os formatos de 12 e 24 horas.

## CSS

O CSS será empregado para estilizar o relógio, proporcionando uma apresentação visual agradável. Isso pode englobar definições de tamanho de fonte, cores, espaçamento e alinhamento dos elementos do relógio.

## JavaScript

O JavaScript desempenha um papel crucial na funcionalidade do relógio digital. Será responsável por:

- Atualizar dinamicamente a hora exibida a cada segundo, utilizando métodos como `setInterval` para garantir que o relógio esteja sempre sincronizado com o tempo real.
- Implementar a lógica para alternar entre os formatos de 12 e 24 horas. Isso pode ser realizado capturando eventos de clique no botão de alternância e ajustando a formatação da hora conforme necessário.

## Funcionamento do Projeto

### HTML:

Define a estrutura básica do relógio, geralmente com um container principal e elementos `span` para exibir as horas, minutos e segundos. O botão de alternância também será incluído aqui.

### CSS:

Responsável pela aparência visual do relógio, aplicando estilos como fonte, cor, alinhamento e espaçamento para garantir uma apresentação clara e esteticamente agradável.

### JavaScript:

Controla a lógica dinâmica do relógio:

- Inicia o relógio ao carregar a página, utilizando `Date()` para obter a hora atual.
- Utiliza `setInterval` para atualizar o relógio a cada segundo, garantindo que o horário exibido esteja sempre preciso.
- Implementa a funcionalidade de alternância entre os formatos de hora, permitindo que o usuário escolha entre exibir a hora no formato de 12 horas (AM/PM) ou 24 horas.
- Ao clicar no botão de alternância, a função JavaScript responsável pela mudança de formato é ativada, modificando a exibição da hora conforme a preferência do usuário.

## Objetivo Final

Oferecer uma interface de usuário intuitiva e funcional que permita visualizar a hora atual de forma precisa e ajustável, atendendo às necessidades de diferentes preferências de formato de hora.
