import React from "react";
import styled from "styled-components";
import Login from "./components/Login";
import Home from "./components/Home";
import Usuario from "./components/Usuario"
const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

class App extends React.Component {
  state = {
    loginNaTela: true
  };

  onClickLoginOrLogout = () => {
    this.setState({ loginNaTela: !this.state.loginNaTela });
  };
  onClickAlerta = () => {
    this.setState({ loginNaTela: !this.state.})
  }

  render() {
    if (this.state.loginNaTela) {
      return (
        <AppContainer>
          <Login fazerLogin={this.onClickLoginOrLogout} />
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
