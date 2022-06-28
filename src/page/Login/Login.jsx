import {useState} from "react";
import {auth, signInWithEmailAndPassword} from "../../firebaseConfig/FirebaseConfig";
// import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import './Login.css';
import  errorAuthFirebase from "../../firebaseConfig/messajeError";
import { FaEye, FaEyeSlash} from "react-icons/fa";
import Swal from 'sweetalert2';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);

  const singIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword (auth,email,password)
    .then(auth => {
      console.log(auth.user.email.slice(-5), auth.user.email.slice(-1), auth.user.email.slice(0, auth.user.email.length - 8))
      navigate ('/Products')
      Swal.fire({
        imageUrl: 'https://i.gifer.com/YsHW.gif',
        title: 'Bienvenid@ '+ auth.user.email.slice(0,1).toUpperCase() + auth.user.email.slice(1, auth.user.email.length - 15),
      })
    })
    .catch(err => {
      Swal.fire({
        icon: 'warning',
        title: errorAuthFirebase[err.code],
      })
    });
  }
  
  return (
    <><div className="backgroundPage"></div>
    <div className="opacity"></div>
    <div className="divForm">
    <div className="blurForm"></div>
    <div className="logo"></div>
    <form className="formLogin"  onSubmit={singIn}>
      <h2>INICIA SESIÓN</h2>
      <div className="form-floating mb-3 w-100 " width="80%">
          <select className="form-select text-center" id='floatingSelect' aria-label='Floating label select'>
           <option value="managger">Administrador</option>
            <option value="chef">Cocinero</option>
            <option value="waiter">Mesero</option>
          </select>

          <label for="floatingSelect">Cargo</label>
          </div>
      <div className="form-floating mb-3 w-100"  width="80%">
      <input
        type="email"
        className="form-control px-5 w-100"
        width="80%"
        name="userEmail"
        data-testid="userEmail"
        autoComplete="off"
        placeholder="Email"
        id='email'
        onChange={ev => setEmail(ev.target.value)} />
        <label for="email"className='form-label'>Email</label>
        </div>
        <div className="input-group mb-3 w-100">
      <input
      className="form-control "
        type={shown ? 'text' : 'password'}
        name="password"
        autoComplete="off"
        placeholder="contraseña"
        onChange={ev => setPassword(ev.target.value)} />
      <button type="button" className="input-group-text"  onClick={switchShown}>{shown ? <FaEye size="2rem"/> : <FaEyeSlash size="2rem"/>}</button>
    </div>

      <button className="btn btn-warning w-100" id='btnLogin' type="submit">INGRESAR</button>
      
        </form>
        </div></>

  )
}
export default Login;