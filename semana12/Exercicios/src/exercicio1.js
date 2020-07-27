var minhaString = "Felicidade"; // colocando número da erro
var meuNumero = "Alegria";
var pessoa1 = {
    nome: "Jose",
    idade: 29,
    corFavorita: "azul"
};
var pessoa2 = {
    nome: "Jose",
    idade: 23,
    corFavorita: "vermelho"
};
var pessoa3 = {
    nome: "Paulo",
    idade: 18,
    corFavorita: "roxo"
};
var pessoa4 = {
    nome: "Leandro",
    idade: 20,
    corFavorita: "verde"
};
var CORARCOIRIS;
(function (CORARCOIRIS) {
    CORARCOIRIS["AZUL"] = "azul";
    CORARCOIRIS["VIOLETA"] = "violeta";
    CORARCOIRIS["ANIL"] = "anil";
    CORARCOIRIS["VERDE"] = "verde";
    CORARCOIRIS["AMARELO"] = "amarelo";
    CORARCOIRIS["LARANJA"] = "laranja";
    CORARCOIRIS["VERMELHO"] = "vermelho";
})(CORARCOIRIS || (CORARCOIRIS = {}));
var aluno = {
    nome: "Fernando",
    idade: 23,
    corFavorita: CORARCOIRIS.AZUL
};
