const senha_elemento = document.getElementById('senha')
const copiar_elemento = document.getElementById('copiar')
const tamanho_elemento = document.getElementById('tamanho')
const maiusculas_elemento = document.getElementById('maiusculas')
const minusculas_elemento = document.getElementById('minusculas')
const numeros_elemento = document.getElementById('numeros')
const caracteres_especiais = document.getElementById('caracteres-especiais')
const gerar_senha_btn = document.querySelector('.submit')
const limpar_btn = document.querySelector('.reset')


const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const minusculas = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '1234567890'
const caracteres = '!@#$%&*()_+-=?/,.;<>:|ç'

gerar_senha_btn.addEventListener('click', gerar_senha)
limpar_btn.addEventListener('click',atualizar_pagina)
copiar_elemento.addEventListener('click',copiar)

function copiar(){
    const area_texto = document.createElement('textarea')
    const pw =  senha_elemento.innerText

    if (!pw){
        return
    }

    area_texto.value = pw
    document.body.appendChild(area_texto)
    area_texto.select()
    document.execCommand('copy')
}