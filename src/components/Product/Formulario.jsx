import { useState, useEffect } from "react";
import useProduct from "../../hooks/useProduct";
import { toast } from "react-toastify";


const Formulario = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [activeIngredient, setActiveIngredient] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    const [item, setItem] = useState('')
    const [upc, setUpc] = useState('')
    const [categorId, setCategorId] = useState('')
    const [id, setId] = useState(null)

    const { guardarProduct, product } = useProduct()

    useEffect(() => {
        if(product?.name) {
            setName(product.name)
            setDescription(product.description)
            setActiveIngredient(product.activeIngredient)
            setImageUrl(product.imageUrl)
            setItem(product.item)
            setUpc(product.upc)
            setCategorId(product.categorId.categorId)
            setId(product._id)
        }

    }, [product])

    const handelSubmit = (e) => {
        e.preventDefault();
      
        if ([name, description, activeIngredient, imageUrl,  item, upc, categorId].includes('')) {
          console.log('Todos los campos son obligarorios');
          return;
        }
      
        guardarProduct({ name, description, activeIngredient, imageUrl,  item, upc, categorId, id });
        setName('')
        setDescription('')
        setActiveIngredient('')
        setImageUrl('')
        setItem('')
        setUpc('')
        setCategorId('')
        setId('')
      };

      const isValid = () => {
        return name.trim() !== '' && description.trim() !== '' && activeIngredient.trim() !== '' && imageUrl.trim() !== '' ;
      };
      
      

    return(
        <>
        <p className="text-center mb-10 font-black text-3xl">
            Crea un nuevo producto o edita su informacion
        </p>

        <form 
            className="bg-gray-50 py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
            onSubmit={handelSubmit}
            >

            <div className="mb-5">
            <label 
                className="upprcase text-gray-600 block text-xl font-bold"
                >
                    Nombre del Producto</label>
            <input
                type="text"
                placeholder="Nombre del Producto"
                className="borde-2 w-full p-2 mt-2 placeholder:-gray-400 rounded-md"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            </div>
            <div className="mb-5">
            <label 
                className="text-gray-700 uppercase font-bold"
                >
                    Descriptcion del Producto</label>
            <input
                type="text"
                placeholder="Description del Producto"
                className="borde-2 w-full p-2 mt-2 placeholder:-gray-400 rounded-md"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            </div>
            <div className="mb-5">
            <label 
                className="text-gray-700 uppercase font-bold"
                >
                    Principio Activo del Producto</label>
            <input
                type="text"
                placeholder="Principio Activo del producto"
                className="borde-2 w-full p-2 mt-2 placeholder:-gray-400 rounded-md"
                value={activeIngredient}
                onChange={e => setActiveIngredient(e.target.value)}
            />
            </div>
            <div className="mb-5">
            <label 
                className="text-gray-700 uppercase font-bold"
                >
                    Imagen del Producto</label>
            <input
                type="text"
                placeholder="Estado del producto"
                className="borde-2 w-full p-2 mt-2 placeholder:-gray-400 rounded-md"
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
            />
            </div>
            <div className="mb-5">
            <label 
                className="text-gray-700 uppercase font-bold"
                >
                    ITEM / SKU del Producto</label>
            <input
                type="text"
                placeholder="Item del producto"
                className="borde-2 w-full p-2 mt-2 placeholder:-gray-400 rounded-md"
                value={item}
                onChange={e => setItem(e.target.value)}
            />
            </div>
            <div className="mb-5">
            <label 
                className="text-gray-700 uppercase font-bold"
                >
                    UPC del Producto</label>
            <input
                type="text"
                placeholder="UPC del producto"
                className="borde-2 w-full p-2 mt-2 placeholder:-gray-400 rounded-md"
                value={upc}
                onChange={e => setUpc(e.target.value)}

            />
            </div>
            <div className="mb-5">
            <label 
                className="text-gray-700 uppercase font-bold"
                >
                    Categoria del Producto</label>
            <input
                type="text"
                placeholder="Categoria del producto"
                className="borde-2 w-full p-2 mt-2 placeholder:-gray-400 rounded-md"
                value={categorId}
                onChange={e => setCategorId(e.target.value)}
            />
            </div>
            <input 
            type="submit"
            value={id ? 'Guardar Cambios' : 'Crear Producto'}
            className="bg-cyan-500 w-full hover:bg-cyan-600 text-sm uppercase p-2 font-black text-white cursor-pointer disabled:opacity-10"
            disabled={!isValid()}           
          />
        </form>
        </>
    )
}

export default Formulario;