import styled from "styled-components";

export const Header = styled.header`
  background-color: #0c1f38;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #e65401;
  text-shadow: 5px 5px 5px 5px black;
  border: 2px solid black;
  height: 80px;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 90vh;
  background-color: #a7e0d7;
  color: #0c1f38;
`;
export const Imagem = styled.img`
  cursor: pointer;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 5px solid #0c1f38;
  box-shadow: 20px 0 10px 0 black;
  font-weight: bolder;
`;
export const Login = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;
