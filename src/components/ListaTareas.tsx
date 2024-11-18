import Tarea from "./Tarea";


type Props = {
    listaTareas: string[],
    borrarTarea: (index: number) => void
}

const ListaTareas = (props: Props) => {

  const {listaTareas, borrarTarea} = props;

  return (
    <div className="taskList">
        {listaTareas.map((tarea,index)=> (
            <Tarea 
            key={index} 
            tarea={tarea} 
            borrarTarea={() => borrarTarea(index)}
            />
        )
        )}
    </div>
  )
}

export default ListaTareas; 