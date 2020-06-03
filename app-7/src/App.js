import React, { useState } from 'react'
import NewTask from './NewTask'
import List from './List'
import './App.css'

export default function App() {
  const [list, setList] = useState([]);
  return (
    <div className='app-7'>
      <NewTask list={list} setList={setList}/>
      <List list={list}/>
    </div>
  )
}
