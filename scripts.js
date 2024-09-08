// scripts.js

// Função para mostrar um alerta quando o botão de contato é clicado
function showAlert() {
    alert('Você clicou no botão de contato!');
}

// Função para adicionar rolagem suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função para carregar notícias dinamicamente
document.addEventListener('DOMContentLoaded', function() {
    const newsContent = document.getElementById('news-content');
    // Simular uma chamada de API para carregar notícias
    setTimeout(() => {
        newsContent.innerHTML = `
            <p>Em uma nova descoberta, astrônomos identificaram um novo exoplaneta na zona habitável de uma estrela distante. Este planeta, que é do tamanho da Terra, pode ter condições adequadas para a vida.</p>
            <p>Além disso, o Telescópio Espacial James Webb começou a enviar imagens incríveis de galáxias formadas logo após o Big Bang, oferecendo uma nova visão sobre a formação do universo.</p>
        `;
    }, 1000);
});
