let boasVindas = confirm("Bem Vindo ao jogo deseja iniciar uma partida?")
let jogar = boasVindas
const carta = comprarCarta();
const carta2 = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros
let usuario = comprarCarta()
let computador = comprarCarta()
let valor = carta.valor + carta.valor
  
 
  if((jogar=== true)) {
     console.log(` Usuário carta  ${carta.valor} ${carta.texto}  valor ${valor}`) // o que fazer se o usuário clicar "ok"
     console.log(` Computador carta  ${carta2.valor} ${carta2.texto} valor ${valor}`)
   } else if (jogar=== false) {
      console.log("O jogo acabou")
   } if (carta>carta2){
      console.log(`Venceu Usuário carta  ${carta.valor} ${carta.texto}  valor ${valor}`)
   }else if(carta2>carta){
      console.log(`Venceu Computador carta  ${carta2.valor} ${carta2.texto} valor ${valor}`)
   }else{
      console.log(`Empate Usuário carta  ${carta.valor} ${carta.texto}  valor ${valor} Computador carta  ${carta2.valor} ${carta2.texto} valor ${valor}` )
   }
   // o que fazer se o usuário clicar "cancelar"
   
 
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 