import React from "react";
import styled from "styled-components";
import axios from "axios";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

const axiosConfig = {
    headers: {
        Authorization: "Luiz Mitsuru Dai - Mello"
    }
};

class UsersListPage extends React.Component {
    state = {
        usersList: []
    };

    componentDidMount() {
        this.fetchUsersList();
    }

    fetchUsersList = () => {
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                axiosConfig
            )
            .then(response => {
                this.setState({ usersList: response.data });
            });
    };

    handleUserDeletion = userId => {
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
                axiosConfig
            )
            .then(() => {
                alert("Usuário apagado com sucesso!");
                this.fetchUsersList();
            })
            .catch(e => {
                alert("ERRO AO APAGAR USUARIO");
            });
    };

    render() {
        return (
            <ul>
                {this.state.usersList.length === 0 && <div>Carregando...</div>}
                {this.state.usersList.map(user => {
                    return (
                        <li>
                            {user.name}
                            <DeleteButton onClick={() => this.handleUserDeletion(user.id)}>
                                X
              </DeleteButton>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default UsersListPage;
