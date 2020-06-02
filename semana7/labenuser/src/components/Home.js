import React from "react";



class Home extends React.Component {
    state = {
        telaHome: ""
    };

    irParaUsuario = () => {
        this.setState({ telaHome: "Usuario" });
    };

    irParaMensagens = () => {
        this.setState({ telaHome: "MENSAGENS" });
    };

    render() {
        const renderizaTela = () => {
            switch (this.state.telaHome) {
                case "":
                    return <p>Seja bem-vindo</p>;

            }
        };

        return (
            <div>
                <h1>Home</h1>
                <button onClick={this.props.fazerLogout}>Logout</button>
                <hr />
                {renderizaTela()}
            </div>
        );
    }
}

export default Home;
