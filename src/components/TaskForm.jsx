import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { addTask, updateTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from 'uuid'

const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  const tasks = useSelector(state => state.task)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const task = tasks.find(taskState => taskState.id === id)
    if(task) return setTask( task )
  }, [])

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(id) {
      dispatch(updateTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id: uuid()
      }))
    }
    navigate('/')
  }
  
  return (
    <form 
      onSubmit={handleSubmit}
      className='w-1/2 flex flex-col gap-2 mb-6'
    >
      <div
        className="flex flex-col"
      >
        <label htmlFor="title">Titulo Tarea:</label>
        <input 
          type="text" 
          name="title" 
          id="title" 
          placeholder="Titulo de la Tarea" 
          value={task.title}
          onChange={handleChange}
        />
      </div>
      <div
        className="flex flex-col"
      >
        <label htmlFor="description">Descripcion:</label>
        <textarea 
          name="description" 
          id="description" 
          placeholder="Descripcion"
          value={task.description}
          onChange={handleChange}
        >
        </textarea>
      </div>
      <input 
        type="submit" 
        value="Guardar" 
        className='px-5 py-2 bg-blue-600 hover:bg-blue-800 text-white'
      />
    </form>
  )
}

export default TaskForm