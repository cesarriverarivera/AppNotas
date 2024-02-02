import { NotasContext } from "../context/NotasContext";
import { useContext } from "react";


export const useNotasContext = () => {
    const context = useContext(NotasContext)
    if(!context) {
        throw new Error('useNotasContext debe estar dentro del proveedor NotasProvider')
    }
    return context
}