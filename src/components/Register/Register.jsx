import {useState} from "react";
import{createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebaseConfig/FirebaseConfig";
//import {useNavigate} from "react-router-dom";
import './Register.css';
import  errorAuthFirebase from "../../firebaseConfig/messajeError.jsx"
import {FaEye,FaEyeSlash} from "react-icons/fa"
import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar"

const Register = () => {
    //const navigate=useNavigate();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [confirmPassword, setConfirmPassword]= useState('');
  const [shown, setShown] = useState(false);
  const [shownConfirm, setShownConfirm] = useState(false);

  const switchShown = () => setShown(!shown)
  //  e.preventDefault()
  
  
  const switchShownConfirm = () => setShownConfirm(!shownConfirm)
  //e.preventDefault();
  
  
  
  const register = (e) => {
    e.preventDefault();
    if(password === confirmPassword){
      createUserWithEmailAndPassword(auth,email,password)
      .then(auth =>{
        Swal.fire({
          imageUrl: "https://c.tenor.com/l3_KagIYSOgAAAAC/yes-happy.gif",
          title:"Felicidades, usuario registrado",
        })
      })
      .catch(err => {
        Swal.fire({
          icon: 'warning',
          title: errorAuthFirebase[err.code],
        })
      })
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Las contraseñas no coinciden',
      })
    }
   
  }
  return (
    <><Navbar />
    <><div className="backgroundPage"></div>
      <div className="divFormRegister">
        <div className="blurFormReg"></div>
        <form className="formRegister" onSubmit={register}>
          <h1>CREAR USUARIO</h1>
          <select className="optionsSelect">
            <option isdisabled="true">Cargo</option>
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
            onChange={ev => setEmail(ev.target.value)} />
          <input
            type={shown ? 'text' : 'password'}
            name="passwordNewUser"
            value={password}
            autoComplete='off'
            placeholder="*************"
            onChange={ev => setPassword(ev.target.value)} />
          <button type="button" className="eyeRegister" onClick={switchShown}>{shown ? <FaEye size="2rem" /> : <FaEyeSlash size="2rem" />}</button>
          <p>Mínimo 6 caracteres en la contraseña</p>
          <input
            type={shownConfirm ? 'text' : 'password'}
            name="passwordConfirmation"
            value={confirmPassword}
            autoComplete='off'
            placeholder="*************"
            onChange={ev => setConfirmPassword(ev.target.value)} />
          <button type="button" className="eyeRegisterConfig" onClick={switchShownConfirm}>{shownConfirm ? <FaEye size="2rem" /> : <FaEyeSlash size="2rem" />}</button>
          <button className="btnRegister" type="submit">Registrar</button>
        </form></div></></>
  
  );
};
export default Register;
