import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form"
import { useNotasContext } from '../../hooks/useNotasContext'


const NoteCreator = () => {

    const {register, handleSubmit, reset} = useForm()
    const {loadData} = useNotasContext()


  return (
    <>
        <Form onSubmit={handleSubmit( (data) =>{
            console.log(data)
            loadData(data)
            reset()
        } )}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control {...register("cuerpoNota")} type="text" placeholder="Algo para recordar" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Crear
      </Button>
    </Form>
    </>
  )
}

export default NoteCreator