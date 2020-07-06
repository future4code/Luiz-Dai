import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";

test("Pode criar um post ao escrever no input e clicar no botão adicionar", async () => {
  const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
  const addButton = getByPlaceholderText(/Novo post/i);
  const button = getByText(/Adicionar/i);

  fireEvent.change(addButton, { target: { value: "teste" } });
  fireEvent.click(button);
  let post = getByTestId(/novoPost/i);
  await wait(() => {
    expect(post).toHaveTextContent("teste");
  });
});
test("Ao clicar no botão de curtir, apareça o botão descurtir", () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const inputPost = getByPlaceholderText(/Novo post/i);
  const buttonAdicionar = getByText(/Adicionar/i);

  fireEvent.change(inputPost, { target: { value: "teste" } });
  fireEvent.click(buttonAdicionar);
  const buttonCurtir = getByText(/Curtir/i);
  fireEvent.click(buttonCurtir);

  const buttonDescurtir = getByText(/Descurtir/i);
  expect(buttonDescurtir).toHaveTextContent(/Descurtir/i);
});
test("Ao clicar em apagar post, o post deve sumir da tela", () => {
  const { getByText, getByPlaceholderText, queryByText } = render(<App />);
  const inputPost = getByPlaceholderText(/Novo post/i);
  const buttonAdicionar = getByText(/Adicionar/i);

  fireEvent.change(inputPost, { target: { value: "teste" } });
  fireEvent.click(buttonAdicionar);
  const buttonApagar = getByText(/Apagar/i);
  fireEvent.click(buttonApagar);
  const checkTask = queryByText("teste");

  expect(checkTask).toEqual(null);
});
test("Ao criar um post, o input deve ser limpo", () => {
  const { getByPlaceholderText } = createTask();
  const inputTask = getByPlaceholderText(/Novo post/i).value;

  expect(inputTask).toEqual("");
});

const createTask = () => {
  const task = render(<App />);
  const inputPost = task.getByPlaceholderText(/Novo post/i);
  const buttonAdicionar = task.getByText(/Adicionar/i);

  fireEvent.change(inputPost, { target: { value: "teste" } });
  fireEvent.click(buttonAdicionar);

  return task;
};

test("Ao criar um post, o input deve ser limpo", () => {
  const { getByPlaceholderText } = createTask();
  const inputTask = getByPlaceholderText(/Novo post/i).value;

  expect(inputTask).toEqual("");
});

test("Quando a lista está vazia no início, deve aparecer a mensagem 'Nenhum post'", () => {
  const { getByText } = render(<App />);
  const postList = getByText(/Nenhuma Mensagem/i);

  expect(postList);
});

test("Se existir 1 post, deve mostrar 'Quantidade de posts: 1", () => {
  const { getByText } = createTask();
  const postQuantity = getByText(/1/i);

  expect(postQuantity).toHaveTextContent(/Quantidade de posts: 1/i);
});

test("Se um usuário enviar uma mensagem vazia, deve aparecer a mensagem 'Digite algo para enviar'", () => {
  const { getByText } = render(<App />);
  const buttonAdicionar = getByText(/Adicionar/i);

  fireEvent.click(buttonAdicionar);
  expect(getByText(/Digite algo para enviar/)).toBeInTheDocument();
});
