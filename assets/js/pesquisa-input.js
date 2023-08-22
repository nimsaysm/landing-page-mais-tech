function pesquisa() {
    const cursos = document.querySelectorAll('.curso');

    const inputBusca = document.querySelector('#busca-cursos');
    
    inputBusca.addEventListener('input', function() {

        if (inputBusca.value != '') {
            let busca = inputBusca.value.toUpperCase();

            for (let curso of cursos) {
                let nomeCurso = (curso.querySelector('.nome-curso')).textContent;

                if (nomeCurso.startsWith(busca) && nomeCurso.includes(busca)) {
                    curso.style.display = 'grid';
                } else {
                    curso.style.display = 'none';
                }
            }
        } else {
            for (let curso of cursos) {
                curso.style.display = 'grid';
            }
        }
        

    })
};

export { pesquisa };