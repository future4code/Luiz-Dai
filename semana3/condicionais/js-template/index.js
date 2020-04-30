/*const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

Exercício 1 - Explique o que o código faz. Qual o teste que ele realiza?
 Para que tipos de números ele imprime no console "Passou no teste"?
 Para que tipos, a mensagem é "Não passou no teste"? 
 
 Resposta o código pega o número que o usuário digita no prompt que se torna uma String
 Tranforma em Number, verifica se o resto do número digitado é 0 se for imprimi Passou no Text
 se não imprimi não passou no TextDecoderStream.*/

 /*
 Exercício 2
 
 let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

Resposta- a. Para que serve o código acima?
O código acima serve para quando o usuário digitar uma fruta seja mostrado o valor da fruta escolhida
foi utilizado o switch 

Resposta- b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
   
Será mostrado o valor 2.25.

Resposta- c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. 
Qual seria o preço que você pagaria?

O preço que eu pagaria seria de 24.25. 

d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos 
o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?

Seria mostrado O preço da fruta  pera  é  R$  5.
*/

/*

Exercício 3

const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")
let mensagem = 0
if(numero1 > 0 && numero2 > 0) {
  
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)

/*index.js:73 Uncaught ReferenceError: mensagem is not defined
    at index.js:73
    Fala que mensagem não foi definido. O let como estava no bloco filho e não
    foi declarado antes no escopo pai com indice 0 esta como indefinido
    
    PS: Acabei arrumando o código por ter toc que funcione as coisas rsrs
    */

  //EXERCÍCIO 4
  //Nos exercícios abaixo, será necessário que você trabalhe com a comparação de números. Leia abaixo:
  /*a. Crie um programa que receba dois números do usuário
   através do prompt e imprima-os na ordem decrescente. 
   O que acontece com o seu programa se os 2 números forem iguais?
   (é só testar e colocar um comentário descrevendo o que aconteceu)*/
   
  /* let valor1 = prompt("Digite um número")
   let valor2 = prompt("Digite outro número")
   let numero1 = Number(valor1)
   let numero2 = Number(valor2)
   
if (numero1 > numero2) {
    console.log(numero1, numero2)
} else if (numero2 >numero1){
console.log(numero2, numero1)
} else{
    console.log("Os números são iguais")
}*/

//Se os números são iguais aparece os números são iguais

/*b. Adapte o programa para que o usuário digite 3 números.
 Ainda os imprima na ordem decrescente. O que acontece como seu programa se os 3 números forem iguais?
 (é só testar e colocar um comentário descrevendo o que aconteceu)*/

/* let valor1 = prompt("Digite um número")
 let valor2 = prompt("Digite outro número")
 let valor3 = prompt("Digite outro número")
 let numero1 = Number(valor1)
 let numero2 = Number(valor2)
 let numero3 = Number(valor3)

 if (numero1 > numero2 && numero2 > numero3) {
    console.log(numero1, numero2, numero3)
 } else if(numero1<numero2 && numero2<numero3){
     console.log(numero3, numero2, numero1)
 }else if (numero1>numero2 && numero2<numero3){
     console.log(numero1, numero3, numero2)
 }else if (numero1<numero2 && numero2>numero3){
     console.log(numero2, numero3, numero1)
 }else{
     console.log("Números iguais")
 }
//Mostra números iguais

/*c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, 
mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.*/
    
/*let valor1 = prompt("Digite um número")
let valor2 = prompt("Digite outro número")
let valor3 = prompt("Digite outro número")
let numero1 = Number(valor1)
let numero2 = Number(valor2)
let numero3 = Number(valor3)

if (numero1 > numero2 && numero2 > numero3) {
   console.log(numero1, numero2, numero3)
} else if(numero1<numero2 && numero2<numero3){
    console.log(numero3, numero2, numero1)
}else if (numero1>numero2 && numero2<numero3){
    console.log(numero1, numero3, numero2)
}else if (numero1<numero2 && numero2>numero3){
    console.log(numero2, numero3, numero1)
}else{
    console.log("Digite um número diferente pelo menos")
}*/

//Exercicio 5
/*a. Escreva o diagrama esquemático que melhor represente a árvore condicional do exercício. 
(Coloque a imagem do esquema no drive e gerem um link de compartilhamento público. 
    Coloque este link num comentário durante a resolução deste exercício)*/

//https://drive.google.com/open?id=11Yt7on74pRvis58H6TzvSueJFe5M0ADR

/*b. Escreva um programa que realize estas perguntas  e indique a classificação final considerada. 
As opções são: ser humano; mamífero não humano; ave; réptil; anfíbio; peixe ou é invertebrado */



let possuiOssos = prompt("O animal possui ossos?")
 if (possuiOssos === "s") {
  } let possuiPelos = prompt("O animal possui pelos?")
  if (possuiPelos === "s") {
  } let racional = prompt("É um animal racional?")


