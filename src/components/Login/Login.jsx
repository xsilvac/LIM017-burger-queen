import {useState} from "react";
import{signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebaseConfig/FirebaseConfig";
import {useNavigate} from "react-router-dom";
import './Login.css';
import  errorAuthFirebase from "../../firebaseConfig/messajeError";



export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const singIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword (auth,email,password)
    .then(auth => navigate ('/Menu'))
    .catch(err => console.log("holaaaaa",errorAuthFirebase[err.code]));

  }
  
  return (
    <><div className="backgroundPage"></div><div className="opacity"></div>
    <div className="divForm">
    <div className="blurForm"></div>
    <form className="formLogin"  onSubmit={singIn}>
      <h1>INICIA SESIÓN</h1>
      <input
        type="email"
        name="userEmail"
        autoComplete="off"
        placeholder="12345@burgerboss.com"
        onChange={ev => setEmail(ev.target.value)} />
        <p></p>
      <input
        type="password"
        name="password"
        autoComplete="off"
        placeholder="*************"
        onChange={ev => setPassword(ev.target.value)} />
      <p>Minimo 6 caracteres en la contraseña</p>
      <button className = "btnLogin" type="submit">INGRESAR</button>
    </form></div></>
  )
}