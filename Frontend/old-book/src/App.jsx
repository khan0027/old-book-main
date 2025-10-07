import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login&Signup/Login'
import Signup from './components/Login&Signup/Signup'
import MainContent from './components/Main/MainContent'

function App() {

  return (
    <div className='bg-gray-100 h-fill flex flex-col justify-between items-center  '  >
      <div className=' fixed top-0 left-0 z-50' >
          <Navbar />
      </div>
      <div  >
        <MainContent/>
      </div>
      <div>
        
      </div>
      
    </div>
  )
}

export default App
