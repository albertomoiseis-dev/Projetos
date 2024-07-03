document.getElementById('cadastroForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Validação dos campos
  let nomeInput = document.getElementById('nome');
  let emailInput = document.getElementById('email');
  let telefoneInput = document.getElementById('telefone');
  let mensagemInput = document.getElementById('mensagem');

  // Verifica se o nome foi preenchido
  if (nomeInput.value.trim() === '') {
    alert('Por favor, preencha o campo Nome.');
    nomeInput.focus();
    return false;
  }

  // Verifica se o email foi preenchido e se é válido
  let emailValue = emailInput.value.trim();
  if (emailValue === '') {
    alert('Por favor, preencha o campo Email.');
    emailInput.focus();
    return false;
  } else if (!isValidEmail(emailValue)) {
    alert('Por favor, insira um email válido.');
    emailInput.focus();
    return false;
  }

  // Verifica se o telefone foi preenchido (opcional)
  if (telefoneInput.value.trim() !== '' && !isValidTelefone(telefoneInput.value.trim())) {
    alert('Por favor, insira um número de telefone válido.');
    telefoneInput.focus();
    return false;
  }

  // Se chegou até aqui, o formulário é válido e pode ser enviado
  alert('Formulário enviado com sucesso!');
  // Aqui você pode enviar os dados usando Fetch API ou XMLHttpRequest

  return true; // Permite o envio do formulário se todas as validações passarem
});

function isValidEmail(email) {
  // Regex simples para validar email
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidTelefone(telefone) {
  // Regex simples para validar telefone
  // Aceita números com ou sem código de área, espaços, hífens e parênteses
  return /^[0-9 ()+-]+$/.test(telefone);
}
