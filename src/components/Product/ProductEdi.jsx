import React from "react";
import useProduct from "../../hooks/useProduct";

const ProductEdi = ({product}) => {

    const { updateProduct, deleteProduct } = useProduct()


    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-cyan-700">Nombre: {''}
                <span className="font-normal normal-case text-black my-2">{product.name}</span>
            </p>
            <p className="font-bold uppercase text-cyan-700">Descripcion: {''}
                <span className="font-normal normal-case text-black my-2">{product.description}</span>
            </p>
            <p className="font-bold uppercase text-cyan-700">Principio Activo: {''}
                <span className="font-normal normal-case text-black my-2">{product.activeIngredient}</span>
            </p>
            <p className="font-bold uppercase text-cyan-700">Imagen: {''}
                <span className="font-normal normal-case text-black my-2">{product.imageUrl}</span>
            </p>
            <p className="font-bold uppercase text-cyan-700">Estado: {''}
                <span className="font-normal normal-case text-black my-2">{product.active}</span>
            </p>
            <p className="font-bold uppercase text-cyan-700">item: {''}
                <span className="font-normal normal-case text-black my-2">{product.item}</span>
            </p>
            <p className="font-bold uppercase text-cyan-700">upc: {''}
                <span className="font-normal normal-case text-black my-2">{product.upc}</span>
            </p>
            <p className="font-bold uppercase text-cyan-700">Categoria: {''}
                <span className="font-normal normal-case text-black my-2">{product.categorId.categorId}</span>
            </p>
            <div className="flex justify-between my-5">
                <button
                    type="button"
                    className="py-2 px-10 bg-cyan-500 hover:bg-cyan-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => updateProduct(product)}
                >Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => deleteProduct(product._id)}
                >Eliminar
                </button>
            </div>
        </div>
    )

}

export default ProductEdi