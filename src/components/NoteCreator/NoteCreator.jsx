import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNotasContext } from '../../hooks/useNotasContext';
import { useForm } from "react-hook-form"
import { useState, useEffect } from 'react';

const NoteCreator = () => {

    const {register, handleSubmit, reset} = useForm()
    // const {dataForm, handleChange} = useNotasContext()
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

    
  return (
    <>
        <Form onSubmit={handleSubmit( (data) =>{
            handleChange(data)
            reset()
        } )}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control {...register("cuerpo de nota")} type="text" placeholder="Algo para recordar" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Crear
      </Button>
    </Form>
    </>
  )
}

export default NoteCreator