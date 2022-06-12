import {React, useState} from "react";

export const Login = () => {
  const [search, setSearch]= useState("");
  return (
        <form>
          <select>
            <option selected disabled>Cargo</option>
            <option value="managger">Administrador</option>
            <option value="chef">Cocinero</option>
            <option value="waiter">Mesero</option>
        </select>
          <input
            type="text"
            name="userName"
            autoComplete="off"
            placeholder="Usuario"
            onChange={ev => setSearch(ev.target.value)}
            />
          <input
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Contraseña"
            onChange={ev => setSearch(ev.target.value)}
            />
          <button type="submit">Ingresar</button>
          <p>RESULTADOS:{search}</p>
        </form>
  )
}
