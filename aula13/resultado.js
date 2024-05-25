const NOME = document.querySelector('#nome')
const MEDIA = document.querySelector('#media')
const RESULTADO = document.querySelector('#resultado')

window.onload = function() {
    const nome_salvo = localStorage.getItem('nome')
    const n1_salvo = parseInt( localStorage.getItem('n1'))
    const n2_salvo = parseInt( localStorage.getItem('n2'))
    const n3_salvo = parseInt( localStorage.getItem('n3'))

    const media =(n1_salvo + n2_salvo + n3_salvo) /3
    let aprovado = ''

    if (media >= 7){
        aprovado = 'Aprovado'
    }

    else if (media <= 4){
        aprovado = 'Reprovado'
    }

    else{
        aprovado = 'Recuperacão'
    }

    NOME.innerHTML = nome_salvo

    MEDIA.innerHTML = media.toFixed(1)

    RESULTADO.innerHTML = aprovado
}



































