import React from "react";
import AddProducts from "./AddProducts";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import {addDoc, collection} from "../../firebaseConfig/FirebaseConfig"
jest.mock("../../firebaseConfig/FirebaseConfig");


describe("Renderizar AddProduct", () => {
  it("Render AddProducts", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <AddProducts />
      </Router>
    );
    const btnAddProduct = screen.getByTestId("btnAddProduct");
    expect(btnAddProduct).toBeInTheDocument();
  });
});

describe("Componente AddProduct", () => {
  it("Agregar productos", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <AddProducts />
      </Router>
    );
    const selectCollec = screen.getByTestId("selectCollection");
    const productName = screen.getByTestId("NameProduct");
    const productPrice = screen.getByTestId("price");
    const productPhoto = screen.getByTestId("photo");
    const btnAddProduct = screen.getByTestId("btnAddProduct");
    fireEvent.change(selectCollec, { target: { value: 'lunch' } });
    fireEvent.change(productName, { target: { value: "hamburguesa" } });
    fireEvent.change(productPrice, { target: { value: "10" } });
    fireEvent.change(productPhoto, { target: { value: "" } });

    fireEvent.click(btnAddProduct);
    await waitFor(() => {
        expect(addDoc).not.toHaveBeenCalled();
        //expect(collection).toHaveBeenCalledTimes(1);
    });
});
});