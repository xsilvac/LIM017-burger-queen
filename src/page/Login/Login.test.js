import React from 'react';
import {Login} from './Login.jsx';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {signInWithEmailAndPassword} from '../../firebaseConfig/__mocks__/FirebaseConfig'

describe('',()=>{


it('Componente login', async () => {
  /*jest.mock('react-router-dom', () =>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
  }));*/
  jest.mock('./login',()=>({
    return {
      signInWithEmailAndPassword:jest.fn(() =>signInWithEmailAndPassword)
    }
  }));

  const history = createMemoryHistory()
        render(
          <Router location={history.location} navigator={history}>
            <Login />
          </Router>,
        );
        const emailImput = screen.getByPlaceholderText('Email')
        const pswInput = screen.getByPlaceholderText('contraseña')
        fireEvent.change(emailImput, {target: {value: 'jossel78@hotmail.com'}})
        fireEvent.change(pswInput,{target: {value: '1234567'}})
        const btnLogin = screen.getByText('INGRESAR')
        fireEvent.click(btnLogin)
await waitFor(() =>{
expect(history.location.pathname).toBe('/Products')
}
)
      });  
    });