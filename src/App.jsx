import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { Login } from "./page/Login/Login.jsx";
import { Kitchen } from "./page/Kitchen/Kitchen.jsx";
import Register from "./components/Register/Register";
import AddProducts from "./components/AddProducts/AddProducts.jsx";
import Products from "./components/Products/Products"

export function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Kitchen" element={<Kitchen />} />
        <Route path="Register" element={<Register />} />
        <Route path="AddProducts" element={< AddProducts />} />
        <Route path="Products" element={< Products />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
