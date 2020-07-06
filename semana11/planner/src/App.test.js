import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "./App";
import axios from "axios";

describe("Renderização Inicial", () => {
  test("Renderiza tudo ", async () => {
    axios.post = jest.fn().mockResolvedValue();

    /* axios.get = jest.fn().mockResolvedValue({
      text: "testar",
      day: "segunda",
    });*/
    const {
      getByPlaceholderText,
      getByLabelText,
      queryByText,
      getByText,
    } = render(<App />);

    const input = getByPlaceholderText(/Digite aqui/i);

    fireEvent.change(input, { target: { value: "testar" } });
    expect(input).toHaveValue("testar");

    const select = getByLabelText(/Escolha o dia:/i);

    userEvent.selectOptions(select, queryByText("SEGUNDA").value);

    const button = getByText(/ADICIONAR TAREFA/i);
    fireEvent.click(button);

    // EXECUÇÃO
    expect(axios.post).toHaveBeenCalledWith(
      "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Mello-Luiz-Mitsuru-Dai",
      {
        text: "testar",
        day: "segunda",
      }
    );
    //await wait(() => expect(axios.get).toHaveBeenCalled());
    await wait(() => expect(getByText(/testar/)).toBeInTheDocument());
  });
});
