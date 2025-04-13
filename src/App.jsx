import { useState } from 'react'
import './App.css'
import Landing from "./assets/landing_1.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Landing/>
    </>
  )
}

export default App
