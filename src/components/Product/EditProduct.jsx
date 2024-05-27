import useProduct from "../../hooks/useProduct";
import ProductEdi from "./ProductEdi";

const EditProduct = () => {

    const { products } = useProduct()

    return (
        <>
           {products.length ? 
            (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de productos existentes</h2>
                    <p className="text-xl mt-5 mb-10 text-center"><span>Consulta el producto que quieres ajustar</span></p>
                    {products.map(product => (
                        <ProductEdi
                            key={product._id}
                            product={product}
                        />
                    ))}
                </>
            )
           :
           (
            <>
                <h2 className="font-black text-3xl text-center">No hay productoos para en la consulta</h2>
                <p className="text-xl mt-5 mb-10 text-center"><span>Conuslta el producto a modificar</span></p>
            </>
           )}
        </>
    )
};

export default EditProduct;