import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export class App extends React.Component {
  state = {
    atividade: {}
  };

  componentDidMount = () => {
    this.geraAtividade();
  };

  geraAtividade = () => {
    axios
      .get(`https://www.boredapi.com/api/activity`)
      .then(response => {
        this.setState({ atividade: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container>
        <button onClick={this.geraAtividade}>Gera atividade</button>
        <p>
          <strong>Atividade: </strong>
          {this.state.atividade.activity}
        </p>
        <p>
          <strong>Tipo: </strong>
          {this.state.atividade.type}
        </p>
        <p>
          <strong>Número de participantes: </strong>
          {this.state.atividade.participants}
        </p>
        <p>
          <strong>Preço: </strong>
          {this.state.atividade.price}
        </p>
        <p>
          <strong>Acessibilidade: </strong>
          {this.state.atividade.accessibility}
        </p>
      </Container>
    );
  }
}

export default App;
