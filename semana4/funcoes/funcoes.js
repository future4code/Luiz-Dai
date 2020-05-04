const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}
/*a. Indique qual será o resultado da função caso 
ela seja chamada como minhaFuncao(2)*/
console.log(minhaFuncao(2))// array[0]