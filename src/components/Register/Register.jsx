import {useState} from "react";
import{createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebaseConfig/FirebaseConfig";
import {useNavigate} from "react-router-dom";
import './Register.css';
import  errorAuthFirebase from "../../firebaseConfig/messajeError.js"
import {FaEye,FaEyeSlash} from "react-icons/fa"
import Swal from "sweetalert2";

const Register = () => {
    const navigate=useNavigate();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [confirmPassword, setConfirmPassword]= useState('');
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);
  const [shownConfirm, setShownConfirm] = useState(false);
  const switchShownConfirm = () => setShownConfirm(!shownConfirm);
  
  
  const register = (e) => { 
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then(auth =>{  navigate ('/')
      Swal.fire({
        imageUrl: "https://c.tenor.com/l3_KagIYSOgAAAAC/yes-happy.gif",
        title:"Felicidades ya te encuentras registrado",
      })
    })
    .catch(err => {
      Swal.fire({
        icon: 'warning',
        title: errorAuthFirebase[err.code],
      })
    })
  }
  return (
  <><div className="backgroundPage"></div>
  <div className="opacity"></div>
  <div className="divFormRegister">
  <div className="blurFormReg"></div>
  <div className="logoReg"></div>
    <form className = "formRegister" onSubmit={register}>
    <h1>REGISTRATE</h1>
        <select className="optionsSelect">
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
        placeholder="ejemplo@burgerboss.com"
        onChange={ev => setEmail(ev.target.value)}
        />
        <input
        type={shown ? 'text' : 'password'}
        name="passwordNewUser"
        value={password}
        autoComplete='off'
        placeholder="*************"
        onChange={ev => setPassword(ev.target.value)}
        />
         <button className="eyeRegister" onClick={switchShown}>{shown ? <FaEye size="2rem"/> : <FaEyeSlash size="2rem"/>}</button>
        <p>Mínimo 6 caracteres en la contraseña</p>
        <input
        type={shownConfirm ? 'text' : 'password'}
        name="passwordConfirmation"
        value ={confirmPassword}
        autoComplete='off'
        placeholder="*************"
        onChange={ev => setConfirmPassword(ev.target.value)} 
        />
        <button className="eyeRegisterConfig" onClick={switchShownConfirm}>{shownConfirm ? <FaEye size="2rem"/> : <FaEyeSlash size="2rem"/>}</button>
        <button className ="btnRegister" type="submit">Registrar</button>
    </form></div></>
  
  );
};
export default Register;
