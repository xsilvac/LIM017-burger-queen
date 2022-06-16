import {useState} from "react";
import{signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebaseConfig/FirebaseConfig";
import {useNavigate} from "react-router-dom";
import './Login.css';
import  errorAuthFirebase from "../../firebaseConfig/messajeError";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);

  const singIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword (auth,email,password)
    .then(auth => navigate ('/Menu'))
    .catch(err => console.log("holaaaaa",errorAuthFirebase[err.code]));

  }
  
  return (
    <><div className="backgroundPage"></div>
    <div className="opacity"></div>
    <div className="divForm">
    <div className="blurForm"></div>
    <div className="logo"></div>
    <form className="formLogin"  onSubmit={singIn}>
      <h1>INICIA SESIÓN</h1>
      <input
        type="email"
        name="userEmail"
        autoComplete="off"
        placeholder="ejemplo@burgerboss.com"
        onChange={ev => setEmail(ev.target.value)} />
        <p></p>
      <input
        type={shown ? 'text' : 'password'}
        name="password"
        autoComplete="off"
        placeholder="*************"
        onChange={ev => setPassword(ev.target.value)} />
      <button className="eyeLogin" onClick={switchShown}>{shown ? <FaEye size="2rem"/> : <FaEyeSlash size="2rem"/>}</button>
      <p>Mínimo 6 caracteres en la contraseña</p>
      <button className = "btnLogin" type="submit">INGRESAR</button>    </form></div></>
  )
}