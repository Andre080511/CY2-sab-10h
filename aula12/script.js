const QUESTOES_QUIZ = [
    {
        questao: "Qual é o simbolo do Dia das mães?",
        a: 'flor',
        b: 'coração',
        c: 'presente',
        d: 'mãe',
        correta: 'flor'
    },
    {
        questao: "Qual qual a data do dia das mães",
        a: '1° domingo de maio',
        b: '1 de janeiro',
        c: '2° domingo de maio',
        d: '35 de dezembro',
        correta: '2° domingo de maio°'
    }

]

const QUIZ_TITULO = document.getElementById('questao')
const ALTERNATIVA_A = document.getElementById('text_a')
const ALTERNATIVA_B = document.getElementById('text_b')
const ALTERNATIVA_C = document.getElementById('text_c')
const ALTERNATIVA_D = document.getElementById('text_d')
const BOTAO = document.getElementById('enviar')
const QUIZ_CONTAINER = document.getElementById('quiz')
const RESPOSTAS = document.querySelectorAll('.resposta')

let questao_atual = 0
let corretas = 0

carregar_quiz()

function carregar_quiz()
{
    const INFO_QUESTAO = QUESTOES_QUIZ[questao_atual]
    QUIZ_TITULO.innerText = INFO_QUESTAO.questao
    ALTERNATIVA_A.innerText = INFO_QUESTAO.a
    ALTERNATIVA_B.innerText = INFO_QUESTAO.b
    ALTERNATIVA_C.innerText = INFO_QUESTAO.c
    ALTERNATIVA_D.innerText = INFO_QUESTAO.d
}

function pegar_resposta()
{
    let resposta = undefined
    RESPOSTAS.forEach((resp_elemento) =>{
        if (resp_elemento.checked){
            resposta = resp_elemento.id
        }
    })
    return resposta
}

function clicado()
{
    const RESP = pegar_resposta()
    const TOTAL_PERGUNTAS = QUESTOES_QUIZ.length

    if (RESP === QUESTOES_QUIZ[questao_atual].correta)
    {
        corretas++
    }
    questao_atual++
    if(questao_atual< TOTAL_PERGUNTAS)
    {
        carregar_quiz
    }
}

BOTAO.addEventListener('click', clicado)



