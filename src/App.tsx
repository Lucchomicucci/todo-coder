import { useState } from 'react'
import './App.css'
import Input from './components/input/input'
import { ITarea } from './interfaces/interfaces'
import Tarea from './components/tarea/tarea'

function App() {


  // 1) Al cambiar el valor del checkbox editar el objeto de esa tarea y cambiar la propiedad "completada"
  // 2) Agregar en <Tarea> un boton para eliminar la tarea
  
  // const [listaDeTareas, setListaDeTareas] = useState<Tarea[]>([])
  const [listaDeTareas, setListaDeTareas] = useState<Array<ITarea>>([])

  const agregarTarea = (titulo: string) => {
    
    const nuevaTarea: ITarea = {
      titulo,
      completada: false
    }

    setListaDeTareas([...listaDeTareas, nuevaTarea])
  }

  return (
    <>
      <Input agregarTarea={agregarTarea}/>
      {listaDeTareas.map((tarea: ITarea, index: number) => <Tarea key={index} info={tarea}/>)}
    </>
  )
}

export default App
