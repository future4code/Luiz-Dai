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
