import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { Login } from "./page/Login/Login.jsx";
import { Kitchen } from "./page/Kitchen/Kitchen.jsx";
import Register from "./components/Register/Register";
import AddProducts from "./components/AddProducts/AddProducts.jsx";

export function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Kitchen" element={<Kitchen />} />
        <Route path="Register" element={<Register />} />
        <Route path="AddProducts" element={< AddProducts />} />
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



// import React, {useState, useEffect} from "react";
// import {auth} from './firebase'
// import {onAuthStateChanged} from 'firebase/auth';
// import { Register } from './components/Register/Register'

// export const App = () => {
//     const [user, setUser] = useState(null);
//     const [authState, setAuthState] = useState(null);

//     useEffect(() => {
//         const stateAuth = onAuthStateChanged(auth,
//             async authenticatedUser => {
//                 if(authenticatedUser){
//                     setUser(authenticatedUser.email)
//                     setAuthState("Menu")
//                 }else{
//                     setUser(null);
//                     setAuthState('Login')
//                 }
//             })
//             return stateAuth;
//     }, [user])

//     if(authState===null) return <div>Cargando</div>
//   return (
//     <Register />
//     // <div>AuthFire</div>
//   )
// }




// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import { Menu } from "./components/Menu/Menu";
// import { Login } from "./components/Login/Login";
// import { Kitchen } from "./components/Kitchen/Kitchen";
// import { Managger } from "./components/Register/Register";
// // import { UserProvider } from "./auth/UserProvider";


// export function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to React Router!</h1>
//       <nav>
//         <Link to="/">Login</Link>
//         <Link to="/Menu">Menu</Link>
//         <Link to="/Kitchen">Kitchen</Link>
//         <Link to="/Managger">Managger</Link>
        
//       </nav>
//       {/* <UserProvider> */}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="Menu" element={<Menu />} />
//         <Route path="Kitchen" element={<Kitchen />} />
//         <Route path="/Managger" element={<Managger />} />
//       </Routes>
//       {/* </UserProvider> */}
//     </div>
//   );
// }

// export function App () {
//   return (
//     <div className="appRouter">
//     <Menu />
//     <Login />
//     </div>
//   );
// }

// export default App;

