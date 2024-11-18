type Props = {
    tarea: string,
    borrarTarea: () => void
}

const Tarea = ({tarea, borrarTarea}: Props) => {
  return (
    <div className="task">
        <span>{tarea}</span>
        <button onClick={borrarTarea}>Borrar</button>
    </div>
  )
}

export default Tarea