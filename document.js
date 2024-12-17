document.addEventListener('DOMContentLoaded', () => {
    // Menu Dropdown
    const dropdown = document.querySelectorAll('.dropdown');
    dropdown.forEach(menu => {
        menu.addEventListener('mouseover', () => {
            const submenu = menu.querySelector('.submenu');
            submenu.style.display = 'block';
        });
        menu.addEventListener('mouseout', () => {
            const submenu = menu.querySelector('.submenu');
            submenu.style.display = 'none';
        });
    });

    // Carrossel
    const carousel = document.querySelector('.carousel');
    let scrollAmount = 0;
    const scrollStep = 300;
    const maxScroll = carousel.scrollWidth - carousel.offsetWidth;

    setInterval(() => {
        if (scrollAmount < maxScroll) {
            scrollAmount += scrollStep;
        } else {
            scrollAmount = 0;
        }
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }, 3000);

    // Botões interativos
    const buttons = document.querySelectorAll('.btn-contato button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Botão clicado! Redirecionando para o contato...');
        });
    });

    // Iframe interação
    const iframe = document.querySelector('iframe');
    iframe.addEventListener('mouseover', () => {
        iframe.style.border = '2px solid #00ff08';
    });
    iframe.addEventListener('mouseout', () => {
        iframe.style.border = 'none';
    });
});
