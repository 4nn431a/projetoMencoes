var nome
var selecao
var selecaodisciplina
var selecaomencao

function cadastrar() {
    nome = document.getElementById('inputnome').value;
    document.getElementById('nomealuno').textContent = nome

    selecao = document.getElementById('disciplina')
    selecaodisciplina = selecao.options[selecao.selectIndex].value

    selecao - document.getElementById('mencao')
    selecaomencao = selecao.options[selecao.selectIndex].value

    localStorage.setItem(selecaodisciplina,selecaomencao)
}

function listar() {
    var exibirdisciplina
    var exibirmencao

    selecao = document.getElementById('disciplina')
    selecaodisciplina = selecao.options[selecao.selectIndex].value

    localStorage.setItem(selecaodisciplina)

    document.getElementById('exibirdisciplina').textContent = selecaodisciplina
    document.getElementById('exibirmencao').textContent = exibirmencao
}