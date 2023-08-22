import { menu } from './menu.js';
import { avaliacoes } from './avaliacoes.js';


function landingPage() {    
    menu();
    avaliacoes();
    
    //form de inscrição
    const btnInscricao = document.querySelector('#inscricao-final');
    const formInscricao = document.querySelector('#form-inscricao');
    const fecharForm = document.querySelector('#fechar-form');

    const areaConfirmarDados = document.querySelector('#confirmar-dados');
    const conteudoDadosInscricao = document.querySelector('#dados-cadastrados');
    const btnConfirmaDados = document.querySelector('#dados-confirmados');
    const btnAlterarCadastro = document.querySelector('#voltar-cadastro');

    btnInscricao.addEventListener('click', function() {
        formInscricao.classList.add('aberto');
    });

    fecharForm.addEventListener('click', function() {
        formInscricao.classList.remove('aberto');
    });

    formInscricao.addEventListener('submit', function(e) {
        e.preventDefault();

        let nome = this.querySelector('#nome').value;
        let email = this.querySelector('#email').value;
        let tel = this.querySelector('#tel').value;
        let cpf = this.querySelector('#cpf').value;
        confirmarDados(nome, email, tel, cpf);
    })

    //confirmar dados de inscrição

    function confirmarDados(nome, email, tel, cpf) {
        areaConfirmarDados.classList.add('aberto');

        conteudoDadosInscricao.innerHTML += `
        <p>Nome: ${nome}</p>
        <p>E-mail: ${email}</p>
        <p>Telefone: ${tel}</p>
        <p>CPF: ${cpf}</p>
        `
    }

    btnConfirmaDados.addEventListener('click', function() {
        areaConfirmarDados.classList.remove('aberto');
        formInscricao.classList.remove('aberto');
        alert('Sua inscrição foi realizada com sucesso!');
    });

    btnAlterarCadastro.addEventListener('click', function() {
        areaConfirmarDados.classList.remove('aberto');
    })

}

window.addEventListener("DOMContentLoaded", function() {
    landingPage();
});

