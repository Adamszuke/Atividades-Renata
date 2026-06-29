const tecnologias = [
    { nome: 'TypeScript',  icone: '🌐' },
    { nome: 'React Native',icone: '⚛️' },
    { nome: 'JavaScript',  icone: '⚡' },
    { nome: 'Python',      icone: '🐍' },
    { nome: 'Git',         icone: '🔀' },
    { nome: 'GitHub',      icone: '🐙' },
    { nome: 'VS Code',     icone: '💻' },
];


function renderizarTecnologias() {
    const grid = document.querySelector('#tech-grid');
    if (!grid) return;

    tecnologias.forEach(function(tech, index) {
        const card = document.createElement('div');
        card.classList.add('tech-card');
        card.style.animationDelay = (index * 0.07) + 's';

        card.innerHTML =
            '<span class="tech-card__icon" aria-hidden="true">' + tech.icone + '</span>' +
            '<span>' + tech.nome + '</span>';

        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderizarTecnologias();
});