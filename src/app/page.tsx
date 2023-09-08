import { Main } from '@/components/main/Main'
import { Sidebar } from '@/components/sidebar/Sidebar'
import '@/styles/pages/home.scss'

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Main />
    </div>
  )
}
