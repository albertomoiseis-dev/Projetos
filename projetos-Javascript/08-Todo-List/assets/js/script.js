// Esperar o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  // Seleção dos elementos
  const formTarefa = document.getElementById('form-tarefa');
  const inputTarefa = document.getElementById('input-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');

  // Carregar tarefas do localStorage
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  tarefas.forEach(tarefa => adicionarTarefaAoDOM(tarefa));

  // Adicionar nova tarefa
  formTarefa.addEventListener('submit', evento => {
    evento.preventDefault();
    const textoTarefa = inputTarefa.value.trim();
    if (textoTarefa !== '') {
      const novaTarefa = { texto: textoTarefa, concluida: false };
      tarefas.push(novaTarefa);
      adicionarTarefaAoDOM(novaTarefa);
      salvarTarefas();
      inputTarefa.value = '';
    }
  });

  // Adicionar tarefa ao DOM
  function adicionarTarefaAoDOM(tarefa) {
    const li = document.createElement('li');
    li.textContent = tarefa.texto;
    if (tarefa.concluida) {
      li.classList.add('concluida');
    }

    // Botão de marcar como concluída
    const botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    botaoConcluir.addEventListener('click', () => {
      tarefa.concluida = !tarefa.concluida;
      li.classList.toggle('concluida');
      salvarTarefas();
    });

    // Botão de remover tarefa
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.addEventListener('click', () => {
      const index = tarefas.indexOf(tarefa);
      tarefas.splice(index, 1);
      li.remove();
      salvarTarefas();
    });

    li.appendChild(botaoConcluir);
    li.appendChild(botaoRemover);
    listaTarefas.appendChild(li);
  }

  // Salvar tarefas no localStorage
  function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }
});
