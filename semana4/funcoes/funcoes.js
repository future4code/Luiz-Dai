/*const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}*/
/*a. Indique qual será o resultado da função caso 
ela seja chamada como minhaFuncao(2)*/
//console.log(minhaFuncao(2))// array[0]

/*b. Indique qual será o resultado da função 
caso ela seja chamada como minhaFuncao(5)*/

//console.log(minhaFuncao(5))
/*6) [0, 1, 0, 1, 2, 3]0: 01: 12: 03: 14: 25: 
3length: 6__proto__: Array(0)*/

/*c. Indique qual será o resultado da função 
caso ela seja chamada como minhaFuncao(8)*/

//console.log(8)//6) [0, 1, 0, 1, 2, 3]0: 01: 12: 03: 14: 25: 
//3length: 6__proto__: Array(0)

//Exercício 2

/*let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};*/

/*console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));*/

    // 0 2  undefined
    /*0 é o Darvas, 
    2 é o João e undefind é a Paula pois não está na lista*/

    /*b. O código funcionaria se a lista fosse um 
    array de números (ao invés de um array de string)  
    e o nome fosse um número,
     ao se chamar a função? Justifique sua resposta.*/

    //Sim funcionaria porque em um array pode ser colocado números também
      
    //Exercicio 3

    /*function metodo(array) {     //Pega a uma lista e nela adiciona o resultao a + x e b  vezes x e colocaria 
                                 //o resultado na última posição da array.
        let resultadoA = 0;
        let resultadoB = 1;
        let arrayFinal = [];
      
        for (let x of array) {
          resultadoA += x;
          resultadoB *= x;
        }
      
        arrayFinal.push(resultadoA);
        arrayFinal.push(resultadoB);
        return arrayFinal;
      }*/


      // Exercicio 4

      //a. A função deve receber um número correspondente aos "anos humanos" que um cachorro 
      //tem e calcular a "idade de cachorro" dele. Considere que 
      // 1 ano humano equivale a 7 anos de cachorro

      /*let anosHumanos = prompt("Eescreva a idade do seu cachorro")
      idade = anosHumanos
      cachorro = Number(idade)*7
      function calcularIdadeCachorro(cachorro) {
        
        console.log(cachorro)
          return cachorro
      }
      console.log(cachorro)*/

      //b.  Escreva uma função que receba 4 parâmetros que correspondem 
      //às informações de uma pessoa: o nome (string), a idade (number),
      // o endereço (string) e um boolean que representa se é estudante ou não. 
      //Ela deve retornar uma string que unifique todas 
      //as informações da pessoa em uma só mensagem com o template:
     
     
       let descricao= []
       const nome= prompt("Qual é o seu nome?")
       const idade = prompt("Qual é a sua idade?")
       let endereco = prompt("Qual é o seu enderço?")
       let estudante = prompt("Você estuda?")
       let aluno = estudante
      
       
           
       
       for (const aluno of estudante) {
           if(aluno==="sim"){
               console.log("Sou aluno")
           }else if(aluno==="nao"){
               console.log("Não sou aluno")
           }
       }
        console.log(aluno)