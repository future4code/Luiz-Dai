function criarTarefa() {
   const meuInput = document.querySelector("meuInput").value;
}
const novaTarefa = meuInput.value;
if (novaTarefa==="") {
    alert("Coloque uma tarefa");
}

const listaSemana = document.querySelector(".semanaTamanho");
const lista = listaSemana.value;
console.log(lista);

let listaTarefas = document.querySelector("#" + lista + "ul-tarefas");
console.log(listaTarefas);
listaTarefas.innerHTML += "<li>" + novaTarefa +"</li>" ;
console.log(listaTarefas);

