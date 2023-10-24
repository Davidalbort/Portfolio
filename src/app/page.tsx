'use client'
import { Main } from '@/components/main/Main'
import { Sidebar } from '@/components/sidebar/Sidebar'
import '@/styles/pages/home.scss'
import { useEffect, useState } from 'react'

export default function Home() {
  const [infoPageHome, setInfoPageHome] = useState<HTMLElement | null>()
  useEffect(() => {
    const pageHome = document.getElementById('home')
    setInfoPageHome(pageHome)
  }, [])
  return (
    <div
      id="home"
      onMouseMove={(event) => {
        const pageHome = infoPageHome
        const { screenX, screenY } = event.nativeEvent
        const styleLight = `radial-gradient(600px at ${screenX}px ${screenY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        if (pageHome) {
          pageHome.style.background = styleLight
        }
      }}
    >
      <Sidebar />
      <Main />
    </div>
  )
}
