import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import clientAxios from '../config/axios';
import useAuth from '../hooks/useAuth';


const Register = () => {

  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [employeeNumber, setEmployeeNumber] = useState('')
  const [password, setPassword] = useState('')

  const { setAuth } = useAuth()
  const navigate = useNavigate()


  const isValide = () => {
    return name.trim() !=='' && lastname.trim() !=='' && employeeNumber !=='' && password.trim() !==''
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if(password.length <= 6){
      toast.error('La contrasena es muy corta, debe ser mayor de 6 caracteres')
    }

    try{
      const url = '/employee'
      const {data} = await clientAxios.post(url, {name, lastname, employeeNumber, password})
      toast.success("Usuario registrado corectamente")
      setAuth(data)

      console.log(data)
      navigate('/')

    }catch(error){
      toast.error(error.response.data.msg)
      //console.log(error.response)
    }
  }


  return (
    <>
      <div>
        <form className='flex flex-col gap-2 py-10 px-5 shadow bg-gray-50 mx-auto max-w-lg mt-20 rounded-xl'
              onSubmit={handleSubmit}
        >
          <legend className="font-black text-3xl">Registar Usuario</legend>
          <div className='my-2'>
            <label
              className='upprcase text-gray-600 block text-xl font-bold'
            >
              Nombre
              <input
                type="text"
                placeholder='Nombre'
                className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label
              className='upprcase text-gray-600 block text-xl font-bold'
            >
              Apellido
              <input
                type="text"
                placeholder='Apellido'
                className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                value={lastname}
                onChange={e => setLastname(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label
              className='upprcase text-gray-600 block text-xl font-bold'
            >
              Codigo
              <input
                type="text"
                placeholder='Codigo de Registro'
                className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                value={employeeNumber}
                onChange={e => setEmployeeNumber(Number(e.target.value))}
              />
            </label>
          </div>
          <div className='my-2'>
            <label
              className='upprcase text-gray-600 block text-xl font-bold'
            >
              Contraseña
              <input
                type="password"
                placeholder='Tu contraseña'
                className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </label>
          </div>
          <input 
            type="submit"
            value="Iniciar Sesion"
            className="bg-cyan-500 hover:bg-cyan-600 text-sm uppercase p-2 font-black text-white cursor-pointer disabled:opacity-10"
            disabled={!isValide()}

          />
        </form>
        <nav className='mt-10 lg:flx lg:justify-between'>
          <Link 
            className="block text-center my-5 text-gray-500"
            to="/forget-password">Olvide mi contraseña</Link>
          <Link 
            className="block text-center my-5 text-gray-500"
            to="/">Inicia Sesion</Link>
        </nav>
      </div>
    </>
  )
}

export default Register
