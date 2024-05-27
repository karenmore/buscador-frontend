import Formulario from "../components/Product/Formulario";
import EditProduct from "../components/Product/EditProduct";
import { useState } from "react";

const Admin = () => {

    const [disaibleFrom, setDisaibleFrom] = useState(false)

    return (
        <div className="flex flex-col md:flex-row">
            <button
                type="button"
                className="bg-cyan-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden"
                onClick={() => setDisaibleFrom(!disaibleFrom)}
            >
                {disaibleFrom ? 'Ocultar Formulario' : 'Mostrar Formulario'}
            </button>
            <div className={`${disaibleFrom ? 'block' : 'hidden'} md:block md:w-1/2 lg:w-2/5`}>
                <Formulario/>
            </div>

            <div className="md:w-1/2 lg:w-3/5">
                <EditProduct/>
            </div>
        </div>
    )
};

export default Admin;