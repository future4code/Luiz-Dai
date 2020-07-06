import React from "react";

// import { Container } from './styles';

function Planets(props) {
  return (
    <div>
      <label htmlFor="planet">Planeta</label>
      <select
        required
        name="planeta"
        value={props.value}
        onChange={props.onChange}
      >
        <option value="">Escolha o Planeta</option>
        <option value="Mercúrio">Mercúrio</option>
        <option value="Vênus">Vênus</option>
        <option value="Terra">Terra</option>
        <option value="Marte">Marte</option>
        <option value="Júpiter">Júpiter</option>
        <option value="Saturno">Saturno</option>
        <option value="Urano">Urano</option>
        <option value="Netuno">Netuno</option>
      </select>
    </div>
  );
}

export default Planets;
