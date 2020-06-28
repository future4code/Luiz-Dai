import React, { useState, useEffect } from "react";
import useForm from "./hooks/useForm";
import Countrys from "./Countrys";
import axios from "axios";

export default function AplicationForm() {
  const [trips, setTrips] = useState([]);
  const { form, onChange, resetForm } = useForm({
    nome: "",
    idade: "",
    pergunta: "",
    profissao: "",
    country: "",
    trip: "",
  });
  useEffect(() => {
    getTrips();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Luiz-Mitsuru-Dai-Mello/trips"
      )
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(trips);
  const applytoTrip = () => {
    const body = {
      name: form.nome,
      age: form.idade,
      applicationText: form.pergunta,
      profession: form.profissao,
      country: form.country,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/Luiz-Mitsuru-Dai-Mello/trips/${form.trip}/apply`,
        body
      )
      .then(() => {
        alert("fui");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    applytoTrip();
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          name="nome"
          value={form.nome}
          onChange={handleInputChange}
          id="name"
          type="text"
          required
          pattern="[A-Z a-z]{3,}"
        ></input>
        <label htmlFor="age"> Idade:</label>
        <input
          name="idade"
          value={form.idade}
          onChange={handleInputChange}
          id="age"
          type="number"
          required
          min="18"
        ></input>
        <label htmlFor="applicationText">
          Porque sou um bom candidato(a)?{" "}
        </label>
        <input
          name="pergunta"
          value={form.pergunta}
          onChange={handleInputChange}
          id="applicationText"
          type="text"
          required
          pattern="[A-Z a-z]{30,}"
        ></input>
        <label htmlFor="profession">Profissão</label>
        <input
          name="profissao"
          value={form.profissao}
          onChange={handleInputChange}
          id="profession"
          type="text"
          required
          pattern="[A-Z a-z]{10,}"
        ></input>
        <select
          name="trip"
          onChange={handleInputChange}
          value={form.trip}
          required
        >
          <option value="">Escolha a viagem</option>
          {trips.map((id) => {
            return (
              <option value={id.id}>
                {id.name}, {id.planet}
              </option>
            );
          })}
        </select>
        <Countrys onChange={handleInputChange} value={form.country} />

        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}
