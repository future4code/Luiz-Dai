import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useForm from "./hooks/useForm";
import Planets from "./Planets";
import { Header, Body, Form } from "../Styleds/Styled";
import Button from "@material-ui/core/Button";

export default function CreateTripPage() {
  const token = localStorage.getItem("token");

  const { form, onChange, resetForm } = useForm({
    nome: "",
    data: "",
    descricao: "",
    planeta: "",
    duracao: "",
  });

  const createTrip = () => {
    const body = {
      name: form.nome,
      description: form.descricao,
      planet: form.planeta,
      durationInDays: Number(form.duracao),
      date: form.data,
    };
    const headers = {
      headers: { auth: token },
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Luiz-Mitsuru-Dai-Mello/trips",
        body,
        headers
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTrip();
    resetForm();
  };

  return (
    <div>
      <Header>
        {" "}
        <h1>CreateTripPage</h1>
      </Header>
      <Body>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input
            name="nome"
            value={form.nome}
            onChange={handleInputChange}
            id="name"
            type="text"
            required
            pattern="[A-Za-z ]{5,}"
          ></input>
          <Planets onChange={handleInputChange} value={form.planeta} />
          <label htmlFor="date">Data:</label>
          <input
            name="data"
            value={form.data}
            onChange={handleInputChange}
            id="date"
            type="date"
            required
            min={new Date().toJSON().split("T")[0]}
          ></input>
          <label htmlFor="description">Descrição:</label>
          <input
            name="descricao"
            value={form.descricao}
            onChange={handleInputChange}
            id="description"
            type="text"
            required
            pattern="[A-Z a-z]{30,}"
          ></input>
          <label htmlFor="durationInDays">Duração da viagem em dias</label>
          <input
            name="duracao"
            value={form.duracao}
            onChange={handleInputChange}
            id="durationInDays"
            type="number"
            required
            min="50"
          ></input>
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="submit"
          >
            ENVIAR
          </Button>
        </Form>
      </Body>
    </div>
  );
}
