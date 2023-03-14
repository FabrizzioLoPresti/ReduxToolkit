import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskEdit from './components/TaskEdit'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/create' element={<TaskForm />} />
          <Route path='/edit/:id' element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App