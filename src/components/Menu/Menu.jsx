import React from 'react'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebaseConfig/FirebaseConfig";
import {useNavigate} from "react-router-dom";


export const Menu = () => {
  const navigate = useNavigate();
  const [user,loading, error] = useAuthState(auth);
  const singOutClick = () => {
    auth.signOut();
    navigate("/");
  }
  return (
    <div>
        <h2>Estamos en Menu {user?.email}</h2>
        <button onClick={()=>singOutClick()}>Cerrar Sesión</button>
    </div>
  )
}
