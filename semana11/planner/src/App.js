import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Container } from './styles';
import { Header, Body, Form, Gride, Selection } from "./style";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: "linear-gradient(45deg, #0c1f38 30%, #ff99cc 90%)",
    margin: "10px",
    color: "white",
  },
}));

const useButton = makeStyles({
  root: {
    background: "linear-gradient(45deg, #0c1f38 30%, #ff99cc 90%)",
    border: 0,
    borderRadius: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    textShadow: "2px 2px 2px 2px black",
    height: 25,
    padding: "0 30px",
  },
});

function App() {
  const classes = useStyles();
  const customizeButton = useButton();
  const [tarefa, setTarefa] = useState("");
  const [semana, setSemana] = useState("");
  const [listaTarefa, setListaTarefa] = useState([]);

  useEffect(() => {
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
  }, []);

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
        console.log("criou");
      })
      .catch((err) => {
        console.log(err);
      });
    const dado = [...listaTarefa, body];
    setListaTarefa(dado);
  };

  const selecionarSemana = (event) => {
    setSemana(event.target.value);
  };

  async function removeTarefa(id) {
    try {
      await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Mello-Luiz-Mitsuru-Dai/${id}`
      );
      const pega = listaTarefa.findIndex((t) => t.id === id);
      if (pega !== -1) {
        listaTarefa.splice(pega, 1);
      }
      setListaTarefa([...listaTarefa]);
      console.log(`deletou ${id}`);
    } catch (error) {
      console.log(error);
    }
  }

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
    semana.map((atividade) => (
      <div key={atividade.id}>
        <button onClick={() => removeTarefa(atividade.id)}>DELETAR</button>
        {atividade.text}
      </div>
    ));

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
      <Header>
        <h1>PLANNER</h1>
      </Header>
      <Body>
        <h2>Minhas Tarefas</h2>
        <Form>
          <label htmlFor="novaTarefa">Nova Tarefa: </label>
          <input
            onChange={digitarTarefa}
            type="text"
            name="tarefa"
            id="tarefa"
          ></input>
          <Selection
            onChange={selecionarSemana}
            name="diaDaSemana"
            id="diaDaSemana"
          >
            <option>SELECIONE</option>
            <option value="segunda">SEGUNDA-FEIRA</option>
            <option value="terca">TERÇA-FEIRA</option>
            <option value="quarta">QUARTA-FEIRA</option>
            <option value="quinta">QUINTA-FEIRA</option>
            <option value="sexta">SEXTA-FEIRA</option>
            <option value="sabado">SÁBADO</option>
            <option value="domingo">DOMINGO</option>
          </Selection>
          <Button
            className={customizeButton.root}
            size="small"
            onClick={criarTarefa}
          >
            ADICIONAR TAREFA
          </Button>
        </Form>

        <Gride className={classes.root}>
          <Grid container spacing={3}>
            <Grid item="xs">
              <Paper className={classes.paper}>
                <h4>SEGUNDA-FEIRA</h4>
                {seg}
              </Paper>
            </Grid>
            <Grid item="xs">
              <Paper className={classes.paper}>
                <h4>TERÇA-FEIRA</h4>
                {ter}
              </Paper>
            </Grid>
            <Grid item="xs">
              <Paper className={classes.paper}>
                <h4>QUARTA-FEIRA</h4>
                {quar}
              </Paper>
            </Grid>
            <Grid item="xs">
              <Paper className={classes.paper}>
                <h4>QUINTA-FEIRA</h4>
                {quin}
              </Paper>
            </Grid>
            <Grid item="xs">
              <Paper className={classes.paper}>
                <h4>SEXTA-FEIRA</h4>
                {sex}
              </Paper>
            </Grid>
            <Grid item="xs">
              <Paper className={classes.paper}>
                <h4>SÁBADO</h4>
                {sab}
              </Paper>
            </Grid>
            <Grid item="xs">
              {" "}
              <Paper className={classes.paper}>
                <h4>DOMINGO</h4>
                {dom}
              </Paper>
            </Grid>
          </Grid>
        </Gride>
      </Body>
    </div>
  );
}
export default App;
