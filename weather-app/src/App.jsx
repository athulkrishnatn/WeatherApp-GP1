import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <div className="container">
      <div className="heading text-4xl font-semibold">Weather App</div>
     </div>
    </>
  )
}

export default App
