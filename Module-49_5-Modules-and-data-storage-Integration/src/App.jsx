import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cosmetics from './components/Cosmetics/Cosmetics'
import Shoes from './components/Shoes/Shoes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cosmetics/>
      <Shoes/>
    </div>
  )
}

export default App
