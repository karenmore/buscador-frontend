import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/axios";
import { toast } from "react-toastify";

const EditProductContext = createContext()

export const EditProductProvider = ({children}) => {


    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})

    useEffect(() => {
        const getProduct = async () => {

            try{
                const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clientAxios('/products')
                setProducts(data)

            }catch(error) {
                console.log(error)
            }
        }
        getProduct()
    }, [])

    const guardarProduct = async (product) => {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                "content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        if(product.id){
            try{
                const { data } = await clientAxios.put(`/products/${product.id}`, product, config)

                const productUpdat = products.map(productState => productState._id === data._id ? data : productState)
                setProducts(productUpdat)
                console.log(data)
            }catch(error){
                console.log(error)
            }
        }else {

            try{
                const { data } = await clientAxios.post('/products', product)
    
                const { active, createdAt, updatedAt, 
                    __v, ...productCreated } = data 
    
                setProducts([productCreated, ...products])
    
                toast.success(data.response.msg)
            }catch(error){
                console.log(error.response.data.msg)
            }
        }
    }

    const updateProduct = (product) => {
        setProduct(product)
    } 

    const deleteProduct = async id => {
        const confirma = confirm('Confirma que deseas eliminar el producto?')
        if(confirma){
            try{
                const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clientAxios.delete(`/products/${id}`, config)
                const updateProdu = products.filter(productstate => productstate._id !== id)

                setProducts(updateProdu)

            }catch(error) {
                console.log(error)
            }
        }
    }


    return (
        <EditProductContext.Provider
            value={{
                products,
                guardarProduct,
                updateProduct,
                product,
                deleteProduct
            }}
        >
            {children}
        </EditProductContext.Provider>
    )

}

export default EditProductContext;
