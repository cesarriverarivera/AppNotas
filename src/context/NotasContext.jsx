import { createContext,useState } from "react";

const NotasContext = createContext()

function NotasProvider ({children}) {
    const [dataForm, setDataForm] = useState()


      
    const loadData = (data) => {
            const storedData = JSON.parse(localStorage.getItem('notas')) || [];
            storedData.push(data);
            localStorage.setItem('notas', JSON.stringify(storedData))
            setDataForm({...dataForm, storedData})
    }

    const deleteNota = (elemento) => {
        const storedData = JSON.parse(localStorage.getItem('notas')) || []
        console.log(elemento)
        const notaEliminar = storedData.findIndex(e => e.cuerpoNota === elemento)
        console.log(notaEliminar)
        if (notaEliminar !== -1) {
            storedData.splice(notaEliminar, 1)
        }
        console.log(storedData)
        localStorage.setItem('notas', JSON.stringify(storedData))
        setDataForm({...dataForm, storedData})
    }


      const data = {
        dataForm,
        loadData,
        deleteNota
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