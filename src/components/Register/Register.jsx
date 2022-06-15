import {useState} from "react";
import{createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebaseConfig/FirebaseConfig";
import {useNavigate} from "react-router-dom";
import './Register.css';
import  errorAuthFirebase from "../../firebaseConfig/messajeError.js"

const Register = () => {
    const navigate=useNavigate();
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const register = (e) => { 
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then(auth => navigate ('/'))
    .catch(err => console.log("holaaaaa",errorAuthFirebase[err.code]))
    //.catch(err=>console.log(err.code))
  }
  return (
    
    <><div className="opacity"></div>
    <form className = "formRegister" onSubmit={register}>
        <select>
            <option isDisabled >Cargo</option> 
            <option value="managger">Administrador</option>
            <option value="chef">Cocinero</option>
            <option value="waiter">Mesero</option>
        </select>
        <input
        type="email"
        name="nameNewUser"
        value={email}
        autoComplete='off'
        placeholder="Email"
        onChange={ev => setEmail(ev.target.value)}
        />
        <input
        type="password"
        name="passwordNewUser"
        value={password}
        autoComplete='off'
        placeholder="Contraseña"
        onChange={ev => setPassword(ev.target.value)}
        />
        <input
        type="password"
        name="passwordConfirmation"
        autoComplete='off'
        placeholder="Confirmar contraseña"
        />
        <button className ="btnRegister" type="submit">Registrar</button>
    </form>
    </>
  );
};
export default Register;
