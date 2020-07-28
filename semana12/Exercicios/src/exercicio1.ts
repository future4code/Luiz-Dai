const minhaString: string = "Felicidade"; // colocando número da erro

const meuNumero: number | string = "Alegria";

type person = {
  nome: string;
  idade: number;
  corFavorita: string;
};

const pessoa1: person = {
  nome: "Jose",
  idade: 29,
  corFavorita: "azul",
};
const pessoa2: person = {
  nome: "Jose",
  idade: 23,
  corFavorita: "vermelho",
};

const pessoa3: person = {
  nome: "Paulo",
  idade: 18,
  corFavorita: "roxo",
};

const pessoa4: person = {
  nome: "Leandro",
  idade: 20,
  corFavorita: "verde",
};

enum CORARCOIRIS {
  AZUL = "azul",
  VIOLETA = "violeta",
  ANIL = "anil",
  VERDE = "verde",
  AMARELO = "amarelo",
  LARANJA = "laranja",
  VERMELHO = "vermelho",
}

type pessoas = {
  nome: string;
  idade: number;
  corFavorita: CORARCOIRIS;
};

const aluno: pessoas = {
  nome: "Fernando",
  idade: 23,
  corFavorita: CORARCOIRIS.AZUL,
};
