import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form"
import { useNotasContext } from '../../hooks/useNotasContext'
import './NoteCreator.css'


const NoteCreator = () => {

    const {register, handleSubmit, reset} = useForm()
    const {loadData} = useNotasContext()


  return (
    <>
        <Form className='container gx-1 formulario' onSubmit={handleSubmit( (data) =>{
            if(data.cuerpoNota.trim() !== "") {
              loadData(data) 
            }
            reset()
        } )}>
      <Form.Group className="mb-3 inputForm" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control className='input' {...register("cuerpoNota")} type="text" placeholder="Algo para recordar" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Crear
      </Button>
    </Form>
    </>
  )
}

export default NoteCreator