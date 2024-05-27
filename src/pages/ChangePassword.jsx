import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import clientAxios from "../config/axios"

const ChangePassword = () => {
  const [employeeNumber, setEmployeeNumber] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const navigate = useNavigate()

  const isValide = () => {
    return employeeNumber.trim() !== '' && password.trim() !== '' && newPassword.trim() !== ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mover esta línea dentro de la función handleSubmit

    if (password !== newPassword) {
      toast.error('Las contraseñas no son iguales')
      return
    }

    try {
      const { data } = await clientAxios.post('employee/change-Password', { employeeNumber, newPassword })
      console.log(data)

      navigate('/')
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }

  return (
    <>
      <div>
        <form className='flex flex-col gap-2 py-10 px-5 shadow bg-gray-50 mx-auto max-w-lg mt-20 rounded-xl'
          onSubmit={handleSubmit}
        >
          <legend className="font-black text-3xl">Cambiar Contraseña</legend>
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
                onChange={e => setEmployeeNumber(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label
              className='upprcase text-gray-600 block text-xl font-bold'
            >
              Nueva contraseña
              <input
                type="password"
                placeholder='Tu contraseña'
                className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label
              className='upprcase text-gray-600 block text-xl font-bold'
            >
              Confirmar contraseña
              <input
                type="password"
                placeholder='Tu confirmar contrasena'
                className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
              />
            </label>
          </div>
          <input 
            type="submit"
            value="Guardar nueva contraseña"
            className="bg-cyan-500 hover:bg-cyan-600 text-sm uppercase p-2 font-black text-white cursor-pointer disabled:opacity-10"
            disabled={!isValide()}

          />
        </form>
      </div>
    </>
  )
}

export default ChangePassword