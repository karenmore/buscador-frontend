import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {

    const { signOff, auth } = useAuth()

    return (
        <header className="py-10 bg-cyan-500">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">

            <Link to="/product" className="font-bold text-3xl text-cyan-200 text-center" >Buscador de {' '} <span className="text-white font-black">Medicamentos</span> </Link>
                       
                <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">

                    {auth?.role === 1 ? <Link to="/product/admin" className="text-white text-sm uppercase font-bold" >Admin
                    </Link> : ''}

                    <button
                        type="button"
                        className="text-white text-sm uppercase font-bold"
                        onClick={signOff}
                    >Cerrar Sesion
                    </button>
                </nav>

            </div>

        </header>
    )
}

export default Header;