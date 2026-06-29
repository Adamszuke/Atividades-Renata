const experiencias = [
    {
        cargo: 'Desenvolvedor Mobile React Native',
        empresa: 'Value 4u',
        periodo: 'Nov. 2025 - Atual',
        descricao: 'Desenvolvimento de novas funcionalidades e correção de bugs dos aplicativos da empresa.',
        tags: ['React Native', 'TypeScript', 'Git']
    },
    {
        cargo: 'Suporte ao Cliente',
        empresa: 'Value 4u',
        periodo: 'Jan. 2025 - Out 2025',
        descricao: 'Suporte e treinamento para os clientes de nosso aplicativo.',
        tags: ['Comunicação', 'Didática']
    },
    {
        cargo: 'Professor de Inglês',
        empresa: 'Wizard by Pearson',
        periodo: 'Jul. 2023 - Jan. 2025',
        descricao: 'Lecionava aulas de inglês para turmas de crianças até adultos de nível básico até o avançado.',
        tags: ['Inglês', 'Didática']
    },
];

function renderizarTimeline() {
    const container = document.querySelector('#timeline');
    if (!container) return;

    experiencias.forEach(function(exp) {
        const item = document.createElement('article');
        item.classList.add('timeline-item');
        item.setAttribute('aria-label', exp.cargo + ' na ' + exp.empresa);

        const tags = exp.tags.map(function(t) {
            return '<span class="tag">' + t + '</span>';
        }).join('');

        item.innerHTML =
            '<div class="timeline-card">' +
                '<div class="timeline-card__header">' +
                    '<h3 class="timeline-card__cargo">' + exp.cargo + '</h3>' +
                    '<span class="timeline-card__periodo">' + exp.periodo + '</span>' +
                '</div>' +
                '<p class="timeline-card__empresa">' + exp.empresa + '</p>' +
                '<p class="timeline-card__desc">' + exp.descricao + '</p>' +
                '<div class="timeline-card__tags">' + tags + '</div>' +
            '</div>';

        container.appendChild(item);
    });
}

function observarElementos() {
    const opcoes = { root: null, rootMargin: '0px', threshold: 0.15 };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, opcoes);

    document.querySelectorAll('.timeline-item, .skill-card').forEach(function(el) {
        observer.observe(el);
    });
}



document.addEventListener('DOMContentLoaded', function() {
    renderizarTimeline();
    observarElementos();
});