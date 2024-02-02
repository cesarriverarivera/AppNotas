import { useEffect, useState } from "react";
import { useNotasContext } from "../../hooks/useNotasContext";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './NoteLists.css'

const NoteLists = () => {

    const [data, setData] = useState([])
    const { dataForm, deleteNota } = useNotasContext()

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('notas')) || [];
        setData(storedData)
    }, [dataForm])

    console.log(data)
    return (
        <>
            {
                data.map((ele, index) => {
                    return (
                      
                      <Card className="container cards mt-3 mb-1" key={index}>
                            <Card.Body>{ele.cuerpoNota}</Card.Body>
                            <Button className="btn-borrar" onClick={() => deleteNota(ele.cuerpoNota)} size="sm" variant="danger">Borrar</Button>{' '}
                        </Card>
                        
                    
                        
                    )
                })
            }
        </>
    )
}

export default NoteLists