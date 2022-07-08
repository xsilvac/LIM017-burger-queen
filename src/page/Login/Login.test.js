import React from "react";
import Login from "./Login.jsx";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { signInWithEmailAndPassword } from "../../firebaseConfig/FirebaseConfig";

jest.mock("../../firebaseConfig/FirebaseConfig.jsx");

describe("Renderizar Login", () => {
  it("Render Login", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>
    );
    const btnLogin = screen.getByTestId("btnLogin");
    expect(btnLogin).toBeInTheDocument();
  });
});

describe("Componente Login", () => {
  it("Iniciar sesión de managger", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>
    );
    const emailImput = screen.getByPlaceholderText("Email");
    const pswInput = screen.getByPlaceholderText("contraseña");
    const valueSelect = screen.getByTestId("selectLogin");
    fireEvent.change(emailImput, { target: { value: "jossel78@hotmail.com" } });
    fireEvent.change(pswInput, { target: { value: "1234567" } });
    fireEvent.change(valueSelect, { target: { value: "managger" } });
    const btnLogin = screen.getByText("INGRESAR");

    fireEvent.click(btnLogin);
    await waitFor(() => {
      expect(history.location.pathname).toBe("/Lunch");
    });
  });

  it("Iniciar sesión de chef", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>
    );
    const emailImput = screen.getByPlaceholderText("Email");
    const pswInput = screen.getByPlaceholderText("contraseña");
    const valueSelect = screen.getByTestId("selectLogin");
    fireEvent.change(emailImput, { target: { value: "jossel78@hotmail.com" } });
    fireEvent.change(pswInput, { target: { value: "1234567" } });
    fireEvent.change(valueSelect, { target: { value: "chef" } });
    const btnLogin = screen.getByText("INGRESAR");
    fireEvent.click(btnLogin);
    await waitFor(() => {
      expect(history.location.pathname).toBe("/Kitchen");
    });
  });

  it("Iniciar sesión de waiter", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>
    );
    const emailImput = screen.getByPlaceholderText("Email");
    const pswInput = screen.getByPlaceholderText("contraseña");
    const valueSelect = screen.getByTestId("selectLogin");
    fireEvent.change(emailImput, { target: { value: "jossel78@hotmail.com" } });
    fireEvent.change(pswInput, { target: { value: "1234567" } });
    fireEvent.change(valueSelect, { target: { value: "waiter" } });
    const btnLogin = screen.getByText("INGRESAR");
    fireEvent.click(btnLogin);
    await waitFor(() => {
      expect(history.location.pathname).toBe("/WaiterLunch");
    });
  });
});
