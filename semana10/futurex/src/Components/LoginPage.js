import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Header, Body, Form } from "../Styleds/Styled";
import axios from "axios";
import { Button } from "@material-ui/core";

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) {
      history.push("/trips/list");
    }
  }, [history]);

  const goToHome = () => {
    history.push("/");
  };

  const goToList = () => {
    history.push("/trips/list");
  };

  const emailDigitado = (e) => {
    setEmail(e.target.value);
  };
  console.log(email);
  const senhaDigitada = (e) => {
    setSenha(e.target.value);
  };
  console.log(senha);

  const login = () => {
    const body = {
      email: email,
      password: senha,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Luiz-Mitsuru-Dai-Mello/login",
        body
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToList();
      })
      .catch((err) => {
        alert("Tente novamente");
        console.log(err);
      });
  };

  return (
    <div>
      <Header>
        <h1>FUTUREX</h1>
      </Header>
      <Body>
        <h1>LOGIN</h1>
        <Form>
          <input
            value={email}
            placeholder="E-mail"
            type="email"
            onChange={emailDigitado}
          />

          <input
            value={senha}
            placeholder="Senha"
            type="password"
            onChange={senhaDigitada}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={login}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="default"
            size="small"
            onClick={goToHome}
          >
            Voltar
          </Button>
        </Form>
      </Body>
    </div>
  );
}
