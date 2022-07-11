import {useState} from "react";
import{createUserWithEmailAndPassword} from "../../firebaseConfig/FirebaseConfig";
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
        console.log(auth, 'estoyyyy awui')
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
    <><div className="bg-ligth"></div>
      <div className="row text-center">
        <div className="col-4 offset-4 gy-3 p-4" id='divRegister'>
        <form autoComplete="off" className="form-group" onSubmit={register}>
          <h2>CREAR USUARIO</h2>
          <br/>
          <div className="form-floating mb-3">
          <select className="form-select text-center" id='floatingSelect' aria-label='Floating label select'>
           <option value="managger">Administrador</option>
            <option value="chef">Cocinero</option>
            <option value="waiter">Mesero</option>
          </select>
          <label htmlFor="floatingSelect">Cargo</label>
          </div>

          <div className='form-floating mb-3'>
          <input
            className='form-control text-center'
            type="email"
            name="nameNewUser"
            value={email}
            autoComplete='off'
            id="emailRegister"
            placeholder="ejemplo@burgerboss.com"
            onChange={ev => setEmail(ev.target.value)} />
            <label htmlFor="emailRegister" className="form-label">Email</label>
            </div>

            <div className="input-group mb-3">
          <input
            className="form-control text-center"
            type={shown ? 'text' : 'password'}
            name="passwordNewUser"
            value={password}
            autoComplete='off'
            placeholder="Ingresar contraseña"
            id='password'
            onChange={ev => setPassword(ev.target.value)} />
            <button type="button" className="input-group-text" onClick={switchShown}>{shown ? <FaEye size="2rem" /> : <FaEyeSlash size="2rem" />}</button>
          </div>

          <p >Mínimo 6 caracteres en la contraseña</p>

          <div className="input-group mb-3">
          <input
            className="form-control"
            type={shownConfirm ? 'text' : 'password'}
            name="passwordConfirmation"
            value={confirmPassword}
            autoComplete='off'
            id='confPassword'
            placeholder="Confirma tu contraseña"
            onChange={ev => setConfirmPassword(ev.target.value)} />
            <button type="button" className="input-group-text" onClick={switchShownConfirm}>{shownConfirm ? <FaEye size="2rem" /> : <FaEyeSlash size="2rem" />}</button>
            </div>
            <div className='d-grid grap-2'>
          <button data-testid='btnRegister' className="btn btn-warning" type="submit">
            Registrar</button>
        </div>
        </form>
        </div>
        </div>
        </></>
  
  );
};
export default Register;
