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
