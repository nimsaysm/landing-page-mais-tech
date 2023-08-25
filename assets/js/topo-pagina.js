function topoPagina() {
    const btnVoltarTopo = document.querySelector('#voltar-topo');

    window.addEventListener('scroll', function() {
        if(window.scrollY == 0) {
            btnVoltarTopo.classList.remove('btn-voltar');
        } else {
            btnVoltarTopo.classList.add('btn-voltar');
        }
    });

    btnVoltarTopo.addEventListener('click', function() {
        window.scrollTo(0, 0);
    })
}

export { topoPagina }