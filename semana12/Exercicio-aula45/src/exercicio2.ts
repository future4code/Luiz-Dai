/*Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.*/

const soma: number = Number(process.argv[3]) + Number(process.argv[4]);
const sub: number = Number(process.argv[3]) - Number(process.argv[4]);
const mult: number = Number(process.argv[3]) * Number(process.argv[4]);
const div: number = Number(process.argv[3]) / Number(process.argv[4]);

const operator: string = process.argv[2];
switch (operator) {
  case "add":
    console.log(`Resposta é ${soma}`);
    break;
  case "sub":
    console.log(`Resposta é ${sub}`);
    break;
  case "mult":
    console.log(`Resposta é ${mult}`);
    break;
  case "div":
    console.log(`Resposta é ${div}`);
    break;
  default:
    console.log("Alternativa inexistente");
}
