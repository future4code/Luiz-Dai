// a. Se apenas trocarmos o retorno da função para: Promise<User[]> , teremos algum erro de tipagem?
// Não vai indicar erro
// b. Na aula, comentamos que sempre fazemos um mapeamento do resultado de uma Promise, caso seja inidicado que ela retorne um Promise<any>. Explique com as suas palavras o porquê de fazermos isso
// Por ser uma promessa e não sabemos o que vai retornar colocamos any.
// c. Reimplemente a função, corretamente.

import axios from "axios";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all";
type User = {
  id: string;
  name: string;
  email: string;
};
const getSubscribers = async (): Promise<User[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};
