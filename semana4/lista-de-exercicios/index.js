//Exercício 1 fianalizado
//Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.

//Podemos percorrer uma lista usando o for, foreach e o for of.

/*const numeros = [15,17,99,98,74]
for(let numero of numeros){
    console.log(numero)
}*/

//exercicio 2
//a false
//b false
//c false
//d true
//e false

/*let quantidadeDeNumerosPares=[]
let i = 1
while(quantidadeDeNumerosPares) {
  
    i++
    console.log(i*2)
}
//ele dá um loop infinito*/

//exercicio 4

let a = prompt("digite um numero")
let b = prompt("digite outro numero")
let c = (prompt("digite mais um numero"))
 let n1 = Number(a)
 let n2 =Number(b)
 let n3= Number(c)
if (n1===n2===n3) {
     console.log("Equilatero")
 }else if (n1!=n2===n3){
     console.log("Isosxeles")
 }
     

 