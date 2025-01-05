import { useEffect, useState } from 'react'
import Header from './components/Header'
import './App.css'
import HomeSection from './components/Home'
import About from './components/About'
import Divider from './components/Divider'

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
      <main className='flex flex-col items-center'>
        <HomeSection/>
        <Divider/>
        <About/>
      </main>
    </>
  )
}

export default App
