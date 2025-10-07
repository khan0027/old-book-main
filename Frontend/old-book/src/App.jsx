import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login&Signup/Login'
import Signup from './components/Login&Signup/Signup'
import MainContent from './components/Main/MainContent'
import Cards from './components/Card/CArds'

function App() {

  return (
    <div className='bg-gray-100 h-fill flex flex-col justify-between items-center  '  >
      <div className='w-52 fixed top-0 left-0 z-50' >
          <Navbar />
      </div>
      <div className='flex flex-col justify-center px-5 w-full items-center' >
        <MainContent/>
        <Cards/>
      </div>    
    </div>
  )
}

export default App
