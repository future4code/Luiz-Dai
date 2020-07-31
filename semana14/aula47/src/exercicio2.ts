// a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona
// Na função nomeada coloca async function e na arrow function  é declarada o nome e em vez de function se declara uma const e o async vem depois do igual.
// b. Implemente a função solicitada, usando arrow function

import axios from "axios";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all";

const getSubscribers = async (): Promise<any[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data;
};
