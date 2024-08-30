import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './components/Header'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary>
      <Headers/>
      <h1>hello</h1>
    </ErrorBoundary>
  )
}

export default App
