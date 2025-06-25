const carrosseis = [
    {
        id: 'santos',
        itens: [
            { nome: "São Pedro", imagem: "src/img/saopedro.jpg" },
            { nome: "São João", imagem: "src/img/saojoao.jpg" },
            { nome: "Santo Antônio", imagem: "src/img/santoantonio.jpg" }
        ]
    },
    {
        id: 'atividades',
        itens: [
            { nome: "Quadrilha", imagem: "src/img/img-04.jpeg" },
            { nome: "Serresta", imagem: "src/img/img-05.jpg" },
            { nome: "Reizado", imagem: "src/img/img-06.jpg" },
            { nome: "fogueira", imagem: "src/img/img-07.jpg" }
        ]
    },
    {
        id: 'comidas',
        itens: [
            { nome: "Pamonha", imagem: "src/img/pamonha.webp" },
            { nome: "Canjica", imagem: "src/img/canjica.jpg" },
            { nome: "Milho Cozido", imagem: "src/img/milho.jpg" },
            { nome: "Maçã do amor", imagem: "src/img/maça.webp" }
        ]
    }
];

const estado = {};

carrosseis.forEach(carrossel => {
    const { id, itens } = carrossel;
    estado[id] = { indice: 0 };

    const img = document.getElementById(`imagem-${id}`);
    const nome = document.getElementById(`nome-${id}`);
    const indicadores = document.getElementById(`indicadores-${id}`);

    itens.forEach((_, i) => {
        const bolinha = document.createElement('div');
        bolinha.classList.add('bolinha');
        if (i === 0) bolinha.classList.add('ativa');
        bolinha.onclick = () => {
            estado[id].indice = i;
            atualizarCard(id);
            reiniciarAuto(id);
        };
        indicadores.appendChild(bolinha);
    });

    atualizarCard(id);
    iniciarAuto(id);
});

function atualizarCard(id) {
    const { itens } = carrosseis.find(c => c.id === id);
    const indice = estado[id].indice;
    const img = document.getElementById(`imagem-${id}`);
    const nome = document.getElementById(`nome-${id}`);
    const bolinhas = document.querySelectorAll(`#indicadores-${id} .bolinha`);

    img.style.opacity = 0;
    nome.style.opacity = 0;

    setTimeout(() => {
        img.src = itens[indice].imagem;
        nome.innerText = itens[indice].nome;

        bolinhas.forEach((b, i) => {
            b.classList.toggle('ativa', i === indice);
        });

        img.style.opacity = 1;
        nome.style.opacity = 1;
    }, 300);
}

function proximo(id) {
    const { itens } = carrosseis.find(c => c.id === id);
    estado[id].indice = (estado[id].indice + 1) % itens.length;
    atualizarCard(id);
}

function iniciarAuto(id) {
    estado[id].intervalo = setInterval(() => proximo(id), 6000);
}

function reiniciarAuto(id) {
    clearInterval(estado[id].intervalo);
    iniciarAuto(id);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ativo');
        } else {
            entry.target.classList.remove('ativo');
        }
    });
}, {
    threshold: 0.2 
});

document.querySelectorAll('.carrossel').forEach(carrossel => {
    observer.observe(carrossel); 
});
