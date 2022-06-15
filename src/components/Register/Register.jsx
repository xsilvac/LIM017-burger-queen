import {useState} from "react";
import{createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebaseconfig/Firebaseconfig";
import {useNavigate} from "react-router-dom";


const Register = () => {
    const navigate=useNavigate();
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const register = () => {
    createUserWithEmailAndPassword(auth,email,password)
    .then(auth = navigate ('/'))
    .catch(err => console.error(err))
  }
  
  return (
    <>
    <form >
        <select>
            <option value disabled>Cargo</option> {/*como desactivar la primera opcion*/}
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
        <button onClick = {register} type="submit">Registrar</button>
    </form>
    </>
  );
};
export default Register;


