/*let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)*/

//enquanto i for menor que 15 identa +1 ate i ser maior que 15 O resultado impresso é 105

/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 4
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)*/

//a. O que o comando .push faz?
//Adiciona um conteudo na array

//b. Qual o valor impresso no console?
//É impresso (4)[10, 15, 25, 30]

//c. Qual seria imprimido no console se a variável numero tivesse o valor de 3? E se tivesse o valor de 4?
// (6)[12, 15, 18, 21, 27, 30] com o valor 3
// [12] com o valor 4

/*Nas perguntas abaixo, considere que você tenha acesso a um array  
(chamado de 'array original') que seja composto somente de números. 
Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.*/

//a. Escreva um programa que devolva o maior e o menor números contidos no array original

/*const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maiorNumero = array[0]
let menorNumero = array[0]
for (let i = 0; i < array.length; i++) {
   if (array[i] > maiorNumero) {
       maiorNumero = array[i]
   }else if (array[i]<menorNumero) {
       menorNumero = array[i]
   }
}
console.log("O maior número é " + maiorNumero + " e o menor número é " + menorNumero)*/

//b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

aparece 4 linhas cada um com 0 correspondente a linha
 0
 00
 000
 0000*/

 


const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const numero =[]
for(let numeros of array){
 numero.push(numeros/10)  
   
}
console.log(`${numero}`)