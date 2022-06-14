import * as React from 'react';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Menu from './components/Menu/Menu';

import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState(null)

  React.useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth,
      async authenticatedUser => {
        if(authenticatedUser) {
          setUser(authenticatedUser.email)
          setAuthState('Menu');
        } else {
          setUser(null);
          setAuthState('Login')
        }
      })

      return unSubscribeAuth;
  }, [user])

  if(authState === null) return <div>loading...</div>
  if(authState === 'Login') return <Login setAuthState={setAuthState} setUser={setUser}/>
  if(authState === 'Register') return <Register setAuthState={setAuthState} setUser={setUser}/>
  if(user) return <Menu user={user} setAuthState={setAuthState} setUser={setUser}/>
}

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

