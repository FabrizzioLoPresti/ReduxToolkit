import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from '../features/tasks/taskSlice'

const Task = ({task}) => {
  const dispatch = useDispatch()
  const { id, title, description, completed } = task

  const handleEliminar = id => {
    dispatch(deleteTask(id))
  }
  return (
    <div className='border shadow-sm p-3 my-2'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{completed ? 'Completa' : 'Incompleta'}</p>
      <div className='space-x-3'>
        <Link
          to={`/edit/${id}`}
          className='px-5 py-2 bg-blue-600 hover:bg-blue-800 text-white'
        >
          Editar
        </Link>
        <button
          onClick={() => handleEliminar(id)}
          className='px-5 py-2 bg-red-600 hover:bg-red-800 text-white'
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Task