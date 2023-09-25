import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [plus, setPlus] = useState(0)

  return (
    <>
      <div>
        Meu Projeto para incremento e decremento
      </div>
      <h1>Meu Projeto</h1>
      <div className="card">
        <label >count is {count}</label>
        </div>
        <div>
        <button onClick={() => setCount((count) => count + 1)}>
          <p>incremento</p>
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          <p>decremento</p>
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
