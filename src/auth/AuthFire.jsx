
// import React, {useState, useEffect} from "react";
// import {auth} from '../firebase'
// import {onAuthStateChanged} from 'firebase/auth';

// export const AuthFire = () => {
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
//     <div>AuthFire</div>
//   )
// }






// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { createContext, useState } from "react";
// import { auth } from "../firebase";

// export const UserContext = createContext();

// export const UserProvider = ({children}) => {
//     const [user, setUser] = useState(false);

//     const registerUser = (email, password) =>
//         createUserWithEmailAndPassword(auth, email, password)
        

//     return (
//         <UserContext.Provider value = {{user, setUser, registerUser}}>
//             {children}
//         </UserContext.Provider>
//     );
// };
