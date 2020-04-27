const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a.false ", resultado)

resultado = (bool2 || bool1) && !bool3
console.log("b.false ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c.true ", resultado)

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d.false ", resultado)

console.log("e.boolean ", typeof resultado)

let array
console.log('I.undefined ', array)

array = null
console.log('II.null ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III.11 ', array.length)

let i = 0
console.log('IV. ', array[i], "3 e 4 ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " 19 e 9 ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. 3 ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. 1 ', resultadoC)

/*a. O que é array e como se declara em JS?

Uma array é uma matriz que guarda vários objetos dentro e se declara
com o uso de [].

b. Qual o index inicial de um array?

O index inicial de um array é 0.

c. Como se determinar o tamanho do array?

Para determinar o tamanho de um array se usa o length.

d. Indique todas as mensagens impressas no console.

Usa o console.log para imprimir todas as mensagens no console.

*/
