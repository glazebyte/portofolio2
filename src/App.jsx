import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import HomeSection from './components/Home'
import About from './components/About'
import Divider from './components/Divider'
import ProjectsSection from './components/Project'
import SkillSection from './components/Skill'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.body.classList.add(
      'h-dvh'
    )
  }, [])

  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center'>
        <HomeSection/>
        <Divider/>
        <About/>
        {/* <Divider/> */}
        <ProjectsSection/>
        <SkillSection/>
      </main>
    </>
  )
}

export default App
