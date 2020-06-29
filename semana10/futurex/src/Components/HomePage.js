import React from "react";
import { useHistory } from "react-router-dom";
import { Header, Body, Imagem, Login } from "../Styleds/Styled";
import { Button } from "@material-ui/core";
import Entrar from "../Styleds/account-circle.png";

export default function HomePage() {
  const history = useHistory();

  const goToAboutPage = () => {
    history.push("/login");
  };
  const goToForm = () => {
    history.push("/application-form");
  };

  return (
    <div>
      <Header>
        <h1>FutureX </h1>
        <Login>
          <Imagem src={Entrar} alt="login" onClick={goToAboutPage} />
          <h6>LOGIN</h6>
        </Login>
      </Header>
      <Body>
        <p>Inscreva-se aqui para uma viagem espacial</p>
        <Button variant="contained" color="primary" onClick={goToForm}>
          FORMULÁRIO
        </Button>
      </Body>
    </div>
  );
}
