function menu() {
    const btnMenu = document.querySelector('#menu');
    const links = document.querySelector('#nav-bar');

    btnMenu.addEventListener('click', function() {
        btnMenu.classList.toggle('ativo');
        MenuAbrirFechar();
    });

    function MenuAbrirFechar() {
        links.classList.toggle('menu-aberto');
    };
    
    links.addEventListener('click', function() {
        MenuAbrirFechar();
        btnMenu.classList.remove('ativo');
    });

    const linksScroll = document.querySelectorAll('a[href^="#"]');
    for (const link of linksScroll) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        //this -> elemento que dispara o click (âncora)
        const linkDestino = this.getAttribute('href'); //pega valor do href do destino
        const elementoDestino = document.querySelector(linkDestino); //local do destino na página

        if (elementoDestino) {
            window.scrollTo({
                top: elementoDestino.offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

export { menu };
