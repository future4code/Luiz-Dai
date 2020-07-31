// a. Qual endpoint você deve utilizar para isso?
// Atraves do subscribers all

// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
// Com promise any

// c. Implemente uma função nomeada que faça o que foi pedido

import axios from "axios";
const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all";

async function getSubscribers(): Promise<any[]> {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data;
}
