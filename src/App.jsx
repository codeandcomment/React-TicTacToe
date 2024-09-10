import { useState } from 'react'
import './App.css'
import GamePageContainer from './pages/GamePageContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='font-bold text-2xl text-center mb-5'>Tic Tac Toe </h1>
      <GamePageContainer />
    </>
  )
}

export default App
