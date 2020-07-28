import * as fs from "fs";
//fs.appendFileSync("nome do meu arquivo.txt", "texto a ser adicionado");
const arquivo: string = process.argv[2];
const tarefa: string = process.argv[3];
console.log(arquivo);
console.log(tarefa);
fs.appendFileSync(`./src/${arquivo}`, "\n" + tarefa);
