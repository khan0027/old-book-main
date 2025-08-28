import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login&Signup/Login'
import Signup from './components/Login&Signup/Signup'

function App() {

  return (
    <div className='bg-black flex flex-col gap-5 h-full '  >
      <Navbar />
      <Login />
      {/* <Signup/> */}
    </div>
  )
}

export default App
