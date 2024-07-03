fetch('https://api.github.com/users/octocat/repos')
  .then(response => response.json())
  .then(data => {
    data.forEach(repo => {
      console.log(repo.name);
    });
  })
  .catch(error => {
    console.error('Erro:', error);
  });