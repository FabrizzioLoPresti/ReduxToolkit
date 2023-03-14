import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Task from './Task'

const TaskList = () => {
  const tasksState = useSelector(state => state.task)
  console.log( tasksState )
  return (
    <div>
      <header className='flex justify-between w-1/2 items-center mx-auto my-2'>
        <h2 className='text-center text-xl font-bold'>Tareas</h2>
        <Link to={'/create'} className='px-3 py-1 bg-green-400'>
          Crear Tarea
        </Link>
      </header>
      {tasksState?.length ? (
        tasksState.map(task => (
          <Task key={task.id} task={task} />
        ))
      ) : (
        <p className='text-center text-red-500'>No hay tareas</p>
      )}
    </div>
  )
}

export default TaskList