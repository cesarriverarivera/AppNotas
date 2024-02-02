import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import NoteCreator from './components/NoteCreator/NoteCreator'
import NoteLists from './components/NoteLists/NoteLists'

function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <NoteCreator />
        <NoteLists />
      </div>
    </>
  )
}

export default App
