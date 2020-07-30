import * as moment from "moment";
import { event, allEvents } from "./exercicio1";

const createEvent = (
  name: string,
  description: string,
  startAt: moment.Moment,
  finishAt: moment.Moment
): void => {
  if (!name || !description || !startAt || !finishAt) {
    console.log("Invalid input");
    // Esse return faz a função parar de ser rodada!
    return;
  }

  const diffStartAtAndToday = startAt.diff(moment(), "seconds");
  const diffFinishAtAndToday = finishAt.diff(moment(), "seconds");

  if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
    console.log("Date cannot be prior to the current date");
    return;
  }

  // Variável allEvents criada no ex.1
  allEvents.push({
    name,
    description,
    startAt,
    finishAt,
  });
  console.log(allEvents);
};

createEvent(
  process.argv[2],
  process.argv[3],
  moment(process.argv[4], "DD/MM/YYYY"),
  moment(process.argv[5], "DD/MM/YYYY")
);
