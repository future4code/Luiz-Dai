//a) Como fazemos para acessar os parâmetros passados na linha de comando para o node?

//Através da propriedade process.argv

//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
import * as fs from "fs";

const nome: string | undefined = process.argv[2];
const idade: number = Number(process.argv[3]);
console.log(`Olá, ${nome}!, Você tem ${idade} anos.`);

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
const soma: number = 7 + idade;
console.log(
  `Olá, ${nome}!, Você tem ${idade} anos. Em sete anos você terá ${soma}`
);
