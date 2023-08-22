function avaliacoes() {
    const avaliacoes = [
        {
            id: 1,
            avaliacao: 'Depois de 15 anos trabalhando como babá, decidi ser programadora e assinei o Tech-Mais. Após meses me dedicando aos cursos, fui contratada como Desenvolvedora JAVA pela Avanade!',
            img: 'assets/imgs/aluno-1.jpg',
            info: 'Márcia Silva - Desenvolvedora JAVA',
        },
        {
            id: 2,
            avaliacao: 'Tenho 43 anos e trabalhava como contador, mas passei por uma transição de carreira para a área da tecnologia. Me inscrevi na Tech-Mais para aprender a programar do zero. Me destaquei entre os alunos e fui contratado como Desenvolvedor Android na IBM.',
            img: 'assets/imgs/aluno-2.jpg',
            info: 'Sérgio Paulo - Desenvolvedor Android',
        },
        {
            id: 3,
            avaliacao: 'Comecei os cursos da Tech-Mais assim que saí do ensino médio, os cursos me ajudaram muito para aprender as linguagens de programação, principalmente com as tarefas práticas. Estou estagiando na AltBank graças aos conhecimentos que obtive.',
            img: 'assets/imgs/aluno-3.jpg',
            info: 'Giovanna Alencar - Estagiária',
        },
    ];
    
    const avaliacaoAluno = document.querySelector('.avaliacao');
    const infoAluno = document.querySelector('.info-aluno');
    const imgAluno = document.querySelector('.img-aluno');
    const btnAnterior = document.querySelector('.btn-anterior');
    const btnProximo = document.querySelector('.btn-proximo');
    
    let currentItem = 0;
    
    function mostrarAluno() {
        const item = avaliacoes[currentItem];
        avaliacaoAluno.textContent = item.avaliacao;
        imgAluno.src = item.img;
        infoAluno.textContent = item.info;
    };
    
    btnProximo.addEventListener('click', function() {
        currentItem++;
        if (currentItem > avaliacoes.length - 1) {
            currentItem = 0;
        }
        mostrarAluno();
    });
    
    btnAnterior.addEventListener('click', function() {
        currentItem--;
        if (currentItem < 0) {
            currentItem = avaliacoes.length - 1;
        }
    
        mostrarAluno();
    });
}

export { avaliacoes };