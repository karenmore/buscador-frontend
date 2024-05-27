import { useState, useEffect, createContext } from "react"; 
import clientAxios from "../config/axios";
import { toast } from "react-toastify";

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [loading, setLoading ] = useState(true)
    const [ auth, setAuth] = useState({})

    useEffect(() => {
        const authenticateUser = async () => {
            const token = localStorage.getItem('token')
            if(!token) {
                setLoading(false)
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try{
                const {data} = await clientAxios('/employee/profile', config)

                setAuth(data)
            }catch(error){
                toast.error(error.response.data.msg)
                setAuth({})
            }
            setLoading(false)
        }
        authenticateUser()
    }, [])

    const signOff = () => {
        localStorage.removeItem('token')
        setAuth({})
    }


    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                loading,
                signOff
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext