import React from 'react'
import {auth} from "../../firebaseConfig/FirebaseConfig";
import {useNavigate} from "react-router-dom";
import logo1 from "../../img/logo1.png"

const NavbarKitchen = () => {
    const navigate = useNavigate();
  const singOutClick = () => {auth.signOut();navigate("/");}
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ms-2">
  <img alt="" src={logo1} width="15%"/>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <form className="d-flex ms-auto">
        <button className="btn btn-outline-warning ms-5" type="submit" onClick={() => singOutClick()}>Cerrar Sesión</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default NavbarKitchen;