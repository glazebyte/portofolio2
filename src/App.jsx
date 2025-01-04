import { useEffect, useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.body.classList.add(
      'h-dvh'
    )
  }, [])

  return (
    <>
      <Header />
    </>
  )
}

export default App
