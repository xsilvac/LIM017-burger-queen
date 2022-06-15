import {useState} from "react";
import{signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebaseconfig/Firebaseconfig";
import {useNavigate} from "react-router-dom";
import './Login.css';


export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  
  const singIn = () => {
    signInWithEmailAndPassword (auth,email,password)
    .then(auth = navigate ('/Menu'))
    .catch(err => console.error(err))
  }

  return (

    // eslint-disable-next-line no-undef
    <><div className="opacity"></div>
    <div>
    <form className="formLogin">


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
      <button className="btnLogin" onClick={singIn} type="submit">Ingresar</button>

    </form></div></>

  
  )
}
