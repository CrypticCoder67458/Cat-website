import React from 'react'
import { Navbar } from './components/Navbar'
import './styles.css'
import { WelcomeCard } from './components/WelcomeCard'

function App() {

  return (
    <div className='app'>
      <Navbar/>
      <WelcomeCard/>
    </div>
  )
}

export default App
