import { menu } from './menu.js';
import { pesquisa } from './pesquisa-input.js';

document.addEventListener("DOMContentLoaded", function() {
    menu();
    pesquisa();

    const cursos = document.querySelectorAll('.curso');
    //filtrar
    const btnFiltros = document.querySelectorAll('.filtro');

    btnFiltros.forEach((filtro) => {
        filtro.addEventListener('click', function(e) {

            const el = e.target.textContent;
            const elTodosCursos = (el === 'Todos');

            btnFiltros.forEach((btnFiltro) => {
                btnFiltro.classList.remove('selecionado');
            });

            const btn = e.target;
            btn.classList.add('selecionado');

            if(elTodosCursos) {
                cursos.forEach((curso) => {
                    curso.style.display = 'grid';
                })
            } else {
                cursos.forEach((curso) => {
                    let cursoTemCategoria = false;
                    let categoriaCursos = curso.getAttribute('data-area');
                    
                    if (categoriaCursos === el) {
                        cursoTemCategoria = true;
                    }

                    if (cursoTemCategoria === true) {
                        curso.style.display = 'grid';
                    } else curso.style.display = 'none';
                });
            }
        });
    });
});