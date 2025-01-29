document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const followingElement = document.querySelector('#following');
    const followersElement = document.querySelector('#followers');
    const reposElement = document.querySelector('#repos');
    const linkElement = document.querySelector('#link');

    setTimeout(function() {
        fetch('https://api.github.com/users/GustavoCronemberger')
        .then(function(res) {
            if (!res.ok) {
                throw new Error('Erro na requisição');
            }
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            repos.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
        .catch(function(erro) {
            alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.")
        })
        .finally(function() {
            console.log("Requisição finalizada.");
        });
    }, 900);
});
