import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { Login } from "./components/Login/Login";
import { Kitchen } from "./components/Kitchen/Kitchen";


export function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Kitchen">Kitchen</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Kitchen" element={<Kitchen />} />
      </Routes>
    </div>
  );
}

// export function App () {
//   return (
//     <div className="appRouter">
//     <Menu />
//     <Login />
//     </div>
//   );
// }


export default App;

