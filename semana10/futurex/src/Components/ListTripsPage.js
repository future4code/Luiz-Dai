import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useForm from "./hooks/useForm";
import axios from "axios";
import { Header, Body, Form } from "../Styleds/Styled";
import Button from "@material-ui/core/Button";

export default function ListTripsPage() {
  const [lista, setLista] = useState([]);

  const [detalhe, setDetalhe] = useState([]);

  const [candidato, setCandidato] = useState([]);

  const [aprovados, setAprovados] = useState([]);

  const { form, onChange, resetForm } = useForm({
    viagem: "",
  });
  useEffect(() => {
    getList();
    getDetail();
    aprovaCandidato();
  }, []);

  const getList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Luiz-Mitsuru-Dai-Mello/trips"
      )
      .then((response) => {
        setLista(response.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDetail = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: { auth: token },
    };
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/Luiz-Mitsuru-Dai-Mello/trip/${form.viagem}`,
        headers
      )

      .then((response) => {
        setDetalhe(response.data.trip);
        setCandidato(response.data.trip.candidates);
        setAprovados(response.data.trip.approved);
        console.log(response.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(detalhe);
  console.log(candidato);
  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  const goToDetails = () => {
    history.push("/trips/details");
  };
  const goToCreate = () => {
    history.push("/trips/create");
  };
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const newAprovados = aprovados.map((aprovados) => {
    return <div>{aprovados.name}</div>;
  });

  const newCandidato = candidato.map((candidato) => {
    return (
      <div>
        {candidato.name} {candidato.age} {candidato.applicationText}{" "}
        {candidato.country} {candidato.profession}
        {""}
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => aprovaCandidato(true, candidato.id)}
        >
          APROVADO
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => aprovaCandidato(false, candidato.id)}
        >
          REPROVADO
        </Button>
      </div>
    );
  });

  const aprovaCandidato = (decisao, id) => {
    const token = localStorage.getItem("token");
    const body = {
      approve: decisao,
    };
    const headers = {
      headers: { auth: token },
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/Luiz-Mitsuru-Dai-Mello/trips/${form.viagem}/candidates/${id}/decide`,
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
  console.log(candidato);
  return (
    <div>
      <Header>
        <h1>ListTripsPage</h1>
      </Header>
      <Body>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="lista"></label>
          <select
            onChange={handleInputChange}
            name="viagem"
            value={form.viagem}
          >
            <option value="">Viagens Disponiveis</option>
            {lista.map((id) => {
              return (
                <option value={id.id}>
                  {id.name}, {id.planet}
                </option>
              );
            })}
          </select>
        </Form>
        <div>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={getDetail}
          >
            DETALHE
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={goToCreate}
          >
            CREATE
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={logout}
          >
            LOGOUT
          </Button>
        </div>

        <Form>
          <p>
            Planeta: {detalhe.planet} Viagem: {detalhe.name}{" "}
            {detalhe.description} Data:{detalhe.date} Duração:{" "}
            {detalhe.durationInDays}{" "}
          </p>
          <hr></hr>
          <div>
            <h3>EM ANÁLISE:</h3>
            {newCandidato}
          </div>
          <div>
            <h3>APROVADOS:</h3>
            {newAprovados}
          </div>
        </Form>
      </Body>
    </div>
  );
}
