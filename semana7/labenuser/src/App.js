import React from "react";
import SignUpPage from "./components/SignUpPage";
import UsersListPage from "./components/UsersListPage";

export default class App extends React.Component {
  state = {
    currentPage: "signUp"
  };

  changePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "usersList" });
    } else {
      this.setState({ currentPage: "signUp" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.changePage}>Trocar de tela</button>
        {this.state.currentPage === "signUp" ? (
          <SignUpPage />
        ) : (
            <UsersListPage />
          )}
      </div>
    );
  }
}