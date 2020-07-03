import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Container } from './styles';

function App() {
  const [tarefa, setTarefa] = useState("");
  const [semana, setSemana] = useState("");
  const [listaTarefa, setListaTarefa] = useState([""]);

  const digitarTarefa = (event) => {
    setTarefa(event.target.value);
  };
  console.log(tarefa);

  const criarTarefa = () => {
    const body = {
      text: tarefa,
      day: semana,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Mello-Luiz-Mitsuru-Dai",
        body
      )
      .then((response) => {
        pegarTarefa();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pegarTarefa = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Mello-Luiz-Mitsuru-Dai"
      )
      .then((response) => {
        setListaTarefa(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(listaTarefa);

  useEffect(() => {
    pegarTarefa();
  }, []);

  const selecionarSemana = (event) => {
    setSemana(event.target.value);
  };
  console.log(semana);

  let segunda = [];
  let terca = [];
  let quarta = [];
  let quinta = [];
  let sexta = [];
  let sabado = [];
  let domingo = [];

  listaTarefa.forEach((lista) => {
    switch (lista.day) {
      case "segunda":
        segunda.push(lista);
        break;
      case "terca":
        terca.push(lista);
        break;
      case "quarta":
        quarta.push(lista);
        break;
      case "quinta":
        quinta.push(lista);
        break;
      case "sexta":
        sexta.push(lista);
        break;
      case "sabado":
        sabado.push(lista);
        break;
      case "domingo":
        domingo.push(lista);
        break;
      default:
        break;
    }
  });

  const tarefaRenderizada = (semana) =>
    semana.map((atividade) => <div>{atividade.text}</div>);

  console.log(segunda);
  const seg = tarefaRenderizada(segunda);
  const ter = tarefaRenderizada(terca);
  const quar = tarefaRenderizada(quarta);
  const quin = tarefaRenderizada(quinta);
  const sex = tarefaRenderizada(sexta);
  const sab = tarefaRenderizada(sabado);
  const dom = tarefaRenderizada(domingo);

  //Eu fiz um forEach no array da api dando push nos arrays dos dias, depois map nos arrays dos dias//
  return (
    <div>
      <header>
        <h1>PLANNER</h1>
      </header>
      <div>
        <h2>Minhas Tarefas</h2>
        <label htmlFor="novaTarefa">Nova Tarefa: </label>
        <input
          onChange={digitarTarefa}
          type="text"
          name="tarefa"
          id="tarefa"
        ></input>
        <select onChange={selecionarSemana} name="diaDaSemana" id="diaDaSemana">
          <option>SELECIONE</option>
          <option value="segunda">SEGUNDA-FEIRA</option>
          <option value="terca">TERÇA-FEIRA</option>
          <option value="quarta">QUARTA-FEIRA</option>
          <option value="quinta">QUINTA-FEIRA</option>
          <option value="sexta">SEXTA-FEIRA</option>
          <option value="sabado">SÁBADO</option>
          <option value="domingo">DOMINGO</option>
        </select>
        <button onClick={criarTarefa}>ADICIONAR TAREFA</button>
        <div>
          <h4>SEGUNDA-FEIRA</h4>
          {seg}
        </div>
        <div>
          <h4>TERÇA-FEIRA</h4>
          {ter}
        </div>
        <div>
          <h4>QUARTA-FEIRA</h4>
          {quar}
        </div>
        <div>
          <h4>QUINTA-FEIRA</h4>
          {quin}
        </div>
        <div>
          <h4>SEXTA-FEIRA</h4>
          {sex}
        </div>
        <div>
          <h4>SÁBADO</h4>
          {sab}
        </div>
        <div>
          <h4>DOMINGO</h4>
          {dom}
        </div>
      </div>
    </div>
  );
}

export default App;
