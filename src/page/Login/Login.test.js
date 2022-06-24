 import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'

import Login from './Login'

it('Componente login',() => {
        const history = createMemoryHistory()
        render(
          <Router location={history.location} navigator={history}>
            <Login />
          </Router>,
        )
        const emailImput = screen.getByPlaceholderText('Email')
        const pswInput = screen.getByPlaceholderText('contraseña')
        fireEvent.change(emailImput, {target: {value: 'jossel78@hotmail.com'}})
        fireEvent.change(pswInput,{target: {value: '1234567'}})
        const btnLogin = screen.getByText('INGRESAR')
        fireEvent.click(btnLogin)
       // screen.getByPlaceholderText('Emaillll')
}); 