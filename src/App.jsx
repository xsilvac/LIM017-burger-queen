import React from "react";
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Login from "./page/Login/Login";
import Kitchen from "./page/Kitchen/Kitchen";
import Waiter from "./page/Waiter/Waiter";
import Register from "./components/Register/Register";
import AddProducts from "./components/AddProducts/AddProducts";
import Products from "./components/Products/Products";
import Breakfast from "./components/Products/Breakfast";
import Manager from "./page/Manager/Manager";
import WaiterLunch from "./page/Waiter/WaiterLunch";
import Navbar from "./components/Navbar/Navbar";
import Lunch from "./components/Products/Lunch";
import WaiterBreakfast from "./page/Waiter/WaiterBreakfast";

export function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Kitchen" element={<Kitchen />} />
        <Route path="Waiter" element={<Waiter />} />
        <Route path="Register" element={<Register />} />
        <Route path="AddProducts" element={< AddProducts />} />
        <Route path="Products" element={< Products />} />
        <Route path="Breakfast" element={< Breakfast />} />
        <Route path="Manager" element={< Manager />} />
        <Route path="WaiterLunch" element={< WaiterLunch />} />
        <Route path="WaiterBreakfast" element={< WaiterBreakfast />} />
        <Route path="Navbar" element={< Navbar />} />
        <Route path="Lunch" element={< Lunch />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;



