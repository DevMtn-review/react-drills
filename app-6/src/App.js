import React, { useState } from 'react'
import TodoList from './TodoList'
import './App.css'

export default function App() {
  const [entry, setEntry] = useState('');
  const [tasks, setTasks] = useState([]);
  const addToTasks = newEntry => {
    setTasks([...tasks, entry]);
    setEntry('');
  }
  return (
    <div className='app-6'>
      <input onChange={e => {setEntry(e.target.value)}} placeholder='Enter new task...' value={entry}/>
      <button onClick={addToTasks}>Add</button>
      <TodoList tasks={tasks}/>
    </div>
  )
}
