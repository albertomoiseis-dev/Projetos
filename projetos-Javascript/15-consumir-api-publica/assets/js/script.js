document.getElementById('fetch-btn').addEventListener('click', async () => {
  const repoName = document.getElementById('repo-name').value;
  if (repoName) {
    try {
      const response = await fetch(`https://api.github.com/repos/${repoName}`);
      if (!response.ok) {
        throw new Error('Repositório não encontrado');
      }
      const data = await response.json();
      displayRepoInfo(data);
    } catch (error) {
      document.getElementById('repo-info').innerText = `Erro: ${error.message}`;
    }
  }
});

function displayRepoInfo(repo) {
  const repoInfo = `
      <h2>${repo.full_name}</h2>
      <p>${repo.description}</p>
      <p><strong>Stars:</strong> ${repo.stargazers_count}</p>
      <p><strong>Forks:</strong> ${repo.forks_count}</p>
      <p><strong>Issues Abertas:</strong> ${repo.open_issues_count}</p>
  `;
  document.getElementById('repo-info').innerHTML = repoInfo;
}

// Extra para aumentar o limite de requisições
/*
const personalAccessToken = 'SEU_TOKEN_DE_ACESSO_PESSOAL';

document.getElementById('fetch-btn').addEventListener('click', async () => {
    const repoName = document.getElementById('repo-name').value;
    if (repoName) {
        try {
            const response = await fetch(`https://api.github.com/repos/${repoName}`, {
                headers: {
                    'Authorization': `token ${personalAccessToken}`
                }
            });
            if (!response.ok) {
                throw new Error('Repositório não encontrado');
            }
            const data = await response.json();
            displayRepoInfo(data);
        } catch (error) {
            document.getElementById('repo-info').innerText = `Erro: ${error.message}`;
        }
    }
});

*/