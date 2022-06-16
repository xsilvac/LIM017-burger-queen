import React from 'react'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebaseConfig/FirebaseConfig";
import {useNavigate} from "react-router-dom";
import './Menu.css';
export const Menu = () => {
  const navigate = useNavigate();
  const [user,loading, error] = useAuthState(auth);
  const singOutClick = () => {auth.signOut();navigate("/");}
  return (
    <div>
        <h2 className="title">Estamos en Menu {user?.displayName}</h2>
        {console.log(user)};
        <button className = "btnClose" onClick={()=>singOutClick()}>Cerrar Sesión</button>
    </div>
  )
}
