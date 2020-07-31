// *a. O que aconteceria se fizéssemos a requisição dentro de um `forEach`? É recomendável utilizá-lo nesse caso?*
//Não é recomendável, daria erros estranhos pois todo método de array não foram feitos para se mexer nas funções assíncronas.

import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const sendNotifications = async (message: string): Promise<void> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  for (const user of users.data) {
    await axios.post(`${baseUrl}/notifications/send`, {
      subscriberId: user.id,
      message: message,
    });
  }

  console.log("Enviado");
};
sendNotifications("Madruguei hoje hein");
