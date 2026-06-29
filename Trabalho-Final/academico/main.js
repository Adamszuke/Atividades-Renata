const formacao = [
    {
        icone: '🎓',
        titulo: 'Engenharia de Software',
        subtitulo: 'Unifil',
        periodo: '2025 - 2028 (cursando)',
        desc: 'Curso de bacharelado com foco em desenvolvimento de software, banco de dados, programação orientada a objetos e engenharia de software.'
    },
    {
        icone: '📚',
        titulo: 'Ensino Médio',
        subtitulo: 'Colégio Innovativo',
        periodo: '2022 - 2024',
        desc: 'Formação do Ensino Médio do primeiro ao terceiro ano.'
    },
];

const certificacoes = [
    { icone: '⚡', nome: 'Java Fundamentals Orcale', emissor: 'Oracle'},
    { icone: '🌐', nome: 'Curso de Desenvolvimento Mobiele', emissor: 'Rocketseat'},
];

const projetos = [
    {
        nome: 'Tribunal da Várzea',
        ano: '2026',
        desc: 'Aplicativo mobile onde mediamos a quantidade de bagunça que cada integrante do grupo fazia durante as aulas',
        tags: ['React Native', 'TypeScript', 'Expo']
    },
    {
        nome: 'Nosso Álbum',
        ano: '2026',
        desc: 'Aplicativo mobile que consistia de um álbum de figurinhas com fotos com a minha namorada onde ela tinha que abrir pacotes para desbloquear as figurinhas',
        tags: ['React Native', 'TypeScript', 'Expo']
    },
    {
        nome: 'Blue Flow',
        ano: '2026',
        desc: 'Aplicativo para registro da medição de água para medir a quantidade de água consumida durante um período de tempo',
        tags: ['React Native', 'TypeScript', 'Expo']
    }
];

function renderizarFormacao() {
    const grid = document.querySelector('#formacao-grid');
    if (!grid) return;

    formacao.forEach(function(item, index) {
        const card = document.createElement('article');
        card.classList.add('acad-card');
        card.style.transitionDelay = (index * 0.1) + 's';

        card.innerHTML =
            '<div class="acad-card__icon">' + item.icone + '</div>' +
            '<h3 class="acad-card__titulo">' + item.titulo + '</h3>' +
            '<p class="acad-card__subtitulo">' + item.subtitulo + '</p>' +
            '<p class="acad-card__periodo">' + item.periodo + '</p>' +
            '<p class="acad-card__desc">' + item.desc + '</p>';

        grid.appendChild(card);
    });
}

function renderizarCertificacoes() {
    const grid = document.querySelector('#certs-grid');
    if (!grid) return;

    certificacoes.forEach(function(cert, index) {
        const card = document.createElement('article');
        card.classList.add('acad-card', 'cert-card');
        card.style.transitionDelay = (index * 0.08) + 's';

        card.innerHTML =
            '<div class="cert-card__badge">' + cert.icone + '</div>' +
            '<div class="cert-card__info">' +
                '<p class="cert-card__nome">' + cert.nome + '</p>' +
                '<p class="cert-card__emissor">' + cert.emissor + '</p>' +
            '</div>';

        grid.appendChild(card);
    });
}

function renderizarProjetos() {
    const grid = document.querySelector('#projetos-grid');
    if (!grid) return;

    projetos.forEach(function(proj, index) {
        const card = document.createElement('article');
        card.classList.add('acad-card');
        card.style.transitionDelay = (index * 0.1) + 's';

        const tags = proj.tags.map(function(t) {
            return '<span class="tag">' + t + '</span>';
        }).join('');

        card.innerHTML =
            '<div class="projeto-card__header">' +
                '<h3 class="projeto-card__nome">' + proj.nome + '</h3>' +
                '<span class="projeto-card__ano">' + proj.ano + '</span>' +
            '</div>' +
            '<p class="projeto-card__desc">' + proj.desc + '</p>' +
            '<div class="projeto-card__tags">' + tags + '</div>';

        grid.appendChild(card);
    });
}


function observarElementos() {
    const opcoes = { root: null, rootMargin: '0px', threshold: 0.12 };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, opcoes);

    // Observar apenas cards que não estão ocultos
    document.querySelectorAll('.acad-card:not(.acad-card--oculto)').forEach(function(card) {
        observer.observe(card);
    });
}


// ---------- Inicialização ----------
document.addEventListener('DOMContentLoaded', function() {
    renderizarFormacao();
    renderizarCertificacoes();
    renderizarProjetos();

    setTimeout(observarElementos, 100);
});