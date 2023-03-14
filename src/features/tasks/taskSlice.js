import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Task 1 Description',
    completed: false
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Task 2 Description',
    completed: false
  }
]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE,
  reducers: {
    addTask: (state, action) => {
      // console.log( state, action )
      // state.push( action.payload )
      state = [ ...state, action.payload ]
      return state
    },
    deleteTask: (state, action) => {
      state = state.filter(task => task.id !== action.payload)
      return state
    },
    updateTask: (state, action) => {
      const { id, title, description } = action.payload
      // state = state.map(task => task.id === id ? action.payload : task)
      const taskFound = state.find(task => task.id === id)
      if(taskFound) {
        taskFound.title = title
        taskFound.description = description
      }
      return state
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, updateTask } = taskSlice.actions

export default taskSlice.reducer