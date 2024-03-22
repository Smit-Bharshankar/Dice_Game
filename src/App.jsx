import styled from 'styled-components'
import './App.css'
import Home from './Components/Home'
import Gameplay from './Components/Gameplay'
import { useState } from 'react'

function App() {
  const [isGameStarted , setisGameStarted] = useState(false);

  const toggleGameplay = () => {
    setisGameStarted((prev) => !prev);
  }

  return (
   <>
   {
   isGameStarted ? <Home toggle={toggleGameplay}/> : <Gameplay toggle={toggleGameplay}/>  
  }
   </>
  )
}

export default App
