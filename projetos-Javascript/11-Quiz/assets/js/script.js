const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
    // Coletar todas as perguntas do quiz
    const questions = quizContainer.querySelectorAll('.question');

    let score = 0;

    // Loop através de cada pergunta para verificar respostas
    questions.forEach((question, questionIndex) => {
        const selectedOption = question.querySelector('input[type=radio]:checked');
        if (selectedOption) {
            // Comparar resposta selecionada com resposta correta
            if (selectedOption.value === 'b') {
                // Incrementar pontuação se a resposta estiver correta
                score++;
                // Estilizar a resposta correta
                question.style.color = 'green';
            } else {
                // Estilizar a resposta incorreta
                question.style.color = 'red';
            }
        }
    });

    // Mostrar resultados para o usuário
    const resultsContainer = document.createElement('div');
    resultsContainer.classList.add('result');
    resultsContainer.innerHTML = `<h3>Você acertou ${score} de ${questions.length} perguntas.</h3>`;
    quizContainer.appendChild(resultsContainer);
});
