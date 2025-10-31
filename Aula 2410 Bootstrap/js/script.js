//Isto é um comentário

/* Comentário de várias linhas */

/* alert("Ola, Mundo!") Isso é infernal! */


/* Exibe dados no console do navegador (Ótimo e para depuração) */

console.log("Olá Amiguinhos!")
console.warn("Devo aparecer amarelinho!")
console.error("Eu devo estar vermelinho!")

//para criar variáveis usamos o var, let e const

//var é uma forma primitiva e tem escopo globla (evitar)

var texto = "um texto muito loco!"

console.log("Variavel texto: " + texto)

//let tem escopo local e é mais indicado
let ano = 2025

console.log(`Variavel ano: ${ano}`)

//const cria um valor que jamais podera ser alterado
const pi = 3.14
console.log(`Variavel pi = ${pi} Sempre usam isso para const`)

/* O js é fracamente tipado, ou seja, não falamos o tipo da variavel e ela pode mudar de tipo bastando passar um novo valor pára ela

No js não existe explicitamente float e int, tudo é number */


//podemos transportar um elemento do html para o js
//Usamos a função getElementById ou similar
//A página como um todo é chamada de document e tudo vem dela


let nome = document.getElementById('nome')

let faculdade = document.getElementById('faculdade')

let nascimento = document.getElementById('nascimento')

let cor = document.getElementById('cor')



/* O js ao abri uma página mapeia toda a página de internet e trasnforma tudo em variáveis ramificadas (objetos)

O document possui todo o html da página mapeando como propriedades
Ex de como pegar todo o body da página: document.body

*/

document.title ="Troquei o title da página com JS"


function calcularIdade(){
    let idade = ano -  nascimento.value
    console.log(`Voce nasceu em ${nascimento.value}, estamos em ${ano} então você tem ${idade}!`)
}


function trocarCorPagina(){
    document.body.style.backgroundColor = cor.value;
}