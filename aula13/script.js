 const NOME = document.querySelector('#nome_input')
 const N1 = document.querySelector('#n1_input')
 const N2 = document.querySelector('#n2_input')
 const N3 = document.querySelector('#n3_input')
 const botao = document.querySelector('.submit')

botao.addEventListener('click', salvar_dados)

function salvar_dados(){
    localStorage.setItem('n1', N1.value)
    localStorage.setItem('n2', N2.value)
    localStorage.setItem('n3', N3.value)
    localStorage.setItem('nome', NOME.value)
}
























