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
    <><div className="opacity"></div>
    <form className="formLogin"  onSubmit={singIn}>
      <input
        type="email"
        name="userEmail"
        autoComplete="off"
        placeholder="Usuario"
        onChange={ev => setEmail(ev.target.value)} />
      <input
        type="password"
        name="password"
        autoComplete="off"
        placeholder="Password"
        onChange={ev => setPassword(ev.target.value)} />
      <button className = "btnLogin" type="submit">Ingresar</button>
    </form></>
  )
}