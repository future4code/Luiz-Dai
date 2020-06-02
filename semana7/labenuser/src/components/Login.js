import React from "react";

class Login extends React.Component {
    render() {
        return (

            <div>
                <button onClick={this.props.fazerLogin}>Ir para página de lista</button>
                <br></br>
                <label>Nome:</label>
                <input></input>
                <br></br>
                <label>E-mail:</label>
                <input></input>
                <br></br>
                <button onClick={this.props.fazerLogin}>Salvar</button>
            </div>
        );
    }
}

export default Login;
