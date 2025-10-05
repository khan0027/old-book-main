import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login&Signup/Login'
import Signup from './components/Login&Signup/Signup'
import MainContent from './components/Main/MainContent'

function App() {

  return (
    <div className='absolute'  >
      <div className='sticky top-4 left-5 z-50' >
          <Navbar />
      </div>
      <div className='relative bottom-160 left-0 z-0' >
        <MainContent />
      </div>
      
    </div>
  )
}

export default App
