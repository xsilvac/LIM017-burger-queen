import React from 'react'

export const Managger = () => {
  return (
    <form>
        <select>
            <option selected disabled>Cargo</option>
            <option value="managger">Administrador</option>
            <option value="chef">Cocinero</option>
            <option value="waiter">Mesero</option>
        </select>
        <input
        type="email"
        name="nameNewUser"
        autoComplete='off'
        placeholder="Email"
        />
        <input
        type="password"
        name="passwordNewUser"
        autoComplete='off'
        placeholder="Contraseña"
        />
        <input
        type="password"
        name="passwordConfirmation"
        autoComplete='off'
        placeholder="Confirmar contraseña"
        />
        <button type="submit">Registrar</button>
    </form>
  )
}
