import styled from "styled-components";

export const Header = styled.header`
  background-color: #4a306d;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
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
  background: linear-gradient(45deg, #6699ff 30%, #ff99cc 90%);
  color: #0c1f38;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: row;
  border: 5px solid #0c1f38;
  background: linear-gradient(to right 45deg, #0c1f38 30%, #ff99cc 90%);
  color: #0c1f38;
  text-shadow: 5px 5px 5px 5px black;
  box-shadow: 10px 0 10px 0 black;
  font-weight: bold;
`;
export const Gride = styled.div`
  display: flex;
  flex-direction: row;
  border: 5px solid #0c1f38;
  box-shadow: 20px 0 10px 0 black;
  font-weight: bolder;
  margin-top: 20px;
`;
export const Selection = styled.select`
  background: linear-gradient(-180deg, #6699ff 30%, #ff99cc 90%);
  color: #0c1f38;
  font-weight: bold;
`;
