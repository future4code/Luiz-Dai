// a. O que o Promise.all faz?
// Lança Promises em lote ,faz com que várias aconteçam ao mesmo tempo.
// b. Quais as vantagens de se utilizar o Promise.all no caso de se enviar as notificações para todos os usuários?
//Envia tudo ao mesmo tempo.

import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const sendNotifications = async (message: string): Promise<void> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  const promisesArray: Promise<any>[] = [];
  for (const user of users.data) {
    promisesArray.push(
      axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: user.id,
        message: message,
      })
    );
  }
  await Promise.all(promisesArray);
  console.log("Enviado");
};
sendNotifications("Virei o dia");
