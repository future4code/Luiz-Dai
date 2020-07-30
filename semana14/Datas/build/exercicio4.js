"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const exercicio1_1 = require("./exercicio1");
const createEvent = (name, description, startAt, finishAt) => {
    if (!name || !description || !startAt || !finishAt) {
        console.log("Invalid input");
        return;
    }
    const diffStartAtAndToday = startAt.diff(moment(), "seconds");
    const diffFinishAtAndToday = finishAt.diff(moment(), "seconds");
    if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
        console.log("Date cannot be prior to the current date");
        return;
    }
    exercicio1_1.allEvents.push({
        name,
        description,
        startAt,
        finishAt,
    });
    console.log(exercicio1_1.allEvents);
};
createEvent(process.argv[2], process.argv[3], moment(process.argv[4], "DD/MM/YYYY"), moment(process.argv[5], "DD/MM/YYYY"));
//# sourceMappingURL=exercicio4.js.map