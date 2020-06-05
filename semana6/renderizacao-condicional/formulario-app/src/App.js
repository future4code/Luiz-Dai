import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";



class App extends React.Component {

  render() {
    return (
          <div>
            {this.renderizaEtapa()}
            <button>Próxima Etapa</button>
          </div>
        );
  }

    state = {
      etapa: 1,
    }

    class App extends React.Component {
      state = {
        etapa: 1,
      }
    
      renderizaEtapa = () => {
        switch (this.state.evento) {
          case 1: 
            return <Etapa1 />;
          case 2: 
            return <Etapa2 />;
            case 3: 
            return <Etapa3 />;
          case 4: 
            return <Final />;
      // de acordo com o que já foi feito, 
      // crie o case dos componentes etapa 3 e Final
        }
      }

export default App;