import { useContext } from "react";
import EditProductContext from "../context/EditProductProvider";

const useProduct = () => {
    return useContext(EditProductContext)
}

export default useProduct;