import { createContext,useEffect,useState } from "react";

const NotasContext = createContext()

function NotasProvider ({children}) {
    const [dataForm, setDataForm] = useState()


    useEffect(() => {
        // Actualizar el localStorage cada vez que dataForm cambie
        const storedData = JSON.parse(localStorage.getItem('notas')) || [];
        storedData.push(dataForm)
        localStorage.setItem('notas', JSON.stringify(storedData));
      }, [dataForm]);
      

      const handleChange = (data) => {
        setDataForm({...dataForm,
            data})
      };

      const data = {
        dataForm,
        handleChange
      }

      return(
        <NotasContext.Provider value={data}>
            {children}
        </NotasContext.Provider>
      )
    
}

export {
    NotasProvider,
    NotasContext
}