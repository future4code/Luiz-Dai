import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const createSubscriber = async (name: string, email: string) => {
  await axios.put(`${baseUrl}/subscribers`, {
    name,
    email,
  });
};

const createAndSendNotifications = async (
  title: string,
  content: string
): Promise<void> => {
  try {
    await axios.put(`${baseUrl}/news`, {
      title,
      content,
      date: Date.now(),
    });
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    const promisesArray: Promise<any>[] = [];
    for (const user of users.data) {
      promisesArray.push(
        axios.post(`${baseUrl}/notifications/send`, {
          subscriberId: user.id,
          message: "Boas novas",
        })
      );
    }
    await Promise.all(promisesArray);
    console.log("Enviado");
  } catch (error) {
    console.log(error.message);
  }
};

const getAllNotifications = async (): Promise<any> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  const notificationPromises: Promise<any>[] = [];
  for (const user of users.data) {
    notificationPromises.push(
      axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
    );
  }
  const result = await Promise.all(notificationPromises);

  const dataFromResult = result.map((res) => res.data);
  console.log(dataFromResult);
  return dataFromResult;
};

// a- createSubscriber("Tailor", "tailornuncamorto@gmail.com");
// b- createAndSendNotifications("Finalmente", "Acabando.... ");
// c- getAllNotifications();
