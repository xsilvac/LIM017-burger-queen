import React from "react";
import Register from "./Register";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import {createUserWithEmailAndPassword} from "../../firebaseConfig/FirebaseConfig"
jest.mock("../../firebaseConfig/FirebaseConfig");


describe("Renderizar Register", () => {
  it("Render Register", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Register />
      </Router>
    );
    const btnRegister = screen.getByTestId("btnRegister");
    expect(btnRegister).toBeInTheDocument();
  });
});

describe("Componente Register", () => {
  it("Iniciar sesión de managger", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Register />
      </Router>
    );
    const emailImput = screen.getByPlaceholderText("ejemplo@burgerboss.com");
    const pswInput = screen.getByPlaceholderText("Ingresar contraseña");
    const pswInputConf = screen.getByPlaceholderText("Confirma tu contraseña");
    const btnRegister = screen.getByTestId("btnRegister");
    fireEvent.change(emailImput, { target: { value: "luana@burgerboss.com" } });
    fireEvent.change(pswInput, { target: { value: "1234567" } });
    fireEvent.change(pswInputConf, { target: { value: "123" } });

    fireEvent.click(btnRegister);
    await waitFor(() => {
        expect(createUserWithEmailAndPassword).not.toHaveBeenCalled();
    });
});
});