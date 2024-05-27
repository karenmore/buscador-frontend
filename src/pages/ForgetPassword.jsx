import { useState } from "react";
import clientAxios from "../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {

    
  const [employeeNumber, setEmployeeNumber] = useState('')

  const navigate =  useNavigate()

  const isValide = () => {
    return employeeNumber.trim() !=='' 
  }


  const handleSubmit = async e => {
    e.preventDefault();

    try{
        const { data } = await clientAxios.post('/employee/forget-password', {employeeNumber})
        console.log(data)
  
        navigate('/change-password')

    }catch(error){
        toast.error(error.response.data.msg)
    }
  }

    return (
        <>
      <div>
        <form className='flex flex-col gap-2 py-10 px-5 shadow bg-gray-50 mx-auto max-w-lg mt-20 rounded-xl'
              onSubmit={handleSubmit}
        >
          <legend className="font-black text-3xl">Olvide Contraseña</legend>
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
          <input 
            type="submit"
            value="Resetear contraseña"
            className="bg-cyan-500 hover:bg-cyan-600 text-sm uppercase p-2 font-black text-white cursor-pointer disabled:opacity-10"
            disabled={!isValide()}

          />
        </form>
      </div>
    </>
    )
};

export default ForgetPassword;