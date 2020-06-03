import React from "react";



class Home extends React.Component {
    state = {
        telaLista: ""
    };

    irParaUsuario = () => {
        this.setState({ telaLista: "Usuario" });
    };


    render() {
        const renderizaTela = () => {
            switch (this.state.telaLista) {
                case "":
                    return <li>Seja bem-vindo</li>;

            }
        };

        return (
            <div>
                <button onClick={this.props.fazerLogout}>Ir para página de registro</button>
                <h1>Lista</h1>

                <hr />
                {renderizaTela()}
            </div>
        );
    }
}

export default Home;
