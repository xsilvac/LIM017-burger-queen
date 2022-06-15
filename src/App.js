import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { Login } from "./components/Login/Login";
import { Kitchen } from "./components/Kitchen/Kitchen";


export function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Kitchen" element={<Kitchen />} />
      </Routes>
      </BrowserRouter>

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

