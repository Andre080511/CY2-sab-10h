// TIPOS DE DADOS
/**
 * NUMBER => int float NaN
 * STRING => texto
 * BOOLEAN => true false
 * NULL => vazio
 * UNDEFINED => sem definição
 */


//* CONVERTER TIPOS
/**
 * var = 4
 * de num para string
 * var.toString()
 * 
 * de string para num
 * parseInt(var)
 * ou
 * parseFloat(var)
 */


//? OPERADORES ARITIMETICOS
/**
 * + ADIÇAO
 * - SUBTRAÇAO
 * * MULTIPLICAÇAO
 * / DIVISAO
 * % RESTO DA DIVISAO
 * ** POTENCIA
 */


//! OPERADORES LOGICOS
/**
 * > MAIOR QUE
 * < MENOR QUE
 * >=MAIOR OU IGUAL
 * <=MENOR OU IGUAL
 * == (2 INGUAIS) IGUALDADE
 * === (3 INGUAIS) IGUALDADE DE TIPOS
 * != (! E INGUAL) DIFERENTE
 */


//OPERADORES LOGICOS
/**
 * ! NÃO 
 * && E - CONJUNÇAO
 * || OU - DISJUNÇAO
 */


// VARIAVEIS
/**
 * VAR   - PODE REDEFINIR
 * LET   - NÃO PODE REDEFINIR
 * CONST - 
 */


// OUTROS TIPOS DE DADOS
/**
 * ARRAY = LISTA
 * OBJECT
 * 
 */


// CONDICIONAIS
/**
 * IF (CONDIÇAO_A)
 * {
 *      PLANO A
 * }
 * ELSE IF (CONDIÇAO)
 * {
 *      PLANO B
 * }
 * ELSE
 * {
 *      PLANO RESTO
 * }
 */


// ESTRUTURA DE REPETIÇAO
/**
 * FOR I IN RANGE(10)
 * 
 * FOR (let i = 1; i < 11; i++)
 * {
 *      o que tem que ser repitido
 * }
 */

/**
let x = 5
let y = 3

let soma = x+y

//window.alert(soma)
document.write('<h1>' + soma + '</h1>')
document.write(soma)
document.write(`<h1> ${soma} </h1>`)
 */


/**let resposta = window.prompt('digite um numero')

let num = resposta % 2

if (num == 0)
{
    window.alert('seu numero é par!')
}
else
{
    window.alert('seu numero é impar!')
} */

//let soma = parseInt(window.prompt('digite um numero'))
//let soma2 = parseInt(window.prompt('digite outro numero'))
//let resultado = soma + soma2

//document.write(resultado)

let tabuada = parseInt(window.prompt('digite um numero e aparecera a sua tabuada de 1 a 10'))

for (let i = 1; i < 11; i++)
{
    document.write(`${tabuada} x ${i} = ${tabuada*i}<br>`)
}