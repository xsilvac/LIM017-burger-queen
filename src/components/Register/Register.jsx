import { useState } from 'react'
// import { UserContext } from '../../context/UserProvider';

const Register = () => {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

  // const {registerUser} = useContext(UserContext);

  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   console.log('procesando', email, password);
  //   try{
  //     await registerUser(email, password);
  //   } catch(error){
  //     console.log(error);
  //   }
  //  };


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
        <button type="submit">Registrar</button>
    </form>
    </>
  );
};
export default Register;