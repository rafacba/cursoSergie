import { useState } from "react";
import ListaTareas from "./ListaTareas";

const TodoApp = () => {

  const [nuevaTarea, setNuevaTarea] = useState<string>('')
  const [listaTareas, setListaTareas] = useState<string[]>([])

  const handleAddTask = () => {
    if (nuevaTarea.trim() === '') return
    setListaTareas(listaAnterior => [...listaAnterior, nuevaTarea])
    setNuevaTarea('')
  }

  const handleBorrarTarea = (index: number) => {
    setListaTareas(misTareas => misTareas.filter((_,i)=> i !== index))
  } 

  return (
    <div>
        <h1>Listado de Tareas</h1>
        <div>
            <input 
            type="text" 
            placeholder="Ingrese una tarea" 
            onChange={(e) => {setNuevaTarea(e.target.value)}}
            value={nuevaTarea}
            />
            <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
        <ListaTareas
            listaTareas={listaTareas}
            borrarTarea={handleBorrarTarea}
        />
    </div>
  )
}

export default TodoApp;
