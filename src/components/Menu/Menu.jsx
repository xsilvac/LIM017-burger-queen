import React from 'react'
import {auth} from "../../firebaseConfig/FirebaseConfig";
import {useNavigate} from "react-router-dom";
import './Menu.css';

const Menu = () => {
  const navigate = useNavigate();
  const singOutClick = () => {auth.signOut();navigate("/");}
  return (
    
    <div>
      <button className="btnClose" onClick={() => singOutClick()}>Cerrar Sesión</button>
    </div>
  )
}
export default Menu;