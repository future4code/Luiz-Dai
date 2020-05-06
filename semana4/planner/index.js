function criarTarefa() {
    let tarefa = document.getElementById("novaTask").value;
    let semana = document.getElementById("diaDaSemana").value;
   
    
switch (semana) {
    
    case "segunda":
        document.getElementById("segunda").innerHTML +=`<li>${tarefa}</li>`
        break;
    case "terca":
        document.getElementById("terca").innerHTML +=`<li>${tarefa}</li>`
        break;
    case "quarta":
        document.getElementById("quarta").innerHTML +=`<li>${tarefa}</li>`
        break;
    case "quinta":
        document.getElementById("quinta").innerHTML +=`<li>${tarefa}</li>`
        break;
    case "sexta":
        document.getElementById("sexta").innerHTML +=`<li>${tarefa}</li>`
        break;
    case "sabado":
        document.getElementById("sabado").innerHTML +=`<li>${tarefa}</li>`
        break;
    default:
        document.getElementById("domingo").innerHTML +=`<li>${tarefa}</li>`
        break;
}
}
