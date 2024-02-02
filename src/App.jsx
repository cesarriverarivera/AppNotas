import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NotasProvider } from './context/NotasContext'
import Navbar from './components/Navbar/Navbar'
import NoteCreator from './components/NoteCreator/NoteCreator'
import NoteLists from './components/NoteLists/NoteLists'

function App() {
  

  return (
  
      <NotasProvider>
        <Navbar />
        <NoteCreator />
        <NoteLists />
      </NotasProvider>
    
  )
}

export default App
