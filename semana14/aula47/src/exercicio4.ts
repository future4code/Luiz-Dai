// a. Qual é o tipo dessa função? Por quê?
//Ela é async porque toda função async retorna uma Promise

import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

async function createNews(title: string, content: string): Promise<void> {
  try {
    await axios.put(`${baseUrl}/news`, {
      title,
      content,
      date: Date.now(),
    });
  } catch (error) {
    console.log(error.message);
  }
}

createNews("Streamer enche a cara", "Hoje O Galga vai beber muito");
