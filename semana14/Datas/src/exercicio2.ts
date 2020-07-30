import * as moment from "moment";
import { event, allEvents } from "./exercicio1";

moment.locale("pt-br");

const printAllEvents = (events: event[]): void => {
  events.forEach((item: event) => {
    const duration = item.finishAt.diff(item.startAt, "minutes");

    const today = moment();
    const daysUntilEvent = item.startAt.diff(today, "days");

    console.log(`
			Nome: ${item.name}
			Horário de início: ${item.startAt.format("dddd, DD de MMMM de YYYY, HH:mm")}
			Horário de fim: ${item.finishAt.format("DD de MMMM de YYYY, HH:mm")}
			Descrição: ${item.description}
		`);
  });
};

printAllEvents(allEvents);

// b) Que alterações precisariam ser feitas com as datas e horários caso a festa acontecesse em Londres, Inglaterra? (Responda essa pergunta em um comentário. Você não precisa implementar)
//Usar new Date ou  usaria o UTC de Londres.
