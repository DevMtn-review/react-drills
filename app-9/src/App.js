import React from 'react'
import './App.css'
import Routes from './Routes'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className='app-9'>
      <nav className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/details'>Details</Link>
      </nav>
      {Routes}
    </div>
  )
}
