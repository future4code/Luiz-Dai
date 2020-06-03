import React from "react";
import styled from "styled-components";
import Login from "./components/Login";
import Home from "./components/Lista";
import axios from "axios";

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;

`;

class App extends React.Component {
  state = {
    loginNaTela: true,

  };

  onClickLoginOrLogout = () => {
    this.setState({ loginNaTela: !this.state.loginNaTela });
  };
  funcaoAlerta = () => {
    alert("Salvos")
  }

  render() {
    if (this.state.loginNaTela) {
      return (
        <AppContainer>
          <Login fazerLogin={this.onClickLoginOrLogout} alertaTela={this.funcaoAlerta} />
        </AppContainer>
      );
    } else {
      return (
        <AppContainer>
          <Home fazerLogout={this.onClickLoginOrLogout} />

        </AppContainer>
      );
    }

  }
}

export default App;
